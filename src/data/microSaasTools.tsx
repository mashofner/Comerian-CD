import { Mail, Database, BarChart3 } from 'lucide-react';
import { MicroSaasTool } from '@/types';

export const microSaasTools: MicroSaasTool[] = [
  {
    icon: <Mail className="w-10 h-10 text-blue-400" />,
    title: "Gmail Drafter",
    description: "Upload a Google Sheet of leads and automatically create email drafts based on a template for each lead.",
    status: 'available',
    link: "https://gmaildrafter.comeriandigital.net"
  },
  {
    icon: <Database className="w-10 h-10 text-gray-400" />,
    title: "In Development",
    description: "In Development",
    status: 'development'
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-gray-400" />,
    title: "In Development",
    description: "In Development",
    status: 'development'
  }
];