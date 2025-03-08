import React from 'react';
import { ChatbotCard } from './ChatbotCard';
import FadeInSection from '../FadeInSection';
import { subscriptionChatbots } from '@/data/subscriptionChatbots';

export const SubscriptionChatbotsSection: React.FC = () => {
  return (
    <section id="subscription-chatbots" className="py-8 sm:py-12 font-sans">
      <div className="container mx-auto px-4 sm:px-6">
        <FadeInSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-4 font-sans">
            Stop Losing Customers—Get a Chatbot That Works for You, Free for 3 Months!
          </h2>
          <div className="max-w-4xl mx-auto mb-12 bg-gray-950/90 backdrop-blur-sm p-8 rounded-xl border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed font-sans">
              Tired of losing customers because you can't answer their questions fast enough? Frustrated with expensive support staff or missing after-hours calls?
            </p>
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mt-4 font-sans">
              Our AI chatbots handle customer questions 24/7, helping you catch more sales and grow your business. Try risk-free for 3 months—and if you don't like it, you don't pay a dime.
            </p>
          </div>
        </FadeInSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {subscriptionChatbots.map((chatbot, index) => (
            <ChatbotCard key={index} chatbot={chatbot} delay={index * 200} />
          ))}
        </div>
      </div>
    </section>
  );
};