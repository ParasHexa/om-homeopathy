import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import {
  Mail,
  Clock,
  MessageCircle,
  ShieldCheck,
  Video,
  Globe2,
  PackageCheck,
  Languages,
} from 'lucide-react';

interface DirectContactProps {
  currentLang: Language;
}

export const DirectContact: React.FC<DirectContactProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const c = t.contactSection;

  const localizedContent = {
    en: {
      doctorSub: 'Homeopathic Physician & Counsellor (Online Telehealth)',
      languagesLabel: 'Consultation Languages',
      languagesValue: 'Gujarati, Hindi, and English (Fluent & Comfortable)',
      telehealthTitle: 'How Online Telehealth Works',
      telehealthSubtitle: 'High-definition video consultations with medicine courier to your doorstep',
      features: [
        {
          title: 'Private HD Video Session',
          desc: 'Direct 1-on-1 video call link sent via WhatsApp for an unhurried 45-60 min constitutional evaluation.',
        },
        {
          title: 'Hygienic Medicine Courier',
          desc: 'Carefully measured, potentized remedies packaged securely and dispatched right to your doorstep.',
        },
        {
          title: 'Pan-India & Overseas Reach',
          desc: 'Consult from any city across India or abroad without travel stress or crowded waiting rooms.',
        },
        {
          title: 'Direct WhatsApp Follow-up',
          desc: 'Dedicated messaging channel with Dr. Anamika for dosage queries and symptom progress updates.',
        },
      ],
      worldwideNotice: 'Online telehealth appointments available globally across all time zones by prior scheduling.',
    },
    hi: {
      doctorSub: 'होम्योपैथिक चिकित्सक एवं परामर्शदाता (ऑनलाइन टेलीहेल्थ)',
      languagesLabel: 'परामर्श की भाषाएं',
      languagesValue: 'गुजराती, हिंदी और अंग्रेजी (सहज एवं आत्मीय संवाद)',
      telehealthTitle: 'ऑनलाइन टेलीहेल्थ कैसे कार्य करता है',
      telehealthSubtitle: 'एचडी वीडियो परामर्श और घर तक सुरक्षित होम्योपैथिक दवाओं की डिलीवरी',
      features: [
        {
          title: 'गोपनीय वीडियो परामर्श',
          desc: 'व्हाट्सएप पर प्राप्त सुरक्षित लिंक द्वारा 45-60 मिनट की विस्तृत और एकांत बातचीत।',
        },
        {
          title: 'दवाइयों की होम डिलीवरी',
          desc: 'शुद्धता और स्वच्छता से तैयार की गई दवाएं सुरक्षित कूरियर द्वारा आपके पते पर भेजी जाती हैं।',
        },
        {
          title: 'देश-विदेश में उपलब्धता',
          desc: 'यात्रा के तनाव और अस्पताल की कतारों के बिना अपने घर से सीधे डॉक्टर से जुड़ें।',
        },
        {
          title: 'व्हाट्सएप फॉलो-अप सहयोग',
          desc: 'दवाओं की खुराक या किसी भी सवाल के लिए सीधे डॉक्टर अनामिका से निरंतर संवाद।',
        },
      ],
      worldwideNotice: 'पूर्व समय निर्धारण द्वारा सभी समय क्षेत्रों में ऑनलाइन परामर्श उपलब्ध है।',
    },
    gu: {
      doctorSub: 'હોમિયોપેથિક ફિઝિશિયન અને કાઉન્સેલર (ઓનલાઇન ટેલિહેલ્થ)',
      languagesLabel: 'પરામર્શની ભાષાઓ',
      languagesValue: 'ગુજરાતી, હિન્દી અને અંગ્રેજી (સરળ અને આત્મીય સંવાદ)',
      telehealthTitle: 'ઓનલાઇન ટેલિહેલ્થ કેવી રીતે કાર્ય કરે છે',
      telehealthSubtitle: 'એચડી વિડીયો પરામર્શ અને ઘરઆંગણે દવા પહોંચાડવાની વિશ્વસનીય સેવા',
      features: [
        {
          title: 'ખાનગી વિડીયો સેશન',
          desc: 'વોટ્સએપ પર મોકલેલી લિંક દ્વારા ૪૫-૬૦ મિનિટનું ઊંડાણપૂર્વક અને શાંતિપૂર્ણ કેસ-ટેકિંગ.',
        },
        {
          title: 'ઘરઆંગણે દવાઓની ડિલિવરી',
          desc: 'સંપૂર્ણ સ્વચ્છતા સાથે તૈયાર કરેલી હોમિયોપેથિક દવાઓ કુરિયર દ્વારા તમારા સરનામે પહોંચે છે.',
        },
        {
          title: 'સમગ્ર વિશ્વમાં સેવા',
          desc: 'મુસાફરીના થાક વગર તમારા ઘરની શાંતિ વચ્ચે દેશ-વિદેશમાંથી સીધા ડૉક્ટર સાથે જોડાઓ.',
        },
        {
          title: 'વોટ્સએપ ફોલો-અપ સહાય',
          desc: 'દવા લેવાની પદ્ધતિ કે આરોગ્ય સુધારા અંગે ડૉ. અનામિકા સાથે સીધો સંપર્ક જળવાઈ રહે છે.',
        },
      ],
      worldwideNotice: 'અગાઉથી સમય નક્કી કરીને ભારત અને વિશ્વભરમાંથી ઓનલાઇન પરામર્શ મેળવી શકાય છે.',
    },
  }[currentLang];

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E8F0EC] text-[#5C8A74] text-xs font-semibold tracking-wider uppercase mb-3">
            {c.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-[#0B2545] tracking-tight">
            {c.heading}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed">
            {c.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Direct Communication Channels Card */}
          <div className="lg:col-span-6 bg-[#FAFAF8] rounded-3xl p-6 sm:p-8 border border-[#5C8A74]/20 shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              {/* Doctor Header */}
              <div className="pb-5 border-b border-slate-200">
                <div className="text-xs uppercase tracking-wider text-[#5C8A74] font-bold">
                  Consulting Homeopath
                </div>
                <div className="text-xl font-bold font-display text-[#0B2545] mt-0.5">
                  Dr. Anamika Chandegra
                </div>
                <div className="text-xs text-[#5C8A74] font-semibold">
                  B.H.M.S. & N.C.H.
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {localizedContent.doctorSub}
                </div>
              </div>

              {/* Direct Info List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#E8F0EC] text-[#5C8A74] flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B] font-medium">
                      {c.phoneLabel}
                    </div>
                    <a
                      href="https://wa.me/918200928769"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#0B2545] hover:text-[#5C8A74] transition-colors"
                    >
                      +91 8200928769
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#E8F0EC] text-[#5C8A74] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B] font-medium">
                      {c.emailLabel}
                    </div>
                    <a
                      href="mailto:dranamikachandegra@gmail.com"
                      className="text-xs sm:text-sm font-bold text-[#0B2545] hover:text-[#5C8A74] transition-colors break-all"
                    >
                      dranamikachandegra@gmail.com
                    </a>
                  </div>
                </div>

                {/* Consultation Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#E8F0EC] text-[#5C8A74] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B] font-medium">
                      {c.availabilityTitle}
                    </div>
                    <div className="text-xs font-semibold text-[#0B2545]">
                      {c.availabilityDesc}
                    </div>
                  </div>
                </div>

                {/* Languages */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#E8F0EC] text-[#5C8A74] flex items-center justify-center shrink-0 mt-0.5">
                    <Languages size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B] font-medium">
                      {localizedContent.languagesLabel}
                    </div>
                    <p className="text-xs text-[#334155] leading-relaxed font-semibold">
                      {localizedContent.languagesValue}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap gap-3">
              <a
                href="https://wa.me/918200928769"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#25D366] hover:bg-[#1ebe5d] transition-colors shadow-xs"
              >
                <MessageCircle size={16} />
                <span>{c.chatOnWhatsApp}</span>
              </a>

              <a
                href="mailto:dranamikachandegra@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-[#0B2545] bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                <Mail size={16} className="text-[#5C8A74]" />
                <span>{c.sendAnEmail}</span>
              </a>
            </div>
          </div>

          {/* Telehealth Practice Model Showcase Card */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#0B2545] to-[#133E68] text-white rounded-3xl p-6 sm:p-8 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/10 text-[#A8D5BA] border border-white/10">
                  <Globe2 size={13} />
                  <span>100% Online Practice</span>
                </span>
                <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Appointments Open</span>
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2">
                {localizedContent.telehealthTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                {localizedContent.telehealthSubtitle}
              </p>

              {/* 4 Feature Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {localizedContent.features.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between"
                  >
                    <div className="flex items-center gap-2 text-xs font-bold text-[#A8D5BA] mb-1">
                      {idx === 0 && <Video size={14} />}
                      {idx === 1 && <PackageCheck size={14} />}
                      {idx === 2 && <Globe2 size={14} />}
                      {idx === 3 && <MessageCircle size={14} />}
                      <span>{item.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-6 pt-5 border-t border-white/15 flex items-center gap-2.5 text-xs text-slate-300">
              <ShieldCheck size={18} className="text-[#A8D5BA] shrink-0" />
              <span>{localizedContent.worldwideNotice}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
