// KIIP Level 3 - Chapter 14: 인터넷과 스마트폰 (Internet and Smartphone)
// Pages 180-188

export const chapterInfo = {
  chapter: 14,
  title: {
    korean: '인터넷과 스마트폰',
    english: 'Internet and Smartphone',
    nepali: 'इन्टरनेट र स्मार्टफोन'
  },
  pageRange: '180-188',
  objectives: {
    vocabulary: {
      korean: '인터넷과 스마트폰 활용',
      english: 'Internet and Smartphone Usage',
      nepali: 'इन्टरनेट र स्मार्टफोन प्रयोग'
    },
    grammar: [
      {
        korean: '-잖아요',
        english: 'As you know / Remember?',
        nepali: 'तपाईंलाई थाहा छ नि / सम्झनुहोस्'
      },
      {
        korean: '-아/어야',
        english: 'Must... in order to',
        nepali: '...गर्नुपर्छ ...हुनको लागि'
      }
    ],
    activities: [
      {
        korean: '스마트폰 활용에 대해 이야기하기',
        english: 'Talking about smartphone usage',
        nepali: 'स्मार्टफोन प्रयोगको बारेमा कुरा गर्ने'
      },
      {
        korean: '스마트폰의 장점과 위험성에 대해 읽기',
        english: 'Reading about smartphone benefits and dangers',
        nepali: 'स्मार्टफोनको फाइदा र जोखिमको बारेमा पढ्ने'
      }
    ],
    culture: {
      korean: '휴대폰 개통 방법',
      english: 'How to Activate a Mobile Phone',
      nepali: 'मोबाइल फोन सक्रिय गर्ने तरिका'
    }
  }
};

// ============================================
// PAGE 180 - 어휘 (Vocabulary)
// ============================================

// Section 1: Internet Activities (인터넷 활용)
export const internetVocabulary = [
  {
    id: 1,
    page: 180,
    category: 'Internet Activities',
    section: '인터넷 활용',
    korean: '정보를 검색하다',
    pronunciation: 'jeongboreul geomsaekhada',
    english: 'Search for information',
    nepali: 'जानकारी खोज्ने',
    type: 'verb',
    example: {
      korean: '모르는 것이 있으면 인터넷에서 정보를 검색해요.',
      english: 'When there is something I don\'t know, I search for information on the internet.',
      nepali: 'नजानेको कुरा भएमा इन्टरनेटमा जानकारी खोज्छु।'
    }
  },
  {
    id: 2,
    page: 180,
    category: 'Internet Activities',
    section: '인터넷 활용',
    korean: '인터넷 뱅킹을 하다',
    pronunciation: 'inteonet baengkingeul hada',
    english: 'Do internet banking',
    nepali: 'इन्टरनेट बैंकिङ गर्ने',
    type: 'verb',
    example: {
      korean: '요즘은 은행에 가지 않고 인터넷 뱅킹을 해요.',
      english: 'These days I do internet banking without going to the bank.',
      nepali: 'आजकल बैंक नगई इन्टरनेट बैंकिङ गर्छु।'
    }
  },
  {
    id: 3,
    page: 180,
    category: 'Internet Activities',
    section: '인터넷 활용',
    korean: '인터넷 쇼핑을 하다',
    pronunciation: 'inteonet syopingeul hada',
    english: 'Do online shopping',
    nepali: 'अनलाइन किनमेल गर्ने',
    type: 'verb',
    example: {
      korean: '인터넷 쇼핑을 하면 집에서 편하게 물건을 살 수 있어요.',
      english: 'If you shop online, you can conveniently buy things from home.',
      nepali: 'अनलाइन किनमेल गर्दा घरबाट सजिलै सामान किन्न सकिन्छ।'
    }
  },
  {
    id: 4,
    page: 180,
    category: 'Internet Activities',
    section: '인터넷 활용',
    korean: '이메일을 보내다',
    pronunciation: 'imeireul bonaeda',
    english: 'Send an email',
    nepali: 'इमेल पठाउने',
    type: 'verb',
    example: {
      korean: '선생님께 이메일을 보냈어요.',
      english: 'I sent an email to the teacher.',
      nepali: 'शिक्षकलाई इमेल पठाएँ।'
    }
  },
  {
    id: 5,
    page: 180,
    category: 'Internet Activities',
    section: '인터넷 활용',
    korean: '인터넷 강의를 듣다',
    pronunciation: 'inteonet gangiireul deutda',
    english: 'Take online lectures',
    nepali: 'अनलाइन कक्षा लिने',
    type: 'verb',
    example: {
      korean: '한국어 인터넷 강의를 매일 듣고 있어요.',
      english: 'I listen to Korean online lectures every day.',
      nepali: 'हरेक दिन कोरियन अनलाइन कक्षा लिइरहेको छु।'
    }
  },
  {
    id: 6,
    page: 180,
    category: 'Internet Activities',
    section: '인터넷 활용',
    korean: '영화를 감상하다',
    pronunciation: 'yeonghwareul gamsanghada',
    english: 'Watch a movie',
    nepali: 'चलचित्र हेर्ने',
    type: 'verb',
    example: {
      korean: '주말에 집에서 영화를 감상했어요.',
      english: 'I watched a movie at home on the weekend.',
      nepali: 'शनिबार घरमा चलचित्र हेरेँ।'
    }
  },
  {
    id: 7,
    page: 180,
    category: 'Internet Activities',
    section: '인터넷 활용',
    korean: '에스엔에스(SNS)를 하다',
    pronunciation: 'eseueneseureul hada',
    english: 'Use SNS',
    nepali: 'एसएनएस प्रयोग गर्ने',
    type: 'verb',
    example: {
      korean: '에스엔에스(SNS)를 하면서 친구들과 소통해요.',
      english: 'I communicate with friends while using SNS.',
      nepali: 'एसएनएस प्रयोग गर्दै साथीहरूसँग कुराकानी गर्छु।'
    }
  },
  {
    id: 8,
    page: 180,
    category: 'Internet Activities',
    section: '인터넷 활용',
    korean: '댓글을 남기다',
    pronunciation: 'daetgeureul namgida',
    english: 'Leave a comment',
    nepali: 'टिप्पणी छोड्ने',
    type: 'verb',
    example: {
      korean: '재미있는 영상에 댓글을 남겼어요.',
      english: 'I left a comment on an interesting video.',
      nepali: 'रमाइलो भिडियोमा टिप्पणी छोडेँ।'
    }
  },
  {
    id: 9,
    page: 180,
    category: 'Internet Activities',
    section: '인터넷 활용',
    korean: '유튜브를 보다',
    pronunciation: 'yutyubeureul boda',
    english: 'Watch YouTube',
    nepali: 'युट्युब हेर्ने',
    type: 'verb',
    example: {
      korean: '요리 유튜브를 보면서 한국 음식을 만들어요.',
      english: 'I make Korean food while watching cooking YouTube videos.',
      nepali: 'खाना पकाउने युट्युब हेर्दै कोरियन खाना बनाउँछु।'
    }
  }
];

