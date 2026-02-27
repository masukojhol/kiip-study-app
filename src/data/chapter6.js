// KIIP Level 3 - Chapter 6: 주거 환경 (Living Environment)

export const chapterInfo = {
  chapter: 6,
  title: {
    korean: '주거 환경',
    english: 'Living Environment',
    nepali: 'बसोबास वातावरण'
  }
};

export const vocabulary = [
  // Urban Environment
  {
    id: 1,
    category: 'Urban',
    korean: '문화 시설',
    pronunciation: 'munhwa shiseol',
    english: 'Cultural facilities',
    nepali: 'सांस्कृतिक सुविधाहरू',
    example: {
      korean: '이 지역에는 문화 시설이 많아요.',
      english: 'There are many cultural facilities in this area.',
      nepali: 'यस क्षेत्रमा धेरै सांस्कृतिक सुविधाहरू छन्।'
    }
  },
  {
    id: 2,
    category: 'Urban',
    korean: '거리',
    pronunciation: 'geori',
    english: 'Streets',
    nepali: 'सडकहरू / गल्लीहरू',
    example: {
      korean: '거리가 깨끗해요.',
      english: 'The streets are clean.',
      nepali: 'सडकहरू सफा छन्।'
    }
  },
  {
    id: 3,
    category: 'Environment',
    korean: '공기',
    pronunciation: 'gonggi',
    english: 'Air',
    nepali: 'हावा',
    example: {
      korean: '시골의 공기가 맑아요.',
      english: 'The air in the countryside is clean.',
      nepali: 'गाउँको हावा सफा छ।'
    }
  },
  {
    id: 4,
    category: 'Environment',
    korean: '소음',
    pronunciation: 'soeum',
    english: 'Noise',
    nepali: 'शोर / आवाज',
    example: {
      korean: '도시에는 소음이 많아요.',
      english: 'There is a lot of noise in the city.',
      nepali: 'शहरमा धेरै शोर छ।'
    }
  },
  {
    id: 5,
    category: 'Urban',
    korean: '공원',
    pronunciation: 'gongwon',
    english: 'Park',
    nepali: 'पार्क / उद्यान',
    example: {
      korean: '아파트 근처에 공원이 있어요.',
      english: 'There is a park near the apartment.',
      nepali: 'अपार्टमेन्ट नजिक पार्क छ।'
    }
  },
  {
    id: 6,
    category: 'Urban',
    korean: '산책로',
    pronunciation: 'sanchaekro',
    english: 'Walking path',
    nepali: 'हिँड्ने बाटो',
    example: {
      korean: '산책로에서 자전거를 타도 돼요.',
      english: 'You can ride a bicycle on the walking path.',
      nepali: 'हिँड्ने बाटोमा साइकल चलाउन पाइन्छ।'
    }
  },
  {
    id: 7,
    category: 'Urban',
    korean: '빌딩 숲',
    pronunciation: 'bilding sup',
    english: 'Building forest (concrete jungle)',
    nepali: 'भवन जङ्गल (कंक्रीट जङ्गल)',
    example: {
      korean: '서울은 빌딩 숲이에요.',
      english: 'Seoul is a concrete jungle.',
      nepali: 'सियोल भवन जङ्गल हो।'
    }
  },
  {
    id: 8,
    category: 'Urban',
    korean: '산업 단지',
    pronunciation: 'saneop danji',
    english: 'Industrial complex',
    nepali: 'औद्योगिक क्षेत्र',
    example: {
      korean: '이 지역에 산업 단지가 있어요.',
      english: 'There is an industrial complex in this area.',
      nepali: 'यस क्षेत्रमा औद्योगिक क्षेत्र छ।'
    }
  },
  {
    id: 9,
    category: 'Adjectives',
    korean: '안전하다',
    pronunciation: 'anjeonhada',
    english: 'Safe',
    nepali: 'सुरक्षित',
    example: {
      korean: '이 동네는 안전해요.',
      english: 'This neighborhood is safe.',
      nepali: 'यो छिमेक सुरक्षित छ।'
    }
  },
  // Rural Environment
  {
    id: 10,
    category: 'Rural',
    korean: '자연환경',
    pronunciation: 'jayeonhwangyeong',
    english: 'Natural environment',
    nepali: 'प्राकृतिक वातावरण',
    example: {
      korean: '시골의 자연환경이 좋아요.',
      english: 'The natural environment of the countryside is good.',
      nepali: 'गाउँको प्राकृतिक वातावरण राम्रो छ।'
    }
  },
  {
    id: 11,
    category: 'Adjectives',
    korean: '한적하다',
    pronunciation: 'hanjeokada',
    english: 'Quiet, serene, peaceful',
    nepali: 'शान्त, एकान्त',
    example: {
      korean: '시골은 한적해서 좋아요.',
      english: 'The countryside is nice because it\'s quiet.',
      nepali: 'गाउँ शान्त भएकोले राम्रो छ।'
    }
  },
  {
    id: 12,
    category: 'Rural',
    korean: '과수원',
    pronunciation: 'gwasuwon',
    english: 'Orchard',
    nepali: 'फलफूल बगान',
    example: {
      korean: '시골에 과수원이 있어요.',
      english: 'There is an orchard in the countryside.',
      nepali: 'गाउँमा फलफूल बगान छ।'
    }
  },
  {
    id: 13,
    category: 'Rural',
    korean: '농사',
    pronunciation: 'nongsa',
    english: 'Farming',
    nepali: 'खेती',
    example: {
      korean: '부모님이 농사를 지으세요.',
      english: 'My parents do farming.',
      nepali: 'आमाबुवाले खेती गर्नुहुन्छ।'
    }
  },
  {
    id: 14,
    category: 'Rural',
    korean: '경치',
    pronunciation: 'gyeongchi',
    english: 'Scenery',
    nepali: 'दृश्य',
    example: {
      korean: '산의 경치가 아름다워요.',
      english: 'The mountain scenery is beautiful.',
      nepali: 'पहाडको दृश्य सुन्दर छ।'
    }
  },
  {
    id: 15,
    category: 'Rural',
    korean: '비닐하우스',
    pronunciation: 'binilhauseu',
    english: 'Greenhouse (vinyl house)',
    nepali: 'ग्रीनहाउस (प्लास्टिक घर)',
    example: {
      korean: '비닐하우스에서 채소를 길러요.',
      english: 'They grow vegetables in the greenhouse.',
      nepali: 'ग्रीनहाउसमा तरकारी उमार्छन्।'
    }
  },
  {
    id: 16,
    category: 'Rural',
    korean: '논',
    pronunciation: 'non',
    english: 'Rice paddy',
    nepali: 'धान खेत',
    example: {
      korean: '논에서 쌀을 재배해요.',
      english: 'They cultivate rice in the rice paddy.',
      nepali: 'धान खेतमा चामल खेती गर्छन्।'
    }
  },
  {
    id: 17,
    category: 'Rural',
    korean: '밭',
    pronunciation: 'bat',
    english: 'Field (dry field)',
    nepali: 'खेत (सुक्खा खेत)',
    example: {
      korean: '밭에서 감자를 심어요.',
      english: 'They plant potatoes in the field.',
      nepali: 'खेतमा आलु रोप्छन्।'
    }
  },
  {
    id: 18,
    category: 'Rural',
    korean: '하천',
    pronunciation: 'hacheon',
    english: 'Stream/river',
    nepali: 'खोला / नदी',
    example: {
      korean: '집 앞에 하천이 흘러요.',
      english: 'A stream flows in front of the house.',
      nepali: 'घर अगाडि खोला बग्छ।'
    }
  },
  // Housing related
  {
    id: 19,
    category: 'Housing',
    korean: '아파트',
    pronunciation: 'apateu',
    english: 'Apartment',
    nepali: 'अपार्टमेन्ट',
    example: {
      korean: '서울에서 아파트에 살아요.',
      english: 'I live in an apartment in Seoul.',
      nepali: 'सियोलमा अपार्टमेन्टमा बस्छु।'
    }
  },
  {
    id: 20,
    category: 'Housing',
    korean: '단독주택',
    pronunciation: 'dandokjutaek',
    english: 'Single-family house',
    nepali: 'एकल परिवार घर',
    example: {
      korean: '시골에는 단독주택이 많아요.',
      english: 'There are many single-family houses in the countryside.',
      nepali: 'गाउँमा एकल परिवार घर धेरै छन्।'
    }
  },
  {
    id: 21,
    category: 'Housing',
    korean: '놀이터',
    pronunciation: 'noriter',
    english: 'Playground',
    nepali: 'खेल मैदान',
    example: {
      korean: '105동 앞에 놀이터가 있어요.',
      english: 'There is a playground in front of building 105.',
      nepali: '१०५ भवन अगाडि खेल मैदान छ।'
    }
  },
  {
    id: 22,
    category: 'Housing',
    korean: '동네',
    pronunciation: 'dongne',
    english: 'Neighborhood',
    nepali: 'छिमेक / टोल',
    example: {
      korean: '이 동네가 마음에 들어요.',
      english: 'I like this neighborhood.',
      nepali: 'यो छिमेक मन पर्छ।'
    }
  },
  {
    id: 23,
    category: 'Housing',
    korean: '이웃',
    pronunciation: 'iut',
    english: 'Neighbor',
    nepali: 'छिमेकी',
    example: {
      korean: '이웃이 친절해요.',
      english: 'The neighbors are kind.',
      nepali: 'छिमेकीहरू दयालु छन्।'
    }
  },
  {
    id: 24,
    category: 'Urban',
    korean: '지하철역',
    pronunciation: 'jihacheol-yeok',
    english: 'Subway station',
    nepali: 'मेट्रो स्टेशन',
    example: {
      korean: '지하철역 근처에 살고 싶어요.',
      english: 'I want to live near a subway station.',
      nepali: 'मेट्रो स्टेशन नजिक बस्न चाहन्छु।'
    }
  },
  {
    id: 25,
    category: 'Urban',
    korean: '학군',
    pronunciation: 'hakgun',
    english: 'School district',
    nepali: 'विद्यालय क्षेत्र',
    example: {
      korean: '학군이 좋은 곳에 살고 싶어요.',
      english: 'I want to live in a good school district.',
      nepali: 'राम्रो विद्यालय क्षेत्रमा बस्न चाहन्छु।'
    }
  },
  {
    id: 26,
    category: 'Environment',
    korean: '맑다',
    pronunciation: 'makda',
    english: 'Clear, clean (air/water)',
    nepali: 'सफा, स्वच्छ',
    example: {
      korean: '공기가 맑아요.',
      english: 'The air is clean.',
      nepali: 'हावा सफा छ।'
    }
  },
  {
    id: 27,
    category: 'Environment',
    korean: '오염',
    pronunciation: 'oyeom',
    english: 'Pollution',
    nepali: 'प्रदूषण',
    example: {
      korean: '도시는 공기 오염이 심해요.',
      english: 'Air pollution is severe in the city.',
      nepali: 'शहरमा वायु प्रदूषण गम्भीर छ।'
    }
  },
  {
    id: 28,
    category: 'Rural',
    korean: '시골',
    pronunciation: 'sigol',
    english: 'Countryside',
    nepali: 'गाउँ',
    example: {
      korean: '부모님은 시골에 사세요.',
      english: 'My parents live in the countryside.',
      nepali: 'आमाबुवा गाउँमा बस्नुहुन्छ।'
    }
  },
  {
    id: 29,
    category: 'Urban',
    korean: '도시',
    pronunciation: 'dosi',
    english: 'City',
    nepali: 'शहर',
    example: {
      korean: '도시에서 일해요.',
      english: 'I work in the city.',
      nepali: 'शहरमा काम गर्छु।'
    }
  },
  {
    id: 30,
    category: 'Housing',
    korean: '이사하다',
    pronunciation: 'isahada',
    english: 'To move (residence)',
    nepali: 'सर्नु (घर)',
    example: {
      korean: '다음 달에 이사해요.',
      english: 'I\'m moving next month.',
      nepali: 'अर्को महिना सर्छु।'
    }
  },
  {
    id: 31,
    category: 'Environment',
    korean: '새소리',
    pronunciation: 'saesori',
    english: 'Bird sounds',
    nepali: 'चराको आवाज',
    example: {
      korean: '아침에 새소리가 들려요.',
      english: 'I can hear bird sounds in the morning.',
      nepali: 'बिहान चराको आवाज सुनिन्छ।'
    }
  },
  {
    id: 32,
    category: 'Environment',
    korean: '산',
    pronunciation: 'san',
    english: 'Mountain',
    nepali: 'पहाड',
    example: {
      korean: '집 뒤에 산이 보여요.',
      english: 'You can see mountains behind the house.',
      nepali: 'घर पछाडि पहाड देखिन्छ।'
    }
  },
  {
    id: 33,
    category: 'Culture',
    korean: '명당',
    pronunciation: 'myeongdang',
    english: 'Favorable location (feng shui)',
    nepali: 'शुभ स्थान (फेंग शुई)',
    example: {
      korean: '뒤에 산이 있고 앞에 물이 흐르면 명당이에요.',
      english: 'If there\'s a mountain behind and water flowing in front, it\'s a favorable location.',
      nepali: 'पछाडि पहाड र अगाडि पानी बगे शुभ स्थान हो।'
    }
  },
  {
    id: 34,
    category: 'Verbs',
    korean: '물리다',
    pronunciation: 'mullida',
    english: 'To be bitten (passive)',
    nepali: 'टोकिनु',
    example: {
      korean: '모기에 팔을 물렸어요.',
      english: 'I got bitten on the arm by a mosquito.',
      nepali: 'लामखुट्टेले हातमा टोक्यो।'
    }
  },
  {
    id: 35,
    category: 'Adjectives',
    korean: '시끄럽다',
    pronunciation: 'shikkeureobda',
    english: 'Noisy',
    nepali: 'शोरगुल भएको',
    example: {
      korean: '도시는 너무 시끄러워요.',
      english: 'The city is too noisy.',
      nepali: 'शहर धेरै शोरगुल भएको छ।'
    }
  },
  {
    id: 36,
    category: 'Adjectives',
    korean: '조용하다',
    pronunciation: 'joyonghada',
    english: 'Quiet',
    nepali: 'शान्त',
    example: {
      korean: '시골은 조용해요.',
      english: 'The countryside is quiet.',
      nepali: 'गाउँ शान्त छ।'
    }
  },
  {
    id: 37,
    category: 'Adjectives',
    korean: '편리하다',
    pronunciation: 'pyeollihada',
    english: 'Convenient',
    nepali: 'सुविधाजनक',
    example: {
      korean: '교통이 편리해요.',
      english: 'Transportation is convenient.',
      nepali: 'यातायात सुविधाजनक छ।'
    }
  },
  {
    id: 38,
    category: 'Adjectives',
    korean: '불편하다',
    pronunciation: 'bulpyeonhada',
    english: 'Inconvenient',
    nepali: 'असुविधाजनक',
    example: {
      korean: '시골은 교통이 불편해요.',
      english: 'Transportation is inconvenient in the countryside.',
      nepali: 'गाउँमा यातायात असुविधाजनक छ।'
    }
  },
  {
    id: 39,
    category: 'Urban',
    korean: '교통',
    pronunciation: 'gyotong',
    english: 'Transportation',
    nepali: 'यातायात',
    example: {
      korean: '교통이 좋은 곳에 살고 싶어요.',
      english: 'I want to live where transportation is good.',
      nepali: 'राम्रो यातायात भएको ठाउँमा बस्न चाहन्छु।'
    }
  },
  {
    id: 40,
    category: 'Housing',
    korean: '입주하다',
    pronunciation: 'ipjuhada',
    english: 'To move in',
    nepali: 'बस्न थाल्नु',
    example: {
      korean: '새 아파트에 입주했어요.',
      english: 'I moved into a new apartment.',
      nepali: 'नयाँ अपार्टमेन्टमा बस्न थालेँ।'
    }
  }
];

