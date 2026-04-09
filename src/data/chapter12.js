// KIIP Level 3 - Chapter 12: 전통 명절 (Traditional Korean Holidays)
// Pages 156-164

export const chapterInfo = {
  chapter: 12,
  title: {
    korean: '전통 명절',
    english: 'Traditional Korean Holidays',
    nepali: 'परम्परागत चाडपर्व'
  },
  pageRange: '156-164',
  objectives: {
    vocabulary: {
      korean: '전통 명절과 풍습',
      english: 'Traditional Holidays and Customs',
      nepali: 'परम्परागत चाडपर्व र चलनहरू'
    },
    grammar: [
      {
        korean: '-아/어도',
        english: 'Even if / Even though',
        nepali: 'भए पनि / भएता पनि'
      },
      {
        korean: '-게 되다',
        english: 'Came to do / Became',
        nepali: 'हुन पुग्नु / गर्न पुग्नु'
      }
    ],
    activities: [
      {
        korean: '명절 풍습에 대해 이야기하기',
        english: 'Talking about holiday customs',
        nepali: 'चाडपर्वका चलनहरूको बारेमा कुरा गर्ने'
      },
      {
        korean: '한국의 명절에 대한 글 읽기',
        english: 'Reading about Korean holidays',
        nepali: 'कोरियाली चाडपर्वको बारेमा लेख पढ्ने'
      }
    ],
    culture: {
      korean: '강릉단오제',
      english: 'Gangneung Danoje Festival',
      nepali: 'गङ्नुङ दानोजे महोत्सव'
    }
  }
};

// ============================================
// PAGE 156 - 어휘 (Vocabulary)
// ============================================

// Section 1: Traditional Holidays (전통 명절)
export const holidayVocabulary = [
  {
    id: 1,
    page: 156,
    category: 'Holidays',
    section: '전통 명절',
    korean: '설날',
    pronunciation: 'seollal',
    english: 'Korean Lunar New Year',
    nepali: 'कोरियाली चन्द्र नयाँ वर्ष',
    type: 'noun',
    example: {
      korean: '설날에는 온 가족이 함께 모여요.',
      english: 'On Seollal, the whole family gathers together.',
      nepali: 'सोल्लालमा सबै परिवार जम्मा हुन्छन्।'
    }
  },
  {
    id: 2,
    page: 156,
    category: 'Holidays',
    section: '전통 명절',
    korean: '정월 대보름',
    pronunciation: 'jeongwol daeborum',
    english: 'Great Full Moon Festival',
    nepali: 'पूर्णिमा चाड',
    type: 'noun',
    example: {
      korean: '정월 대보름에는 보름달을 보며 소원을 빌어요.',
      english: 'On Jeongwol Daeboreum, people make wishes while looking at the full moon.',
      nepali: 'जोङ्वोल दाएबोरुममा पूर्णिमाको चन्द्रमा हेर्दै इच्छा मांग्छन्।'
    }
  },
  {
    id: 3,
    page: 156,
    category: 'Holidays',
    section: '전통 명절',
    korean: '추석',
    pronunciation: 'chuseok',
    english: 'Chuseok (Korean Harvest Festival)',
    nepali: 'चुसोक (कोरियाली बाली महोत्सव)',
    type: 'noun',
    example: {
      korean: '추석에는 송편을 만들어 먹어요.',
      english: 'On Chuseok, we make and eat songpyeon.',
      nepali: 'चुसोकमा सोङ्प्योन बनाएर खान्छन्।'
    }
  },
  {
    id: 4,
    page: 156,
    category: 'Holidays',
    section: '전통 명절',
    korean: '동지',
    pronunciation: 'dongji',
    english: 'Winter Solstice',
    nepali: 'शीतकालीन संक्रान्ति',
    type: 'noun',
    example: {
      korean: '동지에는 팥죽을 먹어요.',
      english: 'On the winter solstice, we eat red bean porridge.',
      nepali: 'शीतकालीन संक्रान्तिमा रातो सिमीको दलिया खान्छन्।'
    }
  }
];

