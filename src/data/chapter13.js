// KIIP Level 3 - Chapter 13: 직장 생활 (Workplace Life)
// Pages 168-175

export const chapterInfo = {
  chapter: 13,
  title: {
    korean: '직장 생활',
    english: 'Workplace Life',
    nepali: 'कार्यस्थल जीवन'
  },
  pageRange: '168-175',
  objectives: {
    vocabulary: {
      korean: '직장 생활과 업무',
      english: 'Workplace Life and Work Duties',
      nepali: 'कार्यस्थल जीवन र कार्य कर्तव्यहरू'
    },
    grammar: [
      {
        korean: '-게 하다',
        english: 'To make someone do (Causative)',
        nepali: 'कसैलाई गराउनु (कारक)'
      },
      {
        korean: '-아/어 가다 / -아/어 오다',
        english: 'Continuing action (going/coming)',
        nepali: 'निरन्तर कार्य (जाँदै/आउँदै)'
      }
    ],
    activities: [
      {
        korean: '직장 생활에 대해 이야기하기',
        english: 'Talking about workplace life',
        nepali: 'कार्यस्थल जीवनको बारेमा कुरा गर्ने'
      },
      {
        korean: '직장 생활 설문 조사 읽기',
        english: 'Reading workplace life surveys',
        nepali: 'कार्यस्थल जीवन सर्वेक्षण पढ्ने'
      }
    ],
    culture: {
      korean: '워라밸과 소확행',
      english: 'Work-Life Balance and Small but Certain Happiness',
      nepali: 'कार्य-जीवन सन्तुलन र साना तर निश्चित खुसी'
    }
  }
};

// ============================================
// PAGE 168 - 어휘 (Vocabulary)
// ============================================

// Section 1: Office Work (사무직 업무)
export const officeWorkVocabulary = [
  {
    id: 1,
    page: 168,
    category: 'Office Work',
    section: '사무직 업무',
    korean: '회의를 하다',
    pronunciation: 'hoeuireul hada',
    english: 'To hold a meeting',
    nepali: 'बैठक गर्ने',
    type: 'verb',
    example: {
      korean: '매주 월요일에 팀 회의를 해요.',
      english: 'We have a team meeting every Monday.',
      nepali: 'हरेक सोमबार टिम बैठक गर्छौं।'
    }
  },
  {
    id: 2,
    page: 168,
    category: 'Office Work',
    section: '사무직 업무',
    korean: '업무 지시를 하다',
    pronunciation: 'eommu jisireul hada',
    english: 'To give work instructions',
    nepali: 'कामको निर्देशन दिने',
    type: 'verb',
    example: {
      korean: '부장님이 새로운 업무 지시를 했어요.',
      english: 'The department head gave new work instructions.',
      nepali: 'विभाग प्रमुखले नयाँ कामको निर्देशन दिनुभयो।'
    }
  },
  {
    id: 3,
    page: 168,
    category: 'Office Work',
    section: '사무직 업무',
    korean: '업무 지시를 받다',
    pronunciation: 'eommu jisireul batda',
    english: 'To receive work instructions',
    nepali: 'कामको निर्देशन पाउने',
    type: 'verb',
    example: {
      korean: '오늘 아침에 새로운 업무 지시를 받았어요.',
      english: 'I received new work instructions this morning.',
      nepali: 'आज बिहान नयाँ कामको निर्देशन पाएँ।'
    }
  },
  {
    id: 4,
    page: 168,
    category: 'Office Work',
    section: '사무직 업무',
    korean: '업무를 보고하다',
    pronunciation: 'eommu reul bogohada',
    english: 'To report work',
    nepali: 'काम रिपोर्ट गर्ने',
    type: 'verb',
    example: {
      korean: '매일 업무를 보고해야 해요.',
      english: 'I have to report work every day.',
      nepali: 'हरेक दिन काम रिपोर्ट गर्नुपर्छ।'
    }
  },
  {
    id: 5,
    page: 168,
    category: 'Office Work',
    section: '사무직 업무',
    korean: '서류를 작성하다',
    pronunciation: 'seoryureul jakseonghada',
    english: 'To fill out documents',
    nepali: 'कागजात भर्ने',
    type: 'verb',
    example: {
      korean: '계약서 서류를 작성해 주세요.',
      english: 'Please fill out the contract documents.',
      nepali: 'सम्झौता कागजात भर्नुहोस्।'
    }
  },
  {
    id: 6,
    page: 168,
    category: 'Office Work',
    section: '사무직 업무',
    korean: '결재를 하다',
    pronunciation: 'gyeoljaereul hada',
    english: 'To give approval',
    nepali: 'स्वीकृति दिने',
    type: 'verb',
    example: {
      korean: '부장님이 결재를 해 주셨어요.',
      english: 'The department head gave approval.',
      nepali: 'विभाग प्रमुखले स्वीकृति दिनुभयो।'
    }
  },
  {
    id: 7,
    page: 168,
    category: 'Office Work',
    section: '사무직 업무',
    korean: '결재를 받다',
    pronunciation: 'gyeoljaereul batda',
    english: 'To receive approval',
    nepali: 'स्वीकृति पाउने',
    type: 'verb',
    example: {
      korean: '결재를 받으면 바로 진행할 수 있어요.',
      english: 'Once I receive approval, I can proceed immediately.',
      nepali: 'स्वीकृति पाएपछि तुरुन्तै अगाडि बढ्न सक्छु।'
    }
  }
];

