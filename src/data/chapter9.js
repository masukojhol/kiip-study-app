// KIIP Level 3 - Chapter 9: 고장과 수리 (Breakdown and Repair)
// Pages 120-128

export const chapterInfo = {
  chapter: 9,
  title: {
    korean: '고장과 수리',
    english: 'Breakdown and Repair',
    nepali: 'बिग्रिएको र मर्मत'
  },
  pageRange: '120-128',
  objectives: {
    vocabulary: {
      korean: '고장과 수리',
      english: 'Breakdown and Repair',
      nepali: 'बिग्रिएको र मर्मत'
    },
    grammar: [
      {
        korean: 'V/A + 아/어서 그런지',
        english: 'Maybe because... / Perhaps because...',
        nepali: 'शायद ... को कारणले'
      },
      {
        korean: 'A + (으)ㄴ가요? / V + 나요?',
        english: 'Soft/polite question endings',
        nepali: 'नम्र प्रश्न अन्त्य'
      }
    ],
    activities: [
      {
        korean: '고장 문의하기',
        english: 'Inquiring about a malfunction',
        nepali: 'खराबीको बारेमा सोध्ने'
      },
      {
        korean: '수리 요청하기',
        english: 'Requesting a repair',
        nepali: 'मर्मत अनुरोध गर्ने'
      }
    ],
    culture: {
      korean: '전자 제품 보증 기간',
      english: 'Electronic Product Warranty Period',
      nepali: 'इलेक्ट्रोनिक उत्पादन वारेन्टी अवधि'
    }
  }
};

// ============================================
// PAGE 120 - 어휘 (Vocabulary)
// ============================================

// Section 1: Common breakdown/malfunction phrases
export const breakdownVocabulary = [
  {
    id: 1,
    page: 120,
    category: 'Household Problems',
    section: 'Common Problems',
    korean: '하수구가 막히다',
    pronunciation: 'hasuguga makhida',
    english: 'The sewer/drain is clogged',
    nepali: 'ढल बन्द भएको छ',
    type: 'expression',
    example: {
      korean: '하수구가 막혀서 물이 안 내려가요.',
      english: 'The drain is clogged so the water won\'t go down.',
      nepali: 'ढल बन्द भएकोले पानी तल जाँदैन।'
    }
  },
  {
    id: 2,
    page: 120,
    category: 'Household Problems',
    section: 'Common Problems',
    korean: '변기가 막히다',
    pronunciation: 'byeongiga makhida',
    english: 'The toilet is clogged',
    nepali: 'शौचालय बन्द भएको छ',
    type: 'expression',
    example: {
      korean: '변기가 막혀서 물이 안 내려가요.',
      english: 'The toilet is clogged so the water won\'t flush.',
      nepali: 'शौचालय बन्द भएकोले पानी बग्दैन।'
    }
  },
  {
    id: 3,
    page: 120,
    category: 'Household Problems',
    section: 'Common Problems',
    korean: '물이 안 나오다',
    pronunciation: 'muri an naoda',
    english: 'There\'s no water coming out',
    nepali: 'पानी आउँदैन',
    type: 'expression',
    example: {
      korean: '수도에서 물이 안 나와요.',
      english: 'Water isn\'t coming out of the faucet.',
      nepali: 'धारामा पानी आउँदैन।'
    }
  },
  {
    id: 4,
    page: 120,
    category: 'Household Problems',
    section: 'Common Problems',
    korean: '물이 새다',
    pronunciation: 'muri saeda',
    english: 'There\'s a water leak',
    nepali: 'पानी चुहिन्छ',
    type: 'expression',
    example: {
      korean: '천장에서 물이 새요.',
      english: 'Water is leaking from the ceiling.',
      nepali: 'छतबाट पानी चुहिरहेको छ।'
    }
  },
  {
    id: 5,
    page: 120,
    category: 'Household Problems',
    section: 'Common Problems',
    korean: '전등이 나가다',
    pronunciation: 'jeondeungi nagada',
    english: 'The light went out',
    nepali: 'बत्ती गइसकेको छ',
    type: 'expression',
    example: {
      korean: '거실 전등이 나갔어요.',
      english: 'The living room light went out.',
      nepali: 'बैठक कोठाको बत्ती गयो।'
    }
  },
  {
    id: 6,
    page: 120,
    category: 'Household Problems',
    section: 'Common Problems',
    korean: '문이 잠기다',
    pronunciation: 'muni jamgida',
    english: 'The door is locked',
    nepali: 'ढोका बन्द भयो',
    type: 'expression',
    example: {
      korean: '열쇠가 안에 있는데 문이 잠겼어요.',
      english: 'The key is inside but the door is locked.',
      nepali: 'साँचो भित्र छ तर ढोका बन्द भयो।'
    }
  },
  {
    id: 7,
    page: 120,
    category: 'Household Problems',
    section: 'Common Problems',
    korean: '가스불이 안 들어오다',
    pronunciation: 'gaseuburi an deureooda',
    english: 'The gas isn\'t coming in',
    nepali: 'ग्यास आउँदैन',
    type: 'expression',
    example: {
      korean: '가스불이 안 들어와서 요리를 못 해요.',
      english: 'I can\'t cook because the gas isn\'t coming in.',
      nepali: 'ग्यास आएन भनेर खाना पकाउन सकिँदैन।'
    }
  },
  {
    id: 8,
    page: 120,
    category: 'Household Problems',
    section: 'Common Problems',
    korean: '냉동이 안 되다',
    pronunciation: 'naengdongi an doeda',
    english: 'The freezer isn\'t freezing',
    nepali: 'फ्रिजरले जमाउँदैन',
    type: 'expression',
    example: {
      korean: '냉동이 안 돼서 음식이 녹았어요.',
      english: 'The freezer isn\'t working so the food melted.',
      nepali: 'फ्रिजरले जमाएन र खाना पग्लियो।'
    }
  }
];

// Section 1 continued: Device problems
export const deviceVocabulary = [
  {
    id: 9,
    page: 120,
    category: 'Device Problems',
    section: 'Device Issues',
    korean: '와이파이 연결이 안 되다',
    pronunciation: 'waipai yeongyeori an doeda',
    english: 'The Wi-Fi isn\'t connecting',
    nepali: 'वाइफाई जोडिँदैन',
    type: 'expression',
    example: {
      korean: '와이파이 연결이 안 돼서 인터넷을 못 써요.',
      english: 'I can\'t use the internet because the Wi-Fi isn\'t connecting.',
      nepali: 'वाइफाई जोडिएन भनेर इन्टरनेट प्रयोग गर्न सकिँदैन।'
    }
  },
  {
    id: 10,
    page: 120,
    category: 'Device Problems',
    section: 'Device Issues',
    korean: '액정이 깨지다',
    pronunciation: 'aekjeongi kkaejida',
    english: 'The screen is cracked',
    nepali: 'स्क्रिन फुटेको छ',
    type: 'expression',
    example: {
      korean: '휴대 전화 액정이 깨졌어요.',
      english: 'My mobile phone screen is cracked.',
      nepali: 'मोबाइल फोनको स्क्रिन फुटेको छ।'
    }
  },
  {
    id: 11,
    page: 120,
    category: 'Device Problems',
    section: 'Device Issues',
    korean: '부팅이 안 되다',
    pronunciation: 'butingi an doeda',
    english: 'The computer is not booting',
    nepali: 'कम्प्युटर बुट हुँदैन',
    type: 'expression',
    example: {
      korean: '노트북 부팅이 안 돼요.',
      english: 'My laptop won\'t boot up.',
      nepali: 'ल्यापटप बुट हुँदैन।'
    }
  },
  {
    id: 12,
    page: 120,
    category: 'Device Problems',
    section: 'Device Issues',
    korean: '전원이 안 켜지다',
    pronunciation: 'jeonwoni an kyeojida',
    english: 'The power isn\'t turning on',
    nepali: 'पावर अन हुँदैन',
    type: 'expression',
    example: {
      korean: '어제부터 전원이 안 켜져요.',
      english: 'The power hasn\'t been turning on since yesterday.',
      nepali: 'हिजोदेखि पावर अन हुँदैन।'
    }
  }
];

