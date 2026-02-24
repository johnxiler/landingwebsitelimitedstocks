import { NextResponse } from 'next/server';
import {
    PLATFORMS,
    BASE_URL,
    formatShopeeLink,
    formatImageUrl,
    parseCSVRow,
    type Product,
    type FetchOptions
} from '@/lib/catalog-utils';

export async function GET() {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

    try {
        const selectedPlatform = PLATFORMS[Math.floor(Math.random() * PLATFORMS.length)];

        const response = await fetch(`${BASE_URL}${selectedPlatform.gid}`, {
            next: { revalidate: 60 },
            signal: controller.signal,
        } as FetchOptions);

        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: Failed to reach Google Sheets`);
        }

        const csvText = await response.text();
        const rows = csvText.split(/\r?\n/).slice(1).filter(row => row.trim() !== "");

        if (rows.length === 0) throw new Error("No products found in this tab");

        const randomRow = rows[Math.floor(Math.random() * rows.length)];
        const cols = parseCSVRow(randomRow);

        const rawUrl = cols[2] || '#';
        const product: Product = {
            name: cols[0] || 'Unknown Product',
            image: formatImageUrl(cols[1] || ''),
            url: selectedPlatform.name === 'Shopee' ? formatShopeeLink(rawUrl) : rawUrl,
            platform: selectedPlatform.name,
            color: selectedPlatform.color,
            category: cols[3] || 'Uncategorized'
        };

        return NextResponse.json(product);

    } catch (error: unknown) {
        clearTimeout(timeoutId);
        const err = error as Error;
        const isTimeout = err.name === 'AbortError';
        console.error("Get-Link fetch error:", isTimeout ? "Request timed out" : err.message);

        return NextResponse.json({
            error: isTimeout ? "Connection timed out" : "Failed to load product",
            details: err.message
        }, { status: isTimeout ? 504 : 500 });
    }
}