// Section 2: Production Work (생산직 업무)
export const productionWorkVocabulary = [
  {
    id: 8,
    page: 168,
    category: 'Production Work',
    section: '생산직 업무',
    korean: '기계를 정비하다',
    pronunciation: 'gigyereul jeongbihada',
    english: 'To maintain machinery',
    nepali: 'मेसिन मर्मत गर्ने',
    type: 'verb',
    example: {
      korean: '매일 아침 기계를 정비해요.',
      english: 'We maintain the machinery every morning.',
      nepali: 'हरेक बिहान मेसिन मर्मत गर्छौं।'
    }
  },
  {
    id: 9,
    page: 168,
    category: 'Production Work',
    section: '생산직 업무',
    korean: '작동을 확인하다',
    pronunciation: 'jakdongeul hwaginhada',
    english: 'To check operation',
    nepali: 'सञ्चालन जाँच गर्ने',
    type: 'verb',
    example: {
      korean: '기계 작동을 확인한 후에 시작해요.',
      english: 'We start after checking the machine operation.',
      nepali: 'मेसिनको सञ्चालन जाँच गरेपछि सुरु गर्छौं।'
    }
  },
  {
    id: 10,
    page: 168,
    category: 'Production Work',
    section: '생산직 업무',
    korean: '공구를 준비하다',
    pronunciation: 'gonggureul junbihada',
    english: 'To prepare tools',
    nepali: 'औजार तयार गर्ने',
    type: 'verb',
    example: {
      korean: '작업 전에 공구를 준비해 놓으세요.',
      english: 'Please prepare the tools before work.',
      nepali: 'काम अघि औजार तयार गरेर राख्नुहोस्।'
    }
  },
  {
    id: 11,
    page: 168,
    category: 'Production Work',
    section: '생산직 업무',
    korean: '재고를 정리하다',
    pronunciation: 'jaegoreul jeongrihada',
    english: 'To organize inventory',
    nepali: 'भण्डार व्यवस्थित गर्ने',
    type: 'verb',
    example: {
      korean: '매달 재고를 정리해야 해요.',
      english: 'We have to organize inventory every month.',
      nepali: 'हरेक महिना भण्डार व्यवस्थित गर्नुपर्छ।'
    }
  },
  {
    id: 12,
    page: 168,
    category: 'Production Work',
    section: '생산직 업무',
    korean: '자재를 주문하다',
    pronunciation: 'jajaereul jumunhada',
    english: 'To order materials',
    nepali: 'सामग्री अर्डर गर्ने',
    type: 'verb',
    example: {
      korean: '자재가 부족해서 주문했어요.',
      english: 'We ordered materials because there wasn\'t enough.',
      nepali: 'सामग्री अपुग भएकोले अर्डर गरेँ।'
    }
  },
  {
    id: 13,
    page: 168,
    category: 'Production Work',
    section: '생산직 업무',
    korean: '작업 일지를 작성하다',
    pronunciation: 'jageop iljireul jakseonghada',
    english: 'To write a work log',
    nepali: 'कार्य लग लेख्ने',
    type: 'verb',
    example: {
      korean: '퇴근 전에 작업 일지를 작성해요.',
      english: 'I write the work log before leaving work.',
      nepali: 'काम सकेर जानु अघि कार्य लग लेख्छु।'
    }
  },
  {
    id: 14,
    page: 168,
    category: 'Production Work',
    section: '생산직 업무',
    korean: '작업 일지를 제출하다',
    pronunciation: 'jageop iljireul jechulhada',
    english: 'To submit a work log',
    nepali: 'कार्य लग बुझाउने',
    type: 'verb',
    example: {
      korean: '작업 일지를 매일 제출해야 해요.',
      english: 'You have to submit the work log every day.',
      nepali: 'हरेक दिन कार्य लग बुझाउनुपर्छ।'
    }
  }
];

// Section 3: Job Types and Pay (직종과 급여)
export const jobTypesVocabulary = [
  {
    id: 15,
    page: 168,
    category: 'Job Types',
    section: '직종과 급여',
    korean: '사무직',
    pronunciation: 'samujik',
    english: 'Office job',
    nepali: 'कार्यालय जागिर',
    type: 'noun',
    example: {
      korean: '사무직은 주로 컴퓨터 앞에서 일해요.',
      english: 'Office workers mainly work in front of computers.',
      nepali: 'कार्यालय कर्मचारीले मुख्यतया कम्प्युटर अगाडि काम गर्छन्।'
    }
  },
  {
    id: 16,
    page: 168,
    category: 'Job Types',
    section: '직종과 급여',
    korean: '생산직',
    pronunciation: 'saengsanjik',
    english: 'Production job',
    nepali: 'उत्पादन जागिर',
    type: 'noun',
    example: {
      korean: '생산직은 공장에서 일해요.',
      english: 'Production workers work in factories.',
      nepali: 'उत्पादन कर्मचारीहरू कारखानामा काम गर्छन्।'
    }
  },
  {
    id: 17,
    page: 168,
    category: 'Job Types',
    section: '직종과 급여',
    korean: '관리직',
    pronunciation: 'gwanlijik',
    english: 'Management position',
    nepali: 'व्यवस्थापन पद',
    type: 'noun',
    example: {
      korean: '관리직으로 승진했어요.',
      english: 'I was promoted to a management position.',
      nepali: 'व्यवस्थापन पदमा बढुवा भएँ।'
    }
  },
  {
    id: 18,
    page: 168,
    category: 'Job Types',
    section: '직종과 급여',
    korean: '영업직',
    pronunciation: 'yeongeopjik',
    english: 'Sales position',
    nepali: 'बिक्री पद',
    type: 'noun',
    example: {
      korean: '영업직은 고객을 만나는 일이 많아요.',
      english: 'Sales positions involve a lot of meeting customers.',
      nepali: 'बिक्री पदमा ग्राहकहरू भेट्ने काम धेरै हुन्छ।'
    }
  },
  {
    id: 19,
    page: 168,
    category: 'Job Types',
    section: '직종과 급여',
    korean: '판매직',
    pronunciation: 'panmaejik',
    english: 'Retail position',
    nepali: 'खुद्रा बिक्री पद',
    type: 'noun',
    example: {
      korean: '판매직은 매장에서 근무해요.',
      english: 'Retail workers work at stores.',
      nepali: 'खुद्रा बिक्री कर्मचारीहरू पसलमा काम गर्छन्।'
    }
  },
  {
    id: 20,
    page: 168,
    category: 'Job Types',
    section: '직종과 급여',
    korean: '일용직',
    pronunciation: 'ilyongjik',
    english: 'Daily wage job',
    nepali: 'दैनिक ज्याला जागिर',
    type: 'noun',
    example: {
      korean: '일용직으로 건설 현장에서 일해요.',
      english: 'I work at a construction site as a daily wage worker.',
      nepali: 'दैनिक ज्यालामा निर्माण स्थलमा काम गर्छु।'
    }
  }
];

// Section 4: Salary and Pay (급여)
export const salaryVocabulary = [
  {
    id: 21,
    page: 168,
    category: 'Salary',
    section: '급여',
    korean: '연봉',
    pronunciation: 'yeonbong',
    english: 'Annual salary',
    nepali: 'वार्षिक तलब',
    type: 'noun',
    example: {
      korean: '연봉 협상을 했어요.',
      english: 'I negotiated my annual salary.',
      nepali: 'वार्षिक तलब वार्ता गरेँ।'
    }
  },
  {
    id: 22,
    page: 168,
    category: 'Salary',
    section: '급여',
    korean: '월급',
    pronunciation: 'wolgeup',
    english: 'Monthly salary',
    nepali: 'मासिक तलब',
    type: 'noun',
    example: {
      korean: '월급은 매달 25일에 나와요.',
      english: 'The monthly salary comes out on the 25th of every month.',
      nepali: 'मासिक तलब हरेक महिनाको २५ तारिखमा आउँछ।'
    }
  },
  {
    id: 23,
    page: 168,
    category: 'Salary',
    section: '급여',
    korean: '주급',
    pronunciation: 'jugeup',
    english: 'Weekly pay',
    nepali: 'साप्ताहिक तलब',
    type: 'noun',
    example: {
      korean: '아르바이트는 주급으로 받아요.',
      english: 'Part-time pay is received weekly.',
      nepali: 'पार्ट-टाइम तलब साप्ताहिक पाइन्छ।'
    }
  },
  {
    id: 24,
    page: 168,
    category: 'Salary',
    section: '급여',
    korean: '일당',
    pronunciation: 'ildang',
    english: 'Daily pay',
    nepali: 'दैनिक ज्याला',
    type: 'noun',
    example: {
      korean: '일당은 얼마예요?',
      english: 'How much is the daily pay?',
      nepali: 'दैनिक ज्याला कति हो?'
    }
  },
  {
    id: 25,
    page: 168,
    category: 'Salary',
    section: '급여',
    korean: '시급',
    pronunciation: 'sigeup',
    english: 'Hourly pay',
    nepali: 'प्रति घण्टा तलब',
    type: 'noun',
    example: {
      korean: '최저 시급이 올랐어요.',
      english: 'The minimum hourly wage went up.',
      nepali: 'न्यूनतम प्रति घण्टा तलब बढ्यो।'
    }
  },
  {
    id: 26,
    page: 168,
    category: 'Salary',
    section: '급여',
    korean: '수당',
    pronunciation: 'sudang',
    english: 'Allowance / Bonus',
    nepali: 'भत्ता / बोनस',
    type: 'noun',
    example: {
      korean: '야근 수당을 받았어요.',
      english: 'I received overtime allowance.',
      nepali: 'ओभरटाइम भत्ता पाएँ।'
    }
  }
];

