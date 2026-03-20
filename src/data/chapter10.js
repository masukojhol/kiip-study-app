// KIIP Level 3 - Chapter 10: 취업 (Getting a Job)
// Pages 132-141

export const chapterInfo = {
  chapter: 10,
  title: {
    korean: '취업',
    english: 'Getting a Job',
    nepali: 'रोजगारी पाउने'
  },
  pageRange: '132-141',
  objectives: {
    vocabulary: {
      korean: '취업과 구직',
      english: 'Employment and Job Searching',
      nepali: 'रोजगारी र काम खोज्ने'
    },
    grammar: [
      {
        korean: 'V + 기 위해서',
        english: 'In order to (do something)',
        nepali: '(केहि गर्न) को लागि'
      },
      {
        korean: 'V + 아/어 놓다',
        english: 'To do something and keep it that way',
        nepali: 'गरेर राखिदिनु (कार्यको नतिजा कायम राख्नु)'
      }
    ],
    activities: [
      {
        korean: '취업 준비에 대해 이야기하기',
        english: 'Talking about job preparation',
        nepali: 'रोजगारी तयारीको बारेमा कुरा गर्ने'
      },
      {
        korean: '구인 광고 읽기',
        english: 'Reading job advertisements',
        nepali: 'रोजगारी विज्ञापन पढ्ने'
      }
    ],
    culture: {
      korean: '급여와 세금',
      english: 'Salary and Taxes',
      nepali: 'तलब र कर'
    }
  }
};

// ============================================
// PAGE 132 - 어휘 (Vocabulary)
// ============================================

// Section 1: Types of work
export const jobTypeVocabulary = [
  {
    id: 1,
    page: 132,
    category: 'Job Types',
    section: 'Types of Work',
    korean: '학원 강사',
    pronunciation: 'hagwon gangsa',
    english: 'Academy instructor',
    nepali: 'ट्युसन शिक्षक',
    type: 'noun',
    example: {
      korean: '학원 강사로 일하고 싶어요.',
      english: 'I want to work as an academy instructor.',
      nepali: 'ट्युसन शिक्षकको रूपमा काम गर्न चाहन्छु।'
    }
  },
  {
    id: 2,
    page: 132,
    category: 'Job Types',
    section: 'Types of Work',
    korean: '다문화 언어 강사',
    pronunciation: 'damunhwa eoneo gangsa',
    english: 'Multicultural language instructor',
    nepali: 'बहुसांस्कृतिक भाषा शिक्षक',
    type: 'noun',
    example: {
      korean: '다문화 언어 강사는 외국어를 가르쳐요.',
      english: 'A multicultural language instructor teaches foreign languages.',
      nepali: 'बहुसांस्कृतिक भाषा शिक्षकले विदेशी भाषा सिकाउँछन्।'
    }
  },
  {
    id: 3,
    page: 132,
    category: 'Job Types',
    section: 'Types of Work',
    korean: '편의점 아르바이트',
    pronunciation: 'pyeonuijeom areubaiteu',
    english: 'Part-time job at a convenience store',
    nepali: 'सुविधा पसलमा पार्ट-टाइम काम',
    type: 'noun',
    example: {
      korean: '대학생 때 편의점 아르바이트를 했어요.',
      english: 'I worked part-time at a convenience store when I was a college student.',
      nepali: 'विश्वविद्यालयमा पढ्दा सुविधा पसलमा पार्ट-टाइम काम गरेँ।'
    }
  },
  {
    id: 4,
    page: 132,
    category: 'Job Types',
    section: 'Types of Work',
    korean: '시간제',
    pronunciation: 'siganje',
    english: 'Hourly-based system',
    nepali: 'घण्टा आधारित प्रणाली',
    type: 'noun',
    example: {
      korean: '시간제로 할 수 있는 일을 찾고 있어요.',
      english: 'I\'m looking for work that can be done on an hourly basis.',
      nepali: 'घण्टा आधारमा गर्न सकिने काम खोज्दैछु।'
    }
  },
  {
    id: 5,
    page: 132,
    category: 'Job Types',
    section: 'Types of Work',
    korean: '사업하다',
    pronunciation: 'saeopada',
    english: 'To do business',
    nepali: 'व्यापार गर्नु',
    type: 'verb',
    example: {
      korean: '한국에서 사업하고 싶어요.',
      english: 'I want to do business in Korea.',
      nepali: 'कोरियामा व्यापार गर्न चाहन्छु।'
    }
  },
  {
    id: 6,
    page: 132,
    category: 'Job Types',
    section: 'Types of Work',
    korean: '가게를 차리다',
    pronunciation: 'gagereul charida',
    english: 'To open a shop',
    nepali: 'पसल खोल्नु',
    type: 'expression',
    example: {
      korean: '고향 음식을 파는 가게를 차리고 싶어요.',
      english: 'I want to open a shop selling my hometown food.',
      nepali: 'घरको खाना बेच्ने पसल खोल्न चाहन्छु।'
    }
  },
  {
    id: 7,
    page: 132,
    category: 'Job Types',
    section: 'Types of Work',
    korean: '통역',
    pronunciation: 'tongyeok',
    english: 'Interpretation',
    nepali: 'मौखिक अनुवाद',
    type: 'noun',
    example: {
      korean: '통역이나 번역 일을 하고 싶어요.',
      english: 'I want to work in interpretation or translation.',
      nepali: 'मौखिक वा लिखित अनुवादको काम गर्न चाहन्छु।'
    }
  },
  {
    id: 8,
    page: 132,
    category: 'Job Types',
    section: 'Types of Work',
    korean: '번역',
    pronunciation: 'beonyeok',
    english: 'Translation',
    nepali: 'लिखित अनुवाद',
    type: 'noun',
    example: {
      korean: '번역 일은 전문성이 필요해요.',
      english: 'Translation work requires expertise.',
      nepali: 'अनुवाद कामको लागि विशेषज्ञता चाहिन्छ।'
    }
  },
  {
    id: 9,
    page: 132,
    category: 'Job Types',
    section: 'Types of Work',
    korean: '전문성',
    pronunciation: 'jeonmunseong',
    english: 'Professional skill, expertise',
    nepali: 'विशेषज्ञता, व्यावसायिक सीप',
    type: 'noun',
    example: {
      korean: '전문성 있는 일을 하고 싶어요.',
      english: 'I want to do a job that requires expertise.',
      nepali: 'विशेषज्ञता भएको काम गर्न चाहन्छु।'
    }
  }
];

