import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, CheckCircle, Loader2, User, Mail, Phone, MessageSquare } from 'lucide-react';

export default function Appointment() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/ORDINATION.DRJONA@YAHOO.COM', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: 'Neue Terminanfrage - Dr. Gerlinde Jonas',
          _template: 'table',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Fehler beim Senden');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut oder rufen Sie uns an.');
    }
  };

  return (
    <section id="appointment" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-[#2563eb] font-medium text-sm uppercase tracking-wider">
            Termin vereinbaren
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Vereinbaren Sie Ihren Termin
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen, 
            um einen passenden Termin zu finden.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center"
            >
              <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-semibold text-emerald-800 mb-2">
                Terminanfrage gesendet!
              </h3>
              <p className="text-emerald-700 mb-6">
                Vielen Dank für Ihre Anfrage. Wir werden uns in Kürze bei Ihnen melden, 
                um einen Termin zu vereinbaren.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="px-6 py-2 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition-colors"
              >
                Neue Anfrage
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-100">
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ihr vollständiger Name"
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                    E-Mail
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ihre@email.at"
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] transition-all"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Telefon
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+43 ..."
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Nachricht
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-400" />
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Beschreiben Sie kurz Ihr Anliegen oder gewünschten Termin..."
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] transition-all resize-none"
                    />
                  </div>
                </div>

                {status === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#2563eb] text-white rounded-xl font-medium hover:bg-[#1d4ed8] transition-all hover:shadow-lg hover:shadow-[#2563eb]/25 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Terminanfrage senden
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