// Section 2: Holiday Food and Activities (명절 음식과 활동)
export const holidayActivityVocabulary = [
  {
    id: 5,
    page: 156,
    category: 'Food',
    section: '명절 음식과 활동',
    korean: '떡국',
    pronunciation: 'tteokguk',
    english: 'Rice cake soup',
    nepali: 'चामलको केक सुप',
    type: 'noun',
    example: {
      korean: '설날에는 떡국을 먹으면 나이를 한 살 더 먹는다고 해요.',
      english: 'They say you get one year older when you eat tteokguk on Seollal.',
      nepali: 'सोल्लालमा त्योक्गुक खाँदा एक वर्ष थपिन्छ भनिन्छ।'
    }
  },
  {
    id: 6,
    page: 156,
    category: 'Food',
    section: '명절 음식과 활동',
    korean: '송편',
    pronunciation: 'songpyeon',
    english: 'Songpyeon (half-moon rice cake)',
    nepali: 'सोङ्प्योन (अर्ध चन्द्र चामल केक)',
    type: 'noun',
    example: {
      korean: '추석에는 가족이 함께 송편을 만들어요.',
      english: 'On Chuseok, families make songpyeon together.',
      nepali: 'चुसोकमा परिवारले सँगै सोङ्प्योन बनाउँछन्।'
    }
  },
  {
    id: 7,
    page: 156,
    category: 'Food',
    section: '명절 음식과 활동',
    korean: '팥죽',
    pronunciation: 'patjuk',
    english: 'Red bean porridge',
    nepali: 'रातो सिमीको दलिया',
    type: 'noun',
    example: {
      korean: '동지에 팥죽을 먹으면 나쁜 기운을 쫓는다고 해요.',
      english: 'They say eating red bean porridge on the winter solstice drives away bad energy.',
      nepali: 'शीतकालीन संक्रान्तिमा रातो सिमीको दलिया खाँदा नराम्रो ऊर्जा भगाउँछ भनिन्छ।'
    }
  },
  {
    id: 8,
    page: 156,
    category: 'Activity',
    section: '명절 음식과 활동',
    korean: '세배하다',
    pronunciation: 'sebaehada',
    english: 'To perform New Year\'s bow',
    nepali: 'नयाँ वर्षको ढोग गर्ने',
    type: 'verb',
    example: {
      korean: '설날 아침에 어른들께 세배해요.',
      english: 'On Seollal morning, we bow to the elders.',
      nepali: 'सोल्लालको बिहान ठूलाहरूलाई ढोग गर्छन्।'
    }
  },
  {
    id: 9,
    page: 156,
    category: 'Activity',
    section: '명절 음식과 활동',
    korean: '덕담을 하다',
    pronunciation: 'deokdameul hada',
    english: 'To give blessings / good wishes',
    nepali: 'आशीर्वाद दिने',
    type: 'verb',
    example: {
      korean: '어른들이 덕담을 해 주세요.',
      english: 'The elders give blessings.',
      nepali: 'ठूलाहरूले आशीर्वाद दिनुहुन्छ।'
    }
  },
  {
    id: 10,
    page: 156,
    category: 'Activity',
    section: '명절 음식과 활동',
    korean: '세뱃돈을 받다',
    pronunciation: 'sebatdoneul batda',
    english: 'To receive New Year\'s money',
    nepali: 'नयाँ वर्षको पैसा पाउने',
    type: 'verb',
    example: {
      korean: '아이들은 세배를 하고 세뱃돈을 받아요.',
      english: 'Children bow and receive New Year\'s money.',
      nepali: 'बच्चाहरूले ढोग गरेर नयाँ वर्षको पैसा पाउँछन्।'
    }
  },
  {
    id: 11,
    page: 156,
    category: 'Activity',
    section: '명절 음식과 활동',
    korean: '설빔을 입다',
    pronunciation: 'seolbimeul ipda',
    english: 'To wear New Year\'s clothes',
    nepali: 'नयाँ वर्षको लुगा लगाउने',
    type: 'verb',
    example: {
      korean: '설날에는 새 옷인 설빔을 입어요.',
      english: 'On Seollal, people wear new clothes called seolbim.',
      nepali: 'सोल्लालमा सोल्बिम भनिने नयाँ लुगा लगाउँछन्।'
    }
  },
  {
    id: 12,
    page: 156,
    category: 'Activity',
    section: '명절 음식과 활동',
    korean: '차례를 지내다',
    pronunciation: 'charyereul jinaeda',
    english: 'To perform ancestral rites',
    nepali: 'पुर्खाको पूजा गर्ने',
    type: 'verb',
    example: {
      korean: '명절에는 차례를 지내고 성묘를 가요.',
      english: 'On holidays, we perform ancestral rites and visit graves.',
      nepali: 'चाडपर्वमा पुर्खाको पूजा गरेर चिहानमा जान्छन्।'
    }
  },
  {
    id: 13,
    page: 156,
    category: 'Activity',
    section: '명절 음식과 활동',
    korean: '소원을 빌다',
    pronunciation: 'sowoneul bilda',
    english: 'To make a wish',
    nepali: 'इच्छा मांग्ने',
    type: 'verb',
    example: {
      korean: '보름달을 보면서 소원을 빌었어요.',
      english: 'I made a wish while looking at the full moon.',
      nepali: 'पूर्णिमाको चन्द्रमा हेर्दै इच्छा मागेँ।'
    }
  }
];

// Section 3: Related terms (관련 용어)
export const relatedTermsVocabulary = [
  {
    id: 14,
    page: 156,
    category: 'Terms',
    section: '관련 용어',
    korean: '음력',
    pronunciation: 'eumnyeok',
    english: 'Lunar calendar',
    nepali: 'चन्द्र पात्रो',
    type: 'noun',
    example: {
      korean: '설날은 음력 1월 1일이에요.',
      english: 'Seollal is January 1st on the lunar calendar.',
      nepali: 'सोल्लाल चन्द्र पात्रोको जनवरी १ हो।'
    }
  },
  {
    id: 15,
    page: 156,
    category: 'Terms',
    section: '관련 용어',
    korean: '보름달',
    pronunciation: 'boreumdal',
    english: 'Full moon',
    nepali: 'पूर्णिमाको चन्द्रमा',
    type: 'noun',
    example: {
      korean: '정월 대보름에는 보름달이 떠요.',
      english: 'The full moon rises on Jeongwol Daeboreum.',
      nepali: 'जोङ्वोल दाएबोरुममा पूर्णिमाको चन्द्रमा उदाउँछ।'
    }
  },
  {
    id: 16,
    page: 156,
    category: 'Terms',
    section: '관련 용어',
    korean: '황금연휴',
    pronunciation: 'hwanggeumyeonhyu',
    english: 'Golden holiday (extended holiday)',
    nepali: 'सुनौलो बिदा (लामो बिदा)',
    type: 'noun',
    example: {
      korean: '이번 추석은 황금연휴라서 여행 가는 사람이 많아요.',
      english: 'This Chuseok is a golden holiday, so many people are traveling.',
      nepali: 'यो चुसोक सुनौलो बिदा भएकोले धेरै मानिसहरू यात्रामा जान्छन्।'
    }
  },
  {
    id: 17,
    page: 156,
    category: 'Terms',
    section: '관련 용어',
    korean: '귀성 전쟁',
    pronunciation: 'gwiseong jeonjaeng',
    english: 'Homecoming traffic battle',
    nepali: 'घर फर्कने ट्राफिक युद्ध',
    type: 'noun',
    example: {
      korean: '명절마다 귀성 전쟁이 벌어져요.',
      english: 'Every holiday, there is a homecoming traffic battle.',
      nepali: 'हरेक चाडपर्वमा घर फर्कने ट्राफिक युद्ध हुन्छ।'
    }
  },
  {
    id: 18,
    page: 156,
    category: 'Terms',
    section: '관련 용어',
    korean: '귀성객',
    pronunciation: 'gwiseonggaek',
    english: 'Homecoming travelers',
    nepali: 'घर फर्कने यात्रीहरू',
    type: 'noun',
    example: {
      korean: '서울역에 귀성객이 많아요.',
      english: 'There are many homecoming travelers at Seoul Station.',
      nepali: 'सियोल स्टेशनमा घर फर्कने यात्रीहरू धेरै छन्।'
    }
  },
  {
    id: 19,
    page: 156,
    category: 'Terms',
    section: '관련 용어',
    korean: '풍습',
    pronunciation: 'pungseup',
    english: 'Custom / Tradition',
    nepali: 'चलन / परम्परा',
    type: 'noun',
    example: {
      korean: '한국에는 다양한 명절 풍습이 있어요.',
      english: 'Korea has various holiday customs.',
      nepali: 'कोरियामा विभिन्न चाडपर्वका चलनहरू छन्।'
    }
  },
  {
    id: 20,
    page: 156,
    category: 'Terms',
    section: '관련 용어',
    korean: '붐비다',
    pronunciation: 'bumbida',
    english: 'To be crowded',
    nepali: 'भीड हुनु',
    type: 'verb',
    example: {
      korean: '명절에는 고속도로가 많이 붐벼요.',
      english: 'The highway is very crowded during holidays.',
      nepali: 'चाडपर्वमा राजमार्गमा धेरै भीड हुन्छ।'
    }
  }
];

