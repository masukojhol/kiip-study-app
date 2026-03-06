// KIIP Level 3 - Chapter 7: 문화생활 (Cultural Life)
// Pages 85-91

export const chapterInfo = {
  chapter: 7,
  title: {
    korean: '문화생활',
    english: 'Cultural Life',
    nepali: 'सांस्कृतिक जीवन'
  },
  pageRange: '85-91',
  objectives: {
    vocabulary: {
      korean: '공연과 전시회',
      english: 'Performances and Exhibitions',
      nepali: 'प्रदर्शन र प्रदर्शनी'
    },
    grammar: [
      {
        korean: '동-으라고 하다',
        english: 'Indirect command quotation',
        nepali: 'अप्रत्यक्ष आदेश उद्धरण'
      },
      {
        korean: '동/형-나고 하다',
        english: 'Indirect question quotation',
        nepali: 'अप्रत्यक्ष प्रश्न उद्धरण'
      },
      {
        korean: '얼만큼',
        english: 'How much/To what extent',
        nepali: 'कति/कुन हदसम्म'
      }
    ],
    activities: [
      {
        korean: '공연 감상 소감 말하기',
        english: 'Expressing impressions about performances',
        nepali: 'प्रदर्शनको बारेमा छाप व्यक्त गर्ने'
      },
      {
        korean: '공연 감상평 쓰기',
        english: 'Writing performance reviews',
        nepali: 'प्रदर्शन समीक्षा लेख्ने'
      }
    ],
    culture: {
      korean: '공연 정보를 찾는 방법',
      english: 'How to find performance information',
      nepali: 'प्रदर्शन जानकारी खोज्ने तरिका'
    }
  }
};

// ============================================
// PAGE 86 - 어휘 (Vocabulary)
// ============================================

// Question 1: 여러분은 시간이 있을 때 무엇을 보고 싶어요?
// What do you want to see when you have time?

