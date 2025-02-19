import React from 'react';
import { Service } from '@/types';

interface SubServicesDropdownProps {
  service?: Service;
  columns: number;
}

export const SubServicesDropdown: React.FC<SubServicesDropdownProps> = ({ service, columns }) => {
  if (!service?.subServices) return null;

  return (
    <div className="col-span-1 md:col-span-3 w-full mt-4 sm:mt-8 bg-gray-950/90 backdrop-blur-sm p-4 sm:p-8 rounded-xl border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-300">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
        {service.subServices.map((subService, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 p-4 sm:p-6 bg-gray-900/50 rounded-lg">
            <div className="bg-gray-900/50 p-3 sm:p-4 rounded-lg self-start">
              {subService.icon}
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">{subService.title}</h4>
              <p className="text-sm sm:text-base text-gray-400">{subService.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};