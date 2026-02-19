'use client';

import { useState } from 'react';

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
      <header className="gradient-orange text-white py-5 sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight">Limited Stocks</h1>
              <p className="text-sm sm:text-base font-bold opacity-95 bg-white bg-opacity-20 px-3 py-1 rounded-full">Essentials</p>
            </div>
            <div className="text-sm font-semibold opacity-90 hidden sm:block">🛍️ Curated Daily</div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="gradient-orange text-white py-20 sm:py-32 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-40 h-40 bg-white opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-white opacity-5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-slide-in relative z-10">
          <div className="mb-10">
            <span className="inline-block bg-white bg-opacity-25 backdrop-blur-sm text-white px-5 py-3 rounded-full text-sm font-bold mb-6 border border-white border-opacity-30">
              ✨ Trusted Recommendations
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tight">
            Your Daily Dose of <span className="block mt-2 text-amber-100">"Budol"</span>
          </h2>
          <p className="text-xl sm:text-2xl font-bold opacity-95 mb-10 max-w-2xl mx-auto">
            Tested & Recommended Products
          </p>
          <p className="text-base sm:text-lg opacity-90 mb-14 max-w-2xl mx-auto leading-relaxed font-medium">
            Discover curated products handpicked for quality and value. Shop with confidence knowing every item has been tested and verified.
          </p>
          <button 
            onClick={() => handleLinkClick(linkConfig.shopeeStore)}
            className="btn-primary text-lg px-10 py-5 mb-4 inline-block w-full sm:w-auto"
          >
            Start Shopping Now ➜
          </button>
        </div>
      </section>

      {/* Features/Benefits Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="badge-orange mb-4 inline-block">✨ OUR STRENGTHS</span>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Why Choose Limited Stocks?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
              Industry-leading quality, unbeatable value, and customer satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Feature Cards */}
            <div className="card p-8 sm:p-10 text-center animate-scale-in" style={{animationDelay: '0.1s'}}>
              <div className="feature-icon">✓</div>
              <h4 className="text-2xl font-black text-gray-900 mb-4">Tested & Verified</h4>
              <p className="text-gray-600 leading-relaxed font-medium">Every product is personally tested before recommendation</p>
            </div>

            <div className="card p-8 sm:p-10 text-center animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="feature-icon">💰</div>
              <h4 className="text-2xl font-black text-gray-900 mb-4">Best Deals</h4>
              <p className="text-gray-600 leading-relaxed font-medium">Curated selections offering the best value for your money</p>
            </div>

            <div className="card p-8 sm:p-10 text-center animate-scale-in" style={{animationDelay: '0.3s'}}>
              <div className="feature-icon">⭐</div>
              <h4 className="text-2xl font-black text-gray-900 mb-4">Quality Assured</h4>
              <p className="text-gray-600 leading-relaxed font-medium">Only high-quality products that meet our standards</p>
            </div>

            <div className="card p-8 sm:p-10 text-center animate-scale-in" style={{animationDelay: '0.4s'}}>
              <div className="feature-icon">🚚</div>
              <h4 className="text-2xl font-black text-gray-900 mb-4">Easy Shopping</h4>
              <p className="text-gray-600 leading-relaxed font-medium">Simple and secure checkout on Shopee platform</p>
            </div>

            <div className="card p-8 sm:p-10 text-center animate-scale-in" style={{animationDelay: '0.5s'}}>
              <div className="feature-icon">💳</div>
              <h4 className="text-2xl font-black text-gray-900 mb-4">Safe Payment</h4>
              <p className="text-gray-600 leading-relaxed font-medium">Multiple payment options with buyer protection</p>
            </div>

            <div className="card p-8 sm:p-10 text-center animate-scale-in" style={{animationDelay: '0.6s'}}>
              <div className="feature-icon">📱</div>
              <h4 className="text-2xl font-black text-gray-900 mb-4">Shop Anytime</h4>
              <p className="text-gray-600 leading-relaxed font-medium">Access our store 24/7 through Shopee app or website</p>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="badge-orange mb-4 inline-block">🔗 CONNECT WITH US</span>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Stay Connected
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
              Follow us for latest deals, exclusive updates, and product recommendations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
            {/* Shopee Store */}
            <div 
              className="card p-8 sm:p-10 cursor-pointer hover:bg-gradient-to-br hover:from-orange-50 hover:to-white animate-scale-in"
              onClick={() => handleLinkClick(linkConfig.shopeeStore)}
              style={{animationDelay: '0.1s'}}
            >
              <div className="flex items-start justify-between mb-6">
                <h4 className="text-2xl sm:text-3xl font-black text-gray-900 flex-1">Shopee Store</h4>
                <span className="text-5xl ml-4">🛍️</span>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed font-medium">
                Visit our official Shopee storefront to browse our latest curated products and exclusive deals.
              </p>
              <button className="btn-primary w-full">
                Visit Store →
              </button>
            </div>

            {/* Shopee Video */}
            <div 
              className="card p-8 sm:p-10 cursor-pointer hover:bg-gradient-to-br hover:from-orange-50 hover:to-white animate-scale-in"
              onClick={() => handleLinkClick(linkConfig.shopeeVideo)}
              style={{animationDelay: '0.2s'}}
            >
              <div className="flex items-start justify-between mb-6">
                <h4 className="text-2xl sm:text-3xl font-black text-gray-900 flex-1">Video Channel</h4>
                <span className="text-5xl ml-4">📹</span>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed font-medium">
                Watch product demonstrations and reviews on our Shopee video channel. See products in action!
              </p>
              <button className="btn-primary w-full">
                Watch Videos →
              </button>
            </div>

            {/* Facebook */}
            <div 
              className="card p-8 sm:p-10 cursor-pointer hover:bg-gradient-to-br hover:from-blue-50 hover:to-white animate-scale-in"
              onClick={() => handleLinkClick(linkConfig.facebook)}
              style={{animationDelay: '0.3s'}}
            >
              <div className="flex items-start justify-between mb-6">
                <h4 className="text-2xl sm:text-3xl font-black text-gray-900 flex-1">Facebook Page</h4>
                <span className="text-5xl ml-4">👥</span>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed font-medium">
                Join our Facebook community for exclusive updates, tips, and special announcements.
              </p>
              <button className="btn-primary w-full" style={{backgroundColor: '#1877F2'}}>
                Follow Us →
              </button>
            </div>

            {/* Affiliate Name */}
            <div className="card p-8 sm:p-10 bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 animate-scale-in" style={{animationDelay: '0.4s'}}>
              <div className="flex items-start justify-between mb-6">
                <h4 className="text-2xl sm:text-3xl font-black text-gray-900 flex-1">Our Affiliate</h4>
                <span className="text-5xl ml-4">⭐</span>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed font-medium">
                Shop through our verified affiliate account for exclusive deals and recommendations.
              </p>
              <div className="bg-white p-6 rounded-xl border-2 border-orange-200 mb-6">
                <p className="text-center text-lg sm:text-xl font-black text-orange-600">
                  Limited Stocks Essentials
                </p>
              </div>
              <button 
                onClick={() => copyToClipboard('Limited Stocks Essentials', 'Affiliate Name')}
                className="btn-secondary w-full"
              >
                {copiedText === 'Affiliate Name' ? '✓ Copied!' : 'Copy Name'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-orange-dark text-white py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl transform -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-tight">
            Ready to Find Your Next Favorite Product?
          </h3>
          <p className="text-lg sm:text-xl font-medium opacity-95 mb-16 max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who trust Limited Stocks for quality products and honest recommendations.
          </p>
          <button 
            onClick={() => handleLinkClick(linkConfig.shopeeStore)}
            className="bg-white text-orange-600 font-black px-10 py-5 rounded-xl hover:bg-orange-50 transition-all transform hover:scale-105 inline-block text-lg shadow-lg hover:shadow-2xl"
          >
            Shop Limited Stocks Now ✨
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
            <div>
              <h5 className="text-white font-black text-xl mb-6 flex items-center gap-2">🛍️ Limited Stocks Essentials</h5>
              <p className="text-sm leading-relaxed text-gray-400 font-medium">
                Your daily dose of "Budol" - Tested & Recommended products for everyday needs.
              </p>
            </div>
            <div>
              <h5 className="text-white font-black text-lg mb-6">Quick Links</h5>
              <div className="space-y-3">
                <button 
                  onClick={() => handleLinkClick(linkConfig.shopeeStore)}
                  className="block text-sm hover:text-orange-400 transition font-medium"
                >
                  → Visit Shopee Store
                </button>
                <button 
                  onClick={() => handleLinkClick(linkConfig.shopeeVideo)}
                  className="block text-sm hover:text-orange-400 transition font-medium"
                >
                  → Watch Videos
                </button>
                <button 
                  onClick={() => handleLinkClick(linkConfig.facebook)}
                  className="block text-sm hover:text-orange-400 transition font-medium"
                >
                  → Follow on Facebook
                </button>
              </div>
            </div>
            <div>
              <h5 className="text-white font-black text-lg mb-6">Security & Privacy</h5>
              <p className="text-sm text-gray-400 leading-relaxed font-medium">
                🔒 Your privacy and security are important to us. All links open securely in a new tab.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-10">
            <div className="text-center text-sm">
              <p className="text-gray-400 font-bold mb-4">
                © 2026 Limited Stocks Essentials. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs">
                External links are to official partner platforms. Secure & verified connections.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