export const performanceVocabulary = [
  // 공연 (Performances)
  {
    id: 1,
    page: 86,
    category: 'Performance',
    section: 'Performances',
    korean: '뮤지컬',
    pronunciation: 'myujikeol',
    english: 'Musical',
    nepali: 'म्युजिकल',
    type: 'noun',
    example: {
      korean: '이번 주말에 뮤지컬을 보러 가요.',
      english: 'I\'m going to see a musical this weekend.',
      nepali: 'यो हप्ताअन्त्यमा म्युजिकल हेर्न जान्छु।'
    }
  },
  {
    id: 2,
    page: 86,
    category: 'Performance',
    section: 'Performances',
    korean: '연극',
    pronunciation: 'yeongeuk',
    english: 'Theater/Play',
    nepali: 'नाटक',
    type: 'noun',
    example: {
      korean: '대학로에서 연극을 봤어요.',
      english: 'I watched a play in Daehakro.',
      nepali: 'दाएहाक्रोमा नाटक हेरेँ।'
    }
  },
  {
    id: 3,
    page: 86,
    category: 'Performance',
    section: 'Performances',
    korean: '연주회',
    pronunciation: 'yeonjuhoe',
    english: 'Concert/Recital',
    nepali: 'संगीत कार्यक्रम',
    type: 'noun',
    example: {
      korean: '피아노 연주회에 가고 싶어요.',
      english: 'I want to go to a piano recital.',
      nepali: 'पियानो संगीत कार्यक्रममा जान चाहन्छु।'
    }
  },
  {
    id: 4,
    page: 86,
    category: 'Performance',
    section: 'Performances',
    korean: '난타',
    pronunciation: 'nanta',
    english: 'Nanta (Korean percussion show)',
    nepali: 'नान्ता (कोरियाली ताल नाटक)',
    type: 'noun',
    example: {
      korean: '난타 공연은 정말 신나요.',
      english: 'Nanta performances are really exciting.',
      nepali: 'नान्ता प्रदर्शन साँच्चै रमाइलो छ।'
    }
  },
  {
    id: 5,
    page: 86,
    category: 'Performance',
    section: 'Performances',
    korean: '사물놀이',
    pronunciation: 'samullori',
    english: 'Samulnori (traditional percussion)',
    nepali: 'सामुल्नोरी (परम्परागत ताल)',
    type: 'noun',
    example: {
      korean: '사물놀이는 한국 전통 음악이에요.',
      english: 'Samulnori is traditional Korean music.',
      nepali: 'सामुल्नोरी कोरियाली परम्परागत संगीत हो।'
    }
  },
  {
    id: 6,
    page: 86,
    category: 'Performance',
    section: 'Performances',
    korean: '길거리 공연',
    pronunciation: 'gilgeori gong-yeon',
    english: 'Street performance/Busking',
    nepali: 'सडक प्रदर्शन/बस्किङ',
    type: 'noun',
    relatedWord: '버스킹 (busking)',
    example: {
      korean: '홍대에서 길거리 공연을 봤어요.',
      english: 'I watched a street performance in Hongdae.',
      nepali: 'होंगदाएमा सडक प्रदर्शन हेरेँ।'
    }
  },
  // 전시회 (Exhibitions)
  {
    id: 7,
    page: 86,
    category: 'Exhibition',
    section: 'Exhibitions',
    korean: '미술 전시회',
    pronunciation: 'misul jeonshihoe',
    english: 'Art exhibition',
    nepali: 'कला प्रदर्शनी',
    type: 'noun',
    example: {
      korean: '국립중앙박물관에서 미술 전시회가 열려요.',
      english: 'An art exhibition is being held at the National Museum.',
      nepali: 'राष्ट्रिय संग्रहालयमा कला प्रदर्शनी हुँदैछ।'
    }
  },
  {
    id: 8,
    page: 86,
    category: 'Exhibition',
    section: 'Exhibitions',
    korean: '사진 전시회',
    pronunciation: 'sajin jeonshihoe',
    english: 'Photo exhibition',
    nepali: 'फोटो प्रदर्शनी',
    type: 'noun',
    example: {
      korean: '유명한 사진작가의 사진 전시회를 봤어요.',
      english: 'I saw a famous photographer\'s photo exhibition.',
      nepali: 'प्रसिद्ध फोटोग्राफरको फोटो प्रदर्शनी हेरेँ।'
    }
  },
  {
    id: 9,
    page: 86,
    category: 'Exhibition',
    section: 'Exhibitions',
    korean: '공예 전시회',
    pronunciation: 'gongye jeonshihoe',
    english: 'Craft exhibition',
    nepali: 'हस्तकला प्रदर्शनी',
    type: 'noun',
    example: {
      korean: '도자기 공예 전시회가 인상적이었어요.',
      english: 'The pottery craft exhibition was impressive.',
      nepali: 'माटोको भाँडा हस्तकला प्रदर्शनी प्रभावशाली थियो।'
    }
  },
  // 콘서트 (Concerts)
  {
    id: 10,
    page: 86,
    category: 'Concert',
    section: 'Concerts',
    korean: '케이팝 콘서트',
    pronunciation: 'keipap konseoteu',
    english: 'K-pop concert',
    nepali: 'के-पप कन्सर्ट',
    type: 'noun',
    example: {
      korean: 'BTS 케이팝 콘서트 티켓을 샀어요.',
      english: 'I bought tickets for a BTS K-pop concert.',
      nepali: 'BTS के-पप कन्सर्ट टिकट किनेँ।'
    }
  },
  {
    id: 11,
    page: 86,
    category: 'Concert',
    section: 'Concerts',
    korean: '재즈 콘서트',
    pronunciation: 'jaejeu konseoteu',
    english: 'Jazz concert',
    nepali: 'ज्याज कन्सर्ट',
    type: 'noun',
    example: {
      korean: '이태원에서 재즈 콘서트를 들었어요.',
      english: 'I listened to a jazz concert in Itaewon.',
      nepali: 'इताएवोनमा ज्याज कन्सर्ट सुनेँ।'
    }
  },
  {
    id: 12,
    page: 86,
    category: 'Concert',
    section: 'Concerts',
    korean: '토크 콘서트',
    pronunciation: 'tokeu konseoteu',
    english: 'Talk concert/Lecture',
    nepali: 'टक कन्सर्ट/व्याख्यान',
    type: 'noun',
    relatedWord: '강연 (lecture)',
    example: {
      korean: '유명한 작가의 토크 콘서트에 갔어요.',
      english: 'I went to a famous author\'s talk concert.',
      nepali: 'प्रसिद्ध लेखकको टक कन्सर्टमा गएँ।'
    }
  }
];

