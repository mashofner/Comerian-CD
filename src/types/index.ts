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
  title: string;
  badge?: string;
  description: string;
  price?: number;
  priceLabel?: string;
  priceSubtext?: string;
  originalPrice?: number;
  features?: string[];
  valueProps?: string[];
  actionText: string;
  actionLink?: string;
  demoLink?: string;
  demoText?: string;
}

export interface MicroSaasTool {
  icon: ReactNode;
  title: string;
  description: string;
  status: 'available' | 'development';
  link?: string;
}