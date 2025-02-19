import React from 'react';
import { Workflow, LogIn } from 'lucide-react';
import { Navigation } from './Navigation';

export const Header: React.FC = () => {
  const handlePortalLogin = async () => {
    try {
      // Redirect to the Stripe customer portal
      window.location.href = 'https://billing.stripe.com/p/login/test_8wMcNTeJQ3Yl3GE288';
    } catch (error) {
      console.error('Error redirecting to customer portal:', error);
    }
  };

  return (
    <header className="container mx-auto px-4 sm:px-6 text-white">
      <nav className="flex items-center py-6">
        <div className="flex-1 flex items-center space-x-2">
          <Workflow className="w-8 h-8 text-blue-400" />
          <span className="text-xl font-bold">Comerian</span>
        </div>
        <div className="flex-1 flex justify-center">
          <Navigation />
        </div>
        <div className="flex-1 flex items-center justify-end space-x-4">
          <button
            onClick={handlePortalLogin}
            className="flex items-center space-x-2 bg-transparent hover:bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full transition"
          >
            <LogIn className="w-5 h-5" />
            <span>Login</span>
          </button>
          <a
            href="#contact"
            className="bg-blue-500 hover:bg-blue-600 px-4 sm:px-6 py-2 rounded-full transition text-sm sm:text-base"
          >
            Contact Us
          </a>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto text-center py-8 sm:py-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Transform Your Business with AI Automation
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 px-4">
          Fuse AI into your business' DNA. Outpace competitors. Pioneer the digital frontier.
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-full transition-colors duration-200 text-base sm:text-lg"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
};