// KIIP Level 3 - Chapter 5: 소비와 절약 (Consumption and Savings)

export const chapterInfo = {
  chapter: 5,
  title: {
    korean: '소비와 절약',
    english: 'Consumption and Savings',
    nepali: 'खपत र बचत'
  }
};

export const vocabulary = [
  // Expenditure Items
  {
    id: 1,
    category: 'Expenses',
    korean: '지출',
    pronunciation: 'jichul',
    english: 'Expenses, spending',
    nepali: 'खर्च',
    example: {
      korean: '이번 달 지출이 너무 많아요.',
      english: 'This month\'s expenses are too high.',
      nepali: 'यस महिनाको खर्च धेरै छ।'
    }
  },
  {
    id: 2,
    category: 'Expenses',
    korean: '축의금',
    pronunciation: 'chugui-geum',
    english: 'Congratulatory/gift money (for weddings)',
    nepali: 'विवाह उपहार रकम',
    example: {
      korean: '친구 결혼식에 축의금을 냈어요.',
      english: 'I gave gift money at my friend\'s wedding.',
      nepali: 'मैले साथीको विवाहमा उपहार रकम दिएँ।'
    }
  },
  {
    id: 3,
    category: 'Expenses',
    korean: '조의금',
    pronunciation: 'joui-geum',
    english: 'Condolence money (for funerals)',
    nepali: 'शोक रकम',
    example: {
      korean: '동료의 부모님 장례식에 조의금을 보냈어요.',
      english: 'I sent condolence money to my colleague\'s parent\'s funeral.',
      nepali: 'मैले सहकर्मीको आमाबुवाको अन्त्येष्टिमा शोक रकम पठाएँ।'
    }
  },
  {
    id: 4,
    category: 'Expenses',
    korean: '식비',
    pronunciation: 'sikbi',
    english: 'Food expenses',
    nepali: 'खाना खर्च',
    example: {
      korean: '우리 가족의 한 달 식비는 50만 원이에요.',
      english: 'Our family\'s monthly food expense is 500,000 won.',
      nepali: 'हाम्रो परिवारको मासिक खाना खर्च ५ लाख वन हो।'
    }
  },
  {
    id: 5,
    category: 'Expenses',
    korean: '통신비',
    pronunciation: 'tongsin-bi',
    english: 'Communication/phone bill',
    nepali: 'सञ्चार खर्च / फोन बिल',
    example: {
      korean: '통신비가 27,000원밖에 안 나왔어요.',
      english: 'The phone bill was only 27,000 won.',
      nepali: 'फोन बिल मात्र २७,००० वन आयो।'
    }
  },
  {
    id: 6,
    category: 'Expenses',
    korean: '교육비',
    pronunciation: 'gyoyuk-bi',
    english: 'Educational expenses',
    nepali: 'शिक्षा खर्च',
    example: {
      korean: '아이들 교육비가 많이 들어요.',
      english: 'Children\'s educational expenses are high.',
      nepali: 'बच्चाहरूको शिक्षा खर्च धेरै लाग्छ।'
    }
  },
  {
    id: 7,
    category: 'Expenses',
    korean: '의료비',
    pronunciation: 'uiryo-bi',
    english: 'Medical expenses',
    nepali: 'चिकित्सा खर्च',
    example: {
      korean: '건강보험 덕분에 의료비가 적게 들어요.',
      english: 'Thanks to health insurance, medical expenses are low.',
      nepali: 'स्वास्थ्य बीमाको कारण चिकित्सा खर्च कम लाग्छ।'
    }
  },
  {
    id: 8,
    category: 'Expenses',
    korean: '경조사비',
    pronunciation: 'gyeongjosa-bi',
    english: 'Ceremonial expenses (weddings, funerals)',
    nepali: 'समारोह खर्च',
    example: {
      korean: '이번 달은 경조사비가 많이 나갔어요.',
      english: 'This month, ceremonial expenses were high.',
      nepali: 'यस महिना समारोह खर्च धेरै भयो।'
    }
  },
  {
    id: 9,
    category: 'Expenses',
    korean: '공과금',
    pronunciation: 'gongwa-geum',
    english: 'Utility fees (electricity, water, gas)',
    nepali: 'उपयोगिता शुल्क (बिजुली, पानी, ग्यास)',
    example: {
      korean: '매달 공과금을 내야 해요.',
      english: 'I have to pay utility bills every month.',
      nepali: 'हरेक महिना उपयोगिता बिल तिर्नुपर्छ।'
    }
  },
  {
    id: 10,
    category: 'Expenses',
    korean: '문화생활비',
    pronunciation: 'munhwa-saenghwal-bi',
    english: 'Cultural activity expenses (entertainment)',
    nepali: 'सांस्कृतिक गतिविधि खर्च',
    example: {
      korean: '문화생활비로 영화와 공연을 봐요.',
      english: 'I spend cultural activity money on movies and performances.',
      nepali: 'सांस्कृतिक गतिविधि खर्चमा चलचित्र र कार्यक्रम हेर्छु।'
    }
  },
  {
    id: 11,
    category: 'Expenses',
    korean: '난방비',
    pronunciation: 'nanbang-bi',
    english: 'Heating expenses',
    nepali: 'तापक्रम खर्च / हिटिङ बिल',
    example: {
      korean: '이번 달 난방비가 29만 원이나 나왔어요.',
      english: 'This month\'s heating bill was as much as 290,000 won.',
      nepali: 'यस महिनाको हिटिङ बिल २ लाख ९० हजार वन जति आयो।'
    }
  },
  // Financial/Shopping Terms
  {
    id: 12,
    category: 'Finance',
    korean: '가계부',
    pronunciation: 'gaegyebu',
    english: 'Household account book',
    nepali: 'घरायसी हिसाब किताब',
    example: {
      korean: '매일 가계부를 쓰고 있어요.',
      english: 'I write in the household account book every day.',
      nepali: 'म हरेक दिन घरायसी हिसाब किताब लेख्छु।'
    }
  },
  {
    id: 13,
    category: 'Finance',
    korean: '결제하다',
    pronunciation: 'gyeolje-hada',
    english: 'To pay, make payment',
    nepali: 'भुक्तानी गर्नु',
    example: {
      korean: '카드로 결제해도 돼요?',
      english: 'Can I pay by card?',
      nepali: 'कार्डले भुक्तानी गर्न मिल्छ?'
    }
  },
  {
    id: 14,
    category: 'Shopping',
    korean: '포인트',
    pronunciation: 'pointeu',
    english: 'Points (reward points)',
    nepali: 'पोइन्ट',
    example: {
      korean: '포인트를 적립하면 할인을 받을 수 있어요.',
      english: 'If you accumulate points, you can get a discount.',
      nepali: 'पोइन्ट जम्मा गरे छुट पाउन सकिन्छ।'
    }
  },
  {
    id: 15,
    category: 'Shopping',
    korean: '쿠폰',
    pronunciation: 'kupon',
    english: 'Coupons/vouchers',
    nepali: 'कुपन',
    example: {
      korean: '이 쿠폰으로 10% 할인받았어요.',
      english: 'I got a 10% discount with this coupon.',
      nepali: 'यो कुपनले १०% छुट पाएँ।'
    }
  },
  {
    id: 16,
    category: 'Finance',
    korean: '적립하다',
    pronunciation: 'jeongnipha-da',
    english: 'To accumulate/save (points)',
    nepali: 'जम्मा गर्नु / बचत गर्नु',
    example: {
      korean: '매번 쇼핑할 때마다 포인트를 적립해요.',
      english: 'I accumulate points every time I shop.',
      nepali: 'हरेक पटक किनमेल गर्दा पोइन्ट जम्मा गर्छु।'
    }
  },
  {
    id: 17,
    category: 'Shopping',
    korean: '충동구매',
    pronunciation: 'chungdong-gumae',
    english: 'Impulse buying',
    nepali: 'आवेगमा किनमेल',
    example: {
      korean: '충동구매를 하면 돈을 낭비해요.',
      english: 'Impulse buying wastes money.',
      nepali: 'आवेगमा किनमेल गर्दा पैसा खेर जान्छ।'
    }
  },
  {
    id: 18,
    category: 'Shopping',
    korean: '할인',
    pronunciation: 'halin',
    english: 'Discount/sale',
    nepali: 'छुट',
    example: {
      korean: '할인 기간에 물건을 사면 싸요.',
      english: 'If you buy things during sale period, it\'s cheap.',
      nepali: 'छुट अवधिमा सामान किन्दा सस्तो हुन्छ।'
    }
  },
  {
    id: 19,
    category: 'Shopping',
    korean: '전시상품',
    pronunciation: 'jeonsi-sangpum',
    english: 'Display items',
    nepali: 'प्रदर्शनी सामान',
    example: {
      korean: '전시상품은 가격이 더 싸요.',
      english: 'Display items are cheaper.',
      nepali: 'प्रदर्शनी सामान मूल्य सस्तो हुन्छ।'
    }
  },
  {
    id: 20,
    category: 'Shopping',
    korean: '이월상품',
    pronunciation: 'iwol-sangpum',
    english: 'Carryover products (last season)',
    nepali: 'गत सिजन सामान',
    example: {
      korean: '이월상품을 사면 절반 가격에 살 수 있어요.',
      english: 'If you buy carryover products, you can get them at half price.',
      nepali: 'गत सिजन सामान किन्दा आधा मूल्यमा पाइन्छ।'
    }
  },
  {
    id: 21,
    category: 'Shopping',
    korean: '중고',
    pronunciation: 'junggo',
    english: 'Used/second-hand',
    nepali: 'पुरानो / सेकेन्ड ह्यान्ड',
    example: {
      korean: '중고 물건을 사면 돈을 절약할 수 있어요.',
      english: 'You can save money by buying used items.',
      nepali: 'पुरानो सामान किन्दा पैसा बचत गर्न सकिन्छ।'
    }
  },
  {
    id: 22,
    category: 'Shopping',
    korean: '벼룩시장',
    pronunciation: 'byeoruk-sijang',
    english: 'Flea market',
    nepali: 'पिस्सु बजार / सस्तो बजार',
    example: {
      korean: '벼룩시장에서 옷을 싸게 샀어요.',
      english: 'I bought clothes cheaply at the flea market.',
      nepali: 'पिस्सु बजारमा सस्तोमा लुगा किनेँ।'
    }
  },
  {
    id: 23,
    category: 'Shopping',
    korean: '공동구매',
    pronunciation: 'gongdong-gumae',
    english: 'Group buying',
    nepali: 'सामूहिक किनमेल',
    example: {
      korean: '공동구매로 물건을 싸게 살 수 있어요.',
      english: 'You can buy things cheaply through group buying.',
      nepali: 'सामूहिक किनमेलले सामान सस्तोमा किन्न सकिन्छ।'
    }
  },
  {
    id: 24,
    category: 'Finance',
    korean: '비용',
    pronunciation: 'biyong',
    english: 'Cost/expense',
    nepali: 'लागत / खर्च',
    example: {
      korean: '여행 비용이 많이 들었어요.',
      english: 'The travel expenses were high.',
      nepali: 'यात्रा खर्च धेरै लाग्यो।'
    }
  },
  // Related Actions
  {
    id: 25,
    category: 'Verbs',
    korean: '메모하다',
    pronunciation: 'memo-hada',
    english: 'To take note/jot down',
    nepali: 'नोट गर्नु / टिप्पणी गर्नु',
    example: {
      korean: '중요한 것은 메모해 두세요.',
      english: 'Please jot down important things.',
      nepali: 'महत्त्वपूर्ण कुरा नोट गर्नुहोस्।'
    }
  },
  {
    id: 26,
    category: 'Verbs',
    korean: '비교하다',
    pronunciation: 'bigyo-hada',
    english: 'To compare',
    nepali: 'तुलना गर्नु',
    example: {
      korean: '물건을 사기 전에 가격을 비교해요.',
      english: 'I compare prices before buying things.',
      nepali: 'सामान किन्नु अघि मूल्य तुलना गर्छु।'
    }
  },
  {
    id: 27,
    category: 'Verbs',
    korean: '물려받다',
    pronunciation: 'mullyeo-batda',
    english: 'To inherit/receive (hand-me-downs)',
    nepali: 'प्राप्त गर्नु / सम्पत्ति पाउनु',
    example: {
      korean: '형에게서 옷을 물려받았어요.',
      english: 'I received hand-me-down clothes from my older brother.',
      nepali: 'दाजुबाट लुगा पाएँ।'
    }
  },
  {
    id: 28,
    category: 'Verbs',
    korean: '줄이다',
    pronunciation: 'julida',
    english: 'To reduce/cut down',
    nepali: 'घटाउनु / कम गर्नु',
    example: {
      korean: '지출을 줄이기 위해 노력하고 있어요.',
      english: 'I\'m trying to reduce expenses.',
      nepali: 'खर्च घटाउन प्रयास गरिरहेको छु।'
    }
  },
  {
    id: 29,
    category: 'Verbs',
    korean: '수리하다',
    pronunciation: 'suri-hada',
    english: 'To repair',
    nepali: 'मर्मत गर्नु',
    example: {
      korean: '고장난 물건을 수리해서 써요.',
      english: 'I use broken things after repairing them.',
      nepali: 'बिग्रेको सामान मर्मत गरेर प्रयोग गर्छु।'
    }
  },
  {
    id: 30,
    category: 'Expressions',
    korean: '장을 보다',
    pronunciation: 'jang-eul boda',
    english: 'To go grocery shopping',
    nepali: 'किराना किन्न जानु',
    example: {
      korean: '주말마다 시장에서 장을 봐요.',
      english: 'I go grocery shopping at the market every weekend.',
      nepali: 'हरेक सप्ताहन्त बजारमा किराना किन्न जान्छु।'
    }
  },
  // Additional vocabulary
  {
    id: 31,
    category: 'Finance',
    korean: '저축',
    pronunciation: 'jeochuk',
    english: 'Savings',
    nepali: 'बचत',
    example: {
      korean: '저축을 많이 하려고 해요.',
      english: 'I\'m trying to save a lot.',
      nepali: 'म धेरै बचत गर्ने कोशिस गर्छु।'
    }
  },
  {
    id: 32,
    category: 'Finance',
    korean: '적금',
    pronunciation: 'jeokgeum',
    english: 'Savings deposit (installment)',
    nepali: 'बचत खाता (किस्ता)',
    example: {
      korean: '은행에서 적금에 가입했어요.',
      english: 'I opened a savings account at the bank.',
      nepali: 'बैंकमा बचत खाता खोलेँ।'
    }
  },
  {
    id: 33,
    category: 'Finance',
    korean: '이자',
    pronunciation: 'ija',
    english: 'Interest',
    nepali: 'ब्याज',
    example: {
      korean: '한국 은행의 이자가 2% 정도예요.',
      english: 'Korean bank interest is about 2%.',
      nepali: 'कोरियन बैंकको ब्याज दर लगभग २% छ।'
    }
  },
  {
    id: 34,
    category: 'Finance',
    korean: '정기 적금',
    pronunciation: 'jeonggi jeokgeum',
    english: 'Regular savings (fixed term)',
    nepali: 'नियमित बचत (निश्चित अवधि)',
    example: {
      korean: '정기 적금은 이자가 더 높아요.',
      english: 'Regular savings have higher interest.',
      nepali: 'नियमित बचतमा ब्याज दर बढी हुन्छ।'
    }
  },
  {
    id: 35,
    category: 'Finance',
    korean: '자유 적금',
    pronunciation: 'jayu jeokgeum',
    english: 'Flexible savings',
    nepali: 'लचिलो बचत',
    example: {
      korean: '자유 적금은 금액을 자유롭게 넣을 수 있어요.',
      english: 'Flexible savings allow you to deposit any amount freely.',
      nepali: 'लचिलो बचतमा जुनसुकै रकम जम्मा गर्न सकिन्छ।'
    }
  },
  {
    id: 36,
    category: 'Shopping',
    korean: '세일',
    pronunciation: 'seil',
    english: 'Sale',
    nepali: 'सेल / बिक्री',
    example: {
      korean: '백화점에서 세일을 해요.',
      english: 'The department store is having a sale.',
      nepali: 'डिपार्टमेन्ट स्टोरमा सेल चलिरहेको छ।'
    }
  },
  {
    id: 37,
    category: 'Shopping',
    korean: '절약하다',
    pronunciation: 'jeolyak-hada',
    english: 'To save/economize',
    nepali: 'बचत गर्नु / मितव्ययी हुनु',
    example: {
      korean: '전기를 절약해야 해요.',
      english: 'We need to save electricity.',
      nepali: 'बिजुली बचत गर्नुपर्छ।'
    }
  },
  {
    id: 38,
    category: 'Shopping',
    korean: '낭비하다',
    pronunciation: 'nangbi-hada',
    english: 'To waste',
    nepali: 'खेर फाल्नु / बर्बाद गर्नु',
    example: {
      korean: '돈을 낭비하면 안 돼요.',
      english: 'You shouldn\'t waste money.',
      nepali: 'पैसा बर्बाद गर्नु हुँदैन।'
    }
  },
  {
    id: 39,
    category: 'Expenses',
    korean: '보일러',
    pronunciation: 'boilleo',
    english: 'Boiler (heater)',
    nepali: 'बोइलर / हिटर',
    example: {
      korean: '겨울에는 보일러를 계속 틀어요.',
      english: 'In winter, I keep the boiler running.',
      nepali: 'जाडोमा बोइलर सधैं चलाउँछु।'
    }
  },
  {
    id: 40,
    category: 'Verbs',
    korean: '틀다',
    pronunciation: 'teulda',
    english: 'To turn on (appliances)',
    nepali: 'खोल्नु (उपकरण)',
    example: {
      korean: '추우면 보일러를 틀어요.',
      english: 'When it\'s cold, I turn on the boiler.',
      nepali: 'जाडो लाग्दा बोइलर खोल्छु।'
    }
  },
  {
    id: 41,
    category: 'Expressions',
    korean: '온도를 내리다',
    pronunciation: 'ondoreul naerida',
    english: 'To lower the temperature',
    nepali: 'तापक्रम घटाउनु',
    example: {
      korean: '난방비를 절약하려면 온도를 내리세요.',
      english: 'To save heating costs, lower the temperature.',
      nepali: 'हिटिङ खर्च बचाउन तापक्रम घटाउनुहोस्।'
    }
  },
  {
    id: 42,
    category: 'Shopping',
    korean: '중고 매장',
    pronunciation: 'junggo maejang',
    english: 'Second-hand store',
    nepali: 'पुरानो सामान पसल',
    example: {
      korean: '중고 매장에서 가구를 샀어요.',
      english: 'I bought furniture at a second-hand store.',
      nepali: 'पुरानो सामान पसलबाट फर्निचर किनेँ।'
    }
  },
  {
    id: 43,
    category: 'Shopping',
    korean: '육아용품',
    pronunciation: 'yuga-yongpum',
    english: 'Baby supplies/childcare products',
    nepali: 'बच्चा हेरचाह सामान',
    example: {
      korean: '육아용품은 중고로 사는 게 좋아요.',
      english: 'It\'s good to buy baby supplies second-hand.',
      nepali: 'बच्चा हेरचाह सामान पुरानो किन्नु राम्रो हुन्छ।'
    }
  },
  {
    id: 44,
    category: 'Finance',
    korean: '항공권',
    pronunciation: 'hanggong-gwon',
    english: 'Airline ticket',
    nepali: 'हवाई टिकट',
    example: {
      korean: '항공권 할인 행사가 시작됐어요.',
      english: 'The airline ticket discount event has started.',
      nepali: 'हवाई टिकट छुट कार्यक्रम सुरु भयो।'
    }
  },
  {
    id: 45,
    category: 'Verbs',
    korean: '구매하다',
    pronunciation: 'gumae-hada',
    english: 'To purchase',
    nepali: 'किन्नु',
    example: {
      korean: '인터넷으로 물건을 구매했어요.',
      english: 'I purchased items online.',
      nepali: 'इन्टरनेटबाट सामान किनेँ।'
    }
  },
  {
    id: 46,
    category: 'Expenses',
    korean: '월세',
    pronunciation: 'wolse',
    english: 'Monthly rent',
    nepali: 'मासिक भाडा',
    example: {
      korean: '월세를 매달 내야 해요.',
      english: 'I have to pay monthly rent every month.',
      nepali: 'हरेक महिना मासिक भाडा तिर्नुपर्छ।'
    }
  },
  {
    id: 47,
    category: 'Expenses',
    korean: '교통비',
    pronunciation: 'gyotong-bi',
    english: 'Transportation expenses',
    nepali: 'यातायात खर्च',
    example: {
      korean: '교통비를 줄이기 위해 자전거를 타요.',
      english: 'I ride a bicycle to reduce transportation costs.',
      nepali: 'यातायात खर्च घटाउन साइकल चलाउँछु।'
    }
  },
  {
    id: 48,
    category: 'Finance',
    korean: '예금',
    pronunciation: 'yegeum',
    english: 'Deposit',
    nepali: 'जम्मा / निक्षेप',
    example: {
      korean: '은행에 예금을 했어요.',
      english: 'I made a deposit at the bank.',
      nepali: 'बैंकमा पैसा जम्मा गरेँ।'
    }
  },
  {
    id: 49,
    category: 'Finance',
    korean: '출금',
    pronunciation: 'chulgeum',
    english: 'Withdrawal',
    nepali: 'झिक्नु / निकासी',
    example: {
      korean: 'ATM에서 출금했어요.',
      english: 'I made a withdrawal from the ATM.',
      nepali: 'ATM बाट पैसा झिकेँ।'
    }
  },
  {
    id: 50,
    category: 'Finance',
    korean: '영수증',
    pronunciation: 'yeongsujeung',
    english: 'Receipt',
    nepali: 'रसिद',
    example: {
      korean: '영수증을 받으세요.',
      english: 'Please take the receipt.',
      nepali: 'रसिद लिनुहोस्।'
    }
  }
];