export const grammar = [
  {
    id: 1,
    pattern: 'Passive Voice (피동) - 이/히/리/기',
    meaning: {
      english: 'To be done (action happens to the subject)',
      nepali: 'हुनु (कार्य विषयमा हुन्छ)'
    },
    description: {
      english: 'Korean passive voice is formed by adding suffixes 이, 히, 리, or 기 to verb stems. It describes actions that happen TO the subject rather than actions the subject does.',
      nepali: 'कोरियन कर्मवाच्य क्रिया स्टेममा इ, हि, रि, वा गि प्रत्यय थपेर बनाइन्छ। यसले विषयले गर्ने होइन, विषयमा हुने कार्य वर्णन गर्छ।'
    },
    whenToUse: {
      situations: [
        {
          situation: {
            english: 'When describing being bitten by something',
            nepali: 'केहीले टोकेको वर्णन गर्दा'
          },
          example: {
            korean: '모기에 팔을 물렸어요.',
            english: 'I got bitten on the arm by a mosquito.',
            nepali: 'लामखुट्टेले हातमा टोक्यो।'
          }
        },
        {
          situation: {
            english: 'When something is seen or visible',
            nepali: 'केहि देखिँदा'
          },
          example: {
            korean: '집에서 산이 보여요.',
            english: 'Mountains are visible from the house.',
            nepali: 'घरबाट पहाड देखिन्छ।'
          }
        },
        {
          situation: {
            english: 'When something is heard',
            nepali: 'केहि सुनिँदा'
          },
          example: {
            korean: '새소리가 들려요.',
            english: 'Bird sounds can be heard.',
            nepali: 'चराको आवाज सुनिन्छ।'
          }
        },
        {
          situation: {
            english: 'When a door is opened/closed (by itself or someone)',
            nepali: 'ढोका खोलिएको/बन्द भएको'
          },
          example: {
            korean: '문이 열렸어요.',
            english: 'The door was opened.',
            nepali: 'ढोका खोलियो।'
          }
        }
      ]
    },
    whereToUse: {
      english: 'Used in everyday conversation to describe states, conditions, or actions that happen to objects/people.',
      nepali: 'वस्तु/व्यक्तिमा हुने अवस्था, स्थिति, वा कार्य वर्णन गर्न दैनिक कुराकानीमा प्रयोग।'
    },
    formality: {
      english: 'Neutral - can be used in both formal and informal situations.',
      nepali: 'तटस्थ - औपचारिक र अनौपचारिक दुवैमा प्रयोग हुन्छ।'
    },
    formation: {
      rule: 'Active Verb Stem + 이/히/리/기 → Passive Verb',
      notes: {
        english: 'Each verb has a specific passive suffix. 이: 보다→보이다 (be seen), 쓰다→쓰이다 (be used). 히: 읽다→읽히다 (be read), 먹다→먹히다 (be eaten). 리: 듣다→들리다 (be heard), 열다→열리다 (be opened). 기: 안다→안기다 (be held).',
        nepali: 'प्रत्येक क्रियाको विशेष कर्मवाच्य प्रत्यय छ। इ: 보다→보이다 (देखिनु)। हि: 읽다→읽히다 (पढिनु)। रि: 듣다→들리다 (सुनिनु)। गि: 안다→안기다 (समातिनु)।'
      },
      conjugationTable: [
        {
          verb: '보다 (to see)',
          stem: '보',
          result: '보이다 (to be seen)',
          english: 'to be seen/visible',
          nepali: 'देखिनु'
        },
        {
          verb: '듣다 (to hear)',
          stem: '듣',
          result: '들리다 (to be heard)',
          english: 'to be heard',
          nepali: 'सुनिनु'
        },
        {
          verb: '물다 (to bite)',
          stem: '물',
          result: '물리다 (to be bitten)',
          english: 'to be bitten',
          nepali: 'टोकिनु'
        },
        {
          verb: '열다 (to open)',
          stem: '열',
          result: '열리다 (to be opened)',
          english: 'to be opened',
          nepali: 'खुल्नु'
        },
        {
          verb: '닫다 (to close)',
          stem: '닫',
          result: '닫히다 (to be closed)',
          english: 'to be closed',
          nepali: 'बन्द हुनु'
        }
      ]
    },
    comparisonWithSimilar: {
      english: 'Active: 저는 문을 열었어요 (I opened the door). Passive: 문이 열렸어요 (The door was opened). Active focuses on who did it, passive focuses on what happened.',
      nepali: 'सक्रिय: 저는 문을 열었어요 (मैले ढोका खोलेँ)। कर्मवाच्य: 문이 열렸어요 (ढोका खोलियो)। सक्रियले कसले गर्यो केन्द्रित, कर्मवाच्यले के भयो केन्द्रित।'
    },
    examples: [
      {
        context: {
          english: 'Describing what you can see from home',
          nepali: 'घरबाट के देखिन्छ वर्णन गर्दा'
        },
        korean: '집에서 산이 보여요.',
        english: 'Mountains are visible from the house.',
        nepali: 'घरबाट पहाड देखिन्छ।'
      },
      {
        context: {
          english: 'Describing sounds you hear',
          nepali: 'सुनिने आवाज वर्णन गर्दा'
        },
        korean: '아침에 새소리가 들려요.',
        english: 'Bird sounds can be heard in the morning.',
        nepali: 'बिहान चराको आवाज सुनिन्छ।'
      },
      {
        context: {
          english: 'Bug bite situation',
          nepali: 'कीराले टोकेको अवस्था'
        },
        korean: '어제 모기에 많이 물렸어요.',
        english: 'I got bitten a lot by mosquitoes yesterday.',
        nepali: 'हिजो धेरै लामखुट्टेले टोक्यो।'
      },
      {
        context: {
          english: 'Door situation',
          nepali: 'ढोकाको अवस्था'
        },
        korean: '바람에 문이 닫혔어요.',
        english: 'The door was closed by the wind.',
        nepali: 'बतासले ढोका बन्द भयो।'
      },
      {
        context: {
          english: 'Language being used',
          nepali: 'भाषा प्रयोग'
        },
        korean: '이 단어는 많이 쓰여요.',
        english: 'This word is used a lot.',
        nepali: 'यो शब्द धेरै प्रयोग हुन्छ।'
      }
    ]
  },
  {
    id: 2,
    pattern: 'V + 자고 하다',
    meaning: {
      english: 'Someone suggests/proposed to do (indirect suggestion)',
      nepali: 'कसैले गर्न प्रस्ताव गर्छ (अप्रत्यक्ष सुझाव)'
    },
    description: {
      english: 'This pattern is used to report someone\'s suggestion or proposal. It\'s the indirect quotation form of "let\'s do" (V-자).',
      nepali: 'यो ढाँचा कसैको सुझाव वा प्रस्ताव रिपोर्ट गर्न प्रयोग हुन्छ। यो "गरौं" (V-자) को अप्रत्यक्ष उद्धरण हो।'
    },
    whenToUse: {
      situations: [
        {
          situation: {
            english: 'Reporting a suggestion to move house',
            nepali: 'घर सर्ने सुझाव रिपोर्ट गर्दा'
          },
          example: {
            korean: '남편이 이사 가자고 해요.',
            english: 'My husband suggests we move.',
            nepali: 'श्रीमानले सर्न जाऔं भन्नुहुन्छ।'
          }
        },
        {
          situation: {
            english: 'Reporting an invitation',
            nepali: 'निमन्त्रणा रिपोर्ट गर्दा'
          },
          example: {
            korean: '친구가 같이 밥 먹자고 했어요.',
            english: 'My friend suggested we eat together.',
            nepali: 'साथीले सँगै खाना खाऔं भन्यो।'
          }
        },
        {
          situation: {
            english: 'Reporting a proposal from coworker',
            nepali: 'सहकर्मीको प्रस्ताव रिपोर्ट गर्दा'
          },
          example: {
            korean: '동료가 주말에 등산 가자고 해요.',
            english: 'My coworker suggests we go hiking on the weekend.',
            nepali: 'सहकर्मीले सप्ताहन्तमा हाइकिङ जाऔं भन्छ।'
          }
        }
      ]
    },
    whereToUse: {
      english: 'Common in everyday conversation when talking about what others suggested or proposed.',
      nepali: 'अरूले सुझाव वा प्रस्ताव गरेको कुरा गर्दा दैनिक कुराकानीमा सामान्य।'
    },
    formality: {
      english: 'Neutral - formality depends on the ending: 해요 (polite), 합니다 (formal), 해 (casual).',
      nepali: 'तटस्थ - औपचारिकता अन्त्यमा निर्भर: 해요 (विनम्र), 합니다 (औपचारिक), 해 (अनौपचारिक)।'
    },
    formation: {
      rule: 'Verb stem + 자고 하다',
      notes: {
        english: 'Remove 다 from dictionary form and add 자고 하다. The tense is shown in 하다: 자고 해요 (suggests), 자고 했어요 (suggested).',
        nepali: 'शब्दकोश रूपबाट 다 हटाउने र 자고 하다 थप्ने। काल 하다 मा देखिन्छ: 자고 해요 (सुझाव दिन्छ), 자고 했어요 (सुझाव दियो)।'
      },
      conjugationTable: [
        {
          verb: '가다 (to go)',
          stem: '가',
          result: '가자고 하다',
          english: 'suggests to go',
          nepali: 'जाऔं भन्छ'
        },
        {
          verb: '먹다 (to eat)',
          stem: '먹',
          result: '먹자고 하다',
          english: 'suggests to eat',
          nepali: 'खाऔं भन्छ'
        },
        {
          verb: '이사하다 (to move)',
          stem: '이사하',
          result: '이사하자고 하다',
          english: 'suggests to move',
          nepali: 'सरौं भन्छ'
        },
        {
          verb: '만나다 (to meet)',
          stem: '만나',
          result: '만나자고 하다',
          english: 'suggests to meet',
          nepali: 'भेटौं भन्छ'
        },
        {
          verb: '쉬다 (to rest)',
          stem: '쉬',
          result: '쉬자고 하다',
          english: 'suggests to rest',
          nepali: 'आराम गरौं भन्छ'
        }
      ]
    },
    comparisonWithSimilar: {
      patterns: [
        {
          pattern: 'V-자 (Direct suggestion)',
          difference: {
            english: 'V-자 is direct "Let\'s do", while V-자고 하다 reports someone else\'s suggestion.',
            nepali: 'V-자 प्रत्यक्ष "गरौं" हो, जबकि V-자고 하다 अर्कोको सुझाव रिपोर्ट गर्छ।'
          },
          exampleComparison: {
            formal: '같이 가자! (Let\'s go together! - direct)',
            casual: '친구가 같이 가자고 해요. (Friend suggests going together - indirect)'
          }
        }
      ]
    },
    examples: [
      {
        context: {
          english: 'Spouse suggesting to move',
          nepali: 'जीवनसाथीले सर्न सुझाव दिँदा'
        },
        korean: '남편이 시골로 이사 가자고 해요.',
        english: 'My husband suggests we move to the countryside.',
        nepali: 'श्रीमानले गाउँ सरौं भन्नुहुन्छ।'
      },
      {
        context: {
          english: 'Friend inviting for coffee',
          nepali: 'साथीले कफी खान बोलाउँदा'
        },
        korean: '친구가 커피 마시자고 했어요.',
        english: 'My friend suggested having coffee.',
        nepali: 'साथीले कफी पिऔं भन्यो।'
      },
      {
        context: {
          english: 'Coworker suggesting lunch',
          nepali: 'सहकर्मीले खाजा सुझाव दिँदा'
        },
        korean: '동료가 점심 같이 먹자고 해요.',
        english: 'My coworker suggests having lunch together.',
        nepali: 'सहकर्मीले सँगै खाजा खाऔं भन्छ।'
      },
      {
        context: {
          english: 'Parent suggesting a visit',
          nepali: 'अभिभावकले भ्रमण सुझाव दिँदा'
        },
        korean: '어머니가 주말에 오자고 하셨어요.',
        english: 'My mother suggested I come on the weekend.',
        nepali: 'आमाले सप्ताहन्त आउ भन्नुभयो।'
      },
      {
        context: {
          english: 'Friend suggesting hiking',
          nepali: 'साथीले हाइकिङ सुझाव दिँदा'
        },
        korean: '친구가 다음 주에 등산하자고 해요.',
        english: 'My friend suggests going hiking next week.',
        nepali: 'साथीले अर्को हप्ता हाइकिङ जाऔं भन्छ।'
      }
    ]
  }
];