// Section 2: Company qualities
export const companyVocabulary = [
  {
    id: 10,
    page: 132,
    category: 'Company Qualities',
    section: 'Ideal Company',
    korean: '안정적인 회사',
    pronunciation: 'anjeongjeogin hoesa',
    english: 'A stable company',
    nepali: 'स्थिर कम्पनी',
    type: 'expression',
    example: {
      korean: '안정적인 회사에서 일하고 싶어요.',
      english: 'I want to work at a stable company.',
      nepali: 'स्थिर कम्पनीमा काम गर्न चाहन्छु।'
    }
  },
  {
    id: 11,
    page: 132,
    category: 'Company Qualities',
    section: 'Ideal Company',
    korean: '근무 환경',
    pronunciation: 'geunmu hwangyeong',
    english: 'Working environment',
    nepali: 'कार्य वातावरण',
    type: 'noun',
    example: {
      korean: '근무 환경이 좋은 회사에서 일하고 싶어요.',
      english: 'I want to work at a company with a good working environment.',
      nepali: 'राम्रो कार्य वातावरण भएको कम्पनीमा काम गर्न चाहन्छु।'
    }
  },
  {
    id: 12,
    page: 132,
    category: 'Company Qualities',
    section: 'Ideal Company',
    korean: '월급',
    pronunciation: 'wolgeup',
    english: 'Monthly salary',
    nepali: 'मासिक तलब',
    type: 'noun',
    example: {
      korean: '월급을 많이 주는 회사에서 일하고 싶어요.',
      english: 'I want to work at a company that pays a high salary.',
      nepali: 'धेरै तलब दिने कम्पनीमा काम गर्न चाहन्छु।'
    }
  },
  {
    id: 13,
    page: 132,
    category: 'Company Qualities',
    section: 'Ideal Company',
    korean: '출퇴근이 자유롭다',
    pronunciation: 'chultoegeuни jayuropda',
    english: 'Flexible commuting / working hours',
    nepali: 'लचिलो कामको समय',
    type: 'expression',
    example: {
      korean: '출퇴근이 자유로운 회사가 좋아요.',
      english: 'I prefer a company with flexible working hours.',
      nepali: 'लचिलो कामको समय भएको कम्पनी मन पर्छ।'
    }
  },
  {
    id: 14,
    page: 132,
    category: 'Company Qualities',
    section: 'Ideal Company',
    korean: '발전 가능성',
    pronunciation: 'baljeon ganeungseong',
    english: 'Growth/development potential',
    nepali: 'विकास सम्भावना',
    type: 'noun',
    example: {
      korean: '발전 가능성이 있는 회사에서 일하고 싶어요.',
      english: 'I want to work at a company with growth potential.',
      nepali: 'विकास सम्भावना भएको कम्पनीमा काम गर्न चाहन्छु।'
    }
  },
  {
    id: 15,
    page: 132,
    category: 'Company Qualities',
    section: 'Ideal Company',
    korean: '사회에 기여하다',
    pronunciation: 'sahoee giyeohada',
    english: 'To contribute to society',
    nepali: 'समाजमा योगदान गर्नु',
    type: 'expression',
    example: {
      korean: '사회에 기여할 수 있는 회사에서 일하고 싶어요.',
      english: 'I want to work at a company that contributes to society.',
      nepali: 'समाजमा योगदान गर्न सक्ने कम्पनीमा काम गर्न चाहन्छु।'
    }
  },
  {
    id: 16,
    page: 132,
    category: 'Company Qualities',
    section: 'Ideal Company',
    korean: '자기 계발',
    pronunciation: 'jagi gyebal',
    english: 'Self-development, personal development',
    nepali: 'आत्म-विकास',
    type: 'noun',
    example: {
      korean: '자기 계발을 할 수 있는 회사가 좋아요.',
      english: 'A company where personal development is possible is good.',
      nepali: 'आत्म-विकास गर्न सक्ने कम्पनी राम्रो हो।'
    }
  },
  {
    id: 17,
    page: 132,
    category: 'Company Qualities',
    section: 'Ideal Company',
    korean: '보람을 느끼다',
    pronunciation: 'borameul neukkida',
    english: 'To feel fulfillment / sense of reward',
    nepali: 'सार्थकता अनुभव गर्नु',
    type: 'expression',
    example: {
      korean: '일에 대한 보람을 느낄 수 있는 회사에서 일하고 싶어요.',
      english: 'I want to work at a company where I feel a sense of fulfillment.',
      nepali: 'कामबाट सार्थकता अनुभव गर्न सक्ने कम्पनीमा काम गर्न चाहन्छु।'
    }
  }
];

// Section 3: Job application vocabulary
export const applicationVocabulary = [
  {
    id: 18,
    page: 137,
    category: 'Job Application',
    section: 'Application Process',
    korean: '구인 광고',
    pronunciation: 'guin gwanggo',
    english: 'Job advertisement',
    nepali: 'रोजगारी विज्ञापन',
    type: 'noun',
    example: {
      korean: '구인 광고를 보고 지원했어요.',
      english: 'I applied after seeing the job advertisement.',
      nepali: 'रोजगारी विज्ञापन हेरेर आवेदन दिएँ।'
    }
  },
  {
    id: 19,
    page: 137,
    category: 'Job Application',
    section: 'Application Process',
    korean: '이력서',
    pronunciation: 'iryeokseo',
    english: 'Resume',
    nepali: 'बायोडाटा',
    type: 'noun',
    example: {
      korean: '이력서를 미리 써 놓는 것이 좋아요.',
      english: 'It\'s good to have your resume written in advance.',
      nepali: 'बायोडाटा अगाडि नै लेखेर राख्नु राम्रो हो।'
    }
  },
  {
    id: 20,
    page: 137,
    category: 'Job Application',
    section: 'Application Process',
    korean: '지원서',
    pronunciation: 'jiwonseo',
    english: 'Application form',
    nepali: 'आवेदन फारम',
    type: 'noun',
    example: {
      korean: '지원서를 작성해서 제출하세요.',
      english: 'Fill out the application form and submit it.',
      nepali: 'आवेदन फारम भरेर पेस गर्नुहोस्।'
    }
  },
  {
    id: 21,
    page: 137,
    category: 'Job Application',
    section: 'Application Process',
    korean: '자기소개서',
    pronunciation: 'jagisogaeseo',
    english: 'Self-introduction letter',
    nepali: 'आत्म-परिचय पत्र',
    type: 'noun',
    example: {
      korean: '자기소개서를 잘 쓰는 것이 중요해요.',
      english: 'It\'s important to write a good self-introduction letter.',
      nepali: 'आत्म-परिचय पत्र राम्ररी लेख्नु महत्त्वपूर्ण छ।'
    }
  },
  {
    id: 22,
    page: 137,
    category: 'Job Application',
    section: 'Application Process',
    korean: '서류를 제출하다',
    pronunciation: 'seoryureul jejulhada',
    english: 'To submit documents',
    nepali: 'कागजातहरू पेस गर्नु',
    type: 'expression',
    example: {
      korean: '내일까지 서류를 제출해야 해요.',
      english: 'I have to submit the documents by tomorrow.',
      nepali: 'भोलिसम्म कागजातहरू पेस गर्नुपर्छ।'
    }
  },
  {
    id: 23,
    page: 141,
    category: 'Job Application',
    section: 'Application Process',
    korean: '필기시험을 보다',
    pronunciation: 'pilgisiheomel boda',
    english: 'To take a written test',
    nepali: 'लिखित परीक्षा दिनु',
    type: 'expression',
    example: {
      korean: '내일 필기시험을 봐야 해요.',
      english: 'I have to take a written test tomorrow.',
      nepali: 'भोलि लिखित परीक्षा दिनुपर्छ।'
    }
  },
  {
    id: 24,
    page: 141,
    category: 'Job Application',
    section: 'Application Process',
    korean: '면접을 보다',
    pronunciation: 'myeonjeobeul boda',
    english: 'To have an interview',
    nepali: 'अन्तर्वार्ता दिनु',
    type: 'expression',
    example: {
      korean: '다음 주에 면접을 볼 거예요.',
      english: 'I\'m going to have an interview next week.',
      nepali: 'अर्को हप्ता अन्तर्वार्ता दिने छु।'
    }
  },
  {
    id: 25,
    page: 137,
    category: 'Job Application',
    section: 'Documents & Certificates',
    korean: '자격증',
    pronunciation: 'jagyeokjeung',
    english: 'Certificate, license, qualification',
    nepali: 'प्रमाणपत्र, लाइसेन्स',
    type: 'noun',
    example: {
      korean: '컴퓨터 자격증을 미리 따 놓으세요.',
      english: 'Make sure to get a computer certificate in advance.',
      nepali: 'कम्प्युटर प्रमाणपत्र अगाडि नै लिएर राख्नुहोस्।'
    }
  },
  {
    id: 26,
    page: 137,
    category: 'Job Application',
    section: 'Documents & Certificates',
    korean: '증명서',
    pronunciation: 'jeungmyeongseo',
    english: 'Certificate (official document)',
    nepali: 'प्रमाणपत्र (आधिकारिक कागजात)',
    type: 'noun',
    example: {
      korean: '졸업 증명서를 제출해야 해요.',
      english: 'You need to submit a graduation certificate.',
      nepali: 'स्नातक प्रमाणपत्र पेस गर्नुपर्छ।'
    }
  },
  {
    id: 27,
    page: 137,
    category: 'Job Application',
    section: 'Documents & Certificates',
    korean: '사본',
    pronunciation: 'sabon',
    english: 'Copy (of a document)',
    nepali: 'प्रतिलिपि',
    type: 'noun',
    example: {
      korean: '여권 사본을 준비하세요.',
      english: 'Please prepare a copy of your passport.',
      nepali: 'राहदानीको प्रतिलिपि तयार गर्नुहोस्।'
    }
  },
  {
    id: 28,
    page: 137,
    category: 'Job Application',
    section: 'Documents & Certificates',
    korean: '성적 증명서',
    pronunciation: 'seongjeok jeungmyeongseo',
    english: 'Transcript',
    nepali: 'मार्कसिट',
    type: 'noun',
    example: {
      korean: '성적 증명서를 발급받아야 해요.',
      english: 'I need to get a transcript issued.',
      nepali: 'मार्कसिट जारी गराउनुपर्छ।'
    }
  },
  {
    id: 29,
    page: 137,
    category: 'Job Application',
    section: 'Documents & Certificates',
    korean: '졸업 증명서',
    pronunciation: 'joreop jeungmyeongseo',
    english: 'Graduation certificate',
    nepali: 'स्नातक प्रमाणपत्र',
    type: 'noun',
    example: {
      korean: '졸업 증명서가 필요합니다.',
      english: 'A graduation certificate is needed.',
      nepali: 'स्नातक प्रमाणपत्र चाहिन्छ।'
    }
  },
  {
    id: 30,
    page: 137,
    category: 'Job Application',
    section: 'Documents & Certificates',
    korean: '경력 증명서',
    pronunciation: 'gyeongnyeok jeungmyeongseo',
    english: 'Work experience certificate',
    nepali: 'कार्य अनुभव प्रमाणपत्र',
    type: 'noun',
    example: {
      korean: '경력 증명서를 제출해 주세요.',
      english: 'Please submit your work experience certificate.',
      nepali: 'कार्य अनुभव प्रमाणपत्र पेस गर्नुहोस्।'
    }
  },
  {
    id: 31,
    page: 137,
    category: 'Job Application',
    section: 'Documents & Certificates',
    korean: '외국인 등록증',
    pronunciation: 'oegugin deungrokjeung',
    english: 'Alien registration card',
    nepali: 'विदेशी दर्ता कार्ड',
    type: 'noun',
    example: {
      korean: '외국인 등록증 사본을 준비하세요.',
      english: 'Please prepare a copy of your alien registration card.',
      nepali: 'विदेशी दर्ता कार्डको प्रतिलिपि तयार गर्नुहोस्।'
    }
  },
  {
    id: 32,
    page: 137,
    category: 'Job Application',
    section: 'Documents & Certificates',
    korean: '운전면허증',
    pronunciation: 'unjeonmyeonheojeung',
    english: 'Driver\'s license',
    nepali: 'सवारी चालक अनुमतिपत्र',
    type: 'noun',
    example: {
      korean: '운전면허증 사본을 제출하세요.',
      english: 'Submit a copy of your driver\'s license.',
      nepali: 'सवारी चालक अनुमतिपत्रको प्रतिलिपि पेस गर्नुहोस्।'
    }
  }
];