// Section 2: Smartphone Activities (스마트폰 활용)
export const smartphoneVocabulary = [
  {
    id: 10,
    page: 180,
    category: 'Smartphone Activities',
    section: '스마트폰 활용',
    korean: '사진/동영상을 촬영하다',
    pronunciation: 'sajin/dongyeongsangeul chwaryeonghada',
    english: 'Take photos/Record videos',
    nepali: 'फोटो/भिडियो खिच्ने',
    type: 'verb',
    example: {
      korean: '스마트폰으로 예쁜 풍경을 촬영했어요.',
      english: 'I took photos of beautiful scenery with my smartphone.',
      nepali: 'स्मार्टफोनबाट राम्रो दृश्यको फोटो खिचेँ।'
    }
  },
  {
    id: 11,
    page: 180,
    category: 'Smartphone Activities',
    section: '스마트폰 활용',
    korean: '영상 통화를 하다',
    pronunciation: 'yeongsang tonghwareul hada',
    english: 'Make a video call',
    nepali: 'भिडियो कल गर्ने',
    type: 'verb',
    example: {
      korean: '고향에 계신 부모님과 영상 통화를 해요.',
      english: 'I make video calls with my parents back in my hometown.',
      nepali: 'घरमा हुनुहुने आमाबुवासँग भिडियो कल गर्छु।'
    }
  },
  {
    id: 12,
    page: 180,
    category: 'Smartphone Activities',
    section: '스마트폰 활용',
    korean: '문자를 보내다',
    pronunciation: 'munjareul bonaeda',
    english: 'Send a text message',
    nepali: 'टेक्स्ट सन्देश पठाउने',
    type: 'verb',
    example: {
      korean: '친구에게 문자를 보냈어요.',
      english: 'I sent a text message to my friend.',
      nepali: 'साथीलाई टेक्स्ट सन्देश पठाएँ।'
    }
  },
  {
    id: 13,
    page: 180,
    category: 'Smartphone Activities',
    section: '스마트폰 활용',
    korean: '게임을 하다',
    pronunciation: 'geimeul hada',
    english: 'Play games',
    nepali: 'खेल खेल्ने',
    type: 'verb',
    example: {
      korean: '지하철에서 게임을 하는 사람이 많아요.',
      english: 'Many people play games on the subway.',
      nepali: 'मेट्रोमा खेल खेल्ने मानिस धेरै छन्।'
    }
  },
  {
    id: 14,
    page: 180,
    category: 'Smartphone Activities',
    section: '스마트폰 활용',
    korean: '앱을 설치하다',
    pronunciation: 'aebeul seolchihada',
    english: 'Install an app',
    nepali: 'एप इन्स्टल गर्ने',
    type: 'verb',
    example: {
      korean: '한국어 공부를 위해 앱을 설치했어요.',
      english: 'I installed an app to study Korean.',
      nepali: 'कोरियन पढ्नको लागि एप इन्स्टल गरेँ।'
    }
  }
];

// Section 3: Additional Vocabulary (추가 어휘)
export const additionalVocabulary = [
  {
    id: 15,
    page: 181,
    category: 'Additional',
    section: '추가 어휘',
    korean: '최신',
    pronunciation: 'choesin',
    english: 'Latest',
    nepali: 'नवीनतम',
    type: 'noun/adjective',
    example: {
      korean: '최신 스마트폰으로 사진을 찍었어요.',
      english: 'I took photos with the latest smartphone.',
      nepali: 'नवीनतम स्मार्टफोनले फोटो खिचेँ।'
    }
  },
  {
    id: 16,
    page: 181,
    category: 'Additional',
    section: '추가 어휘',
    korean: '간편하다',
    pronunciation: 'ganpyeonhada',
    english: 'Convenient, simple',
    nepali: 'सजिलो, सुविधाजनक',
    type: 'adjective',
    example: {
      korean: '인터넷 뱅킹은 정말 간편해요.',
      english: 'Internet banking is really convenient.',
      nepali: 'इन्टरनेट बैंकिङ साँच्चै सजिलो छ।'
    }
  },
  {
    id: 17,
    page: 181,
    category: 'Additional',
    section: '추가 어휘',
    korean: '홈페이지',
    pronunciation: 'hompeiji',
    english: 'Homepage, website',
    nepali: 'होमपेज, वेबसाइट',
    type: 'noun',
    example: {
      korean: '회사 홈페이지에서 정보를 확인하세요.',
      english: 'Check the information on the company\'s website.',
      nepali: 'कम्पनीको वेबसाइटमा जानकारी जाँच गर्नुहोस्।'
    }
  },
  {
    id: 18,
    page: 181,
    category: 'Additional',
    section: '추가 어휘',
    korean: '회원 가입을 하다',
    pronunciation: 'hoewon gaipeul hada',
    english: 'Sign up (for membership)',
    nepali: 'सदस्यता लिने',
    type: 'verb',
    example: {
      korean: '쇼핑몰에 회원 가입을 했어요.',
      english: 'I signed up for the shopping mall.',
      nepali: 'सपिङ मलमा सदस्यता लिएँ।'
    }
  },
  {
    id: 19,
    page: 181,
    category: 'Additional',
    section: '추가 어휘',
    korean: '본인 확인',
    pronunciation: 'bonin hwag-in',
    english: 'Identity verification',
    nepali: 'पहिचान प्रमाणीकरण',
    type: 'noun',
    example: {
      korean: '휴대 전화로 본인 확인을 해야 가입이 돼요.',
      english: 'You need to verify your identity via mobile phone to sign up.',
      nepali: 'मोबाइल फोनबाट पहिचान प्रमाणीकरण गर्नुपर्छ सदस्यता लिनको लागि।'
    }
  },
  {
    id: 20,
    page: 181,
    category: 'Additional',
    section: '추가 어휘',
    korean: '개통하다',
    pronunciation: 'gaetong-hada',
    english: 'Activate (a phone)',
    nepali: 'फोन सक्रिय गर्ने',
    type: 'verb',
    example: {
      korean: '한국에 와서 휴대폰을 개통했어요.',
      english: 'I activated a phone after coming to Korea.',
      nepali: 'कोरिया आएपछि मोबाइल फोन सक्रिय गरेँ।'
    }
  },
  {
    id: 21,
    page: 181,
    category: 'Additional',
    section: '추가 어휘',
    korean: '접속하다',
    pronunciation: 'jeopsokada',
    english: 'Connect, access',
    nepali: 'जोडिनु, पहुँच गर्नु',
    type: 'verb',
    example: {
      korean: '인터넷에 접속해서 뉴스를 봤어요.',
      english: 'I accessed the internet and watched the news.',
      nepali: 'इन्टरनेटमा जोडिएर समाचार हेरेँ।'
    }
  },
  {
    id: 22,
    page: 181,
    category: 'Additional',
    section: '추가 어휘',
    korean: '추천하다',
    pronunciation: 'chucheonhada',
    english: 'Recommend',
    nepali: 'सिफारिस गर्ने',
    type: 'verb',
    example: {
      korean: '좋은 앱이 있으면 추천해 주세요.',
      english: 'If there\'s a good app, please recommend it.',
      nepali: 'राम्रो एप भएमा सिफारिस गर्नुहोस्।'
    }
  },
  {
    id: 23,
    page: 181,
    category: 'Additional',
    section: '추가 어휘',
    korean: '인터넷 중독',
    pronunciation: 'inteonet jungdok',
    english: 'Internet addiction',
    nepali: 'इन्टरनेट लत',
    type: 'noun',
    example: {
      korean: '인터넷 중독이 사회 문제가 되고 있어요.',
      english: 'Internet addiction is becoming a social problem.',
      nepali: 'इन्टरनेट लत सामाजिक समस्या बनिरहेको छ।'
    }
  },
  {
    id: 24,
    page: 181,
    category: 'Additional',
    section: '추가 어휘',
    korean: '불면증',
    pronunciation: 'bulmyeonjeung',
    english: 'Insomnia',
    nepali: 'निद्रा नलाग्ने रोग',
    type: 'noun',
    example: {
      korean: '밤에 스마트폰을 오래 보면 불면증이 생길 수 있어요.',
      english: 'If you look at your smartphone for a long time at night, you may develop insomnia.',
      nepali: 'रातमा स्मार्टफोन धेरै हेर्दा निद्रा नलाग्ने रोग हुन सक्छ।'
    }
  },
  {
    id: 25,
    page: 181,
    category: 'Additional',
    section: '추가 어휘',
    korean: '시력 악화',
    pronunciation: 'siryeok akwa',
    english: 'Worsening eyesight',
    nepali: 'दृष्टि कमजोर हुनु',
    type: 'noun',
    example: {
      korean: '작은 화면을 오래 보면 시력 악화가 올 수 있어요.',
      english: 'Looking at a small screen for a long time can cause worsening eyesight.',
      nepali: 'सानो स्क्रिन धेरै हेर्दा दृष्टि कमजोर हुन सक्छ।'
    }
  },
  {
    id: 26,
    page: 181,
    category: 'Additional',
    section: '추가 어휘',
    korean: '소통하다',
    pronunciation: 'sotonghada',
    english: 'Communicate',
    nepali: 'संवाद गर्ने',
    type: 'verb',
    example: {
      korean: 'SNS로 멀리 있는 친구와 소통할 수 있어요.',
      english: 'You can communicate with distant friends through SNS.',
      nepali: 'एसएनएसबाट टाढा भएका साथीसँग संवाद गर्न सकिन्छ।'
    }
  },
  {
    id: 27,
    page: 181,
    category: 'Additional',
    section: '추가 어휘',
    korean: '의존도',
    pronunciation: 'uijondo',
    english: 'Level of dependence',
    nepali: 'निर्भरताको स्तर',
    type: 'noun',
    example: {
      korean: '스마트폰 의존도가 점점 높아지고 있어요.',
      english: 'Dependence on smartphones is gradually increasing.',
      nepali: 'स्मार्टफोनमा निर्भरताको स्तर बिस्तारै बढ्दैछ।'
    }
  },
  {
    id: 28,
    page: 181,
    category: 'Additional',
    section: '추가 어휘',
    korean: '과유불급',
    pronunciation: 'gwayubulgeup',
    english: 'Excess is as bad as deficiency',
    nepali: 'अति नै हानिकारक',
    type: 'expression',
    example: {
      korean: '스마트폰도 과유불급이에요. 적당히 사용해야 해요.',
      english: 'Even with smartphones, excess is as bad as deficiency. You need to use them in moderation.',
      nepali: 'स्मार्टफोन पनि अति नै हानिकारक हुन्छ। मध्यम रूपमा प्रयोग गर्नुपर्छ।'
    }
  },
  {
    id: 29,
    page: 181,
    category: 'Additional',
    section: '추가 어휘',
    korean: '지혜',
    pronunciation: 'jihye',
    english: 'Wisdom',
    nepali: 'बुद्धि',
    type: 'noun',
    example: {
      korean: '스마트폰을 잘 활용하는 지혜가 필요해요.',
      english: 'Wisdom to utilize smartphones well is needed.',
      nepali: 'स्मार्टफोन राम्ररी प्रयोग गर्ने बुद्धि चाहिन्छ।'
    }
  },
  {
    id: 30,
    page: 181,
    category: 'Additional',
    section: '추가 어휘',
    korean: '활용하다',
    pronunciation: 'hwaryonghada',
    english: 'To utilize',
    nepali: 'उपयोग गर्ने',
    type: 'verb',
    example: {
      korean: '스마트폰을 잘 활용하면 생활이 편리해져요.',
      english: 'If you utilize your smartphone well, life becomes convenient.',
      nepali: 'स्मार्टफोन राम्ररी उपयोग गर्दा जीवन सजिलो हुन्छ।'
    }
  }
];

