import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Maria K.',
    text: 'Sehr kompetente und einfühlsame Behandlung. Frau Dr. Jonas nimmt sich wirklich Zeit für die Patienten. Ich fühle mich hier immer bestens aufgehoben.',
    rating: 5,
  },
  {
    name: 'Thomas W.',
    text: 'Endlich eine Zahnarztpraxis, in der man sich wohlfühlt. Die moderne Ausstattung und die freundliche Atmosphäre machen den Besuch zum Vergnügen.',
    rating: 5,
  },
  {
    name: 'Elisabeth M.',
    text: 'Professionelle Beratung und schonende Behandlung. Meine Angst vorm Zahnarzt ist hier komplett verschwunden. Absolut empfehlenswert!',
    rating: 5,
  },
];

export default function Reviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="reviews" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-[#2563eb] font-medium text-sm uppercase tracking-wider">
            Bewertungen
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Was unsere Patienten sagen
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Ihr Vertrauen ist unser größtes Kompliment. Lesen Sie, was Patienten über 
            ihre Erfahrung in unserer Praxis berichten.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#2563eb]/10" />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                "{review.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2563eb]/10 flex items-center justify-center">
                  <span className="text-[#2563eb] font-semibold text-sm">
                    {review.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <span className="font-medium text-slate-900 text-sm">{review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
