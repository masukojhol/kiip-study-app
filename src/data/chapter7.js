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
// PAGE 88 - 문법 2 (Grammar 2)
// 명만큼
// ============================================

export const grammar2 = {
  id: 2,
  page: 88,
  pattern: "명만큼",
  meaning: {
    english: "As much as (noun) / To the extent of (noun)",
    nepali: "(नाम) जत्तिकै / (नाम) को हदसम्म"
  },
  description: {
    english: "This pattern is used to compare two things, expressing that something is similar in degree or amount to the noun mentioned. It indicates 'as much as' or 'to the same extent as'.",
    nepali: "यो ढाँचा दुई कुराहरूको तुलना गर्न प्रयोग गरिन्छ, जसले कुनै कुरा उल्लेखित नामको डिग्री वा मात्रामा समान छ भनेर व्यक्त गर्छ। यसले 'जत्तिकै' वा 'त्यही हदसम्म' जनाउँछ।"
  },
  whenToUse: {
    situations: [
      {
        situation: {
          english: "When comparing the quality or degree of something to another",
          nepali: "कुनै कुराको गुणस्तर वा डिग्री अर्कोसँग तुलना गर्दा"
        },
        example: {
          korean: "요즘 무료 공연도 유료 공연만큼 좋은 게 많아요.",
          english: "These days, there are many free performances that are as good as paid ones.",
          nepali: "आजकल धेरै निःशुल्क प्रदर्शनहरू तिर्नुपर्ने प्रदर्शन जत्तिकै राम्रा छन्।"
        }
      },
      {
        situation: {
          english: "When expressing that something meets expectations",
          nepali: "कुनै कुराले अपेक्षा पूरा गर्छ भन्दा"
        },
        example: {
          korean: "이 영화가 기대만큼 재미있었어요.",
          english: "This movie was as fun as I expected.",
          nepali: "यो फिल्म मैले सोचे जत्तिकै रमाइलो थियो।"
        }
      }
    ]
  },
  formation: {
    rule: "Noun + 만큼",
    notes: {
      english: "Simply attach 만큼 to a noun. 기대 → 기대만큼 (as much as expected), 이것 → 이것만큼 (as much as this).",
      nepali: "नाममा मात्र 만큼 जोड्नुहोस्। 기대 → 기대만큼 (अपेक्षा जत्तिकै), 이것 → 이것만큼 (यो जत्तिकै)।"
    },
    conjugationTable: [
      {
        verb: "기대 (expectation)",
        stem: "기대",
        result: "기대만큼",
        english: "as much as expected",
        nepali: "अपेक्षा जत्तिकै"
      },
      {
        verb: "이것 (this)",
        stem: "이것",
        result: "이것만큼",
        english: "as much as this",
        nepali: "यो जत्तिकै"
      },
      {
        verb: "가수 (singer)",
        stem: "가수",
        result: "가수만큼",
        english: "as much as the singer",
        nepali: "गायक जत्तिकै"
      },
      {
        verb: "저번 (last time)",
        stem: "저번",
        result: "저번만큼",
        english: "as much as last time",
        nepali: "पछिल्लो पटक जत्तिकै"
      }
    ]
  },
  examples: [
    {
      context: {
        english: "Talking about free vs paid performances",
        nepali: "निःशुल्क बनाम शुल्क लाग्ने प्रदर्शनको बारेमा कुरा गर्दै"
      },
      korean: "요즘 무료 공연도 유료 공연만큼 좋은 게 많아요.",
      english: "These days, there are many free performances that are as good as paid ones.",
      nepali: "आजकल धेरै निःशुल्क प्रदर्शनहरू शुल्क लाग्ने जत्तिकै राम्रा छन्।"
    },
    {
      context: {
        english: "Comparing a restaurant to hometown food",
        nepali: "रेस्टुरेन्टलाई गाउँको खानासँग तुलना गर्दै"
      },
      korean: "회사 앞 식당은 고향 음식만큼 맛있어서 자주 가요.",
      english: "The restaurant in front of the office is as delicious as hometown food, so I go often.",
      nepali: "कार्यालय अगाडिको रेस्टुरेन्ट गाउँको खाना जत्तिकै मिठो छ, त्यसैले प्रायः जान्छु।"
    },
    {
      context: {
        english: "Comparing weekdays to weekends",
        nepali: "हप्ताका दिन र सप्ताहन्त तुलना गर्दै"
      },
      korean: "평일은 주말만큼 시내에 사람이 많지 않다.",
      english: "On weekdays, there aren't as many people downtown as on weekends.",
      nepali: "हप्ताका दिनहरूमा सप्ताहन्त जत्तिकै शहरमा मान्छे हुँदैनन्।"
    },
    {
      context: {
        english: "Comparing a movie to expectations",
        nepali: "फिल्मलाई अपेक्षासँग तुलना गर्दै"
      },
      korean: "오늘 본 영화가 어땠어요? - 저번에 본 영화만큼 아주 재미있었어요.",
      english: "How was the movie you saw today? - It was as fun as the movie I saw last time.",
      nepali: "आज हेरेको फिल्म कस्तो थियो? - पछिल्लो पटक हेरेको फिल्म जत्तिकै रमाइलो थियो।"
    },
    {
      context: {
        english: "Comparing someone's singing ability",
        nepali: "कसैको गाउने क्षमता तुलना गर्दै"
      },
      korean: "안젤라 씨가 노래를 잘하지요? - 네, 가수만큼 노래를 잘해요.",
      english: "Angela sings well, right? - Yes, she sings as well as a professional singer.",
      nepali: "एन्जेला राम्रो गाउँछिन्, हैन? - हो, गायक जत्तिकै राम्रो गाउँछिन्।"
    }
  ]
};