// Combined vocabulary
export const allVocabulary = [...internetVocabulary, ...smartphoneVocabulary, ...additionalVocabulary];

// ============================================
// PAGE 182 - 문법 (Grammar)
// ============================================

export const grammar1 = {
  id: 1,
  page: 182,
  pattern: "-잖아요",
  meaning: {
    english: "As you know / Remember?",
    nepali: "तपाईंलाई थाहा छ नि / सम्झनुहोस्"
  },
  description: {
    english: "This pattern is used to remind the listener of something they should already know. It gently points out an obvious fact or shared knowledge. It is only used in conversation (spoken Korean).",
    nepali: "यो ढाँचा सुन्ने व्यक्तिलाई उनीहरूलाई पहिले नै थाहा भएको कुरा सम्झाउन प्रयोग गरिन्छ। यसले स्पष्ट तथ्य वा साझा ज्ञानलाई नम्रतापूर्वक औँल्याउँछ। यो केवल कुराकानीमा (बोलेको कोरियनमा) प्रयोग गरिन्छ।"
  },
  whenToUse: {
    situations: [
      {
        situation: {
          english: "Reminding someone about a known fact",
          nepali: "कसैलाई थाहा भएको कुरा सम्झाउँदा"
        },
        example: {
          korean: '인터넷으로 사면 사이즈가 잘 맞는지 모르잖아요.',
          english: 'You know, if you buy online you don\'t know if the size will fit.',
          nepali: 'तपाईंलाई थाहा छ नि, अनलाइनबाट किन्दा साइज मिल्छ कि मिल्दैन थाहा हुँदैन।'
        }
      },
      {
        situation: {
          english: "Explaining a reason the listener should understand",
          nepali: "सुन्ने व्यक्तिले बुझ्नुपर्ने कारण व्याख्या गर्दा"
        },
        example: {
          korean: '최신 스마트폰으로 찍었잖아요.',
          english: 'I took it with the latest smartphone, remember?',
          nepali: 'नवीनतम स्मार्टफोनबाट खिचेको हो नि।'
        }
      },
      {
        situation: {
          english: "Suggesting something based on shared knowledge",
          nepali: "साझा ज्ञानमा आधारित सुझाव दिँदा"
        },
        example: {
          korean: '영상 통화가 있잖아요. 영상 통화로 부모님께 자주 연락드리세요.',
          english: 'There\'s video calling, you know. Contact your parents often through video calls.',
          nepali: 'भिडियो कल छ नि। भिडियो कलबाट आमाबुवालाई बारम्बार सम्पर्क गर्नुहोस्।'
        }
      }
    ]
  },
  whereToUse: {
    english: "Only used in spoken Korean (conversation). Not appropriate for formal writing.",
    nepali: "केवल बोलेको कोरियनमा (कुराकानीमा) प्रयोग गरिन्छ। औपचारिक लेखनमा उपयुक्त छैन।"
  },
  formality: {
    english: "Informal to polite. Commonly used in everyday conversation among people of similar or close status.",
    nepali: "अनौपचारिकदेखि नम्र। समान वा नजिकको स्थिति भएका मानिसहरूबीच दैनिक कुराकानीमा सामान्य।"
  },
  formation: {
    rule: "Verb/Adjective stem + 잖아요 (polite) / 잖아 (casual)",
    notes: {
      english: "Attach -잖아요 directly to the verb or adjective stem. No special conjugation needed. For past tense, use -았/었잖아요.",
      nepali: "Verb वा adjective stem मा सिधै -잖아요 जोड्नुहोस्। विशेष conjugation आवश्यक छैन। भूतकालको लागि -았/었잖아요 प्रयोग गर्नुहोस्।"
    },
    conjugationTable: [
      {
        verb: '모르다',
        stem: '모르',
        result: '모르잖아요',
        english: 'You know you don\'t know',
        nepali: 'थाहा छैन नि'
      },
      {
        verb: '찍다 (past)',
        stem: '찍었',
        result: '찍었잖아요',
        english: 'I took it, remember?',
        nepali: 'खिचेको हो नि'
      },
      {
        verb: '있다',
        stem: '있',
        result: '있잖아요',
        english: 'There is, you know',
        nepali: 'छ नि'
      },
      {
        verb: '좋다',
        stem: '좋',
        result: '좋잖아요',
        english: 'It\'s good, you know',
        nepali: 'राम्रो छ नि'
      }
    ]
  },
  comparisonWithSimilar: {
    english: "Compare with -지 않아요 (negative): -잖아요 is NOT a negative form. Despite looking similar, -잖아요 means 'as you know' while -지 않아요 means 'don\u0027t/isn\u0027t.' Also compare with -지요/죠 which is a softer confirmation ('isn\u0027t it?').",
    nepali: "-지 않아요 (नकारात्मक) सँग तुलना: -잖아요 नकारात्मक रूप होइन। मिल्दोजुल्दो देखिए पनि, -잖아요 को अर्थ 'तपाईंलाई थाहा छ' हो, जबकि -지 않아요 को अर्थ 'छैन/होइन' हो।"
  },
  examples: [
    {
      context: { english: 'Online shopping concern', nepali: 'अनलाइन किनमेलको चिन्ता' },
      korean: '인터넷으로 사면 사이즈가 잘 맞는지 모르잖아요.',
      english: 'You know, if you buy online you don\'t know if the size will fit.',
      nepali: 'तपाईंलाई थाहा छ नि, अनलाइनबाट किन्दा साइज मिल्छ कि मिल्दैन थाहा हुँदैन।'
    },
    {
      context: { english: 'Explaining photo quality', nepali: 'फोटो गुणस्तर व्याख्या गर्दा' },
      korean: '최신 스마트폰으로 찍었잖아요.',
      english: 'I took it with the latest smartphone, remember?',
      nepali: 'नवीनतम स्मार्टफोनबाट खिचेको हो नि।'
    },
    {
      context: { english: 'Suggesting video calls', nepali: 'भिडियो कल सुझाव दिँदा' },
      korean: '영상 통화가 있잖아요. 영상 통화로 부모님께 자주 연락드리세요.',
      english: 'There\'s video calling, you know. Contact your parents often through video calls.',
      nepali: 'भिडियो कल छ नि। भिडियो कलबाट आमाबुवालाई बारम्बार सम्पर्क गर्नुहोस्।'
    },
    {
      context: { english: 'Reminding about weather', nepali: 'मौसमको बारेमा सम्झाउँदा' },
      korean: '오늘 비가 온다고 했잖아요. 우산 가져가세요.',
      english: 'They said it would rain today, remember? Take an umbrella.',
      nepali: 'आज पानी पर्छ भनेको थियो नि। छाता लैजानुहोस्।'
    }
  ]
};