// Section 4: Recruitment terms
export const recruitmentVocabulary = [
  {
    id: 33,
    page: 137,
    category: 'Recruitment',
    section: 'Job Postings',
    korean: '모집 분야',
    pronunciation: 'mojip bunya',
    english: 'Recruitment field',
    nepali: 'भर्ती क्षेत्र',
    type: 'noun',
    example: {
      korean: '모집 분야는 판매직이에요.',
      english: 'The recruitment field is sales positions.',
      nepali: 'भर्ती क्षेत्र बिक्री पद हो।'
    }
  },
  {
    id: 34,
    page: 137,
    category: 'Recruitment',
    section: 'Job Postings',
    korean: '판매직',
    pronunciation: 'panmaejik',
    english: 'Sales position',
    nepali: 'बिक्री पद',
    type: 'noun',
    example: {
      korean: '판매직에 지원하려고 해요.',
      english: 'I\'m going to apply for a sales position.',
      nepali: 'बिक्री पदमा आवेदन दिने छु।'
    }
  },
  {
    id: 35,
    page: 137,
    category: 'Recruitment',
    section: 'Job Postings',
    korean: '영업직',
    pronunciation: 'yeongeopjik',
    english: 'Business/sales position',
    nepali: 'व्यापार पद',
    type: 'noun',
    example: {
      korean: '영업직은 경력이 필요해요.',
      english: 'The business position requires experience.',
      nepali: 'व्यापार पदमा अनुभव चाहिन्छ।'
    }
  },
  {
    id: 36,
    page: 137,
    category: 'Recruitment',
    section: 'Job Postings',
    korean: '생산직',
    pronunciation: 'saengsanjik',
    english: 'Production position',
    nepali: 'उत्पादन पद',
    type: 'noun',
    example: {
      korean: '생산직 모집 인원은 약간 명이에요.',
      english: 'A few people are being recruited for production positions.',
      nepali: 'उत्पादन पदमा केही जना भर्ती गर्दैछन्।'
    }
  },
  {
    id: 37,
    page: 137,
    category: 'Recruitment',
    section: 'Job Postings',
    korean: '기술직',
    pronunciation: 'gisuljik',
    english: 'Technical position',
    nepali: 'प्राविधिक पद',
    type: 'noun',
    example: {
      korean: '기술직에서 일하고 있어요.',
      english: 'I\'m working in a technical position.',
      nepali: 'प्राविधिक पदमा काम गर्दैछु।'
    }
  },
  {
    id: 38,
    page: 137,
    category: 'Recruitment',
    section: 'Job Postings',
    korean: '연구직',
    pronunciation: 'yeongujik',
    english: 'Research position',
    nepali: 'अनुसन्धान पद',
    type: 'noun',
    example: {
      korean: '연구직은 대졸 이상이 지원할 수 있어요.',
      english: 'University graduates or above can apply for research positions.',
      nepali: 'स्नातक वा माथिका मान्छेले अनुसन्धान पदमा आवेदन दिन सक्छन्।'
    }
  },
  {
    id: 39,
    page: 137,
    category: 'Recruitment',
    section: 'Job Postings',
    korean: '모집 인원',
    pronunciation: 'mojip inwon',
    english: 'Number of recruits',
    nepali: 'भर्ती सङ्ख्या',
    type: 'noun',
    example: {
      korean: '모집 인원은 2명이에요.',
      english: 'The number of recruits is 2.',
      nepali: 'भर्ती सङ्ख्या २ जना हो।'
    }
  },
  {
    id: 40,
    page: 137,
    category: 'Recruitment',
    section: 'Job Postings',
    korean: '지원 자격',
    pronunciation: 'jiwon jagyeok',
    english: 'Application qualifications',
    nepali: 'आवेदन योग्यता',
    type: 'noun',
    example: {
      korean: '지원 자격은 대졸이에요.',
      english: 'The qualification required is a university degree.',
      nepali: 'आवश्यक योग्यता स्नातक हो।'
    }
  },
  {
    id: 41,
    page: 137,
    category: 'Recruitment',
    section: 'Job Postings',
    korean: '고졸',
    pronunciation: 'gojol',
    english: 'High school graduate',
    nepali: 'उच्च माध्यमिक स्नातक',
    type: 'noun',
    example: {
      korean: '지원 자격은 고졸 이상이에요.',
      english: 'The qualification is high school graduate or above.',
      nepali: 'योग्यता उच्च माध्यमिक स्नातक वा माथि हो।'
    }
  },
  {
    id: 42,
    page: 137,
    category: 'Recruitment',
    section: 'Job Postings',
    korean: '대졸',
    pronunciation: 'daejol',
    english: 'University graduate',
    nepali: 'विश्वविद्यालय स्नातक',
    type: 'noun',
    example: {
      korean: '대졸 영어 전공자를 찾고 있어요.',
      english: 'We\'re looking for university graduates with an English major.',
      nepali: 'अंग्रेजी विषयमा स्नातक गरेको व्यक्ति खोज्दैछौं।'
    }
  }
];

