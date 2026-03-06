// KIIP Level 3 - Chapter 6: 주거 환경 (Living Environment)
// Pages 74-77

export const chapterInfo = {
  chapter: 6,
  title: {
    korean: '주거 환경',
    english: 'Living Environment',
    nepali: 'बसोबास वातावरण'
  },
  pageRange: '74-77',
  objectives: {
    vocabulary: {
      korean: '주거 지역의 지리적 환경',
      english: 'Geographic environment of residential areas',
      nepali: 'आवासीय क्षेत्रको भौगोलिक वातावरण'
    },
    grammar: [
      {
        korean: '피동',
        english: 'Passive voice',
        nepali: 'कर्मवाच्य'
      },
      {
        korean: '동-자고 하다',
        english: 'Indirect suggestion',
        nepali: 'अप्रत्यक्ष सुझाव'
      }
    ],
    activities: [
      {
        korean: '동네 주변 시설 소개하기',
        english: 'Introducing neighborhood facilities',
        nepali: 'छिमेकको सुविधाहरू परिचय दिनु'
      },
      {
        korean: '지금 살고 있는 동네와 고향 동네 비교하기',
        english: 'Comparing current neighborhood with hometown',
        nepali: 'अहिले बस्ने ठाउँ र गाउँ तुलना गर्नु'
      }
    ],
    culture: {
      korean: '과거와 현대의 명당',
      english: 'Favorable locations in the past and present',
      nepali: 'विगत र वर्तमानको शुभ स्थान'
    }
  }
};

// ============================================
// PAGE 74 - 어휘 (Vocabulary)
// ============================================

// Question 1: 도시는 어떤 특징이 있어요? 살기에 어떨 것 같아요?
// What characteristics does the city have? How do you think it is to live there?

export const urbanVocabulary = [
  // City characteristics from the illustration (Page 74, Q1)
  {
    id: 1,
    page: 74,
    category: 'Urban',
    section: 'Q1-Urban',
    korean: '거리가 깨끗하다',
    pronunciation: 'georiga kkaekkeuthada',
    english: 'The streets are clean',
    nepali: 'सडकहरू सफा छन्',
    type: 'phrase',
    example: {
      korean: '우리 동네는 거리가 깨끗해요.',
      english: 'Our neighborhood has clean streets.',
      nepali: 'हाम्रो छिमेकको सडक सफा छ।'
    }
  },
  {
    id: 2,
    page: 74,
    category: 'Urban',
    section: 'Q1-Urban',
    korean: '공기가 탁하다',
    pronunciation: 'gonggiga takada',
    english: 'The air is murky/polluted',
    nepali: 'हावा प्रदूषित छ',
    type: 'phrase',
    example: {
      korean: '도시는 공기가 탁해요.',
      english: 'The air is polluted in the city.',
      nepali: 'शहरको हावा प्रदूषित छ।'
    }
  },
  {
    id: 3,
    page: 74,
    category: 'Urban',
    section: 'Q1-Urban',
    korean: '문화 시설이 많다',
    pronunciation: 'munhwa shiseori manta',
    english: 'There are many cultural facilities',
    nepali: 'धेरै सांस्कृतिक सुविधाहरू छन्',
    type: 'phrase',
    example: {
      korean: '도시에는 문화 시설이 많아요.',
      english: 'There are many cultural facilities in the city.',
      nepali: 'शहरमा धेरै सांस्कृतिक सुविधाहरू छन्।'
    }
  },
  {
    id: 4,
    page: 74,
    category: 'Urban',
    section: 'Q1-Urban',
    korean: '소음이 심하다',
    pronunciation: 'soeumi shimhada',
    english: 'The noise is severe',
    nepali: 'शोर धेरै छ',
    type: 'phrase',
    example: {
      korean: '도시는 소음이 심해요.',
      english: 'The noise is severe in the city.',
      nepali: 'शहरमा शोर धेरै छ।'
    }
  },
  {
    id: 5,
    page: 74,
    category: 'Urban',
    section: 'Q1-Urban',
    korean: '걸어서 공원에 갈 수 있다',
    pronunciation: 'georeoseo gongwone gal su itda',
    english: 'Can walk to the park',
    nepali: 'हिँडेर पार्क जान सकिन्छ',
    type: 'phrase',
    example: {
      korean: '우리 집에서 걸어서 공원에 갈 수 있어요.',
      english: 'I can walk to the park from my house.',
      nepali: 'मेरो घरबाट हिँडेर पार्क जान सकिन्छ।'
    }
  },
  {
    id: 6,
    page: 74,
    category: 'Urban',
    section: 'Q1-Urban',
    korean: '산책로가 있다',
    pronunciation: 'sanchaekroga itda',
    english: 'There is a walking path',
    nepali: 'हिँड्ने बाटो छ',
    type: 'phrase',
    example: {
      korean: '아파트 뒤에 산책로가 있어요.',
      english: 'There is a walking path behind the apartment.',
      nepali: 'अपार्टमेन्ट पछाडि हिँड्ने बाटो छ।'
    }
  },
  {
    id: 7,
    page: 74,
    category: 'Urban',
    section: 'Q1-Urban',
    korean: '빌딩 숲/산업 단지',
    pronunciation: 'bilding sup / saneop danji',
    english: 'Building forest / Industrial complex',
    nepali: 'भवन जङ्गल / औद्योगिक क्षेत्र',
    type: 'phrase',
    example: {
      korean: '서울은 빌딩 숲이에요.',
      english: 'Seoul is a concrete jungle.',
      nepali: 'सियोल भवन जङ्गल हो।'
    }
  },
  {
    id: 8,
    page: 74,
    category: 'Urban',
    section: 'Q1-Urban',
    korean: '안전하다',
    pronunciation: 'anjeonhada',
    english: 'Safe',
    nepali: 'सुरक्षित',
    type: 'adjective',
    example: {
      korean: '이 동네는 안전해요.',
      english: 'This neighborhood is safe.',
      nepali: 'यो छिमेक सुरक्षित छ।'
    }
  }
];

// Question 2: 농촌은 어떤 특징이 있어요? 살기에 어떨 것 같아요?
// What characteristics does the countryside have? How do you think it is to live there?

export const ruralVocabulary = [
  // Rural/Countryside characteristics from the illustration (Page 74, Q2)
  {
    id: 9,
    page: 74,
    category: 'Rural',
    section: 'Q2-Rural',
    korean: '자연환경이 좋다',
    pronunciation: 'jayeonhwangyeongi jota',
    english: 'The natural environment is good',
    nepali: 'प्राकृतिक वातावरण राम्रो छ',
    type: 'phrase',
    example: {
      korean: '시골은 자연환경이 좋아요.',
      english: 'The natural environment is good in the countryside.',
      nepali: 'गाउँको प्राकृतिक वातावरण राम्रो छ।'
    }
  },
  {
    id: 10,
    page: 74,
    category: 'Rural',
    section: 'Q2-Rural',
    korean: '한적하다',
    pronunciation: 'hanjeokada',
    english: 'Quiet, serene, secluded',
    nepali: 'शान्त, एकान्त',
    type: 'adjective',
    example: {
      korean: '시골은 한적해서 좋아요.',
      english: 'The countryside is nice because it\'s quiet.',
      nepali: 'गाउँ शान्त भएकोले राम्रो छ।'
    }
  },
  {
    id: 11,
    page: 74,
    category: 'Rural',
    section: 'Q2-Rural',
    korean: '공기가 맑다',
    pronunciation: 'gonggiga makda',
    english: 'The air is clean/clear',
    nepali: 'हावा सफा छ',
    type: 'phrase',
    example: {
      korean: '시골의 공기가 맑아요.',
      english: 'The air in the countryside is clean.',
      nepali: 'गाउँको हावा सफा छ।'
    }
  },
  {
    id: 12,
    page: 74,
    category: 'Rural',
    section: 'Q2-Rural',
    korean: '과수원',
    pronunciation: 'gwasuwon',
    english: 'Orchard',
    nepali: 'फलफूल बगान',
    type: 'noun',
    example: {
      korean: '시골에 과수원이 있어요.',
      english: 'There is an orchard in the countryside.',
      nepali: 'गाउँमा फलफूल बगान छ।'
    }
  },
  {
    id: 13,
    page: 74,
    category: 'Rural',
    section: 'Q2-Rural',
    korean: '직접 농사를 짓다',
    pronunciation: 'jikjeop nongsareul jitda',
    english: 'To farm directly/by oneself',
    nepali: 'आफैं खेती गर्नु',
    type: 'phrase',
    example: {
      korean: '부모님이 직접 농사를 지으세요.',
      english: 'My parents farm by themselves.',
      nepali: 'आमाबुवाले आफैं खेती गर्नुहुन्छ।'
    }
  },
  {
    id: 14,
    page: 74,
    category: 'Rural',
    section: 'Q2-Rural',
    korean: '경치가 좋다',
    pronunciation: 'gyeongchiga jota',
    english: 'The scenery is good',
    nepali: 'दृश्य राम्रो छ',
    type: 'phrase',
    example: {
      korean: '산의 경치가 좋아요.',
      english: 'The mountain scenery is good.',
      nepali: 'पहाडको दृश्य राम्रो छ।'
    }
  },
  {
    id: 15,
    page: 74,
    category: 'Rural',
    section: 'Q2-Rural',
    korean: '비닐하우스',
    pronunciation: 'binilhauseu',
    english: 'Greenhouse (vinyl house)',
    nepali: 'ग्रीनहाउस (प्लास्टिक घर)',
    type: 'noun',
    example: {
      korean: '비닐하우스에서 채소를 길러요.',
      english: 'They grow vegetables in the greenhouse.',
      nepali: 'ग्रीनहाउसमा तरकारी उमार्छन्।'
    }
  },
  {
    id: 16,
    page: 74,
    category: 'Rural',
    section: 'Q2-Rural',
    korean: '논',
    pronunciation: 'non',
    english: 'Rice paddy',
    nepali: 'धान खेत',
    type: 'noun',
    example: {
      korean: '논에서 쌀을 재배해요.',
      english: 'They cultivate rice in the rice paddy.',
      nepali: 'धान खेतमा चामल खेती गर्छन्।'
    }
  },
  {
    id: 17,
    page: 74,
    category: 'Rural',
    section: 'Q2-Rural',
    korean: '밭',
    pronunciation: 'bat',
    english: 'Field (dry field)',
    nepali: 'खेत (सुक्खा खेत)',
    type: 'noun',
    example: {
      korean: '밭에서 감자를 심어요.',
      english: 'They plant potatoes in the field.',
      nepali: 'खेतमा आलु रोप्छन्।'
    }
  },
  {
    id: 18,
    page: 74,
    category: 'Rural',
    section: 'Q2-Rural',
    korean: '하천이 흐르다',
    pronunciation: 'hacheoni heureda',
    english: 'A stream flows',
    nepali: 'खोला बग्छ',
    type: 'phrase',
    example: {
      korean: '집 앞에 하천이 흘러요.',
      english: 'A stream flows in front of the house.',
      nepali: 'घर अगाडि खोला बग्छ।'
    }
  }
];

// Question 3: 여러분은 어떤 환경에서 살고 싶어요? 이야기해 보세요.
// What kind of environment do you want to live in? Talk about it.

export const environmentPreference = {
  page: 74,
  section: 'Q3',
  question: {
    korean: '여러분은 어떤 환경에서 살고 싶어요? 이야기해 보세요.',
    english: 'What kind of environment do you want to live in? Talk about it.',
    nepali: 'तपाईं कस्तो वातावरणमा बस्न चाहनुहुन्छ? कुरा गर्नुहोस्।'
  },
  sampleAnswer: {
    korean: '저는 공기가 맑고 한적한 곳에서 살고 싶어요.',
    english: 'I want to live in a place where the air is clean and it\'s quiet.',
    nepali: 'म सफा हावा र शान्त ठाउँमा बस्न चाहन्छु।'
  },
  usefulPhrases: [
    {
      korean: '저는 ~ 곳에서 살고 싶어요.',
      english: 'I want to live in a place where ~.',
      nepali: 'म ~ ठाउँमा बस्न चाहन्छु।'
    },
    {
      korean: '~ 때문에 도시/시골에서 살고 싶어요.',
      english: 'I want to live in the city/countryside because ~.',
      nepali: '~ कारणले शहर/गाउँमा बस्न चाहन्छु।'
    },
    {
      korean: '교통이 편리한 곳이 좋아요.',
      english: 'A place with convenient transportation is good.',
      nepali: 'सुविधाजनक यातायात भएको ठाउँ राम्रो छ।'
    },
    {
      korean: '자연환경이 좋은 곳에서 살고 싶어요.',
      english: 'I want to live in a place with good natural environment.',
      nepali: 'राम्रो प्राकृतिक वातावरण भएको ठाउँमा बस्न चाहन्छु।'
    }
  ]
};

// ============================================
// PAGE 75 - 문법 1: 피동 (Passive Voice)
// ============================================