// Section 2: Repair-related vocabulary
export const repairVocabulary = [
  {
    id: 13,
    page: 120,
    category: 'Repair Actions',
    section: 'Repair Process',
    korean: '고장이 나다',
    pronunciation: 'gojangi nada',
    english: 'To break down, to malfunction',
    nepali: 'बिग्रिनु',
    type: 'verb',
    example: {
      korean: '세탁기가 고장이 났어요.',
      english: 'The washing machine broke down.',
      nepali: 'कपडा धुने मेसिन बिग्रियो।'
    }
  },
  {
    id: 14,
    page: 120,
    category: 'Repair Actions',
    section: 'Repair Process',
    korean: '서비스 센터에 문의하다',
    pronunciation: 'seobiseu senteoe munuihada',
    english: 'To inquire/contact the service center',
    nepali: 'सेवा केन्द्रमा सोध्नु',
    type: 'verb',
    example: {
      korean: '고장이 나면 서비스 센터에 문의하세요.',
      english: 'If it breaks down, contact the service center.',
      nepali: 'बिग्रिए सेवा केन्द्रमा सोध्नुहोस्।'
    }
  },
  {
    id: 15,
    page: 120,
    category: 'Repair Actions',
    section: 'Repair Process',
    korean: '출장 서비스를 신청하다',
    pronunciation: 'chuljang seobiseureul sincheonghada',
    english: 'To request on-site service',
    nepali: 'घरमा आएर मर्मत गर्ने सेवा अनुरोध गर्नु',
    type: 'verb',
    example: {
      korean: '냉장고가 고장 나서 출장 서비스를 신청했어요.',
      english: 'The refrigerator broke so I requested on-site service.',
      nepali: 'फ्रिज बिग्रिएकोले घरमा आएर मर्मत गर्ने सेवा अनुरोध गरेँ।'
    }
  },
  {
    id: 16,
    page: 120,
    category: 'Repair Actions',
    section: 'Repair Process',
    korean: '서비스 센터에 방문하다',
    pronunciation: 'seobiseu senteoe bangmunhada',
    english: 'To visit the service center',
    nepali: 'सेवा केन्द्रमा जानु',
    type: 'verb',
    example: {
      korean: '노트북을 들고 서비스 센터에 방문했어요.',
      english: 'I brought my laptop and visited the service center.',
      nepali: 'ल्यापटप लिएर सेवा केन्द्रमा गएँ।'
    }
  },
  {
    id: 17,
    page: 120,
    category: 'Repair Actions',
    section: 'Repair Process',
    korean: '고치다',
    pronunciation: 'gochida',
    english: 'To fix (make something broken usable again)',
    nepali: 'ठीक गर्नु (बिग्रेको कुरा चलाउने बनाउनु)',
    type: 'verb',
    example: {
      korean: '고치는 데 이틀 정도 걸려요.',
      english: 'It takes about two days to fix.',
      nepali: 'ठीक गर्न करिब दुई दिन लाग्छ।'
    }
  },
  {
    id: 18,
    page: 120,
    category: 'Repair Actions',
    section: 'Repair Process',
    korean: '수리하다',
    pronunciation: 'surihada',
    english: 'To repair (examine and mend)',
    nepali: 'मर्मत गर्नु (जाँच गरेर ठीक गर्नु)',
    type: 'verb',
    example: {
      korean: '휴대 전화 액정을 수리했어요.',
      english: 'I had the phone screen repaired.',
      nepali: 'मोबाइल फोनको स्क्रिन मर्मत गराएँ।'
    }
  },
  {
    id: 19,
    page: 120,
    category: 'Repair Actions',
    section: 'Repair Process',
    korean: '수리 비용을 내다',
    pronunciation: 'suri biyongeul naeda',
    english: 'To pay for repair costs',
    nepali: 'मर्मत खर्च तिर्नु',
    type: 'expression',
    example: {
      korean: '수리 비용을 얼마나 내야 해요?',
      english: 'How much do I have to pay for the repair?',
      nepali: 'मर्मत खर्च कति तिर्नुपर्छ?'
    }
  },
  {
    id: 20,
    page: 120,
    category: 'Repair Actions',
    section: 'Repair Process',
    korean: '무상 수리를 받다',
    pronunciation: 'musang surireul batda',
    english: 'To receive free repair',
    nepali: 'निःशुल्क मर्मत प्राप्त गर्नु',
    type: 'expression',
    example: {
      korean: '보증 기간이라서 무상 수리를 받았어요.',
      english: 'I received a free repair because it\'s within the warranty period.',
      nepali: 'वारेन्टी अवधि भएकोले निःशुल्क मर्मत पाएँ।'
    }
  }
];

