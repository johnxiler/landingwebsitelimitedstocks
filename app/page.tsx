'use client';

import { useState } from 'react';
import { ShoppingBag, Video, Facebook, Star } from "lucide-react";

export default function Home() {
  const [copiedText, setCopiedText] = useState('');

  // Security: URLs are only accessible through onClick handlers, not hardcoded in HTML
  const linkConfig = {
    shopeeVideo: 'https://ph.shp.ee/ynvytjz?smtt=0.0.9',
    facebook: 'https://www.facebook.com/profile.php?id=61577993293144',
    shopeeStore: 'https://collshp.com/comrel1x03?view=storefront',
  };

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 py-2 xs:py-3 sm:py-4 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10">
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-1 xs:gap-1.5 sm:gap-2">
              <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-tight">Limited Stocks</h1>
              <p className="text-[10px] xs:text-xs sm:text-sm md:text-base font-semibold bg-white/20 backdrop-blur-md px-1.5 xs:px-2 sm:px-3 md:px-4 py-0.5 xs:py-1 sm:py-1.5 rounded-full border border-white/30">
                Essentials
              </p>
            </div>
            <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 md:gap-4">
              <ShoppingBag className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 text-orange-500" />
              <div className="text-[10px] xs:text-xs sm:text-sm font-semibold opacity-90 hidden xs:block">Curated Daily</div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
     <section className="relative py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-hero-gradient text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 text-center">
          
          <span className="inline-block mb-6 xs:mb-8 sm:mb-10 lg:mb-12 px-3 xs:px-4 sm:px-5 py-1.5 xs:py-2 sm:py-2.5 text-xs xs:text-sm sm:text-base font-semibold rounded-full bg-white/15 backdrop-blur-md border border-white/20">
            ✨ Trusted Recommendations
          </span>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight">
            Your Daily Dose of
            <span className="block mt-2 xs:mt-3 sm:mt-4 text-white drop-shadow-md">
              Smart Finds
            </span>
          </h2>

          <p className="mt-4 xs:mt-6 sm:mt-8 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-white/90 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto leading-relaxed px-2">
            Tested & Recommended Products curated for quality and value.
          </p>

          <div className="mt-8 xs:mt-10 sm:mt-12">
            <button
              onClick={() => handleLinkClick(linkConfig.shopeeStore)}
              className="btn-primary text-sm xs:text-base sm:text-base md:text-lg lg:text-lg xl:text-xl px-6 xs:px-8 sm:px-10 md:px-12 lg:px-14 py-3 xs:py-3.5 sm:py-4 md:py-5 lg:py-5"
            >
              Start Shopping Now →
            </button>
          </div>
        </div>
      </section>

      {/* Features/Benefits Section */}
      <section className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10">
          <div className="text-center mb-10 xs:mb-12 sm:mb-14 md:mb-16 lg:mb-20">
            <span className="badge-orange mb-4 xs:mb-5 sm:mb-6 inline-block text-xs xs:text-sm">✨ OUR STRENGTHS</span>
            <h3 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-black text-gray-900 mb-4 xs:mb-5 sm:mb-6 lg:mb-8 leading-tight tracking-tight">
              Why Choose Limited Stocks?
            </h3>
            <p className="text-sm xs:text-base sm:text-base md:text-lg lg:text-lg xl:text-xl text-gray-600 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto font-medium leading-relaxed">
              Industry-leading quality, unbeatable value, and customer satisfaction
            </p>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10">
          <div className="text-center mb-10 xs:mb-12 sm:mb-14 md:mb-16 lg:mb-20">
            <span className="badge-orange mb-4 xs:mb-5 sm:mb-6 inline-block text-xs xs:text-sm">🔗 CONNECT WITH US</span>
            <h3 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-black text-gray-900 mb-4 xs:mb-5 sm:mb-6 lg:mb-8 leading-tight tracking-tight">
              Stay Connected
            </h3>
            <p className="text-sm xs:text-base sm:text-base md:text-lg lg:text-lg xl:text-xl text-gray-600 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto font-medium leading-relaxed">
              Follow us for latest deals, exclusive updates, and product recommendations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 xs:gap-6 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
            {/* Shopee Store */}
            <div 
              className="card p-5 xs:p-6 sm:p-6 md:p-7 lg:p-8 xl:p-10 flex flex-col text-center bg-white"
              onClick={() => handleLinkClick(linkConfig.shopeeStore)}
              style={{animationDelay: '0.1s'}}
            >
              <div className="flex flex-col items-center mb-4 sm:mb-5 md:mb-6 lg:mb-7">
                <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                  <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-orange-500" />
                </div>
                <h4 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-black text-gray-900">Shopee Store</h4>
              </div>
              <p className="text-gray-600 mb-5 sm:mb-6 md:mb-7 lg:mb-8 leading-relaxed font-medium text-sm sm:text-base md:text-base lg:text-lg flex-grow">
                Visit our official Shopee storefront to browse our latest curated products and exclusive deals.
              </p>
              <button className="btn-primary w-full text-sm sm:text-base md:text-base lg:text-lg py-3 sm:py-3.5 md:py-4 lg:py-4 mt-auto">
                Visit Store →
              </button>
            </div>

            {/* Shopee Video */}
            <div 
              className="card p-5 xs:p-6 sm:p-6 md:p-7 lg:p-8 xl:p-10 flex flex-col text-center bg-white"
              onClick={() => handleLinkClick(linkConfig.shopeeVideo)}
              style={{animationDelay: '0.2s'}}
            >
              <div className="flex flex-col items-center mb-4 sm:mb-5 md:mb-6 lg:mb-7">
                <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                  <Video className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-orange-500" />
                </div>
                <h4 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-black text-gray-900">Video Channel</h4>
              </div>
              <p className="text-gray-600 mb-5 sm:mb-6 md:mb-7 lg:mb-8 leading-relaxed font-medium text-sm sm:text-base md:text-base lg:text-lg flex-grow">
                Watch product demonstrations and reviews on our Shopee video channel. See products in action!
              </p>
              <button className="btn-primary w-full text-sm sm:text-base md:text-base lg:text-lg py-3 sm:py-3.5 md:py-4 lg:py-4 mt-auto">
                Watch Videos →
              </button>
            </div>

            {/* Facebook */}
            <div 
              className="card p-5 xs:p-6 sm:p-6 md:p-7 lg:p-8 xl:p-10 flex flex-col text-center bg-white"
              onClick={() => handleLinkClick(linkConfig.facebook)}
              style={{animationDelay: '0.3s'}}
            >
              <div className="flex flex-col items-center mb-4 sm:mb-5 md:mb-6 lg:mb-7">
                <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-blue-600" />
                </div>
                <h4 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-black text-gray-900">Facebook Page</h4>
              </div>
              <p className="text-gray-600 mb-5 sm:mb-6 md:mb-7 lg:mb-8 leading-relaxed font-medium text-sm sm:text-base md:text-base lg:text-lg flex-grow">
                Join our Facebook community for exclusive updates, tips, and special announcements.
              </p>
              <button className="btn-primary w-full text-sm sm:text-base md:text-base lg:text-lg py-3 sm:py-3.5 md:py-4 lg:py-4 mt-auto" style={{backgroundColor: '#1877F2'}}>
                Follow Us →
              </button>
            </div>

            {/* Affiliate Name */}
            <div className="card p-5 xs:p-6 sm:p-6 md:p-7 lg:p-8 xl:p-10 flex flex-col text-center bg-white" style={{animationDelay: '0.4s'}}>
              <div className="flex flex-col items-center mb-4 sm:mb-5 md:mb-6 lg:mb-7">
                <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-orange-500" />
                </div>
                <h4 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-black text-gray-900">Our Affiliate</h4>
              </div>
              <p className="text-gray-600 mb-4 sm:mb-5 md:mb-6 leading-relaxed font-medium text-sm sm:text-base md:text-base lg:text-lg flex-grow">
                Shop through our verified affiliate account for exclusive deals and recommendations.
              </p>
              <div className="bg-orange-50 p-4 sm:p-5 md:p-5 lg:p-6 rounded-xl border-2 border-orange-200 mb-4 sm:mb-5 md:mb-6">
                <p className="text-center text-sm sm:text-base md:text-base lg:text-lg font-black text-orange-600">
                  Limited Stocks Essentials
                </p>
              </div>
              <button 
                onClick={() => copyToClipboard('Limited Stocks Essentials', 'Affiliate Name')}
                className="btn-secondary w-full text-sm sm:text-base md:text-base lg:text-lg py-3.5 sm:py-4 md:py-4 lg:py-5 mt-auto"
              >
                {copiedText === 'Affiliate Name' ? '✓ Copied!' : 'Copy Name'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-orange-dark text-white py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-40 xs:w-48 sm:w-56 md:w-72 lg:w-80 h-40 xs:h-48 sm:h-56 md:h-72 lg:h-80 bg-white opacity-5 rounded-full blur-3xl transform -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-1/4 w-48 xs:w-56 sm:w-72 md:w-80 lg:w-96 h-48 xs:h-56 sm:h-72 md:h-80 lg:h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 text-center relative z-10">
          <h3 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-black text-gray-900 mb-4 xs:mb-5 sm:mb-6 lg:mb-8 leading-tight tracking-tight">
            Ready to Find Your Next Favorite Product?
          </h3>
          <p className="text-sm xs:text-base sm:text-base md:text-lg lg:text-lg xl:text-xl font-medium opacity-95 mb-8 xs:mb-10 sm:mb-12 lg:mb-14 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who trust Limited Stocks for quality products and honest recommendations.
          </p>
          <button 
            onClick={() => handleLinkClick(linkConfig.shopeeStore)}
            className="bg-white text-orange-600 font-black px-8 xs:px-10 sm:px-12 md:px-14 lg:px-16 py-4 xs:py-4.5 sm:py-5 lg:py-6 rounded-xl hover:bg-orange-50 transition-all transform hover:scale-105 inline-block text-base xs:text-lg sm:text-lg md:text-xl lg:text-xl shadow-lg hover:shadow-2xl"
          >
            Shop Limited Stocks Now ✨
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 py-10 xs:py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 xs:gap-10 sm:gap-10 lg:gap-12 mb-10 xs:mb-12 sm:mb-14 lg:mb-16">
            <div className="text-center sm:text-left">
              <h5 className="text-white font-black text-base xs:text-lg sm:text-lg lg:text-xl mb-3 xs:mb-4 sm:mb-4 lg:mb-6 flex items-center justify-center sm:justify-start gap-2">🛍️ Limited Stocks Essentials</h5>
              <p className="text-xs xs:text-sm sm:text-sm lg:text-base leading-relaxed text-gray-400 font-medium">
                Your daily dose of "Budol" - Tested & Recommended products for everyday needs.
              </p>
            </div>
            <div className="text-center sm:text-left">
              <h5 className="text-white font-black text-base xs:text-lg sm:text-lg lg:text-xl mb-3 xs:mb-4 sm:mb-4 lg:mb-6">Security & Privacy</h5>
              <p className="text-xs xs:text-sm sm:text-sm lg:text-base text-gray-400 leading-relaxed font-medium">
                🔒 Your privacy and security are important to us. All links open securely in a new tab.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 xs:pt-10 sm:pt-10 lg:pt-12">
            <div className="text-center">
              <p className="text-gray-400 font-bold mb-3 xs:mb-4 sm:mb-4 lg:mb-6 text-xs xs:text-sm sm:text-sm lg:text-base">
                © 2026 Limited Stocks Essentials. All rights reserved.
              </p>
              <p className="text-gray-600 text-[10px] xs:text-xs sm:text-xs lg:text-sm">
                External links are to official partner platforms. Secure & verified connections.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
