import { NextResponse } from 'next/server';

interface Product {
    name: string;
    image: string;
    url: string;
    platform: string;
    color: string;
    category: string;
}

const PUB_ID = "2PACX-1vSTY8rmhT4Z6MICdXyJKXx8zoSP2aBuZn2YyQb3und83YJeK2LuhyjKOInalPB-3w1_oAs8bCAYYJ6H";
const BASE_URL = `https://docs.google.com/spreadsheets/d/e/${PUB_ID}/pub?output=csv&gid=`;

const PLATFORMS = [
    { name: "Shopee", gid: "0", color: "#ee4d2d" },
    { name: "TikTok", gid: "77091933", color: "#000000" },
    { name: "Lazada", gid: "1012479694", color: "#101566" },
];

function formatShopeeLink(url: string): string {
    if (!url.includes('shopee.ph/product/')) return url;
    if (url.includes('mmp_pid=')) return url;

    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}channel_code=MyCollection&mmp_pid=an_13355030001&uls_trackid=550obo85003f`;
}

function formatImageUrl(url: string): string {
    const cleaned = (url || '').replace(/"/g, '').trim();
    if (!cleaned) return 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect fill="%23f3f4f6" width="200" height="200"/><text fill="%239ca3af" font-size="14" text-anchor="middle" x="100" y="105">No Image</text></svg>';

    // Handle Google Drive links
    if (cleaned.includes('drive.google.com') || cleaned.includes('docs.google.com/file/d/')) {
        let fileId = '';
        const match = cleaned.match(/\/d\/([^\/]+)/) || cleaned.match(/id=([^\&]+)/);
        if (match) fileId = match[1];
        if (fileId) return `https://drive.google.com/uc?id=${fileId}`;
    }
    return cleaned;
}

function parseCSVRow(row: string): string[] {
    const result: string[] = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < row.length; i++) {
        const char = row[i];
        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            result.push(current.trim());
            current = '';
        } else {
            current += char;
        }
    }
    result.push(current.trim());

    return result;
}

export async function GET() {
    try {
        const results = await Promise.allSettled(
            PLATFORMS.map(async (platform) => {
                const res = await fetch(`${BASE_URL}${platform.gid}`, {
                    next: { revalidate: 300 },
                } as any);

                if (!res.ok) throw new Error(`Failed to fetch ${platform.name}`);

                const csvText = await res.text();
                const rows = csvText.split(/\r?\n/).slice(1).filter(r => r.trim() !== '');

                return rows.map((row): Product => {
                    const cols = parseCSVRow(row);
                    const rawUrl = cols[2] || '#';
                    return {
                        name: cols[0] || 'Unknown Product',
                        image: formatImageUrl(cols[1] || ''),
                        url: platform.name === 'Shopee' ? formatShopeeLink(rawUrl) : rawUrl,
                        platform: platform.name,
                        color: platform.color,
                        category: cols[3] || 'Uncategorized',
                    };
                });
            })
        );

        const products: Product[] = [];
        for (const result of results) {
            if (result.status === 'fulfilled') {
                products.push(...result.value);
            }
        }

        return NextResponse.json(products);
    } catch (error) {
        console.error("Catalog fetch error:", error);
        return NextResponse.json({ error: "Failed to load catalog" }, { status: 500 });
    }
}
