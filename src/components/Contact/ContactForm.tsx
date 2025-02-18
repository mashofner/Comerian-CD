import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
}

interface ContactFormProps {
  onSubmit: (data: FormData) => Promise<void>;
  error: string | null;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, error }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
    setFormData({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      {error && (
        <div className="text-red-500 text-center mb-4">
          {error}
        </div>
      )}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <input
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="flex-1 px-6 sm:px-8 py-3 rounded-full bg-transparent border border-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
          required
        />
        <input
          type="email"
          placeholder="Your email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="flex-1 px-6 sm:px-8 py-3 rounded-full bg-transparent border border-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
          required
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-600 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold text-white transition"
      >
        <span>Subscribe</span>
      </button>
    </form>
  );
};