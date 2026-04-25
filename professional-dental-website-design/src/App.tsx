import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import OpeningHours from './components/OpeningHours';
import Reviews from './components/Reviews';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Appointment />
        <Contact />
        <OpeningHours />
        <Reviews />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
