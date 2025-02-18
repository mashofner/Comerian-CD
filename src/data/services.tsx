import React from 'react';
import { MessageSquare, Phone, Globe, Mail, Settings } from 'lucide-react';
import { Linkedin, Instagram } from 'lucide-react';
import XLogo from '@/components/XLogo';
import { Service } from '@/types';

export const services: Service[] = [
  {
    icon: <MessageSquare className="w-12 h-12 text-blue-400" />,
    title: "Chatbot Creation",
    description: "Custom AI chatbots designed to enhance customer service and automate support."
  },
  {
    icon: <Phone className="w-12 h-12 text-blue-400" />,
    title: "Phone Call Chatbot",
    description: "AI-powered phone system that handles customer calls, inquiries, and automated responses."
  },
  {
    icon: <Globe className="w-12 h-12 text-blue-400" />,
    title: "Lead Generation",
    description: "Automated lead generation through intelligent profile scraping and data extraction.",
    expandable: true,
    subServices: [
      {
        icon: <Linkedin className="w-8 h-8 text-blue-400" />,
        title: "LinkedIn Lead Generation",
        description: "Targeted lead generation through LinkedIn profile analysis and engagement."
      },
      {
        icon: <XLogo className="w-8 h-8 text-blue-400" />,
        title: "X Lead Generation",
        description: "Strategic lead generation through X platform data extraction and engagement."
      }
    ]
  },
  {
    icon: <Mail className="w-12 h-12 text-blue-400" />,
    title: "Cold Outreach",
    description: "Intelligent automation for personalized and effective outreach across multiple platforms.",
    expandable: true,
    subServices: [
      {
        icon: <Mail className="w-8 h-8 text-blue-400" />,
        title: "Email Outreach",
        description: "Automated email campaigns with personalized messaging and follow-ups."
      },
      {
        icon: <Instagram className="w-8 h-8 text-blue-400" />,
        title: "Instagram Outreach",
        description: "Strategic outreach through Instagram DMs with automated engagement."
      },
      {
        icon: <XLogo className="w-8 h-8 text-blue-400" />,
        title: "X Platform Outreach",
        description: "Automated messaging and engagement through X platform."
      }
    ]
  },
  {
    icon: <Globe className="w-12 h-12 text-blue-400" />,
    title: "Web Development",
    description: "Custom website development with modern technologies and AI-powered features."
  },
  {
    icon: <Settings className="w-12 h-12 text-blue-400" />,
    title: "Process Automation",
    description: "Streamline workflows and operations with smart AI-powered automation solutions."
  }
];