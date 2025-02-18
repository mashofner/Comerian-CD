import React from 'react';
import { SubscriptionChatbot } from '@/types';
import FadeInSection from '../FadeInSection';

interface ChatbotCardProps {
  chatbot: SubscriptionChatbot;
  delay: number;
}

export const ChatbotCard: React.FC<ChatbotCardProps> = ({ chatbot, delay }) => {
  return (
    <FadeInSection delay={delay}>
      <div className="bg-gray-950/90 backdrop-blur-sm rounded-xl border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(0,0,0,0.7)] overflow-hidden h-full flex flex-col">
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-gray-900/50 backdrop-blur-sm p-3 rounded-lg">
              {chatbot.icon}
            </div>
            {chatbot.status === 'available' ? (
              <div className="inline-flex items-center justify-center min-w-[120px]">
                <span className="text-sm font-medium px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-center">
                  Available Now
                </span>
              </div>
            ) : (
              <div className="inline-flex items-center justify-center min-w-[120px]">
                <span className="text-sm font-medium px-4 py-1.5 rounded-full bg-gray-500/10 text-gray-400 text-center">
                  Coming Soon
                </span>
              </div>
            )}
          </div>
          
          <h3 className="text-xl font-semibold text-white mb-2">{chatbot.title}</h3>
          <p className="text-gray-400 mb-4">{chatbot.description}</p>
          
          {chatbot.features && (
            <ul className="space-y-2 mb-6 flex-grow">
              {chatbot.features.map((feature, index) => (
                <li key={index} className="flex items-baseline space-x-2">
                  <span className="text-blue-400">•</span>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          )}

          {chatbot.status === 'available' && (
            <div className="mt-auto">
              <div className="text-center mb-4">
                <span className="text-3xl font-bold text-white">${chatbot.price}</span>
                <span className="text-gray-400">/month</span>
              </div>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                Subscribe Now
              </button>
            </div>
          )}
        </div>
      </div>
    </FadeInSection>
  );
};