// ============================================
// PAGE 88-89 - 말하기 (Speaking Activity)
// ============================================

export const speakingActivity = {
  page: '88-89',
  title: {
    korean: '말하기',
    english: 'Speaking',
    nepali: 'बोल्ने'
  },
  activities: [
    {
      id: 1,
      instruction: {
        korean: '그림을 보고 보기와 같이 친구와 이야기해 보세요.',
        english: 'Look at the pictures and talk with your friend as shown in the example.',
        nepali: 'तस्बिरहरू हेर्नुहोस् र उदाहरणमा देखाइए जस्तै साथीसँग कुरा गर्नुहोस्।'
      },
      example: {
        question: {
          korean: '안젤라 씨가 노래를 잘하지요?',
          english: 'Angela sings well, right?',
          nepali: 'एन्जेला राम्रो गाउँछिन्, हैन?'
        },
        answer: {
          korean: '네, 가수만큼 노래를 잘해요.',
          english: 'Yes, she sings as well as a singer.',
          nepali: 'हो, गायक जत्तिकै राम्रो गाउँछिन्।'
        }
      },
      exercises: [
        {
          subject: '하노이',
          attribute: '교통이 복잡하다',
          comparison: '서울',
          expectedAnswer: '하노이는 서울만큼 교통이 복잡해요.'
        },
        {
          subject: '기말시험',
          attribute: '성적이 좋다',
          comparison: '중간시험',
          expectedAnswer: '기말시험 성적이 중간시험만큼 좋아요.'
        },
        {
          subject: '미호',
          attribute: '한국어가 유창하다',
          comparison: '한국 사람',
          expectedAnswer: '미호 씨는 한국 사람만큼 한국어가 유창해요.'
        },
        {
          subject: '떡볶이',
          attribute: '자주 먹다',
          comparison: '라면',
          expectedAnswer: '떡볶이를 라면만큼 자주 먹어요.'
        }
      ]
    },
    {
      id: 2,
      instruction: {
        korean: '한국에서 공연이나 전시회에 가 봤어요? 어땠어요? 친구들과 이야기해 보세요.',
        english: 'Have you been to a performance or exhibition in Korea? How was it? Talk with friends.',
        nepali: 'कोरियामा प्रदर्शन वा प्रदर्शनीमा जानुभएको छ? कस्तो थियो? साथीहरूसँग कुरा गर्नुहोस्।'
      },
      sampleConversations: [
        {
          korean: '저는 학생들의 미술 전시회에 가 봤어요. 프로 작가의 미술 전시회만큼 아주 멋있었어요.',
          english: 'I went to a student art exhibition. It was as wonderful as a professional artist\'s exhibition.',
          nepali: 'म विद्यार्थीहरूको कला प्रदर्शनीमा गएँ। व्यावसायिक कलाकारको प्रदर्शनी जत्तिकै राम्रो थियो।'
        },
        {
          korean: '저는 연극을 봤어요. 어린이 배우가 나왔는데 어른 배우만큼 연기를 잘했어요.',
          english: 'I watched a play. Child actors appeared and they acted as well as adult actors.',
          nepali: 'मैले नाटक हेरेँ। बाल कलाकारहरू थिए र तिनीहरूले वयस्क कलाकार जत्तिकै राम्रो अभिनय गरे।'
        }
      ]
    }
  ],
  vocabularyBox: [
    { korean: '유창하다', english: 'To be fluent', nepali: 'धाराप्रवाह हुनु' },
    { korean: '작가', english: 'Artist/Author', nepali: 'कलाकार/लेखक' }
  ]
};

// ============================================
// PAGE 89 - 공연 감상 대화 (Performance Appreciation Dialogue)
// ============================================

