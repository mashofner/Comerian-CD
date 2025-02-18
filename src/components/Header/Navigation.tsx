import React from 'react';

export const Navigation: React.FC = () => {
  return (
    <div className="hidden md:flex space-x-8">
      <a href="#services" className="hover:text-blue-400 transition">Services</a>
      <a href="#prototypes" className="hover:text-blue-400 transition">Prototypes</a>
      <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
    </div>
  );
};