// Section 5: Salary & tax vocabulary
export const salaryVocabulary = [
  {
    id: 43,
    page: 140,
    category: 'Salary & Taxes',
    section: 'Salary and Taxes',
    korean: '급여',
    pronunciation: 'geubyeo',
    english: 'Salary, pay',
    nepali: 'तलब',
    type: 'noun',
    example: {
      korean: '한국 직장인은 보통 한 달에 한 번 급여를 받아요.',
      english: 'Korean office workers usually receive salary once a month.',
      nepali: 'कोरियाली कर्मचारीले सामान्यतया महिनामा एक पटक तलब पाउँछन्।'
    }
  },
  {
    id: 44,
    page: 140,
    category: 'Salary & Taxes',
    section: 'Salary and Taxes',
    korean: '급여일',
    pronunciation: 'geubyeoil',
    english: 'Payday',
    nepali: 'तलब दिने दिन',
    type: 'noun',
    example: {
      korean: '급여일은 매달 25일이에요.',
      english: 'Payday is the 25th of every month.',
      nepali: 'तलब दिने दिन हरेक महिनाको २५ गते हो।'
    }
  },
  {
    id: 45,
    page: 140,
    category: 'Salary & Taxes',
    section: 'Salary and Taxes',
    korean: '기본급',
    pronunciation: 'gibongeup',
    english: 'Base salary',
    nepali: 'आधारभूत तलब',
    type: 'noun',
    example: {
      korean: '급여는 기본급과 수당으로 나뉘어요.',
      english: 'Salary is divided into base pay and allowances.',
      nepali: 'तलब आधारभूत तलब र भत्तामा विभाजित हुन्छ।'
    }
  },
  {
    id: 46,
    page: 140,
    category: 'Salary & Taxes',
    section: 'Salary and Taxes',
    korean: '수당',
    pronunciation: 'sudang',
    english: 'Allowance',
    nepali: 'भत्ता',
    type: 'noun',
    example: {
      korean: '초과 근무 수당을 받았어요.',
      english: 'I received overtime pay.',
      nepali: 'ओभरटाइम भत्ता पाएँ।'
    }
  },
  {
    id: 47,
    page: 140,
    category: 'Salary & Taxes',
    section: 'Salary and Taxes',
    korean: '초과 근무 수당',
    pronunciation: 'chogwa geunmu sudang',
    english: 'Overtime pay',
    nepali: 'ओभरटाइम भत्ता',
    type: 'noun',
    example: {
      korean: '초과 근무를 하면 초과 근무 수당을 받아요.',
      english: 'If you work overtime, you receive overtime pay.',
      nepali: 'ओभरटाइम काम गर्दा ओभरटाइम भत्ता पाइन्छ।'
    }
  },
  {
    id: 48,
    page: 140,
    category: 'Salary & Taxes',
    section: 'Salary and Taxes',
    korean: '공제하다',
    pronunciation: 'gongjehada',
    english: 'To deduct',
    nepali: 'कटौती गर्नु',
    type: 'verb',
    example: {
      korean: '세금과 보험료를 급여에서 공제해요.',
      english: 'Taxes and insurance fees are deducted from the salary.',
      nepali: 'कर र बीमा शुल्क तलबबाट कटौती गरिन्छ।'
    }
  },
  {
    id: 49,
    page: 140,
    category: 'Salary & Taxes',
    section: 'Salary and Taxes',
    korean: '입금되다',
    pronunciation: 'ipgeumdoeda',
    english: 'To be deposited',
    nepali: 'जम्मा हुनु',
    type: 'verb',
    example: {
      korean: '급여가 계좌에 입금되었어요.',
      english: 'The salary was deposited into the account.',
      nepali: 'तलब खातामा जम्मा भयो।'
    }
  },
  {
    id: 50,
    page: 140,
    category: 'Salary & Taxes',
    section: 'Salary and Taxes',
    korean: '비율',
    pronunciation: 'biyul',
    english: 'Rate, ratio, percentage',
    nepali: 'दर, अनुपात, प्रतिशत',
    type: 'noun',
    example: {
      korean: '급여가 많으면 세금 비율도 높아져요.',
      english: 'The higher the salary, the higher the tax rate.',
      nepali: 'तलब बढी भए कर दर पनि बढ्छ।'
    }
  }
];

// Additional vocabulary
export const additionalVocabulary = [
  {
    id: 51,
    page: 133,
    category: 'Additional',
    section: 'Extra Vocabulary',
    korean: '취직하다',
    pronunciation: 'chwijikada',
    english: 'To get a job, to be employed',
    nepali: 'जागिर पाउनु',
    type: 'verb',
    example: {
      korean: '무역 회사에 취직하고 싶어요.',
      english: 'I want to get a job at a trading company.',
      nepali: 'व्यापार कम्पनीमा जागिर पाउन चाहन्छु।'
    }
  },
  {
    id: 52,
    page: 133,
    category: 'Additional',
    section: 'Extra Vocabulary',
    korean: '일회용품',
    pronunciation: 'ilhoeyongpum',
    english: 'Disposable products',
    nepali: 'डिस्पोजेबल सामान',
    type: 'noun',
    example: {
      korean: '일회용품의 사용을 줄여야 해요.',
      english: 'We should reduce the use of disposable products.',
      nepali: 'डिस्पोजेबल सामानको प्रयोग घटाउनुपर्छ।'
    }
  },
  {
    id: 53,
    page: 135,
    category: 'Additional',
    section: 'Extra Vocabulary',
    korean: '정성껏',
    pronunciation: 'jeongseongkkeot',
    english: 'With care, wholeheartedly',
    nepali: 'होसियारीपूर्वक, मन लगाएर',
    type: 'adverb',
    example: {
      korean: '이력서를 정성껏 쓰세요.',
      english: 'Write your resume with care.',
      nepali: 'बायोडाटा मन लगाएर लेख्नुहोस्।'
    }
  },
  {
    id: 54,
    page: 135,
    category: 'Additional',
    section: 'Extra Vocabulary',
    korean: '따다',
    pronunciation: 'ttada',
    english: 'To obtain, to earn (a qualification)',
    nepali: 'प्राप्त गर्नु (योग्यता)',
    type: 'verb',
    example: {
      korean: '영어 교사 자격증을 땄어요.',
      english: 'I obtained an English teaching certificate.',
      nepali: 'अंग्रेजी शिक्षक प्रमाणपत्र प्राप्त गरेँ।'
    }
  },
  {
    id: 55,
    page: 136,
    category: 'Additional',
    section: 'Extra Vocabulary',
    korean: '평소',
    pronunciation: 'pyeongso',
    english: 'Usually, ordinarily',
    nepali: 'सामान्यतया',
    type: 'adverb',
    example: {
      korean: '평소에 어떤 선생님이 되고 싶으세요?',
      english: 'What kind of teacher have you usually wanted to be?',
      nepali: 'सामान्यतया कस्तो शिक्षक बन्न चाहनुहुन्छ?'
    }
  },
  {
    id: 56,
    page: 140,
    category: 'Additional',
    section: 'Extra Vocabulary',
    korean: '직장인',
    pronunciation: 'jikjangin',
    english: 'Office worker, employee',
    nepali: 'कार्यालय कर्मचारी',
    type: 'noun',
    example: {
      korean: '직장인들은 급여일을 기다려요.',
      english: 'Office workers look forward to payday.',
      nepali: 'कार्यालय कर्मचारीहरू तलब दिने दिन कुर्छन्।'
    }
  },
  {
    id: 57,
    page: 137,
    category: 'Recruitment',
    section: 'Job Postings',
    korean: '방문 접수',
    pronunciation: 'bangmun jeopsu',
    english: 'In-person submission',
    nepali: 'व्यक्तिगत रूपमा पेस गर्नु',
    type: 'noun',
    example: {
      korean: '방문 접수도 가능해요.',
      english: 'In-person submission is also possible.',
      nepali: 'व्यक्तिगत रूपमा पेस गर्न पनि सकिन्छ।'
    }
  },
  {
    id: 58,
    page: 137,
    category: 'Recruitment',
    section: 'Job Postings',
    korean: '온라인 접수',
    pronunciation: 'onrain jeopsu',
    english: 'Online submission',
    nepali: 'अनलाइन पेस गर्नु',
    type: 'noun',
    example: {
      korean: '지원 방법은 온라인 접수예요.',
      english: 'The application method is online submission.',
      nepali: 'आवेदन विधि अनलाइन पेस गर्नु हो।'
    }
  }
];

