'use client';

import { useState } from 'react';
import { ShoppingBag, Video, Facebook, Star, ChevronRight, Shield, CheckCircle, Users, Truck } from "lucide-react";

// Configuration constants
const LINK_CONFIG = {
  shopeeVideo: 'https://ph.shp.ee/ynvytjz?smtt=0.0.9',
  facebook: 'https://www.facebook.com/profile.php?id=61577993293144',
  shopeeStore: 'https://collshp.com/comrel1x03?view=storefront',
} as const;

const FEATURES = [
  {
    icon: CheckCircle,
    title: "Quality Tested",
    description: "Every product is personally tested and verified for quality assurance"
  },
  {
    icon: Shield,
    title: "Trusted Recommendations",
    description: "Honest reviews from real usage experience"
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Products chosen based on customer feedback and demand"
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Quick delivery options available for all products"
  }
];

// Utility functions
const openExternalLink = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

// Components
function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-gray-200/50 py-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
          <div />
          <div className="flex items-center gap-3">
            <div className="flex items-baseline gap-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                Limited Stocks
              </h1>
              <span className="text-sm font-semibold bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
                Essentials
              </span>
            </div>
          </div>
          <div className="flex items-center justify-end gap-2 text-orange-600">
            <ShoppingBag className="w-5 h-5" />
            <span className="text-sm font-medium hidden sm:block">Curated Daily</span>
          </div>
        </div>
      </div>
    </header>
  );
}

function HeroSection({ onShopNow }: { onShopNow: () => void }) {
  return (
    <section className="relative flex items-center py-16 sm:py-24 lg:py-32 min-h-[60vh] sm:min-h-[70vh] bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-600/30" />
      <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 mb-8 mx-auto">
          <CheckCircle className="w-4 h-4" />
          <span className="text-sm font-medium">Trusted Recommendations</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Your Daily Dose of
          <span className="block mt-3 text-white">Smart Shopping</span>
        </h2>

        <p className="text-base sm:text-xl text-white/90 max-w-xl sm:max-w-2xl mx-auto mb-8 leading-relaxed">
          Discover quality products that have been tested and recommended for everyday excellence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onShopNow}
            className="w-full sm:w-auto bg-white text-orange-600 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-orange-50 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            Start Shopping Now
            <ChevronRight className="w-5 h-5" />
          </button>
          <button className="w-full sm:w-auto text-white font-medium px-6 py-3 border-2 border-white/30 rounded-xl hover:bg-white/10 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-6 mx-auto">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">WHY CHOOSE US</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            The Limited Stocks Difference
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We go the extra mile to ensure you get only the best products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                <feature.icon className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ConnectionCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
  color?: string;
}

function ConnectionCard({ icon: Icon, title, description, buttonText, onClick, color = 'orange' }: ConnectionCardProps) {
  const colorClasses = {
    orange: 'bg-orange-100 text-orange-600',
    blue: 'bg-blue-100 text-blue-600',
  }[color];

  const buttonColor = {
    orange: 'bg-orange-600 hover:bg-orange-700',
    blue: 'bg-blue-600 hover:bg-blue-700',
  }[color];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="text-center">
        <div className={`w-12 h-12 ${colorClasses} rounded-xl flex items-center justify-center mx-auto mb-4`}>
          <Icon className="w-6 h-6" />
        </div>
        <h4 className="text-xl font-semibold text-gray-900 mb-3">
          {title}
        </h4>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>
        <button
          onClick={onClick}
          className={`w-full ${buttonColor} text-white font-semibold py-3 px-4 rounded-xl hover:shadow-lg transition-all`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

function ConnectSection({ onLinkClick }: { onLinkClick: (url: string) => void }) {
  const [copied, setCopied] = useState(false);

  const copyAffiliateName = () => {
    navigator.clipboard.writeText('Limited Stocks Essentials');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-6 mx-auto">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">CONNECT WITH US</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Join Our Community
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest deals and product recommendations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ConnectionCard
            icon={ShoppingBag}
            title="Shopee Store"
            description="Browse our curated collection of quality products with exclusive deals"
            buttonText="Visit Store"
            onClick={() => onLinkClick(LINK_CONFIG.shopeeStore)}
          />
          
          <ConnectionCard
            icon={Video}
            title="Video Channel"
            description="Watch product demonstrations and honest reviews before you buy"
            buttonText="Watch Videos"
            onClick={() => onLinkClick(LINK_CONFIG.shopeeVideo)}
          />
          
          <ConnectionCard
            icon={Facebook}
            title="Facebook"
            description="Join our community for updates, tips, and special announcements"
            buttonText="Follow Us"
            onClick={() => onLinkClick(LINK_CONFIG.facebook)}
            color="blue"
          />
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Our Affiliate
              </h4>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Shop through our verified affiliate account for the best deals
              </p>
              
              <div className="bg-orange-50 p-4 rounded-xl border-2 border-orange-200 mb-4">
                <p className="text-center font-bold text-orange-700">
                  Limited Stocks Essentials
                </p>
              </div>
              
              <button
                onClick={copyAffiliateName}
                className="w-full bg-gray-100 text-gray-700 font-semibold py-3 px-4 rounded-xl hover:bg-gray-200 transition-colors"
              >
                {copied ? '✓ Copied!' : 'Copy Name'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection({ onShopNow }: { onShopNow: () => void }) {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-r from-orange-500 to-amber-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl sm:text-4xl font-bold mb-6">
          Ready to Discover Quality Products?
        </h3>
        <p className="text-base sm:text-lg opacity-95 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers who trust Limited Stocks for honest recommendations and quality products.
        </p>
        <button
          onClick={onShopNow}
          className="w-full sm:w-auto bg-white text-orange-600 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-orange-50 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
        >
          Start Shopping Now
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 text-center max-w-3xl mx-auto justify-items-center">
          <div>
            <h5 className="text-white font-bold text-lg mb-4 flex items-center justify-center gap-2">
              🛍️ Limited Stocks Essentials
            </h5>
            <p className="text-gray-400 leading-relaxed">
              Your trusted source for quality-tested products and honest recommendations.
            </p>
          </div>
          
          <div>
            <h5 className="text-white font-bold text-lg mb-4">
              Security & Privacy
            </h5>
            <p className="text-gray-400 leading-relaxed">
              🔒 Your privacy is our priority. All external links open securely with protection.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 font-medium mb-2">
            © 2026 Limited Stocks Essentials. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Quality products, honest recommendations, trusted by thousands.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const handleLinkClick = (url: string) => {
    openExternalLink(url);
  };

  const handleShopNow = () => {
    handleLinkClick(LINK_CONFIG.shopeeStore);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection onShopNow={handleShopNow} />
        <FeaturesSection />
        <ConnectSection onLinkClick={handleLinkClick} />
        <CTASection onShopNow={handleShopNow} />
      </main>
      <Footer />
    </div>
  );
}