export const grammar2 = {
  id: 2,
  page: 182,
  pattern: "-아/어야",
  meaning: {
    english: "Must... in order to / Only if...",
    nepali: "...गर्नुपर्छ ...हुनको लागि / ...भएमा मात्र"
  },
  description: {
    english: "This pattern expresses a necessary condition. It means that the first action or state must happen for the second part to be possible. It can be translated as 'must... in order to,' 'only if,' or 'have to... to be able to.'",
    nepali: "यो ढाँचाले आवश्यक सर्त व्यक्त गर्छ। यसको अर्थ हो कि दोस्रो भाग सम्भव हुनको लागि पहिलो कार्य वा अवस्था हुनुपर्छ। यसलाई '...गर्नुपर्छ...हुनको लागि,' '...भएमा मात्र,' वा '...गर्नुपर्छ...गर्न सक्नको लागि' भन्ने अर्थमा अनुवाद गर्न सकिन्छ।"
  },
  whenToUse: {
    situations: [
      {
        situation: {
          english: "Explaining signup requirements",
          nepali: "साइन-अप आवश्यकताहरू व्याख्या गर्दा"
        },
        example: {
          korean: '휴대 전화로 본인 확인을 해야 가입이 돼요.',
          english: 'You must verify your identity via phone in order to sign up.',
          nepali: 'फोनबाट पहिचान प्रमाणीकरण गर्नुपर्छ सदस्यता लिनको लागि।'
        }
      },
      {
        situation: {
          english: "Explaining a condition for children",
          nepali: "बच्चाहरूको लागि सर्त व्याख्या गर्दा"
        },
        example: {
          korean: '보호자가 있어야 가능해요.',
          english: 'It\'s only possible if a guardian is present.',
          nepali: 'अभिभावक भएमा मात्र सम्भव छ।'
        }
      },
      {
        situation: {
          english: "Travel requirements",
          nepali: "यात्रा आवश्यकताहरू"
        },
        example: {
          korean: '여권이 있어야 비행기를 탈 수 있다.',
          english: 'You must have a passport to be able to take a plane.',
          nepali: 'राहदानी भएमा मात्र हवाइजहाज चढ्न सकिन्छ।'
        }
      },
      {
        situation: {
          english: "Describing food quality",
          nepali: "खानाको गुणस्तर वर्णन गर्दा"
        },
        example: {
          korean: '빵은 부드러워야 맛있다.',
          english: 'Bread must be soft in order to be delicious.',
          nepali: 'रोटी नरम भएमा मात्र मिठो हुन्छ।'
        }
      }
    ]
  },
  whereToUse: {
    english: "Used in both spoken and written Korean. Very common in everyday conversation when explaining conditions or requirements.",
    nepali: "बोलेको र लेखेको दुवै कोरियनमा प्रयोग गरिन्छ। सर्तहरू वा आवश्यकताहरू व्याख्या गर्दा दैनिक कुराकानीमा धेरै सामान्य।"
  },
  formality: {
    english: "Neutral. Can be used in both formal and informal settings.",
    nepali: "तटस्थ। औपचारिक र अनौपचारिक दुवै सेटिङमा प्रयोग गर्न सकिन्छ।"
  },
  formation: {
    rule: "Verb/Adjective stem + 아/어야 (+ result clause)",
    notes: {
      english: "If the stem vowel is ㅏ or ㅗ, use 아야. Otherwise, use 어야. For 하다 verbs, it becomes 해야. The result clause often includes 되다, 수 있다, etc.",
      nepali: "Stem vowel ㅏ वा ㅗ भएमा 아야 प्रयोग गर्नुहोस्। अन्यथा 어야 प्रयोग गर्नुहोस्। 하다 verb को लागि 해야 हुन्छ। परिणाम clause मा प्रायः 되다, 수 있다 आदि आउँछ।"
    },
    conjugationTable: [
      {
        verb: '확인하다',
        stem: '확인하',
        result: '확인해야',
        english: 'Must verify',
        nepali: 'प्रमाणीकरण गर्नुपर्छ'
      },
      {
        verb: '있다',
        stem: '있',
        result: '있어야',
        english: 'Must have/be',
        nepali: 'हुनुपर्छ'
      },
      {
        verb: '부드럽다',
        stem: '부드러우',
        result: '부드러워야',
        english: 'Must be soft',
        nepali: 'नरम हुनुपर्छ'
      },
      {
        verb: '가다',
        stem: '가',
        result: '가야',
        english: 'Must go',
        nepali: 'जानुपर्छ'
      }
    ]
  },
  comparisonWithSimilar: {
    english: "Compare with -(으)려면: Both express conditions, but -아/어야 emphasizes that the condition is strictly necessary, while -(으)려면 means 'if you want to.' -아/어야 is stronger in implying the condition cannot be skipped.",
    nepali: "-(으)려면 सँग तुलना: दुवैले सर्त व्यक्त गर्छन्, तर -아/어야 ले सर्त कडा रूपमा आवश्यक भएको जोड दिन्छ, जबकि -(으)려면 को अर्थ 'यदि तपाईं चाहनुहुन्छ भने' हो।"
  },
  examples: [
    {
      context: { english: 'Website registration', nepali: 'वेबसाइट दर्ता' },
      korean: '휴대 전화로 본인 확인을 해야 가입이 돼요.',
      english: 'You must verify your identity via phone in order to sign up.',
      nepali: 'फोनबाट पहिचान प्रमाणीकरण गर्नुपर्छ सदस्यता लिनको लागि।'
    },
    {
      context: { english: 'Guardian requirement', nepali: 'अभिभावक आवश्यकता' },
      korean: '보호자가 있어야 가능해요.',
      english: 'It\'s only possible if a guardian is present.',
      nepali: 'अभिभावक भएमा मात्र सम्भव छ।'
    },
    {
      context: { english: 'Passport for travel', nepali: 'यात्राको लागि राहदानी' },
      korean: '여권이 있어야 비행기를 탈 수 있다.',
      english: 'You must have a passport to be able to take a plane.',
      nepali: 'राहदानी भएमा मात्र हवाइजहाज चढ्न सकिन्छ।'
    },
    {
      context: { english: 'Food quality', nepali: 'खानाको गुणस्तर' },
      korean: '빵은 부드러워야 맛있다.',
      english: 'Bread must be soft in order to be delicious.',
      nepali: 'रोटी नरम भएमा मात्र मिठो हुन्छ।'
    }
  ]
};

