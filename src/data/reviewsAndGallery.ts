import { GalleryItem, ReviewItem, FaqItem } from '../types';

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Agnish Pankhaniya',
    treatment: {
      en: 'Hair Loss & Scalp Health',
      hi: 'बालों का झड़ना एवं स्कैल्प स्वास्थ्य',
      gu: 'વાળ ખરવા અને માથાની ત્વચાની સંભાળ',
    },
    rating: 5,
    date: 'February 2026',
    consultationType: 'Online',
    comment: {
      en: 'I had been dealing with sudden patchy hair fall and thinning caused by work stress. Dr. Anamika took my complete lifestyle and dietary case history over video consultation. The constitutional remedies arrived safely by courier, and within two months my hair fall reduced significantly with noticeable new root growth.',
      hi: 'तनाव और अनियमित जीवनशैली की वजह से मेरे बाल तेजी से झड़ रहे थे और पतले हो रहे थे। डॉ. अनामिका ने वीडियो कॉल पर मेरी पूरी केस हिस्ट्री समझी। घर पर दवाइयां सुरक्षित पहुंचीं और दो महीने में बालों का गिरना काफी कम हो गया और नए बाल उगने लगे।',
      gu: 'તણાવ અને અનિયમિત જીવનશૈલીને કારણે મારા વાળ ખૂબ ઝડપથી ખરતા હતા. ડૉ. અનામિકાએ ઓનલાઇન વિડીયો કન્સલ્ટેશનમાં મારી ઊંડી કેસ હિસ્ટ્રી લીધી. દવાઓ સમયસર ઘેર પહોંચી ગઈ અને બે જ મહિનામાં વાળ ખરવામાં મોટો ઘટાડો થયો અને નવા વાળ આવવા લાગ્યા.',
    },
  },
  {
    id: 'rev-2',
    name: 'Kalpanaben',
    treatment: {
      en: 'Sciatica & Nerve Discomfort',
      hi: 'साइटिका एवं नसों का दर्द',
      gu: 'સાયટિકા (રાંઝણ) અને નસનો દુખાવો',
    },
    rating: 5,
    date: 'February 2026',
    consultationType: 'Online',
    comment: {
      en: 'Severe radiating shooting pain from my lower back down to my right leg made walking and standing painful. Dr. Anamika’s thorough online questioning identified my exact pain modalities and posture habits. Her gentle homeopathic medicines provided immense relief without needing heavy painkillers.',
      hi: 'कमर के निचले हिस्से से लेकर पैर तक जाने वाले तेज दर्द के कारण चलना और खड़े रहना मुश्किल हो गया था। डॉ. अनामिका ने ऑनलाइन परामर्श में दर्द के प्रकार और ट्रिगर्स को समझा। उनकी सौम्य दवाओं से बिना पेनकिलर के नसों के दर्द में बहुत सुकून मिला।',
      gu: 'કમરથી શરૂ થઈને છેક પગ સુધી ખેંચાતા તીવ્ર સાયટિકાના દુખાવાને કારણે ઊભા રહેવું કે ચાલવું અઘરું હતું. ડૉ. અનામિકાએ ઓનલાઇન વિગતવાર લક્ષણો સમજ્યા. તેમની નિર્દોષ હોમિયોપેથિક દવાથી કોઈપણ પેઇનકિલર વિના દર્દમાં ખૂબ રાહત મળી.',
    },
  },
  {
    id: 'rev-3',
    name: 'Sarfaraz',
    treatment: {
      en: 'Hyperhidrosis (Excessive Sweating)',
      hi: 'हाइपरहाइड्रोसिस (अत्यधिक पसीना आना)',
      gu: 'હાઇપરહાઇડ્રોસિસ (અતિશય પરસેવો વળવો)',
    },
    rating: 5,
    date: 'January 2026',
    consultationType: 'Online',
    comment: {
      en: 'Profuse clammy sweating on my palms and feet caused social embarrassment and difficulty writing or shaking hands. Dr. Anamika explained the constitutional nature of hyperhidrosis and evaluated my thermal reactions. The remedies balanced my sweat gland activity remarkably.',
      hi: 'हथेलियों और पैरों के तलवों में अत्यधिक पसीने के कारण हाथ मिलाने और रोजमर्रा के काम में बहुत परेशानी होती थी। डॉ. अनामिका ने मेरी शारीरिक तासीर का विश्लेषण किया। उनकी दवाओं से अत्यधिक पसीने की समस्या काफी हद तक संतुलित हो गई है।',
      gu: 'હાથની હથેળીઓ અને પગના તળિયામાં ખૂબ પરસેવો વળતો હોવાથી લખવામાં કે લોકો સાથે હાથ મેળવવામાં ખૂબ સંકોચ થતો. ડૉ. અનામિકાએ મારી પ્રકૃતિનું વિશ્લેષણ કરીને દવા આપી. હવે પરસેવાની તકલીફમાં ખૂબ મોટો સુધારો થયો છે.',
    },
  },
  {
    id: 'rev-4',
    name: 'Dhaval Dhandhaniya',
    treatment: {
      en: 'Hair Loss & Dandruff Flaking',
      hi: 'बालों का झड़ना एवं डैंड्रफ',
      gu: 'વાળ ખરવા અને ખોડો',
    },
    rating: 5,
    date: 'January 2026',
    consultationType: 'Online',
    comment: {
      en: 'Chronic persistent dandruff accompanied by diffuse hair thinning had bothered me for over a year. Dr. Anamika assessed my scalp health, sleep cycle, and internal stress over video. Following her prescribed course and lifestyle advice, my scalp cleared up and hair shedding stopped.',
      hi: 'जिद्दी रूसी और लगातार बाल झड़ने से मैं साल भर से परेशान था। डॉ. अनामिका ने वीडियो पर स्कैल्प की स्थिति और मेरी मानसिक दिनचर्या का मूल्यांकन किया। उनके उपचार से डैंड्रफ पूरी तरह साफ हो गया और बालों की मजबूती लौट आई।',
      gu: 'ખોડો અને વાળ ખરવાની જૂની તકલીફથી હું વર્ષથી પરેશાન હતો. ડૉ. અનામિકાએ વિડીયો કોલ દ્વારા મારા ખોરાક અને ઊંઘનું બારીકાઈથી અધ્યયન કર્યું. તેમના નિયમિત ઉપચારથી માથાનો ખોડો દૂર થયો અને વાળ ખરતા અટકી ગયા.',
    },
  },
  {
    id: 'rev-5',
    name: 'Parita Joshi',
    treatment: {
      en: 'Menstrual Irregularities & Hormonal Balance',
      hi: 'अनियमित माहवारी एवं हार्मोनल असंतुलन',
      gu: 'અનિયમિત માસિક અને હોર્મોનલ સમસ્યા',
    },
    rating: 5,
    date: 'December 2025',
    consultationType: 'Online',
    comment: {
      en: 'I struggled with unpredictable cycles, painful cramping, and severe mood swings. Finding Dr. Anamika was a blessing—she provided a comfortable, empathetic, and confidential video consultation. Her individualised remedies naturally regulated my monthly cycle without harsh hormonal pills.',
      hi: 'अनियमित चक्र, असहनीय पेट दर्द और मूड स्विंग्स से मैं बहुत परेशान थी। डॉ. अनामिका के साथ ऑनलाइन परामर्श बहुत ही आत्मीय और सुरक्षित रहा। उनकी दवाओं ने बिना किसी सिंथेटिक हार्मोन के मेरी माहवारी को स्वाभाविक रूप से नियमित कर दिया।',
      gu: 'અનિયમિત સાયકલ અને પેટના અસહ્ય દુખાવાથી હું ખૂબ ત્રસ્ત હતી. ડૉ. અનામિકા સાથેનું ઓનલાઇન કન્સલ્ટેશન ખૂબ આત્મીય અને ગોપનીય રહ્યું. કોઈપણ હોર્મોનલ ગોળીઓ વિના કુદરતી રીતે મારું માસિક ચક્ર નિયમિત થઈ ગયું.',
    },
  },
  {
    id: 'rev-6',
    name: 'Rajiben Maher',
    treatment: {
      en: 'Joint Pain & Osteoarthritic Stiffness',
      hi: 'जोड़ों का दर्द एवं अकड़न',
      gu: 'સાંધાનો દુખાવો અને જકડન',
    },
    rating: 5,
    date: 'December 2025',
    consultationType: 'Online',
    comment: {
      en: 'My knee and finger joints ached and felt stiff, especially during colder mornings. Consulting Dr. Anamika online from my home was smooth and effortless. The medicine package was delivered to my door, and I can now walk for my morning strolls without sharp pain.',
      hi: 'सर्दियों की सुबह मेरे घुटनों और उंगलियों के जोड़ों में तेज दर्द और जकड़न रहती थी। घर बैठे डॉ. अनामिका से ऑनलाइन परामर्श लेना बहुत आसान रहा। कूरियर से मिली दवाइयों के नियमित सेवन से अब मैं बिना दर्द के टहल सकती हूँ।',
      gu: 'ખાસ કરીને સવારના સમયે ઘૂંટણ અને આંગળીઓના સાંધામાં કળતર અને દુખાવો રહેતો. ઘેરબેઠા ડૉ. અનામિકા સાથે વિડીયો પરામર્શ લેવો ખૂબ સરળ રહ્યો. દવાઓ નિયમિત લેવાથી હવે હું કોઈપણ દુખાવા વગર ચાલી શકું છું.',
    },
  },
  {
    id: 'rev-7',
    name: 'Jayshree Ben',
    treatment: {
      en: 'Topical Ulcer & Mucosal Soreness',
      hi: 'पुनरावर्ती अल्सर एवं मुंह के छाले',
      gu: 'મોઢાના ચાંદા (અલ્સર) અને બળતરા',
    },
    rating: 5,
    date: 'November 2025',
    consultationType: 'Online',
    comment: {
      en: 'Recurring painful topical ulcers in my mouth made eating spicy or solid food agonizing. Dr. Anamika investigated my internal digestion, stomach heat, and stress triggers. The remedies healed the ulcers quickly and prevented frequent flare-ups.',
      hi: 'बार-बार होने वाले मुंह के दर्दनाक छालों के कारण खाना-पीना बहुत कष्टदायी हो गया था। डॉ. अनामिका ने मेरे पाचन और पेट की गर्मी का विश्लेषण किया। होम्योपैथिक दवाइयों से छाले तेजी से ठीक हुए और बार-बार होना बंद हो गए।',
      gu: 'વારંવાર મોઢામાં દુખાવાવાળા ચાંદા પડવાથી તીખું કે સામાન્ય ભોજન લેવું પણ અસહ્ય થઈ જતું. ડૉ. અનામિકાએ મારા પાચન અને પેટની ગરમીનું નિદાન કર્યું. તેમની દવાથી ચાંદા ઝડપથી રૂઝાયા અને ફરી થતાં અટક્યા.',
    },
  },
  {
    id: 'rev-8',
    name: 'Joyotsanaben Vara',
    treatment: {
      en: 'Neuralgia & Nerve Sensitivity',
      hi: 'न्यूराल्जिया (नसों का तेज चुभन वाला दर्द)',
      gu: 'ન્યુરાલ્જિયા (નસનો તીવ્ર ઝણઝણાટીભર્યો દુખાવો)',
    },
    rating: 5,
    date: 'November 2025',
    consultationType: 'Online',
    comment: {
      en: 'Sudden electric-shock-like neuralgic pain on the side of my face and neck was unbearable. Dr. Anamika’s constitutional questioning covered the sensitivity to cold air and touch. The medicine provided gentle, lasting calming of the irritated nerves.',
      hi: 'चेहरे और गर्दन की एक तरफ बिजली के झटके जैसा नसों का दर्द असहनीय था। डॉ. अनामिका ने ठंडी हवा और छूने से होने वाले दर्द के लक्षणों को बारीकी से समझा। उनकी होम्योपैथिक दवा ने नसों की उत्तेजना को शांत कर बहुत राहत दी।',
      gu: 'ચહેરા અને ગળાના ભાગે કરંટ જેવો તીવ્ર નસનો દુખાવો ઉપડતો હતો. ડૉ. અનામિકાએ ઠંડા પવન કે સ્પર્શથી વધતા લક્ષણોને ધ્યાનમાં રાખીને દવા આપી. તેમની દવાથી નસની બળતરા અને ઝણઝણાટી શાંત થઈ ગઈ.',
    },
  },
  {
    id: 'rev-9',
    name: 'Prabhaben Prajapati',
    treatment: {
      en: 'Cervical Spondylosis & Neck Stiffness',
      hi: 'सर्वाइकल स्पोंडिलाइटिस एवं गर्दन की जकड़न',
      gu: 'સર્વાઇકલ સ્પોન્ડિલોસિસ અને ડોકની જકડન',
    },
    rating: 5,
    date: 'October 2025',
    consultationType: 'Online',
    comment: {
      en: 'Stiffness in my neck radiating to my shoulders with bouts of dizziness made everyday chores challenging. Dr. Anamika guided me through video consultation on head posture and prescribed constitutional remedies. The neck tension and vertigo have cleared up wonderfully.',
      hi: 'गर्दन में जकड़न, कंधों में भारीपन और चक्कर आने की वजह से रोजमर्रा के काम मुश्किल हो गए थे। डॉ. अनामिका ने वीडियो पर सही मुद्रा और होम्योपैथिक दवाओं का मार्गदर्शन दिया। अब गर्दन का तनाव और चक्कर आना पूरी तरह बंद है।',
      gu: 'ડોકમાં અકડામણ, ખભામાં દુખાવો અને ચક્કર આવવાને લીધે ઘરકામ કરવું મુશ્કેલ થઈ ગયું હતું. ડૉ. અનામિકાએ વિડીયો કોલ પર કાળજીપૂર્વક દવા અને સલાહ આપી. હવે ડોકની જકડન અને ચક્કરની તકલીફ સંપૂર્ણપણે દૂર થઈ ગઈ છે.',
    },
  },
  {
    id: 'rev-10',
    name: 'Mina Ben Prajapati',
    treatment: {
      en: 'Allergic Rhinitis & Morning Sneezing',
      hi: 'एलर्जिक राइनाइटिस एवं सुबह की छींकें',
      gu: 'એલર્જિક રાયનાઇટિસ અને સવારની છીંકો',
    },
    rating: 5,
    date: 'October 2025',
    consultationType: 'Online',
    comment: {
      en: 'Waking up each morning triggered 15 to 20 consecutive sneezes, itchy watery eyes, and runny nose. Dr. Anamika’s online consultation helped address my allergy from within. My morning reactivity has vanished, and my breathing feels clear.',
      hi: 'हर सुबह उठते ही 15-20 छींकें, आंखों में खुजली और पानी बहने से दिन की शुरुआत खराब होती थी। डॉ. अनामिका के ऑनलाइन परामर्श ने समस्या को अंदर से ठीक किया। अब सुबह की छींकें बंद हैं और सांस पूरी तरह खुली है।',
      gu: 'રોજ સવારે ઊઠતાં જ સતત ૧૫-૨૦ છીંકો, આંખોમાં ખંજવાળ અને પાણી પડવાની તકલીફ રહેતી. ડૉ. અનામિકાના ઓનલાઇન પરામર્શથી આ એલર્જી મૂળમાંથી શાંત થઈ ગઈ છે. હવે સવારે છીંકો આવતી નથી અને શ્વાસ એકદમ સાફ રહે છે.',
    },
  },
  {
    id: 'rev-11',
    name: 'Ramaben Kotak',
    treatment: {
      en: 'Insomnia & Sleep Disturbance',
      hi: 'अनिद्रा एवं रात को नींद न आना',
      gu: 'અનિદ્રા અને ઊંઘની તકલીફ',
    },
    rating: 5,
    date: 'September 2025',
    consultationType: 'Online',
    comment: {
      en: 'Tossing and turning until 3 AM with racing thoughts was exhausting my health. Dr. Anamika’s calm, unhurried counselling during our online video call helped ease my anxiety. The gentle sweet remedies helped me regain natural, undisturbed night sleep.',
      hi: 'रात को 3 बजे तक करवटें बदलना और दिमाग में लगातार विचारों का चलना मेरी सेहत बिगाड़ रहा था। डॉ. अनामिका की शांत काउंसलिंग और दवाओं ने मेरी चिंता को दूर किया। अब मुझे रात में गहरी और स्वाभाविक नींद आती है।',
      gu: 'રાત્રે ૩ વાગ્યા સુધી પથારીમાં પડખાં ફેરવવા છતાં ઊંઘ નહોતી આવતી અને મગજમાં વિચારો ચાલ્યા કરતાં. ડૉ. અનામિકા સાથેના ઓનલાઇન પરામર્શે મને માનસિક હળવાશ આપી. કુદરતી મીઠી ગોળીઓથી હવે રાત્રે શાંત ઊંઘ આવે છે.',
    },
  },
  {
    id: 'rev-12',
    name: 'Archana Prajapati',
    treatment: {
      en: 'Psoriasis & Dry Scaly Patches',
      hi: 'सोरायसिस एवं त्वचा की पपड़ीदार खुजली',
      gu: 'સોરાયસિસ અને ત્વચાના ભીંગડાવાળા ચકામા',
    },
    rating: 5,
    date: 'September 2025',
    consultationType: 'Online',
    comment: {
      en: 'Red, itchy patches with silvery scaling on my elbows and knees flared up every dry season. Dr. Anamika examined detailed photographs and conducted an unhurried video evaluation. Her holistic homeopathic remedies stopped the itch and cleared the patches steadily.',
      hi: 'कोहनी और घुटनों पर लाल, पपड़ीदार और खुजली वाले सोरायसिस के चकत्ते सर्दियों में बढ़ जाते थे। डॉ. अनामिका ने वीडियो पर फोटो देखकर समग्र उपचार शुरू किया। उनकी दवा से खुजली शांत हुई और त्वचा धीरे-धीरे सामान्य हो रही है।',
      gu: 'કોણી અને ઘૂંટણ પર લાલ, સૂકા ભીંગડાવાળા સોરાયસિસના ચકામા શિયાળામાં ખૂબ વધી જતાં. ડૉ. અનામિકાએ વિડીયો કોલ પર ફોટાનું ઝીણવટભર્યું મૂલ્યાંકન કરી દવા આપી. ખંજવાળ બંધ થઈ ગઈ છે અને ચકામા ખૂબ ઝડપથી સાજા થઈ રહ્યા છે.',
    },
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    src: '/care_online_consultation.svg',
    category: 'care',
    alt: {
      en: 'Dr. Anamika Chandegra conducting live online telehealth video consultation',
      hi: 'ऑनलाइन वीडियो टेलीहेल्थ परामर्श देतीं डॉ. अनामिका चांदेगरा',
      gu: 'ઓનલાઇન વિડીયો ટેલિહેલ્થ પરામર્શ આપતાં ડૉ. અનામિકા ચાંદેગરા',
    },
    caption: {
      en: 'Dr. Anamika Chandegra conducting dedicated 1-on-1 private video telehealth consultations for patients worldwide.',
      hi: 'विश्वभर के रोगियों के लिए डॉ. अनामिका चांदेगरा द्वारा व्यक्तिगत और सुरक्षित 1-ऑन-1 वीडियो टेलीहेल्थ परामर्श।',
      gu: 'વિશ્વભરના દર્દીઓ માટે ડૉ. અનામિકા ચાંદેગરા દ્વારા ખાનગી અને વિગતવાર 1-ઓન-1 ઓનલાઇન વિડીયો પરામર્શ.',
    },
  },
  {
    id: 'gal-2',
    src: '/dr_anamika_chandegra.jpeg',
    category: 'consultation',
    alt: {
      en: 'Dr. Anamika Chandegra (B.H.M.S. & N.C.H.) consulting homeopathic physician',
      hi: 'परामर्शदाता होम्योपैथिक चिकित्सक डॉ. अनामिका चांदेगरा (B.H.M.S. & N.C.H.)',
      gu: 'કન્સલ્ટિંગ હોમિયોપેથિક ફિઝિશિયન ડૉ. અનામિકા ચાંદેગરા (B.H.M.S. & N.C.H.)',
    },
    caption: {
      en: 'Dedicated patient-centred case-taking and constitutional counselling by Dr. Anamika Chandegra.',
      hi: 'डॉ. अनामिका चांदेगरा द्वारा समर्पित व्यक्तिगत केस-टेकिंग और संवैधानिक काउंसलिंग।',
      gu: 'ડૉ. અનામિકા ચાંદેગરા દ્વારા સમર્પિત દર્દી-કેન્દ્રી કેસ-ટેકિંગ અને હોમિયોપેથિક કાઉન્સેલિંગ.',
    },
  },
  {
    id: 'gal-3',
    src: '/src/assets/images/homeopathy_remedies_1789671930604.jpg',
    category: 'treatment',
    alt: {
      en: 'Authentic natural homeopathic remedies and pure globules in clean amber vials',
      hi: 'प्रामाणिक प्राकृतिक होम्योपैथिक दवाएं और शुद्ध मीठी गोलियां',
      gu: 'અધિકૃત કુદરતી હોમિયોપેથિક દવાઓ અને કાચની બોટલમાં મીઠી ગોળીઓ',
    },
    caption: {
      en: 'Carefully selected, high-quality constitutional remedies prepared hygienically and shipped directly to patients.',
      hi: 'उच्च गुणवत्ता और शुद्धता के साथ तैयार की गई व्यक्तिगत होम्योपैथिक दवाएं, सीधे मरीज तक सुरक्षित पहुंचाई जाती हैं।',
      gu: 'ઉચ્ચ શુદ્ધતા સાથે તૈયાર કરાયેલી કુદરતી દવાઓ, સલામત રીતે દર્દીના ઘર સુધી કુરિયર દ્વારા પહોંચાડાય છે.',
    },
  },
  {
    id: 'gal-4',
    src: '/stories_case_study.svg',
    category: 'stories',
    alt: {
      en: 'Dr. Anamika Chandegra studying patient repertory and case notes',
      hi: 'रोगी के लक्षणों और होम्योपैथिक रिपर्टरी का गहन अध्ययन करतीं डॉ. अनामिका',
      gu: 'દર્દીના લક્ષણો અને હોમિયોપેથિક રિપર્ટરીનો ઝીણવટભર્યો અભ્યાસ કરતાં ડૉ. અનામિકા',
    },
    caption: {
      en: 'In-depth homeopathic repertorisation and holistic case study by Dr. Anamika Chandegra for every patient.',
      hi: 'प्रत्येक रोगी के लिए डॉ. अनामिका चांदेगरा द्वारा गहन होम्योपैथिक रिपर्टरी विश्लेषण एवं समग्र केस अध्ययन।',
      gu: 'દરેક દર્દી માટે ડૉ. અનામિકા ચાંદેગરા દ્વારા ઊંડું હોમિયોપેથિક રિપર્ટરાઇઝેશન અને સમગ્ર કેસ વિશ્લેષણ.',
    },
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: {
      en: 'What is homeopathy and how does it work?',
      hi: 'होम्योपैथी क्या है और यह शरीर में कैसे कार्य करती है?',
      gu: 'હોમિયોપેથી શું છે અને તે શરીરમાં કેવી રીતે કાર્ય કરે છે?',
    },
    answer: {
      en: 'Homeopathy is a gentle, natural system of medicine based on the principle of "like cures like" (Similia Similibus Curentur). Highly diluted natural substances stimulate the body’s innate self-regulatory mechanisms, encouraging internal balance and vitality.',
      hi: 'होम्योपैथी एक सौम्य और प्राकृतिक चिकित्सा पद्धति है जो "समान से समान की चिकित्सा" के सिद्धांत पर कार्य करती है। यह शरीर की स्वाभाविक रोग प्रतिरोधक शक्ति को सक्रिय करके आंतरिक संतुलन लाती है।',
      gu: 'હોમિયોપેથી એક અત્યંત સૌમ્ય અને કુદરતી ઉપચાર પદ્ધતિ છે જે શરીરની આંતરિક રોગપ્રતિકારક શક્તિ અને સંતુલનને જાગૃત કરીને કુદરતી રીતે સાજા થવામાં મદદ કરે છે.',
    },
  },
  {
    id: 'faq-2',
    category: 'consultation',
    question: {
      en: 'How does an online individualised consultation work?',
      hi: 'ऑनलाइन व्यक्तिगत परामर्श (केस-टेकिंग) कैसे किया जाता है?',
      gu: 'ઓનલાઇન વ્યક્તિગત પરામર્શ (કેસ-ટેકિંગ) કેવી રીતે થાય છે?',
    },
    answer: {
      en: 'Our initial video consultation lasts 45 to 60 minutes. From the comfort of your home, Dr. Anamika explores your chief complaint, past medical history, family genetics, thermal preferences (how you tolerate cold/heat), appetite, sleep patterns, and emotional stressors.',
      hi: 'घर बैठे हमारी प्रारंभिक वीडियो बैठक 45 से 60 मिनट की होती है। इसमें आपके मुख्य लक्षणों, पुरानी बीमारियों, खान-पान, नींद और तनाव के कारणों का समग्र अध्ययन किया जाता है।',
      gu: 'તમારા ઘરેથી અમારો પ્રથમ વિડીયો પરામર્શ ૪૫ થી ૬૦ મિનિટનો હોય છે. ડૉ. અનામિકા તમારી મુખ્ય ફરિયાદ, જૂની બીમારીઓ, ઊંઘ, ખોરાક અને માનસિક પરિબળોનું ઊંડાણપૂર્વક અધ્યયન કરે છે.',
    },
  },
  {
    id: 'faq-3',
    category: 'consultation',
    question: {
      en: 'How are prescribed homeopathic medicines delivered to my home?',
      hi: 'परामर्श के बाद दवाएं मेरे घर तक कैसे पहुंचती हैं?',
      gu: 'કન્સલ્ટેશન પછી દવાઓ મારા ઘર સુધી કેવી રીતે પહોંચે છે?',
    },
    answer: {
      en: 'Following your online consultation, your personalised remedies are carefully prepared under strict hygienic conditions. We dispatch your medicines via reliable courier services straight to your doorstep across India and internationally, along with full dosage guidelines.',
      hi: 'ऑनलाइन परामर्श के बाद आपकी व्यक्तिगत दवाएं स्वच्छता मानकों के साथ तैयार की जाती हैं और सुरक्षित कूरियर द्वारा पूरे भारत और विदेश में आपके पते पर भेजी जाती हैं।',
      gu: 'ઓનલાઇન પરામર્શ પૂર્ણ થયા પછી તમારી ચોક્કસ દવાઓ સ્વચ્છતા સાથે તૈયાર કરીને વિશ્વસનીય કુરિયર દ્વારા ભારત અને વિદેશમાં તમારા ઘરઆંગણે મોકલવામાં આવે છે.',
    },
  },
  {
    id: 'faq-4',
    category: 'consultation',
    question: {
      en: 'What should I prepare for my online video consultation?',
      hi: 'मुझे अपने ऑनलाइन वीडियो परामर्श के लिए क्या तैयारी करनी चाहिए?',
      gu: 'ઓનલાઇન વિડીયો પરામર્શ માટે મારે કઈ તૈયારી કરવી જોઈએ?',
    },
    answer: {
      en: 'Please keep any recent blood test reports, scans, a list of current prescription medicines or supplements, and a brief chronological timeline of when your symptoms first began. Find a quiet, comfortable room with good internet connectivity.',
      hi: 'कृपया हाल ही में कराई गई रक्त जांच, एक्स-रे/सोनोग्राफी रिपोर्ट, वर्तमान में चल रही दवाओं की सूची और लक्षणों की शुरुआत का विवरण तैयार रखें। एक शांत कमरे में बैठें जहां इंटरनेट अच्छा हो।',
      gu: 'કૃપા કરીને તાજેતરના લેબોરેટરી રિપોર્ટ્સ, હાલ ચાલતી દવાઓની યાદી અને તકલીફની વિગતો સાથે રાખો. શાંત રૂમમાં બેસો જ્યાં ઇન્ટરનેટ કનેક્શન સારું હોય.',
    },
  },
  {
    id: 'faq-5',
    category: 'treatments',
    question: {
      en: 'Are homeopathic remedies safe and free from habit-forming ingredients?',
      hi: 'क्या होम्योपैथिक दवाएं सुरक्षित हैं और क्या इनकी लत लग सकती है?',
      gu: 'શું હોમિયોપેથિક દવાઓ સુરક્ષિત છે અને શું તેની આદત પડી શકે?',
    },
    answer: {
      en: 'Homeopathic remedies are prepared in micro-dilutions according to recognised pharmacopoeial standards. They are non-toxic, non-addictive, gentle for all age groups (from infants to elderly), and do not cause drowsiness.',
      hi: 'होम्योपैथिक दवाएं मान्यता प्राप्त मानकों के अनुसार सूक्ष्म मात्रा में बनाई जाती हैं। ये गैर-विषाक्त हैं, इनकी कोई लत नहीं लगती और ये बच्चों से लेकर बुजुर्गों तक सभी के लिए सुरक्षित हैं।',
      gu: 'હોમિયોપેથિક દવાઓ પ્રમાણિત નિયમો અનુસાર ખૂબ સૂક્ષ્મ માત્રામાં બનાવવામાં આવે છે. તે સંપૂર્ણ બિન-ઝેરી છે, તેની કોઈ આદત પડતી નથી અને નવજાત શિશુથી લઈ વૃદ્ધો સુધી સૌ માટે સુરક્ષિત છે.',
    },
  },
  {
    id: 'faq-6',
    category: 'booking',
    question: {
      en: 'How do I book an online appointment through WhatsApp?',
      hi: 'व्हाट्सएप के माध्यम से ऑनलाइन अपॉइंटमेंट कैसे बुक करें?',
      gu: 'વોટ્સએપ દ્વારા ઓનલાઇન એપોઇન્ટમેન્ટ કેવી રીતે બુક કરવી?',
    },
    answer: {
      en: 'Simply click the "Book via WhatsApp" button on this website or message +91 8200928769. Our form automatically formats your details, preferred date, and time slot so Dr. Anamika can confirm your online video session directly.',
      hi: 'वेबसाइट पर दिए गए "Book via WhatsApp" बटन पर क्लिक करें या +91 8200928769 पर संदेश भेजें। फॉर्म आपकी जानकारी स्वतः तैयार कर देता है जिससे तुरंत ऑनलाइन स्लॉट कन्फर्म हो जाता है।',
      gu: 'વેબસાઇટ પરના "Book via WhatsApp" બટન પર ક્લિક કરો અથવા +91 8200928769 પર મેસેજ કરો. તમારું નામ અને સમય આપોઆપ મેસેજમાં તૈયાર થઈ જશે જેથી ડૉ. અનામિકા ઝડપથી ઓનલાઇન સ્લોટ પુષ્ટિ કરી શકે.',
    },
  },
  {
    id: 'faq-7',
    category: 'consultation',
    question: {
      en: 'Do you provide follow-up consultations and progress reviews online?',
      hi: 'क्या आप ऑनलाइन फॉलो-अप परामर्श और प्रगति समीक्षा प्रदान करते हैं?',
      gu: 'શું આપ ઓનલાઇન ફોલો-અપ પરામર્શ અને આરોગ્ય સમીક્ષા આપો છો?',
    },
    answer: {
      en: 'Yes. Follow-ups are conducted seamlessly via video call or WhatsApp every 3 to 6 weeks depending on your condition. We assess symptom changes, energy levels, and adjust remedies accordingly.',
      hi: 'हाँ। समस्या की प्रकृति के आधार पर आमतौर पर 3 से 6 सप्ताह में ऑनलाइन वीडियो या व्हाट्सएप पर फॉलो-अप तय किया जाता है ताकि सुधार की निरंतर समीक्षा की जा सके।',
      gu: 'હા. બીમારીના પ્રકાર અનુસાર ૩ થી ૬ અઠવાડિયામાં વિડીયો કોલ કે વોટ્સએપ દ્વારા ફોલો-અપ રાખવામાં આવે છે જેથી લક્ષણોમાં થતા સુધારાનું મૂલ્યાંકન કરી આગળની કાળજી લઈ શકાય.',
    },
  },
  {
    id: 'faq-8',
    category: 'general',
    question: {
      en: 'Can I take homeopathy alongside allopathic medicines prescribed by my specialist?',
      hi: 'क्या मैं अपने विशेषज्ञ द्वारा दी गई एलोपैथिक दवाओं के साथ होम्योपैथी ले सकता हूँ?',
      gu: 'શું હું મારા સ્પેશિયાલિસ્ટ તબીબની દવાઓ સાથે હોમિયોપેથી લઈ શકું?',
    },
    answer: {
      en: 'Yes. Homeopathy does not interfere biochemically with conventional pharmaceutical drugs. We advise a 20-30 minute interval between taking medicines. Never discontinue critical or emergency allopathic drugs without consulting your primary doctor.',
      hi: 'हाँ। होम्योपैथी अन्य दवाओं के साथ सुरक्षित रूप से ली जा सकती है। दोनों दवाओं के बीच 20-30 मिनट का अंतर रखने की सलाह दी जाती है। अपने डॉक्टर की अनुमति के बिना आवश्यक दवाएं बंद न करें।',
      gu: 'હા. હોમિયોપેથી અન્ય દવાઓ સાથે સુરક્ષિત રીતે લઈ શકાય છે. બંને દવાઓ વચ્ચે ૨૦-૩૦ મિનિટનો સમય રાખવો સારો રહે છે. તમારા મુખ્ય તબીબની સલાહ વિના કોઈ મહત્વની દવા બંધ ન કરવી.',
    },
  },
];

