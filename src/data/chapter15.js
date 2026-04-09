// KIIP Level 3 - Chapter 15: 고민과 상담 (Concerns and Counseling)
// Pages 192-201

export const chapterInfo = {
  chapter: 15,
  title: {
    korean: '고민과 상담',
    english: 'Concerns and Counseling',
    nepali: 'चिन्ता र परामर्श'
  },
  pageRange: '192-201',
  objectives: {
    vocabulary: {
      korean: '고민과 상담',
      english: 'Concerns and Counseling',
      nepali: 'चिन्ता र परामर्श'
    },
    grammar: [
      {
        korean: '-(으)려던 참이다',
        english: 'I was just about to',
        nepali: 'म भर्खरै गर्न लागेको थिएँ'
      },
      {
        korean: '-자마자',
        english: 'As soon as',
        nepali: 'गर्नेबित्तिकै'
      }
    ],
    activities: [
      {
        korean: '고민에 대해 이야기하기',
        english: 'Talking about concerns',
        nepali: 'चिन्ताको बारेमा कुरा गर्ने'
      },
      {
        korean: '우울증 자가 진단에 대해 읽기',
        english: 'Reading about depression self-diagnosis',
        nepali: 'डिप्रेसन स्व-निदानको बारेमा पढ्ने'
      }
    ],
    culture: {
      korean: '이민자 상담 센터',
      english: 'Immigrant Counseling Centers',
      nepali: 'अप्रवासी परामर्श केन्द्रहरू'
    }
  }
};

// ============================================
// PAGE 192 - 어휘 (Vocabulary)
// ============================================

// Section 1: Interpersonal Problems (대인 관계 고민)
export const interpersonalVocabulary = [
  {
    id: 1,
    page: 192,
    category: 'Interpersonal Problems',
    section: '대인 관계 고민',
    korean: '국적 취득이 힘들다',
    pronunciation: 'gukjeok chwideugi himdeulda',
    english: 'Hard to obtain citizenship',
    nepali: 'नागरिकता प्राप्त गर्न कठिन',
    type: 'expression',
    example: {
      korean: '서류가 많아서 국적 취득이 힘들어요.',
      english: 'There are a lot of documents, so it\'s hard to obtain citizenship.',
      nepali: 'कागजातहरू धेरै भएर नागरिकता प्राप्त गर्न कठिन छ।'
    }
  },
  {
    id: 2,
    page: 192,
    category: 'Interpersonal Problems',
    section: '대인 관계 고민',
    korean: '한국어 실력이 제자리걸음이다',
    pronunciation: 'hangugeo sillyeogi jejarigoreumida',
    english: 'Korean skills are stagnating',
    nepali: 'कोरियाली भाषा सीप स्थिर छ',
    type: 'expression',
    example: {
      korean: '매일 공부하는데도 한국어 실력이 제자리걸음이에요.',
      english: 'Even though I study every day, my Korean skills are stagnating.',
      nepali: 'हरेक दिन पढे पनि कोरियाली भाषा सीप स्थिर छ।'
    }
  },
  {
    id: 3,
    page: 192,
    category: 'Interpersonal Problems',
    section: '대인 관계 고민',
    korean: '주변 사람들과 가까워지기 어렵다',
    pronunciation: 'jubyeon saramdeulgwa gakkawojigi eoryeopda',
    english: 'Hard to get close to people around',
    nepali: 'वरपरका मानिसहरूसँग नजिक हुन गाह्रो',
    type: 'expression',
    example: {
      korean: '문화가 달라서 주변 사람들과 가까워지기 어려워요.',
      english: 'Because the culture is different, it\'s hard to get close to people around me.',
      nepali: 'संस्कृति फरक भएर वरपरका मानिसहरूसँग नजिक हुन गाह्रो छ।'
    }
  },
  {
    id: 4,
    page: 192,
    category: 'Interpersonal Problems',
    section: '대인 관계 고민',
    korean: '동료들과 성격이 안 맞는다',
    pronunciation: 'dongnyodeulgwa seonggyeogi an manneunda',
    english: 'Don\'t get along with coworkers',
    nepali: 'सहकर्मीहरूसँग स्वभाव मिल्दैन',
    type: 'expression',
    example: {
      korean: '회사에서 동료들과 성격이 안 맞아서 힘들어요.',
      english: 'It\'s hard because I don\'t get along with my coworkers.',
      nepali: 'कम्पनीमा सहकर्मीहरूसँग स्वभाव नमिलेर गाह्रो छ।'
    }
  }
];

// Section 2: Family Problems (가정 고민)
export const familyVocabulary = [
  {
    id: 5,
    page: 192,
    category: 'Family Problems',
    section: '가정 고민',
    korean: '직장과 육아를 병행하기 힘들다',
    pronunciation: 'jikjanggwa yugareul byeonghaenghagi himdeulda',
    english: 'Hard to balance work and parenting',
    nepali: 'काम र बच्चा पालन सँगै गर्न गाह्रो',
    type: 'expression',
    example: {
      korean: '아이가 어려서 직장과 육아를 병행하기 힘들어요.',
      english: 'Because the child is young, it\'s hard to balance work and parenting.',
      nepali: 'बच्चा सानो भएर काम र बच्चा पालन सँगै गर्न गाह्रो छ।'
    }
  },
  {
    id: 6,
    page: 192,
    category: 'Family Problems',
    section: '가정 고민',
    korean: '고부간의 갈등이 있다',
    pronunciation: 'gobuganui galdeungi itda',
    english: 'Mother-in-law conflict exists',
    nepali: 'सासु-बुहारी बीचको द्वन्द्व छ',
    type: 'expression',
    example: {
      korean: '시어머니와 고부간의 갈등이 있어서 스트레스를 받아요.',
      english: 'I\'m stressed because there is conflict with my mother-in-law.',
      nepali: 'सासुआमासँग सासु-बुहारी बीचको द्वन्द्व भएर तनाव लाग्छ।'
    }
  },
  {
    id: 7,
    page: 192,
    category: 'Family Problems',
    section: '가정 고민',
    korean: '부부 싸움을 자주 한다',
    pronunciation: 'bubu ssaumeul jaju handa',
    english: 'Couple argues frequently',
    nepali: 'दम्पतीको झगडा बारम्बार हुन्छ',
    type: 'expression',
    example: {
      korean: '사소한 일로 부부 싸움을 자주 해요.',
      english: 'We frequently argue as a couple over trivial things.',
      nepali: 'सानातिना कुरामा दम्पतीको झगडा बारम्बार हुन्छ।'
    }
  }
];

