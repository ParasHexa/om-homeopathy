import { Language } from '../types';

export const TRANSLATIONS: Record<Language, {
  brand: {
    name: string;
    tagline: string;
    doctorName: string;
    credentials: string;
    doctorTitle: string;
    healingFocus: string;
  };
  nav: {
    home: string;
    about: string;
    treatments: string;
    howItWorks: string;
    reviews: string;
    gallery: string;
    faq: string;
    contact: string;
    bookAppointment: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheading: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustText: string;
    doctorTag: string;
    consultationModes: string;
  };
  trustStrip: {
    items: Array<{ title: string; desc: string }>;
  };
  doctorSection: {
    badge: string;
    heading: string;
    subheading: string;
    doctorName: string;
    credentials: string;
    paragraphs: string[];
    pillars: Array<{ title: string; desc: string }>;
    quote: string;
  };
  treatmentsSection: {
    badge: string;
    heading: string;
    subheading: string;
    learnMore: string;
    disclaimerSnippet: string;
  };
  treatmentModal: {
    overview: string;
    commonSymptoms: string;
    ourApproach: string;
    whatToExpect: string;
    urgentNoticeTitle: string;
    faqTitle: string;
    bookCta: string;
    educationalNotice: string;
  };
  processSection: {
    badge: string;
    heading: string;
    subheading: string;
    modesTitle: string;
    onlineTitle: string;
    onlineDesc: string;
    deliveryTitle: string;
    deliveryDesc: string;
    steps: Array<{ step: string; title: string; desc: string }>;
  };
  whyChooseSection: {
    badge: string;
    heading: string;
    subheading: string;
    cards: Array<{ title: string; desc: string }>;
  };
  reviewsSection: {
    badge: string;
    heading: string;
    subheading: string;
    shareBtn: string;
    modalTitle: string;
    modalSubtitle: string;
    nameLabel: string;
    treatmentLabel: string;
    ratingLabel: string;
    typeLabel: string;
    reviewLabel: string;
    submitBtn: string;
    successMsg: string;
    disclaimer: string;
  };
  gallerySection: {
    badge: string;
    heading: string;
    subheading: string;
    tabs: {
      all: string;
      consultation: string;
      treatment: string;
      care: string;
      stories: string;
    };
    privacyNotice: string;
  };
  faqSection: {
    badge: string;
    heading: string;
    subheading: string;
    searchPlaceholder: string;
    needMoreHelp: string;
    askDoctorBtn: string;
  };
  appointmentSection: {
    badge: string;
    heading: string;
    subheading: string;
    fullName: string;
    phoneNumber: string;
    treatmentSelect: string;
    treatmentPlaceholder: string;
    preferredDate: string;
    preferredTime: string;
    consultationType: string;
    onlineOption: string;
    messageOptional: string;
    messagePlaceholder: string;
    bookViaWhatsApp: string;
    sendViaEmail: string;
    requiredNotice: string;
    privacyAssurance: string;
    validationErrors: {
      name: string;
      phone: string;
      treatment: string;
      date: string;
      time: string;
    };
    successEmailToast: string;
  };
  contactSection: {
    badge: string;
    heading: string;
    subheading: string;
    phoneLabel: string;
    emailLabel: string;
    instagramLabel: string;
    chatOnWhatsApp: string;
    sendAnEmail: string;
    followInstagram: string;
    availabilityTitle: string;
    availabilityDesc: string;
  };
  floatingWhatsApp: {
    tooltipTitle: string;
    tooltipDesc: string;
    reminderText: string;
  };
  chatbot: {
    name: string;
    role: string;
    welcome: string;
    medicalDisclaimer: string;
    emergencyWarning: string;
    askPlaceholder: string;
    send: string;
    suggestedTitle: string;
    whatsappCta: string;
    fallbackResponse: string;
  };
  disclaimer: {
    title: string;
    text: string;
  };
  footer: {
    aboutText: string;
    quickLinksTitle: string;
    treatmentsTitle: string;
    contactTitle: string;
    brandMockupLink: string;
    copyright: string;
    privacyPolicy: string;
    termsOfUse: string;
    emergencyNotice: string;
  };
}> = {
  en: {
    brand: {
      name: 'OM HOMEOPATHY',
      tagline: 'Healing & Counselling',
      doctorName: 'Dr. Anamika Chandegra',
      credentials: 'B.H.M.S. & N.C.H.',
      doctorTitle: 'Homeopathic Physician & Counsellor',
      healingFocus: 'Personalised Holistic Wellness',
    },
    nav: {
      home: 'Home',
      about: 'About Doctor',
      treatments: 'Treatments',
      howItWorks: 'How It Works',
      reviews: 'Patient Stories',
      gallery: 'Gallery',
      faq: 'FAQ',
      contact: 'Contact',
      bookAppointment: 'Book Appointment',
    },
    hero: {
      badge: 'B.H.M.S. & N.C.H. Certified Homeopathic Care',
      headline: 'Personalised Homeopathic Care for Your Wellbeing',
      subheading: 'Every individual is different. Our approach focuses on understanding your symptoms, lifestyle and individual needs to provide personalised homeopathic care.',
      ctaPrimary: 'Book an Appointment',
      ctaSecondary: 'Explore Treatments',
      trustText: 'Personalised Consultation • Professional Care • 100% Online Telehealth Support',
      doctorTag: 'Dr. Anamika Chandegra (B.H.M.S. & N.C.H.)',
      consultationModes: '100% Online Video & Audio Consultations Worldwide',
    },
    trustStrip: {
      items: [
        { title: 'Individual Case-Taking', desc: 'Thorough evaluation of constitutional symptoms & personal history' },
        { title: 'Safe & Natural Approach', desc: 'Non-invasive, gentle homeopathic remedies tailored for your vitality' },
        { title: 'Dedicated Counselling', desc: 'Compassionate emotional support & lifestyle guidance every step' },
        { title: 'Online Telehealth Access', desc: 'Convenient online video consultations from anywhere with doorstep remedy delivery' },
      ],
    },
    doctorSection: {
      badge: 'Meet Your Doctor',
      heading: 'Compassionate, Patient-Centred Homeopathic Healing',
      subheading: 'Dedicated to listening deeply, understanding your unique health history, and walking beside you on your wellness journey.',
      doctorName: 'Dr. Anamika Chandegra',
      credentials: 'B.H.M.S. & N.C.H.',
      paragraphs: [
        'Welcome to OM Homeopathy. I believe true healing begins with genuine, unhurried listening. In conventional practice, symptoms are often viewed in isolation; in homeopathy, every physical, mental, and environmental factor forms a vital part of your unique constitutional picture.',
        'With credentials in B.H.M.S. and N.C.H., my practice is founded upon individualised case-taking, compassionate counselling, and careful follow-up. Whether you are seeking gentle care for your child, managing seasonal illnesses, or navigating long-standing health concerns, our online telehealth consultations are structured to honour your personal comfort and privacy.',
      ],
      pillars: [
        { title: 'Individualised Consultation', desc: 'Treating you as a whole person rather than just a collection of diagnostic labels.' },
        { title: 'Lifestyle & Symptom History', desc: 'Understanding your sleep, thermal reactions, stress triggers, and daily rhythm.' },
        { title: 'Patient-Centred Communication', desc: 'An empathetic, non-judgmental space where your health concerns are heard thoroughly.' },
        { title: 'Counselling & Follow-Up Care', desc: 'Continuous guidance and progress tracking to support sustained vitality.' },
      ],
      quote: '“Healing is not merely the absence of discomfort; it is the restoration of your inner balance, peace, and natural vitality.”',
    },
    treatmentsSection: {
      badge: 'Treatments & Conditions We Support',
      heading: 'Specialised Care Tailored to Your Unique Health Needs',
      subheading: 'We provide supportive, individualised homeopathic consultations for a wide spectrum of acute and chronic health concerns. Explore each condition to learn our approach.',
      learnMore: 'Learn More & Approach',
      disclaimerSnippet: 'Homeopathic consultations provide complementary support and do not substitute emergency hospital care.',
    },
    treatmentModal: {
      overview: 'Condition Overview',
      commonSymptoms: 'Common Symptoms Reported',
      ourApproach: 'Our Consultation Approach',
      whatToExpect: 'What You Can Expect',
      urgentNoticeTitle: 'When to Seek Urgent Medical Attention',
      faqTitle: 'Frequently Asked Questions',
      bookCta: 'Book Consultation for this Concern',
      educationalNotice: 'Educational Disclaimer: This information is for general awareness and educational purposes. It does not replace a professional medical diagnosis, prescription, or emergency medical treatment.',
    },
    processSection: {
      badge: 'How Consultation Works',
      heading: 'A Simple, Transparent 4-Step Online Journey',
      subheading: 'Experience holistic homeopathic healing from the comfort and privacy of your home with our dedicated online telehealth consultation.',
      modesTitle: 'Key Pillars of Our Online Practice',
      onlineTitle: '1-on-1 Online Video Consultation',
      onlineDesc: 'Available worldwide via private, unhurried video/audio call with comprehensive constitutional case-taking.',
      deliveryTitle: 'Doorstep Remedy Delivery',
      deliveryDesc: 'Authentic potentized remedies prepared under hygienic standards and dispatched directly to your doorstep across India and overseas.',
      steps: [
        { step: '01', title: 'Book Online Slot', desc: 'Choose your preferred date, time slot, and health concern via WhatsApp or our secure booking form.' },
        { step: '02', title: 'Comprehensive Consultation', desc: 'A dedicated, unhurried 45-60 minute video call exploring your symptoms, triggers, lifestyle, and history.' },
        { step: '03', title: 'Personalised Remedy Plan', desc: 'Tailored homeopathic remedies selected specifically for you, accompanied by lifestyle guidance and home delivery.' },
        { step: '04', title: 'Digital Follow-Up & Support', desc: 'Regular milestone evaluations via WhatsApp or video call to track your progress and adjust care.' },
      ],
    },
    whyChooseSection: {
      badge: 'Why Patients Choose Us',
      heading: 'Why Patients Choose Personalised Care',
      subheading: 'Ethical healthcare founded on empathy, scientific principles of individualisation, and responsible medical guidance.',
      cards: [
        { title: 'Individual Attention', desc: 'Every case is given unhurried, meticulous clinical focus tailored strictly to your individual nature.' },
        { title: 'Personalised Consultation', desc: 'No one-size-fits-all treatments; remedies match your unique mental and physical constitutional totality.' },
        { title: 'Patient-Centred Communication', desc: 'Open, transparent discussions where you are actively involved in understanding your care.' },
        { title: '100% Online Telehealth', desc: 'Consult comfortably from anywhere in the world with doorstep remedy dispatch and digital health record tracking.' },
        { title: 'Follow-Up Support', desc: 'Consistent guidance between appointments for any adjustments or guidance you may need.' },
        { title: 'Easy WhatsApp Booking', desc: 'Direct, straightforward coordination without complicated hospital queues or apps.' },
      ],
    },
    reviewsSection: {
      badge: 'Patient Experiences',
      heading: 'Stories of Care, Listening & Wellbeing',
      subheading: 'Reflections from patients who have experienced Dr. Anamika’s personalised consultation and counselling approach.',
      shareBtn: 'Share Your Experience',
      modalTitle: 'Share Your Experience with OM Homeopathy',
      modalSubtitle: 'Your feedback helps other patients seek thoughtful care. Real patient privacy is always respected.',
      nameLabel: 'Your Name or Initials',
      treatmentLabel: 'Concern Consulted For',
      ratingLabel: 'Experience Rating',
      typeLabel: 'Consultation Mode',
      reviewLabel: 'Your Experience & Feedback',
      submitBtn: 'Submit Experience Note',
      successMsg: 'Thank you for sharing your experience! It has been submitted for review.',
      disclaimer: 'Note: Patient experiences reflect individual journeys. Results vary for each person.',
    },
    gallerySection: {
      badge: 'Patient Journey & Telehealth Care',
      heading: 'Compassionate Care & Healing Science',
      subheading: 'Explore our dedicated telehealth consultation approach, authentic natural remedies, and patient-first care ethos.',
      tabs: {
        all: 'All',
        consultation: 'Consultation',
        treatment: 'Remedies & Care',
        care: 'Telehealth & Care',
        stories: 'Patient Care',
      },
      privacyNotice: 'Privacy Commitment: All displayed patient photographs and journey elements are shared strictly with verified consent. Private medical records and personal identifying data are never disclosed.',
    },
    faqSection: {
      badge: 'Answers & Clarity',
      heading: 'Frequently Asked Questions',
      subheading: 'Everything you need to know about homeopathic consultations, preparation, and what to expect.',
      searchPlaceholder: 'Search questions about consultation, medicines, booking...',
      needMoreHelp: 'Have a specific query not answered here?',
      askDoctorBtn: 'Ask on WhatsApp Directly',
    },
    appointmentSection: {
      badge: 'Book Your Consultation',
      heading: 'Take the First Step Toward Personalised Wellbeing',
      subheading: 'Fill in your details below. You can instantly book via WhatsApp or send your request by email.',
      fullName: 'Full Name *',
      phoneNumber: 'WhatsApp / Phone Number *',
      treatmentSelect: 'Treatment / Primary Concern *',
      treatmentPlaceholder: 'Select your health concern...',
      preferredDate: 'Preferred Date *',
      preferredTime: 'Preferred Time Slot *',
      consultationType: 'Consultation Format *',
      onlineOption: 'Online (Video / Audio Consultation)',
      messageOptional: 'Brief Description of Your Concern (Optional)',
      messagePlaceholder: 'Share any details about how long you have experienced this, current medications, or specific questions...',
      bookViaWhatsApp: 'Book via WhatsApp',
      sendViaEmail: 'Send via Email',
      requiredNotice: '* Indicates required fields',
      privacyAssurance: 'Your privacy is guaranteed. All personal information and health notes remain strictly confidential.',
      validationErrors: {
        name: 'Please enter your full name.',
        phone: 'Please enter a valid phone number.',
        treatment: 'Please select your health concern.',
        date: 'Please select a preferred date.',
        time: 'Please select a preferred time slot.',
      },
      successEmailToast: 'Email draft created! If your email client did not open, you can also connect via WhatsApp.',
    },
    contactSection: {
      badge: 'Get in Touch',
      heading: 'Direct Online Telehealth & Consultations',
      subheading: 'Connect directly with Dr. Anamika Chandegra via WhatsApp or email for video appointments, digital health record reviews, and doorstep remedy delivery.',
      phoneLabel: 'WhatsApp & Call Support',
      emailLabel: 'Direct Email Inquiries',
      instagramLabel: 'Instagram Community',
      chatOnWhatsApp: 'Chat on WhatsApp',
      sendAnEmail: 'Send an Email',
      followInstagram: 'Follow @om_homeopathy',
      availabilityTitle: 'Consultation Hours',
      availabilityDesc: 'Monday to Saturday: 10:00 AM – 7:00 PM IST (Online By Prior Appointment)',
    },
    floatingWhatsApp: {
      tooltipTitle: 'Need a consultation?',
      tooltipDesc: 'Book your appointment directly on WhatsApp with Dr. Anamika.',
      reminderText: 'Have questions? Book your consultation on WhatsApp',
    },
    chatbot: {
      name: 'OM Care Assistant',
      role: 'Online Telehealth & Health Guide',
      welcome: 'Hello! I am the OM Care Assistant. How can I help you regarding Dr. Anamika’s online homeopathic consultations today?',
      medicalDisclaimer: 'Notice: I provide general online telehealth guidance and FAQ answers. I do not diagnose illnesses or provide emergency medical advice.',
      emergencyWarning: 'If you are experiencing severe chest pain, sudden breathlessness, or a medical emergency, please contact your local emergency services or hospital immediately.',
      askPlaceholder: 'Ask a question or select a prompt below...',
      send: 'Ask',
      suggestedTitle: 'Common Questions:',
      whatsappCta: 'Chat Directly on WhatsApp',
      fallbackResponse: 'For personalised medical advice and case evaluation, please book a consultation with Dr. Anamika Chandegra.',
    },
    disclaimer: {
      title: 'Medical & Educational Disclaimer',
      text: 'Information provided on this website is for general educational purposes and is not a substitute for professional medical diagnosis, treatment or emergency medical care. Individual results may vary. Please consult an appropriately qualified healthcare professional for medical advice.',
    },
    footer: {
      aboutText: 'OM Homeopathy provides individualised, patient-centred homeopathic care and counselling under the guidance of Dr. Anamika Chandegra (B.H.M.S. & N.C.H.). Dedicated to restorative wellness with empathy, balance, and natural harmony through modern telehealth.',
      quickLinksTitle: 'Quick Navigation',
      treatmentsTitle: 'Key Treatments',
      contactTitle: 'Direct Online Support',
      brandMockupLink: 'View Brand Identity & Prescription Design',
      copyright: 'All Rights Reserved. OM HOMEOPATHY — Healing & Counselling.',
      privacyPolicy: 'Patient Privacy Policy',
      termsOfUse: 'Terms of Consultation',
      emergencyNotice: 'Emergency Notice: In case of acute medical emergencies, please contact your local emergency services or visit the nearest hospital emergency room.',
    },
  },
  hi: {
    brand: {
      name: 'ओम होम्योपैथी',
      tagline: 'उपचार और परामर्श (Healing & Counselling)',
      doctorName: 'डॉ. अनामिका चांदेगरा',
      credentials: 'बी.एच.एम.एस. एवं एन.सी.एच. (B.H.M.S. & N.C.H.)',
      doctorTitle: 'होम्योपैथिक चिकित्सक एवं परामर्शदाता',
      healingFocus: 'व्यक्तिगत समग्र स्वास्थ्य संवर्धन',
    },
    nav: {
      home: 'होम',
      about: 'डॉक्टर के बारे में',
      treatments: 'उपचार व सेवाएं',
      howItWorks: 'परामर्श प्रक्रिया',
      reviews: 'रोगी अनुभव',
      gallery: 'गैलरी',
      faq: 'अक्सर पूछे जाने वाले सवाल',
      contact: 'संपर्क',
      bookAppointment: 'अपॉइंटमेंट बुक करें',
    },
    hero: {
      badge: 'बी.एच.एम.एस. एवं एन.सी.एच. प्रमाणित होम्योपैथिक देखरेख',
      headline: 'आपके संपूर्ण स्वास्थ्य के लिए व्यक्तिगत होम्योपैथिक देखभाल',
      subheading: 'हर व्यक्ति की शारीरिक व मानसिक प्रकृति भिन्न होती है। हमारा दृष्टिकोण आपके लक्षणों, जीवनशैली और व्यक्तिगत आवश्यकताओं को समझकर अनुकूल होम्योपैथिक परामर्श देना है।',
      ctaPrimary: 'अपॉइंटमेंट बुक करें',
      ctaSecondary: 'उपचार सेवाएं देखें',
      trustText: 'व्यक्तिगत परामर्श • पेशेवर देखरेख • 100% ऑनलाइन टेलीहेल्थ सुविधा',
      doctorTag: 'डॉ. अनामिका चांदेगरा (B.H.M.S. & N.C.H.)',
      consultationModes: 'देश-विदेश में 100% ऑनलाइन वीडियो एवं ऑडियो परामर्श उपलब्ध',
    },
    trustStrip: {
      items: [
        { title: 'विस्तृत केस-टेकिंग', desc: 'शारीरिक व मानसिक लक्षणों तथा पारिवारिक स्वास्थ्य का संपूर्ण अध्ययन' },
        { title: 'सुरक्षित एवं सौम्य उपचार', desc: 'बिना किसी प्रतिकूल प्रभाव के प्राकृतिक व सुसंगत होम्योपैथिक दवाएं' },
        { title: 'समर्पित काउंसलिंग', desc: 'मानसिक तनाव मुक्ति, भावनात्मक सहयोग और जीवनशैली मार्गदर्शन' },
        { title: 'ऑनलाइन टेलीहेल्थ सुविधा', desc: 'कहीं से भी सुविधाजनक ऑनलाइन वीडियो परामर्श एवं दवाइयों की सुरक्षित होम डिलीवरी' },
      ],
    },
    doctorSection: {
      badge: 'मिलिए अपने चिकित्सक से',
      heading: 'संवेदनशील और रोगी-केंद्रित होम्योपैथिक चिकित्सा',
      subheading: 'धैर्यपूर्वक सुनने, आपके स्वास्थ्य इतिहास को गहराई से समझने और आरोग्य की यात्रा में आपका साथ निभाने के लिए समर्पित।',
      doctorName: 'डॉ. अनामिका चांदेगरा',
      credentials: 'बी.एच.एम.एस. एवं एन.सी.एच.',
      paragraphs: [
        'ओम होम्योपैथी में आपका हार्दिक स्वागत है। मेरा दृढ़ विश्वास है कि सच्चा उपचार केवल लक्षणों को दबाने से नहीं, बल्कि रोगी की बात को धैर्य से सुनने और समझने से शुरू होता है। होम्योपैथी में प्रत्येक शारीरिक, मानसिक और जीवनशैली कारक आपके स्वास्थ्य का महत्वपूर्ण हिस्सा है।',
        'बी.एच.एम.एस. एवं एन.सी.एच. अर्हता के साथ मेरा उद्देश्य प्रत्येक मरीज को व्यक्तिगत परामर्श, स्नेहपूर्ण काउंसलिंग और सतत सहयोग प्रदान करना है। हमारी ऑनलाइन टेलीहेल्थ परामर्श सेवा आपके व्यक्तिगत आराम और पूर्ण गोपनीयता को ध्यान में रखकर तैयार की गई है।',
      ],
      pillars: [
        { title: 'व्यक्तिगत परामर्श', desc: 'केवल बीमारी का नाम नहीं, बल्कि पूरे व्यक्ति का समग्र अध्ययन और उपचार।' },
        { title: 'लक्षण व जीवनशैली का इतिहास', desc: 'आपकी नींद, भूख, तापमान सहनशीलता और तनाव के कारणों की विस्तृत समझ।' },
        { title: 'मरीज-केंद्रित संवाद', desc: 'एक सुरक्षित और सहज वातावरण जहां आप बिना किसी झिझक के अपनी बात रख सकें।' },
        { title: 'काउंसलिंग एवं फॉलो-अप', desc: 'स्वास्थ्य में निरंतर सुधार सुनिश्चित करने के लिए नियमित निगरानी और मार्गदर्शन।' },
      ],
      quote: '“स्वास्थ्य केवल बीमारी का अभाव नहीं है; यह आंतरिक संतुलन, मानसिक शांति और स्वाभाविक ऊर्जा की पुनर्स्थापना है।”',
    },
    treatmentsSection: {
      badge: 'स्वास्थ्य समस्याएं जिनका हम समाधान करते हैं',
      heading: 'आपकी विशेष आवश्यकताओं के अनुरूप व्यक्तिगत परामर्श',
      subheading: 'हम विभिन्न सामान्य और पुरानी स्वास्थ्य समस्याओं के लिए समग्र और सौम्य होम्योपैथिक परामर्श प्रदान करते हैं। प्रत्येक विषय की जानकारी नीचे देखें।',
      learnMore: 'विस्तृत जानकारी व दृष्टिकोण',
      disclaimerSnippet: 'होम्योपैथिक परामर्श पूरक स्वास्थ्य सहायता प्रदान करता है और यह आपातकालीन अस्पताल चिकित्सा का विकल्प नहीं है।',
    },
    treatmentModal: {
      overview: 'समस्या का संक्षिप्त विवरण',
      commonSymptoms: 'सामान्यतः देखे जाने वाले लक्षण',
      ourApproach: 'हमारा परामर्श दृष्टिकोण',
      whatToExpect: 'उपचार से क्या अपेक्षा रखें',
      urgentNoticeTitle: 'आपातकालीन चिकित्सा कब लेनी चाहिए',
      faqTitle: 'अक्सर पूछे जाने वाले सवाल',
      bookCta: 'इस समस्या हेतु परामर्श बुक करें',
      educationalNotice: 'शैक्षणिक अस्वीकरण: यह जानकारी केवल सामान्य जागरूकता और शिक्षा के उद्देश्य से है। यह किसी पेशेवर चिकित्सा निदान, डॉक्टर के पर्चे या आपातकालीन उपचार का विकल्प नहीं है।',
    },
    processSection: {
      badge: 'परामर्श की प्रक्रिया',
      heading: 'सरल, पारदर्शी 4-चरणीय ऑनलाइन यात्रा',
      subheading: 'अपने घर के शांत और सुरक्षित वातावरण में व्यक्तिगत ऑनलाइन टेलीहेल्थ परामर्श का लाभ लें।',
      modesTitle: 'हमारी ऑनलाइन परामर्श सेवा के प्रमुख आधार',
      onlineTitle: 'ऑनलाइन वीडियो परामर्श',
      onlineDesc: 'सुरक्षित वीडियो/ऑडियो कॉल के माध्यम से देश-विदेश में उपलब्ध, व्यक्तिगत और गोपनीय केस-टेकिंग।',
      deliveryTitle: 'दवाइयों की होम डिलीवरी',
      deliveryDesc: 'शुद्ध और प्रामाणिक होम्योपैथिक दवाएं स्वच्छ पैकिंग में सीधे आपके घर तक पहुंचाई जाती हैं।',
      steps: [
        { step: '01', title: 'ऑनलाइन स्लॉट बुक करें', desc: 'व्हाट्सएप या हमारी वेबसाइट के फॉर्म द्वारा अपनी सुविधानुसार समय व दिन चुनें।' },
        { step: '02', title: 'विस्तृत वीडियो परामर्श', desc: '45 से 60 मिनट की विस्तृत चर्चा जिसमें आपके लक्षणों, इतिहास और जीवनशैली को समझा जाता है।' },
        { step: '03', title: 'व्यक्तिगत उपचार योजना', desc: 'आपकी प्रकृति के अनुसार चयनित सटीक होम्योपैथिक दवाएं आपके घर भेजी जाती हैं।' },
        { step: '04', title: 'डिजिटल फॉलो-अप सहयोग', desc: 'सुधार की प्रगति को आंकने और आवश्यकतानुसार उपचार में संशोधन हेतु नियमित समीक्षा।' },
      ],
    },
    whyChooseSection: {
      badge: 'मरीज हमें क्यों चुनते हैं',
      heading: 'व्यक्तिगत स्वास्थ्य देखभाल का चयन क्यों करें',
      subheading: 'सहानुभूति, वैज्ञानिक सिद्धांतों और जिम्मेदार चिकित्सीय मार्गदर्शन पर आधारित नैतिक स्वास्थ्य सेवा।',
      cards: [
        { title: 'व्यक्तिगत ध्यान', desc: 'प्रत्येक रोगी को बिना किसी जल्दबाजी के पूरा समय और गहन चिकित्सीय ध्यान दिया जाता है।' },
        { title: 'अनुकूलित परामर्श', desc: 'कोई सामान्यीकृत नुस्खा नहीं; दवाएं आपकी विशिष्ट शारीरिक और मानसिक प्रकृति के अनुसार तय होती हैं।' },
        { title: 'मरीज-हितैषी संवाद', desc: 'खुली और पारदर्शी बातचीत जिसमें आपकी शंकाओं का समाधान प्राथमिकता से किया जाता है।' },
        { title: '100% ऑनलाइन टेलीहेल्थ', desc: 'घर बैठे सुविधाजनक वीडियो परामर्श, घर तक सुरक्षित दवा वितरण और डिजिटल रिकॉर्ड सहायता।' },
        { title: 'सतत फॉलो-अप सहयोग', desc: 'अपॉइंटमेंट के बाद भी किसी भी प्रश्न या मार्गदर्शन के लिए निरंतर सहायता।' },
        { title: 'सरल व्हाट्सएप बुकिंग', desc: 'लंबी कतारों या जटिल प्रक्रियाओं के बिना सीधे व्हाट्सएप पर सुविधाजनक समय निर्धारण।' },
      ],
    },
    reviewsSection: {
      badge: 'रोगियों के अनुभव',
      heading: 'देखभाल, संवेदना और स्वास्थ्य लाभ की कहानियां',
      subheading: 'उन मरीजों के विचार जिन्होंने डॉ. अनामिका के व्यक्तिगत परामर्श और काउंसलिंग का अनुभव प्राप्त किया है।',
      shareBtn: 'अपना अनुभव साझा करें',
      modalTitle: 'ओम होम्योपैथी के साथ अपना अनुभव साझा करें',
      modalSubtitle: 'आपकी प्रतिक्रिया अन्य लोगों को सही स्वास्थ्य मार्गदर्शन प्राप्त करने में प्रेरित करती है।',
      nameLabel: 'आपका नाम या संक्षिप्त नाम',
      treatmentLabel: 'किस समस्या हेतु परामर्श लिया',
      ratingLabel: 'अनुभव रेटिंग',
      typeLabel: 'परामर्श का माध्यम',
      reviewLabel: 'आपका अनुभव और विचार',
      submitBtn: 'अनुभव सबमिट करें',
      successMsg: 'अपना अनुभव साझा करने के लिए धन्यवाद! इसे समीक्षा हेतु भेज दिया गया है।',
      disclaimer: 'नोट: रोगियों के अनुभव व्यक्तिगत होते हैं। परिणाम प्रत्येक व्यक्ति के लिए भिन्न हो सकते हैं।',
    },
    gallerySection: {
      badge: 'रोगी अनुभव एवं ऑनलाइन टेलीहेल्थ',
      heading: 'आरोग्य और समर्पण का अनुभव',
      subheading: 'हमारी समर्पित ऑनलाइन परामर्श प्रक्रिया, प्राकृतिक दवाओं और रोगी-हितैषी सेवा की एक झलक।',
      tabs: {
        all: 'सभी',
        consultation: 'परामर्श',
        treatment: 'दवाएं व देखभाल',
        care: 'टेलीहेल्थ व देखभाल',
        stories: 'मरीज सेवा',
      },
      privacyNotice: 'गोपनीयता का वचन: प्रदर्शित सभी तस्वीरें विधिवत सहमति के पश्चात ही साझा की गई हैं। किसी भी रोगी की निजी चिकित्सा जानकारी या पहचान कभी सार्वजनिक नहीं की जाती।',
    },
    faqSection: {
      badge: 'जिज्ञासा एवं समाधान',
      heading: 'अक्सर पूछे जाने वाले प्रश्न',
      subheading: 'ऑनलाइन होम्योपैथी परामर्श, दवा लेने के नियम और प्रक्रियाओं के संबंध में सभी आवश्यक जानकारियां।',
      searchPlaceholder: 'परामर्श, दवा, बुकिंग आदि से जुड़े सवाल खोजें...',
      needMoreHelp: 'क्या आपका कोई विशेष सवाल है जो यहाँ नहीं है?',
      askDoctorBtn: 'सीधे व्हाट्सएप पर पूछें',
    },
    appointmentSection: {
      badge: 'परामर्श का समय निर्धारित करें',
      heading: 'स्वस्थ और संतुलित जीवन की ओर पहला कदम उठाएं',
      subheading: 'नीचे अपनी जानकारी भरें। आप सीधे व्हाट्सएप के माध्यम से या ईमेल द्वारा अपना अनुरोध भेज सकते हैं।',
      fullName: 'पूरा नाम *',
      phoneNumber: 'व्हाट्सएप / फोन नंबर *',
      treatmentSelect: 'समस्या / परामर्श का विषय *',
      treatmentPlaceholder: 'अपनी स्वास्थ्य समस्या चुनें...',
      preferredDate: 'पसंदीदा तारीख *',
      preferredTime: 'पसंदीदा समय *',
      consultationType: 'परामर्श का प्रकार *',
      onlineOption: 'ऑनलाइन (वीडियो / ऑडियो परामर्श)',
      messageOptional: 'समस्या का संक्षिप्त विवरण (वैकल्पिक)',
      messagePlaceholder: 'बताएं कि यह समस्या कितने समय से है, वर्तमान में कौन सी दवाएं ले रहे हैं, आदि...',
      bookViaWhatsApp: 'व्हाट्सएप द्वारा बुक करें',
      sendViaEmail: 'ईमेल द्वारा अनुरोध भेजें',
      requiredNotice: '* अनिवार्य जानकारी',
      privacyAssurance: 'आपकी गोपनीयता सुरक्षित है। आपकी सभी व्यक्तिगत और चिकित्सीय जानकारियां पूर्णतः गुप्त रखी जाती हैं।',
      validationErrors: {
        name: 'कृपया अपना पूरा नाम दर्ज करें।',
        phone: 'कृपया एक वैध फोन नंबर दर्ज करें।',
        treatment: 'कृपया स्वास्थ्य समस्या का चयन करें।',
        date: 'कृपया पसंदीदा तारीख चुनें।',
        time: 'कृपया पसंदीदा समय चुनें।',
      },
      successEmailToast: 'ईमेल ड्राफ्ट तैयार हो गया है! यदि ईमेल ऐप नहीं खुला, तो आप सीधे व्हाट्सएप पर भी संपर्क कर सकते हैं।',
    },
    contactSection: {
      badge: 'सीधा संपर्क',
      heading: 'सीधा ऑनलाइन टेलीहेल्थ संपर्क',
      subheading: 'अपॉइंटमेंट, फॉलो-अप या किसी भी पूछताछ के लिए दुनिया में कहीं से भी डॉ. अनामिका चांदेगरा से सीधे संपर्क करें।',
      phoneLabel: 'व्हाट्सएप एवं कॉल सहायता',
      emailLabel: 'ईमेल द्वारा संपर्क',
      instagramLabel: 'इंस्टाग्राम कम्युनिटी',
      chatOnWhatsApp: 'व्हाट्सएप पर चैट करें',
      sendAnEmail: 'ईमेल भेजें',
      followInstagram: '@om_homeopathy को फॉलो करें',
      availabilityTitle: 'परामर्श का समय',
      availabilityDesc: 'सोमवार से शनिवार: सुबह 10:00 से शाम 7:00 बजे (ऑनलाइन पूर्व अपॉइंटमेंट द्वारा)',
    },
    floatingWhatsApp: {
      tooltipTitle: 'परामर्श की आवश्यकता है?',
      tooltipDesc: 'डॉ. अनामिका से व्हाट्सएप पर तुरंत अपॉइंटमेंट बुक करें।',
      reminderText: 'कोई सवाल है? व्हाट्सएप पर परामर्श बुक करें',
    },
    chatbot: {
      name: 'ओम केयर असिस्टेंट',
      role: 'ऑनलाइन टेलीहेल्थ गाइड एवं सहायक',
      welcome: 'नमस्ते! मैं ओम केयर असिस्टेंट हूँ। डॉ. अनामिका के ऑनलाइन होम्योपैथिक परामर्श के विषय में मैं आपकी क्या सहायता कर सकता हूँ?',
      medicalDisclaimer: 'सूचना: मैं ऑनलाइन परामर्श संबंधी सामान्य जानकारी देता हूँ। मैं रोगों का निदान या आपातकालीन चिकित्सा सलाह नहीं देता।',
      emergencyWarning: 'यदि आपको सीने में तेज दर्द, सांस लेने में गंभीर तकलीफ या कोई आपात स्थिति है, तो कृपया तुरंत नजदीकी अस्पताल या आपातकालीन सेवा से संपर्क करें।',
      askPlaceholder: 'अपना प्रश्न लिखें या नीचे दिए गए सुझावों में से चुनें...',
      send: 'पूछें',
      suggestedTitle: 'प्रमुख सवाल:',
      whatsappCta: 'व्हाट्सएप पर सीधे डॉक्टर से जुड़ें',
      fallbackResponse: 'व्यक्तिगत चिकित्सीय सलाह और केस के विश्लेषण हेतु कृपया डॉ. अनामिका चांदेगरा के साथ परामर्श बुक करें।',
    },
    disclaimer: {
      title: 'चिकित्सीय एवं शैक्षणिक अस्वीकरण',
      text: 'इस वेबसाइट पर दी गई जानकारी केवल सामान्य शैक्षणिक और जागरूकता के उद्देश्य से है। यह किसी पेशेवर चिकित्सकीय निदान, उपचार अथवा आपातकालीन चिकित्सा सेवा का विकल्प नहीं है। व्यक्तिगत परिणाम भिन्न हो सकते हैं। कृपया चिकित्सीय सलाह के लिए योग्य स्वास्थ्य विशेषज्ञ से संपर्क करें।',
    },
    footer: {
      aboutText: 'ओम होम्योपैथी, डॉ. अनामिका चांदेगरा (बी.एच.एम.एस. एवं एन.सी.एच.) के कुशल मार्गदर्शन में व्यक्तिगत, रोगी-हितैषी ऑनलाइन होम्योपैथिक देखभाल और काउंसलिंग प्रदान करता है।',
      quickLinksTitle: 'मुख्य लिंक',
      treatmentsTitle: 'उपचार सेवाएं',
      contactTitle: 'सीधा ऑनलाइन संपर्क',
      brandMockupLink: 'ब्रांड पहचान एवं प्रिस्क्रिप्शन डिजाइन देखें',
      copyright: 'सर्वाधिकार सुरक्षित। ओम होम्योपैथी — हीलिंग एंड काउंसलिंग।',
      privacyPolicy: 'गोपनीयता नीति',
      termsOfUse: 'परामर्श की शर्तें',
      emergencyNotice: 'आपातकालीन सूचना: गंभीर चिकित्सा आपातकाल की स्थिति में कृपया तुरंत निकटतम अस्पताल की आपातकालीन इकाई से संपर्क करें।',
    },
  },
  gu: {
    brand: {
      name: 'ઓમ હોમિયોપેથી',
      tagline: 'હીલિંગ અને કાઉન્સેલિંગ (Healing & Counselling)',
      doctorName: 'ડૉ. અનામિકા ચાંદેગરા',
      credentials: 'બી.એચ.એમ.એસ. અને એન.સી.એચ. (B.H.M.S. & N.C.H.)',
      doctorTitle: 'હોમિયોપેથિક ફિઝિશિયન અને કાઉન્સેલર',
      healingFocus: 'વ્યક્તિગત સર્વાંગી સ્વાસ્થ્ય સંભાળ',
    },
    nav: {
      home: 'હોમ',
      about: 'ડૉક્ટર વિશે',
      treatments: 'સારવાર અને સેવાઓ',
      howItWorks: 'પરામર્શ પદ્ધતિ',
      reviews: 'દર્દીઓના અનુભવ',
      gallery: 'ગેલેરી',
      faq: 'વારંવાર પૂછાતા પ્રશ્નો',
      contact: 'સંપર્ક',
      bookAppointment: 'એપોઇન્ટમેન્ટ બુક કરો',
    },
    hero: {
      badge: 'બી.એચ.એમ.એસ. અને એન.સી.એચ. પ્રમાણિત હોમિયોપેથિક સેવા',
      headline: 'તમારા સ્વાસ્થ્ય અને સુખાકારી માટે વ્યક્તિગત હોમિયોપેથિક સારવાર',
      subheading: 'દરેક વ્યક્તિની પ્રકૃતિ અનન્ય હોય છે. અમારો અભિગમ તમારા લક્ષણો, જીવનશૈલી અને અંગત જરૂરિયાતોને સમજીને શ્રેષ્ઠ હોમિયોપેથિક પરામર્શ આપવાનો છે.',
      ctaPrimary: 'એપોઇન્ટમેન્ટ બુક કરો',
      ctaSecondary: 'સારવાર સેવાઓ જુઓ',
      trustText: 'વ્યક્તિગત પરામર્શ • વ્યાવસાયિક કાળજી • ૧૦૦% ઓનલાઇન ટેલિહેલ્થ સુવિધા',
      doctorTag: 'ડૉ. અનામિકા ચાંદેગરા (B.H.M.S. & N.C.H.)',
      consultationModes: 'સમગ્ર વિશ્વમાં ૧૦૦% ઓનલાઇન વિડીયો અને ઓડિયો કન્સલ્ટેશન',
    },
    trustStrip: {
      items: [
        { title: 'વિગતવાર કેસ-ટેકિંગ', desc: 'શારીરિક, માનસિક લક્ષણો અને પારિવારિક આરોગ્યનું ઊંડાણપૂર્વક વિશ્લેષણ' },
        { title: 'કુદરતી અને નિર્દોષ સારવાર', desc: 'કોઈપણ આડઅસર વિનાની મીઠી અને પ્રકૃતિ અનુરૂપ હોમિયોપેથિક દવાઓ' },
        { title: 'હૂંફાળું કાઉન્સેલિંગ', desc: 'માનસિક શાંતિ, તણાવમુક્તિ અને જીવનશૈલી સુધારણા માટે માર્ગદર્શન' },
        { title: 'ઓનલાઇન ટેલિહેલ્થ સુવિધા', desc: 'ગમે ત્યાંથી અનુકૂળ ઓનલાઇન વિડીયો પરામર્શ અને ઘરઆંગણે દવાઓની ડિલિવરી' },
      ],
    },
    doctorSection: {
      badge: 'તમારા તબીબનો પરિચય',
      heading: 'સંવેદનશીલ અને દર્દી-કેન્દ્રી હોમિયોપેથિક કાળજી',
      subheading: 'તમારી વાતને ધીરજથી સાંભળવા, આરોગ્યના ઇતિહાસને સમજવા અને સાજા થવાની યાત્રામાં સાથ આપવા માટે સમર્પિત.',
      doctorName: 'ડૉ. અનામિકા ચાંદેગરા',
      credentials: 'બી.એચ.એમ.એસ. અને એન.સી.એચ.',
      paragraphs: [
        'ઓમ હોમિયોપેથીમાં આપનું હાર્દિક સ્વાગત છે. મારો દ્રઢ વિશ્વાસ છે કે સાચો ઉપચાર દર્દીની વાતને સંપૂર્ણ શાંતિ અને સહાનુભૂતિથી સાંભળવાથી શરૂ થાય છે. હોમિયોપેથી માત્ર રોગના લક્ષણોને દબાવતી નથી, પરંતુ સમગ્ર વ્યક્તિના શારીરિક અને માનસિક સંતુલનને પુનઃસ્થાપિત કરે છે.',
        'બી.એચ.એમ.એસ. અને એન.સી.એચ. પદવી સાથે મારી પ્રેક્ટિસ દર્દી-કેન્દ્રી કેસ-ટેકિંગ, આત્મીય કાઉન્સેલિંગ અને સતત ફોલો-અપ પર આધારિત છે. અમારી ઓનલાઇન ટેલિહેલ્થ સારવાર તમારી સંપૂર્ણ ગુપ્તતા અને સુવિધાને સુનિશ્ચિત કરે છે.',
      ],
      pillars: [
        { title: 'વ્યક્તિગત પરામર્શ', desc: 'દરેક દર્દીને એક સ્વતંત્ર વ્યક્તિ ગણીને તેમની પ્રકૃતિ મુજબ સંભાળ.' },
        { title: 'લક્ષણો અને જીવનશૈલીનું આકલન', desc: 'ઊંઘ, ખોરાકની ટેવ, વાતાવરણની અસર અને માનસિક સ્થિતિની ઊંડી સમજ.' },
        { title: 'દર્દી-કેન્દ્રી સંવાદ', desc: 'એક ખુલ્લું અને વિશ્વાસપાત્ર વાતાવરણ જ્યાં તમે મુક્તમને તમારી વાત કરી શકો.' },
        { title: 'કાઉન્સેલિંગ અને ફોલો-અપ', desc: 'સ્વાસ્થ્યમાં સતત સુધારો જળવાઈ રહે તે માટે નિયમિત માર્ગદર્શન.' },
      ],
      quote: '“આરોગ્ય એટલે માત્ર રોગની ગેરહાજરી નહીં; એ મનની શાંતિ, શરીરનું સંતુલન અને કુદરતી ઉત્સાહની અનુભૂતિ છે.”',
    },
    treatmentsSection: {
      badge: 'જે સ્વાસ્થ્ય સમસ્યાઓમાં અમે મદદરૂપ થઈએ છીએ',
      heading: 'તમારી જરૂરિયાત અનુસાર વ્યક્તિગત સારવાર',
      subheading: 'અમે અનેકવિધ શારીરિક અને માનસિક સ્વાસ્થ્ય સમસ્યાઓ માટે સૌમ્ય અને સર્વાંગી હોમિયોપેથિક પરામર્શ આપીએ છીએ. વિગતવાર માહિતી નીચે જુઓ.',
      learnMore: 'વિગતવાર અભિગમ જુઓ',
      disclaimerSnippet: 'હોમિયોપેથિક પરામર્શ પૂરક સ્વાસ્થ્ય સહાય પૂરી પાડે છે અને તે ઇમરજન્સી હોસ્પિટલ સારવારનો વિકલ્પ નથી.',
    },
    treatmentModal: {
      overview: 'સમસ્યાની સામાન્ય સમજ',
      commonSymptoms: 'સામાન્ય રીતે જોવા મળતા લક્ષણો',
      ourApproach: 'અમારો પરામર્શ અભિગમ',
      whatToExpect: 'સારવારથી શું અપેક્ષા રાખી શકાય',
      urgentNoticeTitle: 'તાત્કાલિક તબીબી સારવાર ક્યારે લેવી',
      faqTitle: 'વારંવાર પૂછાતા પ્રશ્નો',
      bookCta: 'આ સમસ્યા માટે પરામર્શ બુક કરો',
      educationalNotice: 'શિક્ષણલક્ષી સ્પષ્ટતા: આ માહિતી સામાન્ય જાગૃતિ અને શિક્ષણના હેતુથી આપવામાં આવી છે. તે વ્યાવસાયિક તબીબી નિદાન, પ્રિસ્ક્રિપ્શન કે તાત્કાલિક સારવારનો વિકલ્પ નથી.',
    },
    processSection: {
      badge: 'પરામર્શ કેવી રીતે કાર્ય કરે છે',
      heading: 'સરળ અને પારદર્શક ૪-તબક્કાની ઓનલાઇન પ્રક્રિયા',
      subheading: 'તમારા ઘરની સુવિધા અને શાંતિ વચ્ચે સમર્પિત ઓનલાઇન હોમિયોપેથિક પરામર્શ મેળવો.',
      modesTitle: 'ઓનલાઇન સારવાર સેવાના મુખ્ય સ્તંભો',
      onlineTitle: 'ઓનલાઇન વિડીયો પરામર્શ',
      onlineDesc: 'વિશ્વભરમાંથી સુરક્ષિત વિડીયો/ઓડિયો કોલ દ્વારા ઉપલબ્ધ, ઊંડાણપૂર્વક વ્યક્તિગત કેસ-ટેકિંગ.',
      deliveryTitle: 'ઘરઆંગણે દવાઓની ડિલિવરી',
      deliveryDesc: 'ઉચ્ચ ગુણવત્તાવાળી હોમિયોપેથિક દવાઓ સુરક્ષિત પેકિંગ સાથે સીધા તમારા ઘર સુધી પહોંચાડવામાં આવે છે.',
      steps: [
        { step: '01', title: 'ઓનલાઇન સ્લોટ બુક કરો', desc: 'વોટ્સએપ અથવા વેબસાઇટ ફોર્મ દ્વારા તમારી અનુકૂળતા મુજબ તારીખ અને સમય પસંદ કરો.' },
        { step: '02', title: 'ઊંડાણપૂર્વક વિડીયો પરામર્શ', desc: '૪૫ થી ૬૦ મિનિટનું વિગતવાર કેસ-ટેકિંગ જેમાં તમારા લક્ષણો અને જીવનશૈલી સમજવામાં આવે છે.' },
        { step: '03', title: 'વ્યક્તિગત સારવાર યોજના', desc: 'તમારી પ્રકૃતિ મુજબ પસંદ કરેલી ચોક્કસ હોમિયોપેથિક દવાઓ સીધા તમારા ઘરઆંગણે મોકલાય છે.' },
        { step: '04', title: 'ડિજિટલ ફોલો-અપ અને સહાય', desc: 'સુધારાનું મૂલ્યાંકન કરવા અને આગળની સારવાર નક્કી કરવા માટે નિયમિત સંપર્ક.' },
      ],
    },
    whyChooseSection: {
      badge: 'દર્દીઓ આપણને કેમ પસંદ કરે છે',
      heading: 'શા માટે વ્યક્તિગત સંભાળ પસંદ કરવી',
      subheading: 'સહાનુભૂતિ, નૈતિકતા અને હોમિયોપેથીના ઉત્કૃષ્ટ સિદ્ધાંતો પર આધારિત આરોગ્ય સેવા.',
      cards: [
        { title: 'અંગત ધ્યાન', desc: 'કોઈપણ ઉતાવળ વગર દરેક દર્દીને સંપૂર્ણ સમય અને પૂરતું ધ્યાન આપવામાં આવે છે.' },
        { title: 'પ્રકૃતિ અનુસાર સારવાર', desc: 'દરેક વ્યક્તિ અલગ હોવાથી દવાઓ પણ તમારા શારીરિક-માનસિક બંધારણ મુજબ નક્કી થાય છે.' },
        { title: 'દર્દી-કેન્દ્રી સંવાદ', desc: 'મુક્ત અને પારદર્શક વાતચીત જેથી તમે તમારા સ્વાસ્થ્ય પ્રત્યે સંપૂર્ણ જાગૃત બની શકો.' },
        { title: '૧૦૦% ઓનલાઇન ટેલિહેલ્થ', desc: 'ઘેરબેઠા અનુકૂળ વિડીયો કન્સલ્ટેશન, દવાઓની ઘરઆંગણે ડિલિવરી અને ડિજિટલ સપોર્ટ.' },
        { title: 'સતત ફોલો-અપ ટેકો', desc: 'સારવાર દરમિયાન કોઈપણ પ્રશ્ન કે મૂંઝવણ માટે સતત સહાય અને માર્ગદર્શન.' },
        { title: 'સરળ વોટ્સએપ બુકિંગ', desc: 'કોઈ જટિલ પ્રક્રિયા વગર સીધા વોટ્સએપ પરથી તમારી એપોઇન્ટમેન્ટની પુષ્ટિ.' },
      ],
    },
    reviewsSection: {
      badge: 'દર્દીઓના સાચા અનુભવો',
      heading: 'હૂંફ, સાંભળવાની કળા અને સાજાપણાની વાતો',
      subheading: 'ડૉ. અનામિકા પાસેથી પરામર્શ અને માર્ગદર્શન મેળવનાર દર્દીઓના પ્રતિભાવો.',
      shareBtn: 'તમારો અનુભવ જણાવો',
      modalTitle: 'ઓમ હોમિયોપેથી સાથેનો તમારો અનુભવ શેર કરો',
      modalSubtitle: 'તમારો અભિપ્રાય અન્ય દર્દીઓને યોગ્ય માર્ગદર્શન મેળવવામાં મદદરૂપ થશે.',
      nameLabel: 'તમારું નામ અથવા ટૂંકનામ',
      treatmentLabel: 'કઈ તકલીફ માટે પરામર્શ લીધો',
      ratingLabel: 'અનુભવ રેટિંગ',
      typeLabel: 'પરામર્શનો પ્રકાર',
      reviewLabel: 'તમારો પ્રતિભાવ અને અનુભવ',
      submitBtn: 'અનુભવ સબમિટ કરો',
      successMsg: 'તમારો અનુભવ જણાવવા બદલ આભાર! તે સફળતાપૂર્વક નોંધાઈ ગયો છે.',
      disclaimer: 'નોંધ: દર્દીઓના અનુભવો વ્યક્તિગત છે અને પરિણામ દરેક વ્યક્તિ માટે અલગ હોઈ શકે છે.',
    },
    gallerySection: {
      badge: 'દર્દી અનુભવ અને ઓનલાઇન સારસંભાળ',
      heading: 'આરોગ્ય અને સમર્પણની ઝાંખી',
      subheading: 'અમારા વિડીયો પરામર્શ, કુદરતી દવાઓ અને દર્દી-સેવાની ઝાંખી.',
      tabs: {
        all: 'બધું',
        consultation: 'પરામર્શ',
        treatment: 'દવાઓ અને સંભાળ',
        care: 'ટેલિહેલ્થ અને સંભાળ',
        stories: 'દર્દી કાળજી',
      },
      privacyNotice: 'ગોપનીયતાની ખાતરી: દર્શાવેલ તમામ તસવીરો દર્દીની સ્પષ્ટ સંમતિ સાથે જ રજૂ કરવામાં આવી છે. કોઈપણ દર્દીની ખાનગી માહિતી કે ઓળખ જાહેર કરવામાં આવતી નથી.',
    },
    faqSection: {
      badge: 'પ્રશ્નોત્તરી',
      heading: 'વારંવાર પૂછાતા પ્રશ્નો',
      subheading: 'ઓનલાઇન હોમિયોપેથિક પરામર્શ, દવાની પદ્ધતિ અને એપોઇન્ટમેન્ટ વિશે સામાન્ય પ્રશ્નોના જવાબો.',
      searchPlaceholder: 'પરામર્શ, દવા, બુકિંગ વગેરે વિશે પ્રશ્ન શોધો...',
      needMoreHelp: 'શું તમારો કોઈ ખાસ પ્રશ્ન છે જે અહીં નથી મળ્યો?',
      askDoctorBtn: 'સીધા વોટ્સએપ પર પૂછો',
    },
    appointmentSection: {
      badge: 'એપોઇન્ટમેન્ટ બુક કરો',
      heading: 'તંદુરસ્ત જીવન તરફનું પ્રથમ ડગલું ભરો',
      subheading: 'તમારી વિગતો નીચે આપો. તમે સીધા વોટ્સએપ દ્વારા બુક કરી શકો છો અથવા ઈમેલ મોકલી શકો છો.',
      fullName: 'પૂરું નામ *',
      phoneNumber: 'વોટ્સએપ / ફોન નંબર *',
      treatmentSelect: 'તકલીફ / મુખ્ય વિષય *',
      treatmentPlaceholder: 'તમારી સ્વાસ્થ્ય સમસ્યા પસંદ કરો...',
      preferredDate: 'અનુકૂળ તારીખ *',
      preferredTime: 'અનુકૂળ સમય *',
      consultationType: 'પરામર્શનું માધ્યમ *',
      onlineOption: 'ઓનલાઇન (વિડીયો / ઓડિયો પરામર્શ)',
      messageOptional: 'તકલીફ વિશે ટૂંકી નોંધ (મરજિયાત)',
      messagePlaceholder: 'આ તકલીફ કેટલા સમયથી છે, હાલ કોઈ દવા ચાલુ છે કે કેમ તે જણાવી શકો છો...',
      bookViaWhatsApp: 'વોટ્સએપ દ્વારા બુક કરો',
      sendViaEmail: 'ઈમેલ દ્વારા વિનંતી મોકલો',
      requiredNotice: '* ફરજિયાત વિગતો દર્શાવે છે',
      privacyAssurance: 'તમારી અંગત માહિતી સંપૂર્ણપણે સુરક્ષિત અને ગુપ્ત રાખવામાં આવે છે.',
      validationErrors: {
        name: 'કૃપા કરીને તમારું પૂરું નામ લખો.',
        phone: 'કૃપા કરીને માન્ય ફોન નંબર લખો.',
        treatment: 'કૃપા કરીને સ્વાસ્થ્ય સમસ્યા પસંદ કરો.',
        date: 'કૃપા કરીને અનુકૂળ તારીખ પસંદ કરો.',
        time: 'કૃપા કરીને અનુકૂળ સમય પસંદ કરો.',
      },
      successEmailToast: 'ઈમેલ ડ્રાફ્ટ તૈયાર થઈ ગયો છે! જો ઈમેલ ન ખૂલે તો તમે વોટ્સએપ દ્વારા પણ સંપર્ક કરી શકો છો.',
    },
    contactSection: {
      badge: 'સીધો સંપર્ક',
      heading: 'સીધો ઓનલાઇન ટેલિહેલ્થ સંપર્ક',
      subheading: 'એપોઇન્ટમેન્ટ, ફોલો-અપ કે ઓનલાઇન કન્સલ્ટેશન માટે વિશ્વમાં ગમે ત્યાંથી ડૉ. અનામિકા ચાંદેગરાનો સંપર્ક કરો.',
      phoneLabel: 'વોટ્સએપ અને ફોન સપોર્ટ',
      emailLabel: 'ઈમેલ દ્વારા સંપર્ક',
      instagramLabel: 'ઇન્સ્ટાગ્રામ પેજ',
      chatOnWhatsApp: 'વોટ્સએપ પર મેસેજ કરો',
      sendAnEmail: 'ઈમેલ મોકલો',
      followInstagram: '@om_homeopathy ફોલો કરો',
      availabilityTitle: 'પરામર્શ સમય',
      availabilityDesc: 'સોમવાર થી શનિવાર: સવારે ૧૦:૦૦ થી સાંજે ૭:૦૦ (ઓનલાઇન પૂર્વ એપોઇન્ટમેન્ટ દ્વારા)',
    },
    floatingWhatsApp: {
      tooltipTitle: 'પરામર્શની જરૂર છે?',
      tooltipDesc: 'ડૉ. અનામિકા સાથે વોટ્સએપ પર સીધી એપોઇન્ટમેન્ટ બુક કરો.',
      reminderText: 'પ્રશ્ન છે? વોટ્સએપ પર પરામર્શ બુક કરો',
    },
    chatbot: {
      name: 'ઓમ કેર આસિસ્ટન્ટ',
      role: 'ઓનલાઇન ટેલિહેલ્થ ગાઇડ અને સહાયક',
      welcome: 'નમસ્તે! હું ઓમ કેર આસિસ્ટન્ટ છું. ડૉ. અનામિકાના ઓનલાઇન હોમિયોપેથિક કન્સલ્ટેશન વિશે હું આપને શું માહિતી આપી શકું?',
      medicalDisclaimer: 'નોંધ: હું ઓનલાઇન પરામર્શ અને સામાન્ય પ્રશ્નોના જવાબો આપું છું. હું કોઈ રોગનું નિદાન કે ઇમરજન્સી તબીબી સલાહ આપતો નથી.',
      emergencyWarning: 'જો તમને છાતીમાં દુખાવો, શ્વાસમાં ગંભીર તકલીફ કે કોઈ કટોકટીની સ્થિતિ હોય તો તાત્કાલિક નજીકની ઇમરજન્સી હોસ્પિટલનો સંપર્ક કરો.',
      askPlaceholder: 'તમારો પ્રશ્ન લખો અથવા નીચેના વિકલ્પોમાંથી પસંદ કરો...',
      send: 'પૂછો',
      suggestedTitle: 'વારંવાર પૂછાતા પ્રશ્નો:',
      whatsappCta: 'વોટ્સએપ પર સીધો સંપર્ક કરો',
      fallbackResponse: 'વ્યક્તિગત તબીબી સલાહ અને તમારા કેસના ઊંડાણપૂર્વક અભ્યાસ માટે કૃપા કરીને ડૉ. અનામિકા ચાંદેગરા સાથે પરામર્શ બુક કરો.',
    },
    disclaimer: {
      title: 'તબીબી અને શિક્ષણલક્ષી સ્પષ્ટતા',
      text: 'આ વેબસાઇટ પર આપેલી માહિતી માત્ર સામાન્ય શિક્ષણ અને જાગૃતિના હેતુથી છે. તે વ્યાવસાયિક તબીબી નિદાન, સારવાર કે ઇમરજન્સી કેરનો વિકલ્પ નથી. દરેક વ્યક્તિમાં પરિણામ અલગ હોઈ શકે છે. તબીબી સલાહ માટે હંમેશા લાયકાત ધરાવતા તબીબનો સંપર્ક કરવો.',
    },
    footer: {
      aboutText: 'ઓમ હોમિયોપેથી, ડૉ. અનામિકા ચાંદેગરા (બી.એચ.એમ.એસ. અને એન.સી.એચ.) ના માર્ગદર્શન હેઠળ વ્યક્તિગત અને સહાનુભૂતિપૂર્ણ ઓનલાઇન હોમિયોપેથિક સારવાર અને કાઉન્સેલિંગ પૂરું પાડે છે.',
      quickLinksTitle: 'ઝડપી લિંક્સ',
      treatmentsTitle: 'મુખ્ય સારવાર સેવાઓ',
      contactTitle: 'સીધો ઓનલાઇન સંપર્ક',
      brandMockupLink: 'બ્રાન્ડ લોગો અને પ્રિસ્ક્રિપ્શન ડિઝાઇન જુઓ',
      copyright: 'સર્વ હક્ક સુરક્ષિત. ઓમ હોમિયોપેથી — હીલિંગ અને કાઉન્સેલિંગ.',
      privacyPolicy: 'પ્રાઈવસી પોલિસી',
      termsOfUse: 'કન્સલ્ટેશન શરતો',
      emergencyNotice: 'ઇમરજન્સી નોટિસ: અતિ ગંભીર કટોકટીમાં કૃપા કરીને નજીકની હોસ્પિટલના ઇમરજન્સી વિભાગનો તાત્કાલિક સંપર્ક કરવો.',
    },
  },
};
