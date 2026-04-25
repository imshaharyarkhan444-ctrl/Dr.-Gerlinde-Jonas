import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Über uns', href: '#about' },
  { label: 'Leistungen', href: '#services' },
  { label: 'Termin', href: '#appointment' },
  { label: 'Kontakt', href: '#contact' },
  { label: 'Öffnungszeiten', href: '#opening-hours' },
  { label: 'Bewertungen', href: '#reviews' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleClick(e, '#home')} className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#2563eb] flex items-center justify-center">
              <span className="text-white font-serif font-bold text-lg">GJ</span>
            </div>
            <div className="hidden sm:block">
              <p className={`font-serif font-semibold text-base leading-tight transition-colors ${scrolled ? 'text-slate-800' : 'text-slate-800'}`}>
                Dr. Gerlinde Jonas
              </p>
              <p className={`text-xs transition-colors ${scrolled ? 'text-slate-500' : 'text-slate-500'}`}>
                Zahnarztpraxis
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-slate-600 hover:text-[#2563eb] hover:bg-slate-50'
                    : 'text-slate-700 hover:text-[#2563eb] hover:bg-white/50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+4346356648"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[#2563eb] text-white rounded-full text-sm font-medium hover:bg-[#1d4ed8] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+43 463 56648</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="block px-4 py-3 rounded-lg text-slate-700 hover:text-[#2563eb] hover:bg-slate-50 font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+4346356648"
                className="flex items-center gap-2 px-4 py-3 mt-2 bg-[#2563eb] text-white rounded-lg font-medium"
              >
                <Phone className="w-4 h-4" />
                +43 463 56648
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
