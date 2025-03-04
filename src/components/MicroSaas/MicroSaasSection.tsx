import React from 'react';
import { MicroSaasCard } from './MicroSaasCard';
import FadeInSection from '../FadeInSection';
import { microSaasTools } from '@/data/microSaasTools';

export const MicroSaasSection: React.FC = () => {
  return (
    <section id="micro-saas" className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <FadeInSection>
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-4">Free Micro-SaaS Tools</h2>
        <div className="max-w-4xl mx-auto mb-12 bg-gray-950/90 backdrop-blur-sm p-8 rounded-xl border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Tools We Built Because We Got Annoyed
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            We got tired of overpriced, overcomplicated software that didn't do what we needed. So we said "screw it" and built our own tools that actually work the way we wanted.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mt-4">
            Since we already made these tools for ourselves, we figured we'd share them with you. No strings attached, no credit card required, just practical solutions to real problems.
          </p>
          <div className="mt-6 flex items-center gap-4 text-gray-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
              <span>100% Free</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
              <span>No Sign-up Required</span>
            </div>
          </div>
        </div>
      </FadeInSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
        {microSaasTools.map((tool, index) => (
          <MicroSaasCard key={index} tool={tool} delay={index * 200} />
        ))}
      </div>
    </section>
  );
};