// Combine all vocabulary
export const vocabulary = [
  ...jobTypeVocabulary,
  ...companyVocabulary,
  ...applicationVocabulary,
  ...recruitmentVocabulary,
  ...salaryVocabulary,
  ...additionalVocabulary
];

// ============================================
// PAGE 133-134 - 문법 (Grammar)
// ============================================

export const grammar1 = {
  id: 1,
  page: 133,
  pattern: "V + 기 위해서",
  meaning: {
    english: "In order to (do something)",
    nepali: "(केहि गर्न) को लागि"
  },
  description: {
    english: "This pattern is used to express a purpose or goal. It means 'in order to do (verb).' The action in the main clause is done for the purpose stated before 기 위해서. 위해 can also be used without 서.",
    nepali: "यो ढाँचा उद्देश्य वा लक्ष्य व्यक्त गर्न प्रयोग गरिन्छ। यसको अर्थ '(क्रिया) गर्नको लागि' हो। मुख्य वाक्यको कार्य 기 위해서 अघि बताइएको उद्देश्यका लागि गरिन्छ।"
  },
  whenToUse: {
    situations: [
      {
        situation: {
          english: "Talking about job preparation goals",
          nepali: "रोजगारी तयारी लक्ष्यको बारेमा कुरा गर्दा"
        },
        example: {
          korean: '한국 회사에 취직하기 위해서 컴퓨터를 배우고 있어요.',
          english: 'I\'m learning computer skills in order to get a job at a Korean company.',
          nepali: 'कोरियाली कम्पनीमा जागिर पाउनको लागि कम्प्युटर सिक्दैछु।'
        }
      },
      {
        situation: {
          english: "Expressing a purpose for studying",
          nepali: "अध्ययनको उद्देश्य व्यक्त गर्दा"
        },
        example: {
          korean: '한국 국적을 취득하기 위해 1년 전부터 한국어 공부를 하고 있다.',
          english: 'I\'ve been studying Korean since a year ago in order to acquire Korean nationality.',
          nepali: 'कोरियाली नागरिकता प्राप्त गर्नको लागि एक वर्ष अघिदेखि कोरियन भाषा अध्ययन गर्दैछु।'
        }
      },
      {
        situation: {
          english: "Talking about environmental efforts",
          nepali: "वातावरणीय प्रयासको बारेमा कुरा गर्दा"
        },
        example: {
          korean: '쓰레기를 줄이기 위해 어떤 노력을 해야 합니까?',
          english: 'What efforts should we make in order to reduce waste?',
          nepali: 'फोहोर घटाउनको लागि के प्रयास गर्नुपर्छ?'
        }
      },
      {
        situation: {
          english: "Talking about parenting challenges",
          nepali: "बाल पालनका चुनौतीहरूको बारेमा कुरा गर्दा"
        },
        example: {
          korean: '일하는 엄마들은 아이 맡길 곳을 찾기 위해 노력하고 있다.',
          english: 'Working mothers are trying to find a place to entrust their children.',
          nepali: 'काम गर्ने आमाहरू बच्चा हेर्ने ठाउँ खोज्न प्रयास गर्दैछन्।'
        }
      }
    ]
  },
  whereToUse: {
    english: "Used in both spoken and written Korean. Very common in formal contexts like presentations, interviews, and essays.",
    nepali: "बोलेको र लेखेको दुवै कोरियनमा प्रयोग गरिन्छ। प्रस्तुतीकरण, अन्तर्वार्ता, र निबन्ध जस्ता औपचारिक सन्दर्भमा धेरै सामान्य।"
  },
  formality: {
    english: "Neutral to formal. Appropriate in any context.",
    nepali: "तटस्थदेखि औपचारिक। कुनै पनि सन्दर्भमा उपयुक्त।"
  },
  formation: {
    rule: "Verb stem + 기 위해서 / 기 위해",
    notes: {
      english: "Simply add 기 위해서 (or 기 위해) to the verb stem. Both 위해서 and 위해 are used interchangeably. For nouns, use 을/를 위해서.",
      nepali: "Verb stem मा 기 위해서 (वा 기 위해) जोड्नुहोस्। 위해서 र 위해 दुवै एकअर्काको सट्टामा प्रयोग गरिन्छ। Noun को लागि 을/를 위해서 प्रयोग गर्नुहोस्।"
    },
    conjugationTable: [
      {
        verb: '취직하다',
        stem: '취직하',
        result: '취직하기 위해서',
        english: 'In order to get a job',
        nepali: 'जागिर पाउनको लागि'
      },
      {
        verb: '줄이다',
        stem: '줄이',
        result: '줄이기 위해서',
        english: 'In order to reduce',
        nepali: 'घटाउनको लागि'
      },
      {
        verb: '찾다',
        stem: '찾',
        result: '찾기 위해서',
        english: 'In order to find',
        nepali: 'खोज्नको लागि'
      },
      {
        verb: '취득하다',
        stem: '취득하',
        result: '취득하기 위해서',
        english: 'In order to acquire',
        nepali: 'प्राप्त गर्नको लागि'
      }
    ]
  },
  comparisonWithSimilar: {
    english: "Compare with ~(으)려고: Both express purpose, but 기 위해서 is slightly more formal and emphasizes the goal more strongly. ~(으)려고 is more casual and focuses on the speaker's intention.",
    nepali: "~(으)려고 सँग तुलना गर्नुहोस्: दुवैले उद्देश्य व्यक्त गर्छन्, तर 기 위해서 अलि बढी औपचारिक छ र लक्ष्यलाई बढी जोड गर्छ। ~(으)려고 अधिक अनौपचारिक छ र वक्ताको इरादामा केन्द्रित हुन्छ।"
  },
  examples: [
    {
      context: { english: 'Talking about job preparation', nepali: 'रोजगारी तयारीको बारेमा कुरा गर्दा' },
      korean: '한국 회사에 취직하기 위해서 뭘 준비하고 있어요?',
      english: 'What are you preparing in order to get a job at a Korean company?',
      nepali: 'कोरियाली कम्पनीमा जागिर पाउनको लागि के तयारी गर्दैछौ?'
    },
    {
      context: { english: 'Environmental discussion', nepali: 'वातावरणीय छलफल' },
      korean: '쓰레기를 줄이기 위해 어떤 노력을 해야 합니까?',
      english: 'What efforts should we make in order to reduce waste?',
      nepali: 'फोहोर घटाउनको लागि के प्रयास गर्नुपर्छ?'
    },
    {
      context: { english: 'Talking about studying Korean', nepali: 'कोरियन अध्ययनको बारेमा कुरा गर्दा' },
      korean: '한국 국적을 취득하기 위해 1년 전부터 한국어 공부를 하고 있다.',
      english: 'I\'ve been studying Korean for a year in order to acquire Korean nationality.',
      nepali: 'कोरियाली नागरिकता प्राप्त गर्नको लागि एक वर्षदेखि कोरियन अध्ययन गर्दैछु।'
    },
    {
      context: { english: 'Talking about working mothers', nepali: 'काम गर्ने आमाहरूको बारेमा कुरा गर्दा' },
      korean: '일하는 엄마들은 아이 맡길 곳을 찾기 위해 노력하고 있다.',
      english: 'Working mothers are trying to find a place to entrust their children.',
      nepali: 'काम गर्ने आमाहरू बच्चा हेर्ने ठाउँ खोज्न प्रयास गर्दैछन्।'
    },
    {
      context: { english: 'Job interview', nepali: 'अन्तर्वार्ता' },
      korean: '우리 학교 취업을 위해 특별히 준비한 것이 있으십니까?',
      english: 'Have you prepared anything specifically for getting a job at our school?',
      nepali: 'हाम्रो विद्यालयमा जागिरको लागि विशेष तयारी गर्नुभएको छ?'
    }
  ]
};