export const dialogues = [
  {
    id: 1,
    title: {
      korean: '새 이웃과의 대화',
      english: 'Conversation with a New Neighbor',
      nepali: 'नयाँ छिमेकीसँग कुराकानी'
    },
    situation: {
      korean: '새로 이사 온 이웃이 아파트 시설에 대해 물어봅니다.',
      english: 'A new neighbor who just moved in asks about apartment facilities.',
      nepali: 'भर्खर सरेको नयाँ छिमेकीले अपार्टमेन्ट सुविधाको बारेमा सोध्छन्।'
    },
    conversation: [
      {
        speaker: '새 이웃',
        korean: '안녕하세요. 저 옆집에 이사 왔어요. 잘 부탁드려요.',
        english: 'Hello. I just moved in next door. Nice to meet you.',
        nepali: 'नमस्ते। म छेउको घरमा सरेर आएँ। चिनजान भएकोमा खुसी छु।'
      },
      {
        speaker: '주민',
        korean: '어서 오세요. 저도 반가워요. 필요한 거 있으면 말씀하세요.',
        english: 'Welcome. Nice to meet you too. Let me know if you need anything.',
        nepali: 'स्वागत छ। म पनि खुसी छु। केहि चाहिए भने भन्नुहोस्।'
      },
      {
        speaker: '새 이웃',
        korean: '감사합니다. 그런데 아이들이 놀 수 있는 곳이 있어요?',
        english: 'Thank you. By the way, is there a place where children can play?',
        nepali: 'धन्यवाद। बाच्चाहरू खेल्न सक्ने ठाउँ छ?'
      },
      {
        speaker: '주민',
        korean: '네, 105동 앞에 놀이터가 있어요. 저녁에 아이들이 많이 와요.',
        english: 'Yes, there is a playground in front of building 105. Many children come in the evening.',
        nepali: 'छ, १०५ भवन अगाडि खेल मैदान छ। साँझ धेरै बच्चाहरू आउँछन्।'
      },
      {
        speaker: '새 이웃',
        korean: '자전거를 타고 싶은데 어디가 좋아요?',
        english: 'I want to ride a bicycle. Where is good?',
        nepali: 'साइकल चलाउन चाहन्छु। कहाँ राम्रो छ?'
      },
      {
        speaker: '주민',
        korean: '산책로에서 타면 돼요. 아파트 뒤쪽에 산책로가 있어요.',
        english: 'You can ride on the walking path. There is a walking path behind the apartment.',
        nepali: 'हिँड्ने बाटोमा चलाउन सकिन्छ। अपार्टमेन्ट पछाडि हिँड्ने बाटो छ।'
      },
      {
        speaker: '새 이웃',
        korean: '이 동네 정말 좋네요. 감사합니다!',
        english: 'This neighborhood is really nice. Thank you!',
        nepali: 'यो छिमेक साँच्चै राम्रो रहेछ। धन्यवाद!'
      }
    ]
  },
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
      },
      {
        speaker: '직원',
        korean: '그런데 교통이 좀 불편해요. 그래서 부모님이 항상 차로 이동하세요.',
        english: 'But the transportation is a bit inconvenient. So my parents always travel by car.',
        nepali: 'तर यातायात अलि असुविधाजनक छ। त्यसैले आमाबुवा सधैं गाडीमा जानुहुन्छ।'
      },
      {
        speaker: '과장',
        korean: '그래도 자연환경이 좋으니까 건강에 좋을 것 같아요.',
        english: 'Still, since the natural environment is good, it seems good for health.',
        nepali: 'तैपनि प्राकृतिक वातावरण राम्रो भएकोले स्वास्थ्यको लागि राम्रो होला।'
      }
    ]
  }
];