export const grammar = [
  {
    id: 1,
    pattern: 'N + 이나/밖에',
    meaning: {
      english: '"As many as" (이나) / "Only" (밖에)',
      nepali: '"जति धेरै" (이나) / "मात्र" (밖에)'
    },
    description: {
      english: 'These particles are used to emphasize quantity. 이나 emphasizes that the amount is more than expected (as many as), while 밖에 (always used with negative) emphasizes limitation (only).',
      nepali: 'यी कणहरू परिमाण जोड दिन प्रयोग हुन्छन्। 이나 ले अपेक्षा भन्दा बढी भएको जनाउँछ, जबकि 밖에 (सधैं नकारात्मकसँग प्रयोग हुन्छ) सीमितता जनाउँछ।'
    },
    whenToUse: {
      situations: [
        {
          situation: {
            english: 'When you want to express surprise at a large quantity',
            nepali: 'जब तपाईं ठूलो परिमाणमा छक्क पर्नुभएको जनाउन चाहनुहुन्छ'
          },
          example: {
            korean: '12만 원이나 썼어요?',
            english: 'You spent (as much as) 120,000 won?',
            nepali: 'तपाईंले १ लाख २० हजार वन जति खर्च गर्नुभयो?'
          }
        },
        {
          situation: {
            english: 'When emphasizing a large number of repetitions',
            nepali: 'धेरै पटक दोहोरिएको जोड दिँदा'
          },
          example: {
            korean: '하루에 커피를 다섯 잔이나 마셔요.',
            english: 'I drink as many as five cups of coffee a day.',
            nepali: 'म दिनमा पाँच कप जति कफी पिउँछु।'
          }
        },
        {
          situation: {
            english: 'When expressing that something is less than expected (밖에)',
            nepali: 'अपेक्षा भन्दा कम भएको जनाउँदा (밖에)'
          },
          example: {
            korean: '1년밖에 안 됐는데.',
            english: 'It\'s only been one year.',
            nepali: 'एक वर्ष मात्र भयो।'
          }
        },
        {
          situation: {
            english: 'When highlighting a small expense',
            nepali: 'सानो खर्च हाइलाइट गर्दा'
          },
          example: {
            korean: '통신비가 27,000원밖에 안 나왔어요.',
            english: 'Communication expenses were only 27,000 won.',
            nepali: 'सञ्चार खर्च मात्र २७,००० वन आयो।'
          }
        }
      ]
    },
    whereToUse: {
      english: 'Used in both spoken and written Korean. Common in daily conversations about money, time, and quantity.',
      nepali: 'मौखिक र लिखित कोरियनमा प्रयोग हुन्छ। पैसा, समय र परिमाणको दैनिक कुराकानीमा सामान्य।'
    },
    formality: {
      english: 'Neutral - can be used in both formal and informal situations.',
      nepali: 'तटस्थ - औपचारिक र अनौपचारिक दुवै अवस्थामा प्रयोग गर्न सकिन्छ।'
    },
    formation: {
      rule: 'Noun + 이나 (emphasis on large amount) / Noun + 밖에 + negative verb (only)',
      notes: {
        english: '이나 is used after nouns ending in consonant or vowel. 밖에 MUST be followed by a negative expression (안, 못, 없다, etc.).',
        nepali: '이나 व्यञ्जन वा स्वरमा समाप्त हुने नामको पछि प्रयोग हुन्छ। 밖에 पछि अनिवार्य रूपमा नकारात्मक अभिव्यक्ति (안, 못, 없다, आदि) आउनुपर्छ।'
      },
      conjugationTable: [
        {
          verb: '3개',
          stem: '3개',
          result: '3개나 (as many as 3)',
          english: 'as many as 3',
          nepali: '३ वटा जति'
        },
        {
          verb: '10만 원',
          stem: '10만 원',
          result: '10만 원이나 (as much as 100,000 won)',
          english: 'as much as 100,000 won',
          nepali: '१ लाख वन जति'
        },
        {
          verb: '1시간',
          stem: '1시간',
          result: '1시간밖에 안 걸렸어요 (only took 1 hour)',
          english: 'it only took 1 hour',
          nepali: 'एक घण्टा मात्र लाग्यो'
        },
        {
          verb: '5,000원',
          stem: '5,000원',
          result: '5,000원밖에 없어요 (only have 5,000 won)',
          english: 'I only have 5,000 won',
          nepali: '५,००० वन मात्र छ'
        }
      ]
    },
    comparisonWithSimilar: {
      english: '이나 vs 만: 만 simply means "only" without negative, while 밖에 requires negative. 이나 can mean "or" in other contexts, but here it emphasizes "as many as".',
      nepali: '이나 vs 만: 만 को अर्थ सिधै "मात्र" हो नकारात्मक बिना, जबकि 밖에 लाई नकारात्मक चाहिन्छ। 이나 को अन्य सन्दर्भमा "वा" अर्थ हुन सक्छ, तर यहाँ "जति धेरै" जोड दिन्छ।'
    },
    examples: [
      {
        context: {
          english: 'Surprised at spending',
          nepali: 'खर्चमा छक्क परेको'
        },
        korean: '이번 달 난방비가 29만 원이나 나왔어요.',
        english: 'This month\'s heating bill was as much as 290,000 won.',
        nepali: 'यस महिनाको हिटिङ बिल २ लाख ९० हजार वन जति आयो।'
      },
      {
        context: {
          english: 'Emphasizing frequency',
          nepali: 'बारम्बारता जोड दिँदा'
        },
        korean: '오늘 회의를 세 번이나 했어요.',
        english: 'I had as many as three meetings today.',
        nepali: 'आज तीन पटक जति बैठक भयो।'
      },
      {
        context: {
          english: 'Expressing limited time',
          nepali: 'सीमित समय व्यक्त गर्दा'
        },
        korean: '아직 한 달밖에 안 지났어요.',
        english: 'Only one month has passed.',
        nepali: 'अझै एक महिना मात्र बित्यो।'
      },
      {
        context: {
          english: 'Limited money situation',
          nepali: 'सीमित पैसा अवस्था'
        },
        korean: '지금 만 원밖에 없어요.',
        english: 'I only have 10,000 won right now.',
        nepali: 'अहिले मसँग १० हजार वन मात्र छ।'
      },
      {
        context: {
          english: 'Expressing excessive eating',
          nepali: 'धेरै खाएको व्यक्त गर्दा'
        },
        korean: '라면을 세 그릇이나 먹었어요.',
        english: 'I ate as many as three bowls of ramen.',
        nepali: 'मैले तीन कटोरा जति रामेन खाएँ।'
      }
    ]
  },
  {
    id: 2,
    pattern: 'V + ㄴ/는다고 하다 / A + 다고 하다',
    meaning: {
      english: 'Indirect quotation: "Someone says/said that..."',
      nepali: 'अप्रत्यक्ष उद्धरण: "कसैले भन्छ/भन्यो कि..."'
    },
    description: {
      english: 'This pattern is used to report what someone else said or to convey information you heard. It\'s the indirect quotation form in Korean.',
      nepali: 'यो ढाँचा अरूले भनेको कुरा रिपोर्ट गर्न वा सुनेको जानकारी दिन प्रयोग हुन्छ। यो कोरियनमा अप्रत्यक्ष उद्धरण हो।'
    },
    whenToUse: {
      situations: [
        {
          situation: {
            english: 'When reporting news or information you heard',
            nepali: 'सुनेको समाचार वा जानकारी रिपोर्ट गर्दा'
          },
          example: {
            korean: '항공권 할인 행사가 시작된다고 해요.',
            english: 'I heard airline discounts start today.',
            nepali: 'हवाई टिकट छुट आज सुरु हुन्छ भन्ने सुनेँ।'
          }
        },
        {
          situation: {
            english: 'When sharing advice or tips from others',
            nepali: 'अरूको सल्लाह वा सुझाव साझा गर्दा'
          },
          example: {
            korean: '물건을 사기 전에 가격 비교를 하는 게 좋다고 해요.',
            english: 'They say it\'s good to compare prices before buying.',
            nepali: 'सामान किन्नु अघि मूल्य तुलना गर्नु राम्रो भन्छन्।'
          }
        },
        {
          situation: {
            english: 'When conveying general wisdom or common knowledge',
            nepali: 'सामान्य ज्ञान वा बुद्धि दिँदा'
          },
          example: {
            korean: '중고 매장에 가면 필요한 물건을 싸게 살 수 있다고 해요.',
            english: 'They say you can buy things cheaply at second-hand stores.',
            nepali: 'पुरानो सामान पसलमा गए सस्तोमा किन्न सकिन्छ भन्छन्।'
          }
        }
      ]
    },
    whereToUse: {
      english: 'Very common in everyday conversation, news reporting, and when sharing information from other sources.',
      nepali: 'दैनिक कुराकानी, समाचार रिपोर्टिङ, र अन्य स्रोतबाट जानकारी साझा गर्दा धेरै सामान्य।'
    },
    formality: {
      english: 'Neutral. The formality depends on the ending: 해요 (polite), 합니다 (formal), 해 (casual).',
      nepali: 'तटस्थ। औपचारिकता अन्त्यमा निर्भर: 해요 (विनम्र), 합니다 (औपचारिक), 해 (अनौपचारिक)।'
    },
    formation: {
      rule: 'Action Verb: Stem + ㄴ/는다고 하다 | Descriptive Verb (Adj): Stem + 다고 하다 | Noun: N+(이)라고 하다',
      notes: {
        english: 'For action verbs: use ㄴ다고 after vowel stems, 는다고 after consonant stems. For adjectives: just add 다고. Past tense: 았/었다고, Future: (으)ㄹ 거라고.',
        nepali: 'क्रिया क्रियापदको लागि: स्वर स्टेम पछि ㄴ다고, व्यञ्जन स्टेम पछि 는다고। विशेषणको लागि: 다고 मात्र थप्ने। भूतकाल: 았/었다고, भविष्य: (으)ㄹ 거라고।'
      },
      conjugationTable: [
        {
          verb: '가다 (to go)',
          stem: '가',
          result: '간다고 하다',
          english: 'says (someone) goes',
          nepali: 'जान्छ भन्छ'
        },
        {
          verb: '먹다 (to eat)',
          stem: '먹',
          result: '먹는다고 하다',
          english: 'says (someone) eats',
          nepali: 'खान्छ भन्छ'
        },
        {
          verb: '좋다 (to be good)',
          stem: '좋',
          result: '좋다고 하다',
          english: 'says it\'s good',
          nepali: 'राम्रो भन्छ'
        },
        {
          verb: '예쁘다 (to be pretty)',
          stem: '예쁘',
          result: '예쁘다고 하다',
          english: 'says it\'s pretty',
          nepali: 'सुन्दर भन्छ'
        },
        {
          verb: '학생 (student)',
          stem: '학생',
          result: '학생이라고 하다',
          english: 'says (someone) is a student',
          nepali: 'विद्यार्थी भन्छ'
        }
      ]
    },
    comparisonWithSimilar: {
      patterns: [
        {
          pattern: 'Direct quote: "..."라고/이라고 하다',
          difference: {
            english: 'Direct quotation uses the exact words spoken, while indirect quotation paraphrases.',
            nepali: 'प्रत्यक्ष उद्धरणले भनिएको शब्द प्रयोग गर्छ, अप्रत्यक्षले व्याख्या गर्छ।'
          },
          exampleComparison: {
            formal: '선생님이 "수업이 끝났습니다"라고 했어요. (Direct)',
            casual: '선생님이 수업이 끝났다고 했어요. (Indirect)'
          }
        }
      ]
    },
    examples: [
      {
        context: {
          english: 'Sharing news about a sale',
          nepali: 'सेलको बारेमा समाचार साझा गर्दा'
        },
        korean: '이번 주에 백화점에서 세일을 한다고 해요.',
        english: 'They say there\'s a sale at the department store this week.',
        nepali: 'यो हप्ता डिपार्टमेन्ट स्टोरमा सेल हुन्छ भन्छन्।'
      },
      {
        context: {
          english: 'Sharing saving tips',
          nepali: 'बचत सुझाव साझा गर्दा'
        },
        korean: '난방비를 절약하려면 옷을 따뜻하게 입는 게 좋다고 해요.',
        english: 'They say wearing warm clothes is good for saving on heating.',
        nepali: 'न्यानो लुगा लगाउँदा हिटिङ खर्च बचत हुन्छ भन्छन्।'
      },
      {
        context: {
          english: 'Reporting what a friend said',
          nepali: 'साथीले भनेको रिपोर्ट गर्दा'
        },
        korean: '친구가 이 가게가 싸다고 했어요.',
        english: 'My friend said this store is cheap.',
        nepali: 'साथीले यो पसल सस्तो छ भन्यो।'
      },
      {
        context: {
          english: 'Sharing survey results',
          nepali: 'सर्वेक्षण परिणाम साझा गर्दा'
        },
        korean: '80%의 부모가 중고 육아용품을 산 경험이 있다고 해요.',
        english: 'They say 80% of parents have experience buying used baby products.',
        nepali: '८०% अभिभावकले पुरानो बच्चा सामान किनेको अनुभव छ भन्छन्।'
      },
      {
        context: {
          english: 'Sharing information about banks',
          nepali: 'बैंकको बारेमा जानकारी साझा गर्दा'
        },
        korean: '한국 은행 이자가 2% 정도라고 해요.',
        english: 'They say Korean bank interest is about 2%.',
        nepali: 'कोरियन बैंकको ब्याज दर लगभग २% भन्छन्।'
      }
    ]
  }
];

