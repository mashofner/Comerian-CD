import React, { useState } from 'react';
import { Bot, MessageSquare, Mail, Workflow, Linkedin, Instagram, Globe, Settings, MessageCircle, Phone } from 'lucide-react';
import NeuralNetwork from './components/NeuralNetwork';
import FadeInSection from './components/FadeInSection';
import XLogo from './components/XLogo';
import { Service, Prototype, ServiceCard, PrototypeCard } from './App';

export function App() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [formError, setFormError] = useState<string | null>(null);

  const emailSubject = encodeURIComponent("Interested in AI Automation Services");
  const emailBody = encodeURIComponent(
    "Hi,\n\nI'm interested in learning more about your AI automation services. Could you please provide more information?\n\nBest regards"
  );
  const emailLink = `mailto:mashofner@comeriandigital.net?subject=${emailSubject}&body=${emailBody}`;

  const smsBody = encodeURIComponent(
    "Hi, I'm interested in learning more about your AI automation services."
  );
  const smsLink = `sms:+15017647572?body=${smsBody}`;

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const portalId = import.meta.env.VITE_HUBSPOT_PORTAL_ID;
    const formGuid = import.meta.env.VITE_HUBSPOT_FORM_GUID;

    if (!portalId || !formGuid) {
      console.error('Missing HubSpot configuration');
      setFormError('Configuration error. Please try again later.');
      return;
    }

    const payload = {
      fields: [
        {
          name: 'firstname',
          value: formData.name
        },
        {
          name: 'email',
          value: formData.email
        }
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title
      }
    };

    try {
      const response = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit form');
      }

      setIsSubscribed(true);
      setFormData({ name: '', email: '' });
    } catch (error) {
      console.error('Failed to submit form to HubSpot:', error);
      setFormError('Failed to subscribe. Please try again later.');
    }
  };

  const services: Service[] = [
    {
      icon: <MessageSquare className="w-12 h-12 text-blue-400" />,
      title: "Chatbot Creation",
      description: "Custom AI chatbots designed to enhance customer service and automate support.",
      pricingOptions: [
        {
          title: "Build &\nManage",
          setup: 750,
          monthly: 200
        },
        {
          title: "Build",
          setup: 950
        }
      ]
    },
    {
      icon: <Phone className="w-12 h-12 text-blue-400" />,
      title: "Phone Call Chatbot",
      description: "AI-powered phone system that handles customer calls, inquiries, and automated responses.",
      pricingOptions: [
        {
          title: "Build &\nManage",
          setup: 1000,
          monthly: 250
        },
        {
          title: "Build",
          setup: 1200
        }
      ]
    },
    {
      icon: <Linkedin className="w-12 h-12 text-blue-400" />,
      title: "LinkedIn Lead Scraping",
      description: "Automated lead generation through intelligent LinkedIn profile scraping and data extraction.",
      pricingOptions: [
        {
          title: "Build &\nManage",
          setup: 500,
          monthly: 250
        },
        {
          title: "Build",
          setup: 750
        }
      ]
    },
    {
      icon: <XLogo className="w-12 h-12 text-blue-400" />,
      title: "X Lead Scraping",
      description: "Automated lead generation through intelligent X profile scraping and data extraction.",
      pricingOptions: [
        {
          title: "Build &\nManage",
          setup: 100,
          monthly: 100
        },
        {
          title: "Build",
          setup: 175
        }
      ]
    },
    {
      icon: <Mail className="w-12 h-12 text-blue-400" />,
      title: "Cold Email Outreach",
      description: "Intelligent email automation for personalized and effective lead generation.",
      pricingOptions: [
        {
          title: "Build &\nManage",
          setup: 500,
          monthly: 250
        },
        {
          title: "Build",
          setup: 750
        }
      ]
    },
    {
      icon: <Instagram className="w-12 h-12 text-blue-400" />,
      title: "Cold IG Outreach",
      description: "Automated outreach and engagement with potential leads through Instagram DMs.",
      pricingOptions: [
        {
          title: "Build &\nManage",
          setup: 500,
          monthly: 250
        },
        {
          title: "Build",
          setup: 750
        }
      ]
    },
    {
      icon: <XLogo className="w-12 h-12 text-blue-400" />,
      title: "Cold X Outreach",
      description: "Automated outreach and engagement with potential leads through X platform.",
      pricingOptions: [
        {
          title: "Build &\nManage",
          setup: 100,
          monthly: 100
        },
        {
          title: "Build",
          setup: 175
        }
      ]
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-blue-400" />,
      title: "Auto Responder",
      description: "Automated response system for messages across multiple platforms with intelligent routing and handling.",
      pricingOptions: [
        {
          title: "Build &\nManage",
          setup: 100,
          monthly: 100
        },
        {
          title: "Build",
          setup: 150
        }
      ]
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-400" />,
      title: "Web Development",
      description: "Custom website development with modern technologies and AI-powered features.",
      pricingOptions: [
        {
          title: "Custom\nSolution",
          isCustom: true,
          customDetails: [
            "Complex integrations",
            "Custom features",
            "Scalable architecture",
            "Enterprise solutions"
          ]
        }
      ]
    },
    {
      icon: <Settings className="w-12 h-12 text-blue-400" />,
      title: "Process Automation",
      description: "Streamline workflows and operations with smart AI-powered automation solutions.",
      pricingOptions: [
        {
          title: "Custom\nSolution",
          isCustom: true,
          customDetails: [
            "Workflow analysis",
            "Custom automation",
            "System integration",
            "Performance monitoring"
          ]
        }
      ]
    }
  ];

  const prototypes: Prototype[] = [
    {
      icon: <MessageSquare className="w-10 h-10 text-blue-400" />,
      title: "Super Clean Cans Chatbot",
      status: "Customer Support Chatbot",
      description: "This AI Chatbot will help Super Clean Cans with all of its customer support needs. It will handle basic customer questions and will take care of scheduling. This will save Super Clean Cans money by decreasing the size of their customer support team. It will also improve the customer experience.",
      image: "/Screenshot 2025-01-09 153606.png",
      link: "https://supercleancans.com/",
      prototypeLink: "https://creator.voiceflow.com/prototype/677e0958687438e9a81283d3"
    },
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 relative">
      <div className="fixed inset-0 z-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5">
        <NeuralNetwork />
      </div>
      <div className="relative z-10">
        <header className="container mx-auto px-6 text-white">
          <nav className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <Workflow className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">Comerian</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-blue-400 transition">Services</a>
              <a href="#prototypes" className="hover:text-blue-400 transition">Prototypes</a>
              <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
            </div>
            <a href="#contact" className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full transition">
              Contact Us
            </a>
          </nav>

          <div className="max-w-4xl mx-auto text-center py-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Transform Your Business with AI Automation
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Leverage cutting-edge AI solutions to streamline operations, boost productivity, and drive growth.
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </header>

        <section id="services" className="container mx-auto px-6 py-8">
          <FadeInSection>
            <h2 className="text-3xl font-bold text-center text-white mb-12">Our Services</h2>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} delay={index * 200} />
            ))}
          </div>
        </section>

        <section id="prototypes" className="py-12">
          <div className="container mx-auto px-6">
            <FadeInSection>
              <h2 className="text-3xl font-bold text-center text-white mb-12">Current Prototypes</h2>
            </FadeInSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {prototypes.map((prototype, index) => (
                <PrototypeCard key={index} prototype={prototype} delay={index * 200} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="container mx-auto px-6 py-12">
          <FadeInSection>
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-white mb-8">Contact</h2>
              <div className="bg-gray-950/90 backdrop-blur-sm p-8 rounded-xl border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(0,0,0,0.7)] transition duration-300">
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Ready to Get Started?</h3>
                <p className="text-gray-400 mb-8 text-center">
                  Let us transform your business with AI Automation. Reach out and we'll set up a consultation.
                </p>
                <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-12">
                  <a
                    href={emailLink}
                    className="inline-flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full text-lg font-semibold text-white transition"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Email Us</span>
                  </a>
                  <a
                    href={smsLink}
                    className="inline-flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full text-lg font-semibold text-white transition"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Text Us</span>
                  </a>
                </div>

                <div className="border-t border-gray-800 pt-8">
                  {isSubscribed ? (
                    <div className="text-center space-y-4">
                      <h4 className="text-xl font-semibold text-blue-400">Thank you for subscribing!</h4>
                      <p className="text-gray-400">
                        We'll keep you updated with the latest AI insights and news.
                      </p>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-2xl font-bold text-white mb-4 text-center">Not Ready? No worries!</h3>
                      <p className="text-gray-400 mb-8 text-center">
                        Subscribe to our newsletter and we'll send you AI Updates, trainings, industry insights, and more...
                      </p>
                      <form onSubmit={handleSubscribe} className="flex flex-col space-y-4">
                        {formError && (
                          <div className="text-red-500 text-center mb-4">
                            {formError}
                          </div>
                        )}
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                          <input
                            type="text"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="flex-1 px-8 py-3 rounded-full bg-transparent border border-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                            required />
                          <input
                            type="email"
                            placeholder="Your email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="flex-1 px-8 py-3 rounded-full bg-transparent border border-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                            required />
                        </div>
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full text-lg font-semibold text-white transition"
                        >
                          <span>Subscribe</span>
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>

        <footer className="text-gray-400 py-12 bg-gray-900/50 backdrop-blur-sm relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <a
              href="https://twitter.com/ComerianAI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <XLogo />
            </a>
          </div>
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0 ml-6">
                <Workflow className="w-6 h-6 text-blue-400" />
                <span className="text-white font-bold">Comerian</span>
              </div>
              <div className="text-sm mt-4 md:mt-0">
                © {new Date().getFullYear()} Comerian. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}