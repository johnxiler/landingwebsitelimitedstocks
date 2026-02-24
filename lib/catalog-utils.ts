/**
 * SHARED CATALOG UTILITIES
 * 
 * This file centralizes the logic for processing our Google Sheets data.
 * By keeping it here, both the full catalog and the random "get-link" picker
 * stay in sync and are easier to maintain.
 */

export interface Product {
    name: string;
    image: string;
    url: string;
    platform: string;
    color: string;
    category: string;
}

// Next.js specific fetch options for revalidation/caching
export type FetchOptions = RequestInit & { next?: { revalidate?: number } };

// This is your Google Sheet's unique public ID (from the "Publish to Web" link)
export const PUB_ID = "2PACX-1vSTY8rmhT4Z6MICdXyJKXx8zoSP2aBuZn2YyQb3und83YJeK2LuhyjKOInalPB-3w1_oAs8bCAYYJ6H";

// The core URL for fetching CSV data. We append the 'gid' (Sheet ID) to this.
export const BASE_URL = `https://docs.google.com/spreadsheets/d/e/${PUB_ID}/pub?output=csv&gid=`;

// Our supported platforms and their assigned GIDs from your spreadsheet
export const PLATFORMS = [
    { name: "Shopee", gid: "0", color: "#ee4d2d" },
    { name: "TikTok", gid: "77091933", color: "#000000" },
    { name: "Lazada", gid: "1012479694", color: "#101566" },
] as const;

/**
 * Ensures Shopee links have your affiliate tracking codes.
 * If the link is already tracked, it leaves it alone.
 */
export function formatShopeeLink(url: string): string {
    if (!url.includes('shopee.ph/product/')) return url;
    if (url.includes('mmp_pid=')) return url; // Already has tracking

    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}channel_code=MyCollection&mmp_pid=an_13355030001&uls_trackid=550obo85003f`;
}

/**
 * Cleans up image URLs and handles special cases like Google Drive links.
 * Returns a fallback SVG if the image is missing entirely.
 */
export function formatImageUrl(url: string): string {
    const cleaned = (url || '').replace(/"/g, '').trim();

    // Fallback: If no image is provided, return a "No Image" placeholder SVG
    if (!cleaned) return 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect fill="%23f3f4f6" width="200" height="200"/><text fill="%239ca3af" font-size="14" text-anchor="middle" x="100" y="105">No Image</text></svg>';

    // Special Case: Google Drive links don't work directly as images. 
    // We convert them to a "direct download" format that works in <img> tags.
    if (cleaned.includes('drive.google.com') || cleaned.includes('docs.google.com/file/d/')) {
        let fileId = '';
        const match = cleaned.match(/\/d\/([^\/]+)/) || cleaned.match(/id=([^\&]+)/);
        if (match) fileId = match[1];
        if (fileId) return `https://drive.google.com/uc?id=${fileId}`;
    }

    return cleaned;
}

/**
 * A robust CSV row parser.
 * It's smarter than row.split(',') because it handles commas inside quotes.
 * Example: "Product Name, with comma", price, category
 */
export function parseCSVRow(row: string): string[] {
    const result: string[] = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < row.length; i++) {
        const char = row[i];
        if (char === '"') {
            inQuotes = !inQuotes; // Toggle the quote state
        } else if (char === ',' && !inQuotes) {
            // We found a comma that is NOT inside quotes, so it's a new column
            result.push(current.trim());
            current = '';
        } else {
            current += char;
        }
    }
    result.push(current.trim()); // Push the final column

    return result;
}
