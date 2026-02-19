import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Limited Stocks Essentials | Tested & Recommended Products",
  description: "Your daily dose of 'Budol' - Curated and tested products on Shopee. Discover quality items recommended by Limited Stocks Essentials.",
  keywords: "Shopee, affiliate, curated products, tested products, recommendations, Limited Stocks",
  openGraph: {
    title: "Limited Stocks Essentials | Tested & Recommended",
    description: "Your daily dose of 'Budol' - Curated and tested products on Shopee",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ee7b22" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%23ee7b22'>🛍️</text></svg>" />
      </head>
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