// Section 5: Additional workplace terms (추가 직장 용어)
export const additionalVocabulary = [
  {
    id: 27,
    page: 168,
    category: 'Workplace',
    section: '추가 직장 용어',
    korean: '야근',
    pronunciation: 'yageun',
    english: 'Overtime / Working late',
    nepali: 'ओभरटाइम / रातसम्म काम',
    type: 'noun',
    example: {
      korean: '이번 주에 야근을 많이 했어요.',
      english: 'I worked a lot of overtime this week.',
      nepali: 'यो हप्ता धेरै ओभरटाइम गरेँ।'
    }
  },
  {
    id: 28,
    page: 168,
    category: 'Workplace',
    section: '추가 직장 용어',
    korean: '상사',
    pronunciation: 'sangsa',
    english: 'Boss / Superior',
    nepali: 'बॉस / माथिल्लो',
    type: 'noun',
    example: {
      korean: '상사와 좋은 관계를 유지하는 것이 중요해요.',
      english: 'It\'s important to maintain a good relationship with your boss.',
      nepali: 'बॉससँग राम्रो सम्बन्ध राख्नु महत्त्वपूर्ण छ।'
    }
  },
  {
    id: 29,
    page: 168,
    category: 'Workplace',
    section: '추가 직장 용어',
    korean: '적응하다',
    pronunciation: 'jeogeunghada',
    english: 'To adapt / To adjust',
    nepali: 'अनुकूलन हुनु / बानी हुनु',
    type: 'verb',
    example: {
      korean: '새로운 직장에 잘 적응해 가고 있어요.',
      english: 'I\'m gradually adapting to my new workplace.',
      nepali: 'नयाँ कार्यस्थलमा बानी हुँदै गइरहेको छु।'
    }
  },
  {
    id: 30,
    page: 168,
    category: 'Workplace',
    section: '추가 직장 용어',
    korean: '워라밸',
    pronunciation: 'worabel',
    english: 'Work-life balance',
    nepali: 'कार्य-जीवन सन्तुलन',
    type: 'noun',
    example: {
      korean: '요즘 직장인들은 워라밸을 중요하게 생각해요.',
      english: 'These days, workers think work-life balance is important.',
      nepali: 'आजकल कर्मचारीहरूले कार्य-जीवन सन्तुलनलाई महत्त्वपूर्ण मान्छन्।'
    }
  },
  {
    id: 31,
    page: 168,
    category: 'Workplace',
    section: '추가 직장 용어',
    korean: '소확행',
    pronunciation: 'sohwakhaeng',
    english: 'Small but certain happiness',
    nepali: 'साना तर निश्चित खुसी',
    type: 'noun',
    example: {
      korean: '퇴근 후 커피 한 잔이 나의 소확행이에요.',
      english: 'A cup of coffee after work is my small but certain happiness.',
      nepali: 'काम सकेपछि एक कप कफी मेरो साना तर निश्चित खुसी हो।'
    }
  }
];

// Combine all vocabulary
export const allVocabulary = [
  ...officeWorkVocabulary,
  ...productionWorkVocabulary,
  ...jobTypesVocabulary,
  ...salaryVocabulary,
  ...additionalVocabulary
];

// ============================================
// PAGE 169-170 - 문법 (Grammar)
// ============================================