// 공연 관람 과정 (Performance viewing process)
export const viewingProcessVocabulary = [
  {
    id: 13,
    page: 86,
    category: 'Process',
    section: 'Viewing Process',
    korean: '공연 정보를 검색하다',
    pronunciation: 'gong-yeon jeongboreul geomsaekhada',
    english: 'To search for performance information',
    nepali: 'प्रदर्शन जानकारी खोज्नु',
    type: 'phrase',
    order: 1,
    example: {
      korean: '인터넷에서 공연 정보를 검색했어요.',
      english: 'I searched for performance information on the internet.',
      nepali: 'इन्टरनेटमा प्रदर्शन जानकारी खोजेँ।'
    }
  },
  {
    id: 14,
    page: 86,
    category: 'Process',
    section: 'Viewing Process',
    korean: '표를 예매하다',
    pronunciation: 'pyoreul yemaehada',
    english: 'To book/reserve tickets',
    nepali: 'टिकट बुक गर्नु',
    type: 'phrase',
    order: 2,
    relatedWord: '티켓을 예매하다',
    example: {
      korean: '온라인으로 표를 예매했어요.',
      english: 'I booked tickets online.',
      nepali: 'अनलाइनमा टिकट बुक गरेँ।'
    }
  },
  {
    id: 15,
    page: 86,
    category: 'Process',
    section: 'Viewing Process',
    korean: '티켓을 수령하다',
    pronunciation: 'tikeseul suryeonghada',
    english: 'To receive/pick up tickets',
    nepali: 'टिकट प्राप्त गर्नु',
    type: 'phrase',
    order: 3,
    example: {
      korean: '공연장에서 티켓을 수령했어요.',
      english: 'I picked up the tickets at the venue.',
      nepali: 'प्रदर्शन स्थलमा टिकट लिएँ।'
    }
  },
  {
    id: 16,
    page: 86,
    category: 'Process',
    section: 'Viewing Process',
    korean: '좌석을 찾다',
    pronunciation: 'jwaseog-eul chatda',
    english: 'To find one\'s seat',
    nepali: 'सिट खोज्नु',
    type: 'phrase',
    order: 4,
    example: {
      korean: '좌석 번호를 확인하고 좌석을 찾았어요.',
      english: 'I checked the seat number and found my seat.',
      nepali: 'सिट नम्बर जाँचेर सिट फेला पारेँ।'
    }
  },
  {
    id: 17,
    page: 86,
    category: 'Process',
    section: 'Viewing Process',
    korean: '공연을 관람하다',
    pronunciation: 'gong-yeoneul gwallamhada',
    english: 'To watch/view a performance',
    nepali: 'प्रदर्शन हेर्नु',
    type: 'phrase',
    order: 5,
    example: {
      korean: '친구와 함께 공연을 관람했어요.',
      english: 'I watched the performance with a friend.',
      nepali: 'साथीसँग प्रदर्शन हेरेँ।'
    }
  },
  {
    id: 18,
    page: 86,
    category: 'Process',
    section: 'Viewing Process',
    korean: '감상 소감을 말하다',
    pronunciation: 'gamsang sogameul malhada',
    english: 'To express one\'s impressions',
    nepali: 'आफ्नो छाप व्यक्त गर्नु',
    type: 'phrase',
    order: 6,
    example: {
      korean: '공연 후에 친구에게 감상 소감을 말했어요.',
      english: 'After the performance, I shared my impressions with my friend.',
      nepali: 'प्रदर्शनपछि साथीलाई आफ्नो छाप बताएँ।'
    }
  }
];

