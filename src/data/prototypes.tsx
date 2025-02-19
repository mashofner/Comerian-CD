import { Bot, MessageSquare } from 'lucide-react';
import { Prototype } from '@/types';

export const prototypes: Prototype[] = [
  {
    icon: <MessageSquare className="w-10 h-10 text-blue-400" />,
    title: "Mission Pet Memorials Chatbot",
    status: "Customer Support Chatbot",
    description: "This AI Chatbot will help Mission Pet Memorials with all of its customer support needs. It will maintain 24/7 service alleviating Mission Pets' customer support staff from after hour customer calls. This will save Mission Pet Memorials money by decreasing how much time their staff spends on support. It will also improve the customer experience.",
    image: "/Untitled design-2.png",
    link: "http://www.superiorpetcrematoryservices.com/",
    prototypeLink: "https://creator.voiceflow.com/prototype/67770cf3c2f2c41fa703a1de"
  },
  {
    icon: <Bot className="w-10 h-10 text-gray-400" />,
    title: "Coming Soon...",
    status: "In Development",
    description: "Our next innovative AI solution is in development. Stay tuned for updates!"
  }
];