export const CHATBOT_QA = [
  {
    keywords: ['what is homeopathy', 'homeopathy kya hai', 'homeopathy su che', 'homeopathy'],
    answer: {
      en: 'Homeopathy is a gentle, natural medical science established over two centuries ago. It uses micro-doses of natural substances tailored to stimulate your body’s own self-healing resilience.',
      hi: 'होम्योपैथी एक सौम्य और प्राकृतिक चिकित्सा पद्धति है जो शरीर की अपनी स्वाभाविक रोग प्रतिरोधक क्षमता को जागृत करके आरोग्य प्रदान करती है।',
      gu: 'હોમિયોપેથી એક કુદરતી અને નિર્દોષ તબીબી વિજ્ઞાન છે જે શરીરની સ્વયં સાજા થવાની ક્ષમતાને જાગૃત કરે છે.',
    },
  },
  {
    keywords: ['consultation work', 'how does consultation work', 'process', 'how it works', 'online consultation'],
    answer: {
      en: 'Our consultations are conducted 100% online via secure video call. It involves a comprehensive 45-60 minute evaluation of your symptoms, personal health history, sleep, appetite, and emotional triggers to select an individualised remedy, which is dispatched to your doorstep.',
      hi: 'हमारा परामर्श पूरी तरह ऑनलाइन वीडियो कॉल द्वारा होता है। 45 से 60 मिनट तक आपके लक्षणों, जीवनशैली और मानसिक स्थिति का समग्र अध्ययन करके दवा तय की जाती है और आपके घर भेजी जाती है।',
      gu: 'અમારો પરામર્શ સંપૂર્ણપણે ઓનલાઇન વિડીયો કોલ દ્વારા થાય છે. ૪૫-૬૦ મિનિટ સુધી તમારા લક્ષણો, ઊંઘ અને જીવનશૈલીનું કેસ-ટેકિંગ કરીને વ્યક્તિગત દવા તમારા ઘર સુધી મોકલવામાં આવે છે.',
    },
  },
  {
    keywords: ['online', 'video call', 'distance', 'worldwide', 'telehealth', 'delivery'],
    answer: {
      en: 'Yes! Dr. Anamika conducts online video consultations for patients across India and worldwide. Prescribed homeopathic remedies are couriered straight to your doorstep.',
      hi: 'हाँ! डॉ. अनामिका देश-विदेश के मरीजों के लिए ऑनलाइन वीडियो कॉल द्वारा परामर्श प्रदान करती हैं और दवाएं कूरियर द्वारा आपके पते पर पहुंचाई जाती हैं।',
      gu: 'હા! ડૉ. અનામિકા દેશ-વિદેશના દર્દીઓ માટે વિડીયો કોલ દ્વારા ઓનલાઇન કન્સલ્ટેશન આપે છે અને દવાઓ કુરિયર દ્વારા તમારા સરનામે પહોંચાડવામાં આવે છે.',
    },
  },
  {
    keywords: ['doctor', 'anamika', 'qualifications', 'credentials', 'bhms'],
    answer: {
      en: 'Dr. Anamika Chandegra holds B.H.M.S. & N.C.H. credentials, specialising in patient-centred constitutional homeopathy, holistic counselling, and supportive online telehealth care.',
      hi: 'डॉ. अनामिका चांदेगरा बी.एच.एम.एस. एवं एन.सी.एच. अर्हताप्राप्त होम्योपैथिक चिकित्सक हैं, जो रोगी-केंद्रित काउंसलिंग और समग्र ऑनलाइन स्वास्थ्य सेवा में समर्पित हैं।',
      gu: 'ડૉ. અનામિકા ચાંદેગરા બી.એચ.એમ.એસ. અને એન.સી.એચ. પદવી ધરાવે છે અને દર્દી-કેન્દ્રી હોમિયોપેથિક સારવાર અને ઓનલાઇન કાઉન્સેલિંગમાં સમર્પિત છે.',
    },
  },
  {
    keywords: ['book', 'appointment', 'how to book', 'booking', 'whatsapp'],
    answer: {
      en: 'You can book an online appointment directly via WhatsApp (+91 8200928769) or use the "Book Consultation" section on this page. We confirm online video slots quickly.',
      hi: 'आप सीधे व्हाट्सएप (+91 8200928769) पर संदेश भेजकर या वेबसाइट के फॉर्म द्वारा अपना ऑनलाइन वीडियो स्लॉट बुक कर सकते हैं।',
      gu: 'આપ સીધા વોટ્સએપ (+91 8200928769) પર મેસેજ કરીને અથવા વેબસાઇટ ફોર્મ ભરીને સરળતાથી ઓનલાઇન વિડીયો એપોઇન્ટમેન્ટ બુક કરી શકો છો.',
    },
  },
  {
    keywords: ['clinic', 'location', 'address', 'visit', 'offline', 'in-person', 'in person'],
    answer: {
      en: 'OM Homeopathy operates exclusively as an online telehealth service. All consultations are conducted via secure, unhurried video or phone calls from the comfort and privacy of your home, with medicines couriered directly to you.',
      hi: 'ओम होम्योपैथी विशेष रूप से एक ऑनलाइन टेलीहेल्थ सेवा के रूप में संचालित होती है। सभी परामर्श आपके घर की सुविधा और गोपनीयता में सुरक्षित वीडियो कॉल के माध्यम से किए जाते हैं, और दवाएं सीधे आपके घर भेजी जाती हैं।',
      gu: 'ઓમ હોમિયોપેથી સંપૂર્ણપણે ઓનલાઇન ટેલિહેલ્થ સેવા તરીકે કાર્ય કરે છે. તમામ પરામર્શ તમારા ઘરની શાંતિ અને ગુપ્તતામાં વિડીયો કોલ દ્વારા લેવામાં આવે છે અને દવાઓ સીધા તમારા ઘરઆંગણે પહોંચાડાય છે.',
    },
  },
  {
    keywords: ['emergency', 'urgent', 'chest pain', 'severe', 'heart attack'],
    isEmergency: true,
    answer: {
      en: 'URGENT NOTICE: Homeopathy does NOT replace emergency trauma or critical care. If you are experiencing chest pain, sudden breathlessness, or a medical emergency, please contact your local emergency services or hospital immediately.',
      hi: 'आपातकालीन सूचना: होम्योपैथी गंभीर आपातकालीन या ट्रॉमा चिकित्सा का विकल्प नहीं है। यदि सीने में तेज दर्द या सांस की गंभीर तकलीफ हो, तो तुरंत निकटतम अस्पताल जाएं।',
      gu: 'તાત્કાલિક ચેતવણી: હોમિયોપેથી ઇમરજન્સી કે ગંભીર ટ્રોમા સારવારનો વિકલ્પ નથી. છાતીમાં દુખાવો કે શ્વાસની ગંભીર તકલીફમાં તાત્કાલિક હોસ્પિટલના ઇમરજન્સી વિભાગનો સંપર્ક કરો.',
    },
  },
];