export const performanceDialogue = {
  id: 2,
  page: 89,
  title: {
    korean: '공연 감상 대화',
    english: 'Performance Appreciation Dialogue',
    nepali: 'प्रदर्शन प्रशंसा संवाद'
  },
  situation: {
    korean: '라민 씨와 아나이스 씨가 공연에 대해 이야기합니다.',
    english: 'Ramin and Anais are talking about a performance.',
    nepali: 'रामिन र एनाइसले प्रदर्शनको बारेमा कुरा गर्दैछन्।'
  },
  conversation: [
    {
      speaker: '라민',
      korean: '오늘 본 연극 어땠어요?',
      english: 'How was the play we saw today?',
      nepali: 'आज हेरेको नाटक कस्तो थियो?'
    },
    {
      speaker: '아나이스',
      korean: '저는 계속 웃다가 울다가 했어요.',
      english: 'I kept laughing and crying.',
      nepali: 'म हाँस्दै रोइरहेँ।'
    },
    {
      speaker: '라민',
      korean: '어떤 장면이 가장 인상적이었어요?',
      english: 'Which scene was the most impressive?',
      nepali: 'कुन दृश्य सबैभन्दा प्रभावशाली थियो?'
    },
    {
      speaker: '아나이스',
      korean: '제일 마지막에 배우들이 모두 같이 춤추는 장면이 기억에 남아요.',
      english: 'The scene at the very end where all the actors danced together is memorable.',
      nepali: 'अन्तिममा सबै अभिनेताहरू सँगै नाच्ने दृश्य सम्झनामा छ।'
    },
    {
      speaker: '라민',
      korean: '저는 배우들의 표정까지 다 볼 수 있어서 좋았어요.',
      english: 'I liked that I could see all the actors\' expressions.',
      nepali: 'मलाई अभिनेताहरूको अभिव्यक्ति सबै देख्न सकेर राम्रो लाग्यो।'
    },
    {
      speaker: '아나이스',
      korean: '맞아요. 저도 이번만큼 무대 가까이에서 연극을 본 적이 없어요.',
      english: 'That\'s right. I\'ve never seen a play this close to the stage before.',
      nepali: 'हो। मैले पनि यति नजिकबाट स्टेज हेरेको थिइनँ।'
    },
    {
      speaker: '라민',
      korean: '제 친구가 이 연극을 추천할 때 꼭 앞좌석에서 보라고 했거든요.',
      english: 'My friend recommended to watch this play from the front seats.',
      nepali: 'मेरो साथीले यो नाटक सिफारिस गर्दा अगाडिको सिटबाट हेर्नू भनेको थियो।'
    },
    {
      speaker: '아나이스',
      korean: '앞좌석은 정말 좋은 선택이었어요. 우리 또 공연 같이 봐요.',
      english: 'The front seats were really a good choice. Let\'s watch a performance together again.',
      nepali: 'अगाडिको सिट साँच्चै राम्रो छनोट थियो। हामी फेरि सँगै प्रदर्शन हेरौं।'
    }
  ],
  keyExpressions: [
    {
      korean: '인상적이다',
      english: 'To be impressive',
      nepali: 'प्रभावशाली हुनु',
      usage: '어떤 장면이 가장 인상적이었어요?'
    },
    {
      korean: '배우들이 모두 같이 춤추다',
      english: 'All the actors dance together',
      nepali: 'सबै अभिनेताहरू सँगै नाच्नु',
      usage: '배우들이 모두 같이 춤추는 장면'
    },
    {
      korean: '앞좌석에서 보다',
      english: 'To watch from the front seat',
      nepali: 'अगाडिको सिटबाट हेर्नु',
      usage: '앞좌석에서 연극을 봤어요'
    }
  ],
  comprehensionQuestions: [
    {
      question: {
        korean: '인상적이다',
        english: 'Which word means "impressive"?'
      },
      relatedPhrases: ['배우들이 모두 같이 춤추다', '앞좌석에서 보다']
    },
    {
      question: {
        korean: '감동적이다',
        english: 'Which word means "touching/moving"?'
      },
      relatedPhrases: ['주인공이 헤어진 가족을 찾다', '앞좌석에 앉다']
    }
  ]
};

// ============================================
// PAGE 90 - 듣기 (Listening)
// ============================================