// Combine all vocabulary
export const allVocabulary = [
  ...holidayVocabulary,
  ...holidayActivityVocabulary,
  ...relatedTermsVocabulary
];

// ============================================
// PAGE 157-158 - 문법 (Grammar)
// ============================================

export const grammar1 = {
  id: 1,
  page: 157,
  pattern: "-아/어도",
  meaning: {
    english: "Even if / Even though",
    nepali: "भए पनि / भएता पनि"
  },
  description: {
    english: "This pattern is used to express a concession. It means 'even if' or 'even though.' The action or state in the main clause happens regardless of the condition stated before -아/어도.",
    nepali: "यो ढाँचा छुट व्यक्त गर्न प्रयोग गरिन्छ। यसको अर्थ 'भए पनि' वा 'भएता पनि' हो। -아/어도 अघि बताइएको अवस्था भए पनि मुख्य वाक्यको कार्य हुन्छ।"
  },
  whenToUse: {
    situations: [
      {
        situation: {
          english: "Talking about holiday obligations despite being busy",
          nepali: "व्यस्त भए पनि चाडपर्वको कर्तव्यको बारेमा कुरा गर्दा"
        },
        example: {
          korean: '아무리 바빠도 명절에는 꼭 고향에 가야지.',
          english: 'No matter how busy I am, I must go to my hometown for the holidays.',
          nepali: 'जतिसुकै व्यस्त भए पनि चाडपर्वमा गाउँ जानै पर्छ।'
        }
      },
      {
        situation: {
          english: "Events proceeding regardless of weather",
          nepali: "मौसम जेसुकै भए पनि कार्यक्रम हुने"
        },
        example: {
          korean: '비가 와도 행사는 진행됩니다.',
          english: 'Even if it rains, the event will proceed.',
          nepali: 'पानी परे पनि कार्यक्रम हुनेछ।'
        }
      },
      {
        situation: {
          english: "Expressing a habit that continues regardless",
          nepali: "जेसुकै भए पनि जारी रहने बानीको बारेमा"
        },
        example: {
          korean: '나는 시간이 없어도 아침밥을 꼭 먹는다.',
          english: 'Even when I don\'t have time, I always eat breakfast.',
          nepali: 'म समय नभए पनि बिहानको खाना अवश्य खान्छु।'
        }
      },
      {
        situation: {
          english: "Talking about someone's dedication",
          nepali: "कसैको समर्पणको बारेमा कुरा गर्दा"
        },
        example: {
          korean: '고천 씨는 몸이 아무리 아파도 수업 시간에 결석하지 않는다.',
          english: 'Gocheon never misses class no matter how sick he is.',
          nepali: 'गोचोनजी जतिसुकै बिरामी भए पनि कक्षामा अनुपस्थित हुँदैनन्।'
        }
      }
    ]
  },
  whereToUse: {
    english: "Used in both spoken and written Korean. Very common in everyday conversation.",
    nepali: "बोलेको र लेखेको दुवै कोरियनमा प्रयोग गरिन्छ। दैनिक कुराकानीमा धेरै सामान्य।"
  },
  formality: {
    english: "Neutral. Can be used in both formal and informal settings.",
    nepali: "तटस्थ। औपचारिक र अनौपचारिक दुवै सेटिङमा प्रयोग गर्न सकिन्छ।"
  },
  formation: {
    rule: "Verb/Adjective stem + 아/어도",
    notes: {
      english: "Use 아도 after stems ending in ㅏ or ㅗ. Use 어도 for other vowels. 하다 becomes 해도. Often used with 아무리 (no matter how) for emphasis.",
      nepali: "ㅏ वा ㅗ मा अन्त्य हुने stem पछि 아도 प्रयोग गर्नुहोस्। अन्य स्वरहरूको लागि 어도। 하다 => 해도। जोड दिनको लागि प्रायः 아무리 (जतिसुकै) सँग प्रयोग गरिन्छ।"
    },
    conjugationTable: [
      {
        verb: '바쁘다',
        stem: '바쁘',
        result: '바빠도',
        english: 'Even if busy',
        nepali: 'व्यस्त भए पनि'
      },
      {
        verb: '오다',
        stem: '오',
        result: '와도',
        english: 'Even if (it) comes',
        nepali: 'आए पनि'
      },
      {
        verb: '없다',
        stem: '없',
        result: '없어도',
        english: 'Even if there isn\'t',
        nepali: 'नभए पनि'
      },
      {
        verb: '아프다',
        stem: '아프',
        result: '아파도',
        english: 'Even if sick',
        nepali: 'बिरामी भए पनि'
      }
    ]
  },
  comparisonWithSimilar: {
    english: "Compare with -지만: Both express contrast, but -아/어도 emphasizes concession ('even if'), while -지만 simply contrasts ('but'). -아/어도 often implies the result is unexpected given the condition.",
    nepali: "-지만 सँग तुलना गर्नुहोस्: दुवैले विपरीत व्यक्त गर्छन्, तर -아/어도 ले छुट ('भए पनि') मा जोड दिन्छ, जबकि -지만 ले सिधा विपरीत ('तर') मात्र गर्छ।"
  },
  examples: [
    {
      context: { english: 'Holiday obligations', nepali: 'चाडपर्वको कर्तव्य' },
      korean: '아무리 바빠도 명절에는 꼭 고향에 가야지.',
      english: 'No matter how busy I am, I must go to my hometown for the holidays.',
      nepali: 'जतिसुकै व्यस्त भए पनि चाडपर्वमा गाउँ जानै पर्छ।'
    },
    {
      context: { english: 'Weather and events', nepali: 'मौसम र कार्यक्रम' },
      korean: '비가 와도 행사는 진행됩니다.',
      english: 'Even if it rains, the event will proceed.',
      nepali: 'पानी परे पनि कार्यक्रम हुनेछ।'
    },
    {
      context: { english: 'Daily habit', nepali: 'दैनिक बानी' },
      korean: '나는 시간이 없어도 아침밥을 꼭 먹는다.',
      english: 'Even when I don\'t have time, I always eat breakfast.',
      nepali: 'म समय नभए पनि बिहानको खाना अवश्य खान्छु।'
    },
    {
      context: { english: 'Dedication to studies', nepali: 'अध्ययनप्रतिको समर्पण' },
      korean: '고천 씨는 몸이 아무리 아파도 수업 시간에 결석하지 않는다.',
      english: 'Gocheon never misses class no matter how sick he is.',
      nepali: 'गोचोनजी जतिसुकै बिरामी भए पनि कक्षामा अनुपस्थित हुँदैनन्।'
    }
  ]
};

