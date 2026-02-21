import type { Metadata } from "next";
import Script from "next/script";
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
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ee7b22' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M6 2l1 7h10l1-7'/><path d='M3 9h18l-1.5 11H4.5L3 9z'/><path d='M16 13a4 4 0 0 1-8 0'/></svg>" />
      </head>
      <body className="antialiased bg-white text-gray-900">
        <Script id="anti-inspect" strategy="afterInteractive">
          {`
            document.addEventListener('contextmenu',e=>e.preventDefault());
            document.addEventListener('keydown',e=>{
              const k=(e.key||'').toLowerCase();
              if(e.keyCode===123){e.preventDefault();e.stopPropagation();return;}
              if(e.ctrlKey&&e.shiftKey&&(k==='i'||k==='j'||k==='c')){e.preventDefault();e.stopPropagation();return;}
              if(e.ctrlKey&&(k==='u'||k==='s')){e.preventDefault();e.stopPropagation();return;}
            });
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