export const grammar1 = {
  id: 1,
  page: 75,
  pattern: "피동 (Passive Voice)",
  meaning: {
    english: "Passive form - indicates an action that happens by another force",
    nepali: "कर्मवाच्य - अर्को शक्तिद्वारा हुने कार्य जनाउँछ"
  },
  description: {
    english: "Passive voice in Korean is formed by adding suffixes (-이-, -히-, -리-, -기-) to verb stems. It indicates that the subject receives the action rather than performing it.",
    nepali: "कोरियनमा कर्मवाच्य क्रियाको मूलमा प्रत्यय (-이-, -히-, -리-, -기-) थपेर बनाइन्छ। यसले कर्ताले कार्य गर्नुको सट्टा कार्य प्राप्त गर्छ भन्ने जनाउँछ।"
  },
  whenToUse: {
    situations: [
      {
        situation: {
          english: "When something happens to the subject by external force",
          nepali: "जब बाह्य शक्तिद्वारा विषयमा केहि हुन्छ"
        },
        example: {
          korean: "퇴근 시간이라서 길이 많이 막혔어요.",
          english: "The road was congested because it was rush hour.",
          nepali: "कार्यालय छुट्ने समय भएकोले बाटो धेरै जाम भयो।"
        }
      },
      {
        situation: {
          english: "When describing something visible or audible",
          nepali: "देखिने वा सुनिने कुरा वर्णन गर्दा"
        },
        example: {
          korean: "방 안에서 산이 보여요.",
          english: "Mountains are visible from inside the room.",
          nepali: "कोठा भित्रबाट पहाड देखिन्छ।"
        }
      }
    ]
  },
  formation: {
    rule: "Verb stem + 이/히/리/기 + 다",
    notes: {
      english: "The passive suffix depends on the verb stem ending. -이- (보다→보이다), -히- (잡다→잡히다), -리- (열다→열리다), -기- (끊다→끊기다)",
      nepali: "कर्मवाच्य प्रत्यय क्रिया मूलको अन्त्यमा निर्भर गर्छ। -이- (보다→보이다), -히- (잡다→잡히다), -리- (열다→열리다), -기- (끊다→끊기다)"
    },
    conjugationTable: [
      { verb: "보다 (to see)", stem: "보", result: "보이다", english: "to be seen", nepali: "देखिनु" },
      { verb: "잡다 (to catch)", stem: "잡", result: "잡히다", english: "to be caught", nepali: "समातिनु" },
      { verb: "열다 (to open)", stem: "열", result: "열리다", english: "to be opened", nepali: "खुल्नु" },
      { verb: "듣다 (to hear)", stem: "듣", result: "들리다", english: "to be heard", nepali: "सुनिनु" },
      { verb: "끊다 (to cut)", stem: "끊", result: "끊기다", english: "to be cut", nepali: "काटिनु" },
      { verb: "닫다 (to close)", stem: "닫", result: "닫히다", english: "to be closed", nepali: "बन्द हुनु" },
      { verb: "잠그다 (to lock)", stem: "잠그", result: "잠기다", english: "to be locked", nepali: "ताल्चा लाग्नु" }
    ]
  },
  examples: [
    {
      korean: "퇴근 시간이라서 길이 많이 막혔어요.",
      english: "The road was congested because it was rush hour.",
      nepali: "कार्यालय छुट्ने समय भएकोले बाटो धेरै जाम भयो।",
      context: { english: "Traffic situation", nepali: "ट्राफिक अवस्था" }
    },
    {
      korean: "모기한테 팔을 물렸어요.",
      english: "I got bitten on the arm by a mosquito.",
      nepali: "लामखुट्टेले हातमा टोक्यो।",
      context: { english: "Being bitten", nepali: "टोकिएको" }
    },
    {
      korean: "전화가 갑자기 끊겼어요.",
      english: "The phone call suddenly got disconnected.",
      nepali: "फोन अचानक काटियो।",
      context: { english: "Phone disconnection", nepali: "फोन विच्छेद" }
    },
    {
      korean: "방 안에서 산이 보여요.",
      english: "Mountains are visible from inside the room.",
      nepali: "कोठा भित्रबाट पहाड देखिन्छ।",
      context: { english: "Scenic view", nepali: "दृश्य" }
    },
    {
      korean: "기숙사 문이 잠겼어요.",
      english: "The dormitory door got locked.",
      nepali: "छात्रावासको ढोका ताल्चा लागियो।",
      context: { english: "Door locked", nepali: "ढोका बन्द" }
    }
  ]
};

// ============================================
// PAGE 76 - 문법 2: 동-자고 하다 (Indirect Suggestion)
// ============================================

export const grammar2 = {
  id: 2,
  page: 76,
  pattern: "V + 자고 하다",
  meaning: {
    english: "Indirect suggestion - conveys 'let's do' from someone else",
    nepali: "अप्रत्यक्ष सुझाव - अर्को व्यक्तिबाट 'गरौं' भनेको जनाउँछ"
  },
  description: {
    english: "This pattern is used to report or convey a suggestion or proposal that was made by someone else. It's the indirect quotation form of '-자' (let's do).",
    nepali: "यो ढाँचा अर्को व्यक्तिले गरेको सुझाव वा प्रस्ताव रिपोर्ट गर्न प्रयोग हुन्छ। यो '-자' (गरौं) को अप्रत्यक्ष उद्धरण रूप हो।"
  },
  whenToUse: {
    situations: [
      {
        situation: {
          english: "Reporting what someone suggested doing together",
          nepali: "कसैले सँगै गरौं भनेको कुरा भन्दा"
        },
        example: {
          korean: "친구가 만나자고 해서 약속 장소에 나갔다.",
          english: "My friend suggested meeting, so I went to the meeting place.",
          nepali: "साथीले भेटौं भनेकोले भेट्ने ठाउँमा गएँ।"
        }
      },
      {
        situation: {
          english: "Conveying someone's proposal to another person",
          nepali: "कसैको प्रस्ताव अर्को व्यक्तिलाई भन्दा"
        },
        example: {
          korean: "남편이 직장 근처로 이사 가자고 해요.",
          english: "My husband suggests we move near his workplace.",
          nepali: "श्रीमानले कार्यालय नजिक सरौं भन्नुहुन्छ।"
        }
      }
    ]
  },
  formation: {
    rule: "Verb stem + 자고 하다",
    notes: {
      english: "Remove 다 from the verb and add 자고 하다. For negative: Verb stem + 지 말자고 하다 (suggests not to do).",
      nepali: "क्रियाबाट 다 हटाएर 자고 하다 थप्नुहोस्। नकारात्मकको लागि: क्रिया मूल + 지 말자고 하다 (नगरौं भन्छ)।"
    },
    conjugationTable: [
      { verb: "먹다 (to eat)", stem: "먹", result: "먹자고 하다", english: "suggests to eat", nepali: "खाऔं भन्छ" },
      { verb: "가다 (to go)", stem: "가", result: "가자고 하다", english: "suggests to go", nepali: "जाऔं भन्छ" },
      { verb: "하다 (to do)", stem: "하", result: "하자고 하다", english: "suggests to do", nepali: "गरौं भन्छ" },
      { verb: "살다 (to live)", stem: "살", result: "살자고 하다", english: "suggests to live", nepali: "बसौं भन्छ" },
      { verb: "만나다 (to meet)", stem: "만나", result: "만나자고 하다", english: "suggests to meet", nepali: "भेटौं भन्छ" }
    ]
  },
  examples: [
    {
      korean: "과장님이 내일 다시 회의하자고 하셨어요.",
      english: "The manager said let's have a meeting again tomorrow.",
      nepali: "प्रबन्धकले भोलि फेरि बैठक गरौं भन्नुभयो।",
      context: { english: "Work meeting", nepali: "कार्यालय बैठक" }
    },
    {
      korean: "친구가 만나자고 해서 약속 장소에 나갔다.",
      english: "My friend suggested meeting, so I went to the meeting place.",
      nepali: "साथीले भेटौं भनेकोले भेट्ने ठाउँमा गएँ।",
      context: { english: "Meeting friend", nepali: "साथी भेट्ने" }
    },
    {
      korean: "아내가 같이 저녁을 먹자고 해서 기다리는 중이다.",
      english: "My wife suggested eating dinner together, so I'm waiting.",
      nepali: "श्रीमतीले सँगै खाना खाऔं भनेकोले पर्खिरहेको छु।",
      context: { english: "Dinner plan", nepali: "खाना योजना" }
    },
    {
      korean: "남편이 직장 근처로 이사 가자고 해요.",
      english: "My husband suggests we move near his workplace.",
      nepali: "श्रीमानले कार्यालय नजिक सरौं भन्नुहुन्छ।",
      context: { english: "Moving suggestion", nepali: "सर्ने सुझाव" }
    },
    {
      korean: "친구가 오늘은 술을 마시지 말자고 했어요.",
      english: "My friend suggested not drinking alcohol today.",
      nepali: "साथीले आज रक्सी नपिऔं भन्यो।",
      context: { english: "Negative suggestion", nepali: "नकारात्मक सुझाव" }
    }
  ]
};

// ============================================
// PAGE 77 - 말하기 (Speaking)
// ============================================

export const speaking = {
  page: 77,
  title: {
    korean: '말하기',
    english: 'Speaking',
    nepali: 'बोल्ने'
  },
  mainDialogue: {
    id: 1,
    title: {
      korean: '동네 시설 소개',
      english: 'Introducing Neighborhood Facilities',
      nepali: 'छिमेकको सुविधा परिचय'
    },
    situation: {
      korean: '후엔 씨가 이사 온 사람에게 주변 시설과 환경에 대해 알려 줍니다.',
      english: 'Huen tells a person who just moved in about the surrounding facilities and environment.',
      nepali: 'हुएनले भर्खर सरेर आएको व्यक्तिलाई वरपरको सुविधा र वातावरणको बारेमा बताउँछिन्।'
    },
    conversation: [
      {
        speaker: '이웃',
        korean: '안녕하세요? 저, 어제 이 동네로 이사 왔는데요.',
        english: 'Hello? I moved to this neighborhood yesterday.',
        nepali: 'नमस्ते? म हिजो यो छिमेकमा सरेर आएँ।'
      },
      {
        speaker: '후엔',
        korean: '아, 그러세요? 반가워요.',
        english: 'Oh, is that so? Nice to meet you.',
        nepali: 'अ, त्यसो? भेटेर खुसी लाग्यो।'
      },
      {
        speaker: '이웃',
        korean: '아이가 놀러 가자고 해서 그러는데 혹시 동네에 아이가 놀 만한 곳이 있나요?',
        english: 'My child wants to go play, so I\'m wondering if there\'s a place for children to play in the neighborhood?',
        nepali: 'बच्चाले खेल्न जाऔं भन्छ, के छिमेकमा बच्चा खेल्न सक्ने ठाउँ छ?',
        highlight: '놀러 가자고 해서'
      },
      {
        speaker: '후엔',
        korean: '105동 앞에 놀이터가 있어요. 그리고 아이가 자전거 타는 것을 좋아하면 산책로에 가는 것도 좋아요. 놀이터에서 산책로 입구가 보일 거예요.',
        english: 'There\'s a playground in front of building 105. And if your child likes riding bicycles, it\'s also good to go to the walking path. You\'ll be able to see the walking path entrance from the playground.',
        nepali: '१०५ भवन अगाडि खेल मैदान छ। र बच्चालाई साइकल चलाउन मन पर्छ भने हिँड्ने बाटोमा जानु पनि राम्रो छ। खेल मैदानबाट हिँड्ने बाटोको प्रवेशद्वार देखिनेछ।',
        highlight: '보일 거예요'
      },
      {
        speaker: '이웃',
        korean: '그렇군요. 정말 감사합니다. 여쭤보길 잘했네요.',
        english: 'I see. Thank you very much. I\'m glad I asked.',
        nepali: 'त्यसो हो। धेरै धन्यवाद। सोधेर राम्रो भयो।'
      },
      {
        speaker: '후엔',
        korean: '궁금한 게 있으면 또 물어보세요.',
        english: 'If you have any questions, feel free to ask again.',
        nepali: 'केहि जिज्ञासा छ भने फेरि सोध्नुहोस्।'
      }
    ],
    keyExpressions: [
      {
        korean: '아이가 놀다',
        english: 'child plays',
        nepali: 'बच्चा खेल्छ'
      },
      {
        korean: '105동 앞에 놀이터가 있어요',
        english: 'There\'s a playground in front of building 105',
        nepali: '१०५ भवन अगाडि खेल मैदान छ'
      },
      {
        korean: '놀이터에서 산책로 입구가 보이다',
        english: 'The walking path entrance is visible from the playground',
        nepali: 'खेल मैदानबाट हिँड्ने बाटोको प्रवेशद्वार देखिन्छ'
      }
    ]
  },
  practiceScenarios: [
    {
      id: 1,
      situation: {
        korean: '아이가 운동하러 가자고 하다, 아이하고 같이 운동하다',
        english: 'Child suggests going to exercise, exercising with the child',
        nepali: 'बच्चाले व्यायाम गर्न जाऔं भन्छ, बच्चासँग व्यायाम गर्नु'
      },
      facilities: {
        korean: '근처에 체육 센터가 있다, 아파트 후문으로 나가면 걸어서 공원에 갈 수 있다',
        english: 'There\'s a sports center nearby, you can walk to the park if you go out the back gate',
        nepali: 'नजिकै खेलकुद केन्द्र छ, पछाडिको ढोकाबाट निस्किए हिँडेर पार्क जान सकिन्छ'
      }
    },
    {
      id: 2,
      situation: {
        korean: '이사 온 이웃',
        english: 'Neighbor who just moved in',
        nepali: 'भर्खर सरेर आएको छिमेकी'
      },
      questions: [
        {
          korean: '아이들이 놀 만한 곳이 있어요?',
          english: 'Is there a place for children to play?',
          nepali: 'बच्चाहरू खेल्न सक्ने ठाउँ छ?'
        },
        {
          korean: '운동할 만한 곳이 있어요?',
          english: 'Is there a place to exercise?',
          nepali: 'व्यायाम गर्न सक्ने ठाउँ छ?'
        }
      ]
    }
  ],
  vocabularyBox: [
    {
      korean: '놀이터',
      english: 'Playground',
      nepali: 'खेल मैदान'
    },
    {
      korean: '여쭤보다',
      english: 'To ask (honorific)',
      nepali: 'सोध्नु (आदरार्थी)'
    },
    {
      korean: '체육 센터',
      english: 'Sports center',
      nepali: 'खेलकुद केन्द्र'
    },
    {
      korean: '정문',
      english: 'Main gate',
      nepali: 'मुख्य ढोका'
    }
  ]
};