export const listening = {
  page: 90,
  title: {
    korean: '듣기',
    english: 'Listening',
    nepali: 'सुन्ने'
  },
  activities: [
    {
      id: 1,
      instruction: {
        korean: '여러분은 공연에 친구를 초대하거나 초대받을 때 보통 무슨 이야기를 합니까?',
        english: 'What do you usually talk about when inviting a friend to a performance or being invited?',
        nepali: 'प्रदर्शनमा साथीलाई निमन्त्रणा दिँदा वा निमन्त्रणा पाउँदा सामान्यतया के कुरा गर्नुहुन्छ?'
      },
      sampleResponses: [
        {
          korean: '초대해 줘서 고마워요.',
          english: 'Thank you for inviting me.',
          nepali: 'निमन्त्रणाको लागि धन्यवाद।'
        },
        {
          korean: '공연이 기대돼요.',
          english: 'I\'m looking forward to the performance.',
          nepali: 'प्रदर्शनको प्रतीक्षामा छु।'
        }
      ]
    },
    {
      id: 2,
      instruction: {
        korean: '고천 씨와 후엔 씨가 공연에 대해 이야기합니다. 잘 듣고 질문에 답해 보세요.',
        english: 'Gocheon and Huen are talking about a performance. Listen carefully and answer the questions.',
        nepali: 'गोचोन र हुएनले प्रदर्शनको बारेमा कुरा गर्दैछन्। ध्यानपूर्वक सुन्नुहोस् र प्रश्नहरूको जवाफ दिनुहोस्।'
      },
      questions: [
        {
          number: 1,
          question: {
            korean: '두 사람은 무슨 공연을 보려고 합니까?',
            english: 'What performance are the two people going to see?',
            nepali: 'दुई जनाले कुन प्रदर्शन हेर्न लागेका छन्?'
          }
        },
        {
          number: 2,
          instruction: {
            korean: '들은 내용과 같으면 O, 다르면 X 하세요.',
            english: 'Mark O if correct, X if incorrect based on what you heard.',
            nepali: 'सुनेको कुरा मिल्छ भने O, मिल्दैन भने X लगाउनुहोस्।'
          },
          statements: [
            {
              korean: '후엔 씨가 고천 씨를 공연에 초대했다.',
              english: 'Huen invited Gocheon to the performance.',
              nepali: 'हुएनले गोचोनलाई प्रदर्शनमा निमन्त्रणा गर्यो।'
            },
            {
              korean: '고천 씨는 친구에게 공연에 올 수 있냐고 물어볼 것이다.',
              english: 'Gocheon will ask his friend if he can come to the performance.',
              nepali: 'गोचोनले साथीलाई प्रदर्शनमा आउन सक्छ कि भनेर सोध्नेछ।'
            },
            {
              korean: '고천 씨는 이 공연을 본 적이 있다.',
              english: 'Gocheon has seen this performance before.',
              nepali: 'गोचोनले यो प्रदर्शन पहिले हेरेको छ।'
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
      korean: 'ㄱ, ㄷ, ㅂ 받침 뒤에 ㄱ, ㄷ, ㅂ, ㅅ, ㅈ이 오면 [ㄱ, ㄷ, ㅂ, ㅆ, ㅉ]로 발음됩니다.',
      english: 'When ㄱ, ㄷ, or ㅂ final consonants are followed by ㄱ, ㄷ, ㅂ, ㅅ, or ㅈ, they are pronounced as [ㄱ, ㄷ, ㅂ, ㅆ, ㅉ].',
      nepali: 'जब ㄱ, ㄷ, वा ㅂ अन्तिम व्यञ्जनपछि ㄱ, ㄷ, ㅂ, ㅅ, वा ㅈ आउँछ, तिनीहरू [ㄱ, ㄷ, ㅂ, ㅆ, ㅉ] रूपमा उच्चारण गरिन्छ।'
    },
    examples: [
      { written: '입장권', pronounced: '[입짱꿘]', english: 'Admission ticket', nepali: 'प्रवेश टिकट' },
      { written: '앞좌석', pronounced: '[압쪼석]', english: 'Front seat', nepali: 'अगाडिको सिट' },
      { written: '택배', pronounced: '[택빼]', english: 'Delivery', nepali: 'डेलिभरी' }
    ],
    practice: [
      { korean: '공연 입장권을 보여 주세요.', english: 'Please show your admission ticket.', nepali: 'कृपया आफ्नो प्रवेश टिकट देखाउनुहोस्।' },
      { korean: '앞좌석에 앉아 있어요.', english: 'I\'m sitting in the front seat.', nepali: 'म अगाडिको सिटमा बसेको छु।' },
      { korean: '택배는 문 앞에 놓아 주세요.', english: 'Please leave the delivery at the door.', nepali: 'कृपया डेलिभरी ढोकाअगाडि राख्नुहोस्।' }
    ]
  }
};

// ============================================
// PAGE 91 - 읽기 (Reading) - Ticket Information
// ============================================

export const reading = {
  page: 91,
  title: {
    korean: '읽기',
    english: 'Reading',
    nepali: 'पढ्ने'
  },
  activities: [
    {
      id: 1,
      instruction: {
        korean: '다음은 공연 티켓입니다. 빈곳에 들어갈 표현을 찾아서 써 보세요.',
        english: 'The following is a performance ticket. Find and write the expressions for the blank spaces.',
        nepali: 'यो प्रदर्शन टिकट हो। खाली ठाउँमा जाने अभिव्यक्तिहरू खोजेर लेख्नुहोस्।'
      },
      ticket: {
        title: {
          korean: '뮤지컬 \'꽃을 그대에게\' 초대권',
          english: 'Musical \'Flowers for You\' Invitation Ticket',
          nepali: 'म्युजिकल \'तिमीलाई फूलहरू\' निमन्त्रणा टिकट'
        },
        details: [
          { label: '공연 시간', value: '20**년 10월 31일 오후 3시 00분', english: 'Performance time' },
          { label: '공연 장소', value: '한강스퀘어 뮤지컬홀', english: 'Venue' },
          { label: '좌석', value: 'VIP석 1층 3열 12', english: 'Seat' },
          { label: '예약 번호', value: 'T15320505', english: 'Reservation number' },
          { label: '관람 연령', value: '12세 이상 관람가', english: 'Age rating' }
        ],
        notice: {
          korean: '티켓의 환불은 하루 전까지 인터넷으로 가능하며 당일에는 변경이나 취소가 되지 않습니다. 또한 무료 및 할인 티켓의 환불은 불가능합니다.',
          english: 'Ticket refunds are available online until the day before. No changes or cancellations are possible on the day. Also, free and discounted tickets cannot be refunded.',
          nepali: 'एक दिन अघिसम्म इन्टरनेटमा टिकट फिर्ता सम्भव छ। त्यस दिन परिवर्तन वा रद्द सम्भव छैन। साथै, निःशुल्क र छुट टिकटहरू फिर्ता हुँदैनन्।'
        },
        blanks: ['예약 번호', '할인', '좌석', '관람 연령']
      }
    },
    {
      id: 2,
      instruction: {
        korean: '아래의 공연과 전시회 정보를 보고 이야기해 보세요.',
        english: 'Look at the performance and exhibition information below and discuss.',
        nepali: 'तलको प्रदर्शन र प्रदर्शनी जानकारी हेर्नुहोस् र छलफल गर्नुहोस्।'
      },
      events: [
        {
          name: {
            korean: '금요 시네마',
            english: 'Friday Cinema',
            nepali: 'शुक्रबार सिनेमा'
          },
          details: {
            period: '매월 마지막 주 금요일',
            time: '저녁 6시 30분',
            location: '별빛박물관 강당',
            price: '무료'
          }
        },
        {
          name: {
            korean: '고흐展(전)',
            english: 'Van Gogh Exhibition',
            nepali: 'भान गघ प्रदर्शनी'
          },
          details: {
            period: '9. 1 ~ 9. 30 (입장 마감: 오후 5시)',
            location: '아트갤러리',
            price: '25,000원',
            discount: '오후 4시 이후 입장 시에는 관람료가 20% 할인됩니다.'
          }
        },
        {
          name: {
            korean: '서울거리 예술제',
            english: 'Seoul Street Art Festival',
            nepali: 'सियोल सडक कला महोत्सव'
          },
          details: {
            period: '4. 1 ~ 5. 30',
            time: '매주 토요일 오후 1시',
            location: '서울숲 공연장',
            price: '무료'
          }
        }
      ],
      questions: [
        {
          korean: '무료로 볼 수 있는 공연이 뭐예요?',
          english: 'What performances can you see for free?',
          nepali: 'निःशुल्क हेर्न सकिने प्रदर्शनहरू के हुन्?'
        },
        {
          korean: '금요일 저녁에 시간이 나면 어디에 가면 좋을까요?',
          english: 'If you have time on Friday evening, where would be good to go?',
          nepali: 'शुक्रबार साँझ समय भएमा कहाँ जाने राम्रो होला?'
        },
        {
          korean: '그림 전시회 티켓을 할인 받으려면 몇 시에 가야 해요?',
          english: 'What time should you go to get a discount on the art exhibition ticket?',
          nepali: 'कला प्रदर्शनी टिकटमा छुट पाउन कति बजे जानुपर्छ?'
        },
        {
          korean: '서울숲에서는 어떤 공연을 해요? 그 공연은 언제 볼 수 있어요?',
          english: 'What performances are there at Seoul Forest? When can you see them?',
          nepali: 'सियोल फोरेस्टमा कुन प्रदर्शन छ? त्यो कहिले हेर्न सकिन्छ?'
        }
      ]
    }
  ],
  vocabularyBox: [
    { korean: '장면', english: 'Scene', nepali: 'दृश्य' },
    { korean: '표정', english: 'Expression', nepali: 'अभिव्यक्ति' },
    { korean: '헤어지다', english: 'To break up/separate', nepali: 'अलग हुनु' },
    { korean: '추천하다', english: 'To recommend', nepali: 'सिफारिस गर्नु' },
    { korean: '입장권', english: 'Admission ticket', nepali: 'प्रवेश टिकट' }
  ]
};

// ============================================
// PAGE 92 - 읽기 continued (Reading Passage)
// ============================================

export const readingPassage = {
  id: 1,
  page: 92,
  title: {
    korean: '문화가 있는 날',
    english: 'Culture Day',
    nepali: 'संस्कृति दिवस'
  },
  content: {
    korean: `나는 '문화가 있는 날'에 전시회나 공연을 보러 간다. '문화가 있는 날'은 매월 마지막 주 수요일이다. 이날은 보통 때보다 싼 가격이나 무료로 문화생활을 할 수 있다. 그래서 부담 없이 문화생활을 즐길 수 있다.

지난달에 나는 그림 전시회를 보고 왔다. 나는 그림을 잘 그리지는 못하지만 보는 것을 좋아한다. 그림을 보고 있으면 기분이 좋아진다. 이번 달 '문화가 있는 날'에는 재즈(Jazz) 콘서트 티켓을 예매했다. 50% 할인을 받았다. 좋은 기회라서 나는 친구들에게도 예매하라고 했다.

다음 달 '문화가 있는 날'에는 박물관에 가 보고 싶다. 박물관에도 재미있는 행사가 많은데 아직 한 번도 간 적이 없기 때문이다. 이렇게 새로운 문화생활을 하면 좋은 경험이 된다. 그리고 내 경험이 쌓이는 것만큼 한국 생활에도 점점 익숙해지고 있는 것 같다.`,
    english: `I go to exhibitions or performances on 'Culture Day'. 'Culture Day' is the last Wednesday of every month. On this day, you can enjoy cultural activities at cheaper prices or even for free compared to normal times. So you can enjoy cultural life without burden.

Last month, I went to see an art exhibition. I can't draw well, but I like viewing art. Looking at paintings makes me feel good. This month on 'Culture Day', I booked a jazz concert ticket. I got a 50% discount. Since it was a good opportunity, I told my friends to book tickets too.

Next month on 'Culture Day', I want to visit a museum. There are many interesting events at museums, but I haven't been to one yet. Having new cultural experiences like this becomes a good experience. And as my experiences accumulate, I feel like I'm gradually getting used to life in Korea.`,
    nepali: `म 'संस्कृति दिवस'मा प्रदर्शनी वा प्रदर्शनहरू हेर्न जान्छु। 'संस्कृति दिवस' हरेक महिनाको अन्तिम बुधबार हो। यस दिन, तपाईं सामान्य समयभन्दा सस्तो मूल्यमा वा निःशुल्क पनि सांस्कृतिक गतिविधिहरू रमाउन सक्नुहुन्छ। त्यसैले तपाईं बिना बोझ सांस्कृतिक जीवन रमाउन सक्नुहुन्छ।

गत महिना, म कला प्रदर्शनी हेर्न गएँ। म राम्ररी चित्र कोर्न सक्दिनँ, तर हेर्न मन पराउँछु। चित्रहरू हेर्दा मन राम्रो हुन्छ। यस महिना 'संस्कृति दिवस'मा, मैले ज्याज कन्सर्ट टिकट बुक गरेँ। ५०% छुट पाएँ। राम्रो अवसर भएकोले, मैले साथीहरूलाई पनि टिकट बुक गर्नू भनेँ।

अर्को महिना 'संस्कृति दिवस'मा, म संग्रहालयमा जान चाहन्छु। संग्रहालयमा पनि धेरै रोचक कार्यक्रमहरू छन्, तर म अहिलेसम्म एक पटक पनि गएको छैन। यसरी नयाँ सांस्कृतिक अनुभव राम्रो अनुभव हुन्छ। र मेरो अनुभव बढ्दै जाँदा, म बिस्तारै कोरियाली जीवनमा अभ्यस्त हुँदै गएको महसुस गर्छु।`
  },
  questions: [
    {
      number: 1,
      instruction: {
        korean: '윗글의 내용과 같으면 O, 다르면 X 하세요.',
        english: 'Mark O if correct, X if incorrect based on the passage.',
        nepali: 'लेख मिल्छ भने O, मिल्दैन भने X लगाउनुहोस्।'
      },
      statements: [
        {
          korean: '나는 이번 달에 그림 전시회에 갈 것이다.',
          english: 'I will go to an art exhibition this month.',
          nepali: 'म यस महिना कला प्रदर्शनीमा जानेछु।',
          answer: 'X'
        },
        {
          korean: '재즈 콘서트 티켓은 무료이다.',
          english: 'The jazz concert ticket is free.',
          nepali: 'ज्याज कन्सर्ट टिकट निःशुल्क हो।',
          answer: 'X'
        },
        {
          korean: '나는 박물관에 다녀온 적이 있다.',
          english: 'I have been to a museum.',
          nepali: 'म संग्रहालयमा गइसकेको छु।',
          answer: 'X'
        },
        {
          korean: '문화생활 경험은 한국 생활에 도움이 된다.',
          english: 'Cultural life experiences help with life in Korea.',
          nepali: 'सांस्कृतिक जीवनको अनुभवले कोरियाली जीवनमा मद्दत गर्छ।',
          answer: 'O'
        }
      ]
    },
    {
      number: 2,
      question: {
        korean: "'문화가 있는 날'에 전시회나 공연을 보면 좋은 점이 무엇입니까?",
        english: "What are the benefits of seeing exhibitions or performances on 'Culture Day'?",
        nepali: "'संस्कृति दिवस'मा प्रदर्शनी वा प्रदर्शन हेर्दा के फाइदा हुन्छ?"
      },
      answer: {
        korean: '보통 때보다 싼 가격이나 무료로 문화생활을 할 수 있어서 부담 없이 즐길 수 있습니다.',
        english: 'You can enjoy cultural activities at cheaper prices or for free, so you can enjoy without burden.',
        nepali: 'सामान्य समयभन्दा सस्तो वा निःशुल्क सांस्कृतिक गतिविधिहरू गर्न सकिन्छ, त्यसैले बिना बोझ रमाउन सकिन्छ।'
      }
    }
  ],
  vocabularyBox: [
    { korean: '부담이 없다', english: 'To be without burden', nepali: 'बोझ नहुनु' },
    { korean: '할인을 받다', english: 'To get a discount', nepali: 'छुट पाउनु' },
    { korean: '행사', english: 'Event', nepali: 'कार्यक्रम' },
    { korean: '박물관', english: 'Museum', nepali: 'संग्रहालय' },
    { korean: '경험이 쌓이다', english: 'To accumulate experience', nepali: 'अनुभव जम्मा हुनु' }
  ]
};

// ============================================
// PAGE 93 - 쓰기 (Writing)
// ============================================

export const writing = {
  page: 93,
  title: {
    korean: '쓰기',
    english: 'Writing',
    nepali: 'लेख्ने'
  },
  activities: [
    {
      id: 1,
      instruction: {
        korean: '여러분은 공연이나 콘서트, 전시회를 좋아합니까? 지금까지 본 것 중에서 가장 기억에 남는 것이 무엇입니까? 간단히 메모해 보세요.',
        english: 'Do you like performances, concerts, or exhibitions? What is the most memorable one you\'ve seen so far? Write a brief memo.',
        nepali: 'तपाईंलाई प्रदर्शन, कन्सर्ट, वा प्रदर्शनी मन पर्छ? अहिलेसम्म हेरेको मध्ये सबैभन्दा याद रहने के हो? छोटो मेमो लेख्नुहोस्।'
      },
      template: {
        fields: [
          { label: '공연 이름', english: 'Performance name', nepali: 'प्रदर्शनको नाम' },
          { label: '공연 장소', english: 'Venue', nepali: 'स्थान' },
          { label: '공연 내용', english: 'Performance content', nepali: 'प्रदर्शनको विषय' },
          { label: '느낀 점', english: 'Impressions', nepali: 'महसुस' }
        ]
      }
    },
    {
      id: 2,
      instruction: {
        korean: '여러분의 공연 감상 이야기를 써 보세요.',
        english: 'Write about your performance appreciation experience.',
        nepali: 'तपाईंको प्रदर्शन प्रशंसाको अनुभव लेख्नुहोस्।'
      },
      writingPrompts: [
        {
          korean: '어떤 공연을 봤습니까?',
          english: 'What performance did you see?',
          nepali: 'तपाईंले कुन प्रदर्शन हेर्नुभयो?'
        },
        {
          korean: '어디에서 봤습니까?',
          english: 'Where did you see it?',
          nepali: 'कहाँ हेर्नुभयो?'
        },
        {
          korean: '어떤 내용이었습니까?',
          english: 'What was it about?',
          nepali: 'त्यो के बारेमा थियो?'
        },
        {
          korean: '어떤 점이 인상적이었습니까?',
          english: 'What was impressive about it?',
          nepali: 'कुन कुरा प्रभावशाली थियो?'
        }
      ]
    }
  ]
};

// ============================================
// PAGE 94 - 문화와 정보 (Culture and Information)
// ============================================

export const cultureAndInfo = {
  page: 94,
  title: {
    korean: '공연 정보를 찾는 방법',
    english: 'How to Find Performance Information',
    nepali: 'प्रदर्शन जानकारी खोज्ने तरिका'
  },
  content: {
    korean: `문화생활을 즐기기 위해 공연 정보를 찾는 방법에는 여러 가지가 있다. 가장 일반적인 방법은 관련 기관에 직접 문의를 하거나 홈페이지를 통해 공연 정보를 알아보는 것이다. 그런데 최근에 공연 정보를 한데 모아 놓은 포털 사이트가 있어서 공연 정보를 얻기가 쉬워졌다. 문화포털(www.culture.go.kr)이 바로 그것이다. '문화포털'에서는 언제, 어디서, 어떤 공연이나 전시, 콘서트가 있는지를 쉽게 검색할 수 있다. 또 이용자들이 남긴 공연 후기가 있어서 어떤 공연을 볼지 선택할 때 참고가 된다. 이 포털에서는 문화 정보뿐만 아니라 국내외 문화 관련 영상, 도서 정보도 제공한다. 포털에 회원 가입을 하면 새로운 문화 정보를 더 편리하게 이용할 수 있다.`,
    english: `There are many ways to find performance information to enjoy cultural life. The most common method is to inquire directly with related organizations or to check performance information through websites. However, recently there are portal sites that gather performance information in one place, making it easier to get performance information. Culture Portal (www.culture.go.kr) is one such site. On 'Culture Portal', you can easily search for when, where, and what performances, exhibitions, or concerts are happening. There are also reviews left by users, which can be helpful when deciding what to see. This portal provides not only cultural information but also domestic and international cultural videos and book information. If you register as a member, you can use the new cultural information more conveniently.`,
    nepali: `सांस्कृतिक जीवन रमाउन प्रदर्शन जानकारी खोज्ने धेरै तरिकाहरू छन्। सबैभन्दा सामान्य तरिका सम्बन्धित संस्थाहरूमा सोध्ने वा वेबसाइटमार्फत प्रदर्शन जानकारी हेर्ने हो। तर हालै, प्रदर्शन जानकारी एकै ठाउँमा जम्मा गर्ने पोर्टल साइटहरू छन्, जसले प्रदर्शन जानकारी पाउन सजिलो बनाएको छ। कल्चर पोर्टल (www.culture.go.kr) त्यस्तै एउटा साइट हो। 'कल्चर पोर्टल'मा, तपाईं कहिले, कहाँ, र कुन प्रदर्शन, प्रदर्शनी, वा कन्सर्ट छ सजिलै खोज्न सक्नुहुन्छ। प्रयोगकर्ताहरूले छोडेका समीक्षाहरू पनि छन्, जुन के हेर्ने निर्णय गर्दा सहयोगी हुन सक्छ। यो पोर्टलले सांस्कृतिक जानकारी मात्र होइन, घरेलु र अन्तर्राष्ट्रिय सांस्कृतिक भिडियो र पुस्तक जानकारी पनि प्रदान गर्दछ। सदस्य दर्ता गरेमा, नयाँ सांस्कृतिक जानकारी अझ सजिलै प्रयोग गर्न सकिन्छ।`
  },
  questions: [
    {
      korean: "'문화포털'에서는 어떤 정보를 제공합니까?",
      english: "What information does 'Culture Portal' provide?",
      nepali: "'कल्चर पोर्टल'ले कस्तो जानकारी प्रदान गर्छ?"
    },
    {
      korean: "'문화포털'에서 공연 후기를 보면 어떤 점에서 도움이 됩니까?",
      english: "How is it helpful to read performance reviews on 'Culture Portal'?",
      nepali: "'कल्चर पोर्टल'मा प्रदर्शन समीक्षा पढ्दा कसरी मद्दत हुन्छ?"
    },
    {
      korean: "여러분은 어떤 방법으로 문화 정보를 찾습니까?",
      english: "How do you find cultural information?",
      nepali: "तपाईं कसरी सांस्कृतिक जानकारी खोज्नुहुन्छ?"
    }
  ]
};

// ============================================
// PAGE 95 - 배운 어휘 확인 (Vocabulary Checklist)
// ============================================

export const vocabularyChecklist = {
  page: 95,
  title: {
    korean: '배운 어휘 확인',
    english: 'Vocabulary Checklist',
    nepali: 'शब्दावली जाँचसूची'
  },
  categories: [
    {
      name: 'Performances',
      words: ['공연', '뮤지컬', '연극', '연주회', '난타', '사물놀이', '길거리 공연(버스킹)', '전시회', '미술', '사진', '공예', '콘서트', '케이팝(K-pop)', '재즈(Jazz) 콘서트', '토크 콘서트(강연)']
    },
    {
      name: 'Process & Actions',
      words: ['정보를 검색하다', '예매하다', '수령하다', '좌석', '찾다', '관람하다', '감상 소감', '기대하다', '감동적이다']
    },
    {
      name: 'Additional Words',
      words: ['인상적이다', '안내 방송', '전원을 끄다', '입장하다', '택배', '참석하다', '유창하다', '작가', '장면', '표정', '헤어지다', '추천하다', '입장권', '초대권', '예약 번호', '할인', '연령', '유의 사항', '무료', '부담이 없다', '할인을 받다', '행사', '박물관', '경험이 쌓이다']
    }
  ]
};

// ============================================
// Create readingPassages array for App.jsx compatibility
// ============================================

export const readingPassages = [
  {
    id: 1,
    title: readingPassage.title,
    content: readingPassage.content,
    keyPoints: [
      {
        korean: "'문화가 있는 날'은 매월 마지막 주 수요일입니다.",
        english: "'Culture Day' is the last Wednesday of every month.",
        nepali: "'संस्कृति दिवस' हरेक महिनाको अन्तिम बुधबार हो।"
      },
      {
        korean: "이 날은 싼 가격이나 무료로 문화생활을 즐길 수 있습니다.",
        english: "On this day, you can enjoy cultural activities at cheaper prices or for free.",
        nepali: "यस दिन, सस्तो मूल्यमा वा निःशुल्क सांस्कृतिक गतिविधिहरू रमाउन सकिन्छ।"
      },
      {
        korean: "문화생활 경험이 쌓이면 한국 생활에도 익숙해집니다.",
        english: "As cultural experiences accumulate, you get used to life in Korea.",
        nepali: "सांस्कृतिक अनुभव बढ्दै जाँदा, कोरियाली जीवनमा अभ्यस्त हुन्छ।"
      }
    ]
  }
];

// Grammar patterns array (both grammars already exported individually above)
export const grammarPatterns = [grammar1, grammar2];

// All dialogues array
export const allDialogues = [speaking.mainDialogue, performanceDialogue];

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
  grammar2,
  grammar: [grammar1, grammar2],
  speaking,
  speakingActivity,
  performanceDialogue,
  dialogues: [speaking.mainDialogue, performanceDialogue],
  listening,
  reading,
  readingPassage,
  readingPassages,
  writing,
  cultureAndInfo,
  vocabularyChecklist,
  practiceExercises
};