// 감정/느낌 표현 (Expressing feelings)
export const feelingsVocabulary = [
  {
    id: 19,
    page: 86,
    category: 'Feelings',
    section: 'Expressions',
    korean: '기대하다',
    pronunciation: 'gidaehada',
    english: 'To look forward to/expect',
    nepali: 'आशा गर्नु/प्रतीक्षा गर्नु',
    type: 'verb',
    example: {
      korean: '이번 공연을 정말 기대하고 있어요.',
      english: 'I\'m really looking forward to this performance.',
      nepali: 'यो प्रदर्शनको साँच्चै प्रतीक्षा गर्दैछु।'
    }
  },
  {
    id: 20,
    page: 86,
    category: 'Feelings',
    section: 'Expressions',
    korean: '기대되다',
    pronunciation: 'gidaedoeda',
    english: 'To be anticipated/exciting',
    nepali: 'प्रतीक्षित हुनु',
    type: 'verb',
    example: {
      korean: '다음 주 콘서트가 기대돼요.',
      english: 'I\'m excited about next week\'s concert.',
      nepali: 'अर्को हप्ताको कन्सर्ट उत्साहजनक छ।'
    }
  },
  {
    id: 21,
    page: 86,
    category: 'Feelings',
    section: 'Expressions',
    korean: '감동적이다',
    pronunciation: 'gamdongjeogida',
    english: 'To be touching/moving',
    nepali: 'मार्मिक हुनु',
    type: 'adjective',
    example: {
      korean: '그 뮤지컬은 정말 감동적이었어요.',
      english: 'That musical was really touching.',
      nepali: 'त्यो म्युजिकल साँच्चै मार्मिक थियो।'
    }
  },
  {
    id: 22,
    page: 86,
    category: 'Feelings',
    section: 'Expressions',
    korean: '인상적이다',
    pronunciation: 'insangjeogida',
    english: 'To be impressive',
    nepali: 'प्रभावशाली हुनु',
    type: 'adjective',
    example: {
      korean: '배우들의 연기가 인상적이었어요.',
      english: 'The actors\' performances were impressive.',
      nepali: 'अभिनेताहरूको अभिनय प्रभावशाली थियो।'
    }
  }
];

// Additional vocabulary from page 87
export const additionalVocabulary = [
  {
    id: 23,
    page: 87,
    category: 'Speaking',
    section: 'Dialogue Vocabulary',
    korean: '안내 방송',
    pronunciation: 'annae bangsong',
    english: 'Announcement',
    nepali: 'घोषणा',
    type: 'noun',
    example: {
      korean: '안내 방송을 잘 들으세요.',
      english: 'Please listen carefully to the announcement.',
      nepali: 'घोषणा ध्यानपूर्वक सुन्नुहोस्।'
    }
  },
  {
    id: 24,
    page: 87,
    category: 'Speaking',
    section: 'Dialogue Vocabulary',
    korean: '전원을 끄다',
    pronunciation: 'jeonwoneul kkeuda',
    english: 'To turn off (power)',
    nepali: 'बन्द गर्नु (पावर)',
    type: 'phrase',
    example: {
      korean: '휴대 전화의 전원을 끄세요.',
      english: 'Please turn off your mobile phone.',
      nepali: 'कृपया आफ्नो मोबाइल फोन बन्द गर्नुहोस्।'
    }
  },
  {
    id: 25,
    page: 87,
    category: 'Speaking',
    section: 'Dialogue Vocabulary',
    korean: '입장하다',
    pronunciation: 'ipjanghada',
    english: 'To enter (a venue)',
    nepali: 'प्रवेश गर्नु',
    type: 'verb',
    example: {
      korean: '관객들이 공연장에 입장했어요.',
      english: 'The audience entered the venue.',
      nepali: 'दर्शकहरू प्रदर्शन स्थलमा प्रवेश गरे।'
    }
  },
  {
    id: 26,
    page: 87,
    category: 'Speaking',
    section: 'Dialogue Vocabulary',
    korean: '택배',
    pronunciation: 'taekbae',
    english: 'Delivery/Package',
    nepali: 'डेलिभरी/पार्सल',
    type: 'noun',
    example: {
      korean: '택배가 도착했어요.',
      english: 'The delivery has arrived.',
      nepali: 'डेलिभरी आइपुग्यो।'
    }
  },
  {
    id: 27,
    page: 87,
    category: 'Speaking',
    section: 'Dialogue Vocabulary',
    korean: '참석하다',
    pronunciation: 'chamseok-hada',
    english: 'To attend',
    nepali: 'सहभागी हुनु',
    type: 'verb',
    example: {
      korean: '회의에 참석해 주세요.',
      english: 'Please attend the meeting.',
      nepali: 'कृपया बैठकमा सहभागी हुनुहोस्।'
    }
  }
];