// ============================================
// Combined Vocabulary List (for study mode)
// ============================================

export const vocabulary = [
  ...urbanVocabulary,
  ...ruralVocabulary,
  // Additional vocabulary from grammar and speaking sections
  {
    id: 19,
    page: 75,
    category: 'Grammar',
    section: 'Grammar1',
    korean: '막히다',
    pronunciation: 'makhida',
    english: 'To be blocked/congested (passive)',
    nepali: 'जाम हुनु / रोकिनु',
    type: 'verb-passive',
    example: {
      korean: '퇴근 시간이라서 길이 막혔어요.',
      english: 'The road was congested because it was rush hour.',
      nepali: 'कार्यालय छुट्ने समय भएकोले बाटो जाम भयो।'
    }
  },
  {
    id: 20,
    page: 75,
    category: 'Grammar',
    section: 'Grammar1',
    korean: '물리다',
    pronunciation: 'mullida',
    english: 'To be bitten (passive)',
    nepali: 'टोकिनु',
    type: 'verb-passive',
    example: {
      korean: '모기한테 팔을 물렸어요.',
      english: 'I got bitten on the arm by a mosquito.',
      nepali: 'लामखुट्टेले हातमा टोक्यो।'
    }
  },
  {
    id: 21,
    page: 75,
    category: 'Grammar',
    section: 'Grammar1',
    korean: '끊기다',
    pronunciation: 'kkeunkida',
    english: 'To be disconnected/cut off (passive)',
    nepali: 'काटिनु / विच्छेद हुनु',
    type: 'verb-passive',
    example: {
      korean: '전화가 갑자기 끊겼어요.',
      english: 'The phone call suddenly got disconnected.',
      nepali: 'फोन अचानक काटियो।'
    }
  },
  {
    id: 22,
    page: 75,
    category: 'Grammar',
    section: 'Grammar1',
    korean: '보이다',
    pronunciation: 'boida',
    english: 'To be seen/visible (passive)',
    nepali: 'देखिनु',
    type: 'verb-passive',
    example: {
      korean: '집에서 산이 보여요.',
      english: 'Mountains are visible from the house.',
      nepali: 'घरबाट पहाड देखिन्छ।'
    }
  },
  {
    id: 23,
    page: 75,
    category: 'Grammar',
    section: 'Grammar1',
    korean: '들리다',
    pronunciation: 'deullida',
    english: 'To be heard (passive)',
    nepali: 'सुनिनु',
    type: 'verb-passive',
    example: {
      korean: '새소리가 들려요.',
      english: 'Bird sounds can be heard.',
      nepali: 'चराको आवाज सुनिन्छ।'
    }
  },
  {
    id: 24,
    page: 75,
    category: 'Grammar',
    section: 'Grammar1',
    korean: '열리다',
    pronunciation: 'yeollida',
    english: 'To be opened (passive)',
    nepali: 'खुल्नु',
    type: 'verb-passive',
    example: {
      korean: '문이 열렸어요.',
      english: 'The door was opened.',
      nepali: 'ढोका खुल्यो।'
    }
  },
  {
    id: 25,
    page: 75,
    category: 'Grammar',
    section: 'Grammar1',
    korean: '닫히다',
    pronunciation: 'dathida',
    english: 'To be closed (passive)',
    nepali: 'बन्द हुनु',
    type: 'verb-passive',
    example: {
      korean: '바람에 문이 닫혔어요.',
      english: 'The door was closed by the wind.',
      nepali: 'बतासले ढोका बन्द भयो।'
    }
  },
  {
    id: 26,
    page: 75,
    category: 'Grammar',
    section: 'Grammar1',
    korean: '잠기다',
    pronunciation: 'jamgida',
    english: 'To be locked (passive)',
    nepali: 'ताल्चा लाग्नु',
    type: 'verb-passive',
    example: {
      korean: '기숙사 문이 잠겼어요.',
      english: 'The dormitory door got locked.',
      nepali: 'छात्रावासको ढोका ताल्चा लागियो।'
    }
  },
  {
    id: 27,
    page: 77,
    category: 'Speaking',
    section: 'Speaking',
    korean: '놀이터',
    pronunciation: 'noriter',
    english: 'Playground',
    nepali: 'खेल मैदान',
    type: 'noun',
    example: {
      korean: '105동 앞에 놀이터가 있어요.',
      english: 'There is a playground in front of building 105.',
      nepali: '१०५ भवन अगाडि खेल मैदान छ।'
    }
  },
  {
    id: 28,
    page: 77,
    category: 'Speaking',
    section: 'Speaking',
    korean: '체육 센터',
    pronunciation: 'cheyuk senteo',
    english: 'Sports center',
    nepali: 'खेलकुद केन्द्र',
    type: 'noun',
    example: {
      korean: '근처에 체육 센터가 있어요.',
      english: 'There is a sports center nearby.',
      nepali: 'नजिकै खेलकुद केन्द्र छ।'
    }
  },
  {
    id: 29,
    page: 77,
    category: 'Speaking',
    section: 'Speaking',
    korean: '동네',
    pronunciation: 'dongne',
    english: 'Neighborhood',
    nepali: 'छिमेक / टोल',
    type: 'noun',
    example: {
      korean: '이 동네는 살기 좋아요.',
      english: 'This neighborhood is nice to live in.',
      nepali: 'यो छिमेक बस्न राम्रो छ।'
    }
  },
  {
    id: 30,
    page: 77,
    category: 'Speaking',
    section: 'Speaking',
    korean: '이웃',
    pronunciation: 'iut',
    english: 'Neighbor',
    nepali: 'छिमेकी',
    type: 'noun',
    example: {
      korean: '새 이웃이 이사 왔어요.',
      english: 'A new neighbor moved in.',
      nepali: 'नयाँ छिमेकी सरेर आयो।'
    }
  },
  {
    id: 31,
    page: 77,
    category: 'Speaking',
    section: 'Speaking',
    korean: '이사 오다',
    pronunciation: 'isa oda',
    english: 'To move in',
    nepali: 'सरेर आउनु',
    type: 'verb',
    example: {
      korean: '어제 이 동네로 이사 왔어요.',
      english: 'I moved to this neighborhood yesterday.',
      nepali: 'हिजो यो छिमेकमा सरेर आएँ।'
    }
  },
  {
    id: 32,
    page: 77,
    category: 'Speaking',
    section: 'Speaking',
    korean: '여쭤보다',
    pronunciation: 'yeojwoboda',
    english: 'To ask (honorific)',
    nepali: 'सोध्नु (आदरार्थी)',
    type: 'verb-honorific',
    example: {
      korean: '여쭤봐도 될까요?',
      english: 'May I ask?',
      nepali: 'सोध्न मिल्छ?'
    }
  }
];

// ============================================
// Grammar Summary (for quick reference)
// ============================================

export const grammar = [grammar1, grammar2];

// ============================================
// Practice Exercises
// ============================================

export const practiceExercises = [
  {
    type: 'passive-voice',
    page: 75,
    instruction: {
      korean: '능동형을 피동형으로 바꾸세요.',
      english: 'Change the active form to passive form.',
      nepali: 'सक्रिय रूपलाई कर्मवाच्यमा बदल्नुहोस्।'
    },
    questions: [
      {
        active: '모기가 팔을 물었어요.',
        answer: '팔이 모기에게 물렸어요.',
        english: 'The arm was bitten by a mosquito.',
        nepali: 'लामखुट्टेले हात टोकियो।'
      },
      {
        active: '제가 문을 열었어요.',
        answer: '문이 열렸어요.',
        english: 'The door was opened.',
        nepali: 'ढोका खुल्यो।'
      },
      {
        active: '바람이 문을 닫았어요.',
        answer: '문이 바람에 닫혔어요.',
        english: 'The door was closed by the wind.',
        nepali: 'बतासले ढोका बन्द भयो।'
      },
      {
        active: '저는 새소리를 들었어요.',
        answer: '새소리가 들렸어요.',
        english: 'Bird sounds were heard.',
        nepali: 'चराको आवाज सुनियो।'
      }
    ]
  },
  {
    type: 'indirect-suggestion',
    page: 76,
    instruction: {
      korean: '\'-자고 하다\'를 사용해서 문장을 완성하세요.',
      english: 'Complete the sentence using \'-자고 하다\'.',
      nepali: '\'-자고 하다\' प्रयोग गरेर वाक्य पूरा गर्नुहोस्।'
    },
    questions: [
      {
        situation: '친구: "같이 밥 먹어요."',
        answer: '친구가 같이 밥 먹자고 했어요.',
        english: 'My friend suggested eating together.',
        nepali: 'साथीले सँगै खाना खाऔं भन्यो।'
      },
      {
        situation: '남편: "시골로 이사 가요."',
        answer: '남편이 시골로 이사 가자고 해요.',
        english: 'My husband suggests moving to the countryside.',
        nepali: 'श्रीमानले गाउँ सरौं भन्नुहुन्छ।'
      },
      {
        situation: '동료: "주말에 등산해요."',
        answer: '동료가 주말에 등산하자고 해요.',
        english: 'My coworker suggests hiking on the weekend.',
        nepali: 'सहकर्मीले सप्ताहन्तमा हाइकिङ जाऔं भन्छ।'
      }
    ]
  },
  {
    type: 'fill-in-blank',
    page: 74,
    instruction: {
      korean: '빈칸에 알맞은 말을 쓰세요.',
      english: 'Fill in the blanks with the appropriate words.',
      nepali: 'खाली ठाउँमा उचित शब्द लेख्नुहोस्।'
    },
    questions: [
      {
        question: '도시는 공기가 _____. (polluted)',
        hint: '탁하다',
        answer: '탁해요',
        nepali: 'शहरको हावा प्रदूषित छ।'
      },
      {
        question: '시골은 공기가 _____. (clean)',
        hint: '맑다',
        answer: '맑아요',
        nepali: 'गाउँको हावा सफा छ।'
      },
      {
        question: '이 동네는 _____. (quiet/secluded)',
        hint: '한적하다',
        answer: '한적해요',
        nepali: 'यो छिमेक शान्त छ।'
      },
      {
        question: '도시는 소음이 _____. (severe)',
        hint: '심하다',
        answer: '심해요',
        nepali: 'शहरमा शोर धेरै छ।'
      }
    ]
  }
];

// ============================================
// Reading Passages (Culture Section)
// ============================================

export const cultureReading = {
  page: '문화와 정보',
  title: {
    korean: '과거와 현대의 명당',
    english: 'Favorable Locations in the Past and Present',
    nepali: 'विगत र वर्तमानको शुभ स्थान'
  },
  content: {
    korean: '한국에서는 예로부터 집터를 고를 때 "명당"을 중요하게 생각했습니다. 명당이란 뒤에 산이 있고 앞에 물이 흐르는 곳을 말합니다. 이런 곳에 집을 지으면 복이 온다고 믿었습니다.\n\n하지만 현대에는 명당의 의미가 바뀌었습니다. 요즘 사람들이 생각하는 좋은 집터는 지하철역 근처, 학군이 좋은 곳, 공원이 가까운 곳입니다. 특히 자녀가 있는 가족은 학교와 학원이 가까운 곳을 선호합니다.',
    english: 'In Korea, people have traditionally considered "myeongdang" (favorable locations) important when choosing a house site. Myeongdang refers to places with mountains behind and water flowing in front. They believed that building a house in such places would bring good fortune.\n\nHowever, the meaning of myeongdang has changed in modern times. What people today consider a good house location is near a subway station, in a good school district, and close to parks. Families with children especially prefer places close to schools and academies.',
    nepali: 'कोरियामा, घरको जग्गा छान्दा "म्योङदाङ" (शुभ स्थान) महत्त्वपूर्ण मानिन्थ्यो। म्योङदाङ भनेको पछाडि पहाड र अगाडि पानी बग्ने ठाउँ हो। त्यस्तो ठाउँमा घर बनाउँदा शुभ हुन्छ भन्ने विश्वास थियो।\n\nतर आधुनिक समयमा म्योङदाङको अर्थ परिवर्तन भएको छ। आजकाल मानिसहरूले राम्रो घरको जग्गा भनेको मेट्रो स्टेशन नजिक, राम्रो विद्यालय क्षेत्र, र पार्क नजिक सम्झन्छन्। विशेष गरी बच्चा भएको परिवारले विद्यालय र ट्युशन नजिकको ठाउँ रुचाउँछ।'
  },
  comparison: {
    traditional: {
      korean: '전통 명당',
      english: 'Traditional Myeongdang',
      nepali: 'परम्परागत म्योङदाङ',
      features: [
        {
          korean: '뒤에 산이 있다',
          english: 'Mountains behind',
          nepali: 'पछाडि पहाड'
        },
        {
          korean: '앞에 물이 흐른다',
          english: 'Water flowing in front',
          nepali: 'अगाडि पानी बग्ने'
        },
        {
          korean: '복이 온다',
          english: 'Good fortune comes',
          nepali: 'शुभ हुन्छ'
        }
      ]
    },
    modern: {
      korean: '현대 명당',
      english: 'Modern Myeongdang',
      nepali: 'आधुनिक म्योङदाङ',
      features: [
        {
          korean: '역세권 (지하철역 근처)',
          english: 'Near subway station',
          nepali: 'मेट्रो स्टेशन नजिक'
        },
        {
          korean: '학군이 좋다',
          english: 'Good school district',
          nepali: 'राम्रो विद्यालय क्षेत्र'
        },
        {
          korean: '공원이 가깝다',
          english: 'Close to parks',
          nepali: 'पार्क नजिक'
        }
      ]
    }
  }
};

