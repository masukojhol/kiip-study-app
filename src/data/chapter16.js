// KIIP Level 3 - Chapter 16: 기후와 날씨 (Climate and Weather)
// Pages 204-213

export const chapterInfo = {
  chapter: 16,
  title: {
    korean: '기후와 날씨',
    english: 'Climate and Weather',
    nepali: 'जलवायु र मौसम'
  },
  pageRange: '204-213',
  objectives: {
    vocabulary: {
      korean: '기후와 날씨',
      english: 'Climate and Weather',
      nepali: 'जलवायु र मौसम'
    },
    grammar: [
      {
        korean: '-(으)ㄹ 텐데',
        english: 'Expected future + background',
        nepali: 'अपेक्षित भविष्य + पृष्ठभूमि'
      },
      {
        korean: '-아/어 있다',
        english: 'Continuous state of completed action',
        nepali: 'पूरा भएको कार्यको निरन्तर अवस्था'
      }
    ],
    activities: [
      {
        korean: '날씨에 대해 이야기하기',
        english: 'Talking about the weather',
        nepali: 'मौसमको बारेमा कुरा गर्ने'
      },
      {
        korean: '춘곤증에 대해 읽기',
        english: 'Reading about spring fatigue',
        nepali: 'वसन्त थकानको बारेमा पढ्ने'
      }
    ],
    culture: {
      korean: '한국의 절기',
      english: 'Korean Solar Terms',
      nepali: 'कोरियाली सौर्य ऋतुहरू'
    }
  }
};

// ============================================
// PAGE 204 - 어휘 (Vocabulary)
// ============================================

// Section 1: Weather Terms (날씨 관련 어휘)
export const weatherVocabulary = [
  {
    id: 1,
    page: 204,
    category: 'Weather Terms',
    section: '날씨 관련 어휘',
    korean: '체감 온도',
    pronunciation: 'chegam ondo',
    english: 'Perceived temperature',
    nepali: 'महसुस तापक्रम',
    type: 'noun',
    example: {
      korean: '바람이 불면 체감 온도가 더 낮아요.',
      english: 'When the wind blows, the perceived temperature is even lower.',
      nepali: 'हावा चल्दा महसुस तापक्रम अझ कम हुन्छ।'
    }
  },
  {
    id: 2,
    page: 204,
    category: 'Weather Terms',
    section: '날씨 관련 어휘',
    korean: '맑음',
    pronunciation: 'malgeum',
    english: 'Clear weather',
    nepali: 'सफा मौसम',
    type: 'noun',
    example: {
      korean: '오늘 날씨는 맑음이에요.',
      english: 'Today\'s weather is clear.',
      nepali: 'आजको मौसम सफा छ।'
    }
  },
  {
    id: 3,
    page: 204,
    category: 'Weather Terms',
    section: '날씨 관련 어휘',
    korean: '습도',
    pronunciation: 'seupdo',
    english: 'Humidity',
    nepali: 'आर्द्रता',
    type: 'noun',
    example: {
      korean: '여름에는 습도가 높아서 더 덥게 느껴져요.',
      english: 'In summer, it feels hotter because the humidity is high.',
      nepali: 'गर्मीमा आर्द्रता बढी भएर अझ गर्मी लाग्छ।'
    }
  },
  {
    id: 4,
    page: 204,
    category: 'Weather Terms',
    section: '날씨 관련 어휘',
    korean: '비 올 확률',
    pronunciation: 'bi ol hwangnyul',
    english: 'Chance of rain',
    nepali: 'वर्षाको सम्भावना',
    type: 'noun',
    example: {
      korean: '오늘 비 올 확률이 60%예요.',
      english: 'Today there\'s a 60% chance of rain.',
      nepali: 'आज वर्षाको सम्भावना ६०% छ।'
    }
  },
  {
    id: 5,
    page: 204,
    category: 'Weather Terms',
    section: '날씨 관련 어휘',
    korean: '미세 먼지',
    pronunciation: 'mise meonji',
    english: 'Fine dust',
    nepali: 'सूक्ष्म धुलो',
    type: 'noun',
    example: {
      korean: '미세 먼지가 심한 날에는 마스크를 쓰세요.',
      english: 'Wear a mask on days when fine dust is severe.',
      nepali: 'सूक्ष्म धुलो धेरै भएको दिन मास्क लगाउनुहोस्।'
    }
  },
  {
    id: 6,
    page: 204,
    category: 'Weather Terms',
    section: '날씨 관련 어휘',
    korean: '최저 기온',
    pronunciation: 'choejeo gion',
    english: 'Lowest temperature',
    nepali: 'न्यूनतम तापक्रम',
    type: 'noun',
    example: {
      korean: '오늘 최저 기온은 영하 5도예요.',
      english: 'Today\'s lowest temperature is minus 5 degrees.',
      nepali: 'आजको न्यूनतम तापक्रम माइनस ५ डिग्री छ।'
    }
  },
  {
    id: 7,
    page: 204,
    category: 'Weather Terms',
    section: '날씨 관련 어휘',
    korean: '최고 기온',
    pronunciation: 'choego gion',
    english: 'Highest temperature',
    nepali: 'अधिकतम तापक्रम',
    type: 'noun',
    example: {
      korean: '내일 최고 기온은 35도로 예상돼요.',
      english: 'Tomorrow\'s highest temperature is expected to be 35 degrees.',
      nepali: 'भोलिको अधिकतम तापक्रम ३५ डिग्री अपेक्षित छ।'
    }
  }
];

// Section 2: Weather Changes (날씨 변화)
export const weatherChangesVocabulary = [
  {
    id: 8,
    page: 204,
    category: 'Weather Changes',
    section: '날씨 변화',
    korean: '일교차가 크다',
    pronunciation: 'ilgyochaga keuda',
    english: 'Large day-night temperature difference',
    nepali: 'दिन-रातको तापक्रम भिन्नता ठूलो',
    type: 'expression',
    example: {
      korean: '봄에는 일교차가 커서 감기에 걸리기 쉬워요.',
      english: 'In spring, it\'s easy to catch a cold because the temperature difference is large.',
      nepali: 'वसन्तमा दिन-रातको तापक्रम भिन्नता ठूलो भएर रुघा लाग्न सजिलो छ।'
    }
  },
  {
    id: 9,
    page: 204,
    category: 'Weather Changes',
    section: '날씨 변화',
    korean: '비가 그치다',
    pronunciation: 'biga geuchida',
    english: 'Rain stops',
    nepali: 'पानी रोकिनु',
    type: 'verb',
    example: {
      korean: '오후에 비가 그칠 거예요.',
      english: 'The rain will stop in the afternoon.',
      nepali: 'दिउँसो पानी रोकिनेछ।'
    }
  },
  {
    id: 10,
    page: 204,
    category: 'Weather Changes',
    section: '날씨 변화',
    korean: '날이 개다',
    pronunciation: 'nari gaeda',
    english: 'Weather clears up',
    nepali: 'मौसम खुल्नु',
    type: 'verb',
    example: {
      korean: '비가 그치고 날이 갰어요.',
      english: 'The rain stopped and the weather cleared up.',
      nepali: 'पानी रोकिएर मौसम खुल्यो।'
    }
  },
  {
    id: 11,
    page: 204,
    category: 'Weather Changes',
    section: '날씨 변화',
    korean: '기온이 영하로 떨어지다',
    pronunciation: 'gioni yeongharo tteoreojida',
    english: 'Temperature drops below zero',
    nepali: 'तापक्रम शून्यभन्दा तल झर्नु',
    type: 'expression',
    example: {
      korean: '겨울에는 기온이 영하로 떨어져요.',
      english: 'In winter, the temperature drops below zero.',
      nepali: 'जाडोमा तापक्रम शून्यभन्दा तल झर्छ।'
    }
  }
];

