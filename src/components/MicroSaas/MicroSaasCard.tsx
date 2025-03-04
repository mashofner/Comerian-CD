import React from 'react';
import { MicroSaasTool } from '@/types';
import FadeInSection from '../FadeInSection';

interface MicroSaasCardProps {
  tool: MicroSaasTool;
  delay: number;
}

export const MicroSaasCard: React.FC<MicroSaasCardProps> = ({ tool, delay }) => {
  return (
    <FadeInSection delay={delay}>
      <div className="bg-gray-950/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(0,0,0,0.7)] transition duration-300 h-full flex flex-col">
        <div className="flex items-center justify-between">
          {tool.icon}
          {tool.status === 'available' ? (
            <span className="text-sm font-medium px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400">
              Available Now
            </span>
          ) : (
            <span className="text-sm font-medium px-4 py-1.5 rounded-full bg-gray-500/10 text-gray-400">
              In Development
            </span>
          )}
        </div>
        <h3 className="text-xl font-semibold text-white mt-4 mb-2">{tool.title}</h3>
        <p className="text-gray-400 mb-6 flex-grow">{tool.description}</p>
        {tool.status === 'available' && tool.link && (
          <a 
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-center"
          >
            Try It Free
          </a>
        )}
      </div>
    </FadeInSection>
  );
};