// ============================================
// Dialogues (for conversation practice)
// ============================================

export const dialogues = [
  speaking.mainDialogue,
  {
    id: 2,
    title: {
      korean: '시골 부모님 방문',
      english: 'Visiting Parents in the Countryside',
      nepali: 'गाउँमा आमाबुवा भेट्न जानु'
    },
    situation: {
      korean: '직원이 과장님과 시골 부모님에 대해 이야기합니다.',
      english: 'An employee talks with the manager about parents in the countryside.',
      nepali: 'कर्मचारी प्रबन्धकसँग गाउँमा बस्ने आमाबुवाको बारेमा कुरा गर्छ।'
    },
    conversation: [
      {
        speaker: '과장',
        korean: '이번 연휴에 뭐 할 거예요?',
        english: 'What are you going to do this holiday?',
        nepali: 'यो बिदामा के गर्ने हो?'
      },
      {
        speaker: '직원',
        korean: '시골에 계신 부모님을 뵈러 갈 거예요.',
        english: 'I\'m going to visit my parents in the countryside.',
        nepali: 'गाउँमा हुनुहुने आमाबुवालाई भेट्न जान्छु।'
      },
      {
        speaker: '과장',
        korean: '시골에 사세요? 어떤 곳이에요?',
        english: 'They live in the countryside? What kind of place is it?',
        nepali: 'गाउँमा बस्नुहुन्छ? कस्तो ठाउँ हो?'
      },
      {
        speaker: '직원',
        korean: '네, 집에서 산이 보이고 아침에 새소리가 들려요. 공기도 정말 맑아요.',
        english: 'Yes, you can see mountains from the house and hear bird sounds in the morning. The air is really clean.',
        nepali: 'हो, घरबाट पहाड देखिन्छ र बिहान चराको आवाज सुनिन्छ। हावा पनि एकदम सफा छ।'
      },
      {
        speaker: '과장',
        korean: '좋겠네요. 저도 나중에 시골로 이사 가고 싶어요.',
        english: 'That sounds nice. I also want to move to the countryside later.',
        nepali: 'राम्रो हुनुपर्छ। म पनि पछि गाउँ सर्न चाहन्छु।'
      }
    ]
  }
];

// ============================================
// PAGE 78 - 듣기 (Listening)
// ============================================

export const listening = {
  page: 78,
  title: {
    korean: '듣기',
    english: 'Listening',
    nepali: 'सुन्ने'
  },
  exercises: [
    {
      id: 1,
      instruction: {
        korean: '여러분은 시골에서 삽니까, 도시에서 삽니까? 아래 그림을 보고 주변 환경이 어떤지, 이곳 사람들은 어떤 일을 할지 이야기해 보세요.',
        english: 'Do you live in the countryside or city? Look at the picture below and talk about the environment and what people might do there.',
        nepali: 'तपाईं गाउँमा बस्नुहुन्छ कि शहरमा? तलको तस्विर हेरेर वातावरण र मानिसहरूले के गर्लान् भनी कुरा गर्नुहोस्।'
      },
      image: 'countryside_scene_with_mountains_and_houses'
    },
    {
      id: 2,
      instruction: {
        korean: '안젤라 씨와 과장님이 이야기합니다. 잘 듣고 질문에 답해 보세요.',
        english: 'Angela and the manager are talking. Listen carefully and answer the questions.',
        nepali: 'एन्जेला र प्रबन्धकले कुरा गर्दैछन्। राम्ररी सुनेर प्रश्नहरूको उत्तर दिनुहोस्।'
      },
      questions: [
        {
          number: 1,
          question: {
            korean: '과장님은 주말에 무엇을 할 겁니까?',
            english: 'What will the manager do on the weekend?',
            nepali: 'प्रबन्धकले सप्ताहन्तमा के गर्नुहुनेछ?'
          }
        },
        {
          number: 2,
          question: {
            korean: '과장님의 부모님은 어떤 일을 하십니까?',
            english: 'What do the manager\'s parents do?',
            nepali: 'प्रबन्धकका आमाबुवाले के गर्नुहुन्छ?'
          },
          options: [
            { id: 1, korean: '농사를 지으신다.', english: 'They farm.', nepali: 'खेती गर्नुहुन्छ।' },
            { id: 2, korean: '회사에 다니신다.', english: 'They work at a company.', nepali: 'कम्पनीमा काम गर्नुहुन्छ।' },
            { id: 3, korean: '공장에서 일하신다.', english: 'They work in a factory.', nepali: 'कारखानामा काम गर्नुहुन्छ।' },
            { id: 4, korean: '비닐하우스를 만드신다.', english: 'They make greenhouses.', nepali: 'ग्रीनहाउस बनाउनुहुन्छ।' }
          ],
          answer: 1
        },
        {
          number: 3,
          question: {
            korean: '들은 내용과 같으면 O, 다르면 X 하세요.',
            english: 'Mark O if correct, X if incorrect based on what you heard.',
            nepali: 'सुनेको कुरा मिल्छ भने O, मिल्दैन भने X लगाउनुहोस्।'
          },
          statements: [
            {
              korean: '과장님의 부모님 집은 기차로 3시간 거리에 있다.',
              english: 'The manager\'s parents\' house is 3 hours away by train.',
              nepali: 'प्रबन्धकका आमाबुवाको घर रेलले ३ घण्टाको दूरीमा छ।'
            },
            {
              korean: '과장님의 부모님 집에서 산을 볼 수 있다.',
              english: 'You can see mountains from the manager\'s parents\' house.',
              nepali: 'प्रबन्धकका आमाबुवाको घरबाट पहाड देख्न सकिन्छ।'
            },
            {
              korean: '과장님의 아내는 도시 생활을 좋아한다.',
              english: 'The manager\'s wife likes city life.',
              nepali: 'प्रबन्धककी श्रीमतीलाई शहरी जीवन मन पर्छ।'
            }
          ]
        }
      ]
    }
  ],
  pronunciation: {
    title: {
      korean: '발음',
      english: 'Pronunciation',
      nepali: 'उच्चारण'
    },
    rule: {
      korean: 'ㄱ, ㄷ, ㅂ, ㅈ + ㅎ → ㅋ, ㅌ, ㅍ, ㅊ (Aspiration)',
      english: 'When ㄱ, ㄷ, ㅂ, ㅈ meet ㅎ, they become aspirated: ㅋ, ㅌ, ㅍ, ㅊ',
      nepali: 'ㄱ, ㄷ, ㅂ, ㅈ + ㅎ → ㅋ, ㅌ, ㅍ, ㅊ (महाप्राण)'
    },
    examples: [
      {
        written: '막히네요',
        pronounced: '[마키네요]',
        english: 'is blocked',
        nepali: 'जाम भएको छ'
      },
      {
        written: '잡혔어요',
        pronounced: '[자펴써요]',
        english: 'was caught',
        nepali: 'समातियो'
      },
      {
        written: '좋다고 하세요',
        pronounced: '[조타고 하세요]',
        english: 'says it\'s good',
        nepali: 'राम्रो छ भन्नुहुन्छ'
      }
    ],
    practice: [
      {
        korean: '길이 많이 막히네요.',
        pronounced: '[기리 마니 마키네요]',
        english: 'The road is very congested.',
        nepali: 'बाटो धेरै जाम छ।'
      },
      {
        korean: '범인이 드디어 잡혔어요.',
        pronounced: '[버미니 드디어 자펴써요]',
        english: 'The criminal was finally caught.',
        nepali: 'अपराधी अन्ततः समातियो।'
      },
      {
        korean: '부모님은 고향이 좋다고 하세요.',
        pronounced: '[부모니믄 고향이 조타고 하세요]',
        english: 'My parents say their hometown is nice.',
        nepali: 'आमाबुवाले गाउँ राम्रो छ भन्नुहुन्छ।'
      }
    ]
  }
};

// ============================================
// PAGE 79 - 읽기 (Reading)
// ============================================

export const reading = {
  page: 79,
  title: {
    korean: '읽기',
    english: 'Reading',
    nepali: 'पढ्ने'
  },
  exercises: [
    {
      id: 1,
      instruction: {
        korean: '다음은 신문에 실린 아파트 광고입니다. 주거 환경이 어떤지 이야기해 보세요.',
        english: 'The following is an apartment advertisement from a newspaper. Talk about the living environment.',
        nepali: 'यो अखबारमा प्रकाशित अपार्टमेन्ट विज्ञापन हो। बसोबास वातावरणको बारेमा कुरा गर्नुहोस्।'
      },
      advertisement: {
        company: {
          korean: '우리 건설',
          english: 'Woori Construction',
          nepali: 'वुरी निर्माण'
        },
        phone: '1577-57XX',
        slogan: {
          korean: '계절마다 바뀌는 풍경화! 자연 속에서 생활할 수 있습니다.',
          english: 'A landscape that changes with each season! You can live in nature.',
          nepali: 'हरेक मौसममा फेरिने परिदृश्य! प्रकृतिमा बस्न सकिन्छ।'
        },
        name: {
          korean: '우리 건설 아파트',
          english: 'Woori Construction Apartment',
          nepali: 'वुरी निर्माण अपार्टमेन्ट'
        },
        features: [
          {
            korean: '그림 같은 풍경과 최고의 자연 경관!',
            english: 'Picture-like scenery and the best natural views!',
            nepali: 'तस्विर जस्तो दृश्य र उत्कृष्ट प्राकृतिक परिदृश्य!'
          },
          {
            korean: '넓은 강과 높은 산이 눈앞에!',
            english: 'Wide river and tall mountains right in front of you!',
            nepali: 'अगाडि नै फराकिलो नदी र अग्लो पहाड!'
          },
          {
            korean: '편리한 교통에 문화 시설까지!',
            english: 'Convenient transportation and cultural facilities too!',
            nepali: 'सुविधाजनक यातायात र सांस्कृतिक सुविधा पनि!'
          }
        ],
        targetAudience: {
          korean: '복잡한 도시를 떠나고 싶은 분들을 위한 최고의 선택!',
          english: 'The best choice for those who want to leave the busy city!',
          nepali: 'व्यस्त शहर छोड्न चाहनेहरूको लागि उत्तम छनोट!'
        }
      }
    },
    {
      id: 2,
      instruction: {
        korean: '다음은 여행 상품 광고입니다. 여행지에서 무엇을 볼 수 있는지 이야기해 보세요.',
        english: 'The following is a travel package advertisement. Talk about what you can see at the destination.',
        nepali: 'यो यात्रा प्याकेज विज्ञापन हो। गन्तव्यमा के देख्न सकिन्छ भनी कुरा गर्नुहोस्।'
      },
      advertisement: {
        title: {
          korean: '실크 로드 역사의 현장으로 가는 시간 여행',
          english: 'A Time Travel to the Historic Site of the Silk Road',
          nepali: 'सिल्क रोडको ऐतिहासिक स्थलमा समय यात्रा'
        },
        duration: {
          korean: '4박 6일 일정 | 최고급 호텔',
          english: '4 nights 6 days | Luxury hotel',
          nepali: '४ रात ६ दिन | लक्जरी होटल'
        },
        destination: {
          korean: '우즈베키스탄 일주',
          english: 'Uzbekistan Tour',
          nepali: 'उज्बेकिस्तान भ्रमण'
        },
        route: {
          korean: '타슈켄트 → 사마르칸트 → 부하라 → 타슈켄트',
          english: 'Tashkent → Samarkand → Bukhara → Tashkent',
          nepali: 'ताश्केन्ट → समरकन्द → बुखारा → ताश्केन्ट'
        },
        highlights: [
          {
            korean: '옛날 건축물을 간직하고 있는 역사의 도시에 여러분을 초대합니다.',
            english: 'We invite you to the historic city that preserves ancient architecture.',
            nepali: 'प्राचीन वास्तुकला संरक्षित ऐतिहासिक शहरमा तपाईंलाई आमन्त्रित गर्दछौं।'
          },
          {
            korean: '넓은 평지 위에 펼쳐진 도시를 보실 수 있습니다.',
            english: 'You can see the city spread across wide plains.',
            nepali: 'फराकिलो मैदानमा फैलिएको शहर देख्न सक्नुहुन्छ।'
          },
          {
            korean: '낮은 언덕과 건축물의 아름다움을 느껴 보세요.',
            english: 'Feel the beauty of the low hills and architecture.',
            nepali: 'होचा डाँडा र वास्तुकलाको सुन्दरता अनुभव गर्नुहोस्।'
          }
        ],
        note: {
          korean: '※ 박물관 관람도 일정에 포함됩니다.',
          english: '※ Museum visits are also included in the itinerary.',
          nepali: '※ संग्रहालय भ्रमण पनि कार्यक्रममा समावेश छ।'
        },
        contact: {
          company: {
            korean: '두리 여행사',
            english: 'Duri Travel Agency',
            nepali: 'दुरी यात्रा एजेन्सी'
          },
          phone: '1577-22XX'
        }
      }
    }
  ]
};