// Combine all vocabulary
export const vocabulary = [
  ...performanceVocabulary,
  ...viewingProcessVocabulary,
  ...feelingsVocabulary,
  ...additionalVocabulary
];

// ============================================
// PAGE 87 - 문법 1 (Grammar 1)
// 동-으라고 하다, 동/형-나고 하다
// ============================================

export const grammar1 = {
  id: 1,
  page: 87,
  pattern: "동-으라고 하다 / 동/형-나고 하다",
  meaning: {
    english: "Indirect quotation for commands (-으라고 하다) and questions (-냐고 하다)",
    nepali: "आदेश (-으라고 하다) र प्रश्न (-냐고 하다) को लागि अप्रत्यक्ष उद्धरण"
  },
  description: {
    english: "These patterns are used to report what someone said as a command or question. -으라고 하다 is for reporting commands (someone told someone to do something), while -냐고 하다 is for reporting questions (someone asked if/what/etc.).",
    nepali: "यी ढाँचाहरू कसैले आदेश वा प्रश्नको रूपमा के भने रिपोर्ट गर्न प्रयोग गरिन्छ। -으라고 하다 आदेश रिपोर्ट गर्न (कसैले कसैलाई केहि गर्न भन्यो), जबकि -냐고 하다 प्रश्न रिपोर्ट गर्न (कसैले सोध्यो कि/के/आदि)।"
  },
  whenToUse: {
    situations: [
      {
        situation: {
          english: "When reporting someone's command or instruction to another person",
          nepali: "कसैको आदेश वा निर्देशन अर्को व्यक्तिलाई रिपोर्ट गर्दा"
        },
        example: {
          korean: "선생님이 숙제를 하라고 했어요.",
          english: "The teacher told (us) to do homework.",
          nepali: "शिक्षकले गृहकार्य गर्नू भन्नुभयो।"
        }
      },
      {
        situation: {
          english: "When reporting someone's question",
          nepali: "कसैको प्रश्न रिपोर्ट गर्दा"
        },
        example: {
          korean: "친구가 케이팝을 좋아하냐고 했어요.",
          english: "My friend asked if I like K-pop.",
          nepali: "साथीले के-पप मन पराउँछु कि भनेर सोध्यो।"
        }
      }
    ]
  },
  formation: {
    rule: "Command: Verb stem + (으)라고 하다 | Question: Verb/Adj stem + (으)냐고 하다",
    notes: {
      english: "For commands: Use -라고 after vowel stems, -으라고 after consonant stems. For questions: Use -냐고 after all stems. The negative form uses '~지 말라고 하다' (told not to do).",
      nepali: "आदेशको लागि: स्वर स्टेमपछि -라고, व्यञ्जन स्टेमपछि -으라고 प्रयोग गर्नुहोस्। प्रश्नको लागि: सबै स्टेमपछि -냐고 प्रयोग गर्नुहोस्। नकारात्मक रूपले '~지 말라고 하다' (नगर्नू भन्यो) प्रयोग गर्छ।"
    },
    conjugationTable: [
      {
        verb: "먹다 (to eat)",
        stem: "먹",
        result: "먹으라고 하다",
        english: "told to eat",
        nepali: "खानू भन्यो"
      },
      {
        verb: "가다 (to go)",
        stem: "가",
        result: "가라고 하다",
        english: "told to go",
        nepali: "जानू भन्यो"
      },
      {
        verb: "쓰다 (to write)",
        stem: "쓰",
        result: "쓰라고 하다",
        english: "told to write",
        nepali: "लेख्नू भन्यो"
      },
      {
        verb: "있다 (to be/have)",
        stem: "있",
        result: "있냐고 하다",
        english: "asked if there is",
        nepali: "छ कि भनेर सोध्यो"
      },
      {
        verb: "가다 (to go)",
        stem: "가",
        result: "가냐고 하다",
        english: "asked if (someone) goes",
        nepali: "जान्छ कि भनेर सोध्यो"
      },
      {
        verb: "좋아하다 (to like)",
        stem: "좋아하",
        result: "좋아하냐고 하다",
        english: "asked if (someone) likes",
        nepali: "मन पराउँछ कि भनेर सोध्यो"
      }
    ]
  },
  comparisonWithSimilar: {
    english: "Compare with -자고 하다 (suggestion: 'let's...') and -다고 하다 (statement quotation: 'said that...')",
    nepali: "-자고 하다 (सुझाव: 'गरौं...') र -다고 하다 (कथन उद्धरण: '...भन्यो') सँग तुलना गर्नुहोस्"
  },
  examples: [
    {
      context: {
        english: "Reporting what the teacher said",
        nepali: "शिक्षकले भनेको रिपोर्ट गर्दै"
      },
      korean: "한국어를 얼마나 공부했냐고 해요.",
      english: "They ask how long I've studied Korean.",
      nepali: "कोरियाली कति पढेँ भनेर सोध्छन्।"
    },
    {
      context: {
        english: "A friend reporting about K-pop",
        nepali: "साथीले के-पप बारे भन्दै"
      },
      korean: "친구가 저에게 케이팝을 좋아하냐고 했어요.",
      english: "My friend asked me if I like K-pop.",
      nepali: "साथीले मलाई के-पप मन पराउँछु कि भनेर सोध्यो।"
    },
    {
      context: {
        english: "Staff giving instructions at a venue",
        nepali: "कर्मचारीले स्थलमा निर्देशन दिँदै"
      },
      korean: "직원이 관객들에게 지금 공연장에 입장하라고 했어요.",
      english: "The staff told the audience to enter the venue now.",
      nepali: "कर्मचारीले दर्शकहरूलाई अहिले प्रदर्शन स्थलमा प्रवेश गर्नू भन्यो।"
    },
    {
      context: {
        english: "Announcement before a performance",
        nepali: "प्रदर्शन अघि घोषणा"
      },
      korean: "안내 방송에서 휴대 전화를 끄라고 했어요.",
      english: "The announcement said to turn off mobile phones.",
      nepali: "घोषणाले मोबाइल फोन बन्द गर्नू भन्यो।"
    },
    {
      context: {
        english: "Asking about performance start time",
        nepali: "प्रदर्शन सुरु समय बारे सोध्दै"
      },
      korean: "라민 씨가 공연이 몇 시에 시작하냐고 했어요.",
      english: "Ramin asked what time the performance starts.",
      nepali: "रामिनले प्रदर्शन कति बजे सुरु हुन्छ भनेर सोध्यो।"
    }
  ]
};