// Section 3: Health/Career/Financial Problems (건강/진로/경제 고민)
export const healthCareerVocabulary = [
  {
    id: 8,
    page: 192,
    category: 'Health/Career/Financial',
    section: '건강/진로/경제 고민',
    korean: '이유 없이 자주 우울하다',
    pronunciation: 'iyu eopsi jaju uulhada',
    english: 'Often depressed for no reason',
    nepali: 'कारण बिना प्रायः उदास हुनु',
    type: 'expression',
    example: {
      korean: '요즘 이유 없이 자주 우울해요.',
      english: 'These days I\'m often depressed for no reason.',
      nepali: 'आजकल कारण बिना प्रायः उदास हुन्छु।'
    }
  },
  {
    id: 9,
    page: 192,
    category: 'Health/Career/Financial',
    section: '건강/진로/경제 고민',
    korean: '만성 피로와 불면증이 있다',
    pronunciation: 'manseong pirogwa bulmyeonjeongi itda',
    english: 'Have chronic fatigue and insomnia',
    nepali: 'दीर्घकालीन थकान र निद्रा नलाग्ने छ',
    type: 'expression',
    example: {
      korean: '일이 많아서 만성 피로와 불면증이 있어요.',
      english: 'I have chronic fatigue and insomnia because of too much work.',
      nepali: 'काम धेरै भएर दीर्घकालीन थकान र निद्रा नलाग्ने समस्या छ।'
    }
  },
  {
    id: 10,
    page: 192,
    category: 'Health/Career/Financial',
    section: '건강/진로/경제 고민',
    korean: '진로가 불투명하다',
    pronunciation: 'jinroga bultumyeonghada',
    english: 'Career path is unclear',
    nepali: 'करियर अस्पष्ट छ',
    type: 'expression',
    example: {
      korean: '졸업 후에 진로가 불투명해서 걱정이에요.',
      english: 'I\'m worried because my career path after graduation is unclear.',
      nepali: 'स्नातक पछि करियर अस्पष्ट भएर चिन्ता छ।'
    }
  },
  {
    id: 11,
    page: 192,
    category: 'Health/Career/Financial',
    section: '건강/진로/경제 고민',
    korean: '수입이 일정하지 않다',
    pronunciation: 'suibi iljeong-haji anta',
    english: 'Income is unstable',
    nepali: 'आम्दानी अस्थिर छ',
    type: 'expression',
    example: {
      korean: '프리랜서라서 수입이 일정하지 않아요.',
      english: 'Because I\'m a freelancer, my income is not stable.',
      nepali: 'फ्रिल्यान्सर भएर आम्दानी अस्थिर छ।'
    }
  }
];

// Section 4: Expressions Related to Worries (고민 관련 표현)
export const expressionsVocabulary = [
  {
    id: 12,
    page: 193,
    category: 'Worry Expressions',
    section: '고민 관련 표현',
    korean: '머리가 복잡하다',
    pronunciation: 'meoriga bokjapada',
    english: 'Mind is tangled/complicated',
    nepali: 'दिमाग अलमलिएको',
    type: 'expression',
    example: {
      korean: '고민이 많아서 머리가 복잡해요.',
      english: 'My mind is tangled because I have many worries.',
      nepali: 'चिन्ता धेरै भएर दिमाग अलमलिएको छ।'
    }
  },
  {
    id: 13,
    page: 193,
    category: 'Worry Expressions',
    section: '고민 관련 표현',
    korean: '신경이 쓰이다',
    pronunciation: 'singyeongi sseuida',
    english: 'Something bothering (one\'s mind)',
    nepali: 'चिन्ता लाग्ने',
    type: 'expression',
    example: {
      korean: '내일 시험이 신경이 쓰여요.',
      english: 'Tomorrow\'s exam is bothering me.',
      nepali: 'भोलिको परीक्षाको चिन्ता लाग्छ।'
    }
  },
  {
    id: 14,
    page: 193,
    category: 'Worry Expressions',
    section: '고민 관련 표현',
    korean: '속이 타다',
    pronunciation: 'sogi tada',
    english: 'Feel anxious/worried (burning inside)',
    nepali: 'चिन्तित हुनु (भित्र जल्ने)',
    type: 'expression',
    example: {
      korean: '아이가 아파서 속이 타요.',
      english: 'I\'m worried because my child is sick.',
      nepali: 'बच्चा बिरामी भएर चिन्तित छु।'
    }
  },
  {
    id: 15,
    page: 193,
    category: 'Worry Expressions',
    section: '고민 관련 표현',
    korean: '골치가 아프다',
    pronunciation: 'golchiga apeuda',
    english: 'Troubled/headache (figurative)',
    nepali: 'टाउको दुख्ने (लाक्षणिक)',
    type: 'expression',
    example: {
      korean: '이 문제 때문에 골치가 아파요.',
      english: 'I\'m troubled because of this problem.',
      nepali: 'यो समस्याको कारण टाउको दुखेको छ।'
    }
  },
  {
    id: 16,
    page: 193,
    category: 'Worry Expressions',
    section: '고민 관련 표현',
    korean: '고민을 털어놓다',
    pronunciation: 'gomineul teoreonota',
    english: 'Open up about worries',
    nepali: 'चिन्ता खोल्ने',
    type: 'expression',
    example: {
      korean: '친구에게 고민을 털어놓으니 마음이 편해졌어요.',
      english: 'After opening up about my worries to my friend, I felt better.',
      nepali: 'साथीलाई चिन्ता खोलेपछि मन हल्का भयो।'
    }
  },
  {
    id: 17,
    page: 193,
    category: 'Worry Expressions',
    section: '고민 관련 표현',
    korean: '조언을 구하다',
    pronunciation: 'joeoneul guhada',
    english: 'Seek advice',
    nepali: 'सल्लाह लिने',
    type: 'expression',
    example: {
      korean: '선배에게 진로에 대해 조언을 구했어요.',
      english: 'I sought advice from my senior about my career path.',
      nepali: 'सिनियरसँग करियरको बारेमा सल्लाह लिएँ।'
    }
  },
  {
    id: 18,
    page: 193,
    category: 'Worry Expressions',
    section: '고민 관련 표현',
    korean: '상담을 받다',
    pronunciation: 'sangdameul batda',
    english: 'Receive counseling',
    nepali: 'परामर्श लिने',
    type: 'expression',
    example: {
      korean: '전문 상담사에게 상담을 받았어요.',
      english: 'I received counseling from a professional counselor.',
      nepali: 'पेशेवर परामर्शदाताबाट परामर्श लिएँ।'
    }
  }
];