// Section 3: Weather Warnings (기상 특보)
export const weatherWarningsVocabulary = [
  {
    id: 12,
    page: 205,
    category: 'Weather Warnings',
    section: '기상 특보',
    korean: '폭염 주의보',
    pronunciation: 'pogyeom juuibo',
    english: 'Heatwave advisory',
    nepali: 'हिटवेभ चेतावनी',
    type: 'noun',
    example: {
      korean: '폭염 주의보가 발령되면 외출을 삼가세요.',
      english: 'When a heatwave advisory is issued, refrain from going outside.',
      nepali: 'हिटवेभ चेतावनी जारी भएमा बाहिर जान नजानुहोस्।'
    }
  },
  {
    id: 13,
    page: 205,
    category: 'Weather Warnings',
    section: '기상 특보',
    korean: '호우 경보',
    pronunciation: 'hou gyeongbo',
    english: 'Heavy rain warning',
    nepali: 'भारी वर्षा चेतावनी',
    type: 'noun',
    example: {
      korean: '호우 경보가 내려서 학교가 휴교했어요.',
      english: 'School was closed because a heavy rain warning was issued.',
      nepali: 'भारी वर्षा चेतावनी जारी भएर विद्यालय बन्द भयो।'
    }
  },
  {
    id: 14,
    page: 205,
    category: 'Weather Warnings',
    section: '기상 특보',
    korean: '한파 경보',
    pronunciation: 'hanpa gyeongbo',
    english: 'Cold wave warning',
    nepali: 'चिसो लहर चेतावनी',
    type: 'noun',
    example: {
      korean: '한파 경보가 발령되면 수도관이 얼 수 있어요.',
      english: 'When a cold wave warning is issued, water pipes can freeze.',
      nepali: 'चिसो लहर चेतावनी जारी भएमा पानीको पाइप जम्न सक्छ।'
    }
  },
  {
    id: 15,
    page: 205,
    category: 'Weather Warnings',
    section: '기상 특보',
    korean: '대피하다',
    pronunciation: 'daepihada',
    english: 'To evacuate',
    nepali: 'सुरक्षित स्थानमा जानु',
    type: 'verb',
    example: {
      korean: '홍수 위험이 있으면 높은 곳으로 대피하세요.',
      english: 'If there is a flood risk, evacuate to higher ground.',
      nepali: 'बाढीको जोखिम भएमा उच्च स्थानमा सुरक्षित जानुहोस्।'
    }
  }
];

// Section 4: Seasonal Terms (계절 관련 어휘)
export const seasonalVocabulary = [
  {
    id: 16,
    page: 205,
    category: 'Seasonal Terms',
    section: '계절 관련 어휘',
    korean: '열대야',
    pronunciation: 'yeoldaeya',
    english: 'Tropical night',
    nepali: 'उष्णकटिबन्धीय रात',
    type: 'noun',
    example: {
      korean: '열대야 때문에 밤에 잠을 잘 못 잤어요.',
      english: 'I couldn\'t sleep well at night because of tropical nights.',
      nepali: 'उष्णकटिबन्धीय रातको कारण राती राम्ररी सुत्न सकिएन।'
    }
  },
  {
    id: 17,
    page: 205,
    category: 'Seasonal Terms',
    section: '계절 관련 어휘',
    korean: '춘곤증',
    pronunciation: 'chungonjeung',
    english: 'Spring fatigue',
    nepali: 'वसन्त थकान',
    type: 'noun',
    example: {
      korean: '봄이 되면 춘곤증 때문에 졸려요.',
      english: 'When spring comes, I feel sleepy because of spring fatigue.',
      nepali: 'वसन्त आउँदा वसन्त थकानको कारण निद्रा लाग्छ।'
    }
  },
  {
    id: 18,
    page: 205,
    category: 'Seasonal Terms',
    section: '계절 관련 어휘',
    korean: '독감',
    pronunciation: 'dokgam',
    english: 'Flu',
    nepali: 'रुघाखोकी',
    type: 'noun',
    example: {
      korean: '겨울에는 독감이 유행해요.',
      english: 'The flu is prevalent in winter.',
      nepali: 'जाडोमा रुघाखोकी फैलिन्छ।'
    }
  },
  {
    id: 19,
    page: 205,
    category: 'Seasonal Terms',
    section: '계절 관련 어휘',
    korean: '봄을 타다',
    pronunciation: 'bomeul tada',
    english: 'Sensitive to spring (feel restless/melancholy in spring)',
    nepali: 'वसन्तमा असर पर्ने',
    type: 'expression',
    example: {
      korean: '저는 매년 봄을 타서 기분이 자주 바뀌어요.',
      english: 'I\'m sensitive to spring every year, so my mood changes often.',
      nepali: 'म हरेक वर्ष वसन्तमा असर पर्ने गर्छ, त्यसैले मनोदशा बारम्बार बदलिन्छ।'
    }
  },
  {
    id: 20,
    page: 205,
    category: 'Seasonal Terms',
    section: '계절 관련 어휘',
    korean: '건조하다',
    pronunciation: 'geonjohada',
    english: 'Dry',
    nepali: 'सुक्खा',
    type: 'adjective',
    example: {
      korean: '겨울에는 날씨가 건조해서 피부가 거칠어져요.',
      english: 'In winter, the weather is dry so skin gets rough.',
      nepali: 'जाडोमा मौसम सुक्खा भएर छाला खस्किन्छ।'
    }
  }
];

// Combined vocabulary
export const allVocabulary = [
  ...weatherVocabulary,
  ...weatherChangesVocabulary,
  ...weatherWarningsVocabulary,
  ...seasonalVocabulary
];

// ============================================
// PAGE 206 - 문법 (Grammar)
// ============================================