// ============================================
// PAGE 80 - 읽기 (Reading Passage - Samarkand)
// ============================================

export const readingPassage = {
  page: 80,
  title: {
    korean: '고향의 환경에 대한 글',
    english: 'Writing about Hometown Environment',
    nepali: 'गृहनगर वातावरणको बारेमा लेख'
  },
  instruction: {
    korean: '다음은 고향의 환경에 대한 글입니다. 잘 읽고 질문에 답해 보세요.',
    english: 'The following is a writing about hometown environment. Read carefully and answer the questions.',
    nepali: 'यो गृहनगर वातावरणको बारेमा लेख हो। राम्ररी पढेर प्रश्नहरूको उत्तर दिनुहोस्।'
  },
  passage: {
    title: {
      korean: '역사를 간직한 곳, 사마르칸트',
      english: 'A Place that Preserves History, Samarkand',
      nepali: 'इतिहास संरक्षित स्थान, समरकन्द'
    },
    content: {
      korean: `저는 재작년에 우즈베키스탄에서 한국에 왔고 한 이삿짐센터에서 일하고 있습니다. 제 친한 친구가 한국에서 같이 일하자고 해서 한국에 왔습니다.

제 고향은 사마르칸트입니다. 실크 로드의 역사를 간직하고 있어서 유명합니다. 사마르칸트는 넓은 평지 위에 펼쳐진 도시입니다. 도시 곳곳에는 옛날 건축물이 많습니다. 그리고 주변에 낮은 언덕이 있습니다. 건조한 날씨 때문에 언덕에 나무는 많지 않습니다. 언덕에서는 염소들이 풀을 먹습니다.

지금 제가 한국에서 사는 곳은 복잡한 도시입니다. 그렇지만 버스로 조금만 가면 산을 볼 수 있습니다. 고향과 다르게 한국의 산에는 나무가 많습니다. 그래서 봄에는 꽃, 가을에는 단풍을 보고 겨울에는 쌓인 눈을 구경합니다. 계절마다 색깔이 바뀌는 산의 경관이 좋습니다.

지금은 고향의 모습이 그립지만 나중에 고향에 돌아가면 아름다운 한국의 산이 보고 싶어질 것입니다. 그래서 한국에 있는 동안 한국의 풍경을 많이 보려고 합니다.`,
      english: `I came to Korea from Uzbekistan two years ago and work at a moving company. I came to Korea because my close friend suggested we work together here.

My hometown is Samarkand. It is famous for preserving the history of the Silk Road. Samarkand is a city spread across wide plains. There are many old buildings throughout the city. And there are low hills around. Because of the dry weather, there are not many trees on the hills. Goats eat grass on the hills.

The place where I live now in Korea is a busy city. But if you take a short bus ride, you can see mountains. Unlike my hometown, mountains in Korea have many trees. So in spring I see flowers, in autumn the fall foliage, and in winter I enjoy the snow. I like the mountain scenery that changes color with each season.

I miss my hometown now, but when I return later, I will miss Korea's beautiful mountains. So while I'm in Korea, I plan to see many Korean landscapes.`,
      nepali: `म दुई वर्ष अघि उज्बेकिस्तानबाट कोरिया आएँ र एक सामान ओसार्ने कम्पनीमा काम गर्छु। मेरो नजिकको साथीले कोरियामा सँगै काम गरौं भनेकोले कोरिया आएँ।

मेरो गृहनगर समरकन्द हो। सिल्क रोडको इतिहास संरक्षण गरेकोले प्रसिद्ध छ। समरकन्द फराकिलो मैदानमा फैलिएको शहर हो। शहरभरि धेरै पुरानो भवनहरू छन्। र वरिपरि होचा डाँडाहरू छन्। सुक्खा मौसमको कारण डाँडामा धेरै रूखहरू छैनन्। डाँडामा बाख्राहरूले घाँस खान्छन्।

अहिले म कोरियामा बस्ने ठाउँ व्यस्त शहर हो। तर बसमा अलि जाँदा पहाड देख्न सकिन्छ। मेरो गृहनगरसँग फरक, कोरियाको पहाडमा धेरै रूखहरू छन्। त्यसैले वसन्तमा फूल, शरदमा रातो पात, र हिउँदमा हिउँ हेर्छु। हरेक मौसममा रङ्ग फेर्ने पहाडको दृश्य मन पर्छ।

अहिले गृहनगर सम्झिन्छ तर पछि फर्किँदा कोरियाको सुन्दर पहाड याद आउनेछ। त्यसैले कोरियामा हुँदा धेरै कोरियाली परिदृश्य हेर्ने सोच्छु।`
    }
  },
  questions: [
    {
      number: 1,
      question: {
        korean: '이 사람의 고향에는 왜 나무가 많지 않습니까?',
        english: 'Why are there not many trees in this person\'s hometown?',
        nepali: 'यस व्यक्तिको गृहनगरमा किन धेरै रूखहरू छैनन्?'
      },
      answer: {
        korean: '건조한 날씨 때문에 나무가 많지 않습니다.',
        english: 'Because of the dry weather, there are not many trees.',
        nepali: 'सुक्खा मौसमको कारण धेरै रूखहरू छैनन्।'
      }
    },
    {
      number: 2,
      question: {
        korean: '이 사람의 고향에 대한 설명으로 맞는 것은 무엇입니까?',
        english: 'Which description about this person\'s hometown is correct?',
        nepali: 'यस व्यक्तिको गृहनगरको बारेमा कुन वर्णन सही छ?'
      },
      options: [
        { id: 1, korean: '옛날 건축물이 많다.', english: 'There are many old buildings.', nepali: 'धेरै पुरानो भवनहरू छन्।' },
        { id: 2, korean: '바다를 볼 수 있다.', english: 'You can see the sea.', nepali: 'समुद्र देख्न सकिन्छ।' },
        { id: 3, korean: '주변에 높은 산이 있다.', english: 'There are high mountains around.', nepali: 'वरिपरि अग्ला पहाडहरू छन्।' },
        { id: 4, korean: '계절마다 산의 경관이 바뀐다.', english: 'Mountain scenery changes with seasons.', nepali: 'मौसममा पहाडको दृश्य फेरिन्छ।' }
      ],
      answer: 1
    },
    {
      number: 3,
      question: {
        korean: '윗글의 내용과 같으면 O, 다르면 X 하세요.',
        english: 'Mark O if correct, X if incorrect based on the passage.',
        nepali: 'लेख मिल्छ भने O, मिल्दैन भने X लगाउनुहोस्।'
      },
      statements: [
        {
          korean: '이 사람은 친구 때문에 한국에 왔다.',
          english: 'This person came to Korea because of a friend.',
          nepali: 'यो व्यक्ति साथीको कारण कोरिया आयो।',
          answer: 'O'
        },
        {
          korean: '이 사람 고향은 실크 로드의 역사가 있는 곳이다.',
          english: 'This person\'s hometown is a place with Silk Road history.',
          nepali: 'यस व्यक्तिको गृहनगर सिल्क रोडको इतिहास भएको ठाउँ हो।',
          answer: 'O'
        },
        {
          korean: '이 사람이 지금 살고 있는 곳은 한적한 도시이다.',
          english: 'The place where this person lives now is a quiet city.',
          nepali: 'यो व्यक्ति अहिले बस्ने ठाउँ शान्त शहर हो।',
          answer: 'X'
        }
      ]
    }
  ],
  vocabularyBox: [
    {
      korean: '건조하다',
      pronunciation: 'geonjohada',
      english: 'Dry (weather)',
      nepali: 'सुक्खा (मौसम)'
    },
    {
      korean: '염소',
      pronunciation: 'yeomso',
      english: 'Goat',
      nepali: 'बाख्रा'
    },
    {
      korean: '풀',
      pronunciation: 'pul',
      english: 'Grass',
      nepali: 'घाँस'
    }
  ]
};

// ============================================
// PAGE 81 - 쓰기 (Writing)
// ============================================

export const writing = {
  page: 81,
  title: {
    korean: '쓰기',
    english: 'Writing',
    nepali: 'लेख्ने'
  },
  exercises: [
    {
      id: 1,
      instruction: {
        korean: '여러분이 한국에서 지금 살고 있는 동네와 여러분 고향의 동네는 어떻게 다릅니까?',
        english: 'How is the neighborhood where you currently live in Korea different from your hometown?',
        nepali: 'तपाईं अहिले कोरियामा बस्ने छिमेक र तपाईंको गृहनगर कसरी फरक छ?'
      },
      comparisonTable: {
        headers: {
          category: {
            korean: '구분',
            english: 'Category',
            nepali: 'वर्ग'
          },
          korea: {
            korean: '한국에서 사는 동네',
            english: 'Neighborhood in Korea',
            nepali: 'कोरियामा बस्ने छिमेक'
          },
          hometown: {
            korean: '고향의 동네',
            english: 'Hometown Neighborhood',
            nepali: 'गृहनगरको छिमेक'
          }
        },
        categories: [
          {
            korean: '지역 이름',
            english: 'Area name',
            nepali: 'क्षेत्रको नाम'
          },
          {
            korean: '날씨나 계절',
            english: 'Weather or season',
            nepali: 'मौसम वा ऋतु'
          },
          {
            korean: '주변 환경',
            english: 'Surrounding environment',
            nepali: 'वरपरको वातावरण'
          }
        ]
      }
    },
    {
      id: 2,
      instruction: {
        korean: '지금 살고 있는 동네와 여러분 고향의 동네를 비교해서 써 보세요.',
        english: 'Write a comparison between the neighborhood where you live now and your hometown.',
        nepali: 'अहिले बस्ने छिमेक र तपाईंको गृहनगरको तुलना लेख्नुहोस्।'
      },
      writingPrompt: {
        korean: '(자유롭게 쓰세요)',
        english: '(Write freely)',
        nepali: '(स्वतन्त्र रूपमा लेख्नुहोस्)'
      },
      sampleAnswer: {
        korean: `저는 지금 한국의 서울에서 살고 있습니다. 서울은 복잡한 도시입니다. 지하철역이 가깝고 편리합니다. 그리고 문화 시설이 많습니다.

제 고향은 네팔의 카트만두입니다. 카트만두도 복잡한 도시이지만 서울보다 작습니다. 고향에서는 높은 산이 보입니다. 하지만 교통이 불편합니다.

서울의 겨울은 춥지만 고향보다 덜 춥습니다. 고향에서는 계절마다 히말라야 산의 경관이 바뀝니다.`,
        english: `I currently live in Seoul, Korea. Seoul is a busy city. The subway station is close and convenient. And there are many cultural facilities.

My hometown is Kathmandu, Nepal. Kathmandu is also a busy city but smaller than Seoul. You can see high mountains from my hometown. But transportation is inconvenient.

Winter in Seoul is cold but less cold than my hometown. In my hometown, the Himalayan scenery changes with each season.`,
        nepali: `म अहिले कोरियाको सियोलमा बस्छु। सियोल व्यस्त शहर हो। मेट्रो स्टेशन नजिक छ र सुविधाजनक छ। र धेरै सांस्कृतिक सुविधाहरू छन्।

मेरो गृहनगर नेपालको काठमाडौं हो। काठमाडौं पनि व्यस्त शहर हो तर सियोलभन्दा सानो छ। गृहनगरबाट अग्ला पहाडहरू देखिन्छन्। तर यातायात असुविधाजनक छ।

सियोलको जाडो चिसो छ तर गृहनगरभन्दा कम चिसो छ। गृहनगरमा हरेक मौसममा हिमालयको दृश्य फेरिन्छ।`
      }
    }
  ]
};

// ============================================
// PAGE 82-83 - 문화와 정보 (Culture & Information)
// ============================================