// Section 5: Health Terms (건강 관련 용어)
export const healthTermsVocabulary = [
  {
    id: 19,
    page: 193,
    category: 'Health Terms',
    section: '건강 관련 용어',
    korean: '우울증',
    pronunciation: 'uuljeung',
    english: 'Depression',
    nepali: 'डिप्रेसन',
    type: 'noun',
    example: {
      korean: '우울증은 마음의 감기라고 합니다.',
      english: 'Depression is called the cold of the mind.',
      nepali: 'डिप्रेसनलाई मनको रुघा भनिन्छ।'
    }
  },
  {
    id: 20,
    page: 193,
    category: 'Health Terms',
    section: '건강 관련 용어',
    korean: '고혈압',
    pronunciation: 'gohyeorap',
    english: 'High blood pressure',
    nepali: 'उच्च रक्तचाप',
    type: 'noun',
    example: {
      korean: '스트레스가 많으면 고혈압이 생길 수 있어요.',
      english: 'If you have a lot of stress, you can develop high blood pressure.',
      nepali: 'तनाव धेरै भएमा उच्च रक्तचाप हुन सक्छ।'
    }
  },
  {
    id: 21,
    page: 193,
    category: 'Health Terms',
    section: '건강 관련 용어',
    korean: '당뇨',
    pronunciation: 'dangnyo',
    english: 'Diabetes',
    nepali: 'मधुमेह',
    type: 'noun',
    example: {
      korean: '당뇨가 있으면 식습관을 조절해야 해요.',
      english: 'If you have diabetes, you need to control your eating habits.',
      nepali: 'मधुमेह भएमा खानपानको बानी नियन्त्रण गर्नुपर्छ।'
    }
  }
];

// Combined vocabulary
export const allVocabulary = [
  ...interpersonalVocabulary,
  ...familyVocabulary,
  ...healthCareerVocabulary,
  ...expressionsVocabulary,
  ...healthTermsVocabulary
];

// ============================================
// PAGE 194 - 문법 (Grammar)
// ============================================

export const grammar1 = {
  id: 1,
  page: 194,
  pattern: "-(으)려던 참이다",
  meaning: {
    english: "I was just about to",
    nepali: "म भर्खरै गर्न लागेको थिएँ"
  },
  description: {
    english: "This pattern expresses that the speaker was just about to do something when the situation mentioned arose. It conveys coincidental timing - the action was intended but hadn't started yet.",
    nepali: "यो ढाँचाले बोल्ने व्यक्ति भर्खरै केहि गर्न लागेको थियो भन्ने कुरा व्यक्त गर्छ जब उल्लेखित परिस्थिति उत्पन्न भयो। यसले संयोगी समयलाई व्यक्त गर्छ - कार्य योजनामा थियो तर सुरु भएको थिएन।"
  },
  whenToUse: {
    situations: [
      {
        situation: {
          english: "About to contact someone when they contact you first",
          nepali: "कसैलाई सम्पर्क गर्न लागेको बेला उनीहरूले पहिले सम्पर्क गर्दा"
        },
        example: {
          korean: '안 그래도 잘 해결됐다고 문자를 드리려던 참이었어요.',
          english: 'I was just about to text you that it was resolved well.',
          nepali: 'त्यसो नभए पनि राम्ररी समाधान भयो भनेर म्यासेज पठाउन लागेको थिएँ।'
        }
      },
      {
        situation: {
          english: "Coincidentally about to do the same thing",
          nepali: "संयोगवश उही काम गर्न लागेको"
        },
        example: {
          korean: '저도 마침 점심 먹으려던 참이었는데 잘됐네요.',
          english: 'I was just about to eat lunch too, so that works out well.',
          nepali: 'म पनि भर्खरै खाजा खान लागेको थिएँ, राम्रो भयो।'
        }
      },
      {
        situation: {
          english: "About to leave",
          nepali: "जान लागेको"
        },
        example: {
          korean: '지금 출발하려던 참이었습니다.',
          english: 'I was just about to leave.',
          nepali: 'अहिले निस्कन लागेको थिएँ।'
        }
      }
    ]
  },
  whereToUse: {
    english: "Used in both spoken and written Korean. Common in everyday conversation to express coincidental timing.",
    nepali: "बोलेको र लेखेको दुवै कोरियनमा प्रयोग गरिन्छ। संयोगी समय व्यक्त गर्न दैनिक कुराकानीमा सामान्य।"
  },
  formality: {
    english: "Neutral. Can be used in both formal and informal settings.",
    nepali: "तटस्थ। औपचारिक र अनौपचारिक दुवै सेटिङमा प्रयोग गर्न सकिन्छ।"
  },
  formation: {
    rule: "Verb stem + (으)려던 참이다",
    notes: {
      english: "If the verb stem ends in a consonant, use -으려던 참이다. If it ends in a vowel, use -려던 참이다. 참 means 'moment/occasion.' The past tense form -려던 참이었다 is more common.",
      nepali: "Verb stem व्यञ्जनमा अन्त्य भएमा -으려던 참이다 प्रयोग गर्नुहोस्। स्वरमा अन्त्य भएमा -려던 참이다 प्रयोग गर्नुहोस्। 참 को अर्थ 'क्षण/अवसर' हो। भूतकाल रूप -려던 참이었다 बढी सामान्य छ।"
    },
    conjugationTable: [
      {
        verb: '드리다',
        stem: '드리',
        result: '드리려던 참이다',
        english: 'Was just about to give (polite)',
        nepali: 'दिन लागेको थियो (नम्र)'
      },
      {
        verb: '먹다',
        stem: '먹',
        result: '먹으려던 참이다',
        english: 'Was just about to eat',
        nepali: 'खान लागेको थियो'
      },
      {
        verb: '출발하다',
        stem: '출발하',
        result: '출발하려던 참이다',
        english: 'Was just about to depart',
        nepali: 'निस्कन लागेको थियो'
      },
      {
        verb: '전화하다',
        stem: '전화하',
        result: '전화하려던 참이다',
        english: 'Was just about to call',
        nepali: 'फोन गर्न लागेको थियो'
      }
    ]
  },
  comparisonWithSimilar: {
    english: "Compare with -(으)려고 하다 ('planning to do'): -(으)려던 참이다 emphasizes the coincidental timing and that the action was imminent, while -(으)려고 하다 simply expresses intention.",
    nepali: "-(으)려고 하다 ('गर्ने योजना') सँग तुलना: -(으)려던 참이다 ले संयोगी समय र कार्य आसन्न भएको जोड दिन्छ, जबकि -(으)려고 하다 ले केवल उद्देश्य व्यक्त गर्छ।"
  },
  examples: [
    {
      context: { english: 'Coincidental contact', nepali: 'संयोगी सम्पर्क' },
      korean: '안 그래도 잘 해결됐다고 문자를 드리려던 참이었어요.',
      english: 'I was just about to text you that it was resolved well.',
      nepali: 'त्यसो नभए पनि राम्ररी समाधान भयो भनेर म्यासेज पठाउन लागेको थिएँ।'
    },
    {
      context: { english: 'Lunch timing', nepali: 'खाजाको समय' },
      korean: '저도 마침 점심 먹으려던 참이었는데 잘됐네요.',
      english: 'I was just about to eat lunch too, so that works out well.',
      nepali: 'म पनि भर्खरै खाजा खान लागेको थिएँ, राम्रो भयो।'
    },
    {
      context: { english: 'About to depart', nepali: 'निस्कन लागेको' },
      korean: '지금 출발하려던 참이었습니다.',
      english: 'I was just about to leave.',
      nepali: 'अहिले निस्कन लागेको थिएँ।'
    },
    {
      context: { english: 'About to call', nepali: 'फोन गर्न लागेको' },
      korean: '마침 전화하려던 참이었어요.',
      english: 'I was just about to call.',
      nepali: 'भर्खरै फोन गर्न लागेको थिएँ।'
    }
  ]
};

