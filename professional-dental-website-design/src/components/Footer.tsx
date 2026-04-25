import { Phone, Mail, MapPin } from 'lucide-react';

const scrollTo = (id: string) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#2563eb] flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">GJ</span>
              </div>
              <div>
                <p className="font-serif font-semibold text-white">Dr. Gerlinde Jonas</p>
                <p className="text-xs text-slate-400">Zahnarztpraxis</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Fachärztin für Zahn-, Mund- und Kieferheilkunde in Klagenfurt am Wörthersee. 
              Ihr Vertrauen ist unsere Motivation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Über uns', href: '#about' },
                { label: 'Leistungen', href: '#services' },
                { label: 'Termin', href: '#appointment' },
                { label: 'Kontakt', href: '#contact' },
                { label: 'Bewertungen', href: '#reviews' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://maps.google.com/?q=Domgasse+4/1,+9020+Klagenfurt+am+Wörthersee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  Domgasse 4/1, 9020 Klagenfurt am Wörthersee, Österreich
                </a>
              </li>
              <li>
                <a
                  href="tel:+4346356648"
                  className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  +43 463 56648
                </a>
              </li>
              <li>
                <a
                  href="mailto:ORDINATION.DRJONA@YAHOO.COM"
                  className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors break-all"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  ORDINATION.DRJONA@YAHOO.COM
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Dr. Gerlinde Jonas. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