export const grammar2 = {
  id: 2,
  page: 158,
  pattern: "-게 되다",
  meaning: {
    english: "Came to do / Became (change of state or situation)",
    nepali: "हुन पुग्नु / गर्न पुग्नु (अवस्था वा परिस्थिति परिवर्तन)"
  },
  description: {
    english: "This pattern expresses a change that happened, often beyond the speaker's control. It indicates that a situation naturally developed or changed. It can express becoming able to do something, or a change in circumstances.",
    nepali: "यो ढाँचाले भएको परिवर्तन व्यक्त गर्छ, प्रायः वक्ताको नियन्त्रण बाहिर। यसले परिस्थिति प्राकृतिक रूपमा विकसित वा परिवर्तन भएको सङ्केत गर्छ।"
  },
  whenToUse: {
    situations: [
      {
        situation: {
          english: "Talking about how you met someone",
          nepali: "कसैलाई कसरी भेटेको बारेमा कुरा गर्दा"
        },
        example: {
          korean: '친한 친구 소개로 만나게 됐어요.',
          english: 'I came to meet them through a close friend\'s introduction.',
          nepali: 'नजिकको साथीको परिचयबाट भेट्न पुगेँ।'
        }
      },
      {
        situation: {
          english: "Talking about moving",
          nepali: "सर्ने बारेमा कुरा गर्दा"
        },
        example: {
          korean: '싸고 좋은 집을 구해서 이사 가게 됐어요.',
          english: 'I found a cheap and good house, so I ended up moving.',
          nepali: 'सस्तो र राम्रो घर पाएकोले सर्न पुगेँ।'
        }
      },
      {
        situation: {
          english: "Business closing",
          nepali: "व्यापार बन्द हुँदा"
        },
        example: {
          korean: '장사가 안 돼서 가게 문을 닫게 되었다.',
          english: 'Business wasn\'t going well, so the store ended up closing.',
          nepali: 'व्यापार नभएकोले पसल बन्द गर्न पुग्यो।'
        }
      },
      {
        situation: {
          english: "Getting a new job",
          nepali: "नयाँ जागिर पाउँदा"
        },
        example: {
          korean: '이번에 새로운 회사에 들어가게 되어서 정말 기쁘다.',
          english: 'I\'m really happy because I got to join a new company this time.',
          nepali: 'यसपटक नयाँ कम्पनीमा प्रवेश गर्न पुगेकोले साँच्चै खुसी छु।'
        }
      }
    ]
  },
  whereToUse: {
    english: "Used in both spoken and written Korean. Common when narrating life changes or explaining how situations developed.",
    nepali: "बोलेको र लेखेको दुवै कोरियनमा प्रयोग गरिन्छ। जीवन परिवर्तन वर्णन गर्दा वा परिस्थिति कसरी विकसित भयो भनेर व्याख्या गर्दा सामान्य।"
  },
  formality: {
    english: "Neutral. Can be used in both formal and informal settings.",
    nepali: "तटस्थ। औपचारिक र अनौपचारिक दुवै सेटिङमा प्रयोग गर्न सकिन्छ।"
  },
  formation: {
    rule: "Verb stem + 게 되다",
    notes: {
      english: "Simply add 게 되다 to the verb stem. The tense is expressed through 되다 conjugation: 게 됐어요 (past), 게 돼요 (present), 게 될 거예요 (future).",
      nepali: "Verb stem मा 게 되다 जोड्नुहोस्। काल 되다 को conjugation मार्फत व्यक्त गरिन्छ: 게 됐어요 (भूत), 게 돼요 (वर्तमान), 게 될 거예요 (भविष्य)।"
    },
    conjugationTable: [
      {
        verb: '만나다',
        stem: '만나',
        result: '만나게 되다',
        english: 'Came to meet',
        nepali: 'भेट्न पुग्नु'
      },
      {
        verb: '이사 가다',
        stem: '이사 가',
        result: '이사 가게 되다',
        english: 'Came to move',
        nepali: 'सर्न पुग्नु'
      },
      {
        verb: '닫다',
        stem: '닫',
        result: '닫게 되다',
        english: 'Came to close',
        nepali: 'बन्द गर्न पुग्नु'
      },
      {
        verb: '들어가다',
        stem: '들어가',
        result: '들어가게 되다',
        english: 'Came to enter/join',
        nepali: 'प्रवेश गर्न पुग्नु'
      }
    ]
  },
  comparisonWithSimilar: {
    english: "Compare with -아/어지다: Both express change, but -게 되다 focuses on external circumstances leading to a change, while -아/어지다 focuses on gradual internal change (e.g., 예뻐지다 'become pretty').",
    nepali: "-아/어지다 सँग तुलना गर्नुहोस्: दुवैले परिवर्तन व्यक्त गर्छन्, तर -게 되다 बाह्य परिस्थितिले ल्याएको परिवर्तनमा केन्द्रित छ, जबकि -아/어지다 क्रमिक आन्तरिक परिवर्तनमा केन्द्रित छ।"
  },
  examples: [
    {
      context: { english: 'Meeting someone', nepali: 'कसैलाई भेट्दा' },
      korean: '친한 친구 소개로 만나게 됐어요.',
      english: 'I came to meet them through a close friend\'s introduction.',
      nepali: 'नजिकको साथीको परिचयबाट भेट्न पुगेँ।'
    },
    {
      context: { english: 'Moving houses', nepali: 'घर सर्दा' },
      korean: '싸고 좋은 집을 구해서 이사 가게 됐어요.',
      english: 'I found a cheap and good house, so I ended up moving.',
      nepali: 'सस्तो र राम्रो घर पाएकोले सर्न पुगेँ।'
    },
    {
      context: { english: 'Business difficulties', nepali: 'व्यापारिक कठिनाइ' },
      korean: '장사가 안 돼서 가게 문을 닫게 되었다.',
      english: 'Business wasn\'t going well, so the store ended up closing.',
      nepali: 'व्यापार नभएकोले पसल बन्द गर्न पुग्यो।'
    },
    {
      context: { english: 'New job', nepali: 'नयाँ जागिर' },
      korean: '이번에 새로운 회사에 들어가게 되어서 정말 기쁘다.',
      english: 'I\'m really happy because I got to join a new company this time.',
      nepali: 'यसपटक नयाँ कम्पनीमा प्रवेश गर्न पुगेकोले साँच्चै खुसी छु।'
    }
  ]
};

// ============================================
// PAGE 159 - 말하기 (Speaking)
// ============================================