export const grammar2 = {
  id: 2,
  page: 194,
  pattern: "-자마자",
  meaning: {
    english: "As soon as",
    nepali: "गर्नेबित्तिकै"
  },
  description: {
    english: "This pattern expresses that the second action happens immediately after the first action is completed. There is no time gap between the two actions.",
    nepali: "यो ढाँचाले पहिलो कार्य पूरा हुनेबित्तिकै दोस्रो कार्य हुन्छ भन्ने व्यक्त गर्छ। दुई कार्यहरूबीच कुनै समय अन्तर छैन।"
  },
  whenToUse: {
    situations: [
      {
        situation: {
          english: "Forgetting right after memorizing",
          nepali: "सिकेपछि तुरुन्तै बिर्सने"
        },
        example: {
          korean: '외우자마자 잊어버려요.',
          english: 'I forget as soon as I memorize it.',
          nepali: 'सिक्नेबित्तिकै बिर्सन्छु।'
        }
      },
      {
        situation: {
          english: "Plans after graduation",
          nepali: 'स्नातक पछिको योजना'
        },
        example: {
          korean: '졸업하자마자 일단 귀국해야 할 것 같아요.',
          english: 'As soon as I graduate, I think I need to return to my country first.',
          nepali: 'स्नातक हुनेबित्तिकै पहिले स्वदेश फर्कनुपर्ने लाग्छ।'
        }
      },
      {
        situation: {
          english: "Too tired after work",
          nepali: "काम पछि धेरै थकित"
        },
        example: {
          korean: '집에 돌아가자마자 씻지도 못하고 자요.',
          english: 'As soon as I get home, I fall asleep without even washing.',
          nepali: 'घर फर्कनेबित्तिकै नुहाउन नपाई सुत्छु।'
        }
      },
      {
        situation: {
          english: "Emotional reaction",
          nepali: "भावनात्मक प्रतिक्रिया"
        },
        example: {
          korean: '어머니의 목소리를 듣자마자 눈물이 났어요.',
          english: 'As soon as I heard my mother\'s voice, tears came out.',
          nepali: 'आमाको आवाज सुन्नेबित्तिकै आँसु आयो।'
        }
      }
    ]
  },
  whereToUse: {
    english: "Used in both spoken and written Korean. Very common in everyday conversation and narrative writing.",
    nepali: "बोलेको र लेखेको दुवै कोरियनमा प्रयोग गरिन्छ। दैनिक कुराकानी र कथा लेखनमा धेरै सामान्य।"
  },
  formality: {
    english: "Neutral. Can be used in both formal and informal settings.",
    nepali: "तटस्थ। औपचारिक र अनौपचारिक दुवै सेटिङमा प्रयोग गर्न सकिन्छ।"
  },
  formation: {
    rule: "Verb stem + 자마자",
    notes: {
      english: "Simply attach 자마자 to the verb stem. No special changes needed regardless of the final consonant. This pattern can only be used with action verbs, not descriptive verbs (adjectives).",
      nepali: "Verb stem मा सिधै 자마자 जोड्नुहोस्। अन्तिम व्यञ्जनको ध्यान नराखी कुनै विशेष परिवर्तन आवश्यक छैन। यो ढाँचा क्रिया verb मा मात्र प्रयोग गर्न सकिन्छ, विशेषण verb मा होइन।"
    },
    conjugationTable: [
      {
        verb: '외우다',
        stem: '외우',
        result: '외우자마자',
        english: 'As soon as memorizing',
        nepali: 'सिक्नेबित्तिकै'
      },
      {
        verb: '졸업하다',
        stem: '졸업하',
        result: '졸업하자마자',
        english: 'As soon as graduating',
        nepali: 'स्नातक हुनेबित्तिकै'
      },
      {
        verb: '돌아가다',
        stem: '돌아가',
        result: '돌아가자마자',
        english: 'As soon as returning',
        nepali: 'फर्कनेबित्तिकै'
      },
      {
        verb: '듣다',
        stem: '듣',
        result: '듣자마자',
        english: 'As soon as hearing',
        nepali: 'सुन्नेबित्तिकै'
      }
    ]
  },
  comparisonWithSimilar: {
    english: "Compare with -고 나서 ('after doing'): -자마자 emphasizes immediacy (no gap), while -고 나서 simply indicates sequence (after completing). Also compare with -(으)ㄴ 후에 which means 'after' but doesn't imply immediacy.",
    nepali: "-고 나서 ('गरेपछि') सँग तुलना: -자마자 ले तत्कालता (कुनै अन्तर छैन) जोड दिन्छ, जबकि -고 나서 ले केवल क्रम (पूरा गरेपछि) जनाउँछ।"
  },
  examples: [
    {
      context: { english: 'Studying difficulty', nepali: 'अध्ययनको कठिनाइ' },
      korean: '외우자마자 잊어버려요.',
      english: 'I forget as soon as I memorize it.',
      nepali: 'सिक्नेबित्तिकै बिर्सन्छु।'
    },
    {
      context: { english: 'Post-graduation plans', nepali: 'स्नातक पछिको योजना' },
      korean: '졸업하자마자 일단 귀국해야 할 것 같아요.',
      english: 'As soon as I graduate, I think I need to return to my country first.',
      nepali: 'स्नातक हुनेबित्तिकै पहिले स्वदेश फर्कनुपर्ने लाग्छ।'
    },
    {
      context: { english: 'Exhaustion after work', nepali: 'काम पछि थकान' },
      korean: '집에 돌아가자마자 씻지도 못하고 자요.',
      english: 'As soon as I get home, I fall asleep without even washing.',
      nepali: 'घर फर्कनेबित्तिकै नुहाउन नपाई सुत्छु।'
    },
    {
      context: { english: 'Missing family', nepali: 'परिवारको याद' },
      korean: '어머니의 목소리를 듣자마자 눈물이 났어요.',
      english: 'As soon as I heard my mother\'s voice, tears came out.',
      nepali: 'आमाको आवाज सुन्नेबित्तिकै आँसु आयो।'
    }
  ]
};