export const grammar1 = {
  id: 1,
  page: 169,
  pattern: "-게 하다",
  meaning: {
    english: "To make someone do / Causative",
    nepali: "कसैलाई गराउनु (कारक)"
  },
  description: {
    english: "This pattern is used to express causing someone to do an action. The subject makes or allows another person to perform the action. It can mean 'make someone do,' 'let someone do,' or 'have someone do.'",
    nepali: "यो ढाँचा कसैलाई कुनै कार्य गराउन प्रयोग गरिन्छ। कर्ताले अर्को व्यक्तिलाई कार्य गराउँछ। यसको अर्थ 'कसैलाई गराउनु,' 'कसैलाई दिनु,' वा 'कसैबाट गराउनु' हुन सक्छ।"
  },
  whenToUse: {
    situations: [
      {
        situation: {
          english: "Delegating work tasks",
          nepali: "काम सुम्पँदा"
        },
        example: {
          korean: '팀원들에게도 작성하게 하세요.',
          english: 'Have the team members write it too.',
          nepali: 'टिम सदस्यहरूलाई पनि लेख्न लगाउनुहोस्।'
        }
      },
      {
        situation: {
          english: "Giving medicine to a child",
          nepali: "बच्चालाई औषधि दिँदा"
        },
        example: {
          korean: '이 약을 식후에 아이에게 먹게 하세요.',
          english: 'Have the child take this medicine after meals.',
          nepali: 'यो औषधि खानापछि बच्चालाई खुवाउनुहोस्।'
        }
      },
      {
        situation: {
          english: "Teaching children responsibility",
          nepali: "बच्चाहरूलाई जिम्मेवारी सिकाउँदा"
        },
        example: {
          korean: '아이에게 자기 방을 스스로 정리하게 하세요.',
          english: 'Have the child clean their own room by themselves.',
          nepali: 'बच्चालाई आफ्नो कोठा आफैं सफा गर्न लगाउनुहोस्।'
        }
      },
      {
        situation: {
          english: "Government regulations",
          nepali: "सरकारी नियमहरू"
        },
        example: {
          korean: '출입국·외국인청에서 6개월 이상 거주하는 외국인에게 외국인 등록을 하게 합니다.',
          english: 'The immigration office requires foreigners residing for more than 6 months to register.',
          nepali: 'आप्रवासन कार्यालयले ६ महिनाभन्दा बढी बस्ने विदेशीहरूलाई विदेशी दर्ता गर्न लगाउँछ।'
        }
      }
    ]
  },
  whereToUse: {
    english: "Used in both spoken and written Korean. Common in workplace, parenting, and institutional contexts.",
    nepali: "बोलेको र लेखेको दुवै कोरियनमा प्रयोग गरिन्छ। कार्यस्थल, बाल पालन, र संस्थागत सन्दर्भमा सामान्य।"
  },
  formality: {
    english: "Neutral. Can be used in both formal and informal settings.",
    nepali: "तटस्थ। औपचारिक र अनौपचारिक दुवै सेटिङमा प्रयोग गर्न सकिन्छ।"
  },
  formation: {
    rule: "Verb stem + 게 하다",
    notes: {
      english: "Simply add 게 하다 to the verb stem. The person being made to do something is marked with 에게 or 한테. The tense is expressed through 하다 conjugation.",
      nepali: "Verb stem मा 게 하다 जोड्नुहोस्। गराइने व्यक्तिलाई 에게 वा 한테 ले चिन्ह लगाइन्छ। काल 하다 को conjugation मार्फत व्यक्त गरिन्छ।"
    },
    conjugationTable: [
      {
        verb: '작성하다',
        stem: '작성하',
        result: '작성하게 하다',
        english: 'To make someone write',
        nepali: 'कसैलाई लेख्न लगाउनु'
      },
      {
        verb: '먹다',
        stem: '먹',
        result: '먹게 하다',
        english: 'To make someone eat',
        nepali: 'कसैलाई खुवाउनु'
      },
      {
        verb: '정리하다',
        stem: '정리하',
        result: '정리하게 하다',
        english: 'To make someone clean/organize',
        nepali: 'कसैलाई सफा/व्यवस्थित गर्न लगाउनु'
      },
      {
        verb: '등록하다',
        stem: '등록하',
        result: '등록하게 하다',
        english: 'To make someone register',
        nepali: 'कसैलाई दर्ता गर्न लगाउनु'
      }
    ]
  },
  comparisonWithSimilar: {
    english: "Compare with -도록 하다: Both express causation, but -게 하다 is more direct ('make someone do'), while -도록 하다 implies more guidance ('ensure that'). They are often interchangeable.",
    nepali: "-도록 하다 सँग तुलना गर्नुहोस्: दुवैले कारण व्यक्त गर्छन्, तर -게 하다 बढी प्रत्यक्ष ('कसैलाई गराउनु') छ, जबकि -도록 하다 ले बढी मार्गदर्शन ('सुनिश्चित गर्नु') सङ्केत गर्छ।"
  },
  examples: [
    {
      context: { english: 'Workplace delegation', nepali: 'कार्यस्थलमा काम सुम्पने' },
      korean: '팀원들에게도 작성하게 하세요.',
      english: 'Have the team members write it too.',
      nepali: 'टिम सदस्यहरूलाई पनि लेख्न लगाउनुहोस्।'
    },
    {
      context: { english: 'Parenting', nepali: 'बाल पालन' },
      korean: '이 약을 식후에 아이에게 먹게 하세요.',
      english: 'Have the child take this medicine after meals.',
      nepali: 'यो औषधि खानापछि बच्चालाई खुवाउनुहोस्।'
    },
    {
      context: { english: 'Teaching independence', nepali: 'स्वतन्त्रता सिकाउने' },
      korean: '아이에게 자기 방을 스스로 정리하게 하세요.',
      english: 'Have the child clean their own room by themselves.',
      nepali: 'बच्चालाई आफ्नो कोठा आफैं सफा गर्न लगाउनुहोस्।'
    },
    {
      context: { english: 'Government regulation', nepali: 'सरकारी नियम' },
      korean: '출입국·외국인청에서 6개월 이상 거주하는 외국인에게 외국인 등록을 하게 합니다.',
      english: 'The immigration office requires foreigners residing for more than 6 months to register.',
      nepali: 'आप्रवासन कार्यालयले ६ महिनाभन्दा बढी बस्ने विदेशीहरूलाई विदेशी दर्ता गर्न लगाउँछ।'
    }
  ]
};

export const grammar2 = {
  id: 2,
  page: 170,
  pattern: "-아/어 가다 / -아/어 오다",
  meaning: {
    english: "Continuing action (going forward / coming up to now)",
    nepali: "निरन्तर कार्य (अगाडि बढ्दै / अहिलेसम्म आउँदै)"
  },
  description: {
    english: "This pattern expresses an action or state that continues over time. -아/어 가다 indicates a process continuing from now into the future, while -아/어 오다 indicates a process that has been continuing from the past up to now.",
    nepali: "यो ढाँचाले समयसँगै निरन्तर रहने कार्य वा अवस्था व्यक्त गर्छ। -아/어 가다 ले अहिलेदेखि भविष्यसम्म जारी रहने प्रक्रिया जनाउँछ, जबकि -아/어 오다 ले विगतदेखि अहिलेसम्म जारी रहेको प्रक्रिया जनाउँछ।"
  },
  whenToUse: {
    situations: [
      {
        situation: {
          english: "Talking about adapting to workplace",
          nepali: "कार्यस्थलमा अनुकूलन हुने बारेमा कुरा गर्दा"
        },
        example: {
          korean: '잘 적응해 가고 있어요.',
          english: 'I\'m gradually adapting well.',
          nepali: 'राम्रोसँग बानी हुँदै गइरहेको छु।'
        }
      },
      {
        situation: {
          english: "Nearing completion of a task",
          nepali: "काम सकिन लागेको बारेमा"
        },
        example: {
          korean: '이제 거의 다 끝나 가요.',
          english: 'It\'s almost all done now.',
          nepali: 'अब झण्डै सबै सकिँदै गएको छ।'
        }
      },
      {
        situation: {
          english: "Talking about time passing",
          nepali: "समय बित्दै गएको बारेमा कुरा गर्दा"
        },
        example: {
          korean: '한국에 온 지 거의 3년이 되어 가요.',
          english: 'It\'s going on almost 3 years since I came to Korea.',
          nepali: 'कोरिया आएको झण्डै ३ वर्ष हुँदै गएको छ।'
        }
      },
      {
        situation: {
          english: "Learning about work culture",
          nepali: "कार्य संस्कृतिको बारेमा सिक्दा"
        },
        example: {
          korean: '한국 사람들의 일하는 방식을 알아 가는 중이에요.',
          english: 'I\'m in the process of learning how Korean people work.',
          nepali: 'कोरियाली मानिसहरूको काम गर्ने तरिका बुझ्दै गइरहेको छु।'
        }
      }
    ]
  },
  whereToUse: {
    english: "Used in both spoken and written Korean. Very natural in everyday conversation about ongoing processes and changes.",
    nepali: "बोलेको र लेखेको दुवै कोरियनमा प्रयोग गरिन्छ। चलिरहेको प्रक्रिया र परिवर्तनको बारेमा दैनिक कुराकानीमा धेरै स्वाभाविक।"
  },
  formality: {
    english: "Neutral. Can be used in both formal and informal settings.",
    nepali: "तटस्थ। औपचारिक र अनौपचारिक दुवै सेटिङमा प्रयोग गर्न सकिन्छ।"
  },
  formation: {
    rule: "Verb stem + 아/어 가다 or 아/어 오다",
    notes: {
      english: "Use 아 after stems ending in ㅏ or ㅗ, 어 for other vowels, 하다 becomes 해. 가다 = continuing into the future; 오다 = continuing from the past to now.",
      nepali: "ㅏ वा ㅗ मा अन्त्य हुने stem पछि 아, अन्य स्वरहरूको लागि 어, 하다 => 해। 가다 = भविष्यमा जारी; 오다 = विगतदेखि अहिलेसम्म जारी।"
    },
    conjugationTable: [
      {
        verb: '적응하다',
        stem: '적응하',
        result: '적응해 가다 / 적응해 오다',
        english: 'To keep adapting',
        nepali: 'बानी हुँदै जानु'
      },
      {
        verb: '끝나다',
        stem: '끝나',
        result: '끝나 가다',
        english: 'To be gradually finishing',
        nepali: 'सकिँदै जानु'
      },
      {
        verb: '알다',
        stem: '알',
        result: '알아 가다 / 알아 오다',
        english: 'To keep learning/knowing',
        nepali: 'बुझ्दै जानु'
      },
      {
        verb: '되다',
        stem: '되',
        result: '되어 가다',
        english: 'To be gradually becoming',
        nepali: 'हुँदै जानु'
      }
    ]
  },
  comparisonWithSimilar: {
    english: "Compare with -고 있다: Both express ongoing actions, but -아/어 가다/오다 emphasizes the process of change over time, while -고 있다 simply states an action is in progress.",
    nepali: "-고 있다 सँग तुलना गर्नुहोस्: दुवैले चलिरहेको कार्य व्यक्त गर्छन्, तर -아/어 가다/오다 ले समयसँगै परिवर्तनको प्रक्रियामा जोड दिन्छ, जबकि -고 있다 ले सिधै कार्य चलिरहेको बताउँछ।"
  },
  examples: [
    {
      context: { english: 'Workplace adaptation', nepali: 'कार्यस्थल अनुकूलन' },
      korean: '잘 적응해 가고 있어요.',
      english: 'I\'m gradually adapting well.',
      nepali: 'राम्रोसँग बानी हुँदै गइरहेको छु।'
    },
    {
      context: { english: 'Task completion', nepali: 'काम पूरा हुँदै' },
      korean: '이제 거의 다 끝나 가요.',
      english: 'It\'s almost all done now.',
      nepali: 'अब झण्डै सबै सकिँदै गएको छ।'
    },
    {
      context: { english: 'Time passing', nepali: 'समय बित्दै' },
      korean: '한국에 온 지 거의 3년이 되어 가요.',
      english: 'It\'s going on almost 3 years since I came to Korea.',
      nepali: 'कोरिया आएको झण्डै ३ वर्ष हुँदै गएको छ।'
    },
    {
      context: { english: 'Learning work culture', nepali: 'कार्य संस्कृति सिक्दा' },
      korean: '한국 사람들의 일하는 방식을 알아 가는 중이에요.',
      english: 'I\'m in the process of learning how Korean people work.',
      nepali: 'कोरियाली मानिसहरूको काम गर्ने तरिका बुझ्दै गइरहेको छु।'
    }
  ]
};