export const speaking = {
  page: 159,
  title: {
    korean: '명절 풍습에 대해 이야기하기',
    english: 'Talking about Holiday Customs',
    nepali: 'चाडपर्वका चलनहरूको बारेमा कुरा गर्ने'
  },
  mainDialogue: {
    id: 1,
    title: {
      korean: '명절 풍습에 대해 이야기하기',
      english: 'Talking about Holiday Customs',
      nepali: 'चाडपर्वका चलनहरूको बारेमा कुरा गर्ने'
    },
    situation: {
      korean: '과장님과 안젤라가 명절 풍습에 대해 이야기하고 있습니다.',
      english: 'The manager and Angela are talking about holiday customs.',
      nepali: 'म्यानेजर र एन्जेलाले चाडपर्वका चलनहरूको बारेमा कुरा गर्दैछन्।'
    },
    conversation: [
      {
        speaker: '과장님',
        korean: '안젤라 씨, 설날에 떡국 먹어 봤어요?',
        english: 'Angela, have you tried tteokguk on Seollal?',
        nepali: 'एन्जेला, सोल्लालमा त्योक्गुक खाएकी छौ?'
      },
      {
        speaker: '안젤라',
        korean: '네, 시어머니가 만들어 주셔서 먹게 됐어요. 정말 맛있었어요.',
        english: 'Yes, my mother-in-law made it for me, so I got to try it. It was really delicious.',
        nepali: 'हजुर, सासूआमाले बनाइदिनुभएकोले खान पाएँ। साँच्चै मिठो थियो।'
      },
      {
        speaker: '과장님',
        korean: '떡국을 먹으면 나이를 한 살 더 먹는다고 하잖아요.',
        english: 'They say you get one year older when you eat tteokguk.',
        nepali: 'त्योक्गुक खाँदा एक वर्ष थपिन्छ भन्छन् नि।'
      },
      {
        speaker: '안젤라',
        korean: '맞아요. 그래서 아무리 싫어도 꼭 먹어야 한다고 하더라고요.',
        english: 'Right. So they say you have to eat it no matter what.',
        nepali: 'हो। त्यसैले जतिसुकै मनपरे नपरे पनि खानैपर्छ भन्छन् रे।'
      },
      {
        speaker: '과장님',
        korean: '설날에 세배도 했어요?',
        english: 'Did you also do the New Year\'s bow on Seollal?',
        nepali: 'सोल्लालमा सेबाए पनि गर्यौ?'
      },
      {
        speaker: '안젤라',
        korean: '네, 처음에는 어색했어도 지금은 익숙해졌어요. 세뱃돈도 받았어요!',
        english: 'Yes, it was awkward at first, but now I\'m used to it. I even received New Year\'s money!',
        nepali: 'हजुर, पहिले अनौठो लागे पनि अहिले बानी भइसक्यो। नयाँ वर्षको पैसा पनि पाएँ!'
      }
    ],
    keyExpressions: [
      {
        korean: '먹게 됐어요',
        english: 'I came to eat / I got to eat',
        nepali: 'खान पाएँ',
        explanation: 'Using -게 되다 to express a change of circumstance'
      },
      {
        korean: '아무리 싫어도',
        english: 'No matter how much you dislike it',
        nepali: 'जतिसुकै मनपरे नपरे पनि',
        explanation: 'Using 아무리 + -아/어도 for emphasis'
      },
      {
        korean: '어색했어도 익숙해졌어요',
        english: 'Even though it was awkward, I got used to it',
        nepali: 'अनौठो लागे पनि बानी भइसक्यो',
        explanation: 'Using -아/어도 for concession'
      }
    ]
  }
};

// ============================================
// PAGE 160 - 듣기 (Listening)
// ============================================

export const listeningDialogue = {
  id: 2,
  page: 160,
  title: {
    korean: '추석 귀성객 뉴스',
    english: 'Chuseok Homecoming News',
    nepali: 'चुसोक घर फर्कने यात्रीहरूको समाचार'
  },
  situation: {
    korean: '뉴스 앵커와 기자가 서울역에서 추석 귀성객에 대해 보도하고 있습니다.',
    english: 'A news anchor and reporter are reporting about Chuseok homecoming travelers at Seoul Station.',
    nepali: 'समाचार एङ्कर र पत्रकारले सियोल स्टेशनमा चुसोक घर फर्कने यात्रीहरूको बारेमा समाचार दिइरहेका छन्।'
  },
  conversation: [
    {
      speaker: '앵커',
      korean: '이번 추석은 황금연휴인데요, 귀성 전쟁이 시작됐습니다. 서울역 현장의 기자를 연결합니다.',
      english: 'This Chuseok is a golden holiday, and the homecoming traffic battle has begun. Let\'s connect to our reporter at Seoul Station.',
      nepali: 'यो चुसोक सुनौलो बिदा हो, र घर फर्कने ट्राफिक युद्ध सुरु भइसक्यो। सियोल स्टेशनमा रहेका पत्रकारसँग जोडौं।'
    },
    {
      speaker: '기자',
      korean: '네, 서울역입니다. 지금 귀성객들로 매우 붐비고 있습니다. 아무리 일찍 와도 자리를 구하기 어렵다고 합니다.',
      english: 'Yes, this is Seoul Station. It is very crowded with homecoming travelers right now. They say it\'s hard to find a seat no matter how early you come.',
      nepali: 'हजुर, यो सियोल स्टेशन हो। अहिले घर फर्कने यात्रीहरूले धेरै भीड छ। जतिसुकै चाँडो आए पनि सिट पाउन गाह्रो छ भन्छन्।'
    },
    {
      speaker: '앵커',
      korean: '고속도로 상황은 어떻습니까?',
      english: 'How is the highway situation?',
      nepali: 'राजमार्गको अवस्था कस्तो छ?'
    },
    {
      speaker: '기자',
      korean: '고속도로도 많이 막히고 있습니다. 서울에서 부산까지 보통 4시간이면 되지만, 오늘은 8시간 이상 걸리게 됐습니다.',
      english: 'The highways are also very congested. It normally takes 4 hours from Seoul to Busan, but today it has come to take over 8 hours.',
      nepali: 'राजमार्गमा पनि धेरै जाम छ। सियोलबाट बुसानसम्म सामान्यतया ४ घण्टा लाग्छ, तर आज ८ घण्टाभन्दा बढी लाग्न पुगेको छ।'
    }
  ],
  keyExpressions: [
    {
      korean: '귀성 전쟁이 시작됐습니다',
      english: 'The homecoming battle has begun',
      nepali: 'घर फर्कने ट्राफिक युद्ध सुरु भइसक्यो',
      explanation: 'Describing the holiday traffic situation'
    },
    {
      korean: '아무리 일찍 와도',
      english: 'No matter how early you come',
      nepali: 'जतिसुकै चाँडो आए पनि',
      explanation: 'Using 아무리 + -아/어도'
    },
    {
      korean: '걸리게 됐습니다',
      english: 'It has come to take (time)',
      nepali: 'लाग्न पुगेको छ',
      explanation: 'Using -게 되다 to express a changed situation'
    }
  ]
};