// ============================================
// PAGE 183 - 말하기 (Speaking)
// ============================================

export const speaking = {
  page: 183,
  title: {
    korean: '스마트폰으로 한국어 공부하기',
    english: 'Studying Korean with a Smartphone',
    nepali: 'स्मार्टफोनबाट कोरियन पढ्ने'
  },
  mainDialogue: {
    id: 1,
    title: {
      korean: '스마트폰으로 한국어 공부하기',
      english: 'Studying Korean with a Smartphone',
      nepali: 'स्मार्टफोनबाट कोरियन पढ्ने'
    },
    situation: {
      korean: '아나이스와 라민이 스마트폰 앱으로 한국어를 공부하는 것에 대해 이야기하고 있습니다.',
      english: 'Anais and Ramin are talking about studying Korean with smartphone apps.',
      nepali: 'अनाइस र रामिन स्मार्टफोन एपबाट कोरियन पढ्ने बारेमा कुरा गर्दैछन्।'
    },
    conversation: [
      {
        speaker: '아나이스',
        korean: '라민 씨, 한국어 공부 어떻게 하고 있어요?',
        english: 'Ramin, how are you studying Korean?',
        nepali: 'रामिन, कोरियन कसरी पढिरहनुभएको छ?'
      },
      {
        speaker: '라민',
        korean: '요즘 한국어 공부 앱을 설치해서 매일 단어를 외우고 있어요.',
        english: 'These days I installed a Korean study app and I\'m memorizing words every day.',
        nepali: 'आजकल कोरियन पढ्ने एप इन्स्टल गरेर हरेक दिन शब्द सिक्दैछु।'
      },
      {
        speaker: '아나이스',
        korean: '그래요? 저는 유튜브로 한국어 강의를 들어요. 무료잖아요.',
        english: 'Really? I listen to Korean lectures on YouTube. It\'s free, you know.',
        nepali: 'हो? म युट्युबबाट कोरियन कक्षा लिन्छु। निःशुल्क छ नि।'
      },
      {
        speaker: '라민',
        korean: '유튜브도 좋지만, 앱은 매일 알림이 와서 꾸준히 공부하게 돼요.',
        english: 'YouTube is good too, but the app sends daily notifications so I end up studying consistently.',
        nepali: 'युट्युब पनि राम्रो, तर एपमा हरेक दिन सूचना आउँछ, त्यसैले नियमित पढ्न हुन्छ।'
      },
      {
        speaker: '아나이스',
        korean: '어떤 앱이에요? 저도 설치해 볼까요?',
        english: 'Which app is it? Should I try installing it too?',
        nepali: 'कुन एप हो? मैले पनि इन्स्टल गर्ने?'
      },
      {
        speaker: '라민',
        korean: '추천해 줄게요. 그런데 회원 가입을 해야 사용할 수 있어요.',
        english: 'I\'ll recommend it. But you have to sign up to use it.',
        nepali: 'सिफारिस गर्छु। तर सदस्यता लिनुपर्छ प्रयोग गर्नको लागि।'
      },
      {
        speaker: '아나이스',
        korean: '괜찮아요. 휴대폰으로 본인 확인을 해야 하나요?',
        english: 'That\'s fine. Do I need to verify my identity with my phone?',
        nepali: 'ठिक छ। फोनबाट पहिचान प्रमाणीकरण गर्नुपर्छ?'
      },
      {
        speaker: '라민',
        korean: '네, 본인 확인을 해야 가입이 돼요.',
        english: 'Yes, you must verify your identity to sign up.',
        nepali: 'हो, पहिचान प्रमाणीकरण गर्नुपर्छ सदस्यता लिनको लागि।'
      }
    ],
    keyExpressions: [
      {
        korean: '무료잖아요',
        english: 'It\'s free, you know',
        nepali: 'निःशुल्क छ नि',
        explanation: 'Using -잖아요 to remind about a known fact'
      },
      {
        korean: '가입을 해야 사용할 수 있어요',
        english: 'You must sign up to use it',
        nepali: 'सदस्यता लिनुपर्छ प्रयोग गर्नको लागि',
        explanation: 'Using -아/어야 for a necessary condition'
      }
    ]
  }
};

// ============================================
// PAGE 184 - 듣기 (Listening)
// ============================================

