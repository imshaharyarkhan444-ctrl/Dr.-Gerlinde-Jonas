import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock } from 'lucide-react';

const hours = [
  { day: 'Montag', time: '08:00 – 17:00', open: true },
  { day: 'Dienstag', time: '08:00 – 17:00', open: true },
  { day: 'Mittwoch', time: '08:00 – 17:00', open: true },
  { day: 'Donnerstag', time: '08:00 – 17:00', open: true },
  { day: 'Freitag', time: '08:00 – 14:00', open: true },
  { day: 'Samstag', time: 'Geschlossen', open: false },
  { day: 'Sonntag', time: 'Geschlossen', open: false },
];

export default function OpeningHours() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="opening-hours" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto"
        >
          <div className="text-center mb-10">
            <span className="text-[#2563eb] font-medium text-sm uppercase tracking-wider">
              Öffnungszeiten
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mt-3">
              Wann wir für Sie da sind
            </h2>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-[#2563eb]/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#2563eb]" />
              </div>
            </div>

            <div className="space-y-1">
              {hours.map((item, index) => (
                <motion.div
                  key={item.day}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className={`flex items-center justify-between py-3 px-4 rounded-lg ${
                    item.open ? 'hover:bg-white' : ''
                  } transition-colors`}
                >
                  <span className="font-medium text-slate-700">{item.day}</span>
                  <span
                    className={`text-sm font-medium ${
                      item.open ? 'text-slate-900' : 'text-slate-400'
                    }`}
                  >
                    {item.time}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200 text-center">
              <p className="text-sm text-slate-500">
                Termine außerhalb der Öffnungszeiten nach Vereinbarung
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