// ============================================
// PAGE 171 - 말하기 (Speaking)
// ============================================

export const speaking = {
  page: 171,
  title: {
    korean: '직장 생활에 대해 이야기하기',
    english: 'Talking about Workplace Life',
    nepali: 'कार्यस्थल जीवनको बारेमा कुरा गर्ने'
  },
  mainDialogue: {
    id: 1,
    title: {
      korean: '직장 생활에 대해 이야기하기',
      english: 'Talking about Workplace Life',
      nepali: 'कार्यस्थल जीवनको बारेमा कुरा गर्ने'
    },
    situation: {
      korean: '드미트리와 안젤라가 직장 생활에 대해 이야기하고 있습니다.',
      english: 'Dmitry and Angela are talking about workplace life.',
      nepali: 'दिमित्री र एन्जेलाले कार्यस्थल जीवनको बारेमा कुरा गर्दैछन्।'
    },
    conversation: [
      {
        speaker: '드미트리',
        korean: '안젤라 씨, 요즘 회사 생활은 어때요?',
        english: 'Angela, how\'s work life these days?',
        nepali: 'एन्जेला, आजकल कम्पनीको जीवन कस्तो छ?'
      },
      {
        speaker: '안젤라',
        korean: '잘 적응해 가고 있어요. 그런데 어려운 계약서를 번역하게 해서 힘들었어요.',
        english: 'I\'m adapting well. But they had me translate a difficult contract, so it was tough.',
        nepali: 'बानी हुँदै गइरहेको छु। तर गाह्रो सम्झौतापत्र अनुवाद गर्न लगाएकोले कठिन भयो।'
      },
      {
        speaker: '드미트리',
        korean: '계약서 번역이요? 정말 어려웠겠네요.',
        english: 'Contract translation? That must have been really hard.',
        nepali: 'सम्झौतापत्र अनुवाद? साँच्चै गाह्रो भएको होला।'
      },
      {
        speaker: '안젤라',
        korean: '네, 처음에는 모르는 단어가 많았어도 열심히 해서 끝냈어요.',
        english: 'Yes, even though there were many words I didn\'t know at first, I worked hard and finished it.',
        nepali: 'हो, पहिले नचिनेका शब्दहरू धेरै भए पनि मेहनत गरेर सकाएँ।'
      },
      {
        speaker: '드미트리',
        korean: '대단하네요! 한국 직장 문화는 어떤 것 같아요?',
        english: 'That\'s impressive! What do you think of Korean work culture?',
        nepali: 'ठूलो कुरा! कोरियाली कार्यस्थल संस्कृति कस्तो लागेको छ?'
      },
      {
        speaker: '안젤라',
        korean: '한국 사람들의 일하는 방식을 알아 가는 중이에요. 야근이 좀 많지만요.',
        english: 'I\'m in the process of learning how Korean people work. But there\'s a lot of overtime.',
        nepali: 'कोरियाली मानिसहरूको काम गर्ने तरिका बुझ्दै गइरहेको छु। तर ओभरटाइम अलि धेरै छ।'
      },
      {
        speaker: '드미트리',
        korean: '맞아요. 저도 처음에는 힘들었어요. 그래도 점점 익숙해져 가고 있어요.',
        english: 'Right. It was tough for me at first too. But I\'m gradually getting used to it.',
        nepali: 'हो। मलाई पनि पहिले गाह्रो भएको थियो। तर बिस्तारै बानी हुँदै गइरहेको छु।'
      }
    ],
    keyExpressions: [
      {
        korean: '번역하게 해서',
        english: 'They had me translate (causative)',
        nepali: 'अनुवाद गर्न लगाएकोले',
        explanation: 'Using -게 하다 to express being made to do something'
      },
      {
        korean: '적응해 가고 있어요',
        english: 'I\'m gradually adapting',
        nepali: 'बानी हुँदै गइरहेको छु',
        explanation: 'Using -아/어 가다 to show ongoing progress'
      },
      {
        korean: '알아 가는 중이에요',
        english: 'I\'m in the process of learning',
        nepali: 'बुझ्दै गइरहेको छु',
        explanation: 'Using -아/어 가다 with 중 to emphasize the ongoing process'
      }
    ]
  }
};