export const cultureAndInfo = {
  page: '82-83',
  title: {
    korean: '문화와 정보',
    english: 'Culture and Information',
    nepali: 'संस्कृति र जानकारी'
  },
  topic: {
    korean: '과거와 현대의 명당',
    english: 'Favorable Locations in the Past and Present',
    nepali: 'विगत र वर्तमानको शुभ स्थान (म्योङदाङ)'
  },
  content: {
    korean: `한국 사람들은 옛날부터 집 주변의 환경을 중요하게 생각했다. 집의 위치와 방향 등이 그 집에 사는 사람의 행복을 결정한다고 믿었기 때문이다. 집 뒤에 산이 있고 집 앞에 물이 흐르면 좋은 위치, 명당이라고 했다. 그리고 남향집이라고 하여 집의 방향과 대문은 남쪽을 향하도록 했다. 한국의 겨울은 길고 추운데 집의 활동 공간이 남쪽을 향해 있으면 생활이 편리하기 때문이다.

이러한 전통은 현대까지도 그대로 내려와 남향집이 인기가 있다. 그러나 최근에는 '좋은 집', '명당'의 조건에 새로운 것들이 추가되었다. 학군과 교통이다. 집 주변에 좋은 학교가 있으면 그 집은 인기가 높다. 그리고 근처에 지하철역이 있거나 간선 도로가 통과하면 인기가 높다.`,
    english: `Korean people have considered the environment around their homes important since ancient times. This is because they believed that the location and direction of a house determined the happiness of people living there. If there was a mountain behind the house and water flowing in front, it was considered a good location, called "myeongdang." Houses were also built to face south (called "namhyangjip"), with the front door facing south. This is because Korea's winters are long and cold, so having the living spaces face south makes life more convenient.

This tradition continues to this day, and south-facing houses remain popular. However, recently, new factors have been added to the conditions for a "good house" or "myeongdang": school districts and transportation. If there are good schools near the house, that house becomes popular. And if there's a subway station nearby or a main road passing through, it's also popular.`,
    nepali: `कोरियाली मानिसहरूले प्राचीन कालदेखि नै घर वरपरको वातावरणलाई महत्त्वपूर्ण मान्थे। किनभने घरको स्थान र दिशाले त्यहाँ बस्ने मानिसहरूको खुसी निर्धारण गर्छ भनी विश्वास गर्थे। घर पछाडि पहाड र अगाडि पानी बग्ने भए राम्रो स्थान, "म्योङदाङ" भनिन्थ्यो। घरहरू दक्षिणमुखी (नामह्याङ्जिप) बनाइन्थ्यो, मुख्य ढोका दक्षिणतिर। किनभने कोरियाको जाडो लामो र चिसो हुन्छ, त्यसैले बस्ने ठाउँ दक्षिणमुखी भए जीवन सुविधाजनक हुन्छ।

यो परम्परा आजसम्म कायम छ र दक्षिणमुखी घर अझै लोकप्रिय छ। तर हालै "राम्रो घर" वा "म्योङदाङ" को सर्तमा नयाँ कुराहरू थपिएका छन्: विद्यालय क्षेत्र र यातायात। घर नजिक राम्रा विद्यालयहरू छन् भने त्यो घर लोकप्रिय हुन्छ। र नजिकै मेट्रो स्टेशन छ वा मुख्य सडक छ भने पनि लोकप्रिय हुन्छ।`
  },
  discussionQuestions: [
    {
      number: 1,
      korean: '과거에 한국에서는 집을 짓기 좋은 위치를 어디라고 했습니까?',
      english: 'In the past, where did Koreans say was a good location to build a house?',
      nepali: 'विगतमा कोरियामा घर बनाउन राम्रो स्थान कहाँ भनिन्थ्यो?',
      answer: {
        korean: '집 뒤에 산이 있고 집 앞에 물이 흐르는 곳을 명당이라고 했습니다.',
        english: 'A place with mountains behind and water flowing in front was called myeongdang.',
        nepali: 'घर पछाडि पहाड र अगाडि पानी बग्ने ठाउँलाई म्योङदाङ भनिन्थ्यो।'
      }
    },
    {
      number: 2,
      korean: '현대의 한국 사람들은 어떤 곳에 집이 있으면 좋다고 합니까?',
      english: 'What kind of location do modern Koreans say is good for a house?',
      nepali: 'आधुनिक कोरियालीहरूले कस्तो स्थानमा घर राम्रो भन्छन्?',
      answer: {
        korean: '학군이 좋고 지하철역이나 간선 도로가 가까운 곳이 좋다고 합니다.',
        english: 'They say places with good school districts and close to subway stations or main roads are good.',
        nepali: 'विद्यालय क्षेत्र राम्रो र मेट्रो स्टेशन वा मुख्य सडक नजिकको ठाउँ राम्रो भन्छन्।'
      }
    },
    {
      number: 3,
      korean: '여러분 고향에서 집을 지을 때 중요하게 생각하는 것이 있습니까?',
      english: 'Is there something important to consider when building a house in your hometown?',
      nepali: 'तपाईंको गृहनगरमा घर बनाउँदा के महत्त्वपूर्ण मानिन्छ?'
    }
  ],
  keyTerms: [
    {
      korean: '명당',
      pronunciation: 'myeongdang',
      english: 'Auspicious/favorable location (feng shui)',
      nepali: 'शुभ स्थान (फेंग शुई)'
    },
    {
      korean: '남향집',
      pronunciation: 'namhyangjip',
      english: 'South-facing house',
      nepali: 'दक्षिणमुखी घर'
    },
    {
      korean: '학군',
      pronunciation: 'hakgun',
      english: 'School district',
      nepali: 'विद्यालय क्षेत्र'
    },
    {
      korean: '간선 도로',
      pronunciation: 'ganseon doro',
      english: 'Main/arterial road',
      nepali: 'मुख्य सडक'
    }
  ]
};

// ============================================
// PAGE 83 - 배운 어휘 확인 (Vocabulary Checklist)
// ============================================

export const vocabularyChecklist = {
  page: 83,
  title: {
    korean: '배운 어휘 확인',
    english: 'Vocabulary Checklist',
    nepali: 'सिकेको शब्दावली जाँच'
  },
  instruction: {
    korean: '이 과에서 배운 어휘를 확인하세요.',
    english: 'Check the vocabulary you learned in this chapter.',
    nepali: 'यस अध्यायमा सिकेको शब्दावली जाँच गर्नुहोस्।'
  },
  words: [
    // Column 1
    { korean: '빌딩 숲', english: 'Building forest', nepali: 'भवन जङ्गल' },
    { korean: '산업 단지', english: 'Industrial complex', nepali: 'औद्योगिक क्षेत्र' },
    { korean: '안전하다', english: 'Safe', nepali: 'सुरक्षित' },
    { korean: '소음이 심하다', english: 'Noise is severe', nepali: 'शोर धेरै छ' },
    { korean: '공기가 탁하다', english: 'Air is polluted', nepali: 'हावा प्रदूषित छ' },
    { korean: '산책로가 있다', english: 'There is a walking path', nepali: 'हिँड्ने बाटो छ' },
    { korean: '거리가 깨끗하다', english: 'Streets are clean', nepali: 'सडकहरू सफा छन्' },
    { korean: '문화 시설이 많다', english: 'Many cultural facilities', nepali: 'धेरै सांस्कृतिक सुविधा' },
    { korean: '걸어서 공원에 갈 수 있다', english: 'Can walk to park', nepali: 'हिँडेर पार्क जान सकिन्छ' },
    { korean: '논', english: 'Rice paddy', nepali: 'धान खेत' },
    { korean: '밭', english: 'Field', nepali: 'खेत' },
    { korean: '과수원', english: 'Orchard', nepali: 'फलफूल बगान' },
    { korean: '비닐하우스', english: 'Greenhouse', nepali: 'ग्रीनहाउस' },
    { korean: '한적하다', english: 'Quiet, secluded', nepali: 'शान्त, एकान्त' },
    { korean: '공기가 맑다', english: 'Air is clean', nepali: 'हावा सफा छ' },
    { korean: '직접 농사를 짓다', english: 'Farm directly', nepali: 'आफैं खेती गर्नु' },
    { korean: '하천이 흐르다', english: 'Stream flows', nepali: 'खोला बग्छ' },
    { korean: '경치가 좋다', english: 'Scenery is good', nepali: 'दृश्य राम्रो छ' },
    { korean: '자연환경이 좋다', english: 'Natural environment is good', nepali: 'प्राकृतिक वातावरण राम्रो छ' },
    { korean: '비명 소리', english: 'Screaming sound', nepali: 'चिच्याउने आवाज' },
    { korean: '지역', english: 'Region, area', nepali: 'क्षेत्र' },
    { korean: '범인', english: 'Criminal', nepali: 'अपराधी' },
    // Column 2
    { korean: '놀이터', english: 'Playground', nepali: 'खेल मैदान' },
    { korean: '여쭤보다', english: 'To ask (honorific)', nepali: 'सोध्नु (आदरार्थी)' },
    { korean: '체육 센터', english: 'Sports center', nepali: 'खेलकुद केन्द्र' },
    { korean: '정문', english: 'Main gate', nepali: 'मुख्य ढोका' },
    { korean: '풍경화', english: 'Landscape painting', nepali: 'परिदृश्य चित्र' },
    { korean: '풍경', english: 'Scenery, landscape', nepali: 'परिदृश्य' },
    { korean: '자연 경관', english: 'Natural scenery', nepali: 'प्राकृतिक दृश्य' },
    { korean: '최고급', english: 'Top-class, luxury', nepali: 'उच्च श्रेणी, लक्जरी' },
    { korean: '실크 로드', english: 'Silk Road', nepali: 'सिल्क रोड' },
    { korean: '현장', english: 'Site, location', nepali: 'स्थल' },
    { korean: '옛날', english: 'Old days, ancient times', nepali: 'पुरानो दिन' },
    { korean: '건축물', english: 'Architecture, building', nepali: 'वास्तुकला, भवन' },
    { korean: '간직하다', english: 'To preserve, keep', nepali: 'संरक्षण गर्नु' },
    { korean: '평지', english: 'Flat land, plains', nepali: 'मैदान, समतल भूमि' },
    { korean: '펼쳐지다', english: 'To spread out', nepali: 'फैलिनु' },
    { korean: '언덕', english: 'Hill', nepali: 'डाँडा' },
    { korean: '일정', english: 'Schedule, itinerary', nepali: 'कार्यक्रम' },
    { korean: '포함되다', english: 'To be included', nepali: 'समावेश हुनु' },
    { korean: '건조하다', english: 'Dry', nepali: 'सुक्खा' },
    { korean: '염소', english: 'Goat', nepali: 'बाख्रा' },
    { korean: '풀', english: 'Grass', nepali: 'घाँस' }
  ]
};

// ============================================
// Additional vocabulary from pages 78-83
// ============================================

export const additionalVocabulary = [
  {
    id: 33,
    page: 79,
    section: 'Reading',
    korean: '풍경화',
    pronunciation: 'punggyeonghwa',
    english: 'Landscape painting',
    nepali: 'परिदृश्य चित्र',
    type: 'noun',
    example: {
      korean: '계절마다 바뀌는 풍경화!',
      english: 'A landscape painting that changes with each season!',
      nepali: 'हरेक मौसममा फेरिने परिदृश्य चित्र!'
    }
  },
  {
    id: 34,
    page: 79,
    section: 'Reading',
    korean: '자연 경관',
    pronunciation: 'jayeon gyeonggwan',
    english: 'Natural scenery/landscape',
    nepali: 'प्राकृतिक दृश्य',
    type: 'noun',
    example: {
      korean: '최고의 자연 경관을 볼 수 있습니다.',
      english: 'You can see the best natural scenery.',
      nepali: 'उत्कृष्ट प्राकृतिक दृश्य देख्न सकिन्छ।'
    }
  },
  {
    id: 35,
    page: 79,
    section: 'Reading',
    korean: '실크 로드',
    pronunciation: 'silkeu rodeu',
    english: 'Silk Road',
    nepali: 'सिल्क रोड',
    type: 'noun',
    example: {
      korean: '실크 로드의 역사를 간직하고 있습니다.',
      english: 'It preserves the history of the Silk Road.',
      nepali: 'सिल्क रोडको इतिहास संरक्षण गरेको छ।'
    }
  },
  {
    id: 36,
    page: 80,
    section: 'Reading',
    korean: '건조하다',
    pronunciation: 'geonjohada',
    english: 'Dry (weather)',
    nepali: 'सुक्खा',
    type: 'adjective',
    example: {
      korean: '건조한 날씨 때문에 나무가 많지 않습니다.',
      english: 'There are not many trees because of the dry weather.',
      nepali: 'सुक्खा मौसमको कारण धेरै रूख छैनन्।'
    }
  },
  {
    id: 37,
    page: 80,
    section: 'Reading',
    korean: '염소',
    pronunciation: 'yeomso',
    english: 'Goat',
    nepali: 'बाख्रा',
    type: 'noun',
    example: {
      korean: '언덕에서는 염소들이 풀을 먹습니다.',
      english: 'Goats eat grass on the hills.',
      nepali: 'डाँडामा बाख्राहरूले घाँस खान्छन्।'
    }
  },
  {
    id: 38,
    page: 80,
    section: 'Reading',
    korean: '평지',
    pronunciation: 'pyeongji',
    english: 'Flat land, plains',
    nepali: 'मैदान, समतल भूमि',
    type: 'noun',
    example: {
      korean: '넓은 평지 위에 펼쳐진 도시입니다.',
      english: 'It is a city spread across wide plains.',
      nepali: 'फराकिलो मैदानमा फैलिएको शहर हो।'
    }
  },
  {
    id: 39,
    page: 80,
    section: 'Reading',
    korean: '언덕',
    pronunciation: 'eondeok',
    english: 'Hill',
    nepali: 'डाँडा',
    type: 'noun',
    example: {
      korean: '주변에 낮은 언덕이 있습니다.',
      english: 'There are low hills around.',
      nepali: 'वरिपरि होचा डाँडाहरू छन्।'
    }
  },
  {
    id: 40,
    page: 80,
    section: 'Reading',
    korean: '단풍',
    pronunciation: 'danpung',
    english: 'Fall foliage, autumn leaves',
    nepali: 'शरदको रातो पात',
    type: 'noun',
    example: {
      korean: '가을에는 단풍을 봅니다.',
      english: 'In autumn, I see the fall foliage.',
      nepali: 'शरदमा रातो पात हेर्छु।'
    }
  },
  {
    id: 41,
    page: 82,
    section: 'Culture',
    korean: '명당',
    pronunciation: 'myeongdang',
    english: 'Favorable/auspicious location (feng shui)',
    nepali: 'शुभ स्थान (फेंग शुई)',
    type: 'noun',
    example: {
      korean: '집 뒤에 산이 있고 앞에 물이 흐르면 명당입니다.',
      english: 'If there is a mountain behind and water flowing in front, it is a myeongdang.',
      nepali: 'घर पछाडि पहाड र अगाडि पानी बग्ने भए म्योङदाङ हो।'
    }
  },
  {
    id: 42,
    page: 82,
    section: 'Culture',
    korean: '남향집',
    pronunciation: 'namhyangjip',
    english: 'South-facing house',
    nepali: 'दक्षिणमुखी घर',
    type: 'noun',
    example: {
      korean: '한국에서는 남향집이 인기가 있습니다.',
      english: 'In Korea, south-facing houses are popular.',
      nepali: 'कोरियामा दक्षिणमुखी घर लोकप्रिय छ।'
    }
  },
  {
    id: 43,
    page: 82,
    section: 'Culture',
    korean: '간선 도로',
    pronunciation: 'ganseon doro',
    english: 'Main road, arterial road',
    nepali: 'मुख्य सडक',
    type: 'noun',
    example: {
      korean: '근처에 간선 도로가 통과하면 인기가 높습니다.',
      english: 'If a main road passes nearby, it becomes popular.',
      nepali: 'नजिकै मुख्य सडक छ भने लोकप्रिय हुन्छ।'
    }
  }
];

