import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Smile, Scissors, Sparkles, CircleDot, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: Smile,
    title: 'Zahnmedizin',
    description: 'Von der Kariesbehandlung über Wurzelkanaltherapien bis hin zur Parodontologie – wir bieten die gesamte Bandbreite der modernen Zahnheilkunde.',
  },
  {
    icon: Scissors,
    title: 'Mund-Kiefer-Gesichtschirurgie',
    description: 'Professionelle chirurgische Eingriffe wie Weisheitszahnentfernungen, Implantatversorgungen und kieferchirurgische Behandlungen.',
  },
  {
    icon: Sparkles,
    title: 'Ästhetische Zahnmedizin',
    description: 'Bleaching, Veneers, Zahnfarbene Füllungen und weitere kosmetische Behandlungen für Ihr perfektes Lächeln.',
  },
  {
    icon: CircleDot,
    title: 'Prothetik',
    description: 'Hochwertige Kronen, Brücken, Voll- und Teilprothesen sowie implantatgetragene Versorgungen in Präzisionsarbeit.',
  },
  {
    icon: ShieldCheck,
    title: 'Zahnprophylaxe',
    description: 'Professionelle Zahnreinigung, Fluoridierungen, Fissurenversiegelungen und individuelle Beratung zur Vorbeugung.',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-[#2563eb] font-medium text-sm uppercase tracking-wider">
            Leistungen
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Unser Behandlungsspektrum
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Wir bieten Ihnen ein umfassendes Angebot an zahnmedizinischen Leistungen 
            – von der Vorbeugung bis zur anspruchsvollen Rekonstruktion.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-[#2563eb]/20"
            >
              <div className="w-14 h-14 rounded-xl bg-[#2563eb]/10 flex items-center justify-center mb-6 group-hover:bg-[#2563eb] transition-colors duration-300">
                <service.icon className="w-7 h-7 text-[#2563eb] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
