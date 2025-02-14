import React, { useState } from 'react';
import { Bot, MessageSquare, Mail, Workflow, Linkedin, Instagram, Globe, Settings, MessageCircle, Phone } from 'lucide-react';
import NeuralNetwork from './components/NeuralNetwork';
import FadeInSection from './components/FadeInSection';
import XLogo from './components/XLogo';
import { Service, Prototype, ServiceCard, PrototypeCard } from './App';

function App() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showLeadGenServices, setShowLeadGenServices] = useState(false);
  const [showOutreachServices, setShowOutreachServices] = useState(false);
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
      icon: <MessageCircle className="w-12 h-12 text-blue-400" />,
      title: "Auto Responder",
      description: "Automated response system for messages across multiple platforms with intelligent routing and handling."
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

  // Calculate the row indices for expandable cards
  const itemsPerRow = window.innerWidth >= 768 ? 3 : 1;
  const leadGenIndex = services.findIndex(s => s.title === "Lead Generation");
  const outreachIndex = services.findIndex(s => s.title === "Cold Outreach");
  
  const leadGenRowIndex = Math.floor(leadGenIndex / itemsPerRow);
  const outreachRowIndex = Math.floor(outreachIndex / itemsPerRow);
  
  const leadGenRowEndIndex = (leadGenRowIndex + 1) * itemsPerRow;
  const outreachRowEndIndex = (outreachRowIndex + 1) * itemsPerRow;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 relative">
      <div className="fixed inset-0 z-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5">
        <NeuralNetwork />
      </div>
      <div className="relative z-10">
        <header className="container mx-auto px-4 sm:px-6 text-white">
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
            <a href="#contact" className="bg-blue-500 hover:bg-blue-600 px-4 sm:px-6 py-2 rounded-full transition text-sm sm:text-base">
              Contact Us
            </a>
          </nav>

          <div className="max-w-4xl mx-auto text-center py-8 sm:py-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Transform Your Business with AI Automation
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 px-4">
              Leverage cutting-edge AI solutions to streamline operations, boost productivity, and drive growth.
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-full transition-colors duration-200 text-base sm:text-lg"
            >
              Contact Us
            </a>
          </div>
        </header>

        <section id="services" className="container mx-auto px-4 sm:px-6 py-8">
          <FadeInSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12">Our Services</h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 relative">
            {services.map((service, index) => (
              <React.Fragment key={index}>
                {service.expandable ? (
                  <FadeInSection delay={index * 200}>
                    <div 
                      className="bg-gray-950/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(0,0,0,0.7)] transition duration-300 h-full cursor-pointer relative group"
                      onClick={() => {
                        if (service.title === "Lead Generation") {
                          setShowLeadGenServices(!showLeadGenServices);
                        } else if (service.title === "Cold Outreach") {
                          setShowOutreachServices(!showOutreachServices);
                        }
                      }}
                    >
                      <div className="flex items-center justify-between">
                        {service.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white mt-4 mb-2">{service.title}</h3>
                      <p className="text-sm sm:text-base text-gray-400 mb-4">{service.description}</p>
                      
                      <div className="text-sm text-blue-400">
                        {(service.title === "Lead Generation" && showLeadGenServices) || 
                         (service.title === "Cold Outreach" && showOutreachServices) 
                          ? "Click to collapse" 
                          : "Click to expand"}
                      </div>
                    </div>
                  </FadeInSection>
                ) : (
                  <ServiceCard service={service} delay={index * 200} />
                )}
                
                {/* Insert Lead Generation dropdown */}
                {index === leadGenRowEndIndex - 1 && showLeadGenServices && (
                  <div className="col-span-1 md:col-span-3 w-full mt-4 sm:mt-8 bg-gray-950/90 backdrop-blur-sm p-4 sm:p-8 rounded-xl border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                      {services.find(s => s.title === "Lead Generation")?.subServices?.map((subService, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 p-4 sm:p-6 bg-gray-900/50 rounded-lg">
                          <div className="bg-gray-900/50 p-3 sm:p-4 rounded-lg self-start">
                            {subService.icon}
                          </div>
                          <div>
                            <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">{subService.title}</h4>
                            <p className="text-sm sm:text-base text-gray-400">{subService.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Insert Outreach dropdown */}
                {index === outreachRowEndIndex - 1 && showOutreachServices && (
                  <div className="col-span-1 md:col-span-3 w-full mt-4 sm:mt-8 bg-gray-950/90 backdrop-blur-sm p-4 sm:p-8 rounded-xl border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
                      {services.find(s => s.title === "Cold Outreach")?.subServices?.map((subService, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 p-4 sm:p-6 bg-gray-900/50 rounded-lg">
                          <div className="bg-gray-900/50 p-3 sm:p-4 rounded-lg self-start">
                            {subService.icon}
                          </div>
                          <div>
                            <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">{subService.title}</h4>
                            <p className="text-sm sm:text-base text-gray-400">{subService.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        <section id="prototypes" className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6">
            <FadeInSection>
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12">Current Prototypes</h2>
            </FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {prototypes.map((prototype, index) => (
                <PrototypeCard key={index} prototype={prototype} delay={index * 200} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <FadeInSection>
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6 sm:mb-8">Contact</h2>
              <div className="bg-gray-950/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(0,0,0,0.7)] transition duration-300">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">Ready to Get Started?</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 text-center">
                  Let us transform your business with AI Automation. Reach out and we'll set up a consultation.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8 sm:mb-12">
                  <a
                    href={emailLink}
                    className="inline-flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-600 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold text-white transition"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Email Us</span>
                  </a>
                  <a
                    href={smsLink}
                    className="inline-flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-600 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold text-white transition"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Text Us</span>
                  </a>
                </div>

                <div className="border-t border-gray-800 pt-6 sm:pt-8">
                  {isSubscribed ? (
                    <div className="text-center space-y-4">
                      <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Thank you for subscribing!</h4>
                      <p className="text-sm sm:text-base text-gray-400">
                        We'll keep you updated with the latest AI insights and news.
                      </p>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">Not Ready? No worries!</h3>
                      <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 text-center">
                        Subscribe to our newsletter and we'll send you AI Updates, trainings, industry insights, and more...
                      </p>
                      <form onSubmit={handleSubscribe} className="flex flex-col space-y-4">
                        {formError && (
                          <div className="text-red-500 text-center mb-4">
                            {formError}
                          </div>
                        )}
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                          <input
                            type="text"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="flex-1 px-6 sm:px-8 py-3 rounded-full bg-transparent border border-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
                            required />
                          <input
                            type="email"
                            placeholder="Your email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="flex-1 px-6 sm:px-8 py-3 rounded-full bg-transparent border border-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
                            required />
                        </div>
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-600 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold text-white transition"
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

        <footer className="text-gray-400 py-8 sm:py-12 bg-gray-900/50 backdrop-blur-sm relative">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 sm:mb-0">
                <Workflow className="w-6 h-6 text-blue-400" />
                <span className="text-white font-bold">Comerian</span>
              </div>
              <div className="text-sm mt-4 sm:mt-0">
                © {new Date().getFullYear()} Comerian. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;