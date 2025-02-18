import React from 'react';
import { Workflow } from 'lucide-react';
import { Navigation } from './Navigation';

export const Header: React.FC = () => {
  return (
    <header className="container mx-auto px-4 sm:px-6 text-white">
      <nav className="flex justify-between items-center py-6">
        <div className="flex items-center space-x-2">
          <Workflow className="w-8 h-8 text-blue-400" />
          <span className="text-xl font-bold">Comerian</span>
        </div>
        <Navigation />
        <a href="#contact" className="bg-blue-500 hover:bg-blue-600 px-4 sm:px-6 py-2 rounded-full transition text-sm sm:text-base">
          Contact Us
        </a>
      </nav>

      <div className="max-w-4xl mx-auto text-center py-8 sm:py-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Outpace Your Competition with AI Automation
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 px-4">
          Leverage cutting-edge AI solutions to streamline operations, boost productivity, and drive growth.
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