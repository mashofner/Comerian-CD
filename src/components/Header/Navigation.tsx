import React from 'react';

export const Navigation: React.FC = () => {
  return (
    <div className="hidden md:flex items-center justify-center space-x-8">
      <a href="#subscription-chatbots" className="hover:text-blue-400 transition">Subscriptions</a>
      <a href="#services" className="hover:text-blue-400 transition">Agency Services</a>
      <a href="#micro-saas" className="hover:text-blue-400 transition">Free Tools</a>
      <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
    </div>
  );
};