export const grammar1 = {
  id: 1,
  page: 206,
  pattern: "-(으)ㄹ 텐데",
  meaning: {
    english: "It will probably... (so/but)",
    nepali: "सम्भवतः...हुनेछ (त्यसैले/तर)"
  },
  description: {
    english: "This pattern expresses the speaker's expectation or assumption about a future situation, followed by a suggestion, concern, or additional information. It combines a guess about the future with background context.",
    nepali: "यो ढाँचाले भविष्यको परिस्थितिको बारेमा बोल्ने व्यक्तिको अपेक्षा वा अनुमान व्यक्त गर्छ, त्यसपछि सुझाव, चिन्ता, वा अतिरिक्त जानकारी आउँछ। यसले भविष्यको बारेमा अनुमान र पृष्ठभूमि सन्दर्भ जोड्छ।"
  },
  whenToUse: {
    situations: [
      {
        situation: {
          english: "Warning about weather and giving advice",
          nepali: "मौसमको बारेमा चेतावनी दिँदा र सल्लाह दिँदा"
        },
        example: {
          korean: '오후에 비가 올 텐데 우산을 가지고 가세요.',
          english: 'It will probably rain in the afternoon, so take an umbrella.',
          nepali: 'दिउँसो पानी पर्ने होला, त्यसैले छाता लैजानुहोस्।'
        }
      },
      {
        situation: {
          english: "Acknowledging someone's situation and thanking them",
          nepali: "कसैको अवस्था स्वीकार गर्दै धन्यवाद दिँदा"
        },
        example: {
          korean: '바쁘실 텐데 시간을 내 주셔서 감사합니다.',
          english: 'You must be busy, but thank you for making time.',
          nepali: 'तपाईं व्यस्त हुनुहुन्छ होला, तर समय दिनुभएकोमा धन्यवाद।'
        }
      },
      {
        situation: {
          english: "Concern about someone waiting",
          nepali: "कसैले पर्खिरहेको बारेमा चिन्ता"
        },
        example: {
          korean: '친구가 기다리고 있을 텐데 빨리 가야겠어요.',
          english: 'My friend is probably waiting, so I should go quickly.',
          nepali: 'साथी पर्खिरहेको होला, त्यसैले छिटो जानुपर्छ।'
        }
      }
    ]
  },
  whereToUse: {
    english: "Used in both spoken and written Korean. Very common in everyday conversation when giving advice or expressing concern based on assumptions.",
    nepali: "बोलेको र लेखेको दुवै कोरियनमा प्रयोग गरिन्छ। अनुमानमा आधारित सल्लाह दिँदा वा चिन्ता व्यक्त गर्दा दैनिक कुराकानीमा धेरै सामान्य।"
  },
  formality: {
    english: "Neutral. Can be used in both formal and informal settings.",
    nepali: "तटस्थ। औपचारिक र अनौपचारिक दुवै सेटिङमा प्रयोग गर्न सकिन्छ।"
  },
  formation: {
    rule: "Verb/Adjective stem + (으)ㄹ 텐데",
    notes: {
      english: "If the stem ends in a consonant, use -을 텐데. If it ends in a vowel or ㄹ, use -ㄹ 텐데. 텐데 is a contraction of 터인데. The clause after 텐데 often contains advice, gratitude, or concern.",
      nepali: "Stem व्यञ्जनमा अन्त्य भएमा -을 텐데 प्रयोग गर्नुहोस्। स्वर वा ㄹ मा अन्त्य भएमा -ㄹ 텐데 प्रयोग गर्नुहोस्। 텐데 को पछि प्रायः सल्लाह, कृतज्ञता, वा चिन्ता आउँछ।"
    },
    conjugationTable: [
      {
        verb: '오다 (rain)',
        stem: '오',
        result: '올 텐데',
        english: 'It will probably come/rain',
        nepali: 'आउने/पर्ने होला'
      },
      {
        verb: '바쁘다',
        stem: '바쁘',
        result: '바쁠 텐데',
        english: 'Probably busy',
        nepali: 'व्यस्त होला'
      },
      {
        verb: '기다리다',
        stem: '기다리',
        result: '기다릴 텐데',
        english: 'Probably waiting',
        nepali: 'पर्खिरहेको होला'
      },
      {
        verb: '춥다',
        stem: '추우',
        result: '추울 텐데',
        english: 'It will probably be cold',
        nepali: 'चिसो हुने होला'
      }
    ]
  },
  comparisonWithSimilar: {
    english: "Compare with -(으)ㄹ 거예요 (future certainty): -(으)ㄹ 텐데 adds a nuance of 'so/but' background context, while -(으)ㄹ 거예요 is a simple future statement. Also compare with -(으)ㄴ데 which provides background but without the future assumption.",
    nepali: "-(으)ㄹ 거예요 (भविष्य निश्चयता) सँग तुलना: -(으)ㄹ 텐데 ले 'त्यसैले/तर' पृष्ठभूमि सन्दर्भ थप्छ, जबकि -(으)ㄹ 거예요 साधारण भविष्य कथन हो।"
  },
  examples: [
    {
      context: { english: 'Weather advice', nepali: 'मौसम सल्लाह' },
      korean: '오후에 비가 올 텐데 우산을 가지고 가세요.',
      english: 'It will probably rain in the afternoon, so take an umbrella.',
      nepali: 'दिउँसो पानी पर्ने होला, त्यसैले छाता लैजानुहोस्।'
    },
    {
      context: { english: 'Expressing gratitude', nepali: 'कृतज्ञता व्यक्त गर्दा' },
      korean: '바쁘실 텐데 시간을 내 주셔서 감사합니다.',
      english: 'You must be busy, but thank you for making time.',
      nepali: 'तपाईं व्यस्त हुनुहुन्छ होला, तर समय दिनुभएकोमा धन्यवाद।'
    },
    {
      context: { english: 'Concern about friend', nepali: 'साथीको बारेमा चिन्ता' },
      korean: '친구가 기다리고 있을 텐데 빨리 가야겠어요.',
      english: 'My friend is probably waiting, so I should go quickly.',
      nepali: 'साथी पर्खिरहेको होला, त्यसैले छिटो जानुपर्छ।'
    },
    {
      context: { english: 'Cold weather concern', nepali: 'चिसो मौसमको चिन्ता' },
      korean: '내일 많이 추울 텐데 옷을 따뜻하게 입으세요.',
      english: 'It will probably be very cold tomorrow, so dress warmly.',
      nepali: 'भोलि धेरै चिसो हुने होला, त्यसैले न्यानो लुगा लगाउनुहोस्।'
    }
  ]
};