// ============================================
// PAGE 87 - Speaking Activity
// ============================================

export const speaking = {
  page: 87,
  title: {
    korean: '간접 인용 말하기',
    english: 'Indirect Quotation Speaking',
    nepali: 'अप्रत्यक्ष उद्धरण बोल्ने'
  },
  instruction: {
    korean: '그림을 보고 보기와 같이 친구와 이야기해 보세요.',
    english: 'Look at the pictures and talk with your friend as shown in the example.',
    nepali: 'तस्बिरहरू हेर्नुहोस् र उदाहरणमा देखाइए जस्तै साथीसँग कुरा गर्नुहोस्।'
  },
  example: {
    question: {
      korean: '라민 씨가 뭐라고 했어요?',
      english: 'What did Ramin say?',
      nepali: 'रामिनले के भन्यो?'
    },
    answer: {
      korean: '공연이 몇 시에 시작하냐고 했어요.',
      english: 'He asked what time the performance starts.',
      nepali: 'उसले प्रदर्शन कति बजे सुरु हुन्छ भनेर सोध्यो।'
    }
  },
  exercises: [
    {
      id: 1,
      speaker: '이령',
      speech: {
        korean: '주말에 무슨 전시회에 갔어요?',
        english: 'What exhibition did you go to on the weekend?',
        nepali: 'हप्ताअन्त्यमा कुन प्रदर्शनीमा जानुभयो?'
      },
      expectedAnswer: {
        korean: '이령 씨가 주말에 무슨 전시회에 갔냐고 했어요.',
        english: 'Iryeong asked what exhibition I went to on the weekend.',
        nepali: 'इर्योङले हप्ताअन्त्यमा कुन प्रदर्शनीमा गएँ भनेर सोध्यो।'
      }
    },
    {
      id: 2,
      speaker: '후엔',
      speech: {
        korean: '택배를 문 앞에 두세요.',
        english: 'Please leave the package in front of the door.',
        nepali: 'कृपया पार्सल ढोकाअगाडि राख्नुहोस्।'
      },
      expectedAnswer: {
        korean: '후엔 씨가 택배를 문 앞에 두라고 했어요.',
        english: 'Huen told them to leave the package in front of the door.',
        nepali: 'हुएनले पार्सल ढोकाअगाडि राख्नू भन्यो।'
      }
    },
    {
      id: 3,
      speaker: '과장님',
      speech: {
        korean: '내일 회의가 있으니까 모두 참석하세요.',
        english: 'There is a meeting tomorrow, so please everyone attend.',
        nepali: 'भोलि बैठक छ, त्यसैले सबैजना सहभागी हुनुहोस्।'
      },
      expectedAnswer: {
        korean: '과장님이 내일 회의가 있으니까 모두 참석하라고 했어요.',
        english: 'The manager told everyone to attend because there is a meeting tomorrow.',
        nepali: 'म्यानेजरले भोलि बैठक भएकोले सबैलाई सहभागी हुनू भन्नुभयो।'
      }
    }
  ],
  mainDialogue: {
    id: 1,
    title: {
      korean: '가족/친구/직장 동료의 말 전달하기',
      english: 'Reporting what family/friends/coworkers said',
      nepali: 'परिवार/साथी/सहकर्मीले भनेको कुरा सुनाउने'
    },
    situation: {
      korean: '여러분의 가족/친구/직장 동료가 여러분에게 무슨 말을 자주 하는지 이야기해 보세요.',
      english: 'Talk about what your family/friends/coworkers often say to you.',
      nepali: 'तपाईंको परिवार/साथी/सहकर्मीले तपाईंलाई प्रायः के भन्छन् त्यसको बारेमा कुरा गर्नुहोस्।'
    },
    examples: [
      {
        korean: '부모님께서 저한테 자주 연락하라고 해요.',
        english: 'My parents often tell me to contact them.',
        nepali: 'मेरा आमाबुवाले मलाई प्रायः सम्पर्क गर्नू भन्नुहुन्छ।'
      },
      {
        korean: '고향 친구가 저한테 고향에 언제 오냐고 해요.',
        english: 'My hometown friend asks me when I\'m coming back home.',
        nepali: 'मेरो गाउँको साथीले मलाई कहिले गाउँ आउँछु भनेर सोध्छ।'
      }
    ],
    conversation: [
      {
        speaker: 'A',
        korean: '부모님께서 저한테 자주 연락하라고 해요.',
        english: 'My parents often tell me to contact them.',
        nepali: 'मेरा आमाबुवाले मलाई प्रायः सम्पर्क गर्नू भन्नुहुन्छ।'
      },
      {
        speaker: 'B',
        korean: '그래요? 저도 부모님이 보고 싶어요.',
        english: 'Really? I miss my parents too.',
        nepali: 'हो र? मलाई पनि आमाबुवा सम्झिन्छ।'
      }
    ]
  }
};

