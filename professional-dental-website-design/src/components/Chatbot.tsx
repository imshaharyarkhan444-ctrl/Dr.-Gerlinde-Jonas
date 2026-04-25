import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Clock, MapPin, Phone, Stethoscope, Calendar, Bot, User } from 'lucide-react';

type Message = {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  options?: string[];
};

const botResponses: Record<string, string> = {
  'Öffnungszeiten': `Unsere Öffnungszeiten sind:
• Montag – Donnerstag: 08:00 – 17:00
• Freitag: 08:00 – 14:00
• Samstag & Sonntag: Geschlossen

Termine außerhalb der Öffnungszeiten sind nach Vereinbarung möglich.`,
  'Kontakt': `Sie erreichen uns unter:

📍 Domgasse 4/1, 9020 Klagenfurt am Wörthersee
📞 +43 463 56648
✉️ ORDINATION.DRJONA@YAHOO.COM`,
  'Leistungen': `Wir bieten folgende Leistungen an:

🦷 Zahnmedizin
🔪 Mund-Kiefer-Gesichtschirurgie
✨ Ästhetische Zahnmedizin
🦷 Prothetik
🛡️ Zahnprophylaxe

Möchten Sie mehr über eine bestimmte Leistung erfahren?`,
  'Termin': `Gerne helfen wir Ihnen bei der Terminvereinbarung!

Sie haben folgende Möglichkeiten:
• Füllen Sie das Formular auf unserer Website aus
• Rufen Sie uns an: +43 463 56648
• Schreiben Sie eine E-Mail: ORDINATION.DRJONA@YAHOO.COM

Wir melden uns schnellstmöglich bei Ihnen.`,
};

const quickOptions = ['Öffnungszeiten', 'Kontakt', 'Leistungen', 'Termin'];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Guten Tag! Ich bin Ihr virtueller Assistent. Wie kann ich Ihnen helfen?',
      sender: 'bot',
      options: quickOptions,
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleOptionClick = (option: string) => {
    const userMsg: Message = {
      id: Date.now(),
      text: option,
      sender: 'user',
    };

    const botText = botResponses[option] || 'Entschuldigung, ich habe das nicht verstanden. Bitte wählen Sie eine der folgenden Optionen:';
    const botMsg: Message = {
      id: Date.now() + 1,
      text: botText,
      sender: 'bot',
      options: quickOptions,
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      text: input,
      sender: 'user',
    };

    let botText = 'Entschuldigung, ich habe das nicht verstanden. Bitte wählen Sie eine der folgenden Optionen:';
    const lower = input.toLowerCase();
    if (lower.includes('zeit') || lower.includes('offen') || lower.includes('wann')) botText = botResponses['Öffnungszeiten'];
    else if (lower.includes('kontakt') || lower.includes('adresse') || lower.includes('telefon') || lower.includes('email') || lower.includes('wo')) botText = botResponses['Kontakt'];
    else if (lower.includes('leistung') || lower.includes('service') || lower.includes('behandlung') || lower.includes('angebot')) botText = botResponses['Leistungen'];
    else if (lower.includes('termin') || lower.includes('vereinbarung') || lower.includes('anmeldung')) botText = botResponses['Termin'];

    const botMsg: Message = {
      id: Date.now() + 1,
      text: botText,
      sender: 'bot',
      options: quickOptions,
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput('');
  };

  const getOptionIcon = (option: string) => {
    switch (option) {
      case 'Öffnungszeiten': return <Clock className="w-4 h-4" />;
      case 'Kontakt': return <MapPin className="w-4 h-4" />;
      case 'Leistungen': return <Stethoscope className="w-4 h-4" />;
      case 'Termin': return <Calendar className="w-4 h-4" />;
      default: return <Phone className="w-4 h-4" />;
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: 'spring' }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#2563eb] text-white rounded-full shadow-lg hover:shadow-xl hover:bg-[#1d4ed8] transition-all flex items-center justify-center"
        aria-label="Chat öffnen"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
            style={{ height: '500px', maxHeight: 'calc(100vh - 140px)' }}
          >
            {/* Header */}
            <div className="bg-[#2563eb] text-white px-5 py-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-sm">Praxis-Assistent</p>
                <p className="text-xs text-white/80">Dr. Gerlinde Jonas</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id}>
                  <div
                    className={`flex gap-2 ${
                      msg.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {msg.sender === 'bot' && (
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#2563eb]/10 flex items-center justify-center mt-1">
                        <Bot className="w-4 h-4 text-[#2563eb]" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                        msg.sender === 'user'
                          ? 'bg-[#2563eb] text-white rounded-br-md'
                          : 'bg-slate-100 text-slate-700 rounded-bl-md'
                      }`}
                    >
                      {msg.text}
                    </div>
                    {msg.sender === 'user' && (
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center mt-1">
                        <User className="w-4 h-4 text-slate-500" />
                      </div>
                    )}
                  </div>

                  {/* Options */}
                  {msg.options && msg.sender === 'bot' && (
                    <div className="flex flex-wrap gap-2 mt-3 ml-9">
                      {msg.options.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleOptionClick(option)}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 hover:border-[#2563eb] hover:text-[#2563eb] transition-colors"
                        >
                          {getOptionIcon(option)}
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-slate-100 p-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Nachricht schreiben..."
                  className="flex-1 px-4 py-2.5 bg-slate-50 rounded-full text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 border border-slate-200 focus:border-[#2563eb] transition-all"
                />
                <button
                  onClick={handleSend}
                  className="w-10 h-10 bg-[#2563eb] text-white rounded-full flex items-center justify-center hover:bg-[#1d4ed8] transition-colors flex-shrink-0"
                  aria-label="Senden"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