export const listeningDialogue = {
  id: 2,
  page: 184,
  title: {
    korean: '유튜브 채널 추천',
    english: 'YouTube Channel Recommendations',
    nepali: 'युट्युब च्यानल सिफारिस'
  },
  situation: {
    korean: '라흐만과 후엔이 유튜브 채널에 대해 이야기하고 있습니다.',
    english: 'Rahman and Huen are talking about YouTube channels.',
    nepali: 'रहमान र हुएन युट्युब च्यानलको बारेमा कुरा गर्दैछन्।'
  },
  conversation: [
    {
      speaker: '라흐만',
      korean: '후엔 씨, 요리 유튜브 추천해 줄 수 있어요?',
      english: 'Huen, can you recommend a cooking YouTube channel?',
      nepali: 'हुएन, खाना पकाउने युट्युब च्यानल सिफारिस गर्न सक्नुहुन्छ?'
    },
    {
      speaker: '후엔',
      korean: '네! 제가 자주 보는 채널이 있어요. 한국 음식을 간편하게 만드는 방법을 알려 줘요.',
      english: 'Yes! There\'s a channel I watch often. It teaches how to make Korean food in a simple way.',
      nepali: 'हो! म बारम्बार हेर्ने एउटा च्यानल छ। कोरियन खाना सजिलो तरिकाले बनाउने तरिका सिकाउँछ।'
    },
    {
      speaker: '라흐만',
      korean: '좋겠다! 저는 요리를 잘 못하잖아요. 쉬운 거부터 해 볼게요.',
      english: 'That\'s great! You know I\'m not good at cooking. I\'ll try starting with easy ones.',
      nepali: 'राम्रो! तपाईंलाई थाहा छ म खाना पकाउन राम्ररी सक्दिन नि। सजिलो कुराबाट सुरु गर्छु।'
    },
    {
      speaker: '후엔',
      korean: '요리 말고 운동 채널도 괜찮아요. 집에서 할 수 있는 운동을 알려 줘요.',
      english: 'Besides cooking, exercise channels are also good. They teach exercises you can do at home.',
      nepali: 'खाना बाहेक व्यायाम च्यानल पनि राम्रो छ। घरमा गर्न सकिने व्यायाम सिकाउँछ।'
    },
    {
      speaker: '라흐만',
      korean: '운동 채널도 좋네요. 댓글을 남기면 답변도 해 줘요?',
      english: 'Exercise channels are nice too. If you leave a comment, do they reply?',
      nepali: 'व्यायाम च्यानल पनि राम्रो छ। टिप्पणी छोडे जवाफ पनि दिन्छन्?'
    },
    {
      speaker: '후엔',
      korean: '네, 질문을 남기면 가끔 답변을 달아 줘요. 구독해야 알림을 받을 수 있어요.',
      english: 'Yes, if you leave a question they sometimes reply. You have to subscribe to get notifications.',
      nepali: 'हो, प्रश्न छोडे कहिलेकाहीँ जवाफ दिन्छन्। सूचना पाउनको लागि सब्सक्राइब गर्नुपर्छ।'
    }
  ],
  keyExpressions: [
    {
      korean: '잘 못하잖아요',
      english: 'I\'m not good at it, as you know',
      nepali: 'राम्ररी सक्दिन नि',
      explanation: 'Using -잖아요 to remind about a self-evident fact'
    },
    {
      korean: '구독해야 알림을 받을 수 있어요',
      english: 'You must subscribe to receive notifications',
      nepali: 'सूचना पाउनको लागि सब्सक्राइब गर्नुपर्छ',
      explanation: 'Using -아/어야 for a necessary condition'
    }
  ]
};

// ============================================
// PAGES 185-186 - 읽기 (Reading)
// ============================================

export const readings = [
  {
    id: 1,
    page: 185,
    title: {
      korean: '스마트폰의 장점과 위험',
      english: 'Benefits and Dangers of Smartphones',
      nepali: 'स्मार्टफोनको फाइदा र जोखिम'
    },
    content: {
      korean: `스마트폰이 없는 일상을 상상하기 어려운 시대가 되었다. 스마트폰 하나로 정보를 검색하고, 인터넷 뱅킹을 하고, 쇼핑을 하고, 영화를 감상하고, SNS로 친구들과 소통할 수 있다. 먼 나라에 있는 가족과 영상 통화도 간편하게 할 수 있다.

그러나 스마트폰에 지나치게 의존하면 여러 가지 문제가 생길 수 있다. 먼저 인터넷 중독이 될 수 있다. 특히 게임이나 SNS에 너무 많은 시간을 보내면 일상생활에 지장을 줄 수 있다. 또한 밤늦게까지 스마트폰을 사용하면 불면증이 생기고, 작은 화면을 오래 보면 시력 악화가 올 수 있다.

스마트폰은 우리 생활을 편리하게 해 주지만 과유불급이라는 말이 있듯이 지나치면 오히려 해가 될 수 있다. 스마트폰을 지혜롭게 활용하는 것이 중요하다.`,
      english: `An era has come where it is hard to imagine daily life without smartphones. With just one smartphone, you can search for information, do internet banking, shop, watch movies, and communicate with friends through SNS. You can also conveniently make video calls with family in far-away countries.

However, if you depend too much on smartphones, various problems can arise. First, you can become addicted to the internet. Especially if you spend too much time on games or SNS, it can interfere with daily life. Also, if you use your smartphone late at night, you may develop insomnia, and looking at a small screen for a long time can cause worsening eyesight.

Smartphones make our lives convenient, but as the saying "excess is as bad as deficiency" goes, too much can actually be harmful. It is important to utilize smartphones wisely.`,
      nepali: `स्मार्टफोन बिनाको दैनिक जीवन कल्पना गर्न गाह्रो भएको युग आएको छ। एउटा स्मार्टफोनबाट जानकारी खोज्न, इन्टरनेट बैंकिङ गर्न, किनमेल गर्न, चलचित्र हेर्न, र एसएनएसबाट साथीहरूसँग संवाद गर्न सकिन्छ। टाढाको देशमा भएको परिवारसँग भिडियो कल पनि सजिलै गर्न सकिन्छ।

तर स्मार्टफोनमा अत्यधिक निर्भर भएमा विभिन्न समस्याहरू उत्पन्न हुन सक्छन्। पहिलो, इन्टरनेट लत हुन सक्छ। विशेष गरी खेल वा एसएनएसमा धेरै समय बिताउँदा दैनिक जीवनमा बाधा पुग्न सक्छ। साथै, राती ढिलासम्म स्मार्टफोन प्रयोग गर्दा निद्रा नलाग्ने रोग हुन सक्छ, र सानो स्क्रिन धेरै हेर्दा दृष्टि कमजोर हुन सक्छ।

स्मार्टफोनले हाम्रो जीवन सजिलो बनाउँछ, तर "अति नै हानिकारक" भन्ने भनाइ जस्तै अत्यधिक प्रयोगले ओभर हानि पुर्‍याउन सक्छ। स्मार्टफोनलाई बुद्धिमानी तरिकाले उपयोग गर्नु महत्त्वपूर्ण छ।`
    },
    vocabulary: [
      { korean: '상상하다', english: 'to imagine', nepali: 'कल्पना गर्नु' },
      { korean: '지나치게', english: 'excessively', nepali: 'अत्यधिक रूपमा' },
      { korean: '의존하다', english: 'to depend on', nepali: 'निर्भर हुनु' },
      { korean: '지장을 주다', english: 'to interfere', nepali: 'बाधा पुर्‍याउनु' },
      { korean: '과유불급', english: 'excess is as bad as deficiency', nepali: 'अति नै हानिकारक' },
      { korean: '지혜롭게', english: 'wisely', nepali: 'बुद्धिमानी तरिकाले' }
    ],
    comprehensionQuestions: [
      {
        question: {
          korean: '스마트폰으로 어떤 일들을 할 수 있습니까?',
          english: 'What things can you do with a smartphone?',
          nepali: 'स्मार्टफोनबाट कुन-कुन कामहरू गर्न सकिन्छ?'
        },
        answer: {
          korean: '정보 검색, 인터넷 뱅킹, 쇼핑, 영화 감상, SNS, 영상 통화 등을 할 수 있습니다.',
          english: 'You can search for information, do internet banking, shop, watch movies, use SNS, make video calls, etc.',
          nepali: 'जानकारी खोज्ने, इन्टरनेट बैंकिङ, किनमेल, चलचित्र हेर्ने, एसएनएस, भिडियो कल आदि गर्न सकिन्छ।'
        }
      },
      {
        question: {
          korean: '스마트폰의 위험성은 무엇입니까?',
          english: 'What are the dangers of smartphones?',
          nepali: 'स्मार्टफोनका जोखिमहरू के-के हुन्?'
        },
        answer: {
          korean: '인터넷 중독, 불면증, 시력 악화 등의 문제가 생길 수 있습니다.',
          english: 'Problems such as internet addiction, insomnia, and worsening eyesight can occur.',
          nepali: 'इन्टरनेट लत, निद्रा नलाग्ने रोग, दृष्टि कमजोर हुने जस्ता समस्याहरू हुन सक्छन्।'
        }
      }
    ]
  }
];

