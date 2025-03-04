import { Header } from './components/Header';
import { ServicesSection } from './components/Services';
import { SubscriptionChatbotsSection } from './components/SubscriptionChatbots';
import { MicroSaasSection } from './components/MicroSaas';
import { ContactSection } from './components/Contact';
import { Footer } from './components/Footer';
import NeuralNetwork from './components/NeuralNetwork';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 relative overflow-hidden">
      <div className="fixed inset-0 z-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5">
        <NeuralNetwork />
      </div>
      <div className="relative z-10">
        <Header />
        <SubscriptionChatbotsSection />
        <ServicesSection />
        <MicroSaasSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;