// ============================================
// PAGE 172 - 듣기 (Listening)
// ============================================

export const listeningDialogue = {
  id: 2,
  page: 172,
  title: {
    korean: '휴가 신청',
    english: 'Vacation Request',
    nepali: 'बिदा निवेदन'
  },
  situation: {
    korean: '선배와 안젤라가 휴가 신청에 대해 이야기하고 있습니다.',
    english: 'A senior colleague and Angela are talking about requesting vacation.',
    nepali: 'सिनियर सहकर्मी र एन्जेलाले बिदा निवेदनको बारेमा कुरा गर्दैछन्।'
  },
  conversation: [
    {
      speaker: '안젤라',
      korean: '선배, 저 다음 주에 휴가를 쓰고 싶은데 어떻게 해야 해요?',
      english: 'Senior, I want to take vacation next week. What should I do?',
      nepali: 'सिनियर, म अर्को हप्ता बिदा लिन चाहन्छु। के गर्नुपर्छ?'
    },
    {
      speaker: '선배',
      korean: '먼저 팀장님께 말씀드리고, 휴가 신청서를 작성하게 될 거예요.',
      english: 'First, tell the team leader, and you\'ll need to fill out a vacation request form.',
      nepali: 'पहिले टिम लिडरलाई भन्नुहोस्, र बिदा निवेदन फारम भर्नुपर्नेछ।'
    },
    {
      speaker: '안젤라',
      korean: '얼마 전에 결재를 받아야 한다고 들었어요.',
      english: 'I heard that I need to get approval.',
      nepali: 'केही समय अघि स्वीकृति लिनुपर्छ भन्ने सुनेको थिएँ।'
    },
    {
      speaker: '선배',
      korean: '네, 팀장님 결재를 받은 후에 부장님한테도 보고해야 해요. 미리미리 신청하는 게 좋아요.',
      english: 'Yes, after getting the team leader\'s approval, you also need to report to the department head. It\'s better to apply well in advance.',
      nepali: 'हो, टिम लिडरको स्वीकृति पाएपछि विभाग प्रमुखलाई पनि जानकारी गराउनुपर्छ। अगाडि नै निवेदन दिनु राम्रो हुन्छ।'
    },
    {
      speaker: '안젤라',
      korean: '알겠습니다. 한국 직장에서는 미리 말씀드려야 하는군요.',
      english: 'I see. So in Korean workplaces, you need to let them know in advance.',
      nepali: 'बुझेँ। कोरियाली कार्यस्थलमा अगाउ जानकारी गराउनुपर्ने रहेछ।'
    },
    {
      speaker: '선배',
      korean: '네, 최소 일주일 전에는 신청하게 하고 있어요.',
      english: 'Yes, they require applying at least a week in advance.',
      nepali: 'हो, कम्तिमा एक हप्ता अघि निवेदन दिन लगाउँछन्।'
    }
  ],
  keyExpressions: [
    {
      korean: '작성하게 될 거예요',
      english: 'You will end up filling out',
      nepali: 'भर्नुपर्ने हुनेछ',
      explanation: 'Using -게 되다 for future change'
    },
    {
      korean: '신청하게 하고 있어요',
      english: 'They have people apply / They require applying',
      nepali: 'निवेदन दिन लगाउँछन्',
      explanation: 'Using -게 하다 for institutional requirements'
    }
  ]
};

// ============================================
// PAGE 173-174 - 읽기 (Reading)
// ============================================

export const readings = [
  {
    id: 1,
    page: 173,
    title: {
      korean: '직장 생활의 어려움, 이렇게 이겨 낸다',
      english: 'Overcoming Workplace Difficulties',
      nepali: 'कार्यस्थलका कठिनाइहरू, यसरी जित्छन्'
    },
    content: {
      korean: `한 설문 조사에 따르면 직장인의 70% 이상이 직장 생활에서 어려움을 겪고 있다고 한다.

가장 큰 어려움은 '인간관계'였다. 상사나 동료와의 관계가 어렵다고 답한 사람이 35%로 가장 많았다. 그다음으로 '과도한 업무'가 28%, '낮은 급여'가 20%, '야근'이 12%였다.

직장인들은 이러한 어려움을 어떻게 이겨 내고 있을까? 설문에 참여한 직장인들은 '운동이나 취미 활동'(32%), '가족이나 친구와 대화'(28%), '맛있는 음식 먹기'(22%), '여행'(18%)으로 스트레스를 풀고 있다고 답했다.

요즘 직장인들 사이에서 '워라밸'(Work-Life Balance)이 중요한 키워드로 떠오르고 있다. 일과 생활의 균형을 맞추려는 노력이 늘어 가고 있다. 또한 '소확행'(작지만 확실한 행복)을 추구하는 사람들도 많아져 오고 있다.`,
      english: `According to a survey, more than 70% of workers say they experience difficulties at work.

The biggest difficulty was 'interpersonal relationships.' 35% answered that relationships with superiors or colleagues were difficult, making it the most common answer. Next was 'excessive workload' at 28%, 'low salary' at 20%, and 'overtime' at 12%.

How do workers overcome these difficulties? Survey participants answered that they relieve stress through 'exercise or hobbies' (32%), 'talking with family or friends' (28%), 'eating delicious food' (22%), and 'traveling' (18%).

Recently, 'Work-Life Balance' (워라밸) has been emerging as an important keyword among workers. Efforts to balance work and life are increasing. Also, more and more people have been pursuing '소확행' (small but certain happiness).`,
      nepali: `एक सर्वेक्षण अनुसार ७०% भन्दा बढी कर्मचारीहरूले कार्यस्थलमा कठिनाइ अनुभव गर्छन् भन्छन्।

सबैभन्दा ठूलो कठिनाइ 'मानवीय सम्बन्ध' थियो। ३५% ले माथिल्लो वा सहकर्मीसँगको सम्बन्ध गाह्रो छ भनेर जवाफ दिए, जुन सबैभन्दा सामान्य उत्तर थियो। त्यसपछि 'अत्यधिक काम' २८%, 'कम तलब' २०%, र 'ओभरटाइम' १२% थियो।

कर्मचारीहरूले यी कठिनाइहरू कसरी जित्छन्? सर्वेक्षणमा सहभागीहरूले 'व्यायाम वा शौक' (३२%), 'परिवार वा साथीसँग कुराकानी' (२८%), 'मिठो खाना खाने' (२२%), र 'यात्रा' (१८%) द्वारा तनाव कम गर्छन् भनेर जवाफ दिए।

हालै, 'कार्य-जीवन सन्तुलन' (워라밸) कर्मचारीहरूमा महत्त्वपूर्ण कुञ्जी शब्दको रूपमा उभरिँदैछ। काम र जीवनको सन्तुलन मिलाउने प्रयास बढ्दै गइरहेको छ। साथै, 'साना तर निश्चित खुसी' (소확행) खोज्ने मानिसहरू पनि बढ्दै आइरहेका छन्।`
    },
    vocabulary: [
      { korean: '설문 조사', english: 'survey', nepali: 'सर्वेक्षण' },
      { korean: '인간관계', english: 'interpersonal relationships', nepali: 'मानवीय सम्बन्ध' },
      { korean: '과도한', english: 'excessive', nepali: 'अत्यधिक' },
      { korean: '이겨 내다', english: 'to overcome', nepali: 'जित्नु' },
      { korean: '균형', english: 'balance', nepali: 'सन्तुलन' },
      { korean: '추구하다', english: 'to pursue', nepali: 'खोज्नु' }
    ],
    comprehensionQuestions: [
      {
        question: {
          korean: '직장인들의 가장 큰 어려움은 무엇입니까?',
          english: 'What is the biggest difficulty for workers?',
          nepali: 'कर्मचारीहरूको सबैभन्दा ठूलो कठिनाइ के हो?'
        },
        answer: {
          korean: '인간관계가 가장 큰 어려움입니다.',
          english: 'Interpersonal relationships are the biggest difficulty.',
          nepali: 'मानवीय सम्बन्ध सबैभन्दा ठूलो कठिनाइ हो।'
        }
      },
      {
        question: {
          korean: '직장인들은 스트레스를 어떻게 풀고 있습니까?',
          english: 'How do workers relieve stress?',
          nepali: 'कर्मचारीहरूले तनाव कसरी कम गर्छन्?'
        },
        answer: {
          korean: '운동, 대화, 맛있는 음식, 여행 등으로 스트레스를 풀고 있습니다.',
          english: 'They relieve stress through exercise, conversation, delicious food, travel, etc.',
          nepali: 'व्यायाम, कुराकानी, मिठो खाना, यात्रा आदिद्वारा तनाव कम गर्छन्।'
        }
      }
    ]
  }
];

