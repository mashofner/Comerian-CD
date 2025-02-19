import React from 'react';
import { SubscriptionChatbot } from '@/types';
import FadeInSection from '../FadeInSection';

interface ChatbotCardProps {
  chatbot: SubscriptionChatbot;
  delay: number;
}

export const ChatbotCard: React.FC<ChatbotCardProps> = ({ chatbot, delay }) => {
  const showPricing = chatbot.status === 'available' || chatbot.price === 40;

  return (
    <FadeInSection delay={delay}>
      <div className="bg-gray-950/90 backdrop-blur-sm rounded-xl border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(0,0,0,0.7)] overflow-hidden h-full flex flex-col">
        {chatbot.demoImage && (
          <a 
            href={chatbot.demoCompanyLink} 
            target="_blank"
            rel="noopener noreferrer" 
            className="block w-full h-48 relative group overflow-hidden"
          >
            <img 
              src={chatbot.demoImage} 
              alt={chatbot.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-transparent group-hover:bg-gray-900/50 transition-all duration-300 flex items-center justify-center">
              <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 [text-shadow:_0_8px_32px_rgb(0_0_0_/_1),_0_16px_32px_rgb(0_0_0_/_1),_0_24px_48px_rgb(0_0_0_/_1),_0_32px_64px_rgb(0_0_0_/_1),_0_48px_96px_rgb(0_0_0_/_1),_0_64px_128px_rgb(0_0_0_/_1)]">
                View Example Company →
              </span>
            </div>
          </a>
        )}
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
            ) : chatbot.price === 40 ? (
              <div className="inline-flex items-center justify-center min-w-[120px]">
                <span className="text-sm font-medium px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-center">
                  Pre-Sale
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

          {showPricing && (
            <div className="mt-auto space-y-4">
              <div className="text-center">
                <span className="text-3xl font-bold text-white">${chatbot.price}</span>
                <span className="text-gray-400">/month</span>
              </div>
              <div className="space-y-2">
                {chatbot.demoLink && (
                  <a
                    href={chatbot.title === "Pet Services Chatbot" ? "#prototypes" : chatbot.demoLink}
                    target={chatbot.title === "Pet Services Chatbot" ? "_self" : "_blank"}
                    rel={chatbot.title === "Pet Services Chatbot" ? undefined : "noopener noreferrer"}
                    className="block w-full bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-center"
                  >
                    {chatbot.title === "Pet Services Chatbot" ? "Check Out Prototype" : "Try Live Demo"}
                  </a>
                )}
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                  {chatbot.status === 'available' ? 'Subscribe Now' : 'Pre-Order Now'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </FadeInSection>
  );
};