export const grammar2 = {
  id: 2,
  page: 206,
  pattern: "-아/어 있다",
  meaning: {
    english: "Is in the state of (completed action continues)",
    nepali: "(पूरा भएको कार्यको) अवस्थामा छ"
  },
  description: {
    english: "This pattern expresses that the result of a completed action continues in the present. It focuses on the current state that resulted from a past action. Used mainly with intransitive verbs.",
    nepali: "यो ढाँचाले पूरा भएको कार्यको नतिजा वर्तमानमा जारी रहेको व्यक्त गर्छ। यसले विगतको कार्यबाट उत्पन्न भएको वर्तमान अवस्थामा ध्यान केन्द्रित गर्छ। मुख्यतः अकर्मक क्रियासँग प्रयोग गरिन्छ।"
  },
  whenToUse: {
    situations: [
      {
        situation: {
          english: "Describing flowers that have bloomed",
          nepali: "फुलेका फूलहरू वर्णन गर्दा"
        },
        example: {
          korean: '공원에 꽃이 많이 피어 있어요.',
          english: 'Many flowers are blooming in the park.',
          nepali: 'पार्कमा धेरै फूलहरू फुलेका छन्।'
        }
      },
      {
        situation: {
          english: "Describing someone's position",
          nepali: "कसैको स्थिति वर्णन गर्दा"
        },
        example: {
          korean: '저기 과장님 옆에 앉아 있는 사람이에요.',
          english: 'That\'s the person sitting next to the section chief over there.',
          nepali: 'त्यहाँ सेक्सन चिफको छेउमा बसिरहेको व्यक्ति हो।'
        }
      },
      {
        situation: {
          english: "Describing contents of something",
          nepali: "कुनै कुराको सामग्री वर्णन गर्दा"
        },
        example: {
          korean: '이 커피에는 설탕이 안 들어 있어요.',
          english: 'This coffee doesn\'t have sugar in it.',
          nepali: 'यो कफीमा चिनी हालिएको छैन।'
        }
      },
      {
        situation: {
          english: "Phone is turned off",
          nepali: "फोन बन्द छ"
        },
        example: {
          korean: '친구에게 전화했는데 전원이 꺼져 있어요.',
          english: 'I called my friend but the phone is turned off.',
          nepali: 'साथीलाई फोन गरें तर फोन बन्द छ।'
        }
      }
    ]
  },
  whereToUse: {
    english: "Used in both spoken and written Korean. Very common for describing states and situations.",
    nepali: "बोलेको र लेखेको दुवै कोरियनमा प्रयोग गरिन्छ। अवस्था र परिस्थिति वर्णन गर्न धेरै सामान्य।"
  },
  formality: {
    english: "Neutral. Can be used in both formal and informal settings.",
    nepali: "तटस्थ। औपचारिक र अनौपचारिक दुवै सेटिङमा प्रयोग गर्न सकिन्छ।"
  },
  formation: {
    rule: "Verb stem + 아/어 있다",
    notes: {
      english: "If the stem vowel is ㅏ or ㅗ, use 아 있다. Otherwise, use 어 있다. For 하다 verbs, use 해 있다. This pattern is mainly used with intransitive verbs (자다→자 있다 X, 앉다→앉아 있다 O). For transitive verbs, use -아/어 놓다 instead.",
      nepali: "Stem vowel ㅏ वा ㅗ भएमा 아 있다 प्रयोग गर्नुहोस्। अन्यथा 어 있다। 하다 verb को लागि 해 있다। यो मुख्यतः अकर्मक क्रियासँग प्रयोग गरिन्छ। सकर्मक क्रियाको लागि -아/어 놓다 प्रयोग गर्नुहोस्।"
    },
    conjugationTable: [
      {
        verb: '피다 (bloom)',
        stem: '피',
        result: '피어 있다',
        english: 'Is in bloom',
        nepali: 'फुलेको छ'
      },
      {
        verb: '앉다 (sit)',
        stem: '앉',
        result: '앉아 있다',
        english: 'Is sitting',
        nepali: 'बसिरहेको छ'
      },
      {
        verb: '꺼지다 (turn off)',
        stem: '꺼지',
        result: '꺼져 있다',
        english: 'Is turned off',
        nepali: 'बन्द छ'
      },
      {
        verb: '들어가다 (go in)',
        stem: '들어가',
        result: '들어가 있다',
        english: 'Is inside',
        nepali: 'भित्र छ'
      }
    ]
  },
  comparisonWithSimilar: {
    english: "Compare with -고 있다 (ongoing action): -아/어 있다 describes the STATE resulting from a completed action, while -고 있다 describes an action IN PROGRESS. Example: 앉아 있다 (is seated/in sitting state) vs. 앉고 있다 (is in the process of sitting down).",
    nepali: "-고 있다 (चलिरहेको कार्य) सँग तुलना: -아/어 있다 ले पूरा भएको कार्यबाट उत्पन्न अवस्था वर्णन गर्छ, जबकि -고 있다 ले चलिरहेको कार्य वर्णन गर्छ। उदाहरण: 앉아 있다 (बसिरहेको अवस्था) vs. 앉고 있다 (बस्ने प्रक्रियामा)।"
  },
  examples: [
    {
      context: { english: 'Spring scenery', nepali: 'वसन्तको दृश्य' },
      korean: '공원에 꽃이 많이 피어 있어요.',
      english: 'Many flowers are blooming in the park.',
      nepali: 'पार्कमा धेरै फूलहरू फुलेका छन्।'
    },
    {
      context: { english: 'Identifying someone', nepali: 'कसैलाई चिनाउँदा' },
      korean: '저기 과장님 옆에 앉아 있는 사람이에요.',
      english: 'That\'s the person sitting next to the section chief over there.',
      nepali: 'त्यहाँ सेक्सन चिफको छेउमा बसिरहेको व्यक्ति हो।'
    },
    {
      context: { english: 'Coffee ingredients', nepali: 'कफीको सामग्री' },
      korean: '이 커피에는 설탕이 안 들어 있어요.',
      english: 'This coffee doesn\'t have sugar in it.',
      nepali: 'यो कफीमा चिनी हालिएको छैन।'
    },
    {
      context: { english: 'Phone status', nepali: 'फोनको अवस्था' },
      korean: '친구에게 전화했는데 전원이 꺼져 있어요.',
      english: 'I called my friend but the phone is turned off.',
      nepali: 'साथीलाई फोन गरें तर फोन बन्द छ।'
    }
  ]
};

// ============================================
// PAGE 207 - 말하기 (Speaking)
// ============================================

