import React from 'react';
import { Prototype } from '@/types';
import FadeInSection from '../FadeInSection';

interface PrototypeCardProps {
  prototype: Prototype;
  delay: number;
}

export const PrototypeCard: React.FC<PrototypeCardProps> = ({ prototype, delay }) => {
  return (
    <FadeInSection delay={delay}>
      <div className="bg-gray-950/90 backdrop-blur-sm rounded-xl border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(0,0,0,0.7)] overflow-hidden flex flex-col h-full">
        {prototype.image && (
          <a 
            href={prototype.link} 
            target="_blank"
            rel="noopener noreferrer" 
            className="block w-full h-48 relative group overflow-hidden"
          >
            <img 
              src={prototype.image} 
              alt={prototype.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-transparent group-hover:bg-gray-900/50 transition-all duration-300 flex items-center justify-center">
              <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 [text-shadow:_0_8px_32px_rgb(0_0_0_/_1),_0_16px_32px_rgb(0_0_0_/_1),_0_24px_48px_rgb(0_0_0_/_1),_0_32px_64px_rgb(0_0_0_/_1),_0_48px_96px_rgb(0_0_0_/_1),_0_64px_128px_rgb(0_0_0_/_1)]">
                View Company →
              </span>
            </div>
          </a>
        )}
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex items-center justify-between space-x-4 mb-4">
            <div className="bg-gray-900/50 backdrop-blur-sm p-3 rounded-lg flex-shrink-0">
              {prototype.icon}
            </div>
            <span className="text-sm font-medium px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 flex-shrink-0">
              {prototype.status}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">{prototype.title}</h3>
          <p className="text-gray-400 mb-4 flex-grow">{prototype.description}</p>
          {prototype.prototypeLink && !prototype.hidePrototypeLink && (
            <div className="mt-auto pt-4">
              <a 
                href={prototype.prototypeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-center"
              >
                View Prototype
              </a>
            </div>
          )}
        </div>
      </div>
    </FadeInSection>
  );
};