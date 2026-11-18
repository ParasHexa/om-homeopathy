import { TreatmentItem } from '../types';

export const TREATMENTS: TreatmentItem[] = [
  {
    id: 'fever-cold',
    iconName: 'ThermometerSnowflake',
    title: {
      en: 'Fever, Cold & Frequent Illness',
      hi: 'बुखार, सर्दी और बार-बार बीमार पड़ना',
      gu: 'તાવ, શરદી અને વારંવાર બીમારી',
    },
    shortDescription: {
      en: 'Support for recurring colds, seasonal viral infections, weather sensitivity, and low vitality.',
      hi: 'बार-बार होने वाली सर्दी, मौसमी संक्रमण और रोग प्रतिरोधक क्षमता में सहयोग हेतु व्यक्तिगत परामर्श।',
      gu: 'વારંવાર થતી શરદી, ઋતુગત ચેપ અને રોગપ્રતિકારક શક્તિ સુધારણા માટે વ્યક્તિગત હોમિયોપેથિક પરામર્શ.',
    },
    overview: {
      en: 'Frequent susceptibility to seasonal changes, weather fluctuations, and common infections often indicates the body’s adaptive defense mechanisms need gentle holistic reinforcement.',
      hi: 'मौसम के बदलाव और बार-बार होने वाले संक्रमणों के प्रति संवेदनशीलता इस बात का संकेत है कि शरीर की स्वाभाविक प्रतिरोधक शक्ति को सुदृढ़ करने की आवश्यकता है।',
      gu: 'હવામાનના ફેરફારો અને વારંવાર થતા ચેપ પ્રત્યેની સંવેદનશીલતા દર્શાવે છે કે શરીરની કુદરતી રોગપ્રતિકારક શક્તિને સમર્થનની જરૂર છે.',
    },
    symptoms: {
      en: ['Recurrent runny or blocked nose', 'Frequent sore throat & mild fever', 'Sneezing with temperature changes', 'Fatigue following minor illness'],
      hi: ['बार-बार नाक बहना या बंद होना', 'गले में खराश और हल्का बुखार', 'तापमान बदलने पर छींकें आना', 'मामूली बीमारी के बाद भी थकान'],
      gu: ['વારંવાર નાક વહેવું કે બંધ થવું', 'ગળામાં ખારાશ અને હળવો તાવ', 'વાતાવરણ બદલાતા છીંક આવવી', 'નાની બીમારી પછી પણ થાક લાગવો'],
    },
    consultationApproach: {
      en: 'We conduct a detailed case-taking assessing individual triggers, thermal response (chilliness vs. heat), family tendencies, and emotional disposition to recommend targeted homeopathic support.',
      hi: 'हम तापमान प्रतिक्रिया, पारिवारिक इतिहास और व्यक्तिगत लक्षणों का विस्तृत अध्ययन करके सुसंगत परामर्श प्रदान करते हैं।',
      gu: 'અમે દર્દીના અંગત લક્ષણો, તાપમાન સહનશીલતા અને શારીરિક પ્રકૃતિનું ઊંડાણપૂર્વક વિશ્લેષણ કરી યોગ્ય માર્ગદર્શન આપીએ છીએ.',
    },
    expectations: {
      en: 'Gradual reduction in the frequency and intensity of recurring episodes, accompanied by improved day-to-day stamina.',
      hi: 'बीमारी के बार-बार होने की आवृत्ति और तीव्रता में क्रमिक सुधार और सामान्य स्वास्थ्य में वृद्धि।',
      gu: 'વારંવાર બીમાર પડવાની સંખ્યા અને તીવ્રતામાં ધીમે ધીમે ઘટાડો અને રોજિંદા ઉત્સાહમાં વધારો.',
    },
    whenToSeekUrgentCare: {
      en: 'Persistently high fever over 103°F (39.4°C), breathlessness, stiff neck, or severe lethargy requires immediate hospital evaluation.',
      hi: 'लगातार 103°F से अधिक बुखार, सांस लेने में कठिनाई या गर्दन में अकड़न होने पर तुरंत आपातकालीन चिकित्सा सहायता लें।',
      gu: 'સતત ૧૦૩°F થી વધુ તાવ, શ્વાસ લેવામાં તકલીફ કે અતિશય અશક્તિ જણાય તો તાત્કાલિક ઇમરજન્સી હોસ્પિટલનો સંપર્ક કરવો.',
    },
    faqs: [
      {
        q: {
          en: 'Can homeopathic consultation be taken alongside prescribed allopathic medicines?',
          hi: 'क्या एलोपैथिक दवाओं के साथ होम्योपैथिक परामर्श लिया जा सकता है?',
          gu: 'શું ચાલુ એલોપેથિક દવાઓ સાથે હોમિયોપેથિક પરામર્શ લઈ શકાય?',
        },
        a: {
          en: 'Yes, in most cases homeopathic consultation works harmoniously. Do not stop any prescribed emergency or vital medications without your primary doctor’s advice.',
          hi: 'हाँ, अधिकांश मामलों में यह सुरक्षित है। अपने प्राथमिक चिकित्सक की सलाह के बिना किसी भी नियमित दवा को बंद न करें।',
          gu: 'હા, મોટાભાગના કિસ્સામાં આ શક્ય છે. તમારા નિયમિત તબીબની સલાહ વગર કોઈ મહત્વપૂર્ણ દવા અચાનક બંધ કરવી નહીં.',
        },
      },
    ],
  },
  {
    id: 'respiratory',
    iconName: 'Wind',
    title: {
      en: 'Respiratory Problems',
      hi: 'श्वसन संबंधी समस्याएं',
      gu: 'શ્વસન સંબંધી સમસ્યાઓ',
    },
    shortDescription: {
      en: 'Consultation for allergic rhinitis, persistent cough, bronchitis tendency, and chest sensitivity.',
      hi: 'एलर्जिक राइनाइटिस, लगातार खांसी, ब्रोंकाइटिस की प्रवृत्ति और सांस की संवेदनशीलता के लिए परामर्श।',
      gu: 'એલર્જિક શરદી-ઉધરસ, લાંબી ઉધરસ, બ્રોન્કાઇટિસની વૃત્તિ અને છાતીની સંવેદનશીલતા માટે પરામર્શ.',
    },
    overview: {
      en: 'Chronic respiratory irritations often flare up with dust, pollen, seasonal humidity, or cold breezes. Individualised care aims to modulate hyper-responsiveness of the bronchial tree.',
      hi: 'धूल, परागकण या मौसम में नमी से होने वाली श्वास संबंधी परेशानी को व्यक्तिगत विश्लेषण के माध्यम से प्रबंधित करने में सहयोग दिया जाता है।',
      gu: 'ધૂળ, ધુમાડો કે ઋતુગત ફેરફારોથી થતી શ્વાસની એલર્જીમાં વ્યક્તિગત હોમિયોપેથિક સંભાળ મદદરૂપ બની શકે છે.',
    },
    symptoms: {
      en: ['Continuous dry or productive cough', 'Chest congestion & morning throat irritation', 'Breathing discomfort triggered by dust or pollution', 'Post-nasal drip'],
      hi: ['लगातार सूखी या बलगम वाली खांसी', 'सुबह के समय गले में जलन व भारीपन', 'धूल या प्रदूषण से सांस लेने में असहजता', 'नाक के पीछे कफ गिरना'],
      gu: ['સતત સૂકી કે કફવાળી ઉધરસ', 'સવારના સમયે ગળામાં ખારાશ અને કફ', 'ધૂળ-પ્રદૂષણથી શ્વાસમાં તકલીફ', 'નાકમાંથી ગળામાં કફ પડવો'],
    },
    consultationApproach: {
      en: 'Evaluation of environmental factors, time modalities (worse mornings vs. night), posture effects, and breathing rhythms.',
      hi: 'पर्यावरणीय कारकों, खांसी के समय (सुबह या रात) और मुद्रा के प्रभाव का सूक्ष्म मूल्यांकन।',
      gu: 'વાતાવરણના પરિબળો, તકલીફ વધવાનો સમય (સવાર કે રાત) અને સ્થિતિની ઝીણવટભરી તપાસ.',
    },
    expectations: {
      en: 'Less frequent bouts of breathlessness and soothing of the sensitive airway lining over continuous support.',
      hi: 'श्वास मार्ग की संवेदनशीलता में कमी और लगातार देखभाल से आराम की अनुभूति।',
      gu: 'શ્વાસનળીની અતિસંવેદનશીલતામાં ઘટાડો અને શ્વાસ લેવામાં સરળતાનો અનુભવ.',
    },
    whenToSeekUrgentCare: {
      en: 'Acute wheezing, cyanosis (blueness around lips), or inability to speak full sentences requires emergency respiratory facilities.',
      hi: 'अचानक सांस उखड़ना, होठों का नीला पड़ना या बोलने में अत्यधिक परेशानी होने पर तुरंत आपातकालीन केंद्र जाएं।',
      gu: 'અચાનક શ્વાસ ભરાઈ જવો, હોઠ નીલા પડવા કે બોલવામાં અસમર્થતા જણાય ત્યારે તાત્કાલિક ઇમરજન્સી કેર જરૂરી છે.',
    },
    faqs: [
      {
        q: {
          en: 'How long does a respiratory consultation plan take to show progress?',
          hi: 'श्वसन स्वास्थ्य में सुधार दिखने में कितना समय लगता है?',
          gu: 'શ્વસન સંબંધી તકલીફોમાં પરિણામ જણાતા કેટલો સમય લાગે?',
        },
        a: {
          en: 'Individual responses vary depending on chronicity, age, and environmental exposures, typically tracked over 4 to 8 weeks.',
          hi: 'यह समस्या की अवधि और मरीज की स्थिति पर निर्भर करता है, सामान्यतः 4 से 8 सप्ताह में समीक्षा की जाती है।',
          gu: 'તકલીફ કેટલા સમય જૂની છે તેના આધારે સામાન્ય રીતે ૪ થી ૮ અઠવાડિયામાં તબક્કાવાર મૂલ્યાંકન થાય છે.',
        },
      },
    ],
  },
  {
    id: 'digestive',
    iconName: 'Activity',
    title: {
      en: 'Acidity, Gas & Digestive Problems',
      hi: 'एसिडिटी, गैस और पाचन संबंधी समस्याएं',
      gu: 'એસિડિટી, ગેસ અને પાચન સંબંધી સમસ્યાઓ',
    },
    shortDescription: {
      en: 'Care for acid reflux, bloating, indigestion, irregular bowel habits, and diet-stress sensitivities.',
      hi: 'खट्टी डकार, पेट फूलना, अपच, अनियमित शौच और तनाव से जुड़ी पाचन समस्याओं के लिए समग्र देखभाल।',
      gu: 'એસિડિટી, પેટ ફૂલવું, અપચો, અનિયમિત પેટ સાફ થવું અને માનસિક તણાવથી થતી પાચનની તકલીફો.',
    },
    overview: {
      en: 'The gut is intimately linked with emotional stress and lifestyle habits. Our consultation integrates diet rhythms, gut motility, and constitutional homeopathy for gut harmony.',
      hi: 'पाचन तंत्र का गहरा संबंध हमारे मानसिक तनाव और दिनचर्या से है। हमारा परामर्श पेट के स्वाभाविक संतुलन को बहाल करने में सहायक है।',
      gu: 'પાચનતંત્ર અને મનનો સીધો સંબંધ છે. અમે દર્દીની ખોરાકની આદતો, તણાવ અને પ્રકૃતિ અનુસાર પરામર્શ આપીએ છીએ.',
    },
    symptoms: {
      en: ['Heartburn & regurgitation after meals', 'Abdominal fullness & flatulence', 'Irregular stool frequency or sluggishness', 'Nausea after oily or spicy foods'],
      hi: ['भोजन के बाद छाती में जलन', 'पेट का भारीपन व गैस', 'कब्ज या अनियमित पेट साफ होना', 'मसालेदार भोजन के बाद मिचली'],
      gu: ['જમ્યા પછી છાતીમાં બળતરા કે ખાટા ઓડકાર', 'પેટમાં ગેસ અને અસ્વસ્થતા', 'કબજિયાત અથવા અનિયમિત પેટ', 'તીખો કે તળેલો ખોરાક લીધા પછી ગભરામણ'],
    },
    consultationApproach: {
      en: 'Investigating food intolerances, emotional stressors affecting appetite, eating hours, and systemic vitality.',
      hi: 'खान-पान की आदतों, भूख पर तनाव के असर और जीवनशैली का गहन विश्लेषण।',
      gu: 'ખોરાકની ટેવ, ભૂખ પર ચિંતાની અસર અને જીવનશૈલીનું ઊંડું વિશ્લેષણ.',
    },
    expectations: {
      en: 'Better gut comfort, reduced reliance on antacids, and a healthier relationship with everyday nutrition.',
      hi: 'पेट में हल्कापन, एंटासिड पर निर्भरता में कमी और बेहतर पाचन क्षमता।',
      gu: 'પેટમાં હળવાશ, એન્ટાસિડ દવાઓ પરની નિર્ભરતામાં ઘટાડો અને સારું પાચન.',
    },
    whenToSeekUrgentCare: {
      en: 'Vomiting blood, black tarry stools, sudden severe abdominal cramping, or unintentional rapid weight loss warrants urgent gastroenterology review.',
      hi: 'खून की उल्टी, काला मल, पेट में असहनीय तेज दर्द या तेजी से वजन घटने पर तुरंत अस्पताल से परामर्श लें।',
      gu: 'લોહીની ઊલટી, કાળો મળ, અસહ્ય પેટનો દુખાવો કે અચાનક વજન ઘટવાના લક્ષણમાં તાત્કાલિક નિદાન જરૂરી છે.',
    },
    faqs: [
      {
        q: {
          en: 'Are there strict dietary restrictions during homeopathic care for acidity?',
          hi: 'क्या एसिडिटी के होम्योपैथिक परामर्श में सख्त परहेज जरूरी है?',
          gu: 'શું એસિડિટીના હોમિયોપેથિક પરામર્શ દરમિયાન કડક પરહેજી પાળવી પડે?',
        },
        a: {
          en: 'We advocate sensible lifestyle modifications rather than extreme starvation. Clear, personalised guidelines are provided.',
          hi: 'हम अत्यधिक पाबंदियों के बजाय संतुलित खानपान और जीवनशैली के समायोजन पर जोर देते हैं।',
          gu: 'અમે અતિશય કઠોર નિયમોને બદલે સંતુલિત અને આરોગ્યપ્રદ આહારશૈલીની ભલામણ કરીએ છીએ.',
        },
      },
    ],
  },
  {
    id: 'skin',
    iconName: 'Sparkles',
    title: {
      en: 'Skin-Related Problems',
      hi: 'त्वचा संबंधी समस्याएं',
      gu: 'ચામડીના રોગો અને સમસ્યાઓ',
    },
    shortDescription: {
      en: 'Consultation for acne, eczema tendencies, urticaria (hives), dry patches, and skin allergies.',
      hi: 'मुंहासे, एक्जिमा की प्रवृत्ति, पित्ती (शीतपित्त), रूखापन और त्वचा की एलर्जी के लिए संवेदनशील देखभाल।',
      gu: 'ખીલ, ખરજવું (એક્ઝિમા), શીળસ (પિત્ત), ચામડીનું સુકાપણું અને ત્વચાની એલર્જી માટે સંભાળ.',
    },
    overview: {
      en: 'Homeopathy views skin manifestations as an external reflection of internal physiological and emotional harmony, avoiding harsh suppressive topicals whenever suitable.',
      hi: 'होम्योपैथी त्वचा के विकारों को आंतरिक संतुलन के आईने के रूप में देखती है और केवल बाहरी दबाने के बजाय आंतरिक उपचार पर ध्यान देती है।',
      gu: 'હોમિયોપેથી ચામડીની તકલીફોને માત્ર બહારનો રોગ ન ગણતા આંતરિક સ્વાસ્થ્યનું પ્રતિબિંબ માને છે અને મૂળમાંથી સંભાળ લે છે.',
    },
    symptoms: {
      en: ['Itching worsening at night or with heat', 'Red flares, dry flaking or scaling', 'Stubborn facial breakouts in teenagers & adults', 'Transient wheals and itchy welts'],
      hi: ['रात में या गर्मी से बढ़ने वाली खुजली', 'लाल चकत्ते व त्वचा की पपड़ी उतरना', 'चेहरे पर लगातार होने वाले दाने/मुंहासे', 'त्वचा पर उभरने वाले लाल उभरे चकत्ते'],
      gu: ['રાત્રે કે ગરમીથી વધતી ખંજવાળ', 'લાલ ચકામા અને ચામડીનું ફોલાવવું', 'ચહેરા પર થતા ખીલ કે ફોલ્લીઓ', 'ત્વચા પર ઊપસી આવતા ઢીમણાં'],
    },
    consultationApproach: {
      en: 'Mapping thermal preferences, sweat patterns, hygiene practices, mental stressors, and seasonal triggers.',
      hi: 'पसीने की प्रकृति, मानसिक तनाव, मौसम के बदलाव और व्यक्तिगत संवेदनशीलता का पूरा विवरण।',
      gu: 'પરસેવો થવાની પ્રકૃતિ, માનસિક તણાવ, ઋતુ ફેરફાર અને ચામડીના પ્રકારની ઊંડી સમજ.',
    },
    expectations: {
      en: 'Gradual calming of itching and redness, leading toward naturally resilient and hydrated skin texture.',
      hi: 'खुजली और लालिमा में कमी तथा त्वचा की प्राकृतिक चमक और स्वास्थ्य की बहाली।',
      gu: 'ખંજવાળ અને લાલાશમાં રાહત સાથે ચામડીનું કુદરતી સ્વાસ્થ્ય પુનઃ પ્રાપ્ત થવું.',
    },
    whenToSeekUrgentCare: {
      en: 'Sudden widespread blistering, swelling of lips/eyelids, high fever with rash, or signs of bacterial cellulitis.',
      hi: 'अचानक पूरे शरीर पर फफोले पड़ना, चेहरे या होंठों में सूजन या तेज बुखार के साथ दाने निकलना आपात स्थिति है।',
      gu: 'અચાનક આખા શરીરે છાલા પડવા, હોઠ-આંખમાં સોજો આવવો કે તાવ સાથે ફોલ્લા થવા પર તુરંત તબીબી સારવાર લેવી.',
    },
    faqs: [
      {
        q: {
          en: 'Does homeopathy cause an initial aggravation of skin symptoms?',
          hi: 'क्या त्वचा के इलाज में शुरू में बीमारी बढ़ जाती है?',
          gu: 'શું ચામડીની સારવારમાં શરૂઆતમાં તકલીફ વધી જાય છે?',
        },
        a: {
          en: 'Not necessarily. Gentle, properly individualised remedies are chosen carefully to support calm healing without harsh flare-ups.',
          hi: 'ऐसा आवश्यक नहीं है। सूक्ष्म और सटीक खुराक के चयन से आमतौर पर सहज सुधार होता है।',
          gu: 'એવું હંમેશા બનતું નથી. દર્દીની પ્રકૃતિ મુજબ યોગ્ય માત્રા પસંદ કરવાથી સૌમ્ય રીતે રાહત મળે છે.',
        },
      },
    ],
  },
  {
    id: 'hair-fall',
    iconName: 'Feather',
    title: {
      en: 'Hair Fall & Scalp Problems',
      hi: 'बालों का झड़ना और स्कैल्प की समस्याएं',
      gu: 'વાળ ખરવા અને માથાની ચામડીની સમસ્યાઓ',
    },
    shortDescription: {
      en: 'Support for diffuse hair thinning, stubborn dandruff, scalp itchiness, and post-stress shedding.',
      hi: 'बालों का पतला होना, जिद्दी रूसी (डैंड्रफ), सिर में खुजली और तनाव के बाद बाल झड़ने की समस्या का समाधान।',
      gu: 'વાળ પાતળા થવા, ખોડો (ડેન્ડ્રફ), માથામાં ખંજવાળ અને અતિશય ચિંતા પછી વાળ ખરવાની સમસ્યા.',
    },
    overview: {
      en: 'Hair health is closely linked to nutritional absorption, hormonal fluctuations, sleep cycles, and scalp micro-flora balance.',
      hi: 'बालों का स्वास्थ्य पोषण, हार्मोन संतुलन, गहरी नींद और स्कैल्प की स्वच्छता से गहराई से जुड़ा होता है।',
      gu: 'વાળનું સ્વાસ્થ્ય પૂરતા પોષણ, હોર્મોનલ સંતુલન, ઊંઘ અને માથાની ચામડીની તંદુરસ્તી સાથે સીધું સંકળાયેલું છે.',
    },
    symptoms: {
      en: ['Excessive strand shedding during wash or brushing', 'Dry or greasy flaky dandruff', 'Patchy thinning or receding temple areas', 'Sensitive or oily scalp'],
      hi: ['बाल धोते या कंघी करते समय अधिक बाल टूटना', 'सूखी या चिपचिपी रूसी', 'माथे या मांग के पास बालों का हल्का होना', 'स्कैल्प में जलन या अत्यधिक तैलीयता'],
      gu: ['વાળ ઓળતી કે ધોતી વખતે વધુ પ્રમાણમાં વાળ ઉતરવા', 'સૂકો કે ચીકણો ખોડો', 'માથાના અમુક ભાગમાંથી વાળ પાતળા પડવા', 'તેલી અથવા સંવેદનશીલ સ્કેલ્પ'],
    },
    consultationApproach: {
      en: 'Comprehensive review of dietary mineral intake, thyroid history, recent emotional shocks or illnesses, and scalp texture.',
      hi: 'आहार, थायरॉयड स्थिति, हालिया मानसिक आघात या बीमारी और स्कैल्प के स्वास्थ्य का विश्लेषण।',
      gu: 'આહારમાં પોષક તત્વો, થાઇરોઇડ ઇતિહાસ, તાજેતરનો માનસિક તણાવ અને વાળના મૂળિયાનું મૂલ્યાંકન.',
    },
    expectations: {
      en: 'Stabilisation of active hair shedding followed by healthier scalp condition and improved hair follicle vitality.',
      hi: 'बालों के अत्यधिक झड़ने में रोक और स्कैल्प की रूसी व खुजली में राहत।',
      gu: 'વાળ ખરવામાં ઘટાડો અને માથાની ચામડી સ્વચ્છ તથા તંદુરસ્ત થવી.',
    },
    whenToSeekUrgentCare: {
      en: 'Sudden total body hair loss, localized painful scalp abscesses, or systemic signs of autoimmune flare.',
      hi: 'अचानक शरीर के सारे बाल झड़ना या सिर में गंभीर फोड़े-फुंसी होने पर त्वचा विशेषज्ञ से जांच कराएं।',
      gu: 'અચાનક આખા શરીરના વાળ ઉતરી જવા કે માથામાં પાક થવો એ તાત્કાલિક તપાસ માંગી લે છે.',
    },
    faqs: [
      {
        q: {
          en: 'Can genetic male or female pattern hair loss be supported?',
          hi: 'क्या आनुवंशिक रूप से बाल झड़ने में भी मदद मिल सकती है?',
          gu: 'શું વારસાગત વાળ ખરવાની સમસ્યામાં મદદ મળી શકે?',
        },
        a: {
          en: 'While genetic predisposition exists, individualised care helps slow down active progression and nourishes existing roots.',
          hi: 'आनुवंशिक कारणों के बावजूद, सही देखरेख से बाल झड़ने की गति को धीमा और जड़ों को मजबूत किया जा सकता है।',
          gu: 'વારસાગત કારણો હોવા છતાં, સમયસર હોમિયોપેથિક સંભાળ વાળના મૂળને મજબૂત રાખવામાં સહાયક બને છે.',
        },
      },
    ],
  },
  {
    id: 'headache',
    iconName: 'Zap',
    title: {
      en: 'Headache & Migraine',
      hi: 'सिरदर्द और माइग्रेन',
      gu: 'માથાનો દુખાવો અને આધાશીશી (માઈગ્રેન)',
    },
    shortDescription: {
      en: 'Consultation for throbbing migraines, tension headaches, sun sensitivity, and screen-strain headaches.',
      hi: 'आधे सिर का दर्द (माइग्रेन), तनावजनित सिरदर्द, धूप से होने वाला दर्द और स्क्रीन की थकान से राहत।',
      gu: 'આધાશીશી (માઈગ્રેન), માનસિક ટેન્શનથી થતો દુખાવો, તડકાથી થતું માથું અને સ્ક્રીન તણાવ માટે પરામર્શ.',
    },
    overview: {
      en: 'Headaches vary vastly from person to person—some worsen with sunlight, some with hunger, others with noise or neck tension. Identifying your unique pattern is central to homeopathy.',
      hi: 'हर व्यक्ति के सिरदर्द का कारण और लक्षण अलग होते हैं। कुछ को धूप से, कुछ को भूख से या तनाव से दर्द होता है। इस विशेष पैटर्न को समझकर ही परामर्श दिया जाता है।',
      gu: 'દરેક વ્યક્તિમાં માથાના દુખાવાનું કારણ અલગ હોય છે—કોઈને તડકાથી, કોઈને ભૂખ્યા રહેવાથી તો કોઈને અવાજથી દુખાવો વધે છે. આ પેટર્ન ઓળખી સારવાર થાય છે.',
    },
    symptoms: {
      en: ['One-sided throbbing pain with nausea', 'Sensitivity to bright light, loud sound, or strong smells', 'Band-like heaviness around forehead', 'Pain radiating from neck to eyes'],
      hi: ['सिर के एक हिस्से में तेज धड़कने वाला दर्द व उल्टी की भावना', 'रोशनी, तेज आवाज या महक से परेशानी', 'माथे पर भारीपन या कसाव', 'गर्दन से शुरू होकर आंखों तक आने वाला दर्द'],
      gu: ['માથાના અડધા ભાગમાં ધબકારા સાથે દુખાવો અને ઉબકા', 'તીવ્ર પ્રકાશ કે અવાજથી અકળામણ', 'કપાળ પર પટ્ટો બાંધ્યો હોય તેવો ભાર', 'ગરદનમાંથી આંખો તરફ જતો દુખાવો'],
    },
    consultationApproach: {
      en: 'Pinpointing trigger mechanisms (sleep disruption, digestive disturbances, menstrual cycles) and sensory sensitivities.',
      hi: 'ट्रिगर्स की पहचान (नींद की कमी, अपच, मासिक चक्र) और संवेदनाओं का गहन अध्ययन।',
      gu: 'કારણોની ચોક્કસ તપાસ (અપૂરતી ઊંઘ, પાચનની ખામી, માસિક ચક્ર) અને સંવેદનશીલતાની નોંધ.',
    },
    expectations: {
      en: 'Fewer migraine attacks per month, diminished severity, and reduced need for repetitive emergency pain relief.',
      hi: 'हमलों की संख्या और तीव्रता में कमी तथा बार-बार पेनकिलर लेने की आवश्यकता में कमी।',
      gu: 'દર મહિને દુખાવાના હુમલાની સંખ્યામાં ઘટાડો અને પેઇનકિલર્સ પરની નિર્ભરતા ઓછી થવી.',
    },
    whenToSeekUrgentCare: {
      en: 'Sudden "thunderclap" headache, headache accompanied by slurred speech, vision loss, or facial numbness warrants emergency neurological care.',
      hi: 'अचानक असहनीय तीव्र सिरदर्द, बोलने में लड़खड़ाहट या चेहरे का सुन्न होना आपातकालीन स्थिति है।',
      gu: 'અચાનક અત્યંત તીવ્ર માથાનો દુખાવો, બોલવામાં તકલીફ કે ચહેરા પર બહેરાશ જણાય તો તત્કાલ ન્યુરોલોજી ઇમરજન્સીમાં જવું.',
    },
    faqs: [
      {
        q: {
          en: 'Can lifestyle changes alone manage frequent headaches?',
          hi: 'क्या केवल जीवनशैली बदलकर सिरदर्द ठीक हो सकता है?',
          gu: 'શું માત્ર જીવનશૈલી સુધારવાથી માથાનો દુખાવો મટી શકે?',
        },
        a: {
          en: 'Lifestyle is crucial, but constitutional homeopathy helps rebalance the neurological threshold triggers.',
          hi: 'जीवनशैली बहुत जरूरी है, लेकिन व्यक्तिगत होम्योपैथी शरीर की संवेदनशीलता को संतुलित करने में मदद करती है।',
          gu: 'જીવનશૈલી મહત્વની છે, સાથે હોમિયોપેથિક પરામર્શ મગજની અતિસંવેદનશીલતાને સંતુલિત કરવામાં ઊંડી મદદ કરે છે.',
        },
      },
    ],
  },
  {
    id: 'joint-pain',
    iconName: 'ShieldAlert',
    title: {
      en: 'Joint, Muscle & Body Pain',
      hi: 'जोड़ों, मांसपेशियों और शरीर का दर्द',
      gu: 'સાંધા, સ્નાયુ અને શરીરનો દુખાવો',
    },
    shortDescription: {
      en: 'Individualised care for joint stiffness, arthritis discomfort, backache, neck tension, and general soreness.',
      hi: 'जोड़ों का अकड़ना, गठिया की असहजता, पीठ व कमर का दर्द, गर्दन का खिंचाव और बदन दर्द के लिए परामर्श।',
      gu: 'સાંધા અકડાઈ જવા, વા-સંધિવાનો દુખાવો, કમર અને પીઠનો દુખાવો, ગરદનની અકડામણ માટે સંભાળ.',
    },
    overview: {
      en: 'Age-related wear, postural fatigue, weather sensitivity, and metabolic balance all influence musculoskeletal comfort. We support natural joint mobility and flexibility.',
      hi: 'उम्र के असर, गलत बैठने की मुद्रा, मौसम के प्रभाव और शारीरिक थकान से जोड़ों में दर्द हो सकता है। हम जोड़ों के लचीलेपन और आराम में सहयोग देते हैं।',
      gu: 'ઉંમરની અસર, બેસવાની ખોટી રીત અને ઠંડા-ભેજવાળા વાતાવરણથી સાંધામાં દુખાવો થાય છે. હોમિયોપેથી કુદરતી હલનચલનને સરળ બનાવવામાં મદદ કરે છે.',
    },
    symptoms: {
      en: ['Morning stiffness in knees, hips, or fingers', 'Aching pain aggravated by damp cold weather', 'Lower back soreness from long sitting', 'Muscle cramps and tendon fatigue'],
      hi: ['सुबह उठने पर घुटनों या उंगलियों में अकड़न', 'ठंड या नमी वाले मौसम में दर्द का बढ़ना', 'लंबे समय बैठने से कमर का दर्द', 'मांसपेशियों में खिंचाव और थकान'],
      gu: ['સવારે ઊઠતી વખતે ઘૂંટણ કે આંગળીઓમાં અકડામણ', 'ઠંડી કે ભેજવાળી ઋતુમાં દુખાવો વધવો', 'લાંબો સમય બેસી રહેવાથી કમરનો દુખાવો', 'સ્નાયુઓમાં ગોટલા ચડવા અને કળતર'],
    },
    consultationApproach: {
      en: 'Examining movement modalities (worse upon first movement vs. better with gentle motion), warmth responsiveness, and constitutional health.',
      hi: 'चलने-फिरने से दर्द पर असर, गर्म सिकाई से आराम और शारीरिक संरचना का मूल्यांकन।',
      gu: 'ચાલવાથી થતો ફેરફાર, ગરમ શેકથી મળતી રાહત અને દર્દીની શારીરિક ક્ષમતાની તપાસ.',
    },
    expectations: {
      en: 'Smoother joint mobility, reduced early-morning stiffness, and gradual restoration of everyday physical comfort.',
      hi: 'जोड़ों के चलने-फिरने में आसानी, सुबह की अकड़न में कमी और दैनिक कार्यों में सहूलियत।',
      gu: 'સાંધાની હલનચલનમાં સરળતા, સવારની અકડામણમાં રાહત અને રોજિંદી પ્રવૃત્તિઓમાં સુગમતા.',
    },
    whenToSeekUrgentCare: {
      en: 'Inability to bear weight, hot red swollen joint with fever, or sudden loss of bowel/bladder control with back pain requires immediate emergency orthopaedic intervention.',
      hi: 'पैर पर वजन न दे पाना, जोड़ में तेज लाल सूजन और बुखार होना या कमर दर्द के साथ पेशाब पर नियंत्रण खोना आपातकालीन संकेत हैं।',
      gu: 'પગ પર વજન ન મૂકી શકવું, સાંધા પર લાલ સોજો અને તાવ આવવો એ ઇમરજન્સી સારવાર માંગી લે છે.',
    },
    faqs: [
      {
        q: {
          en: 'Does homeopathy replace the need for physical therapy?',
          hi: 'क्या होम्योपैथी के साथ फिजियोथेरेपी की जरूरत नहीं रहती?',
          gu: 'શું હોમિયોપેથી સાથે ફિઝિયોથેરાપી બંધ કરી શકાય?',
        },
        a: {
          en: 'No, gentle exercise, mobility training, and physiotherapy are wonderfully complementary to constitutional homeopathic care.',
          hi: 'नहीं, हल्के व्यायाम और फिजियोथेरेपी होम्योपैथिक देखभाल के साथ मिलकर बहुत अच्छा परिणाम देते हैं।',
          gu: 'ના, હળવી કસરત અને ફિઝિયોથેરાપી હોમિયોપેથિક સંભાળ સાથે ખૂબ સારો ટેકો પૂરો પાડે છે.',
        },
      },
    ],
  },
  {
    id: 'womens-health',
    iconName: 'HeartHandshake',
    title: {
      en: "Women's Menstrual & Hormonal Concerns",
      hi: 'महिलाओं की मासिक धर्म और हार्मोनल समस्याएं',
      gu: 'સ્ત્રીઓના માસિક અને હોર્મોનલ પ્રશ્નો',
    },
    shortDescription: {
      en: 'Confidential care for irregular cycles, painful periods (dysmenorrhea), PCOS tendencies, and mood shifts.',
      hi: 'अनियमित मासिक धर्म, दर्दनाक माहवारी, पीसीओएस की प्रवृत्ति और हार्मोनल बदलावों के लिए गोपनीय और संवेदनशील परामर्श।',
      gu: 'અનિયમિત માસિક, માસિક દરમિયાન અસહ્ય દુખાવો, પીસીઓએસ (PCOS) ની સંભાવના અને હોર્મોનલ ઉતાર-ચઢાવ.',
    },
    overview: {
      en: 'A woman’s endocrine balance is sensitive to emotional wellbeing, life milestones, nutrition, and daily rhythm. Dr. Anamika provides compassionate, private, patient-centred counselling.',
      hi: 'महिलाओं का हार्मोनल स्वास्थ्य उनके भावनात्मक और शारीरिक संतुलन से जुड़ा होता है। डॉ. अनामिका एक सुरक्षित और गोपनीय वातावरण में परामर्श देती हैं।',
      gu: 'સ્ત્રીઓનું હોર્મોનલ સંતુલન માનસિક સ્વાસ્થ્ય અને જીવનશૈલી સાથે સંકળાયેલું છે. ડૉ. અનામિકા અત્યંત સંવેદનશીલ અને વિશ્વસનીય પરામર્શ આપે છે.',
    },
    symptoms: {
      en: ['Delayed, scanty, or heavy menstrual flow', 'Severe lower abdominal cramping or backache during periods', 'Premenstrual mood irritability, bloating & breast tenderness', 'Facial hair growth or acne linked to hormonal changes'],
      hi: ['मासिक धर्म में देरी या अत्यधिक रक्तस्राव', 'माहवारी के समय पेट और कमर में तेज ऐंठन', 'मासिक से पहले चिड़चिड़ापन और सूजन', 'हार्मोनल बदलाव से चेहरे पर अवांछित बाल या मुंहासे'],
      gu: ['માસિકમાં અનિયમિતતા કે વધુ પડતો રક્તસ્ત્રાવ', 'માસિક વખતે પેડુ અને કમરમાં અસહ્ય દુખાવો', 'માસિક પહેલાં ચિડચિડાપણું અને પેટનું ફૂલવું', 'હોર્મોનલ અસંતુલનથી ચહેરા પર વાળ કે ખીલ'],
    },
    consultationApproach: {
      en: 'In-depth listening to emotional triggers, stress levels, menstrual history, thermoregulation, and energy patterns.',
      hi: 'मानसिक तनाव, जीवनशैली, मासिक धर्म के इतिहास और शारीरिक लक्षणों की धैर्यपूर्वक समीक्षा।',
      gu: 'માનસિક તણાવ, જીવનશૈલી, માસિકના ઇતિહાસ અને શારીરિક લક્ષણોનું ધીરજપૂર્વક આકલન.',
    },
    expectations: {
      en: 'Better rhythmic cycle predictability, gentler menstrual days, and improved emotional equilibrium.',
      hi: 'मासिक चक्र में स्वाभाविकता, दर्द में कमी और मानसिक शांति में सुधार।',
      gu: 'માસિક ચક્ર નિયમિત થવું, દુખાવામાં નોંધપાત્ર રાહત અને માનસિક શાંતિ.',
    },
    whenToSeekUrgentCare: {
      en: 'Severe sudden pelvic pain, heavy bleeding soaking more than 2 pads per hour, or suspicion of ectopic pregnancy requires emergency gynaecological hospital care.',
      hi: 'पेल्विस में अचानक असहनीय दर्द या अत्यधिक रक्तस्राव होने पर तुरंत स्त्री रोग विशेषज्ञ से आपातकालीन जांच कराएं।',
      gu: 'પેડુમાં અચાનક અસહ્ય દુખાવો કે કલાકે ૨ થી વધુ પેડ પલળી જાય તેટલો રક્તસ્ત્રાવ થાય ત્યારે તાત્કાલિક હોસ્પિટલ જવું.',
    },
    faqs: [
      {
        q: {
          en: 'Is consultation private and confidential?',
          hi: 'क्या मेरा परामर्श पूरी तरह गोपनीय रहेगा?',
          gu: 'શું મારી વાતચીત અને વિગતો સંપૂર્ણપણે ગુપ્ત રહેશે?',
        },
        a: {
          en: 'Completely. All medical discussions, reports, and counselling sessions are held in strict professional confidentiality.',
          hi: 'बिल्कुल। आपकी सभी जानकारियां और परामर्श पूर्णतः निजी व सुरक्षित रखे जाते हैं।',
          gu: 'ચોક્કસપણે. તમારા તમામ રિપોર્ટ અને વાતચીત સંપૂર્ણ તબીબી ગુપ્તતા સાથે સાચવવામાં આવે છે.',
        },
      },
    ],
  },
  {
    id: 'children-health',
    iconName: 'Smile',
    title: {
      en: 'Common Health Concerns in Children',
      hi: 'बच्चों की सामान्य स्वास्थ्य समस्याएं',
      gu: 'બાળકોની સામાન્ય સ્વાસ્થ્ય સમસ્યાઓ',
    },
    shortDescription: {
      en: 'Gentle support for recurrent childhood colds, low appetite, teething difficulties, and digestive sensitivity.',
      hi: 'बच्चों की बार-बार सर्दी, कम भूख, दांत निकलते समय की परेशानी और पेट की संवेदनशीलता के लिए सौम्य देखभाल।',
      gu: 'બાળકોની વારંવાર થતી શરદી, ઓછી ભૂખ, દાંત આવતી વખતે થતી તકલીફો અને પાચનની સમસ્યા માટે મીઠી-સૌમ્ય દવા.',
    },
    overview: {
      en: 'Homeopathy is widely loved by parents for children due to its sweet taste, gentle administration, and non-invasive approach to developing immune systems.',
      hi: 'होम्योपैथी की मीठी गोलियां और सौम्य स्वभाव बच्चों के लिए अत्यंत सहज और तनावमुक्त अनुभव प्रदान करते हैं।',
      gu: 'હોમિયોપેથીની મીઠી ગોળીઓ અને કુદરતી પદ્ધતિ બાળકો માટે અત્યંત સરળ, નિર્દોષ અને અનુકૂળ રહે છે.',
    },
    symptoms: {
      en: ['Frequent school absences due to catch-all colds', 'Fussy eating & sluggish weight gain', 'Irritability, loose stools or fever during dentition', 'Restless sleep or bedwetting tendencies'],
      hi: ['बार-बार सर्दी के कारण स्कूल से छुट्टी होना', 'खाने-पीने में नखरे और कम भूख', 'दांत निकलते समय चिड़चिड़ापन और दस्त', 'नींद में बेचैनी या बिस्तर गीला करना'],
      gu: ['વારંવાર શરદી-ખાંસીથી શાળાએ ન જઈ શકવું', 'જમવામાં આનાકાની અને ભૂખ ન લાગવી', 'દાંત આવતી વખતે ઝાડા કે ચીડિયાપણું', 'ઊંઘમાં બેચેની કે પથારી ભીની કરવી'],
    },
    consultationApproach: {
      en: 'Observing the child’s milestones, thermal reactions, temperament (shy vs. outgoing), and specific childhood fears.',
      hi: 'बच्चे के स्वभाव, आदतों, तापमान और विकास के चरणों का प्यार भरा अवलोकन।',
      gu: 'બાળકના સ્વભાવ, ટેવો, ડર અને શારીરિક વિકાસનું વાત્સલ્યપૂર્ણ મૂલ્યાંકન.',
    },
    expectations: {
      en: 'Steadier vitality, healthier appetite rhythms, and fewer disruptive seasonal interruptions to school.',
      hi: 'बच्चे की ऊर्जा में सुधार, अच्छी भूख और बदलते मौसम में कम बीमार पड़ना।',
      gu: 'બાળકની રોગપ્રતિકારક શક્તિમાં વધારો, સુધરેલી ભૂખ અને સ્વસ્થ બાળપણ.',
    },
    whenToSeekUrgentCare: {
      en: 'High fever with convulsions (febrile fits), continuous vomiting with dehydration, or difficulty breathing needs immediate emergency pediatric hospital care.',
      hi: 'तेज बुखार में झटके आना, लगातार उल्टी से शरीर में पानी की कमी होना या सांस लेने में परेशानी आपातकालीन स्थिति है।',
      gu: 'ખૂબ તાવમાં ખેંચ આવવી, સતત ઊલટીથી ડિહાઇડ્રેશન થવું કે શ્વાસ ચડવો એ તાત્કાલિક બાળરોગ હોસ્પિટલ સારવાર માંગી લે છે.',
    },
    faqs: [
      {
        q: {
          en: 'Do children readily take homeopathic pills?',
          hi: 'क्या बच्चे आसानी से होम्योपैथिक दवाएं ले लेते हैं?',
          gu: 'શું બાળકો હોમિયોપેથિક દવા સરળતાથી લઈ લે છે?',
        },
        a: {
          en: 'Yes! Small lactose globules taste sweet and dissolve easily, making adherence effortless without tears.',
          hi: 'हाँ, मीठी गोलियां होने के कारण बच्चे बिना किसी रोने-धोने के इसे खुशी-खुशी ले लेते हैं।',
          gu: 'હા, મીઠી અને નાની ગોળીઓ હોવાથી બાળકો હોંશે-હોંશે દવા લઈ લે છે.',
        },
      },
    ],
  },
  {
    id: 'sleep-stress',
    iconName: 'Moon',
    title: {
      en: 'Sleep, Stress & Anxiety-Related Concerns',
      hi: 'नींद, तनाव और चिंता संबंधी चिंताएं',
      gu: 'ઊંઘ, માનસિક તણાવ અને ચિંતા',
    },
    shortDescription: {
      en: 'Holistic counselling and homeopathic balance for overactive minds, restless sleep, nervousness, and fatigue.',
      hi: 'मन की बेचैनी, अनिद्रा (नींद न आना), घबराहट, मानसिक थकान और तनाव के लिए समग्र परामर्श।',
      gu: 'વધુ પડતા વિચારો, અનિદ્રા, ગભરામણ, માનસિક થાક અને અતિશય ચિંતા માટે શાંતિમય પરામર્શ.',
    },
    overview: {
      en: 'Modern lifestyle pressures, screen strain, and emotional demands can disrupt the autonomic nervous system. We offer a calm space for healing and individualised support.',
      hi: 'भागदौड़ भरी जिंदगी, स्क्रीन का अत्यधिक उपयोग और काम का दबाव मानसिक शांति को प्रभावित करते हैं। हम एक शांत और संवेदनशील परामर्श प्रदान करते हैं।',
      gu: 'આજના દોડધામભર્યા જીવનમાં માનસિક શાંતિ ખોરવાઈ જતી હોય છે. ડૉ. અનામિકા માનસિક રાહત અને સંતુલન માટે માર્ગદર્શન આપે છે.',
    },
    symptoms: {
      en: ['Difficulty falling asleep due to racing thoughts', 'Frequent nighttime waking and unrefreshing rest', 'Palpitations or trembling before stressful tasks', 'Emotional overwhelm and brain fog'],
      hi: ['दिमाग में लगातार विचार चलने से नींद न आना', 'रात में बार-बार आंख खुलना और सुबह थकान रहना', 'तनावपूर्ण स्थिति में दिल की धड़कन तेज होना', 'मानसिक उलझन और एकाग्रता की कमी'],
      gu: ['વિચારોના વંટોળથી ઊંઘ ન આવવી', 'રાત્રે વારંવાર ઊંઘ ઊડી જવી અને સવારે થાક લાગવો', 'ચિંતાજનક પરિસ્થિતિમાં છાતીમાં ધબકારા વધવા', 'માનસિક મૂંઝવણ અને એકાગ્રતાનો અભાવ'],
    },
    consultationApproach: {
      en: 'Dedicated counselling time exploring work-life balance, past emotional stressors, thought triggers, and sleep architecture.',
      hi: 'काम और जीवन के संतुलन, पुराने मानसिक तनाव और सोच के तरीकों पर संवेदनशील चर्चा।',
      gu: 'કામ અને અંગત જીવનના સંતુલન, ભૂતકાળના તણાવ અને વિચારસરણીનું શાંતિપૂર્વક પરામર્શ.',
    },
    expectations: {
      en: 'Calmer mental state, deeper natural sleep cycles, and improved resilience under day-to-day pressure.',
      hi: 'शांत मन, प्राकृतिक रूप से गहरी नींद और रोजमर्रा की चुनौतियों का सामना करने का नया आत्मविश्वास।',
      gu: 'શાંત મન, કુદરતી અને ગાઢ ઊંઘ તેમજ જીવનની મુશ્કેલીઓ સામે લડવાની આંતરિક શક્તિ.',
    },
    whenToSeekUrgentCare: {
      en: 'Severe acute depression, suicidal ideation, hallucinations, or acute panic episodes with chest pain require emergency psychiatric and medical crisis care.',
      hi: 'गंभीर अवसाद, आत्महत्या के विचार या असहनीय पैनिक अटैक होने पर तुरंत मानसिक स्वास्थ्य हेल्पलाइन या अस्पताल से संपर्क करें।',
      gu: 'અતિશય ગંભીર ડિપ્રેશન, આપઘાતના વિચારો કે ગભરામણ સાથે છાતીનો દુખાવો જણાય તો તાત્કાલિક ઇમરજન્સી હેલ્પલાઇનનો સંપર્ક કરવો.',
    },
    faqs: [
      {
        q: {
          en: 'Are homeopathic remedies for sleep habit-forming?',
          hi: 'क्या नींद के लिए होम्योपैथिक दवाओं की लत लग जाती है?',
          gu: 'શું ઊંઘ માટેની હોમિયોપેથિક દવાઓની આદત પડી જાય છે?',
        },
        a: {
          en: 'No. Homeopathic remedies do not contain chemical sedatives and are completely non-addictive.',
          hi: 'नहीं, ये दवाएं कोई कृत्रिम नशा या आदत नहीं बनातीं और सुरक्षित हैं।',
          gu: 'ના, હોમિયોપેથિક દવાઓ કેમિકલ સ્લીપિંગ પિલ્સ નથી, તેથી તેની કોઈ આદત કે બંધાણ થતું નથી.',
        },
      },
    ],
  },
  {
    id: 'chronic-health',
    iconName: 'Clock',
    title: {
      en: 'Recurring or Long-Standing Health Concerns',
      hi: 'बार-बार होने वाली या पुरानी स्वास्थ्य समस्याएं',
      gu: 'વારંવાર થતી અથવા લાંબા ગાળાની બીમારીઓ',
    },
    shortDescription: {
      en: 'Thorough constitutional case-taking for prolonged ailments where conventional relief has felt temporary.',
      hi: 'लंबे समय से चली आ रही बीमारियों के लिए विस्तृत केस-टेकिंग और समग्र होम्योपैथिक दृष्टिकोण।',
      gu: 'વર્ષો જૂની બીમારીઓ જ્યાં કામચલાઉ રાહત મળતી હોય ત્યાં મૂળમાંથી ઊંડાણપૂર્વક હોમિયોપેથિક કેસ-ટેકિંગ.',
    },
    overview: {
      en: 'Chronic issues often reflect layered physiological imbalances built up over years. Constitutional homeopathy works at the root level through comprehensive personal history.',
      hi: 'पुरानी समस्याएं कई वर्षों के असंतुलन का परिणाम होती हैं। संवैधानिक होम्योपैथी पूरे जीवन के इतिहास को समझकर जड़ से काम करती है।',
      gu: 'લાંબા ગાળાની બીમારીઓ શરીરના ઊંડા અસંતુલનને આભારી હોય છે. સંપૂર્ણ કેસ-હિસ્ટ્રી દ્વારા મૂળ કારણ શોધી માર્ગદર્શન અપાય છે.',
    },
    symptoms: {
      en: ['Issues that return repeatedly despite short-term relief', 'Multiple vague physical complaints with sluggish recovery', 'Gradual decline in day-to-day vitality and endurance', 'Need for long-term supportive management'],
      hi: ['दवा लेने पर कुछ दिन आराम और फिर से वही समस्या', 'शरीर में कई छोटी-बड़ी परेशानियां और धीमी रिकवरी', 'दिनभर कमजोरी और थकान महसूस होना', 'लंबे समय के समग्र सहयोग की आवश्यकता'],
      gu: ['કામચલાઉ દવાથી થોડો સમય રાહત અને ફરીથી એ જ તકલીફ', 'શરીરમાં વિવિધ ફરિયાદો અને અશક્તિ', 'રોજબરોજના ઉત્સાહ અને શક્તિમાં ઘટાડો', 'લાંબા ગાળાના સાથ અને સંભાળની જરૂરિયાત'],
    },
    consultationApproach: {
      en: 'Comprehensive 60-minute in-depth constitutional intake reviewing past medical history, family genetics, emotional biography, and body constitution.',
      hi: 'पारिवारिक इतिहास, पूर्व बीमारियों और व्यक्तिगत जीवन की घटनाओं का 60 मिनट का गहन विश्लेषण।',
      gu: 'કુટુંબનો આરોગ્ય ઇતિહાસ, જૂની બીમારીઓ અને માનસિક સ્થિતિનું ૬૦ મિનિટ સુધી ઊંડાણપૂર્વક આકલન.',
    },
    expectations: {
      en: 'A structured, realistic healing journey with milestone follow-ups focused on sustained quality of life.',
      hi: 'नियमित फॉलो-अप के साथ एक व्यवस्थित और वास्तविक सुधार की यात्रा।',
      gu: 'નિયમિત ફોલો-અપ સાથે એક ચોક્કસ અને ટકાઉ સ્વાસ્થ્ય સુધારણાની સફર.',
    },
    whenToSeekUrgentCare: {
      en: 'Any sudden exacerbation, severe chest pain, sudden paralysis, or loss of consciousness requires prompt emergency medical admission.',
      hi: 'अचानक समस्या का गंभीर रूप लेना, सीने में तेज दर्द या बेहोशी आपातकालीन चिकित्सा सहायता मांगती है।',
      gu: 'કોઈપણ અચાનક ગંભીર સ્થિતિ, છાતીમાં તીવ્ર દુખાવો કે બેભાન થવાની સ્થિતિમાં તાત્કાલિક ઇમરજન્સી હોસ્પિટલમાં જવું.',
    },
    faqs: [
      {
        q: {
          en: 'Why does chronic homeopathy consultation take more time?',
          hi: 'पुरानी बीमारियों के केस-टेकिंग में अधिक समय क्यों लगता है?',
          gu: 'જૂની બીમારીઓના કેસ-ટેકિંગમાં વધુ સમય કેમ લાગે છે?',
        },
        a: {
          en: 'Because every detail of your past illnesses, personality, sleep, and emotional patterns helps determine the most precise individualised remedy.',
          hi: 'क्योंकि आपकी हर आदत, मानसिक स्थिति और पुरानी बीमारियों का विवरण सबसे सटीक दवा चुनने में मदद करता है।',
          gu: 'કારણ કે તમારી પ્રકૃતિ, ટેવો, ઊંઘ અને જૂની બીમારીઓની દરેક વિગત સૌથી યોગ્ય દવા શોધવા માટે અનિવાર્ય છે.',
        },
      },
    ],
  },
];
