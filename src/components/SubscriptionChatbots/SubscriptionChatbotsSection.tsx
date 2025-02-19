import React from 'react';
import { ChatbotCard } from './ChatbotCard';
import FadeInSection from '../FadeInSection';
import { subscriptionChatbots } from '@/data/subscriptionChatbots';

export const SubscriptionChatbotsSection: React.FC = () => {
  return (
    <section id="subscription-chatbots" className="py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <FadeInSection>
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-4">Subscription Chatbots</h2>
          <div className="max-w-4xl mx-auto mb-12 bg-gray-950/90 backdrop-blur-sm p-8 rounded-xl border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Enterprise-Grade AI, Small Business Price
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              While most AI companies charge $10,000+ to build custom chatbots, we're changing things up. We've created specialized, pre-built chatbots for specific industries that deliver enterprise solutions at a fraction of the cost.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              For just $50/month, you get access to a sophisticated $10,000 AI Chatbot.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              Simply sign up, and we'll customize it with your business details and provide you with a simple code snippet to add to your website. Why spend time and money building your own when you can get a professional, industry-specific solution for a fraction of the cost?
            </p>
            <div className="mt-6 flex items-center gap-4 text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                <span>Pre-built & Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                <span>Industry-Specific</span>
              </div>
            </div>
          </div>
        </FadeInSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {subscriptionChatbots.map((chatbot, index) => (
            <ChatbotCard key={index} chatbot={chatbot} delay={index * 200} />
          ))}
        </div>
      </div>
    </section>
  );
};