export const speaking = {
  page: 207,
  title: {
    korean: '체육 대회 연기',
    english: 'Postponing the Sports Festival',
    nepali: 'खेलकुद महोत्सव स्थगित'
  },
  mainDialogue: {
    id: 1,
    title: {
      korean: '체육 대회 연기',
      english: 'Postponing the Sports Festival',
      nepali: 'खेलकुद महोत्सव स्थगित'
    },
    situation: {
      korean: '아나이스와 라민이 날씨 때문에 체육 대회를 연기하는 것에 대해 이야기하고 있습니다.',
      english: 'Anais and Ramin are talking about postponing the sports festival due to weather.',
      nepali: 'अनाइस र रामिन मौसमको कारण खेलकुद महोत्सव स्थगित गर्ने बारेमा कुरा गर्दैछन्।'
    },
    conversation: [
      {
        speaker: '아나이스',
        korean: '라민 씨, 이번 주 토요일에 체육 대회 한다고 했죠?',
        english: 'Ramin, we said the sports festival is this Saturday, right?',
        nepali: 'रामिन, यो शनिबार खेलकुद महोत्सव हुन्छ भनेको थियो, हैन?'
      },
      {
        speaker: '라민',
        korean: '네, 그런데 일기 예보를 보니까 토요일에 비가 올 텐데 어떡하죠?',
        english: 'Yes, but looking at the weather forecast, it will probably rain on Saturday. What should we do?',
        nepali: 'हो, तर मौसम पूर्वानुमान हेर्दा शनिबार पानी पर्ने होला, के गर्ने?'
      },
      {
        speaker: '아나이스',
        korean: '비가 오면 다음 주로 연기해야 할 것 같아요.',
        english: 'If it rains, I think we\'ll have to postpone it to next week.',
        nepali: 'पानी परे अर्को हप्तामा सार्नुपर्ने होला।'
      },
      {
        speaker: '라민',
        korean: '다음 주에는 날씨가 좋을 텐데, 다음 주 토요일로 하면 어때요?',
        english: 'The weather will probably be good next week. How about making it next Saturday?',
        nepali: 'अर्को हप्ता मौसम राम्रो हुने होला, अर्को शनिबार गर्दा कस्तो होला?'
      },
      {
        speaker: '아나이스',
        korean: '좋아요. 그런데 요즘 일교차가 크니까 따뜻한 옷도 준비하라고 해야겠어요.',
        english: 'Okay. But since the temperature difference is large these days, we should tell people to prepare warm clothes too.',
        nepali: 'ठिक छ। तर आजकल दिन-रातको तापक्रम भिन्नता ठूलो भएकोले न्यानो लुगा पनि तयार गर्नू भन्नुपर्छ।'
      },
      {
        speaker: '라민',
        korean: '맞아요. 공원에 벚꽃이 많이 피어 있으니까 구경도 하면 좋겠어요.',
        english: 'Right. Since many cherry blossoms are blooming in the park, it would be nice to see them too.',
        nepali: 'हो। पार्कमा चेरी ब्लोसम धेरै फुलेका छन्, हेर्न पनि राम्रो होला।'
      }
    ],
    keyExpressions: [
      {
        korean: '비가 올 텐데',
        english: 'It will probably rain (so...)',
        nepali: 'पानी पर्ने होला (त्यसैले...)',
        explanation: 'Using -(으)ㄹ 텐데 to express an expectation and lead into concern'
      },
      {
        korean: '피어 있으니까',
        english: 'Since they are blooming',
        nepali: 'फुलेका छन् किनभने',
        explanation: 'Using -아/어 있다 to describe the current state of bloomed flowers'
      }
    ]
  }
};

// ============================================
// PAGE 208 - 듣기 (Listening)
// ============================================

export const listeningDialogue = {
  id: 2,
  page: 208,
  title: {
    korean: '일기 예보',
    english: 'Weather Forecasts',
    nepali: 'मौसम पूर्वानुमान'
  },
  situation: {
    korean: '대구와 서울의 일기 예보를 듣고 있습니다.',
    english: 'Listening to weather forecasts for Daegu and Seoul.',
    nepali: 'डेगु र सियोलको मौसम पूर्वानुमान सुनिरहेका छन्।'
  },
  conversation: [
    {
      speaker: '기상 캐스터 1',
      korean: '대구 지역 날씨입니다. 오늘 대구는 맑겠습니다. 최저 기온 8도, 최고 기온 22도로 일교차가 크겠습니다. 따뜻한 겉옷을 준비하시기 바랍니다.',
      english: 'Here\'s the weather for the Daegu area. Today Daegu will be clear. With a low of 8 degrees and a high of 22 degrees, there will be a large temperature difference. Please prepare a warm outer layer.',
      nepali: 'डेगु क्षेत्रको मौसम। आज डेगु सफा हुनेछ। न्यूनतम तापक्रम ८ डिग्री, अधिकतम २२ डिग्री, दिन-रातको तापक्रम भिन्नता ठूलो हुनेछ। न्यानो बाहिरी लुगा तयार गर्नुहोस्।'
    },
    {
      speaker: '기상 캐스터 2',
      korean: '서울 지역 날씨입니다. 서울은 폭염 주의보가 발령됐습니다. 최고 기온이 36도까지 올라가겠고, 밤에도 기온이 25도 이하로 내려가지 않는 열대야가 계속되겠습니다. 충분한 수분 섭취와 함께 야외 활동을 자제해 주시기 바랍니다.',
      english: 'Here\'s the weather for the Seoul area. A heatwave advisory has been issued for Seoul. The high will rise to 36 degrees, and tropical nights where temperatures don\'t drop below 25 degrees will continue at night. Please drink plenty of water and refrain from outdoor activities.',
      nepali: 'सियोल क्षेत्रको मौसम। सियोलमा हिटवेभ चेतावनी जारी भएको छ। अधिकतम तापक्रम ३६ डिग्रीसम्म बढ्नेछ, र रातमा पनि तापक्रम २५ डिग्रीभन्दा तल नझर्ने उष्णकटिबन्धीय रात जारी रहनेछ। पर्याप्त पानी पिउनुहोस् र बाहिरी गतिविधि कम गर्नुहोस्।'
    }
  ],
  keyExpressions: [
    {
      korean: '일교차가 크겠습니다',
      english: 'There will be a large temperature difference',
      nepali: 'दिन-रातको तापक्रम भिन्नता ठूलो हुनेछ',
      explanation: 'Formal weather forecast language using -겠- for prediction'
    },
    {
      korean: '폭염 주의보가 발령됐습니다',
      english: 'A heatwave advisory has been issued',
      nepali: 'हिटवेभ चेतावनी जारी भएको छ',
      explanation: 'Formal weather warning announcement'
    }
  ]
};

// ============================================
// PAGES 209-210 - 읽기 (Reading)
// ============================================

