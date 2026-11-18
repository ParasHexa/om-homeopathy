import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { CHATBOT_QA } from '../data/reviewsAndGallery';
import { OmLogoIcon } from './OmLogo';
import {
  X,
  Send,
  Sparkles,
  AlertTriangle,
  Calendar,
} from 'lucide-react';

interface ChatbotProps {
  currentLang: Language;
  onBookClick: () => void;
}

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  isEmergency?: boolean;
  time: string;
}

export const Chatbot: React.FC<ChatbotProps> = ({ currentLang, onBookClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const t = TRANSLATIONS[currentLang];
  const c = t.chatbot;

  const quickQuestions = {
    en: [
      'How does consultation work?',
      'Can I consult online?',
      'What is homeopathy?',
      'Doctor credentials',
      'Book appointment',
    ],
    hi: [
      'परामर्श कैसे होता है?',
      'क्या ऑनलाइन परामर्श संभव है?',
      'होम्योपैथी क्या है?',
      'डॉक्टर की योग्यता',
      'अपॉइंटमेंट बुक करें',
    ],
    gu: [
      'પરામર્શ કેવી રીતે થાય છે?',
      'શું ઓનલાઇન કન્સલ્ટેશન શક્ય છે?',
      'હોમિયોપેથી શું છે?',
      'ડૉક્ટરની પદવી',
      'એપોઇન્ટમેન્ટ બુકિંગ',
    ],
  }[currentLang];

  // Initialize greeting on first open or lang change
  useEffect(() => {
    const greetingText = {
      en: "Namaste! I am your OM Care Assistant. How may I assist your health and consultation journey today?",
      hi: "नमस्ते! मैं आपका ओम केयर असिस्टेंट हूँ। आज मैं आपकी स्वास्थ्य एवं परामर्श यात्रा में क्या सहायता कर सकता हूँ?",
      gu: "નમસ્તે! હું આપનો ઓમ કેર આસિસ્ટન્ટ છું. આજે આપની સ્વાસ્થ્ય અને પરામર્શ યાત્રામાં હું શી રીતે સહાય કરી શકું?",
    };

    setMessages([
      {
        id: 'init-1',
        sender: 'bot',
        text: greetingText[currentLang],
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  }, [currentLang]);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');

    // Process answer
    setTimeout(() => {
      const lower = text.toLowerCase();
      let matched = CHATBOT_QA.find((item) =>
        item.keywords.some((k) => lower.includes(k.toLowerCase()))
      );

      let botResponseText = '';
      let isEmergency = false;

      if (
        lower.includes('chest pain') ||
        lower.includes('heart attack') ||
        lower.includes('severe bleeding') ||
        lower.includes('unconscious') ||
        lower.includes('emergency')
      ) {
        isEmergency = true;
        botResponseText =
          currentLang === 'en'
            ? 'URGENT NOTICE: Homeopathy does not replace emergency trauma or critical care. If you or someone with you is experiencing chest pain, acute shortness of breath, severe trauma, or fainting, please call local emergency services or visit the nearest emergency room immediately.'
            : currentLang === 'hi'
            ? 'आपातकालीन चेतावनी: होम्योपैथी गंभीर आपातकालीन या ट्रॉमा चिकित्सा का विकल्प नहीं है। यदि सीने में तेज दर्द, सांस फूलना या बेहोशी के लक्षण हों, तो कृपया तुरंत नजदीकी अस्पताल के आपातकालीन विभाग में जाएं।'
            : 'તાત્કાલિક ચેતવણી: હોમિયોપેથી ઇમરજન્સી કે ગંભીર ટ્રોમા સારવારનો વિકલ્પ નથી. છાતીમાં દુખાવો, શ્વાસની ગંભીર તકલીફ કે બેહોશીની સ્થિતિમાં તાત્કાલિક હોસ્પિટલના ઇમરજન્સી વિભાગનો સંપર્ક કરો.';
      } else if (matched) {
        botResponseText = matched.answer[currentLang];
      } else {
        botResponseText =
          currentLang === 'en'
            ? "Dr. Anamika specializes in unhurried, individualised constitutional case-taking. For your specific health concern, we recommend scheduling a direct consultation or messaging directly on WhatsApp at +91 8200928769."
            : currentLang === 'hi'
            ? "डॉ. अनामिका व्यक्तिगत और समग्र केस-टेकिंग में विशेषज्ञ हैं। आपकी समस्या के सटीक समाधान के लिए हम सीधे व्हाट्सएप (+91 8200928769) पर संपर्क करने या अपॉइंटमेंट तय करने की सलाह देते हैं।"
            : "ડૉ. અનામિકા વ્યક્તિગત અને ગહન કેસ-ટેકિંગમાં વિશેષતા ધરાવે છે. આપની તકલીફના યોગ્ય નિદાન અને સલાહ માટે વોટ્સએપ (+91 8200928769) પર સીધો સંપર્ક કરવો શ્રેષ્ઠ રહેશે.";
      }

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: botResponseText,
        isEmergency,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    }, 400);
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {/* Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-white/95 backdrop-blur-md border border-[#5C8A74]/30 shadow-xl hover:shadow-2xl text-[#0B2545] transition-all hover:scale-105 cursor-pointer"
          aria-label="Open OM Care Assistant consultation chatbot"
        >
          <div className="w-8 h-8 rounded-full bg-[#E8F0EC] flex items-center justify-center text-[#5C8A74]">
            <OmLogoIcon size={24} />
          </div>
          <div className="flex flex-col text-left pr-1">
            <span className="text-xs font-bold font-display leading-tight">
              {c.name}
            </span>
            <span className="text-[10px] text-[#5C8A74] font-semibold flex items-center gap-1">
              <Sparkles size={10} className="text-[#C59B27]" />
              <span>Ask a question</span>
            </span>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] h-[520px] bg-white rounded-3xl shadow-2xl border border-[#5C8A74]/30 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#0B2545] to-[#133E68] text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/10 p-1 flex items-center justify-center">
                <OmLogoIcon size={28} isWhite />
              </div>
              <div>
                <div className="text-sm font-bold font-display">
                  {c.name}
                </div>
                <div className="text-[10px] text-[#A8D5BA] flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>OM Homeopathy Medical Guide</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#FAFAF8] text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#0B2545] text-white rounded-br-xs'
                      : msg.isEmergency
                      ? 'bg-rose-50 border border-rose-200 text-rose-950 font-medium'
                      : 'bg-white border border-[#5C8A74]/20 text-[#162534] shadow-2xs rounded-bl-xs'
                  }`}
                >
                  {msg.isEmergency && (
                    <div className="flex items-center gap-1 text-rose-600 font-bold mb-1 uppercase tracking-wider text-[10px]">
                      <AlertTriangle size={14} />
                      <span>Emergency Warning</span>
                    </div>
                  )}
                  <p>{msg.text}</p>
                </div>
                <span className="text-[9px] text-slate-400 mt-1 px-1">
                  {msg.time}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Question Chips */}
          <div className="p-2 bg-white border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#F4F8F5] text-[#0B2545] hover:bg-[#E8F0EC] transition-colors border border-[#5C8A74]/15 cursor-pointer shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Row */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder={c.askPlaceholder}
              className="flex-1 px-3 py-2 text-xs rounded-full bg-slate-50 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#5C8A74]"
            />
            <button
              onClick={() => handleSendMessage()}
              className="p-2 rounded-full bg-[#0B2545] text-white hover:bg-[#133E68] transition-colors cursor-pointer shrink-0"
              aria-label="Send message"
            >
              <Send size={14} />
            </button>
          </div>

          {/* Fast WhatsApp Book Footer */}
          <div className="px-3 py-1.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[10px] text-[#64748B]">
            <span>Need human appointment?</span>
            <button
              onClick={() => {
                setIsOpen(false);
                onBookClick();
              }}
              className="font-bold text-[#0B2545] hover:underline flex items-center gap-0.5"
            >
              <span>Book Slot</span>
              <Calendar size={10} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
