import React from 'react';
import { PrototypeCard } from './PrototypeCard';
import FadeInSection from '../FadeInSection';
import { prototypes } from '@/data/prototypes';

export const PrototypesSection: React.FC = () => {
  return (
    <section id="prototypes" className="py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <FadeInSection>
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12">Current Prototypes</h2>
        </FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {prototypes.map((prototype, index) => (
            <PrototypeCard key={index} prototype={prototype} delay={index * 200} />
          ))}
        </div>
      </div>
    </section>
  );
};