export const grammar2 = {
  id: 2,
  page: 134,
  pattern: "V + 아/어 놓다",
  meaning: {
    english: "To do something in advance and keep it that way (maintaining the result)",
    nepali: "अगाडि नै गरेर राख्नु (नतिजा कायम राख्नु)"
  },
  description: {
    english: "This pattern expresses that an action was completed beforehand, and the result of that action is maintained or preserved. It emphasizes preparation and readiness. Often used with 미리 (in advance) to stress the preparatory nature of the action.",
    nepali: "यो ढाँचाले कुनै कार्य पहिले नै सम्पन्न भएको र त्यस कार्यको नतिजा कायम राखिएको व्यक्त गर्छ। यसले तयारी र तत्परतालाई जोड दिन्छ। प्रायः 미리 (अगाडि नै) सँग प्रयोग गरिन्छ।"
  },
  whenToUse: {
    situations: [
      {
        situation: {
          english: "Talking about preparing for travel",
          nepali: "यात्राको तयारीको बारेमा कुरा गर्दा"
        },
        example: {
          korean: '미리 비행기표를 예약해 놓았어요.',
          english: 'I booked the plane tickets in advance.',
          nepali: 'अगाडि नै हवाइ टिकट बुक गरेर राखेँ।'
        }
      },
      {
        situation: {
          english: "Advising someone about job preparation",
          nepali: "रोजगारी तयारीको बारेमा सल्लाह दिँदा"
        },
        example: {
          korean: '이력서를 미리 써 놓는 것이 좋아요.',
          english: 'It would be good to write your resume ahead of time.',
          nepali: 'बायोडाटा अगाडि नै लेखेर राख्नु राम्रो हुन्छ।'
        }
      },
      {
        situation: {
          english: "Talking about doing homework early",
          nepali: 'गृहकार्य चाँडो गरेको बारेमा कुरा गर्दा'
        },
        example: {
          korean: '숙제를 미리 해 놓아서 마음이 편하다.',
          english: 'I did my homework in advance, so I feel at ease.',
          nepali: 'गृहकार्य अगाडि नै गरेर राखेकोले मन शान्त छ।'
        }
      },
      {
        situation: {
          english: "Preparing food in advance",
          nepali: "खाना अगाडि नै तयार गर्दा"
        },
        example: {
          korean: '아침 일찍 샌드위치를 만들어 놓았다.',
          english: 'I made sandwiches early in the morning and kept them ready.',
          nepali: 'बिहान सबेरै स्यान्डविच बनाएर राखेँ।'
        }
      }
    ]
  },
  whereToUse: {
    english: "Used in both spoken and written Korean. Very common in everyday conversation when talking about preparation and advance planning.",
    nepali: "बोलेको र लेखेको दुवै कोरियनमा प्रयोग गरिन्छ। तयारी र अगाउ योजनाको बारेमा कुरा गर्दा दैनिक कुराकानीमा धेरै सामान्य।"
  },
  formality: {
    english: "Neutral. Can be used in both formal and informal settings.",
    nepali: "तटस्थ। औपचारिक र अनौपचारिक दुवै सेटिङमा प्रयोग गर्न सकिन्छ।"
  },
  formation: {
    rule: "Verb stem + 아/어 놓다",
    notes: {
      english: "Use 아 놓다 after stems ending in ㅏ or ㅗ. Use 어 놓다 for other vowels. 하다 becomes 해 놓다. Compare with V + 아/어 두다 which is very similar but 놓다 emphasizes more the completed state.",
      nepali: "ㅏ वा ㅗ मा अन्त्य हुने stem पछि 아 놓다 प्रयोग गर्नुहोस्। अन्य स्वरहरूको लागि 어 놓다। 하다 => 해 놓다। V + 아/어 두다 सँग तुलना गर्नुहोस् जुन धेरै मिल्दो छ तर 놓다 ले सम्पन्न अवस्थालाई बढी जोड दिन्छ।"
    },
    conjugationTable: [
      {
        verb: '예약하다',
        stem: '예약하',
        result: '예약해 놓다',
        english: 'To book in advance (and keep the booking)',
        nepali: 'अगाडि नै बुक गरेर राख्नु'
      },
      {
        verb: '쓰다',
        stem: '쓰',
        result: '써 놓다',
        english: 'To write and keep it ready',
        nepali: 'लेखेर राख्नु'
      },
      {
        verb: '만들다',
        stem: '만들',
        result: '만들어 놓다',
        english: 'To make and keep it ready',
        nepali: 'बनाएर राख्नु'
      },
      {
        verb: '따다',
        stem: '따',
        result: '따 놓다',
        english: 'To obtain in advance',
        nepali: 'अगाडि नै प्राप्त गरेर राख्नु'
      },
      {
        verb: '하다',
        stem: '하',
        result: '해 놓다',
        english: 'To do and keep it done',
        nepali: 'गरेर राख्नु'
      }
    ]
  },
  comparisonWithSimilar: {
    english: "Compare with V + 아/어 두다: Both express doing something in advance and maintaining the result. 놓다 slightly emphasizes the completed result more, while 두다 emphasizes the ongoing maintained state. In many cases they are interchangeable.",
    nepali: "V + 아/어 두다 सँग तुलना गर्नुहोस्: दुवैले अगाडि नै गरेर नतिजा कायम राखेको व्यक्त गर्छन्। 놓다 ले सम्पन्न नतिजालाई बढी जोड दिन्छ, जबकि 두다 ले चलिरहेको कायम अवस्थालाई जोड दिन्छ। धेरै अवस्थामा एकअर्काको सट्टामा प्रयोग गर्न सकिन्छ।"
  },
  examples: [
    {
      context: { english: 'Preparing for a trip', nepali: 'यात्राको तयारी गर्दा' },
      korean: '걱정 말아요. 미리 예약해 놓았어요.',
      english: 'Don\'t worry. I booked them in advance.',
      nepali: 'चिन्ता नगर्नुहोस्। अगाडि नै बुक गरेर राखेँ।'
    },
    {
      context: { english: 'Job application advice', nepali: 'रोजगारी आवेदन सल्लाह' },
      korean: '이력서를 미리 써 놓는 것이 좋을 거예요.',
      english: 'It would be good to have your resume written ahead of time.',
      nepali: 'बायोडाटा अगाडि नै लेखेर राख्नु राम्रो हुनेछ।'
    },
    {
      context: { english: 'Preparing for hiking', nepali: 'हाइकिङको तयारी गर्दा' },
      korean: '아침 일찍 샌드위치를 만들어 놓았다.',
      english: 'I made sandwiches early in the morning and kept them ready.',
      nepali: 'बिहान सबेरै स्यान्डविच बनाएर राखेँ।'
    },
    {
      context: { english: 'Feeling relieved', nepali: 'राहत महसुस गर्दा' },
      korean: '숙제를 미리 해 놓아서 마음이 편하다.',
      english: 'I did my homework in advance, so I feel at ease.',
      nepali: 'गृहकार्य अगाडि नै गरेर राखेकोले मन शान्त छ।'
    },
    {
      context: { english: 'Getting a certificate', nepali: 'प्रमाणपत्र प्राप्त गर्दा' },
      korean: '컴퓨터 자격증도 미리 따 놓으세요.',
      english: 'Make sure to get a computer certificate in advance too.',
      nepali: 'कम्प्युटर प्रमाणपत्र पनि अगाडि नै लिएर राख्नुहोस्।'
    }
  ]
};

// ============================================
// PAGE 135 - 말하기 (Speaking)
// ============================================