// ============================================
// WORKBOOK (워크북) - 어휘 Exercises
// ============================================

// Workbook Exercise 1: Fill in the blanks using the word bank
// [보기] 산업 단지, 문화 시설, 비닐하우스, 빌딩 숲
export const workbookVocabulary1 = {
  page: 'Workbook',
  section: '어휘 1',
  title: {
    korean: '빈칸에 알맞은 말을 쓰세요.',
    english: 'Write the appropriate word in the blank.',
    nepali: 'खाली ठाउँमा उचित शब्द लेख्नुहोस्।'
  },
  wordBank: [
    {
      korean: '산업 단지',
      english: 'Industrial complex',
      nepali: 'औद्योगिक क्षेत्र'
    },
    {
      korean: '문화 시설',
      english: 'Cultural facilities',
      nepali: 'सांस्कृतिक सुविधाहरू'
    },
    {
      korean: '비닐하우스',
      english: 'Vinyl greenhouse',
      nepali: 'प्लास्टिक ग्रीनहाउस'
    },
    {
      korean: '빌딩 숲',
      english: 'Building forest (concrete jungle)',
      nepali: 'भवन जङ्गल'
    }
  ],
  exercises: [
    {
      id: 1,
      sentence: {
        korean: '시골에서는 _______에서 채소를 많이 재배합니다.',
        english: 'In the countryside, many vegetables are grown in _______.',
        nepali: 'गाउँमा _______मा धेरै तरकारी उब्जाइन्छ।'
      },
      answer: '비닐하우스',
      answerEnglish: 'vinyl greenhouse',
      answerNepali: 'प्लास्टिक ग्रीनहाउस'
    },
    {
      id: 2,
      sentence: {
        korean: '도서관, 박물관 등의 _______이/가 주변에 있으면 좋겠어요.',
        english: 'I wish there were _______ like libraries and museums nearby.',
        nepali: 'पुस्तकालय, संग्रहालय जस्ता _______ नजिकै भए राम्रो हुन्थ्यो।'
      },
      answer: '문화 시설',
      answerEnglish: 'cultural facilities',
      answerNepali: 'सांस्कृतिक सुविधाहरू'
    },
    {
      id: 3,
      sentence: {
        korean: '아파트와 높은 건물이 많아서 _______같아요.',
        english: 'There are many apartments and tall buildings, so it looks like a _______.',
        nepali: 'अपार्टमेन्ट र अग्ला भवनहरू धेरै छन्, त्यसैले _______ जस्तो देखिन्छ।'
      },
      answer: '빌딩 숲',
      answerEnglish: 'building forest',
      answerNepali: 'भवन जङ्गल'
    },
    {
      id: 4,
      sentence: {
        korean: '이 지역에서는 일자리가 많은 _______이/가 있어서 공장에 다니는 사람들이 많습니다.',
        english: 'In this area, there is a/an _______ with many jobs, so many people work at factories.',
        nepali: 'यस क्षेत्रमा धेरै रोजगारी भएको _______ छ, त्यसैले धेरै मानिसहरू कारखानामा काम गर्छन्।'
      },
      answer: '산업 단지',
      answerEnglish: 'industrial complex',
      answerNepali: 'औद्योगिक क्षेत्र'
    }
  ]
};

// Workbook Exercise 2: Choose the correct word
export const workbookVocabulary2 = {
  page: 'Workbook',
  section: '어휘 2',
  title: {
    korean: '알맞은 것을 고르세요.',
    english: 'Choose the correct one.',
    nepali: 'सही उत्तर छान्नुहोस्।'
  },
  exercises: [
    {
      id: 1,
      sentence: {
        korean: '도시는 차가 많아서 공기가 ( 탁해서 / 맑아서 ) 시골로 이사하고 싶어요.',
        english: 'Because there are many cars in the city and the air is (murky / clear), I want to move to the countryside.',
        nepali: 'शहरमा धेरै गाडी भएर हावा (प्रदूषित / सफा) छ, म गाउँ जान चाहन्छु।'
      },
      options: [
        {
          korean: '탁해서',
          english: 'murky/polluted',
          nepali: 'प्रदूषित',
          isCorrect: true
        },
        {
          korean: '맑아서',
          english: 'clear',
          nepali: 'सफा',
          isCorrect: false
        }
      ],
      answer: '탁해서',
      explanation: {
        korean: '도시에 차가 많으면 공기가 탁해집니다.',
        english: 'When there are many cars in the city, the air becomes polluted.',
        nepali: 'शहरमा धेरै गाडी हुँदा हावा प्रदूषित हुन्छ।'
      }
    },
    {
      id: 2,
      sentence: {
        korean: '요즘 어린이 ( 흥미를 / 안전을 ) 위한 시설을 만들어 달라는 사람들이 많아졌습니다.',
        english: 'These days, many people are asking for facilities for children\'s (interest / safety).',
        nepali: 'आजकाल बालबालिकाको (रुचि / सुरक्षा) को लागि सुविधा बनाउन माग्ने मानिस बढेको छ।'
      },
      options: [
        {
          korean: '흥미를',
          english: 'interest',
          nepali: 'रुचि',
          isCorrect: false
        },
        {
          korean: '안전을',
          english: 'safety',
          nepali: 'सुरक्षा',
          isCorrect: true
        }
      ],
      answer: '안전을',
      explanation: {
        korean: '어린이 안전을 위한 시설이 필요합니다.',
        english: 'Facilities for children\'s safety are needed.',
        nepali: 'बालबालिकाको सुरक्षाको लागि सुविधा आवश्यक छ।'
      }
    },
    {
      id: 3,
      sentence: {
        korean: '시골에서는 밭에서 ( 농사를 / 건물을 ) 짓고 있습니다.',
        english: 'In the countryside, they are (farming / building) in the fields.',
        nepali: 'गाउँमा खेतमा (खेती / भवन) गरिरहेका छन्।'
      },
      options: [
        {
          korean: '농사를',
          english: 'farming',
          nepali: 'खेती',
          isCorrect: true
        },
        {
          korean: '건물을',
          english: 'building',
          nepali: 'भवन',
          isCorrect: false
        }
      ],
      answer: '농사를',
      explanation: {
        korean: '밭에서는 농사를 짓습니다.',
        english: 'Farming is done in the fields.',
        nepali: 'खेतमा खेती गरिन्छ।'
      }
    },
    {
      id: 4,
      sentence: {
        korean: '저는 복잡한 도시보다 ( 한적한 / 복잡한 ) 시골 마을이 좋아요.',
        english: 'I prefer a (quiet / busy) countryside village to a busy city.',
        nepali: 'म व्यस्त शहरभन्दा (शान्त / व्यस्त) गाउँ मन पराउँछु।'
      },
      options: [
        {
          korean: '한적한',
          english: 'quiet/peaceful',
          nepali: 'शान्त',
          isCorrect: true
        },
        {
          korean: '복잡한',
          english: 'busy/crowded',
          nepali: 'व्यस्त',
          isCorrect: false
        }
      ],
      answer: '한적한',
      explanation: {
        korean: '복잡한 도시와 반대되는 것은 한적한 시골입니다.',
        english: 'The opposite of a busy city is a quiet countryside.',
        nepali: 'व्यस्त शहरको विपरीत शान्त गाउँ हो।'
      }
    },
    {
      id: 5,
      sentence: {
        korean: '동네에 개울이 ( 자라고 / 흐르고 ) 있어서 아이들이 뛰어놀아요.',
        english: 'A stream (grows / flows) in the neighborhood, so children play around.',
        nepali: 'छिमेकमा खोला (बढ्छ / बग्छ), त्यसैले बालबालिकाहरू खेल्छन्।'
      },
      options: [
        {
          korean: '자라고',
          english: 'grows',
          nepali: 'बढ्छ',
          isCorrect: false
        },
        {
          korean: '흐르고',
          english: 'flows',
          nepali: 'बग्छ',
          isCorrect: true
        }
      ],
      answer: '흐르고',
      explanation: {
        korean: '개울(물)은 흐릅니다.',
        english: 'A stream (water) flows.',
        nepali: 'खोला (पानी) बग्छ।'
      }
    }
  ]
};

// Workbook Exercise 3: Match the facility with the complaint
export const workbookVocabulary3 = {
  page: 'Workbook',
  section: '어휘 3',
  title: {
    korean: '어떤 시설이 불편합니까? 알맞은 것을 연결하세요.',
    english: 'What facility is inconvenient? Connect the appropriate ones.',
    nepali: 'कुन सुविधा असुविधाजनक छ? उचित जोडी मिलाउनुहोस्।'
  },
  facilities: [
    {
      korean: '놀이터',
      english: 'Playground',
      nepali: 'खेल मैदान'
    },
    {
      korean: '산책로',
      english: 'Walking path',
      nepali: 'हिँड्ने बाटो'
    },
    {
      korean: '체육 센터',
      english: 'Sports center',
      nepali: 'खेलकुद केन्द्र'
    }
  ],
  complaints: [
    {
      id: 1,
      complaint: {
        korean: '그네, 시소 등의 놀이 시설이 낡아서 어린이들이 놀기에 안전하지 않아요.',
        english: 'The playground equipment like swings and seesaws are old, so it\'s not safe for children to play.',
        nepali: 'पिङ, सिसो जस्ता खेल उपकरण पुराना छन्, त्यसैले बालबालिकाले खेल्न सुरक्षित छैन।'
      },
      matchesWith: '놀이터',
      matchesWithEnglish: 'Playground',
      matchesWithNepali: 'खेल मैदान'
    },
    {
      id: 2,
      complaint: {
        korean: '운동할 수 있는 공간과 프로그램이 부족해요.',
        english: 'There is a lack of space and programs for exercising.',
        nepali: 'व्यायाम गर्न सक्ने ठाउँ र कार्यक्रम अपर्याप्त छ।'
      },
      matchesWith: '체육 센터',
      matchesWithEnglish: 'Sports center',
      matchesWithNepali: 'खेलकुद केन्द्र'
    },
    {
      id: 3,
      complaint: {
        korean: '산책할 수 있는 길이 좁아서 다른 사람과 부딪혀요.',
        english: 'The walking path is narrow, so I bump into other people.',
        nepali: 'हिँड्ने बाटो साँघुरो छ, त्यसैले अरू मानिससँग ठोक्किन्छ।'
      },
      matchesWith: '산책로',
      matchesWithEnglish: 'Walking path',
      matchesWithNepali: 'हिँड्ने बाटो'
    }
  ]
};