// ============================================
// PAGE 195 - 말하기 (Speaking)
// ============================================

export const speaking = {
  page: 195,
  title: {
    korean: '한국어 공부 고민',
    english: 'Korean Study Concerns',
    nepali: 'कोरियन पढाइको चिन्ता'
  },
  mainDialogue: {
    id: 1,
    title: {
      korean: '한국어 공부 고민',
      english: 'Korean Study Concerns',
      nepali: 'कोरियन पढाइको चिन्ता'
    },
    situation: {
      korean: '아나이스가 선배에게 한국어 공부가 잘 안 되는 고민을 이야기하고 있습니다.',
      english: 'Anais is talking to a senior about her concern that her Korean studies aren\'t improving.',
      nepali: 'अनाइस सिनियरसँग कोरियन पढाइ राम्रो नभइरहेको चिन्ता बारे कुरा गर्दैछिन्।'
    },
    conversation: [
      {
        speaker: '아나이스',
        korean: '선배, 요즘 한국어 공부가 너무 안 돼서 고민이에요.',
        english: 'Senior, I\'m worried because my Korean studies aren\'t going well these days.',
        nepali: 'सिनियर, आजकल कोरियन पढाइ राम्रो भइरहेको छैन, चिन्ता लाग्छ।'
      },
      {
        speaker: '선배',
        korean: '어떤 점이 힘들어요?',
        english: 'What part is difficult?',
        nepali: 'कुन भाग कठिन छ?'
      },
      {
        speaker: '아나이스',
        korean: '단어를 외우자마자 잊어버려요. 한국어 실력이 제자리걸음이에요.',
        english: 'I forget words as soon as I memorize them. My Korean skills are stagnating.',
        nepali: 'शब्दहरू सिक्नेबित्तिकै बिर्सन्छु। कोरियाली भाषा सीप स्थिर छ।'
      },
      {
        speaker: '선배',
        korean: '안 그래도 좋은 방법을 알려 드리려던 참이었어요.',
        english: 'I was just about to tell you a good method.',
        nepali: 'त्यसो नभए पनि राम्रो तरिका बताउन लागेको थिएँ।'
      },
      {
        speaker: '아나이스',
        korean: '정말요? 어떤 방법이에요?',
        english: 'Really? What method?',
        nepali: 'साँच्चै? कुन तरिका हो?'
      },
      {
        speaker: '선배',
        korean: '한국 드라마를 보면서 따라 말해 보세요. 자연스럽게 표현을 익힐 수 있어요.',
        english: 'Try watching Korean dramas and repeating after them. You can naturally learn expressions.',
        nepali: 'कोरियन ड्रामा हेर्दै पछि दोहोर्‍याउनुहोस्। स्वाभाविक रूपमा अभिव्यक्तिहरू सिक्न सक्नुहुन्छ।'
      },
      {
        speaker: '아나이스',
        korean: '좋은 방법이네요! 한번 해 볼게요. 감사합니다.',
        english: 'That\'s a good method! I\'ll try it. Thank you.',
        nepali: 'राम्रो तरिका! एक पटक प्रयास गर्छु। धन्यवाद।'
      }
    ],
    keyExpressions: [
      {
        korean: '외우자마자 잊어버려요',
        english: 'I forget as soon as I memorize',
        nepali: 'सिक्नेबित्तिकै बिर्सन्छु',
        explanation: 'Using -자마자 to express immediate sequence'
      },
      {
        korean: '알려 드리려던 참이었어요',
        english: 'I was just about to tell you',
        nepali: 'बताउन लागेको थिएँ',
        explanation: 'Using -(으)려던 참이다 for coincidental timing'
      }
    ]
  }
};

// ============================================
// PAGE 196 - 듣기 (Listening)
// ============================================

export const listeningDialogue = {
  id: 2,
  page: 196,
  title: {
    korean: '직업 상담',
    english: 'Job Counseling',
    nepali: 'रोजगारी परामर्श'
  },
  situation: {
    korean: '상담사와 잠시드가 직업 변경에 대해 상담하고 있습니다.',
    english: 'A counselor and Jamshid are discussing a job change.',
    nepali: 'परामर्शदाता र जमशिद रोजगारी परिवर्तनको बारेमा परामर्श गर्दैछन्।'
  },
  conversation: [
    {
      speaker: '상담사',
      korean: '잠시드 씨, 어떤 고민이 있으세요?',
      english: 'Jamshid, what concerns do you have?',
      nepali: 'जमशिद, कस्तो चिन्ता छ?'
    },
    {
      speaker: '잠시드',
      korean: '지금 이사 회사에서 일하고 있는데, 다른 일을 하고 싶어요.',
      english: 'I\'m currently working at a moving company, but I want to do different work.',
      nepali: 'अहिले सामान सार्ने कम्पनीमा काम गर्दैछु, तर फरक काम गर्न चाहन्छु।'
    },
    {
      speaker: '상담사',
      korean: '어떤 일을 하고 싶으세요?',
      english: 'What kind of work would you like to do?',
      nepali: 'कस्तो काम गर्न चाहनुहुन्छ?'
    },
    {
      speaker: '잠시드',
      korean: '운전을 좋아해서 배달 일이나 택시 운전을 하고 싶어요.',
      english: 'I like driving, so I want to do delivery work or drive a taxi.',
      nepali: 'ड्राइभिङ मनपर्ने भएर डेलिभरी काम वा ट्याक्सी चलाउन चाहन्छु।'
    },
    {
      speaker: '상담사',
      korean: '그러면 먼저 운전면허증이 있어야 해요. 운전면허증이 있으세요?',
      english: 'Then first you need a driver\'s license. Do you have one?',
      nepali: 'त्यसो भए पहिले ड्राइभिङ लाइसेन्स चाहिन्छ। ड्राइभिङ लाइसेन्स छ?'
    },
    {
      speaker: '잠시드',
      korean: '한국 면허증은 아직 없어요. 고향에서 딴 것은 있는데요.',
      english: 'I don\'t have a Korean license yet. I have one from my hometown though.',
      nepali: 'कोरियन लाइसेन्स अझै छैन। घरबाट लिएको एउटा छ।'
    },
    {
      speaker: '상담사',
      korean: '그러면 한국 운전면허 시험을 보는 것을 추천해요. 면허를 따자마자 바로 일을 시작할 수 있을 거예요.',
      english: 'Then I recommend taking the Korean driver\'s license test. As soon as you get the license, you should be able to start working right away.',
      nepali: 'त्यसो भए कोरियन ड्राइभिङ लाइसेन्स परीक्षा दिन सिफारिस गर्छु। लाइसेन्स पाउनेबित्तिकै तुरुन्तै काम सुरु गर्न सक्नुहुनेछ।'
    }
  ],
  keyExpressions: [
    {
      korean: '면허를 따자마자',
      english: 'As soon as you get the license',
      nepali: 'लाइसेन्स पाउनेबित्तिकै',
      explanation: 'Using -자마자 to express immediate timing after getting the license'
    },
    {
      korean: '운전면허증이 있어야 해요',
      english: 'You need a driver\'s license',
      nepali: 'ड्राइभिङ लाइसेन्स चाहिन्छ',
      explanation: 'Expressing a necessary requirement'
    }
  ]
};

