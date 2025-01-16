import React from 'react';
import { Bot, MessageSquare, Mail, Workflow, Linkedin, Twitter, Instagram, Globe, Settings, MessageCircle } from 'lucide-react';
import NeuralNetwork from './components/NeuralNetwork';
import FadeInSection from './components/FadeInSection';

{/* All interfaces stay exactly the same */}
interface PricingOption {
  title: string;
  setup?: number;
  monthly?: number;
  description?: string;
  isCustom?: boolean;
  customDetails?: string[];
}

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  pricingOptions?: PricingOption[];
}

interface Prototype {
  icon: React.ReactNode;
  title: string;
  status: string;
  description: string;
  image?: string;
  link?: string;
  prototypeLink?: string;
  hidePrototypeLink?: boolean;
}

function App() {
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
      icon: <Twitter className="w-12 h-12 text-blue-400" />,
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
          title: "Build &\nAdManage",
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
      icon: <Instagram className="w-12 h-12 text-blue-400" />,
      title: "Test Card 2",
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
      icon: <Twitter className="w-12 h-12 text-blue-400" />,
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
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-8">Ready to Get Started?</h2>
              <p className="text-gray-400 mb-8">
                Transform your business with AI automation. Contact us today for a free consultation.
              </p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="mailto:mashofner@comeriandigital.net" 
                  className="inline-flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full text-lg font-semibold text-white transition"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
                </a>
                <a 
                  href="sms:+15017647572" 
                  className="inline-flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full text-lg font-semibold text-white transition"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Text Us</span>
                </a>
              </div>
            </div>
          </FadeInSection>
        </section>

        <footer className="text-gray-400 py-12 bg-gray-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <Workflow className="w-6 h-6 text-blue-400" />
                <span className="text-white font-bold">Comerian</span>
              </div>
              <div className="text-sm">
                © {new Date().getFullYear()} Comerian. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function ServiceCard({ service, delay }: { service: Service; delay: number }) {
  return (
    <FadeInSection delay={delay}>
      <div className="bg-gray-950/90 backdrop-blur-sm p-8 rounded-xl border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(0,0,0,0.7)] transition duration-300 h-full flex flex-col">
        {service.icon}
        <h3 className="text-xl font-semibold text-white mt-4 mb-2">{service.title}</h3>
        <p className="text-gray-400 mb-6">{service.description}</p>
        
        {service.pricingOptions && (
          <div className="grid grid-cols-1 gap-4 mt-auto">
            {service.pricingOptions.map((option, i) => (
              <div key={i} className="bg-gray-900/50 p-4 rounded-lg flex flex-col h-full">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-white whitespace-pre-line">
                    {option.title}
                  </h4>
                  {!option.isCustom ? (
                    <div className="text-right">
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-blue-400">${option.setup}</span>
                        <span className="text-sm text-gray-400">setup</span>
                      </div>
                    </div>
                  ) : (
                    <div className="text-right">
                      <div className="flex flex-col items-end">
                        <span className="text-xl font-bold text-blue-400">Custom</span>
                        <span className="text-xl font-bold text-blue-400">Quote</span>
                      </div>
                    </div>
                  )}
                </div>
                {option.description && (
                  <p className="text-gray-400 text-sm mb-2">{option.description}</p>
                )}
                {option.monthly && !option.isCustom && (
                  <div className="text-sm text-gray-400">
                    +${option.monthly}/mo maintenance
                  </div>
                )}
                {option.customDetails && (
                  <ul className="mt-4 space-y-2">
                    {option.customDetails.map((detail, index) => (
                      <li key={index} className="text-gray-400 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </FadeInSection>
  );
}

function PrototypeCard({ prototype, delay }: { prototype: Prototype; delay: number }) {
  return (
    <FadeInSection delay={delay}>
      <div className="bg-gray-950/90 backdrop-blur-sm rounded-xl border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(0,0,0,0.7)] overflow-hidden flex flex-col h-full">
        {prototype.image && (
          <a 
            href={prototype.link} 
            target="_blank"
            rel="noopener noreferrer" 
            className="block w-full h-48 relative group overflow-hidden"
          >
            <img 
              src={prototype.image} 
              alt={prototype.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-transparent group-hover:bg-gray-900/50 transition-all duration-300 flex items-center justify-center">
              <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 [text-shadow:_0_8px_32px_rgb(0_0_0_/_1),_0_16px_32px_rgb(0_0_0_/_1),_0_24px_48px_rgb(0_0_0_/_1),_0_32px_64px_rgb(0_0_0_/_1),_0_48px_96px_rgb(0_0_0_/_1),_0_64px_128px_rgb(0_0_0_/_1)]">
                View Company →
              </span>
            </div>
          </a>
        )}
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex items-center justify-between space-x-4 mb-4">
            <div className="bg-gray-900/50 backdrop-blur-sm p-3 rounded-lg flex-shrink-0">
              {prototype.icon}
            </div>
            <span className="text-sm font-medium px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 flex-shrink-0">
              {prototype.status}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">{prototype.title}</h3>
          <p className="text-gray-400 mb-4 flex-grow">{prototype.description}</p>
          {prototype.prototypeLink && !prototype.hidePrototypeLink && (
            <div className="mt-auto pt-4">
              <a 
                href={prototype.prototypeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-center"
              >
                View Prototype
              </a>
            </div>
          )}
        </div>
      </div>
    </FadeInSection>
  );
}

export default App;