import React, { useState } from 'react';
import { services } from '@/data/services';

interface FormData {
  name: string;
  email: string;
  phone: string;
  website: string;
  service: string;
  message: string;
}

export const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    website: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      website: '',
      service: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your name *"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-6 py-3 rounded-lg bg-transparent border border-gray-800 text-white placeholder:text-gray-400 [&::placeholder]:after:content-['_*'] [&::placeholder]:after:text-red-500 focus:outline-none focus:border-blue-500 transition-colors"
          required
        />
        <input
          type="email"
          placeholder="Your email *"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-6 py-3 rounded-lg bg-transparent border border-gray-800 text-white placeholder:text-gray-400 [&::placeholder]:after:content-['_*'] [&::placeholder]:after:text-red-500 focus:outline-none focus:border-blue-500 transition-colors"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="tel"
          placeholder="Phone number *"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-6 py-3 rounded-lg bg-transparent border border-gray-800 text-white placeholder:text-gray-400 [&::placeholder]:after:content-['_*'] [&::placeholder]:after:text-red-500 focus:outline-none focus:border-blue-500 transition-colors"
          required
        />
        <input
          type="url"
          placeholder="Website URL *"
          value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
          className="w-full px-6 py-3 rounded-lg bg-transparent border border-gray-800 text-white placeholder:text-gray-400 [&::placeholder]:after:content-['_*'] [&::placeholder]:after:text-red-500 focus:outline-none focus:border-blue-500 transition-colors"
          required
        />
      </div>
      <div className="relative">
        <select
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full px-6 py-3 pr-12 rounded-lg bg-transparent border border-gray-800 text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500 transition-colors appearance-none"
          required
        >
          <option value="" className="bg-gray-900">Select a service *</option>
          {services.map((service, index) => (
            <option key={index} value={service.title} className="bg-gray-900">
              {service.title}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
      <textarea
        placeholder="What else would you like us to know?"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="w-full px-6 py-3 rounded-lg bg-transparent border border-gray-800 text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500 transition-colors min-h-[120px]"
      />
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-12 py-3 rounded-full transition-colors duration-200 text-lg"
        >
          Get a Quote
        </button>
      </div>
    </form>
  );
};