export const dialogues = [
  {
    id: 1,
    title: {
      korean: '난방비가 너무 많이 나왔어요',
      english: 'The Heating Bill Was Too High',
      nepali: 'हिटिङ बिल धेरै आयो'
    },
    situation: {
      korean: '후엔이 난방비 고지서를 보고 아주머니와 이야기하고 있습니다.',
      english: 'Huyen is looking at the heating bill and talking with an older lady.',
      nepali: 'हुयेन हिटिङ बिल हेर्दै आन्टीसँग कुरा गरिरहेकी छिन्।'
    },
    conversation: [
      {
        speaker: '아주머니',
        korean: '후엔 씨, 뭘 그렇게 보고 있어요?',
        english: 'Huyen, what are you looking at so intently?',
        nepali: 'हुयेन, के यस्तो ध्यान दिएर हेरिरहनु भएको?'
      },
      {
        speaker: '후엔',
        korean: '이번 달 난방비가 29만 원이나 나왔어요. 생각보다 너무 많이 나와서 어떻게 해야 할지 모르겠어요.',
        english: 'This month\'s heating bill is as much as 290,000 won. It\'s much higher than expected, and I don\'t know what to do.',
        nepali: 'यस महिनाको हिटिङ बिल २ लाख ९० हजार वन जति आयो। अपेक्षा भन्दा धेरै आयो, के गर्ने थाहा छैन।'
      },
      {
        speaker: '아주머니',
        korean: '어떻게 그렇게 많이 나왔어요?',
        english: 'How did it get so high?',
        nepali: 'यति धेरै कसरी आयो?'
      },
      {
        speaker: '후엔',
        korean: '한국 겨울 날씨가 너무 추워서 계속 보일러를 틀었거든요.',
        english: 'Korean winters are so cold that I kept the boiler running continuously.',
        nepali: 'कोरियाको जाडो मौसम धेरै चिसो भएकोले बोइलर सधैं चलाएँ।'
      },
      {
        speaker: '아주머니',
        korean: '그렇게 하면 안 돼요. 그럴 때는 온도를 조금 내리고 옷을 따뜻하게 입는 게 난방비를 절약할 수 있는 방법이라고 해요.',
        english: 'You shouldn\'t do that. They say lowering the temperature and wearing warmer clothes is a way to save on heating bills.',
        nepali: 'त्यसो गर्नु हुँदैन। तापक्रम थोरै घटाउने र न्यानो लुगा लगाउने हिटिङ बिल बचाउने तरिका हो भन्छन्।'
      },
      {
        speaker: '후엔',
        korean: '아, 그래요? 다음 달부터는 그렇게 해 볼게요. 감사합니다.',
        english: 'Oh, really? I\'ll try that from next month. Thank you.',
        nepali: 'ओहो, हो? अर्को महिनादेखि त्यसो गर्छु। धन्यवाद।'
      }
    ]
  },
  {
    id: 2,
    title: {
      korean: '절약하는 방법',
      english: 'Ways to Save Money',
      nepali: 'पैसा बचाउने तरिकाहरू'
    },
    situation: {
      korean: '두 친구가 돈을 절약하는 방법에 대해 이야기하고 있습니다.',
      english: 'Two friends are talking about ways to save money.',
      nepali: 'दुई साथी पैसा बचाउने तरिकाको बारेमा कुरा गरिरहेका छन्।'
    },
    conversation: [
      {
        speaker: 'A',
        korean: '요즘 지출이 너무 많아서 걱정이에요.',
        english: 'I\'m worried because my expenses are too high these days.',
        nepali: 'आजकाल खर्च धेरै भएकोले चिन्तित छु।'
      },
      {
        speaker: 'B',
        korean: '저도 그래요. 그래서 가계부를 쓰기 시작했어요.',
        english: 'Me too. So I started keeping a household account book.',
        nepali: 'म पनि। त्यसैले घरायसी हिसाब किताब लेख्न थालेँ।'
      },
      {
        speaker: 'A',
        korean: '가계부요? 효과가 있어요?',
        english: 'A household account book? Is it effective?',
        nepali: 'घरायसी हिसाब किताब? असर छ?'
      },
      {
        speaker: 'B',
        korean: '네, 매일 쓰는 돈을 메모하면 충동구매를 줄일 수 있다고 해요.',
        english: 'Yes, they say if you note down daily expenses, you can reduce impulse buying.',
        nepali: 'हो, दैनिक खर्च नोट गरे आवेगमा किनमेल कम गर्न सकिन्छ भन्छन्।'
      },
      {
        speaker: 'A',
        korean: '그리고 물건을 사기 전에 인터넷으로 가격 비교를 하면 어때요?',
        english: 'And what about comparing prices online before buying?',
        nepali: 'र सामान किन्नु अघि इन्टरनेटमा मूल्य तुलना गर्दा कस्तो?'
      },
      {
        speaker: 'B',
        korean: '좋은 방법이에요! 또 중고 매장이나 벼룩시장에 가면 물건을 싸게 살 수 있어요.',
        english: 'That\'s a good method! Also, you can buy things cheaply at second-hand stores or flea markets.',
        nepali: 'राम्रो तरिका हो! साथै पुरानो सामान पसल वा पिस्सु बजारमा गए सस्तोमा किन्न सकिन्छ।'
      },
      {
        speaker: 'A',
        korean: '공동구매도 좋다고 하던데요.',
        english: 'I heard group buying is also good.',
        nepali: 'सामूहिक किनमेल पनि राम्रो भन्ने सुनेको थिएँ।'
      },
      {
        speaker: 'B',
        korean: '맞아요. 같이 사면 더 싸게 살 수 있어요.',
        english: 'That\'s right. If we buy together, we can get it cheaper.',
        nepali: 'हो। सँगै किन्दा अझ सस्तोमा पाइन्छ।'
      }
    ]
  }
];