// ============================================
// PAGE 175 - 문화 (Culture)
// ============================================

export const culture = {
  page: 175,
  title: {
    korean: '워라밸과 소확행',
    english: 'Work-Life Balance and Small but Certain Happiness',
    nepali: 'कार्य-जीवन सन्तुलन र साना तर निश्चित खुसी'
  },
  sections: [
    {
      subtitle: {
        korean: '워라밸 (Work-Life Balance)',
        english: 'Work-Life Balance',
        nepali: 'कार्य-जीवन सन्तुलन'
      },
      content: {
        korean: '워라밸은 \'Work-Life Balance\'의 줄임말로, 일과 개인 생활의 균형을 의미합니다. 한국에서는 주 52시간 근무제가 시행되면서 워라밸에 대한 관심이 높아졌습니다. 퇴근 후 자기 개발이나 취미 활동을 하는 직장인이 늘고 있습니다.',
        english: 'Worabel is an abbreviation of \'Work-Life Balance,\' meaning the balance between work and personal life. In Korea, interest in work-life balance has grown since the implementation of the 52-hour work week system. More and more workers are pursuing self-development or hobbies after work.',
        nepali: 'वोराबेल \'Work-Life Balance\' को छोटकरी हो, जसले काम र व्यक्तिगत जीवनको सन्तुलन जनाउँछ। कोरियामा, ५२ घण्टा साप्ताहिक कार्य प्रणाली लागू भएपछि कार्य-जीवन सन्तुलनप्रति चासो बढेको छ। काम सकेपछि आत्म-विकास वा शौक गतिविधिहरू गर्ने कर्मचारीहरू बढ्दै छन्।'
      }
    },
    {
      subtitle: {
        korean: '소확행 (작지만 확실한 행복)',
        english: 'Small but Certain Happiness',
        nepali: 'साना तर निश्चित खुसी'
      },
      content: {
        korean: '소확행은 \'작지만 확실한 행복\'의 줄임말입니다. 큰 성공이나 부보다 일상에서 느끼는 작은 행복을 중요하게 여기는 트렌드입니다. 예를 들어, 좋아하는 카페에서 커피를 마시거나, 퇴근 후 산책하는 것 등이 소확행입니다.',
        english: '소확행 is an abbreviation of \'small but certain happiness.\' It is a trend of valuing small everyday happiness over big success or wealth. For example, drinking coffee at your favorite café or taking a walk after work are examples of 소확행.',
        nepali: 'सोह्वाक्हेङ \'साना तर निश्चित खुसी\' को छोटकरी हो। यो ठूलो सफलता वा सम्पत्तिभन्दा दैनिक जीवनमा अनुभव गरिने सानो खुसीलाई महत्त्व दिने ट्रेन्ड हो। उदाहरणका लागि, मनपर्ने क्याफेमा कफी पिउने, वा काम सकेपछि हिँड्ने जस्ता कुराहरू सोह्वाक्हेङ हुन्।'
      }
    }
  ],
  tips: [
    {
      korean: '한국에서는 주 52시간 근무제가 시행되고 있습니다.',
      english: 'In Korea, a 52-hour weekly work limit system is in effect.',
      nepali: 'कोरियामा ५२ घण्टा साप्ताहिक कार्य सीमा प्रणाली लागू छ।'
    },
    {
      korean: '워라밸을 위해 취미 활동이나 자기 개발을 하는 직장인이 늘고 있습니다.',
      english: 'More workers are pursuing hobbies and self-development for work-life balance.',
      nepali: 'कार्य-जीवन सन्तुलनको लागि शौक गतिविधि र आत्म-विकास गर्ने कर्मचारीहरू बढ्दै छन्।'
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
      korean: '사무직에서 상사에게 허가를 받는 것을 무엇이라고 합니까?',
      english: 'What is it called when you receive permission from a superior in an office job?',
      nepali: 'कार्यालय जागिरमा माथिल्लोबाट अनुमति पाउने कुरालाई के भनिन्छ?'
    },
    options: [
      { korean: '업무 보고', english: 'Work report' },
      { korean: '결재', english: 'Approval' },
      { korean: '서류 작성', english: 'Document preparation' },
      { korean: '업무 지시', english: 'Work instruction' }
    ],
    correctAnswer: 1,
    explanation: {
      korean: '결재는 상사에게 허가나 승인을 받는 것입니다.',
      english: 'Gyeoljae means receiving permission or approval from a superior.',
      nepali: 'ग्योल्जाए माथिल्लोबाट अनुमति वा स्वीकृति पाउने हो।'
    }
  },
  {
    id: 2,
    type: 'grammar',
    question: {
      korean: '"팀원들에게도 작성_____ 하세요"에서 빈칸에 알맞은 것은?',
      english: 'What goes in the blank: "Have the team members write it too ___"?',
      nepali: 'खाली ठाउँमा के आउँछ?'
    },
    options: [
      { korean: '하게', english: '-hage (make do)' },
      { korean: '하러', english: '-hareo (in order to)' },
      { korean: '하면', english: '-hamyeon (if)' },
      { korean: '하고', english: '-hago (and)' }
    ],
    correctAnswer: 0,
    explanation: {
      korean: '-게 하다는 다른 사람에게 어떤 행동을 시킬 때 사용합니다.',
      english: '-게 하다 is used when making someone do an action.',
      nepali: '-게 하다 कसैलाई कुनै कार्य गराउँदा प्रयोग गरिन्छ।'
    }
  },
  {
    id: 3,
    type: 'grammar',
    question: {
      korean: '"잘 적응___ 가고 있어요"에서 빈칸에 알맞은 것은?',
      english: 'What goes in the blank: "I\'m gradually adapting well"?',
      nepali: 'खाली ठाउँमा के आउँछ?'
    },
    options: [
      { korean: '해', english: '-hae' },
      { korean: '하고', english: '-hago' },
      { korean: '하면', english: '-hamyeon' },
      { korean: '하게', english: '-hage' }
    ],
    correctAnswer: 0,
    explanation: {
      korean: '-아/어 가다는 동작이 계속 진행되고 있음을 나타냅니다.',
      english: '-아/어 가다 indicates that an action is continuing to progress.',
      nepali: '-아/어 가다 ले कार्य निरन्तर अगाडि बढिरहेको जनाउँछ।'
    }
  },
  {
    id: 4,
    type: 'vocabulary',
    question: {
      korean: '직장인들의 가장 큰 어려움은 무엇입니까?',
      english: 'What is the biggest difficulty for workers?',
      nepali: 'कर्मचारीहरूको सबैभन्दा ठूलो कठिनाइ के हो?'
    },
    options: [
      { korean: '야근', english: 'Overtime' },
      { korean: '낮은 급여', english: 'Low salary' },
      { korean: '인간관계', english: 'Interpersonal relationships' },
      { korean: '과도한 업무', english: 'Excessive workload' }
    ],
    correctAnswer: 2,
    explanation: {
      korean: '설문 조사에 따르면 인간관계가 35%로 가장 큰 어려움입니다.',
      english: 'According to the survey, interpersonal relationships at 35% are the biggest difficulty.',
      nepali: 'सर्वेक्षण अनुसार मानवीय सम्बन्ध ३५% ले सबैभन्दा ठूलो कठिनाइ हो।'
    }
  },
  {
    id: 5,
    type: 'vocabulary',
    question: {
      korean: '\'작지만 확실한 행복\'의 줄임말은 무엇입니까?',
      english: 'What is the abbreviation for "small but certain happiness"?',
      nepali: '\'साना तर निश्चित खुसी\' को छोटकरी के हो?'
    },
    options: [
      { korean: '워라밸', english: 'Work-life balance' },
      { korean: '소확행', english: 'Small certain happiness' },
      { korean: '황금연휴', english: 'Golden holiday' },
      { korean: '귀성객', english: 'Homecoming travelers' }
    ],
    correctAnswer: 1,
    explanation: {
      korean: '소확행은 \'작지만 확실한 행복\'의 줄임말입니다.',
      english: '소확행 is an abbreviation of \'small but certain happiness.\'',
      nepali: 'सोह्वाक्हेङ \'साना तर निश्चित खुसी\' को छोटकरी हो।'
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
        question: '매일 아침 기계를 (      )해요.',
        answer: '정비',
        hint: { english: 'maintain', nepali: 'मर्मत' }
      },
      {
        question: '(      )은 매달 25일에 나와요.',
        answer: '월급',
        hint: { english: 'monthly salary', nepali: 'मासिक तलब' }
      },
      {
        question: '퇴근 전에 작업 (      )를 작성해요.',
        answer: '일지',
        hint: { english: 'log/journal', nepali: 'लग/जर्नल' }
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
        question: 'Have the team members write it too.',
        nepaliQuestion: 'टिम सदस्यहरूलाई पनि लेख्न लगाउनुहोस्।',
        answer: '팀원들에게도 작성하게 하세요.'
      },
      {
        question: 'I\'m gradually adapting well.',
        nepaliQuestion: 'राम्रोसँग बानी हुँदै गइरहेको छु।',
        answer: '잘 적응해 가고 있어요.'
      },
      {
        question: 'It\'s almost all done now.',
        nepaliQuestion: 'अब झण्डै सबै सकिँदै गएको छ।',
        answer: '이제 거의 다 끝나 가요.'
      }
    ]
  },
  {
    id: 8,
    type: 'vocabulary',
    question: {
      korean: '공장에서 일하는 직종을 무엇이라고 합니까?',
      english: 'What do you call the type of job that works in a factory?',
      nepali: 'कारखानामा काम गर्ने जागिरको प्रकारलाई के भनिन्छ?'
    },
    options: [
      { korean: '사무직', english: 'Office job' },
      { korean: '영업직', english: 'Sales position' },
      { korean: '생산직', english: 'Production job' },
      { korean: '관리직', english: 'Management position' }
    ],
    correctAnswer: 2,
    explanation: {
      korean: '생산직은 공장 등에서 물건을 만드는 일을 합니다.',
      english: 'Production jobs involve making products in factories etc.',
      nepali: 'उत्पादन जागिरमा कारखाना आदिमा सामान बनाउने काम गरिन्छ।'
    }
  },
  {
    id: 9,
    type: 'grammar',
    question: {
      korean: '"한국에 온 지 거의 3년이 되어 ___"에서 빈칸에 알맞은 것은?',
      english: 'What goes in the blank: "It\'s going on almost 3 years since I came to Korea ___"?',
      nepali: 'खाली ठाउँमा के आउँछ?'
    },
    options: [
      { korean: '가요', english: 'gayo (going)' },
      { korean: '왔어요', english: 'wasseoyo (came)' },
      { korean: '봐요', english: 'bwayo (see)' },
      { korean: '줘요', english: 'jwoyo (give)' }
    ],
    correctAnswer: 0,
    explanation: {
      korean: '-아/어 가다는 현재부터 미래로 계속되는 변화를 나타냅니다.',
      english: '-아/어 가다 indicates a change continuing from the present into the future.',
      nepali: '-아/어 가다 ले वर्तमानबाट भविष्यमा निरन्तर रहने परिवर्तन जनाउँछ।'
    }
  },
  {
    id: 10,
    type: 'vocabulary',
    question: {
      korean: '한국에서 주 몇 시간 근무제가 시행되고 있습니까?',
      english: 'How many hours per week is the work limit in Korea?',
      nepali: 'कोरियामा साप्ताहिक कति घण्टा कार्य सीमा प्रणाली लागू छ?'
    },
    options: [
      { korean: '40시간', english: '40 hours' },
      { korean: '48시간', english: '48 hours' },
      { korean: '52시간', english: '52 hours' },
      { korean: '60시간', english: '60 hours' }
    ],
    correctAnswer: 2,
    explanation: {
      korean: '한국에서는 주 52시간 근무제가 시행되고 있습니다.',
      english: 'In Korea, a 52-hour weekly work limit is in effect.',
      nepali: 'कोरियामा ५२ घण्टा साप्ताहिक कार्य सीमा प्रणाली लागू छ।'
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
  officeWorkVocabulary,
  productionWorkVocabulary,
  jobTypesVocabulary,
  salaryVocabulary,
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
