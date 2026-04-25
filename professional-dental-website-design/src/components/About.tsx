import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Heart, Stethoscope } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Patientenorientierte Betreuung',
    description: 'Wir nehmen uns Zeit für Sie und Ihre Anliegen. Jede Behandlung wird individuell auf Ihre Bedürfnisse abgestimmt.',
  },
  {
    icon: Shield,
    title: 'Höchste Hygienestandards',
    description: 'Strikte Sterilisation und Desinfektionsprotokolle nach aktuellen Richtlinien für Ihre Sicherheit.',
  },
  {
    icon: Stethoscope,
    title: 'Professionelle Behandlung',
    description: 'Modernste diagnostische und therapeutische Verfahren für präzise und schonende Behandlungen.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/clinic-exterior.jpg"
                alt="Praxis Dr. Gerlinde Jonas in Klagenfurt"
                className="w-full h-[400px] md:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#2563eb] text-white p-6 rounded-2xl shadow-lg hidden md:block">
              <p className="text-3xl font-bold font-serif">25+</p>
              <p className="text-sm opacity-90">Jahre Erfahrung</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[#2563eb] font-medium text-sm uppercase tracking-wider">
              Über uns
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6">
              Ihre Gesundheit steht im Mittelpunkt
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              In der Praxis von Dr. Gerlinde Jonas in Klagenfurt am Wörthersee bieten wir 
              Ihnen umfassende zahnmedizinische Versorgung auf höchstem Niveau. Mit langjähriger 
              Erfahrung in der Zahn-, Mund- und Kieferheilkunde stehen wir für präzise Diagnostik, 
              schonende Therapien und nachhaltige Ergebnisse.
            </p>
            <p className="text-slate-600 leading-relaxed mb-10">
              Unser engagiertes Team legt besonderen Wert auf eine vertrauensvolle 
              Arzt-Patienten-Beziehung. Wir erklären jeden Behandlungsschritt verständlich 
              und begleiten Sie auf dem Weg zu optimaler Zahngesundheit.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#2563eb]/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-[#2563eb]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