// ============================================
// PAGE 188 - 문화 (Culture)
// ============================================

export const culture = {
  page: 188,
  title: {
    korean: '휴대폰 개통 방법',
    english: 'How to Activate a Mobile Phone',
    nepali: 'मोबाइल फोन सक्रिय गर्ने तरिका'
  },
  sections: [
    {
      subtitle: {
        korean: '한국의 이동 통신사',
        english: 'Korean Mobile Carriers',
        nepali: 'कोरियाका मोबाइल क्यारियरहरू'
      },
      content: {
        korean: '한국에는 SKT(에스케이텔레콤), KT(케이티), LG U+(엘지유플러스) 등 세 개의 대표적인 이동 통신사가 있습니다. 각 통신사마다 다양한 요금제를 제공하고 있습니다.',
        english: 'Korea has three major mobile carriers: SKT (SK Telecom), KT, and LG U+. Each carrier offers various plans.',
        nepali: 'कोरियामा SKT (एसके टेलिकम), KT (केटी), LG U+ (एलजी यू प्लस) गरी तीनवटा प्रमुख मोबाइल क्यारियरहरू छन्। प्रत्येक क्यारियरले विभिन्न योजनाहरू प्रदान गर्दछ।'
      }
    },
    {
      subtitle: {
        korean: '개통에 필요한 것',
        english: 'What You Need for Activation',
        nepali: 'सक्रियताको लागि चाहिने कुराहरू'
      },
      content: {
        korean: '휴대폰을 개통하려면 신분증(외국인 등록증 또는 여권)이 필요합니다. USIM 카드를 구입해서 휴대폰에 넣으면 됩니다. 통신사 대리점이나 온라인으로 개통할 수 있습니다.',
        english: 'To activate a phone, you need an ID (Alien Registration Card or passport). You can purchase a USIM card and insert it into the phone. You can activate at a carrier store or online.',
        nepali: 'फोन सक्रिय गर्न परिचयपत्र (विदेशी दर्ता कार्ड वा राहदानी) चाहिन्छ। USIM कार्ड किनेर फोनमा हाल्नुपर्छ। क्यारियर पसल वा अनलाइनबाट सक्रिय गर्न सकिन्छ।'
      }
    },
    {
      subtitle: {
        korean: '요금제 선택',
        english: 'Choosing a Plan',
        nepali: 'योजना छनौट गर्ने'
      },
      content: {
        korean: '통신사마다 다양한 요금제가 있습니다. 데이터, 통화, 문자 사용량에 따라 적절한 요금제를 선택하면 됩니다. 알뜰폰(저렴한 요금제)도 있으니 비교해 보고 선택하세요.',
        english: 'Each carrier has various plans. Choose an appropriate plan based on your data, call, and text usage. There are also budget phones (affordable plans), so compare and choose.',
        nepali: 'प्रत्येक क्यारियरमा विभिन्न योजनाहरू छन्। डेटा, कल, र टेक्स्ट प्रयोग अनुसार उचित योजना छान्नुहोस्। बजेट फोन (सस्तो योजनाहरू) पनि छन्, त्यसैले तुलना गरेर छान्नुहोस्।'
      }
    }
  ],
  tips: [
    {
      korean: '외국인도 외국인 등록증이 있으면 한국에서 휴대폰을 개통할 수 있습니다.',
      english: 'Foreigners can also activate a phone in Korea if they have an Alien Registration Card.',
      nepali: 'विदेशीहरू पनि विदेशी दर्ता कार्ड भएमा कोरियामा फोन सक्रिय गर्न सक्छन्।'
    },
    {
      korean: '선불 유심도 있어서 짧은 기간 동안 사용할 수도 있습니다.',
      english: 'There are also prepaid SIMs that can be used for short periods.',
      nepali: 'प्रिपेड सिम पनि छ जुन छोटो अवधिको लागि प्रयोग गर्न सकिन्छ।'
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
      korean: '인터넷에서 모르는 것을 찾아보는 것을 무엇이라고 합니까?',
      english: 'What do you call looking up something you don\'t know on the internet?',
      nepali: 'इन्टरनेटमा नजानेको कुरा खोज्ने कामलाई के भनिन्छ?'
    },
    options: [
      { korean: '정보를 검색하다', english: 'Search for information' },
      { korean: '댓글을 남기다', english: 'Leave a comment' },
      { korean: '앱을 설치하다', english: 'Install an app' },
      { korean: '문자를 보내다', english: 'Send a text' }
    ],
    correctAnswer: 0,
    explanation: {
      korean: '인터넷에서 모르는 것을 찾아보는 것을 \'정보를 검색하다\'라고 합니다.',
      english: 'Looking up something you don\'t know on the internet is called \'searching for information.\'',
      nepali: 'इन्टरनेटमा नजानेको कुरा खोज्ने कामलाई \'जानकारी खोज्ने\' भनिन्छ।'
    }
  },
  {
    id: 2,
    type: 'grammar',
    question: {
      korean: '"인터넷으로 사면 사이즈가 잘 맞는지 ___"에서 빈칸에 알맞은 것은?',
      english: 'What goes in the blank: "If you buy online, you don\'t know if the size fits ___"?',
      nepali: 'खाली ठाउँमा के आउँछ?'
    },
    options: [
      { korean: '모르잖아요', english: 'you know (reminder)' },
      { korean: '모르지 않아요', english: 'you do know (negative)' },
      { korean: '모르겠어요', english: 'I\'m not sure' },
      { korean: '몰라서요', english: 'because I don\'t know' }
    ],
    correctAnswer: 0,
    explanation: {
      korean: '-잖아요는 상대방이 이미 알고 있는 사실을 상기시킬 때 사용합니다.',
      english: '-잖아요 is used to remind the listener of something they already know.',
      nepali: '-잖아요 सुन्ने व्यक्तिलाई उनीहरूलाई पहिले नै थाहा भएको कुरा सम्झाउन प्रयोग गरिन्छ।'
    }
  },
  {
    id: 3,
    type: 'grammar',
    question: {
      korean: '"여권이 ___ 비행기를 탈 수 있다"에서 빈칸에 알맞은 것은?',
      english: 'What goes in the blank: "You must have a passport ___ take a plane"?',
      nepali: 'खाली ठाउँमा के आउँछ?'
    },
    options: [
      { korean: '있으면', english: 'if you have' },
      { korean: '있어야', english: 'must have' },
      { korean: '있어서', english: 'because you have' },
      { korean: '있으니까', english: 'since you have' }
    ],
    correctAnswer: 1,
    explanation: {
      korean: '-아/어야는 필수 조건을 나타냅니다. 여권이 있어야 비행기를 탈 수 있습니다.',
      english: '-아/어야 expresses a necessary condition. You must have a passport to take a plane.',
      nepali: '-아/어야 ले आवश्यक सर्त जनाउँछ। राहदानी भएमा मात्र हवाइजहाज चढ्न सकिन्छ।'
    }
  },
  {
    id: 4,
    type: 'vocabulary',
    question: {
      korean: '스마트폰을 처음 사용할 수 있도록 설정하는 것을 무엇이라고 합니까?',
      english: 'What do you call setting up a smartphone for first use?',
      nepali: 'स्मार्टफोन पहिलो पटक प्रयोग गर्न सेटअप गर्ने कामलाई के भनिन्छ?'
    },
    options: [
      { korean: '접속하다', english: 'Connect' },
      { korean: '개통하다', english: 'Activate' },
      { korean: '설치하다', english: 'Install' },
      { korean: '검색하다', english: 'Search' }
    ],
    correctAnswer: 1,
    explanation: {
      korean: '휴대폰을 처음 사용할 수 있도록 설정하는 것을 \'개통하다\'라고 합니다.',
      english: 'Setting up a phone for first use is called \'activating\' (개통하다).',
      nepali: 'फोनलाई पहिलो पटक प्रयोगको लागि सेटअप गर्ने कामलाई \'सक्रिय गर्ने\' (개통하다) भनिन्छ।'
    }
  },
  {
    id: 5,
    type: 'grammar',
    question: {
      korean: '"최신 스마트폰으로 ___" - 찍은 사실을 상기시킬 때?',
      english: '"I took it with the latest smartphone ___" - when reminding?',
      nepali: '"नवीनतम स्मार्टफोनबाट ___" - सम्झाउँदा?'
    },
    options: [
      { korean: '찍었잖아요', english: 'I took it, remember?' },
      { korean: '찍었어요', english: 'I took it' },
      { korean: '찍을 거예요', english: 'I will take it' },
      { korean: '찍어야 해요', english: 'I must take it' }
    ],
    correctAnswer: 0,
    explanation: {
      korean: '이미 알고 있는 사실을 상기시킬 때 -았/었잖아요를 사용합니다.',
      english: 'Use -았/었잖아요 when reminding about a fact the listener already knows.',
      nepali: 'सुन्ने व्यक्तिलाई पहिले नै थाहा भएको कुरा सम्झाउँदा -았/었잖아요 प्रयोग गरिन्छ।'
    }
  },
  {
    id: 6,
    type: 'vocabulary',
    question: {
      korean: '스마트폰을 너무 많이 사용해서 생기는 문제가 아닌 것은?',
      english: 'Which is NOT a problem caused by excessive smartphone use?',
      nepali: 'स्मार्टफोनको अत्यधिक प्रयोगले हुने समस्या नभएको कुन हो?'
    },
    options: [
      { korean: '인터넷 중독', english: 'Internet addiction' },
      { korean: '불면증', english: 'Insomnia' },
      { korean: '시력 악화', english: 'Worsening eyesight' },
      { korean: '인터넷 뱅킹', english: 'Internet banking' }
    ],
    correctAnswer: 3,
    explanation: {
      korean: '인터넷 뱅킹은 스마트폰의 편리한 기능이지, 문제가 아닙니다.',
      english: 'Internet banking is a convenient smartphone feature, not a problem.',
      nepali: 'इन्टरनेट बैंकिङ स्मार्टफोनको सुविधाजनक सुविधा हो, समस्या होइन।'
    }
  },
  {
    id: 7,
    type: 'fill-in-blank',
    question: {
      korean: '회원 가입을 _____ 사용할 수 있어요.',
      english: 'You must _____ to be able to use it.',
      nepali: '_____ गर्नुपर्छ प्रयोग गर्नको लागि।'
    },
    options: [
      { korean: '해야', english: 'must do' },
      { korean: '하면', english: 'if you do' },
      { korean: '해서', english: 'because you do' },
      { korean: '하고', english: 'and do' }
    ],
    correctAnswer: 0,
    explanation: {
      korean: '-아/어야는 필수 조건을 나타냅니다. 회원 가입을 해야 사용할 수 있어요.',
      english: '-아/어야 expresses a necessary condition. You must sign up to use it.',
      nepali: '-아/어야 ले आवश्यक सर्त जनाउँछ। सदस्यता लिनुपर्छ प्रयोग गर्नको लागि।'
    }
  },
  {
    id: 8,
    type: 'vocabulary',
    question: {
      korean: '"지나치면 오히려 해가 된다"와 같은 뜻의 사자성어는?',
      english: 'Which four-character idiom means "too much can actually be harmful"?',
      nepali: '"अत्यधिक भएमा उल्टै हानि हुन्छ" भन्ने अर्थ बोक्ने चार अक्षरको भनाइ कुन हो?'
    },
    options: [
      { korean: '과유불급', english: 'Excess is as bad as deficiency' },
      { korean: '일석이조', english: 'Two birds one stone' },
      { korean: '자업자득', english: 'Reap what you sow' },
      { korean: '시행착오', english: 'Trial and error' }
    ],
    correctAnswer: 0,
    explanation: {
      korean: '과유불급은 \'지나침은 미치지 못한 것과 같다\'는 뜻입니다.',
      english: '과유불급 means "excess is as bad as deficiency."',
      nepali: '과유불급 को अर्थ "अति नै हानिकारक" हो।'
    }
  },
  {
    id: 9,
    type: 'grammar',
    question: {
      korean: '"영상 통화가 ___. 부모님께 자주 연락드리세요"에서 빈칸에 알맞은 것은?',
      english: 'What goes in the blank: "There\'s video calling, ___. Contact your parents often."?',
      nepali: 'खाली ठाउँमा के आउँछ?'
    },
    options: [
      { korean: '있잖아요', english: 'there is, you know' },
      { korean: '있어야요', english: 'must have' },
      { korean: '있으면요', english: 'if there is' },
      { korean: '있어서요', english: 'because there is' }
    ],
    correctAnswer: 0,
    explanation: {
      korean: '상대방이 알고 있는 사실(영상 통화의 존재)을 상기시킬 때 -잖아요를 사용합니다.',
      english: 'Use -잖아요 to remind of a known fact (the existence of video calls).',
      nepali: 'थाहा भएको तथ्य (भिडियो कलको अस्तित्व) सम्झाउँदा -잖아요 प्रयोग गरिन्छ।'
    }
  },
  {
    id: 10,
    type: 'vocabulary',
    question: {
      korean: '한국에서 휴대폰을 개통하려면 무엇이 필요합니까?',
      english: 'What do you need to activate a phone in Korea?',
      nepali: 'कोरियामा फोन सक्रिय गर्न के चाहिन्छ?'
    },
    options: [
      { korean: '학생증', english: 'Student ID' },
      { korean: '신분증 (외국인 등록증 또는 여권)', english: 'ID (ARC or passport)' },
      { korean: '운전면허증만', english: 'Only driver\'s license' },
      { korean: '통장', english: 'Bank book' }
    ],
    correctAnswer: 1,
    explanation: {
      korean: '휴대폰 개통에는 신분증(외국인 등록증 또는 여권)이 필요합니다.',
      english: 'An ID (Alien Registration Card or passport) is needed to activate a phone.',
      nepali: 'फोन सक्रिय गर्न परिचयपत्र (विदेशी दर्ता कार्ड वा राहदानी) चाहिन्छ।'
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
  internetVocabulary,
  smartphoneVocabulary,
  additionalVocabulary,
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
