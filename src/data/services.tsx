import { Phone, Globe, Mail, Settings, Linkedin, Instagram, Bot, UserRoundSearch } from 'lucide-react';
import XLogo from '@/components/XLogo';
import { Service } from '@/types';

export const services: Service[] = [
  {
    icon: <Phone className="w-12 h-12 text-blue-400" />,
    title: "AI Phone System",
    description: "Missing calls after hours? Our AI phone system handles customer calls 24/7, ensuring you never miss an opportunity and reducing the load on your staff."
  },
  {
    icon: <Globe className="w-12 h-12 text-blue-400" />,
    title: "Website Design and Development",
    description: "Want your website to work harder for your business? We build modern, responsive websites that convert visitors into customers."
  },
  {
    icon: <UserRoundSearch className="w-12 h-12 text-blue-400" />,
    title: "Lead Generation",
    description: "Struggling to find quality leads? Our AI-powered system identifies and engages with potential customers across platforms, delivering a steady stream of qualified leads.",
    expandable: true,
    subServices: [
      {
        icon: <Linkedin className="w-8 h-8 text-blue-400" />,
        title: "LinkedIn Lead Generation",
        description: "Find decision-makers and build relationships at scale with AI-powered LinkedIn prospecting and engagement."
      },
      {
        icon: <XLogo className="w-8 h-8 text-blue-400" />,
        title: "X Lead Generation",
        description: "Identify and connect with potential customers on X through intelligent targeting and engagement."
      },
      {
        icon: <Bot className="w-8 h-8 text-gray-400" />,
        title: "Coming Soon",
        description: "Our next innovative lead generation solution is in development. Stay tuned for updates!"
      }
    ]
  },
  {
    icon: <Settings className="w-12 h-12 text-blue-400" />,
    title: "Workflow Automation",
    description: "Buried in repetitive tasks? Our AI automation solutions handle your routine work, freeing your team to focus on what matters most."
  },
  {
    icon: <Mail className="w-12 h-12 text-blue-400" />,
    title: "Automated Outreach",
    description: "Is manual outreach eating up your time? Our AI automates personalized communication across channels while maintaining authentic engagement.",
    expandable: true,
    subServices: [
      {
        icon: <Mail className="w-8 h-8 text-blue-400" />,
        title: "Email Campaigns",
        description: "Send personalized emails that feel human-written, with smart follow-ups that increase response rates."
      },
      {
        icon: <Instagram className="w-8 h-8 text-blue-400" />,
        title: "Instagram Outreach",
        description: "Connect with your target audience through automated, personalized Instagram messages that drive engagement."
      },
      {
        icon: <XLogo className="w-8 h-8 text-blue-400" />,
        title: "X Outreach",
        description: "Engage with potential customers on X through targeted, automated messaging that feels personal."
      }
    ]
  }
];