import React, { useState } from 'react';
import { Mail, MessageSquare } from 'lucide-react';
import FadeInSection from '../FadeInSection';
import { ContactForm } from './ContactForm';

export const ContactSection: React.FC = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const emailSubject = encodeURIComponent("Interested in AI Automation Services");
  const emailBody = encodeURIComponent(
    "Hi,\n\nI'm interested in learning more about your AI automation services. Could you please provide more information?\n\nBest regards"
  );
  const emailLink = `mailto:mashofner@comeriandigital.net?subject=${emailSubject}&body=${emailBody}`;

  const smsBody = encodeURIComponent(
    "Hi, I'm interested in learning more about your AI automation services."
  );
  const smsLink = `sms:+15017647572?body=${smsBody}`;

  const handleSubscribe = async (formData: { name: string; email: string }) => {
    setFormError(null);

    const portalId = import.meta.env.VITE_HUBSPOT_PORTAL_ID;
    const formGuid = import.meta.env.VITE_HUBSPOT_FORM_GUID;

    if (!portalId || !formGuid) {
      console.error('Missing HubSpot configuration');
      setFormError('Configuration error. Please try again later.');
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
        }
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title
      }
    };

    try {
      const response = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit form');
      }

      setIsSubscribed(true);
    } catch (error) {
      console.error('Failed to submit form to HubSpot:', error);
      setFormError('Failed to subscribe. Please try again later.');
    }
  };

  return (
    <section id="contact" className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <FadeInSection>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6 sm:mb-8">Contact</h2>
          <div className="bg-gray-950/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(0,0,0,0.7)] transition duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">Ready to Get Started?</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 text-center">
              Let us transform your business with AI Automation. Reach out and we'll answer any questions you have.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8 sm:mb-12">
              <a
                href={emailLink}
                className="inline-flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-600 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold text-white transition"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
              <a
                href={smsLink}
                className="inline-flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-600 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold text-white transition"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Text Us</span>
              </a>
            </div>

            <div className="border-t border-gray-800 pt-6 sm:pt-8">
              {isSubscribed ? (
                <div className="text-center space-y-4">
                  <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Thank you for subscribing!</h4>
                  <p className="text-sm sm:text-base text-gray-400">
                    We'll keep you updated with the latest AI insights and news.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">Not Ready? No worries!</h3>
                  <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 text-center">
                    Subscribe to our newsletter and we'll send you AI Updates, trainings, industry insights, and more...
                  </p>
                  <ContactForm onSubmit={handleSubscribe} error={formError} />
                </>
              )}
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};