export const readingPassages = [
  {
    id: 1,
    title: {
      korean: '도시와 시골의 주거 환경',
      english: 'Living Environment in the City and Countryside',
      nepali: 'शहर र गाउँको बसोबास वातावरण'
    },
    content: {
      korean: '한국에서는 많은 사람들이 도시에 살고 있습니다. 도시에는 지하철역이 가깝고 문화 시설이 많아서 생활이 편리합니다. 또한 좋은 학교가 많아서 자녀 교육에도 좋습니다. 하지만 도시는 소음이 많고 공기가 좋지 않습니다. 집값도 비쌉니다.\n\n반면에 시골은 공기가 맑고 자연환경이 좋습니다. 아침에 새소리가 들리고 집에서 산이 보입니다. 한적해서 스트레스도 적습니다. 하지만 교통이 불편하고 문화 시설이 부족합니다.\n\n요즘 은퇴 후에 시골로 이사하는 사람들이 늘고 있습니다. 건강을 위해 자연환경이 좋은 곳에서 살고 싶어하기 때문입니다.',
      english: 'In Korea, many people live in cities. City life is convenient because subway stations are close and there are many cultural facilities. Also, there are many good schools, which is beneficial for children\'s education. However, cities are noisy and the air quality is poor. Housing prices are also expensive.\n\nOn the other hand, the countryside has clean air and a good natural environment. You can hear bird sounds in the morning and see mountains from your house. It\'s peaceful so there\'s less stress. However, transportation is inconvenient and cultural facilities are lacking.\n\nThese days, more people are moving to the countryside after retirement. This is because they want to live in places with good natural environments for their health.',
      nepali: 'कोरियामा धेरै मानिसहरू शहरमा बस्छन्। शहरी जीवन सुविधाजनक छ किनभने मेट्रो स्टेशन नजिक छ र धेरै सांस्कृतिक सुविधाहरू छन्। साथै धेरै राम्रा विद्यालयहरू छन्, जुन बच्चाको शिक्षाको लागि राम्रो छ। तर शहरमा शोर धेरै छ र हावाको गुणस्तर खराब छ। घरको मूल्य पनि महँगो छ।\n\nअर्कोतर्फ, गाउँमा सफा हावा र राम्रो प्राकृतिक वातावरण छ। बिहान चराको आवाज सुनिन्छ र घरबाट पहाड देखिन्छ। शान्त भएकोले तनाव कम हुन्छ। तर यातायात असुविधाजनक छ र सांस्कृतिक सुविधाहरू अभाव छ।\n\nआजकाल, सेवानिवृत्ति पछि गाउँ सर्ने मानिसहरू बढ्दै छन्। किनभने तिनीहरू स्वास्थ्यको लागि राम्रो प्राकृतिक वातावरण भएको ठाउँमा बस्न चाहन्छन्।'
    },
    keyPoints: [
      {
        korean: '도시: 교통이 편리하고 학군이 좋지만 소음과 공기 오염이 있습니다.',
        english: 'City: Convenient transportation and good school districts, but noise and air pollution.',
        nepali: 'शहर: सुविधाजनक यातायात र राम्रो विद्यालय क्षेत्र, तर शोर र वायु प्रदूषण।'
      },
      {
        korean: '시골: 자연환경이 좋고 한적하지만 교통이 불편합니다.',
        english: 'Countryside: Good natural environment and peaceful, but inconvenient transportation.',
        nepali: 'गाउँ: राम्रो प्राकृतिक वातावरण र शान्त, तर असुविधाजनक यातायात।'
      },
      {
        korean: '은퇴 후 건강을 위해 시골로 이사하는 사람들이 늘고 있습니다.',
        english: 'More people are moving to the countryside after retirement for health reasons.',
        nepali: 'स्वास्थ्यको कारण सेवानिवृत्ति पछि गाउँ सर्ने मानिसहरू बढ्दै छन्।'
      }
    ]
  },
  {
    id: 2,
    title: {
      korean: '한국의 명당',
      english: 'Favorable Locations in Korea (Feng Shui)',
      nepali: 'कोरियामा शुभ स्थान (फेंग शुई)'
    },
    content: {
      korean: '한국에서는 예로부터 집터를 고를 때 "명당"을 중요하게 생각했습니다. 명당이란 뒤에 산이 있고 앞에 물이 흐르는 곳을 말합니다. 이런 곳에 집을 지으면 복이 온다고 믿었습니다.\n\n하지만 현대에는 명당의 의미가 바뀌었습니다. 요즘 사람들이 생각하는 좋은 집터는 지하철역 근처, 학군이 좋은 곳, 공원이 가까운 곳입니다. 특히 자녀가 있는 가족은 학교와 학원이 가까운 곳을 선호합니다.\n\n그래서 요즘 인기 있는 아파트는 역세권에 있고 좋은 학교가 가까이 있는 곳입니다. 이런 곳은 집값도 비싸지만 사람들이 많이 찾습니다.',
      english: 'In Korea, people have traditionally considered "myeongdang" (favorable locations) important when choosing a house site. Myeongdang refers to places with mountains behind and water flowing in front. They believed that building a house in such places would bring good fortune.\n\nHowever, the meaning of myeongdang has changed in modern times. What people today consider a good house location is near a subway station, in a good school district, and close to parks. Families with children especially prefer places close to schools and academies.\n\nTherefore, popular apartments these days are in station areas with good schools nearby. Such places are expensive, but many people seek them out.',
      nepali: 'कोरियामा, घरको जग्गा छान्दा "म्योङदाङ" (शुभ स्थान) महत्त्वपूर्ण मानिन्थ्यो। म्योङदाङ भनेको पछाडि पहाड र अगाडि पानी बग्ने ठाउँ हो। त्यस्तो ठाउँमा घर बनाउँदा शुभ हुन्छ भन्ने विश्वास थियो।\n\nतर आधुनिक समयमा म्योङदाङको अर्थ परिवर्तन भएको छ। आजकाल मानिसहरूले राम्रो घरको जग्गा भनेको मेट्रो स्टेशन नजिक, राम्रो विद्यालय क्षेत्र, र पार्क नजिक सम्झन्छन्। विशेष गरी बच्चा भएको परिवारले विद्यालय र ट्युशन नजिकको ठाउँ रुचाउँछ।\n\nत्यसैले आजकाल लोकप्रिय अपार्टमेन्टहरू स्टेशन क्षेत्रमा र राम्रा विद्यालय नजिक हुन्छन्। यस्ता ठाउँ महँगो छ, तर धेरै मानिसहरूले खोज्छन्।'
    },
    keyPoints: [
      {
        korean: '전통 명당: 뒤에 산, 앞에 물이 흐르는 곳.',
        english: 'Traditional myeongdang: Mountains behind, water flowing in front.',
        nepali: 'परम्परागत म्योङदाङ: पछाडि पहाड, अगाडि पानी बग्ने।'
      },
      {
        korean: '현대 명당: 역세권, 좋은 학군, 공원 근처.',
        english: 'Modern myeongdang: Near stations, good school districts, near parks.',
        nepali: 'आधुनिक म्योङदाङ: स्टेशन नजिक, राम्रो विद्यालय क्षेत्र, पार्क नजिक।'
      },
      {
        korean: '역세권과 학군이 좋은 곳의 집값이 비쌉니다.',
        english: 'Housing prices are high in station areas with good school districts.',
        nepali: 'स्टेशन क्षेत्र र राम्रो विद्यालय क्षेत्रमा घरको मूल्य महँगो छ।'
      }
    ]
  }
];

