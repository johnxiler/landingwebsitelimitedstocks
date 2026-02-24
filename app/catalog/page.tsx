'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Loader2, Tag } from 'lucide-react';

interface Product {
    name: string;
    image: string;
    url: string;
    platform: string;
    color: string;
    category: string;
}

const PLATFORM_FILTERS = ['All', 'Shopee', 'TikTok', 'Lazada'] as const;

export default function CatalogPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [activePlatform, setActivePlatform] = useState<string>('All');
    const [activeCategory, setActiveCategory] = useState<string>('All');

    useEffect(() => {
        async function fetchCatalog() {
            try {
                const res = await fetch('/api/catalog');
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                if (Array.isArray(data)) {
                    setProducts(data);
                } else {
                    setError(true);
                }
            } catch {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchCatalog();
    }, []);

    const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

    const filtered = products.filter(p => {
        const platformMatch = activePlatform === 'All' || p.platform === activePlatform;
        const categoryMatch = activeCategory === 'All' || p.category === activeCategory;
        return platformMatch && categoryMatch;
    });

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 selection:bg-orange-100">

            {/* ================= HERO (Matches Landing) ================= */}
            <section className="flex items-center justify-center bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white px-6 select-none relative">
                <div className="max-w-4xl mx-auto text-center py-20">
                    <Link
                        href="/"
                        className="absolute top-6 left-6 inline-flex items-center gap-2 text-orange-50 hover:text-white transition-all text-sm font-medium"
                    >
                        <ArrowLeft size={16} />
                        Back to Home
                    </Link>

                    <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
                        Product Catalog
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg text-orange-50 font-normal">
                        Browse our curated collection of affiliate products across Shopee, TikTok, and Lazada.
                    </p>
                </div>
            </section>

            {/* ================= FILTERS & GRID ================= */}
            <main className="flex-grow py-16 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* Platform Tabs */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                        {PLATFORM_FILTERS.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => {
                                    setActivePlatform(filter);
                                    setActiveCategory('All');
                                }}
                                className="catalog-tab"
                                data-active={activePlatform === filter}
                            >
                                {filter}
                                <span className="catalog-tab-count">
                                    {filter === 'All' ? products.length : products.filter(p => p.platform === filter).length}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Category Tabs (Only if specific platform selected) */}
                    {activePlatform !== 'All' && categories.length > 2 && (
                        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 animate-in fade-in duration-500">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className="category-chip"
                                    data-active={activeCategory === cat}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Content */}
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-32 text-gray-400">
                            <Loader2 size={40} className="animate-spin mb-4 text-[#ee7b22]" />
                            <p className="font-medium">Loading catalog...</p>
                        </div>
                    ) : error ? (
                        <div className="text-center py-32 bg-red-50 rounded-2xl border border-red-100 max-w-2xl mx-auto">
                            <p className="text-red-500 font-bold text-lg mb-2">Something went wrong</p>
                            <p className="text-gray-600">Please verify your Google Sheet publication.</p>
                        </div>
                    ) : filtered.length === 0 ? (
                        <div className="text-center py-32 bg-gray-50 rounded-2xl border border-gray-100 max-w-2xl mx-auto">
                            <Tag className="mx-auto text-gray-300 mb-4" size={48} />
                            <p className="text-gray-500 text-xl font-medium">No results found</p>
                            <button
                                onClick={() => { setActivePlatform('All'); setActiveCategory('All'); }}
                                className="mt-4 text-[#ee7b22] font-semibold hover:underline"
                            >
                                Clear all filters
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {filtered.map((product, idx) => (
                                <div key={`${product.platform}-${idx}`} className="catalog-card group border border-gray-100 overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
                                    <div className="catalog-card-img-wrap relative aspect-square bg-gray-50 overflow-hidden">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            unoptimized
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect fill="%23f3f4f6" width="200" height="200"/><text fill="%239ca3af" font-size="14" text-anchor="middle" x="100" y="105">No Image</text></svg>';
                                            }}
                                        />
                                        <span
                                            className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold text-white shadow-sm"
                                            style={{ backgroundColor: product.color }}
                                        >
                                            {product.platform}
                                        </span>
                                        {product.category && product.category !== 'Uncategorized' && (
                                            <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold bg-white/90 backdrop-blur-sm text-gray-600 shadow-sm border border-black/5 uppercase tracking-wide">
                                                {product.category}
                                            </span>
                                        )}
                                    </div>

                                    <div className="p-6">
                                        <a
                                            href={product.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-bold text-gray-900 hover:text-[#ee7b22] transition-colors line-clamp-2 leading-snug min-h-[2.5rem] block mb-6"
                                        >
                                            {product.name}
                                        </a>

                                        <a
                                            href={product.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full btn-primary btn-sm flex items-center justify-center gap-2"
                                            style={{ background: product.color }}
                                        >
                                            View on {product.platform}
                                            <Tag size={14} />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>

            {/* ================= FOOTER ================= */}
            <footer className="py-12 border-t border-gray-200 bg-white text-center text-gray-500 text-sm">
                <div className="max-w-6xl mx-auto px-6 font-medium">
                    © {new Date().getFullYear()} Limited Stocks Essentials. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
