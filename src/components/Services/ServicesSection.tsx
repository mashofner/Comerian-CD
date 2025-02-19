import React, { useState } from 'react';
import { ServiceCard } from './ServiceCard';
import { ExpandableServiceCard } from './ExpandableServiceCard';
import { SubServicesDropdown } from './SubServicesDropdown';
import { QuoteForm } from './QuoteForm';
import FadeInSection from '../FadeInSection';
import { services } from '@/data/services';

export const ServicesSection: React.FC = () => {
  const [showLeadGenServices, setShowLeadGenServices] = useState(false);
  const [showOutreachServices, setShowOutreachServices] = useState(false);

  const itemsPerRow = 3;
  const leadGenIndex = services.findIndex(s => s.title === "Lead Generation");
  const outreachIndex = services.findIndex(s => s.title === "Automated Outreach");
  
  const leadGenRowIndex = Math.floor(leadGenIndex / itemsPerRow);
  const outreachRowIndex = Math.floor(outreachIndex / itemsPerRow);
  
  const leadGenRowEndIndex = (leadGenRowIndex + 1) * itemsPerRow;
  const outreachRowEndIndex = (outreachRowIndex + 1) * itemsPerRow;

  return (
    <section id="services" className="container mx-auto px-4 sm:px-6 py-8">
      <FadeInSection>
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-4">Agency Services</h2>
        <div className="max-w-4xl mx-auto mb-12 bg-gray-950/90 backdrop-blur-sm p-8 rounded-xl border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Custom AI Solutions for Enterprise Needs
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            When your business requires a tailored AI solution, our agency services deliver. We build custom chatbots, automation systems, and AI integrations designed specifically for your unique workflows and requirements.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mt-4">
            From enterprise-scale chatbots to complex automation systems, we create solutions that transform how your business operates. Our team works closely with you to understand your needs and develop AI solutions that drive real results.
          </p>
          <div className="mt-6 flex items-center gap-4 text-gray-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
              <span>Custom Built</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
              <span>Enterprise Ready</span>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <a
              href="#quote-form"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-12 py-3 rounded-full transition-colors duration-200 text-center text-lg"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </FadeInSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 relative">
        {services.map((service, index) => (
          <React.Fragment key={index}>
            {service.expandable ? (
              <ExpandableServiceCard
                service={service}
                delay={index * 200}
                isExpanded={
                  (service.title === "Lead Generation" && showLeadGenServices) ||
                  (service.title === "Automated Outreach" && showOutreachServices)
                }
                onToggle={() => {
                  if (service.title === "Lead Generation") {
                    setShowLeadGenServices(!showLeadGenServices);
                  } else if (service.title === "Automated Outreach") {
                    setShowOutreachServices(!showOutreachServices);
                  }
                }}
              />
            ) : (
              <ServiceCard service={service} delay={index * 200} />
            )}
            
            {index === leadGenRowEndIndex - 1 && showLeadGenServices && (
              <SubServicesDropdown
                service={services.find(s => s.title === "Lead Generation")}
                columns={3}
              />
            )}

            {index === outreachRowEndIndex - 1 && showOutreachServices && (
              <SubServicesDropdown
                service={services.find(s => s.title === "Automated Outreach")}
                columns={3}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      <div id="quote-form" className="max-w-4xl mx-auto mt-16 bg-gray-950/90 backdrop-blur-sm p-8 rounded-xl border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">Request a Quote</h3>
        <p className="text-gray-300 text-center mb-8">
          Fill out the form below and we'll reach out to discuss how to fuse AI into your business.
        </p>
        <QuoteForm />
      </div>
    </section>
  );
};