// Additional vocabulary from the lesson
export const additionalVocabulary = [
  {
    id: 21,
    page: 120,
    category: 'Additional',
    section: 'Extra Vocabulary',
    korean: '딱딱하다',
    pronunciation: 'ttakttakhada',
    english: 'Hard, tough, stiff',
    nepali: 'कडा, कठोर',
    type: 'adjective',
    example: {
      korean: '딱딱한 걸 계속 씹어서 이가 아파요.',
      english: 'My tooth hurts from chewing something hard.',
      nepali: 'कडा कुरा चपाइरहेकोले दाँत दुख्छ।'
    }
  },
  {
    id: 22,
    page: 120,
    category: 'Additional',
    section: 'Extra Vocabulary',
    korean: '씹다',
    pronunciation: 'ssipda',
    english: 'To chew',
    nepali: 'चपाउनु',
    type: 'verb',
    example: {
      korean: '음식을 잘 씹어서 드세요.',
      english: 'Please chew your food well.',
      nepali: 'खाना राम्ररी चपाएर खानुहोस्।'
    }
  },
  {
    id: 23,
    page: 124,
    category: 'Additional',
    section: 'Extra Vocabulary',
    korean: '떨어뜨리다',
    pronunciation: 'tteoreotteurida',
    english: 'To drop',
    nepali: 'खसाल्नु',
    type: 'verb',
    example: {
      korean: '가방을 떨어뜨려서 액정이 깨졌어요.',
      english: 'The screen cracked because I dropped the bag.',
      nepali: 'झोला खसाल्दा स्क्रिन फुट्यो।'
    }
  },
  {
    id: 24,
    page: 124,
    category: 'Additional',
    section: 'Extra Vocabulary',
    korean: '보험에 가입하다',
    pronunciation: 'boheome gaiphada',
    english: 'To enroll in insurance',
    nepali: 'बीमामा भर्ना हुनु',
    type: 'expression',
    example: {
      korean: '구입할 때 보험에 가입했어요.',
      english: 'I enrolled in insurance when I purchased it.',
      nepali: 'किन्दा बीमामा भर्ना भएँ।'
    }
  },
  {
    id: 25,
    page: 124,
    category: 'Additional',
    section: 'Extra Vocabulary',
    korean: '부담금',
    pronunciation: 'budamgeum',
    english: 'Deductible, excess (customer\'s share)',
    nepali: 'कटौती रकम (ग्राहकको हिस्सा)',
    type: 'noun',
    example: {
      korean: '고객 부담금을 제외하고 돌려받을 수 있어요.',
      english: 'You can get reimbursed excluding the customer\'s deductible.',
      nepali: 'ग्राहकको कटौती रकम बाहेक फिर्ता पाउन सकिन्छ।'
    }
  },
  {
    id: 26,
    page: 124,
    category: 'Additional',
    section: 'Extra Vocabulary',
    korean: '제외하다',
    pronunciation: 'jeoekhada',
    english: 'To exclude, to deduct',
    nepali: 'बाहेक गर्नु, कटौती गर्नु',
    type: 'verb',
    example: {
      korean: '세금을 제외한 가격이에요.',
      english: 'This is the price excluding tax.',
      nepali: 'कर बाहेकको मूल्य हो।'
    }
  },
  {
    id: 27,
    page: 125,
    category: 'Troubleshooting',
    section: 'Troubleshooting Actions',
    korean: '플러그를 뽑다',
    pronunciation: 'peulreogeureul ppopda',
    english: 'To unplug',
    nepali: 'प्लग निकाल्नु',
    type: 'expression',
    example: {
      korean: '플러그를 뽑았다가 다시 꽂아 보세요.',
      english: 'Try unplugging and plugging it back in.',
      nepali: 'प्लग निकालेर फेरि हाल्नुहोस्।'
    }
  },
  {
    id: 28,
    page: 125,
    category: 'Troubleshooting',
    section: 'Troubleshooting Actions',
    korean: '플러그를 꽂다',
    pronunciation: 'peulreogeureul kkotda',
    english: 'To plug in',
    nepali: 'प्लग हाल्नु',
    type: 'expression',
    example: {
      korean: '플러그를 잘 꽂았는지 확인해 보세요.',
      english: 'Check if the plug is inserted properly.',
      nepali: 'प्लग राम्ररी हालिएको छ कि छैन जाँच गर्नुहोस्।'
    }
  },
  {
    id: 29,
    page: 125,
    category: 'Troubleshooting',
    section: 'Troubleshooting Actions',
    korean: '밸브를 잠그다',
    pronunciation: 'baelbeureul jamgeuda',
    english: 'To close the valve',
    nepali: 'भल्भ बन्द गर्नु',
    type: 'expression',
    example: {
      korean: '가스 밸브를 잠갔는지 확인하세요.',
      english: 'Check if the gas valve is closed.',
      nepali: 'ग्यास भल्भ बन्द गरिएको छ कि छैन जाँच गर्नुहोस्।'
    }
  },
  {
    id: 30,
    page: 125,
    category: 'Troubleshooting',
    section: 'Troubleshooting Actions',
    korean: '밸브를 열다',
    pronunciation: 'baelbeureul yeolda',
    english: 'To open the valve',
    nepali: 'भल्भ खोल्नु',
    type: 'expression',
    example: {
      korean: '밸브를 열었는지 확인해 보세요.',
      english: 'Check if the valve is open.',
      nepali: 'भल्भ खोलिएको छ कि छैन जाँच गर्नुहोस्।'
    }
  },
  {
    id: 31,
    page: 125,
    category: 'Troubleshooting',
    section: 'Troubleshooting Actions',
    korean: '온도를 낮추다',
    pronunciation: 'ondoreul natchwuda',
    english: 'To lower the temperature',
    nepali: 'तापक्रम घटाउनु',
    type: 'expression',
    example: {
      korean: '온도가 높으면 온도를 낮춰 보세요.',
      english: 'If the temperature is high, try lowering it.',
      nepali: 'तापक्रम बढी छ भने घटाउनुहोस्।'
    }
  },
  {
    id: 32,
    page: 125,
    category: 'Troubleshooting',
    section: 'Troubleshooting Actions',
    korean: '온도를 높이다',
    pronunciation: 'ondoreul nopida',
    english: 'To raise the temperature',
    nepali: 'तापक्रम बढाउनु',
    type: 'expression',
    example: {
      korean: '방이 추우면 온도를 높이세요.',
      english: 'If the room is cold, raise the temperature.',
      nepali: 'कोठा चिसो छ भने तापक्रम बढाउनुहोस्।'
    }
  },
  {
    id: 33,
    page: 125,
    category: 'Troubleshooting',
    section: 'Troubleshooting Actions',
    korean: '펌프질을 하다',
    pronunciation: 'peompeujiureul hada',
    english: 'To pump / to use a plunger',
    nepali: 'पम्प गर्नु / प्लन्जर प्रयोग गर्नु',
    type: 'expression',
    example: {
      korean: '변기가 막히면 펌프질을 해 보세요.',
      english: 'If the toilet is clogged, try using a plunger.',
      nepali: 'शौचालय बन्द भए प्लन्जर प्रयोग गर्नुहोस्।'
    }
  },
  {
    id: 34,
    page: 125,
    category: 'Additional',
    section: 'Extra Vocabulary',
    korean: '뚫다',
    pronunciation: 'ttulta',
    english: 'To unclog',
    nepali: 'खोल्नु, बन्द भएको खोल्नु',
    type: 'verb',
    example: {
      korean: '세제를 사용해서 변기를 뚫었어요.',
      english: 'I unclogged the toilet using detergent.',
      nepali: 'सफाई पदार्थ प्रयोग गरेर शौचालय खोलेँ।'
    }
  },
  {
    id: 35,
    page: 125,
    category: 'Additional',
    section: 'Extra Vocabulary',
    korean: '세제',
    pronunciation: 'seje',
    english: 'Detergent, cleaning agent',
    nepali: 'सफाई पदार्थ, डिटर्जेन्ट',
    type: 'noun',
    example: {
      korean: '변기 뚫는 세제를 사용해 보세요.',
      english: 'Try using toilet unclogging detergent.',
      nepali: 'शौचालय खोल्ने सफाई पदार्थ प्रयोग गर्नुहोस्।'
    }
  },
  {
    id: 36,
    page: 125,
    category: 'Additional',
    section: 'Extra Vocabulary',
    korean: '막히다',
    pronunciation: 'makhida',
    english: 'To be clogged, blocked',
    nepali: 'बन्द हुनु, अवरुद्ध हुनु',
    type: 'verb',
    example: {
      korean: '일주일에 서너 번 이상 막혀요.',
      english: 'It gets clogged more than three or four times a week.',
      nepali: 'हप्तामा तीन चार पटक भन्दा बढी बन्द हुन्छ।'
    }
  },
  {
    id: 37,
    page: 128,
    category: 'Warranty',
    section: 'Warranty & Insurance',
    korean: '보증서',
    pronunciation: 'bojeongseo',
    english: 'Warranty certificate',
    nepali: 'वारेन्टी प्रमाणपत्र',
    type: 'noun',
    example: {
      korean: '전자 제품을 사면 보증서를 받아요.',
      english: 'When you buy electronics, you receive a warranty certificate.',
      nepali: 'इलेक्ट्रोनिक सामान किन्दा वारेन्टी प्रमाणपत्र पाइन्छ।'
    }
  },
  {
    id: 38,
    page: 128,
    category: 'Warranty',
    section: 'Warranty & Insurance',
    korean: '보증 기간',
    pronunciation: 'bojeung gigan',
    english: 'Warranty period',
    nepali: 'वारेन्टी अवधि',
    type: 'noun',
    example: {
      korean: '보증 기간은 보통 1년이에요.',
      english: 'The warranty period is usually one year.',
      nepali: 'वारेन्टी अवधि सामान्यतया एक वर्ष हो।'
    }
  },
  {
    id: 39,
    page: 128,
    category: 'Warranty',
    section: 'Warranty & Insurance',
    korean: '제조사',
    pronunciation: 'jejosa',
    english: 'Manufacturer',
    nepali: 'उत्पादक',
    type: 'noun',
    example: {
      korean: '제조사에서 무상 수리를 해 줘요.',
      english: 'The manufacturer provides free repairs.',
      nepali: 'उत्पादकले निःशुल्क मर्मत गरिदिन्छ।'
    }
  },
  {
    id: 40,
    page: 128,
    category: 'Additional',
    section: 'Extra Vocabulary',
    korean: '이물질',
    pronunciation: 'imurjil',
    english: 'Foreign substance, impurity',
    nepali: 'विदेशी पदार्थ, अशुद्धता',
    type: 'noun',
    example: {
      korean: '변기 안에 이물질이 들어갔어요.',
      english: 'A foreign substance got into the toilet.',
      nepali: 'शौचालयमा विदेशी पदार्थ पस्यो।'
    }
  },
  {
    id: 41,
    page: 128,
    category: 'Additional',
    section: 'Extra Vocabulary',
    korean: '전문가',
    pronunciation: 'jeonmunga',
    english: 'Specialist, expert',
    nepali: 'विशेषज्ञ',
    type: 'noun',
    example: {
      korean: '전문가에게 점검을 받으세요.',
      english: 'Get an inspection from a specialist.',
      nepali: 'विशेषज्ञबाट जाँच गराउनुहोस्।'
    }
  },
  {
    id: 42,
    page: 128,
    category: 'Additional',
    section: 'Extra Vocabulary',
    korean: '점검',
    pronunciation: 'jeomgeom',
    english: 'Inspection, examination',
    nepali: 'जाँच, निरीक्षण',
    type: 'noun',
    example: {
      korean: '서비스 센터에서 점검을 받으세요.',
      english: 'Please get an inspection at the service center.',
      nepali: 'सेवा केन्द्रमा जाँच गराउनुहोस्।'
    }
  },
  {
    id: 43,
    page: 121,
    category: 'Additional',
    section: 'Extra Vocabulary',
    korean: '예방 주사',
    pronunciation: 'yebang jusa',
    english: 'Preventive vaccination, immunization shot',
    nepali: 'रोकथाम खोप',
    type: 'noun',
    example: {
      korean: '예방 주사 맞을 때 많이 아팠나요?',
      english: 'Did it hurt a lot when getting the preventive shot?',
      nepali: 'रोकथाम खोप लगाउँदा धेरै दुख्यो?'
    }
  },
  {
    id: 44,
    page: 123,
    category: 'Additional',
    section: 'Extra Vocabulary',
    korean: '느려지다',
    pronunciation: 'neuryeojida',
    english: 'To slow down',
    nepali: 'ढिलो हुनु',
    type: 'verb',
    example: {
      korean: '며칠 전부터 속도가 좀 느려졌어요.',
      english: 'The speed has been a bit slow for a few days.',
      nepali: 'केही दिनदेखि गति अलि ढिलो भयो।'
    }
  },
  {
    id: 45,
    page: 128,
    category: 'Warranty',
    section: 'Warranty & Insurance',
    korean: '지불하다',
    pronunciation: 'jibulhada',
    english: 'To pay, to cover (costs)',
    nepali: 'तिर्नु, भुक्तानी गर्नु',
    type: 'verb',
    example: {
      korean: '고객 실수로 고장이 나면 수리 비용을 지불해야 해요.',
      english: 'If the malfunction is due to customer error, you must pay repair costs.',
      nepali: 'ग्राहकको गल्तीले बिग्रिएमा मर्मत खर्च तिर्नुपर्छ।'
    }
  }
];