export const speaking = {
  page: 135,
  title: {
    korean: '말하기 - 취업 준비에 대해 이야기하기',
    english: 'Speaking - Talking about Job Preparation',
    nepali: 'बोल्ने - रोजगारी तयारीको बारेमा कुरा गर्ने'
  },
  mainDialogue: {
    id: 1,
    title: {
      korean: '취업 준비 대화',
      english: 'Job Preparation Conversation',
      nepali: 'रोजगारी तयारी कुराकानी'
    },
    situation: {
      korean: '라흐만과 아나이스가 취업 준비에 대해 이야기합니다.',
      english: 'Rahman and Anais talk about job preparation.',
      nepali: 'रहमान र अनाइस रोजगारी तयारीको बारेमा कुरा गर्छन्।'
    },
    conversation: [
      {
        speaker: '라흐만',
        korean: '아나이스 씨는 무슨 일을 하고 싶어요?',
        english: 'Anais, what kind of job do you want to do?',
        nepali: 'अनाइस, कस्तो काम गर्न चाहनुहुन्छ?'
      },
      {
        speaker: '아나이스',
        korean: '네, 저는 무역 회사에 취직하고 싶어요.',
        english: 'I want to get a job at a trading company.',
        nepali: 'म व्यापार कम्पनीमा जागिर पाउन चाहन्छु।'
      },
      {
        speaker: '라흐만',
        korean: '아, 그러세요? 아나이스 씨는 한국말을 어느 정도 할 수 있으니까 문제없을 거예요.',
        english: 'Oh, really? Since you can speak Korean to a certain extent, it shouldn\'t be a problem.',
        nepali: 'अ, हो? अनाइसले कोरियन भाषा केही हदसम्म बोल्न सक्नुहुन्छ, त्यसैले समस्या हुँदैन।'
      },
      {
        speaker: '아나이스',
        korean: '그런데 한국에서 일하기 위해서 무엇이 필요해요?',
        english: 'By the way, what do I need in order to work in Korea?',
        nepali: 'तर कोरियामा काम गर्नको लागि के चाहिन्छ?'
      },
      {
        speaker: '라흐만',
        korean: '무역 회사에 취직하려면 컴퓨터를 할 줄 알아야 해요. 그러니까 이력서를 정성껏 쓰고 컴퓨터 자격증도 미리 따 놓으세요.',
        english: 'To get a job at a trading company, you need to know how to use a computer. So, write your resume carefully and make sure to get a computer certificate in advance.',
        nepali: 'व्यापार कम्पनीमा जागिर पाउनको लागि कम्प्युटर चलाउन जान्नुपर्छ। त्यसैले बायोडाटा मन लगाएर लेख्नुहोस् र कम्प्युटर प्रमाणपत्र पनि अगाडि नै लिएर राख्नुहोस्।'
      },
      {
        speaker: '아나이스',
        korean: '네, 그럴게요.',
        english: 'Okay, I will.',
        nepali: 'हुन्छ, त्यसो गर्छु।'
      }
    ]
  }
};

// ============================================
// PAGE 136 - 듣기 (Listening)
// ============================================

export const interviewDialogue = {
  id: 2,
  title: {
    korean: '면접 대화',
    english: 'Job Interview',
    nepali: 'अन्तर्वार्ता कुराकानी'
  },
  situation: {
    korean: '애니가 학교 영어 교사 면접을 봅니다.',
    english: 'Annie has a job interview for a school English teacher position.',
    nepali: 'एनीले विद्यालयको अंग्रेजी शिक्षक पदको अन्तर्वार्ता दिन्छिन्।'
  },
  conversation: [
    {
      speaker: '면접관(남)',
      korean: '어떻게 우리 학교에 지원하게 되셨습니까?',
      english: 'What made you apply to our school?',
      nepali: 'हाम्रो विद्यालयमा आवेदन दिनुको कारण के हो?'
    },
    {
      speaker: '애니(여)',
      korean: '저는 한국에 오기 전에도 고향에서 초등학교 선생님으로 5년 동안 일했습니다. 그래서 한국에서도 아이들을 가르치고 싶었습니다.',
      english: 'I worked as an elementary school teacher in my hometown for five years before coming to Korea. So I wanted to teach children here in Korea as well.',
      nepali: 'कोरिया आउनु अघि पनि म आफ्नो गाउँमा प्राथमिक विद्यालय शिक्षिकाको रूपमा ५ वर्ष काम गरेकी थिएँ। त्यसैले कोरियामा पनि बच्चाहरूलाई पढाउन चाहन्थिएँ।'
    },
    {
      speaker: '면접관(남)',
      korean: '아, 그러십니까? 평소에 어떤 선생님이 되고 싶다고 생각하셨습니까?',
      english: 'Oh, I see. What kind of teacher have you always wanted to be?',
      nepali: 'अ, हो? सामान्यतया कस्तो शिक्षिका बन्न चाहनुहुन्थ्यो?'
    },
    {
      speaker: '애니(여)',
      korean: '저는 친구 같은 선생님이 되고 싶습니다. 학생들이 저를 친구처럼 생각하면 수업도 더 재미있게 할 수 있고 질문도 편하게 할 수 있어서 좋다고 생각합니다.',
      english: 'I want to be a teacher like a friend. I think if students consider me like a friend, the class can be more enjoyable and they\'ll feel more comfortable asking questions.',
      nepali: 'म साथी जस्तो शिक्षिका बन्न चाहन्छु। विद्यार्थीहरूले मलाई साथी जस्तो मान्छन् भने कक्षा अझ रमाइलो हुन्छ र प्रश्नहरू सोध्न पनि सजिलो हुन्छ।'
    },
    {
      speaker: '면접관(남)',
      korean: '우리 학교 취업을 위해 특별히 준비한 것이 있으십니까?',
      english: 'Have you prepared anything specifically for getting a job at our school?',
      nepali: 'हाम्रो विद्यालयमा जागिरको लागि विशेष तयारी गर्नुभएको छ?'
    },
    {
      speaker: '애니(여)',
      korean: '저는 2년 전에 캐나다에서 영어 교사 자격증을 땄습니다. 최근에는 게임을 이용한 영어 지도에 관심이 있어서 그것에 관한 책을 많이 봤습니다.',
      english: 'I obtained an English teaching certificate in Canada two years ago. Lately, I\'ve been interested in teaching English using games, so I\'ve read many books about that.',
      nepali: '२ वर्ष अघि क्यानडामा अंग्रेजी शिक्षक प्रमाणपत्र प्राप्त गरेँ। हालैमा खेल प्रयोग गरेर अंग्रेजी सिकाउनमा रुचि छ, त्यसैले त्यसबारे धेरै पुस्तकहरू पढेँ।'
    },
    {
      speaker: '면접관(남)',
      korean: '네, 잘 알겠습니다. 결과는 1주일 후에 홈페이지에서 확인하시면 됩니다.',
      english: 'Alright, I understand. You can check the results on our website in a week.',
      nepali: 'हुन्छ, बुझेँ। नतिजा एक हप्तापछि वेबसाइटमा हेर्न सक्नुहुन्छ।'
    },
    {
      speaker: '애니(여)',
      korean: '감사합니다.',
      english: 'Thank you.',
      nepali: 'धन्यवाद।'
    }
  ]
};

// ============================================
// PAGE 137-138 - 읽기 (Reading)
// ============================================

export const jobPostingReading = {
  id: 1,
  title: {
    korean: '구인 광고 읽기',
    english: 'Reading Job Advertisements',
    nepali: 'रोजगारी विज्ञापन पढ्ने'
  },
  content: {
    korean: '구인 광고에는 모집 분야, 모집 인원, 지원 자격, 제출 서류, 문의 방법, 지원 방법 등이 있습니다. 모집 분야에는 판매직, 영업직, 생산직, 기술직, 연구직 등이 있습니다. 지원 자격에는 고졸, 대졸, 경력 2년 이상 등이 있습니다. 제출 서류에는 이력서, 자격증 사본, 운전면허증 사본 등이 필요합니다. 지원 방법은 방문 접수나 온라인 접수가 있습니다.',
    english: 'Job advertisements typically include recruitment fields, number of recruits, application qualifications, required documents, contact information, and application methods. Recruitment fields include sales, business, production, technical, and research positions. Qualifications may include high school graduate, university graduate, or over 2 years of experience. Required documents include a resume, copies of certificates, and a copy of a driver\'s license. Application methods include in-person or online submission.',
    nepali: 'रोजगारी विज्ञापनमा भर्ती क्षेत्र, भर्ती सङ्ख्या, आवेदन योग्यता, पेस गर्नुपर्ने कागजात, सम्पर्क जानकारी, र आवेदन विधि हुन्छ। भर्ती क्षेत्रमा बिक्री, व्यापार, उत्पादन, प्राविधिक, र अनुसन्धान पदहरू हुन्छन्। योग्यतामा उच्च माध्यमिक स्नातक, विश्वविद्यालय स्नातक, वा २ वर्ष भन्दा बढी अनुभव हुन सक्छ।'
  },
  keyPoints: [
    {
      korean: '구인 광고에는 모집 분야, 지원 자격, 제출 서류 등이 있습니다.',
      english: 'Job ads include recruitment fields, qualifications, and required documents.',
      nepali: 'रोजगारी विज्ञापनमा भर्ती क्षेत्र, योग्यता, र आवश्यक कागजात हुन्छ।'
    },
    {
      korean: '지원 서류로는 이력서, 자기소개서, 각종 증명서 등이 필요합니다.',
      english: 'Application documents include resumes, self-introduction letters, and various certificates.',
      nepali: 'आवेदन कागजातमा बायोडाटा, आत्म-परिचय पत्र, र विभिन्न प्रमाणपत्रहरू चाहिन्छ।'
    },
    {
      korean: '지원 방법은 방문 접수나 온라인 접수가 있습니다.',
      english: 'Application methods include in-person or online submission.',
      nepali: 'आवेदन विधि व्यक्तिगत वा अनलाइन पेस गर्ने हुन्छ।'
    }
  ]
};