// ============================================
// PAGE 161-162 - 읽기 (Reading)
// ============================================

export const readings = [
  {
    id: 1,
    page: 161,
    title: {
      korean: '한국의 명절',
      english: 'Korean Holidays',
      nepali: 'कोरियाका चाडपर्वहरू'
    },
    content: {
      korean: `한국의 대표적인 명절로 설날과 추석이 있다. 설날은 음력 1월 1일이고, 추석은 음력 8월 15일이다.

설날에는 온 가족이 모여 차례를 지내고, 떡국을 먹는다. 어른들께 세배를 하면 어른들은 덕담과 함께 세뱃돈을 준다. 아이들은 설빔을 입고 즐거운 시간을 보낸다.

추석에는 가족이 함께 송편을 만들어 먹고, 조상의 산소에 성묘를 간다. 추석은 한 해 농사가 끝나가는 시기에 있어 풍요를 감사하는 의미가 있다.

요즘은 명절 풍습이 많이 변했다. 예전에는 명절에 꼭 고향에 가야 했지만, 요즘은 여행을 가거나 집에서 쉬는 사람도 많아졌다. 하지만 아무리 변해도 가족과 함께하는 시간이 소중하다는 것은 변하지 않는다.

명절에는 많은 사람들이 고향을 찾기 때문에 고속도로와 기차역이 매우 붐빈다. 이를 '귀성 전쟁'이라고 부른다. 그래서 요즘은 미리 예매하거나 명절을 피해서 이동하는 사람들도 많아지게 됐다.`,
      english: `Korea's representative holidays include Seollal and Chuseok. Seollal is January 1st on the lunar calendar, and Chuseok is August 15th on the lunar calendar.

On Seollal, the whole family gathers to perform ancestral rites and eat tteokguk. When you bow to the elders, they give you blessings and New Year's money. Children wear new holiday clothes and have a joyful time.

On Chuseok, families make and eat songpyeon together and visit their ancestors' graves. Chuseok falls at the time when the year's farming is ending, so it has the meaning of giving thanks for abundance.

Nowadays, holiday customs have changed a lot. In the past, people had to go to their hometown for the holidays, but nowadays many people go on trips or rest at home. However, no matter how much things change, the importance of spending time with family does not change.

During holidays, many people visit their hometowns, so highways and train stations become very crowded. This is called the 'homecoming battle.' So nowadays, more people have come to book in advance or travel avoiding the holiday period.`,
      nepali: `कोरियाका प्रतिनिधि चाडपर्वहरूमा सोल्लाल र चुसोक छन्। सोल्लाल चन्द्र पात्रोको जनवरी १ हो, र चुसोक चन्द्र पात्रोको अगस्ट १५ हो।

सोल्लालमा सबै परिवार जम्मा भएर पुर्खाको पूजा गर्छन् र त्योक्गुक खान्छन्। ठूलाहरूलाई ढोग गर्दा ठूलाहरूले आशीर्वाद र नयाँ वर्षको पैसा दिनुहुन्छ। बच्चाहरूले नयाँ लुगा लगाएर रमाइलो समय बिताउँछन्।

चुसोकमा परिवारले सँगै सोङ्प्योन बनाएर खान्छन् र पुर्खाको चिहानमा जान्छन्। चुसोक वर्षको खेती सकिँदैको समयमा पर्ने भएकोले प्रशस्ततामा धन्यवाद दिने अर्थ राख्छ।

आजकल, चाडपर्वका चलनहरू धेरै परिवर्तन भएका छन्। पहिले चाडपर्वमा गाउँ जानैपर्थ्यो, तर आजकल यात्रामा जाने वा घरमा आराम गर्ने मानिसहरू पनि धेरै भएका छन्। तर जतिसुकै परिवर्तन भए पनि परिवारसँगको समय महत्त्वपूर्ण छ भन्ने कुरा बदलिँदैन।

चाडपर्वमा धेरै मानिसहरू गाउँ जाने भएकोले राजमार्ग र रेल स्टेशनमा धेरै भीड हुन्छ। यसलाई 'घर फर्कने युद्ध' भनिन्छ। त्यसैले आजकल अगाउ बुकिङ गर्ने वा चाडपर्व नजिकैको समय बेलामा यात्रा नगर्ने मानिसहरू पनि बढेका छन्।`
    },
    vocabulary: [
      { korean: '대표적인', english: 'representative', nepali: 'प्रतिनिधि' },
      { korean: '풍요', english: 'abundance', nepali: 'प्रशस्तता' },
      { korean: '성묘', english: 'visiting ancestors\' graves', nepali: 'पुर्खाको चिहान भ्रमण' },
      { korean: '예매하다', english: 'to book in advance', nepali: 'अगाउ बुकिङ गर्नु' }
    ],
    comprehensionQuestions: [
      {
        question: {
          korean: '설날에는 무엇을 합니까?',
          english: 'What do people do on Seollal?',
          nepali: 'सोल्लालमा के गर्छन्?'
        },
        answer: {
          korean: '차례를 지내고, 떡국을 먹고, 어른들께 세배를 합니다.',
          english: 'They perform ancestral rites, eat tteokguk, and bow to elders.',
          nepali: 'पुर्खाको पूजा गर्छन्, त्योक्गुक खान्छन्, र ठूलाहरूलाई ढोग गर्छन्।'
        }
      },
      {
        question: {
          korean: '요즘 명절 풍습이 어떻게 변했습니까?',
          english: 'How have holiday customs changed recently?',
          nepali: 'आजकल चाडपर्वका चलनहरू कसरी परिवर्तन भएका छन्?'
        },
        answer: {
          korean: '고향에 가는 대신 여행을 가거나 집에서 쉬는 사람이 많아졌습니다.',
          english: 'More people go on trips or rest at home instead of going to their hometown.',
          nepali: 'गाउँ जानुको सट्टा यात्रामा जाने वा घरमा आराम गर्ने मानिसहरू बढेका छन्।'
        }
      }
    ]
  }
];

// ============================================
// PAGE 164 - 문화 (Culture)
// ============================================