export const readings = [
  {
    id: 1,
    page: 209,
    title: {
      korean: '춘곤증의 원인과 예방법',
      english: 'Causes and Prevention of Spring Fatigue',
      nepali: 'वसन्त थकानको कारण र रोकथाम'
    },
    content: {
      korean: `봄이 되면 많은 사람들이 피곤함을 느끼고, 낮에 졸음이 오고, 집중이 안 되는 증상을 경험한다. 이것을 '춘곤증'이라고 한다.

춘곤증은 왜 생길까? 겨울 동안 추위에 적응했던 우리 몸이 따뜻한 봄 날씨에 다시 적응하는 과정에서 피로를 느끼기 때문이다. 또한 봄에는 활동량이 늘어나는데 우리 몸이 이 변화를 따라가지 못하면 춘곤증이 나타난다.

춘곤증을 예방하려면 어떻게 해야 할까? 첫째, 규칙적인 운동을 하는 것이 좋다. 가벼운 산책이나 스트레칭으로 몸을 깨워 주자. 둘째, 비타민이 풍부한 과일과 채소를 많이 먹는 것이 좋다. 셋째, 충분한 수면을 취하되 너무 오래 자는 것은 오히려 더 피곤하게 만들 수 있다. 7~8시간 정도의 수면이 적당하다.`,
      english: `When spring comes, many people feel tired, drowsy during the day, and experience symptoms of being unable to concentrate. This is called 'spring fatigue' (춘곤증).

Why does spring fatigue occur? It's because our bodies, which had adapted to the cold during winter, feel fatigued in the process of readapting to warm spring weather. Also, activity levels increase in spring, and if our bodies can't keep up with this change, spring fatigue appears.

How can we prevent spring fatigue? First, it's good to exercise regularly. Let's wake up our bodies with light walks or stretching. Second, it's good to eat plenty of fruits and vegetables rich in vitamins. Third, get sufficient sleep, but sleeping too long can actually make you more tired. About 7-8 hours of sleep is appropriate.`,
      nepali: `वसन्त आउँदा धेरै मानिसहरू थकान महसुस गर्छन्, दिनमा निद्रा लाग्छ, र ध्यान केन्द्रित गर्न नसक्ने लक्षण अनुभव गर्छन्। यसलाई 'वसन्त थकान' (춘곤증) भनिन्छ।

वसन्त थकान किन हुन्छ? जाडोमा चिसोमा बानी परेको हाम्रो शरीर न्यानो वसन्त मौसममा पुनः अनुकूलन हुने प्रक्रियामा थकान महसुस गर्छ। साथै, वसन्तमा गतिविधिको स्तर बढ्छ, र हाम्रो शरीरले यो परिवर्तनलाई पछ्याउन नसक्दा वसन्त थकान देखिन्छ।

वसन्त थकान रोक्न के गर्नुपर्छ? पहिलो, नियमित व्यायाम गर्नु राम्रो हो। हल्का हिँडाइ वा स्ट्रेचिङले शरीर जगाउनुहोस्। दोस्रो, भिटामिन भरपूर फलफूल र तरकारी धेरै खानु राम्रो हो। तेस्रो, पर्याप्त निद्रा लिनुहोस्, तर धेरै सुत्दा उल्टै थकान बढ्न सक्छ। ७-८ घण्टा निद्रा उचित हो।`
    },
    vocabulary: [
      { korean: '춘곤증', english: 'spring fatigue', nepali: 'वसन्त थकान' },
      { korean: '졸음', english: 'drowsiness', nepali: 'निद्रा/तन्द्रा' },
      { korean: '적응하다', english: 'to adapt', nepali: 'अनुकूलन हुनु' },
      { korean: '활동량', english: 'amount of activity', nepali: 'गतिविधिको स्तर' },
      { korean: '예방', english: 'prevention', nepali: 'रोकथाम' },
      { korean: '수면', english: 'sleep', nepali: 'निद्रा' }
    ],
    comprehensionQuestions: [
      {
        question: {
          korean: '춘곤증은 왜 생깁니까?',
          english: 'Why does spring fatigue occur?',
          nepali: 'वसन्त थकान किन हुन्छ?'
        },
        answer: {
          korean: '겨울에 적응했던 몸이 따뜻한 봄 날씨에 다시 적응하면서 피로를 느끼기 때문입니다.',
          english: 'Because the body that adapted to winter feels fatigued while readapting to warm spring weather.',
          nepali: 'जाडोमा बानी परेको शरीर न्यानो वसन्त मौसममा पुनः अनुकूलन हुँदा थकान महसुस गर्छ।'
        }
      },
      {
        question: {
          korean: '춘곤증을 예방하는 방법에는 무엇이 있습니까?',
          english: 'What are ways to prevent spring fatigue?',
          nepali: 'वसन्त थकान रोक्ने तरिकाहरू के-के छन्?'
        },
        answer: {
          korean: '규칙적인 운동, 비타민이 풍부한 음식, 7~8시간의 충분한 수면이 도움이 됩니다.',
          english: 'Regular exercise, vitamin-rich food, and 7-8 hours of sufficient sleep help.',
          nepali: 'नियमित व्यायाम, भिटामिन भरपूर खाना, र ७-८ घण्टा पर्याप्त निद्रा सहयोगी हुन्छ।'
        }
      }
    ]
  }
];

// ============================================
// PAGE 212 - 문화 (Culture)
// ============================================

