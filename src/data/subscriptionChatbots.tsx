import { MessageSquare, Bot } from 'lucide-react';
import { SubscriptionChatbot } from '@/types';

export const subscriptionChatbots: SubscriptionChatbot[] = [
  {
    icon: <MessageSquare className="w-10 h-10 text-blue-400" />,
    title: "Trash Can Cleaning Customer Support AI Chatbot",
    description: "A specialized chatbot designed for trash can cleaning businesses. Handles customer inquiries.",
    price: 50,
    status: 'available',
    features: [
      "24/7 customer support",
      "FAQ handling",
      "Pricing information"
    ]
  },
  {
    icon: <Bot className="w-10 h-10 text-gray-400" />,
    title: "Coming Soon",
    description: "Our next industry-specific chatbot solution is in development.",
    price: 0,
    status: 'coming-soon'
  },
  {
    icon: <Bot className="w-10 h-10 text-gray-400" />,
    title: "Coming Soon",
    description: "Another specialized chatbot solution is on the way.",
    price: 0,
    status: 'coming-soon'
  }
];