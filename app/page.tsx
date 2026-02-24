import Link from "next/link";
import { ShoppingBag, Video, Facebook, Megaphone, ExternalLink, LayoutGrid } from "lucide-react";

/* -------------------- */
/* LINK CONFIG */
/* -------------------- */

const LINK_CONFIG = {
  shopeeVideo: "https://ph.shp.ee/ynvytjz?smtt=0.0.9",
  facebook: "https://www.facebook.com/profile.php?id=61577993293144",
  shopeeStore: "https://collshp.com/comrelimited",
  campaigns: "https://ph.shp.ee/ynvytjz?smtt=0.0.9",
} as const;

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">

      {/* ================= HERO ================= */}
      <section className="flex items-center justify-center min-h-[50vh] bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white px-6 select-none">
        <div className="max-w-4xl mx-auto text-center py-20">

          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight leading-tight mb-8">
            Limited Stocks Essentials
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-orange-50 mb-14 leading-relaxed font-normal">
            Access our Shopee videos, storefront, campaigns, and Facebook page instantly.
            Don&apos;t miss out on today&apos;s top-rated finds!
          </p>

          <a
            href={LINK_CONFIG.shopeeStore}
            target="_blank"
            rel="noopener noreferrer"
            title="Opens Shopee store in a new tab"
            aria-label="Open Shopee store in a new tab"
            className="relative inline-flex items-center justify-center gap-2 bg-white text-[#ee7b22] font-semibold px-6 py-3 rounded-md shadow-md ring-1 ring-orange-200/60 hover:ring-orange-300 hover:shadow-lg hover:scale-[1.01] active:scale-95 transition-all duration-150 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-300/60 select-none"
          >
            <ShoppingBag size={18} />
            <span className="tracking-normal text-sm sm:text-base whitespace-nowrap">Shop on my Shopee Storefront</span>
            <ExternalLink size={16} aria-hidden="true" />
            <span className="sr-only">(opens in new tab)</span>
          </a>
        </div>
      </section>

      {/* ================= LINKS SECTION ================= */}
      <section className="flex flex-col items-center justify-center flex-grow py-24 pb-32 px-6 select-none">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight text-gray-900">
            Explore Our Links
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Click below to access our official pages and campaigns.
            We&apos;ve curated the best essentials just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center w-full max-w-7xl mx-auto">
          <LinkCard
            icon={<Video size={26} />}
            title="Shopee Videos"
            description="Watch our latest Shopee affiliate video content."
            href={LINK_CONFIG.shopeeVideo}
            button="Watch Now"
          />

          <LinkCard
            icon={<Megaphone size={26} />}
            title="Campaigns"
            description="Discover our current Shopee campaigns."
            href={LINK_CONFIG.campaigns}
            button="View Campaign"
          />

          <LinkCard
            icon={<Facebook size={26} />}
            title="Facebook Page"
            description="Follow us for updates and new promotions."
            href={LINK_CONFIG.facebook}
            button="Follow Page"
          />

          <LinkCard
            icon={<LayoutGrid size={26} />}
            title="Product Catalog"
            description="Browse all our curated products across Shopee, TikTok & Lazada."
            href="/catalog"
            button="Browse Catalog"
            internal
          />
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="mt-auto py-12 border-t border-gray-200 bg-white text-center text-gray-500 text-sm">
        <div className="max-w-6xl mx-auto px-6 font-medium">
          © {new Date().getFullYear()} Limited Stocks Essentials. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

/* ================= LINK CARD COMPONENT ================= */

interface LinkCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  button: string;
  internal?: boolean;
}

function LinkCard({ icon, title, description, href, button, internal }: LinkCardProps) {
  return (
    <div className="w-full max-w-sm p-8 flex flex-col items-center text-center">
      <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-orange-100 text-orange-600 mb-6">
        {icon}
      </div>

      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>

      <p className="text-gray-500 text-sm mb-6 leading-relaxed">
        {description}
      </p>

      <div className="w-full flex justify-center mt-auto">
        {internal ? (
          <Link href={href} className="btn-primary btn-sm w-full sm:w-auto text-center px-10">
            {button}
          </Link>
        ) : (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-sm w-full sm:w-auto text-center px-10"
          >
            {button}
          </a>
        )}
      </div>
    </div>
  );
}