export const practiceExercises = [
  {
    type: 'fill-in-blank',
    instruction: {
      korean: '빈칸에 알맞은 말을 쓰세요.',
      english: 'Fill in the blanks with the appropriate words.',
      nepali: 'खाली ठाउँमा उचित शब्द लेख्नुहोस्।'
    },
    questions: [
      {
        question: '집에서 산이 ___. (can be seen - passive)',
        nepaliQuestion: 'घरबाट पहाड ___। (देखिन्छ - कर्मवाच्य)',
        hint: '보이다',
        answer: '보여요'
      },
      {
        question: '아침에 새소리가 ___. (can be heard - passive)',
        nepaliQuestion: 'बिहान चराको आवाज ___। (सुनिन्छ - कर्मवाच्य)',
        hint: '들리다',
        answer: '들려요'
      },
      {
        question: '모기에 팔을 ___. (was bitten - passive)',
        nepaliQuestion: 'लामखुट्टेले हातमा ___। (टोकियो - कर्मवाच्य)',
        hint: '물리다',
        answer: '물렸어요'
      },
      {
        question: '친구가 같이 밥 먹___ 했어요. (suggested)',
        nepaliQuestion: 'साथीले सँगै खाना खाऔं ___ भन्यो। (सुझाव)',
        hint: '자고',
        answer: '자고'
      },
      {
        question: '남편이 시골로 이사 가___ 해요. (suggests)',
        nepaliQuestion: 'श्रीमानले गाउँ सरौं ___ भन्नुहुन्छ। (सुझाव)',
        hint: '자고',
        answer: '자고'
      },
      {
        question: '시골은 공기가 ___. (clean)',
        nepaliQuestion: 'गाउँको हावा ___। (सफा)',
        hint: '맑다',
        answer: '맑아요'
      }
    ]
  },
  {
    type: 'translation',
    instruction: {
      korean: '다음 문장을 한국어로 번역하세요.',
      english: 'Translate the following sentences into Korean.',
      nepali: 'निम्न वाक्यहरू कोरियनमा अनुवाद गर्नुहोस्।'
    },
    questions: [
      {
        question: 'Mountains are visible from home.',
        nepaliQuestion: 'घरबाट पहाड देखिन्छ।',
        answer: '집에서 산이 보여요'
      },
      {
        question: 'The door was closed by the wind.',
        nepaliQuestion: 'बतासले ढोका बन्द भयो।',
        answer: '바람에 문이 닫혔어요'
      },
      {
        question: 'My friend suggested having lunch together.',
        nepaliQuestion: 'साथीले सँगै खाजा खाऔं भन्यो।',
        answer: '친구가 점심 같이 먹자고 했어요'
      },
      {
        question: 'The countryside is quiet and peaceful.',
        nepaliQuestion: 'गाउँ शान्त र एकान्त छ।',
        answer: '시골은 조용하고 한적해요'
      }
    ]
  }
];