export const culture = {
  page: 164,
  title: {
    korean: '강릉단오제',
    english: 'Gangneung Danoje Festival',
    nepali: 'गङ्नुङ दानोजे महोत्सव'
  },
  sections: [
    {
      subtitle: {
        korean: '강릉단오제란?',
        english: 'What is Gangneung Danoje?',
        nepali: 'गङ्नुङ दानोजे भनेको के हो?'
      },
      content: {
        korean: '강릉단오제는 강원도 강릉 지역에서 음력 5월 5일 단오를 전후하여 열리는 전통 축제입니다. 2005년에 유네스코 인류 무형 문화유산으로 등재되었습니다.',
        english: 'Gangneung Danoje is a traditional festival held around the 5th day of the 5th lunar month in the Gangneung area of Gangwon Province. It was designated as a UNESCO Intangible Cultural Heritage of Humanity in 2005.',
        nepali: 'गङ्नुङ दानोजे गङ्वोन प्रदेशको गङ्नुङ क्षेत्रमा चन्द्र पात्रोको ५ औं महिनाको ५ औं दिन वरिपरि आयोजित हुने परम्परागत महोत्सव हो। यो सन् २००५ मा युनेस्को मानवताको अमूर्त सांस्कृतिक सम्पदाको रूपमा सूचीकृत भएको थियो।'
      }
    },
    {
      subtitle: {
        korean: '강릉단오제의 특징',
        english: 'Features of Gangneung Danoje',
        nepali: 'गङ्नुङ दानोजेका विशेषताहरू'
      },
      content: {
        korean: '강릉단오제는 약 한 달 동안 진행되며, 단오굿, 관노가면극, 그네 타기, 씨름 등 다양한 전통 놀이와 의식이 열립니다. 지역 주민들과 관광객이 함께 즐기는 대표적인 한국의 전통 축제입니다.',
        english: 'Gangneung Danoje lasts about a month and features various traditional games and ceremonies including shamanistic rituals, mask dramas, swinging, and wrestling. It is a representative Korean traditional festival enjoyed by both local residents and tourists.',
        nepali: 'गङ्नुङ दानोजे लगभग एक महिनासम्म चल्छ र यसमा शामानिक अनुष्ठान, मुखौटा नाटक, पिङ खेल्ने, कुस्ती लगायत विभिन्न परम्परागत खेल र अनुष्ठानहरू हुन्छन्। यो स्थानीय बासिन्दा र पर्यटक दुवैले रमाउने कोरियाको प्रतिनिधि परम्परागत महोत्सव हो।'
      }
    }
  ],
  tips: [
    {
      korean: '강릉단오제는 매년 음력 5월에 열립니다.',
      english: 'Gangneung Danoje is held every year in the 5th lunar month.',
      nepali: 'गङ्नुङ दानोजे हरेक वर्ष चन्द्र पात्रोको ५ औं महिनामा आयोजित हुन्छ।'
    },
    {
      korean: '유네스코 인류 무형 문화유산으로 등재된 한국의 전통 축제입니다.',
      english: 'It is a Korean traditional festival registered as a UNESCO Intangible Cultural Heritage.',
      nepali: 'यो युनेस्को अमूर्त सांस्कृतिक सम्पदामा सूचीकृत कोरियाको परम्परागत महोत्सव हो।'
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
      korean: '설날에 먹는 음식으로 나이를 한 살 더 먹는다고 하는 것은?',
      english: 'What is the food eaten on Seollal that is said to make you one year older?',
      nepali: 'सोल्लालमा खाइने खाना जुन खाँदा एक वर्ष थपिन्छ भनिन्छ त्यो के हो?'
    },
    options: [
      { korean: '송편', english: 'Songpyeon' },
      { korean: '떡국', english: 'Rice cake soup' },
      { korean: '팥죽', english: 'Red bean porridge' },
      { korean: '비빔밥', english: 'Bibimbap' }
    ],
    correctAnswer: 1,
    explanation: {
      korean: '설날에 떡국을 먹으면 나이를 한 살 더 먹는다고 합니다.',
      english: 'They say you get one year older when you eat tteokguk on Seollal.',
      nepali: 'सोल्लालमा त्योक्गुक खाँदा एक वर्ष थपिन्छ भनिन्छ।'
    }
  },
  {
    id: 2,
    type: 'vocabulary',
    question: {
      korean: '추석에 만들어 먹는 전통 음식은 무엇입니까?',
      english: 'What is the traditional food made and eaten on Chuseok?',
      nepali: 'चुसोकमा बनाएर खाइने परम्परागत खाना के हो?'
    },
    options: [
      { korean: '떡국', english: 'Rice cake soup' },
      { korean: '팥죽', english: 'Red bean porridge' },
      { korean: '송편', english: 'Songpyeon' },
      { korean: '잡채', english: 'Japchae' }
    ],
    correctAnswer: 2,
    explanation: {
      korean: '추석에는 가족이 함께 송편을 만들어 먹습니다.',
      english: 'On Chuseok, families make and eat songpyeon together.',
      nepali: 'चुसोकमा परिवारले सँगै सोङ्प्योन बनाएर खान्छन्।'
    }
  },
  {
    id: 3,
    type: 'grammar',
    question: {
      korean: '"아무리 ___ 명절에는 꼭 고향에 가야지"에서 빈칸에 알맞은 것은?',
      english: 'What goes in the blank: "No matter how ___, I must go to my hometown for the holidays"?',
      nepali: 'खाली ठाउँमा के आउँछ: "जतिसुकै ___ चाडपर्वमा गाउँ जानै पर्छ"?'
    },
    options: [
      { korean: '바쁘면', english: 'if busy' },
      { korean: '바빠도', english: 'even if busy' },
      { korean: '바쁘니까', english: 'because busy' },
      { korean: '바쁘지만', english: 'but busy' }
    ],
    correctAnswer: 1,
    explanation: {
      korean: '아무리 + -아/어도 는 "아무리 ~해도" (아무리 바빠도)의 형태로 사용됩니다.',
      english: '아무리 + -아/어도 is used in the form "no matter how ~" (no matter how busy).',
      nepali: '아무리 + -아/어도 "जतिसुकै ~भए पनि" (जतिसुकै व्यस्त भए पनि) को रूपमा प्रयोग गरिन्छ।'
    }
  },
  {
    id: 4,
    type: 'grammar',
    question: {
      korean: '"친한 친구 소개로 만나___ 됐어요"에서 빈칸에 알맞은 것은?',
      english: 'What goes in the blank: "I came to meet them through a friend\'s introduction ___"?',
      nepali: 'खाली ठाउँमा के आउँछ?'
    },
    options: [
      { korean: '게', english: '-ge (came to)' },
      { korean: '려고', english: '-ryeogo (in order to)' },
      { korean: '면서', english: '-myeonseo (while)' },
      { korean: '니까', english: '-nikka (because)' }
    ],
    correctAnswer: 0,
    explanation: {
      korean: '-게 되다는 상황의 변화를 나타내는 표현입니다.',
      english: '-게 되다 is an expression that indicates a change in situation.',
      nepali: '-게 되다 परिस्थितिको परिवर्तन जनाउने अभिव्यक्ति हो।'
    }
  },
  {
    id: 5,
    type: 'vocabulary',
    question: {
      korean: '명절에 고향에 가는 사람들 때문에 길이 막히는 것을 무엇이라고 합니까?',
      english: 'What is it called when roads are congested because of people going to their hometowns for holidays?',
      nepali: 'चाडपर्वमा मानिसहरू गाउँ जाँदा बाटो जाम हुने कुरालाई के भनिन्छ?'
    },
    options: [
      { korean: '황금연휴', english: 'Golden holiday' },
      { korean: '귀성 전쟁', english: 'Homecoming battle' },
      { korean: '귀성객', english: 'Homecoming travelers' },
      { korean: '풍습', english: 'Custom' }
    ],
    correctAnswer: 1,
    explanation: {
      korean: '귀성 전쟁은 명절에 고향으로 돌아가는 사람들로 교통이 매우 혼잡한 상황을 말합니다.',
      english: 'Gwiseong jeonjaeng refers to the extremely congested traffic caused by people returning to their hometowns during holidays.',
      nepali: '귀성 전쟁 चाडपर्वमा गाउँ फर्कने मानिसहरूले यातायात धेरै भीड हुने अवस्थालाई भनिन्छ।'
    }
  },
  {
    id: 6,
    type: 'fill-in-blank',
    instruction: {
      korean: '빈칸에 알맞은 단어를 쓰세요.',
      english: 'Write the appropriate word in the blank.',
      nepali: 'खाली ठाउँमा उपयुक्त शब्द लेख्नुहोस्।'
    },
    questions: [
      {
        question: '설날에 어른들께 (      )를/을 하면 세뱃돈을 받아요.',
        answer: '세배',
        hint: { english: 'New Year\'s bow', nepali: 'नयाँ वर्षको ढोग' }
      },
      {
        question: '동지에는 (      )을/를 먹어요.',
        answer: '팥죽',
        hint: { english: 'Red bean porridge', nepali: 'रातो सिमीको दलिया' }
      },
      {
        question: '보름달을 보면서 (      )을/를 빌었어요.',
        answer: '소원',
        hint: { english: 'Wish', nepali: 'इच्छा' }
      }
    ]
  },
  {
    id: 7,
    type: 'translation',
    instruction: {
      korean: '다음을 한국어로 번역하세요.',
      english: 'Translate the following into Korean.',
      nepali: 'तलका वाक्यहरू कोरियन भाषामा अनुवाद गर्नुहोस्।'
    },
    questions: [
      {
        question: 'Even if it rains, the event will proceed.',
        nepaliQuestion: 'पानी परे पनि कार्यक्रम हुनेछ।',
        answer: '비가 와도 행사는 진행됩니다.'
      },
      {
        question: 'I came to meet them through a friend\'s introduction.',
        nepaliQuestion: 'साथीको परिचयबाट भेट्न पुगेँ।',
        answer: '친한 친구 소개로 만나게 됐어요.'
      },
      {
        question: 'On Seollal, the whole family gathers together.',
        nepaliQuestion: 'सोल्लालमा सबै परिवार जम्मा हुन्छन्।',
        answer: '설날에는 온 가족이 함께 모여요.'
      }
    ]
  },
  {
    id: 8,
    type: 'vocabulary',
    question: {
      korean: '설날에 새 옷을 입는 것을 무엇이라고 합니까?',
      english: 'What is it called when you wear new clothes on Seollal?',
      nepali: 'सोल्लालमा नयाँ लुगा लगाउने कुरालाई के भनिन्छ?'
    },
    options: [
      { korean: '세뱃돈', english: 'New Year\'s money' },
      { korean: '설빔', english: 'New Year\'s clothes' },
      { korean: '덕담', english: 'Blessings' },
      { korean: '차례', english: 'Ancestral rites' }
    ],
    correctAnswer: 1,
    explanation: {
      korean: '설빔은 설날에 입는 새 옷을 말합니다.',
      english: 'Seolbim refers to new clothes worn on Seollal.',
      nepali: 'सोल्बिम सोल्लालमा लगाउने नयाँ लुगालाई भनिन्छ।'
    }
  },
  {
    id: 9,
    type: 'grammar',
    question: {
      korean: '"장사가 안 돼서 가게 문을 닫___ 되었다"에서 빈칸에 알맞은 것은?',
      english: 'What goes in the blank: "Business wasn\'t good, so the store ended up closing"?',
      nepali: 'खाली ठाउँमा के आउँछ?'
    },
    options: [
      { korean: '게', english: '-ge' },
      { korean: '고', english: '-go' },
      { korean: '면', english: '-myeon' },
      { korean: '지', english: '-ji' }
    ],
    correctAnswer: 0,
    explanation: {
      korean: '-게 되다는 외부적인 상황 변화를 나타냅니다.',
      english: '-게 되다 indicates a change due to external circumstances.',
      nepali: '-게 되다 बाह्य परिस्थितिको कारण परिवर्तन जनाउँछ।'
    }
  },
  {
    id: 10,
    type: 'vocabulary',
    question: {
      korean: '강릉단오제가 유네스코에 등재된 해는?',
      english: 'In what year was Gangneung Danoje registered with UNESCO?',
      nepali: 'गङ्नुङ दानोजे युनेस्कोमा कुन वर्ष सूचीकृत भएको थियो?'
    },
    options: [
      { korean: '2000년', english: '2000' },
      { korean: '2003년', english: '2003' },
      { korean: '2005년', english: '2005' },
      { korean: '2010년', english: '2010' }
    ],
    correctAnswer: 2,
    explanation: {
      korean: '강릉단오제는 2005년에 유네스코 인류 무형 문화유산으로 등재되었습니다.',
      english: 'Gangneung Danoje was registered as a UNESCO Intangible Cultural Heritage in 2005.',
      nepali: 'गङ्नुङ दानोजे सन् २००५ मा युनेस्को अमूर्त सांस्कृतिक सम्पदामा सूचीकृत भएको थियो।'
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
  holidayVocabulary,
  holidayActivityVocabulary,
  relatedTermsVocabulary,
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