export const readingPassages = [
  {
    id: 1,
    title: {
      korean: '중고 육아용품 구매',
      english: 'Buying Second-Hand Baby Products',
      nepali: 'पुरानो बच्चा हेरचाह सामान किन्ने'
    },
    content: {
      korean: '최근 설문조사에 따르면 80%의 부모가 중고 육아용품을 구매한 경험이 있다고 합니다. 중고 육아용품을 구매하는 가장 큰 이유는 비용 절감으로, 전체 응답자의 52.1%가 이 이유를 선택했습니다. 아기들은 빨리 자라기 때문에 옷이나 장난감을 오래 사용하지 않습니다. 그래서 많은 부모들이 중고 제품을 구매하거나 다른 사람에게서 물려받는 것을 선호합니다. 벼룩시장이나 중고 매장, 온라인 중고 거래 사이트를 이용하면 필요한 물건을 저렴하게 구할 수 있습니다.',
      english: 'According to a recent survey, 80% of parents have experience buying second-hand baby products. The biggest reason for buying used baby supplies is cost reduction, with 52.1% of respondents choosing this reason. Babies grow quickly, so clothes and toys aren\'t used for long. Therefore, many parents prefer buying second-hand products or receiving hand-me-downs from others. By using flea markets, second-hand stores, or online used goods websites, you can get necessary items at low prices.',
      nepali: 'हालको सर्वेक्षण अनुसार, ८०% अभिभावकले पुरानो बच्चा हेरचाह सामान किनेको अनुभव छ। पुरानो बच्चा सामान किन्ने सबैभन्दा ठूलो कारण लागत कटौती हो, जसमा ५२.१% उत्तरदाताले यो कारण रोजे। बच्चाहरू छिटो हुर्कन्छन्, त्यसैले लुगा र खेलौना लामो समय प्रयोग हुँदैन। त्यसकारण धेरै अभिभावकले पुरानो सामान किन्न वा अरूबाट पाउन रुचाउँछन्। पिस्सु बजार, पुरानो सामान पसल, वा अनलाइन पुरानो सामान साइट प्रयोग गरेर आवश्यक सामान सस्तोमा पाउन सकिन्छ।'
    },
    keyPoints: [
      {
        korean: '80%의 부모가 중고 육아용품 구매 경험이 있습니다.',
        english: '80% of parents have experience buying used baby products.',
        nepali: '८०% अभिभावकले पुरानो बच्चा सामान किनेको अनुभव छ।'
      },
      {
        korean: '비용 절감이 가장 큰 이유입니다 (52.1%).',
        english: 'Cost reduction is the biggest reason (52.1%).',
        nepali: 'लागत कटौती सबैभन्दा ठूलो कारण हो (५२.१%)।'
      },
      {
        korean: '아기들이 빨리 자라서 물건을 오래 사용하지 않습니다.',
        english: 'Babies grow quickly so items aren\'t used for long.',
        nepali: 'बच्चाहरू छिटो हुर्कन्छन् त्यसैले सामान लामो समय प्रयोग हुँदैन।'
      }
    ]
  },
  {
    id: 2,
    title: {
      korean: '적금 가입하기',
      english: 'Opening a Savings Account',
      nepali: 'बचत खाता खोल्ने'
    },
    content: {
      korean: '돈을 모으고 싶다면 적금에 가입하는 것이 좋습니다. 한국 은행의 이자율은 약 2% 정도입니다. 이자율은 은행, 예금 기간, 금액에 따라 다릅니다. 일반적으로 예금 기간이 길수록 더 많은 이자를 받을 수 있습니다. 적금에는 정기 적금과 자유 적금 두 가지 종류가 있습니다. 정기 적금은 매달 일정한 금액을 정해진 날짜에 넣어야 합니다. 자유 적금은 금액을 자유롭게 넣을 수 있어서 편리합니다. 적금에 가입하면 저축하는 습관을 기를 수 있고, 미래를 위한 준비를 할 수 있습니다.',
      english: 'If you want to save money, it\'s good to open a savings account. Korean bank interest rates are about 2%. Interest rates vary by bank, deposit term, and amount. Generally, the longer the deposit term, the more interest you can receive. There are two types of savings: regular savings (fixed installments) and flexible savings. Regular savings require depositing a fixed amount on a set date each month. Flexible savings are convenient because you can deposit any amount freely. By opening a savings account, you can develop a saving habit and prepare for the future.',
      nepali: 'पैसा जोगाउन चाहनुहुन्छ भने बचत खाता खोल्नु राम्रो हो। कोरियन बैंकको ब्याज दर लगभग २% हो। ब्याज दर बैंक, जम्मा अवधि, र रकममा निर्भर हुन्छ। सामान्यतया जम्मा अवधि लामो भएमा बढी ब्याज पाइन्छ। बचतमा नियमित बचत र लचिलो बचत दुई प्रकार छन्। नियमित बचतमा हरेक महिना निश्चित रकम तोकिएको मितिमा राख्नुपर्छ। लचिलो बचत सुविधाजनक छ किनभने जुनसुकै रकम राख्न सकिन्छ। बचत खाता खोलेर बचत गर्ने बानी बसाल्न र भविष्यको तयारी गर्न सकिन्छ।'
    },
    keyPoints: [
      {
        korean: '한국 은행 이자율은 약 2%입니다.',
        english: 'Korean bank interest rates are about 2%.',
        nepali: 'कोरियन बैंकको ब्याज दर लगभग २% हो।'
      },
      {
        korean: '정기 적금: 매달 정해진 금액을 넣습니다.',
        english: 'Regular savings: Deposit a fixed amount monthly.',
        nepali: 'नियमित बचत: हरेक महिना निश्चित रकम राख्ने।'
      },
      {
        korean: '자유 적금: 금액을 자유롭게 넣을 수 있습니다.',
        english: 'Flexible savings: Can deposit any amount freely.',
        nepali: 'लचिलो बचत: जुनसुकै रकम राख्न सकिन्छ।'
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
        question: '이번 달 난방비가 30만 원___ 나왔어요. (as much as)',
        nepaliQuestion: 'यस महिनाको हिटिङ बिल ३० हजार वन ___ आयो। (जति)',
        hint: '이나/밖에',
        answer: '이나'
      },
      {
        question: '지금 만 원___ 없어요. (only)',
        nepaliQuestion: 'अहिले १० हजार वन ___ छैन। (मात्र)',
        hint: '이나/밖에',
        answer: '밖에'
      },
      {
        question: '친구가 이 가게가 싸___ 했어요. (said)',
        nepaliQuestion: 'साथीले यो पसल सस्तो ___ भन्यो।',
        hint: '다고/라고',
        answer: '다고'
      },
      {
        question: '뉴스에서 내일 비가 온___ 해요. (they say)',
        nepaliQuestion: 'समाचारमा भोलि पानी पर्छ ___।',
        hint: '다고/ㄴ다고/는다고',
        answer: 'ㄴ다고'
      },
      {
        question: '매달 ___을/를 쓰면 지출을 관리할 수 있어요. (household account book)',
        nepaliQuestion: 'हरेक महिना ___ लेखे खर्च व्यवस्थापन गर्न सकिन्छ। (घरायसी हिसाब किताब)',
        hint: '',
        answer: '가계부'
      },
      {
        question: '___를 줄이기 위해 중고 물건을 사요. (impulse buying)',
        nepaliQuestion: '___ कम गर्न पुरानो सामान किन्छु। (आवेगमा किनमेल)',
        hint: '',
        answer: '충동구매'
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
        question: 'I drank as many as 4 cups of coffee today.',
        nepaliQuestion: 'मैले आज ४ कप जति कफी पिएँ।',
        answer: '오늘 커피를 네 잔이나 마셨어요'
      },
      {
        question: 'I only have 5,000 won.',
        nepaliQuestion: 'मसँग ५,००० वन मात्र छ।',
        answer: '5,000원밖에 없어요'
      },
      {
        question: 'They say this restaurant is delicious.',
        nepaliQuestion: 'यो रेस्टुरेन्ट स्वादिष्ट छ भन्छन्।',
        answer: '이 식당이 맛있다고 해요'
      },
      {
        question: 'I compare prices before buying.',
        nepaliQuestion: 'म किन्नु अघि मूल्य तुलना गर्छु।',
        answer: '물건을 사기 전에 가격을 비교해요'
      }
    ]
  }
];