// Combine all vocabulary
export const vocabulary = [
  ...breakdownVocabulary,
  ...deviceVocabulary,
  ...repairVocabulary,
  ...additionalVocabulary
];

// ============================================
// PAGE 121-122 - 문법 (Grammar)
// ============================================

export const grammar1 = {
  id: 1,
  page: 121,
  pattern: "V/A + 아/어서 그런지",
  meaning: {
    english: "Maybe because... / Perhaps because...",
    nepali: "शायद ... को कारणले / सायद ... भएकोले"
  },
  description: {
    english: "This pattern is used to speculate about the cause or reason for something. The speaker is not 100% certain but guesses that A might be the reason for B. It expresses uncertainty about the cause while acknowledging the result.",
    nepali: "यो ढाँचा कुनै कुराको कारण अनुमान गर्न प्रयोग गरिन्छ। वक्ता १००% निश्चित छैन तर A कारण B को कारण हुन सक्छ भनेर अनुमान गर्छ। यसले कारणको बारेमा अनिश्चितता व्यक्त गर्छ।"
  },
  whenToUse: {
    situations: [
      {
        situation: {
          english: "Guessing why something isn't working",
          nepali: "केहि किन काम नगरेको हो अनुमान गर्दा"
        },
        example: {
          korean: '지하에 있어서 그런지 와이파이 연결이 잘 안 돼요.',
          english: 'Maybe because I\'m underground, the Wi-Fi connection isn\'t working well.',
          nepali: 'शायद भूमिगत भएकोले वाइफाई जोडिन राम्ररी काम गर्दैन।'
        }
      },
      {
        situation: {
          english: "Guessing why you feel a certain way",
          nepali: "तपाईंलाई किन त्यस्तो लाग्छ अनुमान गर्दा"
        },
        example: {
          korean: '딱딱한 걸 계속 씹어서 그런지 이가 아프네요.',
          english: 'It seems my tooth hurts, maybe because I\'ve been chewing something hard.',
          nepali: 'कडा कुरा चपाइरहेकोले शायद दाँत दुख्छ।'
        }
      },
      {
        situation: {
          english: "Speculating about someone's background affecting their experience",
          nepali: "कसैको पृष्ठभूमिले उनको अनुभवलाई असर गरेको अनुमान गर्दा"
        },
        example: {
          korean: '더운 나라에서 와서 그런지 한국 겨울이 너무 추워요.',
          english: 'Perhaps because I come from a hot country, Korean winters are very cold.',
          nepali: 'शायद तातो देशबाट आएकोले कोरियाको जाडो धेरै चिसो छ।'
        }
      },
      {
        situation: {
          english: "Guessing why someone is not responding",
          nepali: "कसैले किन जवाफ नदिएको हो अनुमान गर्दा"
        },
        example: {
          korean: '동생이 아르바이트를 시작해서 그런지 전화를 잘 안 받아요.',
          english: 'Maybe because my younger sibling started a part-time job, they don\'t answer the phone often.',
          nepali: 'शायद भाइ/बहिनीले पार्ट-टाइम काम सुरु गरेकोले फोन राम्ररी उठाउँदैन।'
        }
      }
    ]
  },
  whereToUse: {
    english: "Used in both spoken and written Korean. Common in everyday conversation when making guesses or assumptions about causes.",
    nepali: "बोलेको र लेखेको दुवै कोरियनमा प्रयोग गरिन्छ। कारणको बारेमा अनुमान गर्दा दैनिक कुराकानीमा सामान्य।"
  },
  formality: {
    english: "Neutral. Can be used in both formal and informal settings.",
    nepali: "तटस्थ। औपचारिक र अनौपचारिक दुवै सेटिङमा प्रयोग गर्न सकिन्छ।"
  },
  formation: {
    rule: "Verb/Adjective stem + 아/어서 그런지",
    notes: {
      english: "Use 아서 그런지 after stems ending in ㅏ or ㅗ. Use 어서 그런지 for other vowels. 하다 becomes 해서 그런지.",
      nepali: "ㅏ वा ㅗ मा अन्त्य हुने stem पछि 아서 그런지 प्रयोग गर्नुहोस्। अन्य स्वरहरूको लागि 어서 그런지। 하다 => 해서 그런지 हुन्छ।"
    },
    conjugationTable: [
      {
        verb: '있다',
        stem: '있',
        result: '있어서 그런지',
        english: 'Maybe because (something) exists/is',
        nepali: 'शायद छ/भएकोले'
      },
      {
        verb: '오다',
        stem: '오',
        result: '와서 그런지',
        english: 'Maybe because (someone) came from',
        nepali: 'शायद आएकोले'
      },
      {
        verb: '씹다',
        stem: '씹',
        result: '씹어서 그런지',
        english: 'Maybe because of chewing',
        nepali: 'शायद चपाएकोले'
      },
      {
        verb: '시작하다',
        stem: '시작하',
        result: '시작해서 그런지',
        english: 'Maybe because of starting',
        nepali: 'शायद सुरु गरेकोले'
      }
    ]
  },
  comparisonWithSimilar: {
    english: "Compare with ~(으)ㄴ/는 것 같다 (it seems like...). While 아/어서 그런지 focuses on guessing the CAUSE, ~것 같다 focuses on guessing the RESULT or state.",
    nepali: "~(으)ㄴ/는 것 같다 (... जस्तो लाग्छ) सँग तुलना गर्नुहोस्। 아/어서 그런지 ले कारण अनुमान गर्छ, ~것 같다 ले नतिजा वा अवस्था अनुमान गर्छ।"
  },
  examples: [
    {
      context: { english: 'At a friend\'s house', nepali: 'साथीको घरमा' },
      korean: '지하에 있어서 그런지 와이파이 연결이 잘 안 돼요.',
      english: 'Maybe because I\'m underground, the Wi-Fi connection isn\'t working well.',
      nepali: 'शायद भूमिगत भएकोले वाइफाई जोडिन राम्ररी काम गर्दैन।'
    },
    {
      context: { english: 'At the dentist', nepali: 'दन्त चिकित्सकमा' },
      korean: '딱딱한 걸 계속 씹어서 그런지 이가 아프네요.',
      english: 'It seems my tooth hurts, maybe because I\'ve been chewing something hard.',
      nepali: 'कडा कुरा चपाइरहेकोले शायद दाँत दुख्छ।'
    },
    {
      context: { english: 'Talking about Korean weather', nepali: 'कोरियाको मौसमको बारेमा कुरा गर्दा' },
      korean: '더운 나라에서 와서 그런지 한국 겨울이 너무 추워요.',
      english: 'Perhaps because I come from a hot country, Korean winters are very cold.',
      nepali: 'शायद तातो देशबाट आएकोले कोरियाको जाडो धेरै चिसो छ।'
    },
    {
      context: { english: 'Talking about a sibling', nepali: 'भाइ/बहिनीको बारेमा कुरा गर्दा' },
      korean: '동생이 아르바이트를 시작해서 그런지 전화를 잘 안 받아요.',
      english: 'Maybe because my younger sibling started a part-time job, they don\'t answer the phone often.',
      nepali: 'शायद भाइ/बहिनीले पार्ट-टाइम काम सुरु गरेकोले फोन राम्ररी उठाउँदैन।'
    },
    {
      context: { english: 'At a service center', nepali: 'सेवा केन्द्रमा' },
      korean: '가방 안에 있어서 그런지 많이 깨지지 않았네요.',
      english: 'Perhaps because it was in the bag, it didn\'t crack that much.',
      nepali: 'शायद झोला भित्र भएकोले धेरै फुटेन।'
    }
  ]
};

