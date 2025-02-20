import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  website: string;
  message: string;
}

export const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    website: '',
    message: ''
  });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const portalId = import.meta.env.VITE_HUBSPOT_PORTAL_ID;
    const formGuid = import.meta.env.VITE_HUBSPOT_FORM_GUID_QUOTE;

    if (!portalId || !formGuid) {
      console.error('Missing HubSpot configuration');
      setError('Configuration error. Please try again later.');
      setIsSubmitting(false);
      return;
    }

    const payload = {
      fields: [
        {
          name: 'firstname',
          value: formData.name
        },
        {
          name: 'email',
          value: formData.email
        },
        {
          name: 'phone',
          value: formData.phone
        },
        {
          name: 'website',
          value: formData.website
        },
        {
          name: 'message',
          value: formData.message
        }
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title
      }
    };

    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit form');
      }

      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        website: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to submit form to HubSpot:', error);
      setError('Failed to submit form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center space-y-4">
        <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Thank you for your interest!</h4>
        <p className="text-sm sm:text-base text-gray-400">
          We've received your request and will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="text-red-500 text-center mb-4">
          {error}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your name *"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-6 py-3 rounded-lg bg-transparent border border-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
          required
        />
        <input
          type="email"
          placeholder="Your email *"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-6 py-3 rounded-lg bg-transparent border border-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="tel"
          placeholder="Phone number *"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-6 py-3 rounded-lg bg-transparent border border-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
          required
        />
        <input
          type="url"
          placeholder="Website URL *"
          value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
          className="w-full px-6 py-3 rounded-lg bg-transparent border border-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
          required
        />
      </div>
      <textarea
        placeholder="What else would you like us to know?"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="w-full px-6 py-3 rounded-lg bg-transparent border border-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors min-h-[120px]"
      />
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-12 py-3 rounded-full transition-colors duration-200 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Get a Quote'}
        </button>
      </div>
    </form>
  );
};