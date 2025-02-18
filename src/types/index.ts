import { ReactNode } from 'react';

export interface Service {
  icon: ReactNode;
  title: string;
  description: string;
  expandable?: boolean;
  subServices?: {
    icon: ReactNode;
    title: string;
    description: string;
  }[];
}

export interface Prototype {
  icon: ReactNode;
  title: string;
  status: string;
  description: string;
  image?: string;
  link?: string;
  prototypeLink?: string;
  hidePrototypeLink?: boolean;
}

export interface SubscriptionChatbot {
  icon: ReactNode;
  title: string;
  description: string;
  price: number;
  status: 'available' | 'coming-soon';
  features?: string[];
}