// ============================================
// PAGES 197-198 - 읽기 (Reading)
// ============================================

export const readings = [
  {
    id: 1,
    page: 197,
    title: {
      korean: '마음의 감기, 우울증 자가 진단과 극복 방법',
      english: 'The Cold of the Mind: Depression Self-Diagnosis and Coping Methods',
      nepali: 'मनको रुघा: डिप्रेसन स्व-निदान र समाधान तरिकाहरू'
    },
    content: {
      korean: `우울증은 '마음의 감기'라고 불린다. 감기처럼 누구에게나 찾아올 수 있는 흔한 질환이기 때문이다.

다음 증상 중 5개 이상이 2주 이상 계속된다면 우울증을 의심해 볼 수 있다.
- 매일 우울한 기분이 든다.
- 모든 일에 흥미와 즐거움이 없다.
- 식욕이 줄거나 늘었다.
- 잠을 못 자거나 너무 많이 잔다.
- 피로감을 느끼고 기운이 없다.
- 집중하기 어렵다.
- 자신이 가치 없다고 느낀다.

우울증은 조기에 발견하면 충분히 치료할 수 있다. 우울한 감정이 계속되면 혼자 참지 말고 전문가의 도움을 받는 것이 중요하다. 규칙적인 운동, 충분한 수면, 친구나 가족과의 대화도 우울증 극복에 도움이 된다.`,
      english: `Depression is called the 'cold of the mind.' This is because, like a cold, it can come to anyone and is a common illness.

If 5 or more of the following symptoms continue for more than 2 weeks, you may suspect depression:
- You feel depressed mood every day.
- You have no interest or pleasure in anything.
- Your appetite has decreased or increased.
- You can't sleep or sleep too much.
- You feel fatigued and have no energy.
- It's hard to concentrate.
- You feel worthless.

Depression can be fully treated if caught early. If depressed feelings continue, it's important not to endure it alone but to seek professional help. Regular exercise, sufficient sleep, and conversation with friends or family also help in overcoming depression.`,
      nepali: `डिप्रेसनलाई 'मनको रुघा' भनिन्छ। किनभने रुघा जस्तै यो जोसुकैलाई आउन सक्ने सामान्य रोग हो।

यदि निम्न लक्षणहरूमध्ये ५ वा बढी २ हप्ताभन्दा बढी समयसम्म जारी रह्यो भने डिप्रेसनको शंका गर्न सकिन्छ:
- हरेक दिन उदास मनोदशा लाग्छ।
- कुनै पनि कुरामा रुचि र आनन्द छैन।
- भोक घटेको वा बढेको छ।
- निद्रा लाग्दैन वा धेरै सुतिन्छ।
- थकान लाग्छ र ऊर्जा छैन।
- ध्यान केन्द्रित गर्न गाह्रो छ।
- आफू बेमूल्य भएको महसुस हुन्छ।

डिप्रेसन चाँडो पत्ता लागेमा पूर्ण रूपमा उपचार गर्न सकिन्छ। उदास भावना जारी रहेमा एक्लै सहन नगरी विशेषज्ञको सहायता लिनु महत्त्वपूर्ण छ। नियमित व्यायाम, पर्याप्त निद्रा, र साथी वा परिवारसँगको कुराकानी पनि डिप्रेसन जित्न सहयोगी हुन्छ।`
    },
    vocabulary: [
      { korean: '우울증', english: 'depression', nepali: 'डिप्रेसन' },
      { korean: '증상', english: 'symptom', nepali: 'लक्षण' },
      { korean: '식욕', english: 'appetite', nepali: 'भोक' },
      { korean: '피로감', english: 'fatigue', nepali: 'थकान' },
      { korean: '조기', english: 'early stage', nepali: 'प्रारम्भिक अवस्था' },
      { korean: '극복', english: 'overcoming', nepali: 'जित्ने' }
    ],
    comprehensionQuestions: [
      {
        question: {
          korean: '우울증을 왜 \'마음의 감기\'라고 합니까?',
          english: 'Why is depression called the "cold of the mind"?',
          nepali: 'डिप्रेसनलाई किन "मनको रुघा" भनिन्छ?'
        },
        answer: {
          korean: '감기처럼 누구에게나 찾아올 수 있는 흔한 질환이기 때문입니다.',
          english: 'Because it is a common illness that can come to anyone, just like a cold.',
          nepali: 'किनभने रुघा जस्तै यो जोसुकैलाई आउन सक्ने सामान्य रोग हो।'
        }
      },
      {
        question: {
          korean: '우울증 극복에 도움이 되는 것은 무엇입니까?',
          english: 'What helps in overcoming depression?',
          nepali: 'डिप्रेसन जित्न के-के सहयोगी हुन्छ?'
        },
        answer: {
          korean: '규칙적인 운동, 충분한 수면, 친구나 가족과의 대화가 도움이 됩니다.',
          english: 'Regular exercise, sufficient sleep, and conversation with friends or family help.',
          nepali: 'नियमित व्यायाम, पर्याप्त निद्रा, र साथी वा परिवारसँगको कुराकानी सहयोगी हुन्छ।'
        }
      }
    ]
  }
];

// ============================================
// PAGE 200 - 문화 (Culture)
// ============================================