export const grammar2 = {
  id: 2,
  page: 122,
  pattern: "A + (으)ㄴ가요? / V + 나요?",
  meaning: {
    english: "Soft/polite question ending (Is it...? / Does it...?)",
    nepali: "नम्र/विनम्र प्रश्न अन्त्य (के हो...? / के गर्छ...?)"
  },
  description: {
    english: "These endings are used to ask questions in a softer, more indirect way. (으)ㄴ가요? is used with adjectives and 나요? is used with verbs. They sound gentler and less direct than the standard question ending ~아/어요?",
    nepali: "यी अन्त्यहरू अझ नरम, अप्रत्यक्ष तरिकाले प्रश्न सोध्न प्रयोग गरिन्छ। (으)ㄴ가요? विशेषणसँग र 나요? क्रियासँग प्रयोग गरिन्छ। मानक प्रश्न अन्त्य ~아/어요? भन्दा कोमल र कम प्रत्यक्ष सुनिन्छ।"
  },
  whenToUse: {
    situations: [
      {
        situation: {
          english: "Asking politely about a repair process",
          nepali: "मर्मत प्रक्रियाको बारेमा विनम्ररूपमा सोध्दा"
        },
        example: {
          korean: '예약을 해야 되나요?',
          english: 'Do I need to make a reservation?',
          nepali: 'के रिजर्भेसन गर्नुपर्छ?'
        }
      },
      {
        situation: {
          english: "Asking about time needed for repair",
          nepali: "मर्मतको लागि लाग्ने समयको बारेमा सोध्दा"
        },
        example: {
          korean: '고치는 데 얼마나 걸리나요?',
          english: 'How long will it take to fix?',
          nepali: 'ठीक गर्न कति समय लाग्छ?'
        }
      },
      {
        situation: {
          english: "Asking about a sudden problem",
          nepali: "अचानक समस्याको बारेमा सोध्दा"
        },
        example: {
          korean: '갑자기 문제가 생긴 건가요?',
          english: 'Did the problem occur suddenly?',
          nepali: 'के समस्या अचानक आयो?'
        }
      }
    ]
  },
  whereToUse: {
    english: "Very common in polite conversation, customer service situations, and when speaking with people you don't know well.",
    nepali: "विनम्र कुराकानी, ग्राहक सेवा परिस्थिति, र नचिनेका मान्छेसँग बोल्दा धेरै सामान्य।"
  },
  formality: {
    english: "Polite/formal. Softer than direct questions.",
    nepali: "विनम्र/औपचारिक। प्रत्यक्ष प्रश्नभन्दा कोमल।"
  },
  formation: {
    rule: "Adjective stem + (으)ㄴ가요? / Verb stem + 나요?",
    notes: {
      english: "For adjectives: add ㄴ가요 if the stem ends in a vowel, 은가요 if it ends in a consonant. For verbs: simply add 나요 to the stem. Past tense: V + 았/었나요?",
      nepali: "विशेषणको लागि: स्वरमा अन्त्य हुने stem मा ㄴ가요, व्यञ्जनमा अन्त्य हुने stem मा 은가요 जोड्नुहोस्। क्रियाको लागि: stem मा 나요 जोड्नुहोस्। भूतकाल: V + 았/었나요?"
    },
    conjugationTable: [
      {
        verb: '많다 (adj)',
        stem: '많',
        result: '많은가요?',
        english: 'Are there many...?',
        nepali: 'के धेरै छ...?'
      },
      {
        verb: '걸리다 (verb)',
        stem: '걸리',
        result: '걸리나요?',
        english: 'Does it take...?',
        nepali: 'के लाग्छ...?'
      },
      {
        verb: '아프다 (adj)',
        stem: '아프',
        result: '아픈가요?',
        english: 'Does it hurt?',
        nepali: 'के दुख्छ?'
      },
      {
        verb: '되다 (verb)',
        stem: '되',
        result: '되나요?',
        english: 'Is it possible? / Does it work?',
        nepali: 'के हुन्छ? / के काम गर्छ?'
      },
      {
        verb: '생기다 (verb, past)',
        stem: '생기',
        result: '생긴 건가요?',
        english: 'Did it happen?',
        nepali: 'के भयो?'
      }
    ]
  },
  comparisonWithSimilar: {
    english: "Compare with standard ~아/어요? questions. (으)ㄴ가요?/나요? are softer and more tentative. Use standard forms for straightforward questions; use these forms when you want to sound more polite or less demanding.",
    nepali: "मानक ~아/어요? प्रश्नसँग तुलना गर्नुहोस्। (으)ㄴ가요?/나요? अझ कोमल र अस्थायी छन्। सोझो प्रश्नको लागि मानक प्रयोग गर्नुहोस्; अझ विनम्र सुनिन यी प्रयोग गर्नुहोस्।"
  },
  examples: [
    {
      context: { english: 'At a service center', nepali: 'सेवा केन्द्रमा' },
      korean: '노트북이 고장 나서 서비스 센터에 방문하려고 하는데 예약을 해야 되나요?',
      english: 'My laptop broke down, and I\'m planning to visit the service center. Do I need to make a reservation?',
      nepali: 'ल्यापटप बिग्रियो र सेवा केन्द्रमा जान चाहन्छु। के रिजर्भेसन गर्नुपर्छ?'
    },
    {
      context: { english: 'Asking about repair time', nepali: 'मर्मत समयको बारेमा सोध्दा' },
      korean: '고치는 데 얼마나 걸리나요?',
      english: 'How long will it take to fix?',
      nepali: 'ठीक गर्न कति समय लाग्छ?'
    },
    {
      context: { english: 'At a doctor\'s office', nepali: 'डाक्टरको कार्यालयमा' },
      korean: '예방 주사 맞을 때 많이 아팠나요?',
      english: 'Did it hurt a lot when getting the preventive shot?',
      nepali: 'रोकथाम खोप लगाउँदा धेरै दुख्यो?'
    },
    {
      context: { english: 'Asking about Korean learning', nepali: 'कोरियन सिक्ने बारेमा सोध्दा' },
      korean: '한국어를 배우는 사람이 많은가요?',
      english: 'Are there many people learning Korean?',
      nepali: 'कोरियन सिक्ने मान्छे धेरै छन्?'
    },
    {
      context: { english: 'Asking about repair cost', nepali: 'मर्मत खर्चको बारेमा सोध्दा' },
      korean: '비용이 얼마나 드나요?',
      english: 'How much will it cost?',
      nepali: 'कति खर्च लाग्छ?'
    }
  ]
};