// Create dialogues array for App.jsx compatibility
export const dialogues = [speaking.mainDialogue];

// ============================================
// Grammar array for compatibility
// ============================================

export const grammar = [grammar1];

// ============================================
// Practice Exercises
// ============================================

export const practiceExercises = [
  {
    id: 1,
    type: 'fill-in-blank',
    title: {
      korean: '알맞은 표현을 넣으세요',
      english: 'Fill in the correct expression',
      nepali: 'सही अभिव्यक्ति भर्नुहोस्'
    },
    questions: [
      {
        sentence: {
          korean: '선생님이 숙제를 _____ 했어요.',
          english: 'The teacher told (us) to do homework.',
          nepali: 'शिक्षकले गृहकार्य गर्नू भन्नुभयो।'
        },
        answer: '하라고',
        options: ['하라고', '한다고', '하자고', '하냐고']
      },
      {
        sentence: {
          korean: '친구가 어디에 _____ 했어요.',
          english: 'My friend asked where (I) was going.',
          nepali: 'साथीले कहाँ जान्छु भनेर सोध्यो।'
        },
        answer: '가냐고',
        options: ['가라고', '간다고', '가자고', '가냐고']
      },
      {
        sentence: {
          korean: '엄마가 밥을 빨리 _____ 했어요.',
          english: 'Mom told me to eat quickly.',
          nepali: 'आमाले चाँडो खानू भन्नुभयो।'
        },
        answer: '먹으라고',
        options: ['먹는다고', '먹으라고', '먹냐고', '먹자고']
      }
    ]
  },
  {
    id: 2,
    type: 'matching',
    title: {
      korean: '공연 종류와 설명을 연결하세요',
      english: 'Match the performance type with its description',
      nepali: 'प्रदर्शनको प्रकार र विवरण मिलाउनुहोस्'
    },
    pairs: [
      {
        item: '뮤지컬',
        match: '노래와 춤이 있는 공연',
        english: 'Performance with songs and dance'
      },
      {
        item: '연극',
        match: '대사로 이야기를 하는 공연',
        english: 'Performance where a story is told through dialogue'
      },
      {
        item: '난타',
        match: '요리하면서 타악기를 치는 공연',
        english: 'Performance playing percussion while cooking'
      },
      {
        item: '사물놀이',
        match: '한국 전통 타악기 연주',
        english: 'Traditional Korean percussion performance'
      }
    ]
  },
  {
    id: 3,
    type: 'ordering',
    title: {
      korean: '공연 관람 순서를 맞추세요',
      english: 'Put the performance viewing steps in order',
      nepali: 'प्रदर्शन हेर्ने क्रम मिलाउनुहोस्'
    },
    correctOrder: [
      '공연 정보를 검색하다',
      '표를 예매하다',
      '티켓을 수령하다',
      '좌석을 찾다',
      '공연을 관람하다',
      '감상 소감을 말하다'
    ]
  }
];

// ============================================
// Empty placeholders for sections to be added
// ============================================

export const readingPassages = [];

// ============================================
// Export all sections for the chapter
// ============================================

export default {
  chapterInfo,
  performanceVocabulary,
  viewingProcessVocabulary,
  feelingsVocabulary,
  additionalVocabulary,
  vocabulary,
  grammar1,
  grammar,
  speaking,
  dialogues,
  practiceExercises,
  readingPassages
};