export const culture = {
  page: 200,
  title: {
    korean: '이민자 상담 센터',
    english: 'Immigrant Counseling Centers',
    nepali: 'अप्रवासी परामर्श केन्द्रहरू'
  },
  sections: [
    {
      subtitle: {
        korean: '외국인 근로자 지원 센터',
        english: 'Foreign Workers Support Center',
        nepali: 'विदेशी कामदार सहायता केन्द्र'
      },
      content: {
        korean: '외국인 근로자 지원 센터에서는 외국인 근로자를 위한 무료 상담 서비스를 제공합니다. 임금 체불, 산업 재해, 직장 내 갈등 등의 문제에 대해 상담받을 수 있습니다.',
        english: 'The Foreign Workers Support Center provides free counseling services for foreign workers. You can receive counseling on issues such as unpaid wages, industrial accidents, and workplace conflicts.',
        nepali: 'विदेशी कामदार सहायता केन्द्रले विदेशी कामदारहरूको लागि निःशुल्क परामर्श सेवा प्रदान गर्दछ। तलब नदिइएको, औद्योगिक दुर्घटना, कार्यस्थलका विवाद आदि समस्याहरूमा परामर्श लिन सकिन्छ।'
      }
    },
    {
      subtitle: {
        korean: '서울 글로벌 센터',
        english: 'Seoul Global Center',
        nepali: 'सियोल ग्लोबल सेन्टर'
      },
      content: {
        korean: '서울 글로벌 센터에서는 서울에 거주하는 외국인을 위해 생활 정보, 법률 상담, 한국어 교육 등 다양한 서비스를 제공합니다.',
        english: 'The Seoul Global Center provides various services for foreigners living in Seoul, including living information, legal counseling, and Korean language education.',
        nepali: 'सियोल ग्लोबल सेन्टरले सियोलमा बस्ने विदेशीहरूको लागि जीवन जानकारी, कानुनी परामर्श, कोरियन भाषा शिक्षा लगायत विभिन्न सेवाहरू प्रदान गर्दछ।'
      }
    },
    {
      subtitle: {
        korean: '다문화 가족 지원 센터',
        english: 'Multicultural Family Support Centers',
        nepali: 'बहुसांस्कृतिक परिवार सहायता केन्द्रहरू'
      },
      content: {
        korean: '다문화 가족 지원 센터에서는 결혼 이민자와 다문화 가정을 위한 한국어 교육, 가족 상담, 취업 지원 등의 서비스를 제공합니다. 전국에 200개 이상의 센터가 있습니다.',
        english: 'Multicultural Family Support Centers provide services such as Korean language education, family counseling, and employment support for marriage immigrants and multicultural families. There are over 200 centers nationwide.',
        nepali: 'बहुसांस्कृतिक परिवार सहायता केन्द्रहरूले विवाह अप्रवासी र बहुसांस्कृतिक परिवारहरूको लागि कोरियन भाषा शिक्षा, पारिवारिक परामर्श, रोजगारी सहायता जस्ता सेवाहरू प्रदान गर्दछन्। देशभरमा २०० भन्दा बढी केन्द्रहरू छन्।'
      }
    }
  ],
  tips: [
    {
      korean: '외국인 상담 전화번호 1345에서 다국어 상담을 받을 수 있습니다.',
      english: 'You can receive multilingual counseling at the foreigner counseling hotline 1345.',
      nepali: 'विदेशी परामर्श हटलाइन १३४५ मा बहुभाषिक परामर्श प्राप्त गर्न सकिन्छ।'
    },
    {
      korean: '정신 건강 위기 상담 전화는 1577-0199입니다.',
      english: 'The mental health crisis counseling hotline is 1577-0199.',
      nepali: 'मानसिक स्वास्थ्य संकट परामर्श हटलाइन १५७७-०१९९ हो।'
    }
  ]
};

// ============================================
// Practice Exercises
// ============================================

