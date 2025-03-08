import React from 'react';
import { SubscriptionChatbot } from '@/types';
import FadeInSection from '../FadeInSection';

interface ChatbotCardProps {
  chatbot: SubscriptionChatbot;
  delay: number;
}

export const ChatbotCard: React.FC<ChatbotCardProps> = ({ chatbot, delay }) => {
  const handleAction = () => {
    if (chatbot.actionLink) {
      window.location.href = chatbot.actionLink;
    }
  };

  const showPricing = chatbot.price !== undefined;

  return (
    <FadeInSection delay={delay}>
      <div className="bg-gray-950/90 backdrop-blur-sm rounded-xl border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(0,0,0,0.7)] overflow-hidden h-full flex flex-col relative font-sans">
        {chatbot.badge && (
          <div className="absolute top-6 right-6">
            <span className="text-sm font-bold px-6 py-2 rounded-full bg-blue-500/10 text-blue-400 text-center font-sans">
              {chatbot.badge}
            </span>
          </div>
        )}
        
        <div className="p-6 sm:p-8 flex flex-col h-full">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">{chatbot.title}</h3>
          <p className="text-gray-300 text-lg mb-6 font-sans">{chatbot.description}</p>
          
          {chatbot.features && (
            <ul className="space-y-3 mb-8">
              {chatbot.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3 text-gray-300 font-sans">
                  <span className="text-blue-400 text-xl">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-auto space-y-6">
            {showPricing && chatbot.price && (
              <>
                <div className="text-center">
                  {chatbot.originalPrice && (
                    <div className="text-gray-400 line-through mb-1 font-sans">
                      ${chatbot.originalPrice.toLocaleString()}
                    </div>
                  )}
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-white font-sans">
                      ${chatbot.price.toLocaleString()}
                    </span>
                    {chatbot.priceLabel && (
                      <span className="text-gray-400 font-sans">{chatbot.priceLabel}</span>
                    )}
                  </div>
                  {chatbot.priceSubtext && (
                    <div className="text-sm text-blue-400 mt-2 font-sans">{chatbot.priceSubtext}</div>
                  )}
                </div>

                {chatbot.valueProps && (
                  <div className="text-sm text-gray-400 text-center space-y-1 font-sans">
                    {chatbot.valueProps.map((prop, index) => (
                      <div key={index}>{prop}</div>
                    ))}
                  </div>
                )}
              </>
            )}

            <div className="space-y-3">
              {chatbot.demoLink && (
                <a
                  href={chatbot.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center text-lg font-sans"
                >
                  {chatbot.demoText || "View Demo"}
                </a>
              )}
              <button 
                onClick={handleAction}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-lg font-sans"
              >
                {chatbot.actionText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};