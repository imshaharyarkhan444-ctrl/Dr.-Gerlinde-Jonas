import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Adresse',
      value: 'Domgasse 4/1, 9020 Klagenfurt am Wörthersee, Österreich',
      href: 'https://maps.google.com/?q=Domgasse+4/1,+9020+Klagenfurt+am+Wörthersee',
    },
    {
      icon: Phone,
      label: 'Telefon',
      value: '+43 463 56648',
      href: 'tel:+4346356648',
    },
    {
      icon: Mail,
      label: 'E-Mail',
      value: 'ORDINATION.DRJONA@YAHOO.COM',
      href: 'mailto:ORDINATION.DRJONA@YAHOO.COM',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-[#2563eb] font-medium text-sm uppercase tracking-wider">
            Kontakt
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Besuchen Sie uns
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Wir freuen uns auf Ihren Besuch in unserer Praxis im Herzen von Klagenfurt.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.icon === MapPin ? '_blank' : undefined}
                rel={item.icon === MapPin ? 'noopener noreferrer' : undefined}
                className="flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-100 hover:border-[#2563eb]/20 hover:shadow-md transition-all group"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-[#2563eb]/10 flex items-center justify-center group-hover:bg-[#2563eb] transition-colors">
                  <item.icon className="w-5 h-5 text-[#2563eb] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-slate-800 font-medium text-sm leading-relaxed">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Quick Hours Preview */}
            <div className="p-5 bg-white rounded-xl border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#2563eb]/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#2563eb]" />
                </div>
                <h3 className="font-semibold text-slate-900">Öffnungszeiten</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Montag – Freitag</span>
                  <span className="text-slate-800 font-medium">08:00 – 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Samstag – Sonntag</span>
                  <span className="text-slate-400">Geschlossen</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="map-container rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-full min-h-[350px] md:min-h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2738.0!2d14.3056!3d46.6247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4770812c7c2d4c5b%3A0x6f3e8d9a2b1c4e5f!2sDomgasse%204%2F1%2C%209020%20Klagenfurt%20am%20W%C3%B6rthersee%2C%20Austria!5e0!3m2!1sde!2sat!4v1700000000000!5m2!1sde!2sat&q=Domgasse+4/1,+9020+Klagenfurt+am+Wörthersee"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '100%' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Praxis Dr. Gerlinde Jonas - Domgasse 4/1, Klagenfurt"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