// ============================================
// PAGE 123 - 말하기 (Speaking)
// ============================================

export const speaking = {
  page: 123,
  title: {
    korean: '말하기 - 서비스 센터에 문의하기',
    english: 'Speaking - Inquiring at a Service Center',
    nepali: 'बोल्ने - सेवा केन्द्रमा सोध्ने'
  },
  mainDialogue: {
    id: 1,
    title: {
      korean: '노트북 문제 문의',
      english: 'Laptop Problem Inquiry',
      nepali: 'ल्यापटप समस्या सोधपुछ'
    },
    situation: {
      korean: '아나이스가 노트북 문제로 서비스 센터에 전화합니다.',
      english: 'Anais calls the service center about a laptop problem.',
      nepali: 'अनाइसले ल्यापटप समस्याको बारेमा सेवा केन्द्रमा फोन गर्छिन्।'
    },
    conversation: [
      {
        speaker: '아나이스',
        korean: '노트북에 문제가 있어서 서비스 문의 좀 드리려고 하는데요.',
        english: 'I\'m trying to inquire about a problem with my laptop.',
        nepali: 'मेरो ल्यापटपमा समस्या छ, सेवा सोधपुछ गर्न चाहन्छु।'
      },
      {
        speaker: '직원',
        korean: '네, 고객님. 어떤 문제가 있는지 말씀해 주시겠어요?',
        english: 'Yes, sir/ma\'am. Could you please tell me what the issue is?',
        nepali: 'जी, ग्राहकजी। कस्तो समस्या छ भन्नुहोस् न?'
      },
      {
        speaker: '아나이스',
        korean: '어제부터 전원이 안 켜지는데 어떻게 해야 되나요?',
        english: 'Since yesterday, the power hasn\'t been turning on. What should I do?',
        nepali: 'हिजोदेखि पावर अन हुँदैन, के गर्नुपर्छ?'
      },
      {
        speaker: '직원',
        korean: '갑자기 문제가 생긴 건가요? 혹시 다른 문제는 없으셨어요?',
        english: 'Did the problem occur suddenly? Have you experienced any other issues?',
        nepali: 'के समस्या अचानक आयो? अरू कुनै समस्या थियो?'
      },
      {
        speaker: '아나이스',
        korean: '며칠 전부터 속도가 좀 느려졌어요.',
        english: 'The speed has been a bit slow for a few days.',
        nepali: 'केही दिनदेखि गति अलि ढिलो भयो।'
      },
      {
        speaker: '직원',
        korean: '고객님, 가까운 서비스 센터에 방문하셔서 점검을 받아 보셔야 할 것 같습니다.',
        english: 'Ma\'am, it seems like you should visit a nearby service center for an inspection.',
        nepali: 'ग्राहकजी, नजिकैको सेवा केन्द्रमा जाएर जाँच गराउनुपर्ला।'
      },
      {
        speaker: '아나이스',
        korean: '아, 그래요? 그럼 예약 좀 부탁드려요.',
        english: 'Oh, really? Then, please make a reservation for me.',
        nepali: 'अ, हो? त्यसो भए रिजर्भेसन गरिदिनुहोस्।'
      }
    ]
  }
};

// ============================================
// PAGE 124 - 듣기 (Listening)
// ============================================