export const practiceExercises = [
  {
    id: 1,
    type: 'vocabulary',
    question: {
      korean: '한국어 실력이 늘지 않고 그대로인 것을 무엇이라고 합니까?',
      english: 'What do you call it when Korean skills don\'t improve and stay the same?',
      nepali: 'कोरियाली भाषा सीप नबढेर उस्तै रहेको अवस्थालाई के भनिन्छ?'
    },
    options: [
      { korean: '한국어 실력이 제자리걸음이다', english: 'Korean skills are stagnating' },
      { korean: '한국어 실력이 늘었다', english: 'Korean skills improved' },
      { korean: '한국어 실력이 좋다', english: 'Korean skills are good' },
      { korean: '한국어를 잘한다', english: 'Good at Korean' }
    ],
    correctAnswer: 0,
    explanation: {
      korean: '제자리걸음은 발전 없이 같은 자리에 머무는 것을 의미합니다.',
      english: '제자리걸음 means staying in the same place without progress.',
      nepali: '제자리걸음 को अर्थ प्रगति बिना उही ठाउँमा रहनु हो।'
    }
  },
  {
    id: 2,
    type: 'grammar',
    question: {
      korean: '"외우___ 잊어버려요"에서 빈칸에 알맞은 것은?',
      english: 'What goes in the blank: "I forget ___ I memorize"?',
      nepali: 'खाली ठाउँमा के आउँछ?'
    },
    options: [
      { korean: '자마자', english: 'as soon as' },
      { korean: '고 나서', english: 'after' },
      { korean: '기 전에', english: 'before' },
      { korean: '면서', english: 'while' }
    ],
    correctAnswer: 0,
    explanation: {
      korean: '-자마자는 첫 번째 동작이 끝나자마자 바로 두 번째 동작이 일어남을 나타냅니다.',
      english: '-자마자 indicates the second action happens immediately after the first.',
      nepali: '-자마자 ले पहिलो कार्य पूरा हुनेबित्तिकै तुरुन्तै दोस्रो कार्य हुन्छ भन्ने जनाउँछ।'
    }
  },
  {
    id: 3,
    type: 'grammar',
    question: {
      korean: '"안 그래도 문자를 ___"에서 빈칸에 알맞은 것은?',
      english: 'What goes in the blank: "I was just about to text ___"?',
      nepali: 'खाली ठाउँमा के आउँछ?'
    },
    options: [
      { korean: '드리려던 참이었어요', english: 'was just about to give' },
      { korean: '드리고 싶어요', english: 'want to give' },
      { korean: '드렸어요', english: 'gave' },
      { korean: '드릴 거예요', english: 'will give' }
    ],
    correctAnswer: 0,
    explanation: {
      korean: '-(으)려던 참이다는 마침 어떤 행동을 하려고 했을 때 사용합니다.',
      english: '-(으)려던 참이다 is used when you were just about to do something.',
      nepali: '-(으)려던 참이다 भर्खरै केहि गर्न लागेको बेलामा प्रयोग गरिन्छ।'
    }
  },
  {
    id: 4,
    type: 'vocabulary',
    question: {
      korean: '마음속의 걱정을 다른 사람에게 말하는 것을 무엇이라고 합니까?',
      english: 'What do you call telling your worries to someone else?',
      nepali: 'मनको चिन्ता अरूलाई भन्ने कामलाई के भनिन्छ?'
    },
    options: [
      { korean: '조언을 구하다', english: 'Seek advice' },
      { korean: '고민을 털어놓다', english: 'Open up about worries' },
      { korean: '상담을 받다', english: 'Receive counseling' },
      { korean: '골치가 아프다', english: 'Be troubled' }
    ],
    correctAnswer: 1,
    explanation: {
      korean: '고민을 털어놓다는 마음속의 걱정을 솔직하게 이야기하는 것입니다.',
      english: '고민을 털어놓다 means honestly talking about the worries in your heart.',
      nepali: '고민을 털어놓다 को अर्थ मनको चिन्ता इमानदारीपूर्वक भन्नु हो।'
    }
  },
  {
    id: 5,
    type: 'grammar',
    question: {
      korean: '"졸업하___ 귀국해야 할 것 같아요"에서 빈칸에 알맞은 것은?',
      english: 'What goes in the blank: "___ graduating, I think I need to return"?',
      nepali: 'खाली ठाउँमा के आउँछ?'
    },
    options: [
      { korean: '자마자', english: 'as soon as' },
      { korean: '려던 참에', english: 'was about to' },
      { korean: '고 나서', english: 'after' },
      { korean: '기 전에', english: 'before' }
    ],
    correctAnswer: 0,
    explanation: {
      korean: '졸업하자마자는 졸업하는 즉시를 의미합니다.',
      english: '졸업하자마자 means immediately upon graduating.',
      nepali: '졸업하자마자 को अर्थ स्नातक हुनेबित्तिकै हो।'
    }
  },
  {
    id: 6,
    type: 'vocabulary',
    question: {
      korean: '우울증은 무엇이라고 불립니까?',
      english: 'What is depression called?',
      nepali: 'डिप्रेसनलाई के भनिन्छ?'
    },
    options: [
      { korean: '마음의 감기', english: 'Cold of the mind' },
      { korean: '마음의 병', english: 'Disease of the mind' },
      { korean: '몸의 감기', english: 'Cold of the body' },
      { korean: '마음의 상처', english: 'Wound of the mind' }
    ],
    correctAnswer: 0,
    explanation: {
      korean: '우울증은 누구에게나 올 수 있는 흔한 질환이라 \'마음의 감기\'라고 합니다.',
      english: 'Depression is called \'cold of the mind\' because it is a common illness that can happen to anyone.',
      nepali: 'डिप्रेसन जोसुकैलाई आउन सक्ने सामान्य रोग भएकोले \'मनको रुघा\' भनिन्छ।'
    }
  },
  {
    id: 7,
    type: 'vocabulary',
    question: {
      korean: '외국인이 상담을 받을 수 있는 전화번호는?',
      english: 'What phone number can foreigners call for counseling?',
      nepali: 'विदेशीहरूले परामर्शको लागि कुन फोन नम्बरमा सम्पर्क गर्न सक्छन्?'
    },
    options: [
      { korean: '119', english: '119 (Fire/Emergency)' },
      { korean: '112', english: '112 (Police)' },
      { korean: '1345', english: '1345 (Foreigner counseling)' },
      { korean: '110', english: '110 (Government complaints)' }
    ],
    correctAnswer: 2,
    explanation: {
      korean: '1345는 외국인을 위한 다국어 상담 전화번호입니다.',
      english: '1345 is the multilingual counseling hotline for foreigners.',
      nepali: '१३४५ विदेशीहरूको लागि बहुभाषिक परामर्श हटलाइन हो।'
    }
  },
  {
    id: 8,
    type: 'grammar',
    question: {
      korean: '"어머니의 목소리를 ___눈물이 났어요"에서 빈칸에 알맞은 것은?',
      english: 'What goes in the blank: "___ hearing my mother\'s voice, tears came out"?',
      nepali: 'खाली ठाउँमा के आउँछ?'
    },
    options: [
      { korean: '듣자마자', english: 'as soon as hearing' },
      { korean: '듣고 나서', english: 'after hearing' },
      { korean: '들으려던', english: 'was about to hear' },
      { korean: '듣기 전에', english: 'before hearing' }
    ],
    correctAnswer: 0,
    explanation: {
      korean: '-자마자는 듣는 즉시 눈물이 난 것을 표현합니다.',
      english: '-자마자 expresses that tears came immediately upon hearing.',
      nepali: '-자마자 ले सुन्नेबित्तिकै आँसु आएको कुरा व्यक्त गर्छ।'
    }
  },
  {
    id: 9,
    type: 'vocabulary',
    question: {
      korean: '시어머니와 며느리 사이의 갈등을 무엇이라고 합니까?',
      english: 'What do you call the conflict between mother-in-law and daughter-in-law?',
      nepali: 'सासु र बुहारी बीचको विवादलाई के भनिन्छ?'
    },
    options: [
      { korean: '부부 싸움', english: 'Couple\'s fight' },
      { korean: '고부간의 갈등', english: 'Mother-in-law conflict' },
      { korean: '동료 갈등', english: 'Colleague conflict' },
      { korean: '세대 갈등', english: 'Generation conflict' }
    ],
    correctAnswer: 1,
    explanation: {
      korean: '고부간의 갈등은 시어머니(고)와 며느리(부) 사이의 갈등입니다.',
      english: '고부간의 갈등 is the conflict between mother-in-law (고) and daughter-in-law (부).',
      nepali: '고부간의 갈등 सासुआमा (고) र बुहारी (부) बीचको विवाद हो।'
    }
  },
  {
    id: 10,
    type: 'fill-in-blank',
    question: {
      korean: '저도 마침 점심 _____ 참이었는데 잘됐네요.',
      english: 'I was just about to eat lunch too, so that works out well.',
      nepali: 'म पनि भर्खरै खाजा _____ थिएँ, राम्रो भयो।'
    },
    options: [
      { korean: '먹으려던', english: 'was about to eat' },
      { korean: '먹은', english: 'ate' },
      { korean: '먹고 싶은', english: 'want to eat' },
      { korean: '먹는', english: 'eating' }
    ],
    correctAnswer: 0,
    explanation: {
      korean: '-(으)려던 참이다는 마침 하려고 했던 상황을 표현합니다.',
      english: '-(으)려던 참이다 expresses a situation where you were just about to do something.',
      nepali: '-(으)려던 참이다 ले भर्खरै गर्न लागेको अवस्था व्यक्त गर्छ।'
    }
  }
];

// ============================================
// Combined exports for App.jsx compatibility
// ============================================

export const vocabulary = allVocabulary;
export const grammar = [grammar1, grammar2];
export const dialogues = [speaking.mainDialogue, listeningDialogue];
export const readingPassages = readings;

export default {
  chapterInfo,
  interpersonalVocabulary,
  familyVocabulary,
  healthCareerVocabulary,
  expressionsVocabulary,
  healthTermsVocabulary,
  allVocabulary,
  vocabulary,
  grammar1,
  grammar2,
  grammar,
  speaking,
  listeningDialogue,
  readings,
  readingPassages,
  dialogues,
  culture,
  practiceExercises
};
