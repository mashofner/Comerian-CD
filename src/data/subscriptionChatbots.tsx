import { MessageSquare, Bot } from 'lucide-react';
import { SubscriptionChatbot } from '@/types';

export const subscriptionChatbots: SubscriptionChatbot[] = [
  {
    icon: <MessageSquare className="w-10 h-10 text-blue-400" />,
    title: "Trash Can Cleaning Customer Support AI Chatbot",
    description: "A specialized chatbot designed for trash can cleaning businesses. Handles customer inquiries and support 24/7. Try our live demo to see it in action!",
    price: 50,
    status: 'available',
    features: [
      "24/7 customer support",
      "FAQ handling",
      "Pricing information"
    ],
    demoLink: "https://creator.voiceflow.com/prototype/677e0958687438e9a81283d3",
    demoImage: "/Screenshot 2025-01-09 153606.png",
    demoCompanyLink: "https://supercleancans.com/"
  },
  {
    icon: <MessageSquare className="w-10 h-10 text-blue-400" />,
    title: "Pet Crematorium and Funeral Home Customer Support AI Chatbot",
    description: "Currently in development - Pre-order now and save $25/month for life! This specialized chatbot for pet crematoriums and memorial services will be available soon.",
    price: 25,
    status: 'coming-soon',
    features: [
      "Regular price will be $50/month",
      "Lock in $25/month for life",
      "24/7 customer support",
      "Service information",
      "Pricing details",
      "Service explanations"
    ],
    demoLink: "https://creator.voiceflow.com/prototype/67770cf3c2f2c41fa703a1de",
    demoImage: "/Untitled design-2.png",
    demoCompanyLink: "http://www.superiorpetcrematoryservices.com/"
  },
  {
    icon: <Bot className="w-10 h-10 text-gray-400" />,
    title: "More Industries Coming Soon",
    description: "We're developing chatbots for various industries. Contact us to suggest your industry!",
    price: 0,
    status: 'coming-soon'
  }
];