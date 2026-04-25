import { motion } from 'framer-motion';
import { ChevronDown, Calendar } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-clinic.jpg"
          alt="Moderne Zahnarztpraxis Dr. Gerlinde Jonas"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 bg-[#2563eb]/10 text-[#2563eb] rounded-full text-sm font-medium mb-6">
              Fachärztin für Zahn-, Mund- und Kieferheilkunde
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6"
          >
            Dr. Gerlinde{' '}
            <span className="text-[#2563eb]">Jonas</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-slate-600 mb-4 leading-relaxed"
          >
            Zahnmedizin · Mund-Kiefer-Gesichtschirurgie
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base sm:text-lg text-slate-500 mb-10 max-w-lg leading-relaxed"
          >
            Ihr Vertrauen ist unsere Motivation. Mit modernster Technologie, 
            höchster Hygienestandards und einfühlsamer Patientenbetreuung 
            sorgen wir für Ihr strahlendes Lächeln.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => scrollTo('#appointment')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#2563eb] text-white rounded-full font-medium hover:bg-[#1d4ed8] transition-all hover:shadow-lg hover:shadow-[#2563eb]/25"
            >
              <Calendar className="w-5 h-5" />
              Termin vereinbaren
            </button>
            <button
              onClick={() => scrollTo('#services')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-all"
            >
              Unsere Leistungen
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-[#2563eb] transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>
    </section>
  );
}
