import React from 'react';
import { Service } from '@/types';
import FadeInSection from '../FadeInSection';

interface ServiceCardProps {
  service: Service;
  delay: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, delay }) => {
  return (
    <FadeInSection delay={delay}>
      <div className="bg-gray-950/90 backdrop-blur-sm p-8 rounded-xl border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(0,0,0,0.7)] transition duration-300 h-full flex flex-col">
        {service.icon}
        <h3 className="text-xl font-semibold text-white mt-4 mb-2">{service.title}</h3>
        <p className="text-gray-400">{service.description}</p>
      </div>
    </FadeInSection>
  );
};