export const listeningDialogue = {
  id: 2,
  title: {
    korean: '휴대 전화 수리',
    english: 'Mobile Phone Repair',
    nepali: 'मोबाइल फोन मर्मत'
  },
  situation: {
    korean: '라흐만이 서비스 센터에 휴대 전화 수리를 하러 갑니다.',
    english: 'Rahman goes to the service center to get his mobile phone repaired.',
    nepali: 'रहमान मोबाइल फोन मर्मत गर्न सेवा केन्द्रमा जान्छन्।'
  },
  conversation: [
    {
      speaker: '직원(여)',
      korean: '47번 고객님. 어서 오세요. 어떤 문제 때문에 방문하셨어요?',
      english: 'Customer number 47. Welcome. What issue have you come to discuss?',
      nepali: '४७ नम्बर ग्राहकजी। स्वागत छ। कस्तो समस्याको कारण आउनुभयो?'
    },
    {
      speaker: '라흐만(남)',
      korean: '휴대 전화 액정이 깨졌어요.',
      english: 'My mobile phone screen is cracked.',
      nepali: 'मोबाइल फोनको स्क्रिन फुटेको छ।'
    },
    {
      speaker: '직원(여)',
      korean: '네, 제가 잠시 점검해 보겠습니다. 언제, 어떻게 하시다가 깨진 건가요?',
      english: 'Alright, let me inspect it for a moment. When and how did it break?',
      nepali: 'जी, म एक छिन जाँच गर्छु। कहिले, कसरी फुट्यो?'
    },
    {
      speaker: '라흐만(남)',
      korean: '가방 안에 있었는데 가방을 떨어뜨려서 그렇게 됐어요. 일주일 전에요.',
      english: 'It was in my bag, and it cracked when I dropped the bag. It happened a week ago.',
      nepali: 'झोला भित्र थियो, झोला खसाल्दा त्यसो भयो। एक हप्ता अघि।'
    },
    {
      speaker: '직원(여)',
      korean: '알겠습니다. 가방 안에 있어서 그런지 많이 깨지지 않았네요. 액정만 바꾸면 문제없을 것 같습니다.',
      english: 'I see. It seems it didn\'t break much, perhaps because it was inside the bag. If we just change the screen, there shouldn\'t be any problems.',
      nepali: 'बुझेँ। शायद झोला भित्र भएकोले धेरै फुटेन। स्क्रिन मात्र बदल्दा ठीक हुनेछ।'
    },
    {
      speaker: '라흐만(남)',
      korean: '구입할 때 보험에 가입했는데 비용이 얼마나 드나요?',
      english: 'I enrolled in insurance when I purchased it. How much will it cost?',
      nepali: 'किन्दा बीमामा भर्ना भएको थिएँ, कति खर्च लाग्छ?'
    },
    {
      speaker: '직원(여)',
      korean: '수리가 끝난 후에 영수증을 보험사로 보내시면 고객 부담금을 제외하고 돌려받으실 수 있습니다. 자세한 안내는 통신사 고객 센터로 문의해 보십시오.',
      english: 'After the repair is completed, you can submit the receipt to the insurance company and get reimbursed excluding the customer\'s deductible. For more details, please inquire at the telecom company\'s customer service center.',
      nepali: 'मर्मत सकिएपछि रसिद बीमा कम्पनीमा पठाउनुभयो भने ग्राहक कटौती रकम बाहेक फिर्ता पाउनुहुन्छ। विस्तृत जानकारीको लागि टेलिकम कम्पनीको ग्राहक सेवा केन्द्रमा सोध्नुहोस्।'
    }
  ]
};

// ============================================
// PAGE 125 - 읽기 (Reading)
// ============================================

export const faqReading = {
  id: 1,
  title: {
    korean: '자주 묻는 질문(FAQ)',
    english: 'Frequently Asked Questions (FAQ)',
    nepali: 'बारम्बार सोधिने प्रश्नहरू (FAQ)'
  },
  content: {
    korean: '텔레비전 전원이 안 켜져요. 변기가 막혔어요. 가스불이 안 들어와요. 냉동이 잘 안 돼요. 노트북 화면이 안 나와요. 휴대 전화 속도가 느려졌어요. 이런 문제가 생겼을 때 먼저 해 볼 수 있는 방법들이 있습니다. 플러그를 뽑았다가 다시 꽂아 보세요. 밸브를 열었는지 확인해 보세요. 온도를 낮춰 보세요. 전원을 껐다가 켜 보세요. 앱을 종료하거나 불필요한 데이터를 삭제해 보세요.',
    english: 'The TV isn\'t turning on. The toilet is clogged. The gas isn\'t coming on. The freezer isn\'t working well. The laptop screen isn\'t displaying. The mobile phone has slowed down. When these kinds of problems occur, there are things you can try first. Try unplugging and plugging it back in. Check if the valve is open. Try lowering the temperature. Try turning off and on the power. Try closing apps or deleting unnecessary data.',
    nepali: 'टिभी चल्दैन। शौचालय बन्द भयो। ग्यास आउँदैन। फ्रिजर राम्ररी काम गर्दैन। ल्यापटप स्क्रिन देखिँदैन। मोबाइल फोन ढिलो भयो। यस्ता समस्या आउँदा पहिले प्रयास गर्न सकिने तरिकाहरू छन्। प्लग निकालेर फेरि हाल्नुहोस्। भल्भ खोलिएको छ कि छैन जाँच गर्नुहोस्। तापक्रम घटाउनुहोस्। पावर अफ गरेर अन गर्नुहोस्। एप बन्द गर्नुहोस् वा अनावश्यक डाटा मेटाउनुहोस्।'
  },
  keyPoints: [
    {
      korean: '문제가 생기면 먼저 간단한 방법을 시도해 보세요.',
      english: 'When a problem occurs, try simple solutions first.',
      nepali: 'समस्या आएमा पहिले सजिलो उपाय प्रयास गर्नुहोस्।'
    },
    {
      korean: '플러그를 확인하고, 전원을 껐다 켜 보세요.',
      english: 'Check the plug and try turning the power off and on.',
      nepali: 'प्लग जाँच गर्नुहोस् र पावर अफ/अन गर्नुहोस्।'
    },
    {
      korean: '간단한 방법으로 해결이 안 되면 전문가에게 연락하세요.',
      english: 'If simple methods don\'t work, contact a specialist.',
      nepali: 'सजिलो तरिकाले ठीक नभए विशेषज्ञलाई सम्पर्क गर्नुहोस्।'
    }
  ]
};

export const toiletQnAReading = {
  id: 2,
  title: {
    korean: '변기가 자주 막힐 때',
    english: 'When the Toilet Frequently Gets Clogged',
    nepali: 'शौचालय बारम्बार बन्द हुँदा'
  },
  content: {
    korean: '저희 집 변기가 자주 막혀요. 변기를 많이 사용하지 않는데 너무 자주 막힙니다. 일주일에 서너 번 이상 막히면 전문가 도움을 받으셔야 합니다. 변기가 막히는 이유는 여러 가지가 있습니다. 오래 사용하셨거나 물의 양이 부족해서 생기는 문제일 수도 있고, 변기 안에 이물질이 들어간 경우도 생각해 볼 수 있습니다.',
    english: 'Our toilet frequently gets clogged. Even though we don\'t use it that much, it gets clogged too often. If it gets clogged more than three or four times a week, you should seek professional help. There are various reasons for the toilet clogging — it might be due to prolonged usage or insufficient water, and there might also be foreign substances inside the toilet.',
    nepali: 'हाम्रो घरको शौचालय बारम्बार बन्द हुन्छ। धेरै प्रयोग नगरे पनि धेरै पटक बन्द हुन्छ। हप्तामा तीन-चार पटक भन्दा बढी बन्द हुन्छ भने विशेषज्ञको मद्दत लिनुपर्छ। शौचालय बन्द हुनुको धेरै कारण हुन सक्छ — लामो समयसम्म प्रयोग वा पानीको अपर्याप्तताले हुन सक्छ, र शौचालय भित्र विदेशी पदार्थ पसेको पनि हुन सक्छ।'
  },
  keyPoints: [
    {
      korean: '일주일에 서너 번 이상 막히면 전문가에게 연락하세요.',
      english: 'If it clogs more than 3-4 times a week, contact a professional.',
      nepali: 'हप्तामा ३-४ पटक भन्दा बढी बन्द हुन्छ भने विशेषज्ञलाई सम्पर्क गर्नुहोस्।'
    },
    {
      korean: '이물질이 들어간 경우 펌프질이나 세제만으로는 해결이 안 됩니다.',
      english: 'If foreign substances are involved, a plunger or detergent alone won\'t solve the issue.',
      nepali: 'विदेशी पदार्थ पसेको भए प्लन्जर वा सफाई पदार्थले मात्र ठीक हुँदैन।'
    }
  ]
};

