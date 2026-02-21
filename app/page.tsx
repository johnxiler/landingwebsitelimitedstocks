import { ShoppingBag, Video, Facebook, Megaphone } from "lucide-react";

/* -------------------- */
/* LINK CONFIG */
/* -------------------- */

const LINK_CONFIG = {
  shopeeVideo: "https://ph.shp.ee/ynvytjz?smtt=0.0.9",
  facebook: "https://www.facebook.com/profile.php?id=61577993293144",
  shopeeStore: "https://collshp.com/comrel1x03?view=storefront",
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
      <section className="flex items-center justify-center min-h-[50vh] bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* 1. Added mb-8 for spacing below the title */}
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight leading-tight mb-8">
            Limited Stocks Essentials
          </h1>

          {/* 2. Increased mb-12 to push the button further down */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-orange-100 mb-14 leading-relaxed">
            Access our Shopee videos, storefront, campaigns, and Facebook page instantly. 
            Don't miss out on today's top-rated finds!
          </p>

          <a
            href={LINK_CONFIG.shopeeStore}
            target="_blank"
            rel="noopener noreferrer"
            /* - Added px-12 (horizontal room)
              - Added py-5 (vertical room)
              - Added min-w-fit to ensure it doesn't shrink on mobile
            */
            className="relative inline-flex items-center justify-center gap-4 bg-white text-orange-600 font-extrabold px-12 py-6 rounded-2xl shadow-2xl ring-4 ring-white/30 hover:ring-orange-200 hover:scale-105 transition-all duration-300 group"
          >
            {/* The Pulse Effect */}
            <span className="absolute -inset-1 rounded-2xl bg-white opacity-20 animate-ping"></span>
            
            {/* Icon with slightly larger size for balance */}
            <ShoppingBag size={24} className="transition-transform group-hover:scale-110" />
            
            {/* Text with letter spacing for a premium look */}
            <span className="tracking-wider uppercase text-lg sm:text-xl whitespace-nowrap">
              Visit My Shopee Storefront
            </span>
          </a>
          
        </div>
      </section>

      {/* ================= LINKS SECTION ================= */}
      {/* 1. Removed the extra nested div that was breaking the flow.
          2. Added pb-32 to create massive breathing room before the footer.
      */}
      <section className="flex flex-col items-center justify-center flex-grow py-24 pb-32 px-6">
        <div className="max-w-3xl mx-auto text-center mt-12 mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight text-gray-900">
            Explore Our Links
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Click below to access our official pages and campaigns. 
            We've curated the best essentials just for you.
          </p>
        </div>

        {/* max-w-6xl gives more room for 3 columns to breathe */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
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
    <div className="w-full max-w-md bg-white p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
      {/* Icon Container */}
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 text-orange-600 mb-6">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>

      {/* Description - Added mb-10 for breathing room and flex-grow to align buttons */}
      <p className="text-gray-600 text-sm mb-10 flex-grow leading-relaxed">
        {description}
      </p>

      {/* Action Button */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full inline-block bg-orange-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-orange-700 transition-colors duration-300 shadow-sm"
      >
        {button}
      </a>
    </div>
  );
}
