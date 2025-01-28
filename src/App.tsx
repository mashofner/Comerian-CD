import React from 'react';
import FadeInSection from './components/FadeInSection';
import { App } from './App.1';

interface PricingOption {
  title: string;
  setup?: number;
  monthly?: number;
  description?: string;
  isCustom?: boolean;
  customDetails?: string[];
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  pricingOptions?: PricingOption[];
}

export interface Prototype {
  icon: React.ReactNode;
  title: string;
  status: string;
  description: string;
  image?: string;
  link?: string;
  prototypeLink?: string;
  hidePrototypeLink?: boolean;
}

export function ServiceCard({ service, delay }: { service: Service; delay: number }) {
  return (
    <FadeInSection delay={delay}>
      <div className="bg-gray-950/90 backdrop-blur-sm p-8 rounded-xl border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(0,0,0,0.7)] transition duration-300 h-full flex flex-col">
        {service.icon}
        <h3 className="text-xl font-semibold text-white mt-4 mb-2">{service.title}</h3>
        <p className="text-gray-400 mb-6">{service.description}</p>
        
        {service.pricingOptions && (
          <div className="grid grid-cols-1 gap-4 mt-auto">
            {service.pricingOptions.map((option, i) => (
              <div key={i} className="bg-gray-900/50 p-4 rounded-lg flex flex-col h-full">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-white whitespace-pre-line">
                    {option.title}
                  </h4>
                  {!option.isCustom ? (
                    <div className="text-right">
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-blue-400">${option.setup}</span>
                        <span className="text-sm text-gray-400">setup</span>
                      </div>
                    </div>
                  ) : (
                    <div className="text-right">
                      <div className="flex flex-col items-end">
                        <span className="text-xl font-bold text-blue-400">Custom</span>
                        <span className="text-xl font-bold text-blue-400">Quote</span>
                      </div>
                    </div>
                  )}
                </div>
                {option.description && (
                  <p className="text-gray-400 text-sm mb-2">{option.description}</p>
                )}
                {option.monthly && !option.isCustom && (
                  <div className="text-sm text-gray-400">
                    +${option.monthly}/mo maintenance
                  </div>
                )}
                {option.customDetails && (
                  <ul className="mt-4 space-y-2">
                    {option.customDetails.map((detail, index) => (
                      <li key={index} className="text-gray-400 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </FadeInSection>
  );
}

export function PrototypeCard({ prototype, delay }: { prototype: Prototype; delay: number }) {
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
}

export default App;