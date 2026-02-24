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
        const results = await Promise.allSettled(
            PLATFORMS.map(async (platform) => {
                const res = await fetch(`${BASE_URL}${platform.gid}`, {
                    next: { revalidate: 300 },
                    signal: controller.signal,
                } as FetchOptions);

                if (!res.ok) throw new Error(`HTTP ${res.status}: Failed to fetch ${platform.name}`);

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

        clearTimeout(timeoutId);

        const products: Product[] = [];
        const errors: string[] = [];

        for (const [index, result] of results.entries()) {
            if (result.status === 'fulfilled') {
                products.push(...result.value);
            } else {
                const platformName = PLATFORMS[index].name;
                const errorMsg = result.reason instanceof Error ? result.reason.message : String(result.reason);
                console.error(`Error loading ${platformName}:`, errorMsg);
                errors.push(`${platformName}: ${errorMsg}`);
            }
        }

        if (products.length === 0 && errors.length > 0) {
            return NextResponse.json({
                error: "All data sources failed to load.",
                details: errors
            }, { status: 503 });
        }

        return NextResponse.json(products);
    } catch (error: unknown) {
        clearTimeout(timeoutId);
        const err = error as Error;
        const isTimeout = err.name === 'AbortError';
        console.error("Catalog main fetch error:", isTimeout ? "Request timed out" : err.message);

        return NextResponse.json({
            error: isTimeout ? "Connection timed out" : "Failed to load catalog",
            details: err.message
        }, { status: isTimeout ? 504 : 500 });
    }
}