export const salaryReading = {
  id: 2,
  title: {
    korean: '급여와 세금',
    english: 'Salary and Taxes',
    nepali: 'तलब र कर'
  },
  content: {
    korean: '한국의 직장인은 보통 한 달에 한 번씩 급여를 받는다. 급여는 기본급과 수당이 있다. 수당에는 가족 수당, 초과 근무 수당, 상여 수당 등이 있다. 급여는 보통 은행 계좌를 통해 받는다. 그런데 계좌에 입금되는 돈은 실제 월급과 차이가 있다. 세금, 건강 보험료, 정기 적금 등을 공제하기 때문이다. 급여가 많으면 많을수록 세금 비율이 높아진다.',
    english: 'Korean office workers usually receive their salary once a month. Salary consists of base pay and allowances, including family allowances, overtime pay, and bonuses. Salary is typically deposited into a bank account. However, the deposited amount differs from the actual salary because taxes, health insurance fees, and regular savings are deducted. The higher the salary, the higher the tax rate becomes.',
    nepali: 'कोरियाली कार्यालय कर्मचारीले सामान्यतया महिनामा एक पटक तलब पाउँछन्। तलबमा आधारभूत तलब र भत्ता हुन्छ, जसमा पारिवारिक भत्ता, ओभरटाइम भत्ता, र बोनस हुन्छ। तलब सामान्यतया बैंक खातामा जम्मा हुन्छ। तर जम्मा भएको रकम वास्तविक तलब भन्दा फरक हुन्छ किनभने कर, स्वास्थ्य बीमा शुल्क, र नियमित बचत कटौती गरिन्छ। तलब जति बढी हुन्छ, कर दर त्यति नै बढी हुन्छ।'
  },
  keyPoints: [
    {
      korean: '급여는 기본급과 수당으로 나뉩니다.',
      english: 'Salary is divided into base pay and allowances.',
      nepali: 'तलब आधारभूत तलब र भत्तामा विभाजित हुन्छ।'
    },
    {
      korean: '세금, 보험료, 적금 등이 급여에서 공제됩니다.',
      english: 'Taxes, insurance, and savings are deducted from salary.',
      nepali: 'कर, बीमा, र बचत तलबबाट कटौती गरिन्छ।'
    },
    {
      korean: '급여가 많을수록 세금 비율이 높아집니다.',
      english: 'The higher the salary, the higher the tax rate.',
      nepali: 'तलब जति बढी, कर दर त्यति बढी।'
    }
  ]
};

// ============================================
// Practice Exercises
// ============================================

export const practiceExercises = [
  {
    type: 'fill-in-blank',
    instruction: {
      korean: '빈칸에 알맞은 말을 쓰세요.',
      english: 'Fill in the blanks with the correct words.',
      nepali: 'खाली ठाउँमा सही शब्द लेख्नुहोस्।'
    },
    questions: [
      {
        question: '한국 회사에 _____기 위해서 컴퓨터를 배우고 있어요.',
        nepaliQuestion: 'कोरियाली कम्पनीमा _____ को लागि कम्प्युटर सिक्दैछु।',
        hint: 'to get a job',
        answer: '취직하'
      },
      {
        question: '비행기표를 미리 _____ 놓았어요.',
        nepaliQuestion: 'हवाइ टिकट अगाडि नै _____ राखेँ।',
        hint: 'booked',
        answer: '예약해'
      },
      {
        question: '_____ 증명서를 제출해야 해요.',
        nepaliQuestion: '_____ प्रमाणपत्र पेस गर्नुपर्छ।',
        hint: 'graduation',
        answer: '졸업'
      },
      {
        question: '이력서를 _____ 쓰세요.',
        nepaliQuestion: 'बायोडाटा _____ लेख्नुहोस्।',
        hint: 'with care',
        answer: '정성껏'
      },
      {
        question: '세금과 보험료를 급여에서 _____ 해요.',
        nepaliQuestion: 'कर र बीमा शुल्क तलबबाट _____ गरिन्छ।',
        hint: 'deduct',
        answer: '공제'
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
        question: 'I\'m studying Korean in order to acquire Korean nationality.',
        nepaliQuestion: 'कोरियाली नागरिकता प्राप्त गर्नको लागि कोरियन अध्ययन गर्दैछु।',
        answer: '한국 국적을 취득하기 위해 한국어 공부를 하고 있어요.'
      },
      {
        question: 'I wrote my resume in advance.',
        nepaliQuestion: 'अगाडि नै बायोडाटा लेखेर राखेँ।',
        answer: '이력서를 미리 써 놓았어요.'
      },
      {
        question: 'I want to work at a stable company.',
        nepaliQuestion: 'स्थिर कम्पनीमा काम गर्न चाहन्छु।',
        answer: '안정적인 회사에서 일하고 싶어요.'
      },
      {
        question: 'What do I need in order to work in Korea?',
        nepaliQuestion: 'कोरियामा काम गर्नको लागि के चाहिन्छ?',
        answer: '한국에서 일하기 위해서 무엇이 필요해요?'
      },
      {
        question: 'Make sure to get a computer certificate in advance.',
        nepaliQuestion: 'कम्प्युटर प्रमाणपत्र अगाडि नै लिएर राख्नुहोस्।',
        answer: '컴퓨터 자격증도 미리 따 놓으세요.'
      }
    ]
  },
  {
    type: 'multiple-choice',
    instruction: {
      korean: '알맞은 답을 고르세요.',
      english: 'Choose the correct answer.',
      nepali: 'सही उत्तर छान्नुहोस्।'
    },
    questions: [
      {
        question: '한국 회사에 취직하_____ 컴퓨터를 배우고 있어요.',
        nepaliQuestion: 'कोरियाली कम्पनीमा जागिर पाउन _____ कम्प्युटर सिक्दैछु।',
        options: ['기 위해서', '으려면', '기 전에', '고 나서'],
        answer: '기 위해서'
      },
      {
        question: '미리 비행기표를 예약_____ 놓았어요.',
        nepaliQuestion: 'अगाडि नै हवाइ टिकट बुक _____ राखेँ।',
        options: ['해', '하고', '한', '하면'],
        answer: '해'
      },
      {
        question: '한국에서 급여에서 공제되는 것이 아닌 것은?',
        nepaliQuestion: 'कोरियामा तलबबाट कटौती नहुने कुन हो?',
        options: ['세금', '건강 보험료', '교통비', '정기 적금'],
        answer: '교통비'
      }
    ]
  }
];

// ============================================
// Combined exports for App.jsx compatibility
// ============================================

export const readingPassages = [jobPostingReading, salaryReading];
export const grammar = [grammar1, grammar2];
export const dialogues = [speaking.mainDialogue, interviewDialogue];

export default {
  chapterInfo,
  jobTypeVocabulary,
  companyVocabulary,
  applicationVocabulary,
  recruitmentVocabulary,
  salaryVocabulary,
  additionalVocabulary,
  vocabulary,
  grammar1,
  grammar2,
  grammar,
  speaking,
  interviewDialogue,
  jobPostingReading,
  salaryReading,
  readingPassages,
  dialogues,
  practiceExercises
};
