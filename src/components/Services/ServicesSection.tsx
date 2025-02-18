import React, { useState } from 'react';
import { ServiceCard } from './ServiceCard';
import { ExpandableServiceCard } from './ExpandableServiceCard';
import { SubServicesDropdown } from './SubServicesDropdown';
import FadeInSection from '../FadeInSection';
import { services } from '@/data/services';

export const ServicesSection: React.FC = () => {
  const [showLeadGenServices, setShowLeadGenServices] = useState(false);
  const [showOutreachServices, setShowOutreachServices] = useState(false);

  const itemsPerRow = window.innerWidth >= 768 ? 3 : 1;
  const leadGenIndex = services.findIndex(s => s.title === "Lead Generation");
  const outreachIndex = services.findIndex(s => s.title === "Cold Outreach");
  
  const leadGenRowIndex = Math.floor(leadGenIndex / itemsPerRow);
  const outreachRowIndex = Math.floor(outreachIndex / itemsPerRow);
  
  const leadGenRowEndIndex = (leadGenRowIndex + 1) * itemsPerRow;
  const outreachRowEndIndex = (outreachRowIndex + 1) * itemsPerRow;

  return (
    <section id="services" className="container mx-auto px-4 sm:px-6 py-8">
      <FadeInSection>
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12">Our Services</h2>
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
                  (service.title === "Cold Outreach" && showOutreachServices)
                }
                onToggle={() => {
                  if (service.title === "Lead Generation") {
                    setShowLeadGenServices(!showLeadGenServices);
                  } else if (service.title === "Cold Outreach") {
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
                columns={2}
              />
            )}

            {index === outreachRowEndIndex - 1 && showOutreachServices && (
              <SubServicesDropdown
                service={services.find(s => s.title === "Cold Outreach")}
                columns={3}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};