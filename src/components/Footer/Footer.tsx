import React from 'react';
import { Workflow } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="text-gray-400 py-8 sm:py-12 bg-gray-900/50 backdrop-blur-sm relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <Workflow className="w-6 h-6 text-blue-400" />
            <span className="text-white font-bold">Comerian</span>
          </div>
          <div className="text-sm mt-4 sm:mt-0">
            © {new Date().getFullYear()} Comerian. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};