export const culture = {
  page: 212,
  title: {
    korean: '한국의 절기',
    english: 'Korean Solar Terms',
    nepali: 'कोरियाली सौर्य ऋतुहरू'
  },
  sections: [
    {
      subtitle: {
        korean: '입춘 (立春)',
        english: 'Start of Spring (Ipchun)',
        nepali: 'वसन्तको सुरु (इप्चुन)'
      },
      content: {
        korean: '2월 4일경으로, 봄이 시작되는 날입니다. 이날 대문에 \'입춘대길\'이라고 쓴 글을 붙이는 풍습이 있습니다.',
        english: 'Around February 4th, it is the day spring begins. There is a custom of posting the writing "입춘대길" (great luck on the first day of spring) on the main gate.',
        nepali: 'फेब्रुअरी ४ तारिखतिर, वसन्त सुरु हुने दिन हो। यस दिन मुख्य ढोकामा "입춘대길" (वसन्तको पहिलो दिनमा शुभ) लेख्ने चलन छ।'
      }
    },
    {
      subtitle: {
        korean: '춘분 (春分)',
        english: 'Spring Equinox (Chunbun)',
        nepali: 'वसन्त विषुव (चुनबुन)'
      },
      content: {
        korean: '3월 20~21일경으로, 낮과 밤의 길이가 같아지는 날입니다. 본격적인 봄의 시작을 알립니다.',
        english: 'Around March 20-21, it is the day when day and night are equal in length. It signals the full start of spring.',
        nepali: 'मार्च २०-२१ तारिखतिर, दिन र रातको लम्बाइ बराबर हुने दिन हो। पूर्ण वसन्तको सुरु जनाउँछ।'
      }
    },
    {
      subtitle: {
        korean: '하지 (夏至)',
        english: 'Summer Solstice (Haji)',
        nepali: 'ग्रीष्म संक्रान्ति (हाजी)'
      },
      content: {
        korean: '6월 21~22일경으로, 일 년 중 낮이 가장 긴 날입니다. 이날부터 본격적인 더위가 시작됩니다.',
        english: 'Around June 21-22, it is the longest day of the year. Real heat begins from this day.',
        nepali: 'जुन २१-२२ तारिखतिर, वर्षको सबैभन्दा लामो दिन हो। यस दिनबाट वास्तविक गर्मी सुरु हुन्छ।'
      }
    },
    {
      subtitle: {
        korean: '추분 (秋分)',
        english: 'Autumn Equinox (Chubun)',
        nepali: 'शरद विषुव (चुबुन)'
      },
      content: {
        korean: '9월 22~23일경으로, 춘분과 마찬가지로 낮과 밤의 길이가 같아지는 날입니다. 이날부터 밤이 길어지기 시작합니다.',
        english: 'Around September 22-23, like the spring equinox, day and night are equal. Nights begin to get longer from this day.',
        nepali: 'सेप्टेम्बर २२-२३ तारिखतिर, वसन्त विषुव जस्तै दिन र रात बराबर हुन्छ। यस दिनबाट रात लामो हुन थाल्छ।'
      }
    },
    {
      subtitle: {
        korean: '동지 (冬至)',
        english: 'Winter Solstice (Dongji)',
        nepali: 'शीत संक्रान्ति (डोङ्जी)'
      },
      content: {
        korean: '12월 21~22일경으로, 일 년 중 밤이 가장 긴 날입니다. 한국에서는 이날 팥죽을 먹는 풍습이 있습니다.',
        english: 'Around December 21-22, it is the longest night of the year. In Korea, there is a custom of eating red bean porridge on this day.',
        nepali: 'डिसेम्बर २१-२२ तारिखतिर, वर्षको सबैभन्दा लामो रात हो। कोरियामा यस दिन रातो सिमी खीर (팥죽) खाने चलन छ।'
      }
    }
  ],
  tips: [
    {
      korean: '한국에는 24절기가 있어서 계절의 변화를 세밀하게 나누어 놓았습니다.',
      english: 'Korea has 24 solar terms that finely divide seasonal changes.',
      nepali: 'कोरियामा २४ सौर्य ऋतुहरू छन् जसले मौसमको परिवर्तनलाई विस्तृत रूपमा विभाजन गर्दछ।'
    },
    {
      korean: '절기는 농사와 밀접한 관련이 있어서 예로부터 중요하게 여겨졌습니다.',
      english: 'Solar terms are closely related to farming and have been considered important since ancient times.',
      nepali: 'सौर्य ऋतुहरू खेतीसँग नजिकको सम्बन्ध भएकोले पुरानो समयदेखि नै महत्त्वपूर्ण मानिन्थ्यो।'
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
      korean: '낮과 밤의 기온 차이가 큰 것을 무엇이라고 합니까?',
      english: 'What do you call a large temperature difference between day and night?',
      nepali: 'दिन र रातको तापक्रम भिन्नता ठूलो हुने अवस्थालाई के भनिन्छ?'
    },
    options: [
      { korean: '일교차가 크다', english: 'Large day-night temperature difference' },
      { korean: '습도가 높다', english: 'High humidity' },
      { korean: '체감 온도', english: 'Perceived temperature' },
      { korean: '미세 먼지', english: 'Fine dust' }
    ],
    correctAnswer: 0,
    explanation: {
      korean: '일교차는 하루 중 최고 기온과 최저 기온의 차이를 말합니다.',
      english: '일교차 refers to the difference between the day\'s highest and lowest temperatures.',
      nepali: '일교차 ले दिनको अधिकतम र न्यूनतम तापक्रमको भिन्नतालाई भन्छ।'
    }
  },
  {
    id: 2,
    type: 'grammar',
    question: {
      korean: '"오후에 비가 ___ 우산을 가지고 가세요"에서 빈칸에 알맞은 것은?',
      english: 'What goes in the blank: "It will probably rain in the afternoon ___ take an umbrella"?',
      nepali: 'खाली ठाउँमा के आउँछ?'
    },
    options: [
      { korean: '올 텐데', english: 'will probably come (so)' },
      { korean: '오면', english: 'if it comes' },
      { korean: '와서', english: 'because it came' },
      { korean: '오니까', english: 'since it comes' }
    ],
    correctAnswer: 0,
    explanation: {
      korean: '-(으)ㄹ 텐데는 미래 상황을 추측하면서 조언이나 걱정을 나타냅니다.',
      english: '-(으)ㄹ 텐데 expresses a guess about a future situation while giving advice or showing concern.',
      nepali: '-(으)ㄹ 텐데 ले भविष्यको परिस्थितिको बारेमा अनुमान गर्दै सल्लाह वा चिन्ता व्यक्त गर्छ।'
    }
  },
  {
    id: 3,
    type: 'grammar',
    question: {
      korean: '"공원에 꽃이 많이 ___"에서 빈칸에 알맞은 것은?',
      english: 'What goes in the blank: "Many flowers ___ in the park"?',
      nepali: 'खाली ठाउँमा के आउँछ?'
    },
    options: [
      { korean: '피어 있어요', english: 'are in bloom (state)' },
      { korean: '피고 있어요', english: 'are blooming (process)' },
      { korean: '필 거예요', english: 'will bloom' },
      { korean: '피었어요', english: 'bloomed' }
    ],
    correctAnswer: 0,
    explanation: {
      korean: '-아/어 있다는 완료된 동작의 결과가 지속되는 상태를 나타냅니다. 꽃이 피어서 그 상태가 계속됩니다.',
      english: '-아/어 있다 describes the state where the result of a completed action continues. The flowers bloomed and remain in that state.',
      nepali: '-아/어 있다 ले पूरा भएको कार्यको नतिजा जारी रहेको अवस्था वर्णन गर्छ। फूलहरू फुलेर त्यो अवस्थामा रहेका छन्।'
    }
  },
  {
    id: 4,
    type: 'vocabulary',
    question: {
      korean: '봄에 피곤하고 졸리고 집중이 안 되는 증상을 무엇이라고 합니까?',
      english: 'What is the condition of feeling tired, drowsy, and unable to concentrate in spring called?',
      nepali: 'वसन्तमा थकान, निद्रा र ध्यान केन्द्रित गर्न नसक्ने अवस्थालाई के भनिन्छ?'
    },
    options: [
      { korean: '독감', english: 'Flu' },
      { korean: '불면증', english: 'Insomnia' },
      { korean: '춘곤증', english: 'Spring fatigue' },
      { korean: '우울증', english: 'Depression' }
    ],
    correctAnswer: 2,
    explanation: {
      korean: '춘곤증은 봄에 느끼는 피곤함, 졸음, 집중력 저하 등의 증상입니다.',
      english: '춘곤증 (spring fatigue) refers to symptoms of tiredness, drowsiness, and poor concentration felt in spring.',
      nepali: '춘곤증 (वसन्त थकान) वसन्तमा महसुस हुने थकान, निद्रा, र ध्यान केन्द्रित नहुने लक्षण हो।'
    }
  },
  {
    id: 5,
    type: 'grammar',
    question: {
      korean: '"바쁘실 ___ 시간을 내 주셔서 감사합니다"에서 빈칸에 알맞은 것은?',
      english: 'What goes in the blank: "You must be busy ___ thank you for making time"?',
      nepali: 'खाली ठाउँमा के आउँछ?'
    },
    options: [
      { korean: '텐데', english: 'probably (so/but)' },
      { korean: '면', english: 'if' },
      { korean: '니까', english: 'because' },
      { korean: '지만', english: 'but' }
    ],
    correctAnswer: 0,
    explanation: {
      korean: '-(으)ㄹ 텐데는 상대의 상황을 추측하며 감사나 미안함을 표현할 때 사용합니다.',
      english: '-(으)ㄹ 텐데 is used when guessing the other person\'s situation and expressing gratitude or apology.',
      nepali: '-(으)ㄹ 텐데 अर्को व्यक्तिको अवस्था अनुमान गर्दै कृतज्ञता वा माफी व्यक्त गर्दा प्रयोग गरिन्छ।'
    }
  },
  {
    id: 6,
    type: 'vocabulary',
    question: {
      korean: '기온이 매우 높아서 발령되는 기상 특보는 무엇입니까?',
      english: 'What weather warning is issued when temperatures are very high?',
      nepali: 'तापक्रम धेरै बढी भएमा जारी हुने मौसम चेतावनी कुन हो?'
    },
    options: [
      { korean: '한파 경보', english: 'Cold wave warning' },
      { korean: '호우 경보', english: 'Heavy rain warning' },
      { korean: '폭염 주의보', english: 'Heatwave advisory' },
      { korean: '미세 먼지 주의보', english: 'Fine dust advisory' }
    ],
    correctAnswer: 2,
    explanation: {
      korean: '폭염 주의보는 기온이 매우 높을 때 발령되는 기상 특보입니다.',
      english: 'A heatwave advisory is a weather warning issued when temperatures are very high.',
      nepali: 'हिटवेभ चेतावनी तापक्रम धेरै बढी हुँदा जारी हुने मौसम चेतावनी हो।'
    }
  },
  {
    id: 7,
    type: 'grammar',
    question: {
      korean: '"전원이 ___ 있어요"에서 전화기가 꺼진 상태를 나타내려면?',
      english: 'To express the phone is in a turned-off state: "The power is ___"?',
      nepali: 'फोन बन्द अवस्थामा छ भन्न: "पावर ___ छ"?'
    },
    options: [
      { korean: '꺼져', english: 'turned off (state)' },
      { korean: '꺼지고', english: 'turning off (and)' },
      { korean: '꺼질', english: 'will turn off' },
      { korean: '꺼지면', english: 'if it turns off' }
    ],
    correctAnswer: 0,
    explanation: {
      korean: '-아/어 있다를 사용해서 전원이 꺼진 결과 상태가 지속됨을 나타냅니다.',
      english: 'Using -아/어 있다 to show the resulting state of being turned off continues.',
      nepali: '-아/어 있다 प्रयोग गरेर बन्द भएको नतिजा अवस्था जारी रहेको जनाउँछ।'
    }
  },
  {
    id: 8,
    type: 'vocabulary',
    question: {
      korean: '한국에서 동지에 먹는 음식은 무엇입니까?',
      english: 'What food is eaten on the winter solstice in Korea?',
      nepali: 'कोरियामा शीत संक्रान्तिमा कुन खाना खाइन्छ?'
    },
    options: [
      { korean: '떡국', english: 'Rice cake soup' },
      { korean: '팥죽', english: 'Red bean porridge' },
      { korean: '비빔밥', english: 'Bibimbap' },
      { korean: '송편', english: 'Songpyeon rice cakes' }
    ],
    correctAnswer: 1,
    explanation: {
      korean: '동지에는 팥죽을 먹는 풍습이 있습니다. 팥의 붉은색이 나쁜 기운을 쫓아낸다고 믿었습니다.',
      english: 'There is a custom of eating red bean porridge on the winter solstice. The red color of beans was believed to ward off bad energy.',
      nepali: 'शीत संक्रान्तिमा रातो सिमी खीर (팥죽) खाने चलन छ। रातो सिमीको रातो रङले नराम्रो ऊर्जा भगाउँछ भन्ने विश्वास थियो।'
    }
  },
  {
    id: 9,
    type: 'grammar',
    question: {
      korean: '"친구가 기다리고 ___ 빨리 가야겠어요"에서 빈칸에 알맞은 것은?',
      english: 'What goes in the blank: "My friend is probably waiting ___ I should go quickly"?',
      nepali: 'खाली ठाउँमा के आउँछ?'
    },
    options: [
      { korean: '있을 텐데', english: 'probably is (so)' },
      { korean: '있어서', english: 'because is' },
      { korean: '있으면', english: 'if is' },
      { korean: '있지만', english: 'but is' }
    ],
    correctAnswer: 0,
    explanation: {
      korean: '-(으)ㄹ 텐데는 추측과 함께 다음 행동의 이유를 나타냅니다.',
      english: '-(으)ㄹ 텐데 expresses a guess along with the reason for the next action.',
      nepali: '-(으)ㄹ 텐데 ले अनुमानसँगै अर्को कार्यको कारण जनाउँछ।'
    }
  },
  {
    id: 10,
    type: 'vocabulary',
    question: {
      korean: '춘곤증을 예방하는 방법으로 올바르지 않은 것은?',
      english: 'Which is NOT a correct way to prevent spring fatigue?',
      nepali: 'वसन्त थकान रोक्ने तरिकामा गलत कुन हो?'
    },
    options: [
      { korean: '규칙적인 운동', english: 'Regular exercise' },
      { korean: '비타민이 풍부한 음식', english: 'Vitamin-rich food' },
      { korean: '하루 12시간 이상 수면', english: 'Sleeping 12+ hours a day' },
      { korean: '7~8시간 수면', english: '7-8 hours of sleep' }
    ],
    correctAnswer: 2,
    explanation: {
      korean: '너무 오래 자는 것은 오히려 더 피곤하게 만들 수 있습니다. 7~8시간 정도가 적당합니다.',
      english: 'Sleeping too long can actually make you more tired. About 7-8 hours is appropriate.',
      nepali: 'धेरै सुत्दा उल्टै थकान बढ्न सक्छ। ७-८ घण्टा उचित हो।'
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
  weatherVocabulary,
  weatherChangesVocabulary,
  weatherWarningsVocabulary,
  seasonalVocabulary,
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