// Workbook Exercise 4: Fill in the hometown introduction (Sydney example)
export const workbookVocabulary4 = {
  page: 'Workbook',
  section: '어휘 4',
  title: {
    korean: '고향을 소개해 보세요.',
    english: 'Introduce your hometown.',
    nepali: 'आफ्नो गाउँको परिचय दिनुहोस्।'
  },
  wordBank: [
    {
      korean: '자연 경관',
      english: 'Natural scenery',
      nepali: 'प्राकृतिक दृश्य'
    },
    {
      korean: '건축물',
      english: 'Architecture/Buildings',
      nepali: 'भवन/वास्तुकला'
    },
    {
      korean: '평지',
      english: 'Flat land/Plains',
      nepali: 'समतल भूमि'
    }
  ],
  example: {
    hometown: {
      korean: '시드니',
      english: 'Sydney',
      nepali: 'सिड्नी'
    },
    location: {
      korean: '제 고향은 호주의 시드니입니다. 호주의 동쪽에 있습니다.',
      english: 'My hometown is Sydney, Australia. It is in the east of Australia.',
      nepali: 'मेरो गाउँ अस्ट्रेलियाको सिड्नी हो। यो अस्ट्रेलियाको पूर्वमा छ।'
    },
    terrain: {
      korean: '제 고향은 바다와 가깝습니다. 해안선 주변에 평지가 많이 있습니다.',
      english: 'My hometown is close to the sea. There is a lot of flat land around the coastline.',
      nepali: 'मेरो गाउँ समुद्र नजिक छ। तटरेखा वरिपरि धेरै समतल भूमि छ।'
    },
    specialFeatures: {
      korean: '바다 경치가 아름다워서 자연 경관이 좋습니다. 또한 오페라 하우스 같은 유명한 건축물이 있습니다.',
      english: 'The sea view is beautiful, so the natural scenery is good. Also, there are famous buildings like the Opera House.',
      nepali: 'समुद्रको दृश्य राम्रो छ, त्यसैले प्राकृतिक दृश्य राम्रो छ। साथै, ओपेरा हाउस जस्ता प्रसिद्ध भवनहरू छन्।'
    },
    blanks: [
      {
        sentence: {
          korean: '바다 경치가 아름다워서 ______이/가 좋습니다.',
          english: 'The sea view is beautiful, so the ______ is good.',
          nepali: 'समुद्रको दृश्य राम्रो छ, त्यसैले ______ राम्रो छ।'
        },
        answer: '자연 경관',
        answerEnglish: 'natural scenery',
        answerNepali: 'प्राकृतिक दृश्य'
      },
      {
        sentence: {
          korean: '오페라 하우스 같은 유명한 ______이/가 있습니다.',
          english: 'There are famous ______ like the Opera House.',
          nepali: 'ओपेरा हाउस जस्ता प्रसिद्ध ______ छन्।'
        },
        answer: '건축물',
        answerEnglish: 'architecture/buildings',
        answerNepali: 'भवन/वास्तुकला'
      },
      {
        sentence: {
          korean: '해안선 주변에 ______이/가 많이 있습니다.',
          english: 'There is a lot of ______ around the coastline.',
          nepali: 'तटरेखा वरिपरि धेरै ______ छ।'
        },
        answer: '평지',
        answerEnglish: 'flat land',
        answerNepali: 'समतल भूमि'
      }
    ]
  }
};

// ============================================
// WORKBOOK (워크북) - 문법 Exercises
// ============================================

// Workbook Grammar Exercise 3: Look at the picture and write sentences using passive voice
export const workbookGrammar3 = {
  page: 'Workbook',
  section: '문법 3',
  title: {
    korean: '그림을 보고 문장을 완성하세요.',
    english: 'Look at the picture and complete the sentence.',
    nepali: 'तस्वीर हेर्नुहोस् र वाक्य पूरा गर्नुहोस्।'
  },
  instruction: {
    korean: '피동 표현을 사용하세요',
    english: 'Use passive expressions',
    nepali: 'कर्मवाच्य अभिव्यक्ति प्रयोग गर्नुहोस्'
  },
  exercises: [
    {
      id: 1,
      picture: 'Mother holding/hugging a baby',
      pictureDescription: {
        korean: '엄마가 아기를 안고 있는 그림',
        english: 'Picture of mother holding a baby',
        nepali: 'आमाले बच्चालाई अङ्कमाल गरेको तस्वीर'
      },
      baseVerb: {
        korean: '안다',
        english: 'to hold/hug',
        nepali: 'अङ्कमाल गर्नु'
      },
      passiveVerb: {
        korean: '안기다',
        english: 'to be held/hugged',
        nepali: 'अङ्कमाल गरिनु'
      },
      sentence: {
        korean: '아기가 엄마에게 안겨 있습니다.',
        english: 'The baby is being held by the mother.',
        nepali: 'बच्चा आमाको काखमा छ।'
      },
      blankSentence: {
        korean: '아기가 엄마에게 _______ 있습니다.',
        answer: '안겨'
      }
    },
    {
      id: 2,
      picture: 'Picture frame hung on wall',
      pictureDescription: {
        korean: '벽에 그림이 걸려 있는 모습',
        english: 'Picture hanging on the wall',
        nepali: 'भित्तामा तस्वीर झुण्ड्याइएको'
      },
      baseVerb: {
        korean: '걸다',
        english: 'to hang',
        nepali: 'झुण्ड्याउनु'
      },
      passiveVerb: {
        korean: '걸리다',
        english: 'to be hung',
        nepali: 'झुण्ड्याइनु'
      },
      sentence: {
        korean: '벽에 그림이 걸려 있습니다.',
        english: 'A picture is hung on the wall.',
        nepali: 'भित्तामा तस्वीर झुण्ड्याइएको छ।'
      },
      blankSentence: {
        korean: '벽에 그림이 _______ 있습니다.',
        answer: '걸려'
      }
    },
    {
      id: 3,
      picture: 'Dog being chased',
      pictureDescription: {
        korean: '개가 쫓기는 그림',
        english: 'Picture of a dog being chased',
        nepali: 'कुकुर खेदिएको तस्वीर'
      },
      baseVerb: {
        korean: '쫓다',
        english: 'to chase',
        nepali: 'खेद्नु'
      },
      passiveVerb: {
        korean: '쫓기다',
        english: 'to be chased',
        nepali: 'खेदिनु'
      },
      sentence: {
        korean: '개가 아이에게 쫓기고 있습니다.',
        english: 'The dog is being chased by the child.',
        nepali: 'कुकुर बच्चाले खेदिरहेको छ।'
      },
      blankSentence: {
        korean: '개가 아이에게 _______ 있습니다.',
        answer: '쫓기고'
      }
    },
    {
      id: 4,
      picture: 'Finger being bitten by mosquito',
      pictureDescription: {
        korean: '모기에 손가락이 물리는 그림',
        english: 'Picture of finger being bitten by mosquito',
        nepali: 'लामखुट्टेले औंला टोकेको तस्वीर'
      },
      baseVerb: {
        korean: '물다',
        english: 'to bite',
        nepali: 'टोक्नु'
      },
      passiveVerb: {
        korean: '물리다',
        english: 'to be bitten',
        nepali: 'टोकिनु'
      },
      sentence: {
        korean: '손가락이 모기에 물렸습니다.',
        english: 'My finger was bitten by a mosquito.',
        nepali: 'औंला लामखुट्टेले टोक्यो।'
      },
      blankSentence: {
        korean: '손가락이 모기에 _______.',
        answer: '물렸습니다'
      }
    }
  ],
  passiveFormationGuide: {
    korean: '피동 만들기: 동사 어간 + 이/히/리/기',
    english: 'Passive formation: Verb stem + 이/히/리/기',
    nepali: 'कर्मवाच्य बनाउने: क्रिया धातु + 이/히/리/기',
    examples: [
      {
        active: '안다 (to hold)',
        passive: '안기다 (to be held)',
        suffix: '-기-'
      },
      {
        active: '걸다 (to hang)',
        passive: '걸리다 (to be hung)',
        suffix: '-리-'
      },
      {
        active: '쫓다 (to chase)',
        passive: '쫓기다 (to be chased)',
        suffix: '-기-'
      },
      {
        active: '물다 (to bite)',
        passive: '물리다 (to be bitten)',
        suffix: '-리-'
      }
    ]
  }
};

// Workbook Grammar Exercise 4: Complete the dialogue using passive verbs
export const workbookGrammar4 = {
  page: 'Workbook',
  section: '문법 4',
  title: {
    korean: '대화를 완성하세요.',
    english: 'Complete the dialogue.',
    nepali: 'संवाद पूरा गर्नुहोस्।'
  },
  instruction: {
    korean: '알맞은 피동사를 골라 문장을 완성하세요.',
    english: 'Choose the appropriate passive verb to complete the sentence.',
    nepali: 'वाक्य पूरा गर्न उचित कर्मवाच्य क्रिया छान्नुहोस्।'
  },
  verbBank: [
    {
      active: {
        korean: '보다',
        english: 'to see',
        nepali: 'हेर्नु'
      },
      passive: {
        korean: '보이다',
        english: 'to be seen/visible',
        nepali: 'देखिनु'
      }
    },
    {
      active: {
        korean: '막다',
        english: 'to block',
        nepali: 'रोक्नु'
      },
      passive: {
        korean: '막히다',
        english: 'to be blocked',
        nepali: 'रोकिनु'
      }
    },
    {
      active: {
        korean: '바꾸다',
        english: 'to change',
        nepali: 'परिवर्तन गर्नु'
      },
      passive: {
        korean: '바뀌다',
        english: 'to be changed',
        nepali: 'परिवर्तन हुनु'
      }
    }
  ],
  dialogues: [
    {
      id: 1,
      context: {
        korean: '창문 밖 풍경에 대한 대화',
        english: 'Conversation about the view outside the window',
        nepali: 'झ्यालबाट देखिने दृश्यको बारेमा कुराकानी'
      },
      conversation: [
        {
          speaker: 'A',
          line: {
            korean: '창밖에 뭐가 보여요?',
            english: 'What can you see outside the window?',
            nepali: 'झ्यालबाट के देखिन्छ?'
          }
        },
        {
          speaker: 'B',
          line: {
            korean: '네, 산이 _______.',
            english: 'Yes, the mountain is _______.',
            nepali: 'हो, पहाड _______।'
          },
          blank: true,
          answer: '보여요',
          answerEnglish: 'visible/can be seen',
          answerNepali: 'देखिन्छ',
          baseVerb: '보다 → 보이다'
        }
      ]
    },
    {
      id: 2,
      context: {
        korean: '출근길 교통 상황에 대한 대화',
        english: 'Conversation about traffic on the way to work',
        nepali: 'कार्यालय जाने बाटोको ट्राफिकको बारेमा कुराकानी'
      },
      conversation: [
        {
          speaker: 'A',
          line: {
            korean: '오늘 출근길에 길이 많이 막혔어요?',
            english: 'Was the traffic heavily blocked on your way to work today?',
            nepali: 'आज कार्यालय जाँदा बाटो धेरै जाम थियो?'
          }
        },
        {
          speaker: 'B',
          line: {
            korean: '네, 사고가 나서 길이 많이 _______.',
            english: 'Yes, there was an accident so the road was heavily _______.',
            nepali: 'हो, दुर्घटना भएर बाटो धेरै _______।'
          },
          blank: true,
          answer: '막혔어요',
          answerEnglish: 'blocked',
          answerNepali: 'रोकियो',
          baseVerb: '막다 → 막히다'
        }
      ]
    },
    {
      id: 3,
      context: {
        korean: '동네 변화에 대한 대화',
        english: 'Conversation about changes in the neighborhood',
        nepali: 'छिमेकको परिवर्तनको बारेमा कुराकानी'
      },
      conversation: [
        {
          speaker: 'A',
          line: {
            korean: '이 동네가 많이 바뀌었어요?',
            english: 'Has this neighborhood changed a lot?',
            nepali: 'यो छिमेक धेरै परिवर्तन भयो?'
          }
        },
        {
          speaker: 'B',
          line: {
            korean: '네, 예전에는 논밭이었는데 지금은 아파트 단지로 _______.',
            english: 'Yes, it used to be rice fields, but now it has been _______ into an apartment complex.',
            nepali: 'हो, पहिले धान खेत थियो, तर अहिले अपार्टमेन्ट क्षेत्रमा _______।'
          },
          blank: true,
          answer: '바뀌었어요',
          answerEnglish: 'changed',
          answerNepali: 'परिवर्तन भयो',
          baseVerb: '바꾸다 → 바뀌다'
        }
      ]
    }
  ],
  additionalNotes: {
    korean: '피동사는 주어가 행위를 받는 것을 표현합니다.',
    english: 'Passive verbs express that the subject receives the action.',
    nepali: 'कर्मवाच्य क्रियाले विषयले कार्य प्राप्त गर्छ भनेर व्यक्त गर्छ।'
  }
};

// ============================================
// Create readingPassages array for App.jsx compatibility
// ============================================

export const readingPassages = [
  {
    id: 1,
    title: readingPassage.passage.title,
    content: readingPassage.passage.content,
    keyPoints: [
      {
        korean: '글쓴이의 고향은 사마르칸트로, 실크 로드의 역사를 간직하고 있습니다.',
        english: 'The writer\'s hometown is Samarkand, which preserves the history of the Silk Road.',
        nepali: 'लेखकको गृहनगर समरकन्द हो, जसले सिल्क रोडको इतिहास संरक्षण गरेको छ।'
      },
      {
        korean: '건조한 날씨 때문에 고향에는 나무가 많지 않습니다.',
        english: 'Because of dry weather, there are not many trees in the hometown.',
        nepali: 'सुक्खा मौसमको कारण गृहनगरमा धेरै रूखहरू छैनन्।'
      },
      {
        korean: '한국의 산은 계절마다 색깔이 바뀌어서 좋습니다.',
        english: 'Korean mountains are nice because the colors change with each season.',
        nepali: 'कोरियाको पहाडहरू राम्रा छन् किनभने हरेक मौसममा रङ्ग फेरिन्छ।'
      }
    ]
  }
];

// ============================================
// Export all sections for the chapter
// ============================================

export default {
  chapterInfo,
  urbanVocabulary,
  ruralVocabulary,
  environmentPreference,
  grammar1,
  grammar2,
  speaking,
  vocabulary,
  grammar,
  practiceExercises,
  cultureReading,
  dialogues,
  listening,
  reading,
  readingPassage,
  readingPassages,
  writing,
  cultureAndInfo,
  vocabularyChecklist,
  additionalVocabulary,
  // Workbook sections
  workbookVocabulary1,
  workbookVocabulary2,
  workbookVocabulary3,
  workbookVocabulary4,
  workbookGrammar3,
  workbookGrammar4
};
