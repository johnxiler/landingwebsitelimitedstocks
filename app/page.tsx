import { ShoppingBag, Video, Facebook, Megaphone, ExternalLink } from "lucide-react";

/* -------------------- */
/* LINK CONFIG */
/* -------------------- */

const LINK_CONFIG = {
  shopeeVideo: "https://ph.shp.ee/ynvytjz?smtt=0.0.9",
  facebook: "https://www.facebook.com/profile.php?id=61577993293144",
  shopeeStore: "https://collshp.com/comrelimited",
  campaigns: "https://ph.shp.ee/ynvytjz?smtt=0.0.9",
} as const;

// export default function Home() {
//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">

//       {/* ================= HERO ================= */}
//       <section className="flex items-center justify-center min-h-[40vh] bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white px-6">
//         <div className="max-w-4xl mx-auto text-center">
//           {/* Brand Name Integration */}
//           <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight leading-tight mb-6">
//             Limited Stocks Essentials
//           </h1>

//           <p className="max-w-2xl mx-auto mb-4 text-lg sm:text-xl text-orange-100 mb-10">
//             Access our Shopee videos, storefront, campaigns, and Facebook page instantly. 
//             Don't miss out on today's top-rated finds!
//           </p>

//           <a
//             href={LINK_CONFIG.shopeeStore}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="relative inline-flex items-center gap-2 bg-white text-orange-600 font-extrabold mt-25 px-10 py-8 rounded-xl shadow-lg ring-4 ring-white/30 hover:ring-orange-200 transition-all duration-300 animate-in fade-in zoom-in"
//           >
//             {/* The Pulse Effect Rings */}
//             <span className="absolute -inset-1 rounded-xl bg-white opacity-20 animate-ping"></span>
            
//             <ShoppingBag size={15} className="animate-bounce" />
//             <span className="tracking-wide uppercase text-xl">Visit My Shopee Storefront</span>
//           </a>
//         </div>
//       </section>

//       {/* ================= LINKS SECTION ================= */}
//           <section className="flex flex-col w-full items-center justify-center overflow-hidden py-20 px-6 pb-32">
//             <div className="max-w-3xl mx-auto text-center mb-14">
//               <h2 className="text-3xl sm:text-4xl font-bold mb-4">
//                 Explore Our Links
//               </h2>
//               <p className="text-gray-600">
//                 Click below to access our official pages and campaigns.
//               </p>
//             </div>

//             <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              
//               <LinkCard
//                 icon={<Video size={26} />}
//                 title="Shopee Videos"
//                 description="Watch our latest Shopee affiliate video content."
//                 href={LINK_CONFIG.shopeeVideo}
//                 button="Watch Now"
//               />

//              <LinkCard
//                 icon={<Megaphone size={26} />}
//                 title="Campaigns"
//                 description="Discover our current Shopee campaigns."
//                 href={LINK_CONFIG.campaigns}
//                 button="View Campaign"
//               />

//               <LinkCard
//                 icon={<Facebook size={26} />}
//                 title="Facebook Page"
//                 description="Follow us for updates and new promotions."
//                 href={LINK_CONFIG.facebook}
//                 button="Follow Page"
//               />
//             </div>
//           </section>
      
//         <footer className="mt-auto py-12 border-t border-gray-200 bg-white text-center text-gray-500 text-sm">
//           <div className="max-w-6xl mx-auto px-6">
//             © {new Date().getFullYear()} Limited Stocks Essentials. All rights reserved.
//           </div>
//         </footer>
//     </div>
//   );
// }

export default function Home() {
  return (
    /* We use flex-col and min-h-screen to ensure the footer stays at the bottom 
       even if there are few cards */
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">

      {/* ================= HERO ================= */}
      <section className="flex items-center justify-center min-h-[50vh] bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white px-6 select-none">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* 1. Added mb-8 for spacing below the title */}
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight leading-tight mb-8">
            Limited Stocks Essentials
          </h1>

          {/* 2. Increased mb-12 to push the button further down */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-orange-100 mb-14 leading-relaxed">
            Access our Shopee videos, storefront, campaigns, and Facebook page instantly. 
            Don&apos;t miss out on today&apos;s top-rated finds!
          </p>

          <a
            href={LINK_CONFIG.shopeeStore}
            target="_blank"
            rel="noopener noreferrer"
            title="Opens Shopee store in a new tab"
            aria-label="Open Shopee store in a new tab"
            className="relative inline-flex items-center justify-center gap-2 bg-white text-orange-700 font-semibold px-6 py-3 rounded-md shadow-md ring-1 ring-orange-200/60 hover:ring-orange-300 hover:shadow-lg hover:scale-[1.01] active:scale-95 transition-all duration-150 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-300/60 select-none"
          >
            <ShoppingBag size={18} />
            <span className="tracking-normal text-sm sm:text-base whitespace-nowrap">Shop on Shopee</span>
            <ExternalLink size={16} aria-hidden="true" />
            <span className="sr-only">(opens in new tab)</span>
          </a>
        </div>
      </section>

      {/* ================= LINKS SECTION ================= */}
      {/* 1. Removed the extra nested div that was breaking the flow.
          2. Added pb-32 to create massive breathing room before the footer.
      */}
      <section className="flex flex-col items-center justify-center flex-grow py-24 pb-32 px-6 select-none">
        <div className="max-w-3xl mx-auto text-center mt-12 mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight text-gray-900">
            Explore Our Links
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Click below to access our official pages and campaigns. 
            We&apos;ve curated the best essentials just for you.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 md:gap-y-16 justify-items-center">
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
        </div>
      </section>
      
      {/* ================= FOOTER ================= */}
      {/* mt-auto ensures this stays at the very bottom */}
      <footer className="mt-auto py-12 border-t border-gray-200 bg-white text-center text-gray-500 text-sm">
        <div className="max-w-6xl mx-auto px-6">
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
}

function LinkCard({ icon, title, description, href, button }: LinkCardProps) {
  return (
    <div className="w-full max-w-md px-6 py-8 md:px-8 md:py-10 flex flex-col items-center text-center">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 text-orange-600 mb-4">
        {icon}
      </div>

      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>

      <p className="text-gray-600 text-sm mb-4 leading-relaxed text-center">
        {description}
      </p>

      <div className="w-full flex justify-center mt-1">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary btn-xs mt-5 select-none"
        >
          {button}
        </a>
      </div>
    </div>
  );
}
