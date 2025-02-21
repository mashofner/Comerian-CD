import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
}

interface PreOrderFormProps {
  onClose: () => void;
  productName: string;
}

export const PreOrderForm: React.FC<PreOrderFormProps> = ({ onClose, productName }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phoneNumber: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const portalId = import.meta.env.VITE_HUBSPOT_PORTAL_ID;
    const formGuid = import.meta.env.VITE_HUBSPOT_FORM_PREORDER;

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
          value: formData.phoneNumber
        },
        {
          name: 'product_name',
          value: productName
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

      setIsSubmitted(true);
    } catch (err) {
      console.error('Failed to submit form to HubSpot:', err);
      setError('Failed to submit form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center z-10 p-4">
      <div className="bg-gray-950/90 rounded-xl border border-gray-800 p-6 sm:p-8 max-w-md w-full shadow-[0_0_15px_rgba(0,0,0,0.5)]">
        {isSubmitted ? (
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Pre-order Submitted!</h3>
            <p className="text-gray-300">
              Thank you for your interest in {productName}. We'll reach out soon with more information.
            </p>
            <p className="text-gray-400 text-sm">
              Note: You will not be charged at this time. Payment will only be processed once the product is released.
            </p>
            <button
              onClick={onClose}
              className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-semibold text-white mb-4">Pre-order {productName}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="text-red-500 text-center mb-4">
                  {error}
                </div>
              )}
              <div>
                <input
                  type="text"
                  placeholder="Your name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-transparent border border-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-transparent border border-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone number *"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-transparent border border-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>
              <div className="flex space-x-4 mt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 bg-transparent border border-gray-800 text-gray-300 hover:bg-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Pre-order'}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};