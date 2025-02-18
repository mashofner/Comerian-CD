import React from 'react';
import { Service } from '@/types';
import FadeInSection from '../FadeInSection';

interface ExpandableServiceCardProps {
  service: Service;
  delay: number;
  isExpanded: boolean;
  onToggle: () => void;
}

export const ExpandableServiceCard: React.FC<ExpandableServiceCardProps> = ({
  service,
  delay,
  isExpanded,
  onToggle
}) => {
  return (
    <FadeInSection delay={delay}>
      <div 
        className="bg-gray-950/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(0,0,0,0.7)] transition duration-300 h-full cursor-pointer relative group"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          {service.icon}
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-white mt-4 mb-2">{service.title}</h3>
        <p className="text-sm sm:text-base text-gray-400 mb-4">{service.description}</p>
        
        <div className="text-sm text-blue-400">
          {isExpanded ? "Click to collapse" : "Click to expand"}
        </div>
      </div>
    </FadeInSection>
  );
};