export const warrantyReading = {
  id: 3,
  title: {
    korean: '전자 제품 보증 기간',
    english: 'Electronic Product Warranty Period',
    nepali: 'इलेक्ट्रोनिक उत्पादन वारेन्टी अवधि'
  },
  content: {
    korean: '전자 제품을 사면 보증서를 받는다. 보증서에는 모델명, 구입 일자, 보증 내용, 보증 기간 등이 있다. 보증 기간이란 제조사나 판매자가 소비자에게 무료 수리를 약속한 기간을 말한다. 보증 기간은 구입 일자를 기준으로 하며, 구입 일자는 보증서나 영수증으로 확인한다. 보증서가 있다고 해서 보증 기간 내에 언제나 무상 수리를 받는 것은 아니다. 정상적인 상태에서 발생한 고장에 대해서는 무상 수리가 가능하지만 사용 설명서의 주의 사항을 지키지 않았거나 고객의 실수로 고장이 난 경우에는 수리 비용을 지불해야 한다.',
    english: 'When you purchase electronics, you receive a warranty certificate. The warranty includes the model name, purchase date, warranty terms, and warranty period. The warranty period is the time during which the manufacturer or seller promises free repairs. The warranty is based on the purchase date, verified by the certificate or receipt. Having a warranty doesn\'t always guarantee free repairs. Free repairs are available for malfunctions under normal conditions, but if user manual precautions weren\'t followed or the malfunction was due to customer error, repair costs must be paid.',
    nepali: 'इलेक्ट्रोनिक सामान किन्दा वारेन्टी प्रमाणपत्र पाइन्छ। वारेन्टीमा मोडेल नाम, किनेको मिति, वारेन्टी सर्तहरू, र वारेन्टी अवधि हुन्छ। वारेन्टी अवधि भनेको उत्पादक वा बिक्रेताले उपभोक्तालाई निःशुल्क मर्मतको प्रतिज्ञा गरेको अवधि हो। वारेन्टी किनेको मिति अनुसार हुन्छ, प्रमाणपत्र वा रसिदबाट प्रमाणित गरिन्छ। वारेन्टी भएकोले सधैं निःशुल्क मर्मत हुने होइन। सामान्य अवस्थामा भएको खराबीको लागि निःशुल्क मर्मत उपलब्ध छ, तर प्रयोगकर्ता म्यानुअलको सावधानी नअपनाएमा वा ग्राहकको गल्तीले भएको खराबीमा मर्मत खर्च तिर्नुपर्छ।'
  },
  keyPoints: [
    {
      korean: '스마트폰이나 일반 전자 제품 보증 기간은 보통 1년입니다.',
      english: 'Smartphones and general electronics typically have a 1-year warranty.',
      nepali: 'स्मार्टफोन र सामान्य इलेक्ट्रोनिक्सको वारेन्टी सामान्यतया १ वर्ष हुन्छ।'
    },
    {
      korean: '에어컨 등 계절 제품은 보통 2년입니다.',
      english: 'Seasonal products like air conditioners typically have a 2-year warranty.',
      nepali: 'एयर कन्डिसनर जस्ता मौसमी उत्पादनहरूको वारेन्टी सामान्यतया २ वर्ष हुन्छ।'
    },
    {
      korean: '고객 실수로 인한 고장은 무상 수리가 아닙니다.',
      english: 'Malfunctions due to customer error are not covered by free repair.',
      nepali: 'ग्राहकको गल्तीले भएको खराबीमा निःशुल्क मर्मत हुँदैन।'
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
        question: '하수구가 _____ 물이 안 내려가요.',
        nepaliQuestion: 'ढल _____ पानी तल जाँदैन।',
        hint: 'clogged',
        answer: '막혀서'
      },
      {
        question: '노트북 _____ 안 켜져요.',
        nepaliQuestion: 'ल्यापटपको _____ अन हुँदैन।',
        hint: 'power',
        answer: '전원이'
      },
      {
        question: '보증 기간이라서 _____ 수리를 받았어요.',
        nepaliQuestion: 'वारेन्टी अवधि भएकोले _____ मर्मत पाएँ।',
        hint: 'free',
        answer: '무상'
      },
      {
        question: '가방을 _____서 액정이 깨졌어요.',
        nepaliQuestion: 'झोला _____ले स्क्रिन फुट्यो।',
        hint: 'dropped',
        answer: '떨어뜨려'
      },
      {
        question: '서비스 센터에 _____ 점검을 받으세요.',
        nepaliQuestion: 'सेवा केन्द्रमा _____ जाँच गराउनुहोस्।',
        hint: 'visit',
        answer: '방문해서'
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
        question: 'The Wi-Fi isn\'t connecting.',
        nepaliQuestion: 'वाइफाई जोडिँदैन।',
        answer: '와이파이 연결이 안 돼요.'
      },
      {
        question: 'Maybe because it\'s underground, the signal is weak.',
        nepaliQuestion: 'शायद भूमिगत भएकोले सिग्नल कमजोर छ।',
        answer: '지하에 있어서 그런지 신호가 약해요.'
      },
      {
        question: 'How long will the repair take?',
        nepaliQuestion: 'मर्मत कति समय लाग्छ?',
        answer: '수리하는 데 얼마나 걸리나요?'
      },
      {
        question: 'Try unplugging and plugging it back in.',
        nepaliQuestion: 'प्लग निकालेर फेरि हाल्नुहोस्।',
        answer: '플러그를 뽑았다가 다시 꽂아 보세요.'
      },
      {
        question: 'I received free repair because it was within the warranty period.',
        nepaliQuestion: 'वारेन्टी अवधि भित्र भएकोले निःशुल्क मर्मत पाएँ।',
        answer: '보증 기간이라서 무상 수리를 받았어요.'
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
        question: '더운 나라에서 _____ 한국 겨울이 너무 추워요.',
        nepaliQuestion: 'तातो देशबाट _____ कोरियाको जाडो धेरै चिसो छ।',
        options: ['와서 그런지', '오니까', '오면', '와도'],
        answer: '와서 그런지'
      },
      {
        question: '예약을 해야 _____?',
        nepaliQuestion: 'रिजर्भेसन गर्नुपर्छ _____?',
        options: ['되나요', '됐어요', '된다', '되네요'],
        answer: '되나요'
      },
      {
        question: '스마트폰 보증 기간은 보통 얼마입니까?',
        nepaliQuestion: 'स्मार्टफोनको वारेन्टी अवधि सामान्यतया कति हो?',
        options: ['6개월', '1년', '2년', '3년'],
        answer: '1년'
      }
    ]
  }
];

// ============================================
// Combined exports for App.jsx compatibility
// ============================================

export const readingPassages = [faqReading, toiletQnAReading, warrantyReading];
export const grammar = [grammar1, grammar2];
export const dialogues = [speaking.mainDialogue, listeningDialogue];

export default {
  chapterInfo,
  breakdownVocabulary,
  deviceVocabulary,
  repairVocabulary,
  additionalVocabulary,
  vocabulary,
  grammar1,
  grammar2,
  grammar,
  speaking,
  listeningDialogue,
  faqReading,
  toiletQnAReading,
  warrantyReading,
  readingPassages,
  dialogues,
  practiceExercises
};
