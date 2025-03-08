import { SubscriptionChatbot } from '@/types';

export const subscriptionChatbots: SubscriptionChatbot[] = [
  {
    title: "Starter Chatbot",
    badge: "3 Months Free!",
    description: "Give your customers automated 24/7 support for less than a pizza night. Your AI chatbot will handle common questions instantly, freeing up your time.",
    price: 50,
    priceLabel: "/month",
    priceSubtext: "First 3 months FREE!",
    features: [
      "Provides automated 24/7 support for your customers",
      "Handles common questions so you don't have to",
      "Reduces your customer response time"
    ],
    valueProps: [
      "No setup fees",
      "Cancel anytime",
      "Try free for 3 months - no risk!"
    ],
    actionText: "Start Free Trial",
    actionLink: "https://buy.stripe.com/6oE6osfs7bZIgzmaEE",
    demoLink: "https://creator.voiceflow.com/prototype/67770cf3c2f2c41fa703a1de",
    demoText: "Try Demo"
  },
  {
    title: "Custom Chatbot",
    badge: "Best Value",
    description: "A premium, custom-built chatbot tailored to your specific business needs. Perfect for businesses serious about growth and professional customer service.",
    features: [
      "Custom-built for your business",
      "Product carousel for showcasing items",
      "Lead qualification & capture system",
      "Automated scheduling & booking",
      "Full integration with your systems",
      "Unlimited customization & updates",
      "Custom branding & design",
      "Support & Maintenance",
      "Regular performance reviews"
    ],
    actionText: "Get a Quote",
    actionLink: "#quote-form"
  }
];