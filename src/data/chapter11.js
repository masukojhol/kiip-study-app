// KIIP Level 3 - Chapter 11: 부동산 (Real Estate)
// Pages 144-153

export const chapterInfo = {
  chapter: 11,
  title: {
    korean: '부동산',
    english: 'Real Estate',
    nepali: 'घरजग्गा'
  },
  pageRange: '144-153',
  objectives: {
    vocabulary: {
      korean: '집 구하기와 주거 환경',
      english: 'House Hunting and Living Environment',
      nepali: 'घर खोज्ने र बसोबास वातावरण'
    },
    grammar: [
      {
        korean: 'V/A + (는/은) 데다가',
        english: 'In addition to / Moreover',
        nepali: 'त्यसमा थप / यसबाहेक'
      },
      {
        korean: 'V + 는다/ㄴ다, A + 다 (Narrative form)',
        english: 'Narrative/Report writing style',
        nepali: 'कथात्मक/रिपोर्ट लेखन शैली'
      }
    ],
    activities: [
      {
        korean: '집 구하기에 대해 이야기하기',
        english: 'Talking about house hunting',
        nepali: 'घर खोज्ने बारेमा कुरा गर्ने'
      },
      {
        korean: '집 보기 체크리스트 읽기',
        english: 'Reading house viewing checklist',
        nepali: 'घर हेर्ने चेकलिस्ट पढ्ने'
      }
    ],
    culture: {
      korean: '쉐어하우스 문화',
      english: 'Share House Culture',
      nepali: 'शेयर हाउस संस्कृति'
    }
  }
};

// ============================================
// PAGE 144 - 어휘 (Vocabulary)
// ============================================

// Section 1: Housing Types (집의 종류)
export const housingTypeVocabulary = [
  {
    id: 1,
    page: 144,
    category: 'Housing Types',
    section: '집의 종류',
    korean: '주택',
    pronunciation: 'jutaek',
    english: 'House',
    nepali: 'घर',
    type: 'noun',
    example: {
      korean: '한국에서는 주택보다 아파트가 더 많아요.',
      english: 'In Korea, there are more apartments than houses.',
      nepali: 'कोरियामा घरभन्दा अपार्टमेन्ट बढी छन्।'
    }
  },
  {
    id: 2,
    page: 144,
    category: 'Housing Types',
    section: '집의 종류',
    korean: '아파트',
    pronunciation: 'apateu',
    english: 'Apartment',
    nepali: 'अपार्टमेन्ट',
    type: 'noun',
    example: {
      korean: '우리 가족은 아파트에 살고 있어요.',
      english: 'Our family lives in an apartment.',
      nepali: 'हाम्रो परिवार अपार्टमेन्टमा बस्छ।'
    }
  },
  {
    id: 3,
    page: 144,
    category: 'Housing Types',
    section: '집의 종류',
    korean: '빌라',
    pronunciation: 'billa',
    english: 'Villa (low-rise apartment)',
    nepali: 'भिला (कम तल्लाको अपार्टमेन्ट)',
    type: 'noun',
    example: {
      korean: '빌라는 아파트보다 보통 더 싸요.',
      english: 'Villas are usually cheaper than apartments.',
      nepali: 'भिला सामान्यतया अपार्टमेन्टभन्दा सस्तो हुन्छ।'
    }
  },
  {
    id: 4,
    page: 144,
    category: 'Housing Types',
    section: '집의 종류',
    korean: '오피스텔',
    pronunciation: 'opiseutel',
    english: 'Officetel (office + hotel)',
    nepali: 'अफिसटेल (कार्यालय + होटल)',
    type: 'noun',
    example: {
      korean: '혼자 사는 사람들은 오피스텔을 많이 찾아요.',
      english: 'People living alone often look for officetels.',
      nepali: 'एक्लै बस्नेहरूले अफिसटेल धेरै खोज्छन्।'
    }
  },
  {
    id: 5,
    page: 144,
    category: 'Housing Types',
    section: '집의 종류',
    korean: '원룸',
    pronunciation: 'wonrum',
    english: 'Studio apartment (one room)',
    nepali: 'स्टुडियो अपार्टमेन्ट (एक कोठा)',
    type: 'noun',
    example: {
      korean: '대학생들은 보통 원룸에 살아요.',
      english: 'College students usually live in studio apartments.',
      nepali: 'विश्वविद्यालयका विद्यार्थीहरू सामान्यतया स्टुडियो अपार्टमेन्टमा बस्छन्।'
    }
  },
  {
    id: 6,
    page: 144,
    category: 'Housing Types',
    section: '집의 종류',
    korean: '기숙사',
    pronunciation: 'gisuksa',
    english: 'Dormitory',
    nepali: 'छात्रावास',
    type: 'noun',
    example: {
      korean: '회사에서 기숙사를 제공해요.',
      english: 'The company provides a dormitory.',
      nepali: 'कम्पनीले छात्रावास उपलब्ध गराउँछ।'
    }
  },
  {
    id: 7,
    page: 144,
    category: 'Housing Types',
    section: '집의 종류',
    korean: '쉐어하우스',
    pronunciation: 'sweeeohaujeu',
    english: 'Share house',
    nepali: 'शेयर हाउस',
    type: 'noun',
    example: {
      korean: '쉐어하우스는 젊은 사람들에게 인기가 많아요.',
      english: 'Share houses are popular among young people.',
      nepali: 'शेयर हाउस युवाहरूमा लोकप्रिय छ।'
    }
  }
];

// Section 2: Rental Systems (임대 방식)
export const rentalSystemVocabulary = [
  {
    id: 8,
    page: 144,
    category: 'Rental Systems',
    section: '임대 방식',
    korean: '집 구하기',
    pronunciation: 'jip guhagi',
    english: 'House hunting',
    nepali: 'घर खोज्ने',
    type: 'noun',
    example: {
      korean: '집 구하기가 쉽지 않아요.',
      english: 'House hunting is not easy.',
      nepali: 'घर खोज्न सजिलो छैन।'
    }
  },
  {
    id: 9,
    page: 144,
    category: 'Rental Systems',
    section: '임대 방식',
    korean: '매매',
    pronunciation: 'maemae',
    english: 'Buying and selling (property)',
    nepali: 'किनबेच',
    type: 'noun',
    example: {
      korean: '이 아파트는 매매로만 가능해요.',
      english: 'This apartment is only available for purchase.',
      nepali: 'यो अपार्टमेन्ट किनबेचमा मात्र उपलब्ध छ।'
    }
  },
  {
    id: 10,
    page: 144,
    category: 'Rental Systems',
    section: '임대 방식',
    korean: '임대',
    pronunciation: 'imdae',
    english: 'Rental / Lease',
    nepali: 'भाडा / लिज',
    type: 'noun',
    example: {
      korean: '임대 조건을 확인하세요.',
      english: 'Please check the rental conditions.',
      nepali: 'भाडाको सर्तहरू जाँच गर्नुहोस्।'
    }
  },
  {
    id: 11,
    page: 144,
    category: 'Rental Systems',
    section: '임대 방식',
    korean: '전세',
    pronunciation: 'jeonse',
    english: 'Jeonse (lump-sum deposit lease)',
    nepali: 'जोन्से (एकमुष्ट धरौटी भाडा)',
    type: 'noun',
    example: {
      korean: '전세로 집을 구하고 있어요.',
      english: 'I\'m looking for a place on jeonse.',
      nepali: 'म जोन्सेमा घर खोज्दैछु।'
    }
  },
  {
    id: 12,
    page: 144,
    category: 'Rental Systems',
    section: '임대 방식',
    korean: '월세',
    pronunciation: 'wolse',
    english: 'Monthly rent',
    nepali: 'मासिक भाडा',
    type: 'noun',
    example: {
      korean: '월세가 50만 원이에요.',
      english: 'The monthly rent is 500,000 won.',
      nepali: 'मासिक भाडा ५ लाख वन हो।'
    }
  },
  {
    id: 13,
    page: 144,
    category: 'Rental Systems',
    section: '임대 방식',
    korean: '보증금',
    pronunciation: 'bojeunggeum',
    english: 'Security deposit',
    nepali: 'धरौटी',
    type: 'noun',
    example: {
      korean: '보증금은 천만 원이에요.',
      english: 'The security deposit is 10 million won.',
      nepali: 'धरौटी एक करोड वन हो।'
    }
  },
  {
    id: 14,
    page: 144,
    category: 'Rental Systems',
    section: '임대 방식',
    korean: '부동산',
    pronunciation: 'budongsan',
    english: 'Real estate / Real estate agency',
    nepali: 'घरजग्गा / घरजग्गा एजेन्सी',
    type: 'noun',
    example: {
      korean: '부동산에 가서 집을 알아봤어요.',
      english: 'I went to the real estate agency to look for a house.',
      nepali: 'म घरजग्गा एजेन्सीमा गएर घर हेरेँ।'
    }
  },
  {
    id: 15,
    page: 144,
    category: 'Rental Systems',
    section: '임대 방식',
    korean: '계약',
    pronunciation: 'gyeyak',
    english: 'Contract',
    nepali: 'सम्झौता',
    type: 'noun',
    example: {
      korean: '내일 계약하러 가요.',
      english: 'I\'m going to sign the contract tomorrow.',
      nepali: 'भोलि सम्झौता गर्न जान्छु।'
    }
  },
  {
    id: 16,
    page: 144,
    category: 'Rental Systems',
    section: '임대 방식',
    korean: '집주인',
    pronunciation: 'jipjuin',
    english: 'Landlord',
    nepali: 'घरधनी',
    type: 'noun',
    example: {
      korean: '집주인이 친절해요.',
      english: 'The landlord is kind.',
      nepali: 'घरधनी मिलनसार छन्।'
    }
  },
  {
    id: 17,
    page: 144,
    category: 'Rental Systems',
    section: '임대 방식',
    korean: '세입자',
    pronunciation: 'seipja',
    english: 'Tenant',
    nepali: 'भाडावाल',
    type: 'noun',
    example: {
      korean: '세입자의 권리를 알아야 해요.',
      english: 'You need to know the tenant\'s rights.',
      nepali: 'भाडावालको अधिकार जान्नुपर्छ।'
    }
  }
];

// Section 3: Transportation and Environment (교통과 환경)
export const transportEnvironmentVocabulary = [
  {
    id: 18,
    page: 144,
    category: 'Transportation',
    section: '교통과 환경',
    korean: '교통이 편리하다',
    pronunciation: 'gyotongi pyeollihada',
    english: 'Transportation is convenient',
    nepali: 'यातायात सुविधाजनक छ',
    type: 'expression',
    example: {
      korean: '이 동네는 교통이 편리해요.',
      english: 'This neighborhood has convenient transportation.',
      nepali: 'यो क्षेत्रमा यातायात सुविधाजनक छ।'
    }
  },
  {
    id: 19,
    page: 144,
    category: 'Transportation',
    section: '교통과 환경',
    korean: '교통이 불편하다',
    pronunciation: 'gyotongi bulpyeonhada',
    english: 'Transportation is inconvenient',
    nepali: 'यातायात असुविधाजनक छ',
    type: 'expression',
    example: {
      korean: '여기는 교통이 불편해서 차가 필요해요.',
      english: 'Transportation is inconvenient here, so you need a car.',
      nepali: 'यहाँ यातायात असुविधाजनक छ, त्यसैले गाडी चाहिन्छ।'
    }
  },
  {
    id: 20,
    page: 144,
    category: 'Transportation',
    section: '교통과 환경',
    korean: '지하철역',
    pronunciation: 'jihacheolyeok',
    english: 'Subway station',
    nepali: 'मेट्रो स्टेशन',
    type: 'noun',
    example: {
      korean: '지하철역에서 걸어서 5분 거리예요.',
      english: 'It\'s a 5-minute walk from the subway station.',
      nepali: 'मेट्रो स्टेशनबाट हिँडेर ५ मिनेटको दूरी हो।'
    }
  },
  {
    id: 21,
    page: 144,
    category: 'Transportation',
    section: '교통과 환경',
    korean: '버스 정류장',
    pronunciation: 'beoseu jeongryujang',
    english: 'Bus stop',
    nepali: 'बस स्टप',
    type: 'noun',
    example: {
      korean: '버스 정류장이 바로 앞에 있어요.',
      english: 'The bus stop is right in front.',
      nepali: 'बस स्टप ठीक अगाडि छ।'
    }
  },
  {
    id: 22,
    page: 144,
    category: 'Transportation',
    section: '교통과 환경',
    korean: '역세권',
    pronunciation: 'yeoksegwon',
    english: 'Station area (near subway)',
    nepali: 'स्टेशन क्षेत्र',
    type: 'noun',
    example: {
      korean: '역세권 아파트를 찾고 있어요.',
      english: 'I\'m looking for an apartment near a station.',
      nepali: 'म स्टेशन नजिकको अपार्टमेन्ट खोज्दैछु।'
    }
  },
  {
    id: 23,
    page: 144,
    category: 'Transportation',
    section: '교통과 환경',
    korean: '주차장',
    pronunciation: 'juchajang',
    english: 'Parking lot',
    nepali: 'पार्किङ स्थल',
    type: 'noun',
    example: {
      korean: '주차장이 넓어요.',
      english: 'The parking lot is spacious.',
      nepali: 'पार्किङ स्थल ठूलो छ।'
    }
  },
  {
    id: 24,
    page: 144,
    category: 'Environment',
    section: '교통과 환경',
    korean: '편의 시설',
    pronunciation: 'pyeonui sisol',
    english: 'Convenience facilities',
    nepali: 'सुविधा सुविधाहरू',
    type: 'noun',
    example: {
      korean: '이 아파트는 편의 시설이 다양해요.',
      english: 'This apartment has various convenience facilities.',
      nepali: 'यो अपार्टमेन्टमा विभिन्न सुविधाहरू छन्।'
    }
  },
  {
    id: 25,
    page: 144,
    category: 'Environment',
    section: '교통과 환경',
    korean: '마트',
    pronunciation: 'mateu',
    english: 'Mart / Supermarket',
    nepali: 'सुपरमार्केट',
    type: 'noun',
    example: {
      korean: '집 근처에 마트가 있어요.',
      english: 'There\'s a mart near the house.',
      nepali: 'घर नजिकै सुपरमार्केट छ।'
    }
  },
  {
    id: 26,
    page: 144,
    category: 'Environment',
    section: '교통과 환경',
    korean: '공원',
    pronunciation: 'gongwon',
    english: 'Park',
    nepali: 'पार्क',
    type: 'noun',
    example: {
      korean: '공원이 가까워서 좋아요.',
      english: 'It\'s nice that the park is close.',
      nepali: 'पार्क नजिक भएकोले राम्रो छ।'
    }
  },
  {
    id: 27,
    page: 144,
    category: 'Environment',
    section: '교통과 환경',
    korean: '산책로',
    pronunciation: 'sanchaengno',
    english: 'Walking trail',
    nepali: 'हिँड्ने बाटो',
    type: 'noun',
    example: {
      korean: '산책로가 있어서 운동하기 좋아요.',
      english: 'There\'s a walking trail, so it\'s good for exercise.',
      nepali: 'हिँड्ने बाटो छ, त्यसैले व्यायामको लागि राम्रो छ।'
    }
  },
  {
    id: 28,
    page: 144,
    category: 'Environment',
    section: '교통과 환경',
    korean: '학군',
    pronunciation: 'hakgun',
    english: 'School district',
    nepali: 'विद्यालय क्षेत्र',
    type: 'noun',
    example: {
      korean: '학군이 좋은 곳으로 이사하고 싶어요.',
      english: 'I want to move to an area with good schools.',
      nepali: 'राम्रो विद्यालय भएको ठाउँमा सर्न चाहन्छु।'
    }
  },
  {
    id: 29,
    page: 144,
    category: 'Environment',
    section: '교통과 환경',
    korean: '도보',
    pronunciation: 'dobo',
    english: 'On foot / Walking distance',
    nepali: 'पैदल / हिँड्ने दूरी',
    type: 'noun',
    example: {
      korean: '역까지 도보 10분이에요.',
      english: 'It\'s a 10-minute walk to the station.',
      nepali: 'स्टेशनसम्म पैदल १० मिनेट हो।'
    }
  }
];

// Section 4: Interior Features (집 내부)
export const interiorVocabulary = [
  {
    id: 30,
    page: 144,
    category: 'Interior',
    section: '집 내부',
    korean: '전망',
    pronunciation: 'jeonmang',
    english: 'View',
    nepali: 'दृश्य',
    type: 'noun',
    example: {
      korean: '이 집은 전망이 좋아요.',
      english: 'This house has a good view.',
      nepali: 'यो घरको दृश्य राम्रो छ।'
    }
  },
  {
    id: 31,
    page: 144,
    category: 'Interior',
    section: '집 내부',
    korean: '햇빛',
    pronunciation: 'haetbit',
    english: 'Sunlight',
    nepali: 'घामको किरण',
    type: 'noun',
    example: {
      korean: '햇빛이 잘 들어와요.',
      english: 'The sunlight comes in well.',
      nepali: 'घामको किरण राम्रोसँग आउँछ।'
    }
  },
  {
    id: 32,
    page: 144,
    category: 'Interior',
    section: '집 내부',
    korean: '남향',
    pronunciation: 'namhyang',
    english: 'South-facing',
    nepali: 'दक्षिणमुखी',
    type: 'noun',
    example: {
      korean: '남향이라서 따뜻해요.',
      english: 'It\'s warm because it faces south.',
      nepali: 'दक्षिणमुखी भएकोले न्यानो छ।'
    }
  },
  {
    id: 33,
    page: 144,
    category: 'Interior',
    section: '집 내부',
    korean: '방',
    pronunciation: 'bang',
    english: 'Room',
    nepali: 'कोठा',
    type: 'noun',
    example: {
      korean: '방이 두 개 있어요.',
      english: 'There are two rooms.',
      nepali: 'दुईवटा कोठा छ।'
    }
  },
  {
    id: 34,
    page: 144,
    category: 'Interior',
    section: '집 내부',
    korean: '거실',
    pronunciation: 'geosil',
    english: 'Living room',
    nepali: 'बैठक कोठा',
    type: 'noun',
    example: {
      korean: '거실이 넓어서 좋아요.',
      english: 'The living room is spacious, which is nice.',
      nepali: 'बैठक कोठा ठूलो छ, जुन राम्रो छ।'
    }
  },
  {
    id: 35,
    page: 144,
    category: 'Interior',
    section: '집 내부',
    korean: '부엌',
    pronunciation: 'bueok',
    english: 'Kitchen',
    nepali: 'भान्सा',
    type: 'noun',
    example: {
      korean: '부엌이 깨끗해요.',
      english: 'The kitchen is clean.',
      nepali: 'भान्सा सफा छ।'
    }
  },
  {
    id: 36,
    page: 144,
    category: 'Interior',
    section: '집 내부',
    korean: '화장실',
    pronunciation: 'hwajangsil',
    english: 'Bathroom',
    nepali: 'शौचालय',
    type: 'noun',
    example: {
      korean: '화장실이 두 개예요.',
      english: 'There are two bathrooms.',
      nepali: 'दुईवटा शौचालय छ।'
    }
  },
  {
    id: 37,
    page: 144,
    category: 'Interior',
    section: '집 내부',
    korean: '베란다',
    pronunciation: 'beranda',
    english: 'Veranda / Balcony',
    nepali: 'बरण्डा / बालकनी',
    type: 'noun',
    example: {
      korean: '베란다에서 빨래를 널어요.',
      english: 'I hang the laundry on the veranda.',
      nepali: 'बरण्डामा लुगा सुकाउँछु।'
    }
  },
  {
    id: 38,
    page: 144,
    category: 'Interior',
    section: '집 내부',
    korean: '신축',
    pronunciation: 'sinchuk',
    english: 'Newly built',
    nepali: 'नयाँ निर्मित',
    type: 'noun',
    example: {
      korean: '신축 아파트라서 깨끗해요.',
      english: 'It\'s clean because it\'s a newly built apartment.',
      nepali: 'नयाँ निर्मित अपार्टमेन्ट भएकोले सफा छ।'
    }
  },
  {
    id: 39,
    page: 144,
    category: 'Interior',
    section: '집 내부',
    korean: '풀옵션',
    pronunciation: 'pulopsheon',
    english: 'Fully furnished',
    nepali: 'पूर्ण सुविधा युक्त',
    type: 'noun',
    example: {
      korean: '풀옵션이라서 바로 입주할 수 있어요.',
      english: 'It\'s fully furnished, so you can move in right away.',
      nepali: 'पूर्ण सुविधा युक्त छ, त्यसैले तुरुन्तै बस्न सक्नुहुन्छ।'
    }
  },
  {
    id: 40,
    page: 144,
    category: 'Interior',
    section: '집 내부',
    korean: '냉장고',
    pronunciation: 'naengjanggo',
    english: 'Refrigerator',
    nepali: 'फ्रिज',
    type: 'noun',
    example: {
      korean: '냉장고가 포함되어 있어요.',
      english: 'A refrigerator is included.',
      nepali: 'फ्रिज समावेश छ।'
    }
  },
  {
    id: 41,
    page: 144,
    category: 'Interior',
    section: '집 내부',
    korean: '세탁기',
    pronunciation: 'setakgi',
    english: 'Washing machine',
    nepali: 'वाशिङ मेशिन',
    type: 'noun',
    example: {
      korean: '세탁기가 있어서 편해요.',
      english: 'It\'s convenient because there\'s a washing machine.',
      nepali: 'वाशिङ मेशिन छ त्यसैले सुविधाजनक छ।'
    }
  },
  {
    id: 42,
    page: 144,
    category: 'Interior',
    section: '집 내부',
    korean: '에어컨',
    pronunciation: 'eeokeon',
    english: 'Air conditioner',
    nepali: 'एयर कन्डिशनर',
    type: 'noun',
    example: {
      korean: '에어컨이 설치되어 있어요.',
      english: 'An air conditioner is installed.',
      nepali: 'एयर कन्डिशनर जडान गरिएको छ।'
    }
  },
  {
    id: 43,
    page: 144,
    category: 'Interior',
    section: '집 내부',
    korean: '침대',
    pronunciation: 'chimdae',
    english: 'Bed',
    nepali: 'खाट',
    type: 'noun',
    example: {
      korean: '침대는 직접 사야 해요.',
      english: 'You have to buy the bed yourself.',
      nepali: 'खाट आफैं किन्नुपर्छ।'
    }
  },
  {
    id: 44,
    page: 144,
    category: 'Interior',
    section: '집 내부',
    korean: '책상',
    pronunciation: 'chaeksang',
    english: 'Desk',
    nepali: 'डेस्क',
    type: 'noun',
    example: {
      korean: '책상이 필요해요.',
      english: 'I need a desk.',
      nepali: 'मलाई डेस्क चाहिन्छ।'
    }
  }
];

// Section 5: Contract-related vocabulary (계약 관련)
export const contractVocabulary = [
  {
    id: 45,
    page: 153,
    category: 'Contract',
    section: '계약 관련',
    korean: '등기부등본',
    pronunciation: 'deungibudeungbon',
    english: 'Property registration copy',
    nepali: 'सम्पत्ति दर्ता प्रतिलिपि',
    type: 'noun',
    example: {
      korean: '계약 전에 등기부등본을 확인하세요.',
      english: 'Check the property registration before signing the contract.',
      nepali: 'सम्झौता अघि सम्पत्ति दर्ता प्रतिलिपि जाँच गर्नुहोस्।'
    }
  },
  {
    id: 46,
    page: 153,
    category: 'Contract',
    section: '계약 관련',
    korean: '특약사항',
    pronunciation: 'teukyaksahang',
    english: 'Special contract terms',
    nepali: 'विशेष सम्झौता सर्तहरू',
    type: 'noun',
    example: {
      korean: '특약사항을 꼼꼼히 읽어보세요.',
      english: 'Read the special terms carefully.',
      nepali: 'विशेष सर्तहरू ध्यानपूर्वक पढ्नुहोस्।'
    }
  },
  {
    id: 47,
    page: 153,
    category: 'Contract',
    section: '계약 관련',
    korean: '계약금',
    pronunciation: 'gyeyakgeum',
    english: 'Down payment / Deposit',
    nepali: 'बयाना रकम',
    type: 'noun',
    example: {
      korean: '계약금을 먼저 내야 해요.',
      english: 'You need to pay the down payment first.',
      nepali: 'पहिले बयाना रकम तिर्नुपर्छ।'
    }
  },
  {
    id: 48,
    page: 153,
    category: 'Contract',
    section: '계약 관련',
    korean: '잔금',
    pronunciation: 'jangeum',
    english: 'Remaining balance',
    nepali: 'बाँकी रकम',
    type: 'noun',
    example: {
      korean: '잔금은 입주할 때 내요.',
      english: 'The remaining balance is paid when moving in.',
      nepali: 'बाँकी रकम बस्दा तिर्नुहोस्।'
    }
  },
  {
    id: 49,
    page: 153,
    category: 'Contract',
    section: '계약 관련',
    korean: '입주',
    pronunciation: 'ipju',
    english: 'Moving in',
    nepali: 'बस्न थाल्ने',
    type: 'noun',
    example: {
      korean: '입주 날짜를 정했어요.',
      english: 'I set the move-in date.',
      nepali: 'बस्न थाल्ने मिति तय गरेँ।'
    }
  },
  {
    id: 50,
    page: 153,
    category: 'Contract',
    section: '계약 관련',
    korean: '이사',
    pronunciation: 'isa',
    english: 'Moving (house)',
    nepali: 'घर सर्ने',
    type: 'noun',
    example: {
      korean: '다음 달에 이사해요.',
      english: 'I\'m moving next month.',
      nepali: 'अर्को महिना घर सर्छु।'
    }
  },
  {
    id: 51,
    page: 153,
    category: 'Contract',
    section: '계약 관련',
    korean: '관리비',
    pronunciation: 'gwanlibi',
    english: 'Maintenance fee',
    nepali: 'मर्मत खर्च',
    type: 'noun',
    example: {
      korean: '관리비가 얼마예요?',
      english: 'How much is the maintenance fee?',
      nepali: 'मर्मत खर्च कति हो?'
    }
  },
  {
    id: 52,
    page: 153,
    category: 'Contract',
    section: '계약 관련',
    korean: '공과금',
    pronunciation: 'gonggwageum',
    english: 'Utility bills',
    nepali: 'उपयोगिता बिलहरू',
    type: 'noun',
    example: {
      korean: '공과금은 따로 내야 해요.',
      english: 'Utility bills are paid separately.',
      nepali: 'उपयोगिता बिलहरू अलग्गै तिर्नुपर्छ।'
    }
  }
];

// Section 6: Additional vocabulary (추가 어휘)
export const additionalVocabulary = [
  {
    id: 53,
    page: 144,
    category: 'Transportation',
    section: '추가 어휘',
    korean: '주차할 곳이 있다/없다',
    pronunciation: 'juchahal gosi itda/eopda',
    english: 'There is/isn\'t a place to park',
    nepali: 'पार्किङ गर्ने ठाउँ छ/छैन',
    type: 'expression',
    example: {
      korean: '이 아파트는 주차할 곳이 없어서 불편해요.',
      english: 'This apartment is inconvenient because there\'s no place to park.',
      nepali: 'यो अपार्टमेन्टमा पार्किङ गर्ने ठाउँ छैन त्यसैले असुविधाजनक छ।'
    }
  },
  {
    id: 54,
    page: 144,
    category: 'Transportation',
    section: '추가 어휘',
    korean: '고속도로',
    pronunciation: 'gosokdoro',
    english: 'Highway / Expressway',
    nepali: 'राजमार्ग / द्रुतमार्ग',
    type: 'noun',
    example: {
      korean: '집 근처에 고속도로가 있어서 시끄러워요.',
      english: 'It\'s noisy because there\'s a highway near the house.',
      nepali: 'घर नजिक राजमार्ग छ त्यसैले ठूलो आवाज आउँछ।'
    }
  },
  {
    id: 55,
    page: 144,
    category: 'Environment',
    section: '추가 어휘',
    korean: '시장',
    pronunciation: 'sijang',
    english: 'Market',
    nepali: 'बजार',
    type: 'noun',
    example: {
      korean: '집 근처에 시장이 있어서 편해요.',
      english: 'It\'s convenient because there\'s a market near the house.',
      nepali: 'घर नजिक बजार छ त्यसैले सुविधाजनक छ।'
    }
  },
  {
    id: 56,
    page: 144,
    category: 'Environment',
    section: '추가 어휘',
    korean: '쇼핑몰',
    pronunciation: 'syopingmol',
    english: 'Shopping mall',
    nepali: 'शपिङ मल',
    type: 'noun',
    example: {
      korean: '쇼핑몰이 가까워서 좋아요.',
      english: 'It\'s nice that the shopping mall is close.',
      nepali: 'शपिङ मल नजिक भएकोले राम्रो छ।'
    }
  },
  {
    id: 57,
    page: 144,
    category: 'Environment',
    section: '추가 어휘',
    korean: '교육 환경이 좋다/나쁘다',
    pronunciation: 'gyoyuk hwangyeongi jota/nappuda',
    english: 'Educational environment is good/bad',
    nepali: 'शैक्षिक वातावरण राम्रो/नराम्रो छ',
    type: 'expression',
    example: {
      korean: '학교가 가까워서 교육 환경이 좋아요.',
      english: 'The educational environment is good because the school is close.',
      nepali: 'विद्यालय नजिक भएकोले शैक्षिक वातावरण राम्रो छ।'
    }
  },
  {
    id: 58,
    page: 153,
    category: 'Contract',
    section: '추가 어휘',
    korean: '전입신고',
    pronunciation: 'jeonipshingo',
    english: 'Move-in report / Residence registration',
    nepali: 'बसाइँ सराइँ प्रतिवेदन',
    type: 'noun',
    example: {
      korean: '이사한 후에 전입신고를 해야 해요.',
      english: 'You need to file a move-in report after moving.',
      nepali: 'सरेपछि बसाइँ सराइँ प्रतिवेदन गर्नुपर्छ।'
    }
  },
  {
    id: 59,
    page: 153,
    category: 'Contract',
    section: '추가 어휘',
    korean: '부동산 중개소',
    pronunciation: 'budongsan junggaeso',
    english: 'Real estate agency',
    nepali: 'घरजग्गा एजेन्सी',
    type: 'noun',
    example: {
      korean: '부동산 중개소에서 집을 소개받았어요.',
      english: 'I was introduced to a house at the real estate agency.',
      nepali: 'घरजग्गा एजेन्सीमा घरको जानकारी पाएँ।'
    }
  },
  {
    id: 60,
    page: 144,
    category: 'Actions',
    section: '추가 어휘',
    korean: '집을 구하다',
    pronunciation: 'jibeul guhada',
    english: 'To look for a house',
    nepali: 'घर खोज्नु',
    type: 'verb',
    example: {
      korean: '서울에서 집을 구하고 있어요.',
      english: 'I\'m looking for a house in Seoul.',
      nepali: 'सियोलमा घर खोज्दैछु।'
    }
  },
  {
    id: 61,
    page: 144,
    category: 'Actions',
    section: '추가 어휘',
    korean: '집을 계약하다',
    pronunciation: 'jibeul gyeyakhada',
    english: 'To sign a housing contract',
    nepali: 'घरको सम्झौता गर्नु',
    type: 'verb',
    example: {
      korean: '드디어 마음에 드는 집을 계약했어요.',
      english: 'I finally signed a contract for a house I liked.',
      nepali: 'अन्ततः मनपर्ने घरको सम्झौता गरेँ।'
    }
  },
  {
    id: 62,
    page: 144,
    category: 'Actions',
    section: '추가 어휘',
    korean: '이사하다',
    pronunciation: 'isahada',
    english: 'To move (houses)',
    nepali: 'घर सर्नु',
    type: 'verb',
    example: {
      korean: '다음 달에 새 집으로 이사해요.',
      english: 'I\'m moving to a new house next month.',
      nepali: 'अर्को महिना नयाँ घरमा सर्छु।'
    }
  }
];

// Combine all vocabulary
export const allVocabulary = [
  ...housingTypeVocabulary,
  ...rentalSystemVocabulary,
  ...transportEnvironmentVocabulary,
  ...interiorVocabulary,
  ...contractVocabulary,
  ...additionalVocabulary
];

// ============================================
// PAGE 145-146 - 문법 (Grammar)
// ============================================

export const grammarPoints = [
  {
    id: 1,
    page: 145,
    pattern: {
      korean: 'V + 는 데다가 / A + (으)ㄴ 데다가',
      english: 'In addition to / Moreover',
      nepali: 'त्यसमा थप / यसबाहेक'
    },
    meaning: {
      korean: '앞의 내용에 다른 내용을 더할 때 사용합니다.',
      english: 'Used when adding additional information to the preceding content.',
      nepali: 'अघिल्लो कुरामा थप जानकारी थप्दा प्रयोग गरिन्छ।'
    },
    conjugation: [
      {
        type: 'Verb (action)',
        rule: 'V + 는 데다가',
        example: {
          base: '가다',
          conjugated: '가는 데다가',
          english: 'in addition to going'
        }
      },
      {
        type: 'Adjective (vowel)',
        rule: 'A + ㄴ 데다가',
        example: {
          base: '싸다',
          conjugated: '싼 데다가',
          english: 'in addition to being cheap'
        }
      },
      {
        type: 'Adjective (consonant)',
        rule: 'A + 은 데다가',
        example: {
          base: '넓다',
          conjugated: '넓은 데다가',
          english: 'in addition to being spacious'
        }
      },
      {
        type: 'Noun',
        rule: 'N + 인 데다가',
        example: {
          base: '신축',
          conjugated: '신축인 데다가',
          english: 'in addition to being newly built'
        }
      }
    ],
    examples: [
      {
        korean: '깨끗한 데다가 월세도 싸요.',
        english: 'It\'s clean, and additionally, the rent is cheap.',
        nepali: 'सफा छ, र त्यसमा भाडा पनि सस्तो छ।'
      },
      {
        korean: '지하철역이 가까운 데다가 마트도 있어요.',
        english: 'The subway station is close, and there\'s also a mart.',
        nepali: 'मेट्रो स्टेशन नजिक छ, र त्यसमा सुपरमार्केट पनि छ।'
      },
      {
        korean: '방이 넓은 데다가 햇빛도 잘 들어와요.',
        english: 'The room is spacious, and sunlight comes in well too.',
        nepali: 'कोठा ठूलो छ, र त्यसमा घामको किरण पनि राम्रोसँग आउँछ।'
      },
      {
        korean: '신축인 데다가 풀옵션이에요.',
        english: 'It\'s newly built, and it\'s fully furnished too.',
        nepali: 'नयाँ निर्मित छ, र त्यसमा पूर्ण सुविधा युक्त पनि छ।'
      },
      {
        korean: '교통이 편리한 데다가 공원도 가까워요.',
        english: 'Transportation is convenient, and the park is also close.',
        nepali: 'यातायात सुविधाजनक छ, र त्यसमा पार्क पनि नजिक छ।'
      }
    ],
    practice: [
      {
        prompt: {
          korean: '집이 넓다 + 전망이 좋다',
          english: 'The house is spacious + The view is good'
        },
        answer: {
          korean: '집이 넓은 데다가 전망도 좋아요.',
          english: 'The house is spacious, and the view is good too.'
        }
      },
      {
        prompt: {
          korean: '버스 정류장이 가깝다 + 마트가 있다',
          english: 'The bus stop is close + There\'s a mart'
        },
        answer: {
          korean: '버스 정류장이 가까운 데다가 마트도 있어요.',
          english: 'The bus stop is close, and there\'s a mart too.'
        }
      }
    ]
  },
  {
    id: 2,
    page: 146,
    pattern: {
      korean: 'V + 는다/ㄴ다, A + 다 (평서형)',
      english: 'Narrative/Report writing style',
      nepali: 'कथात्मक/रिपोर्ट लेखन शैली'
    },
    meaning: {
      korean: '일기나 보고서 등에서 객관적으로 서술할 때 사용합니다.',
      english: 'Used for objective descriptions in diaries, reports, etc.',
      nepali: 'डायरी, रिपोर्ट आदिमा वस्तुगत विवरणको लागि प्रयोग गरिन्छ।'
    },
    conjugation: [
      {
        type: 'Verb (consonant stem)',
        rule: 'V + 는다',
        example: {
          base: '먹다',
          conjugated: '먹는다',
          english: 'eats'
        }
      },
      {
        type: 'Verb (vowel stem)',
        rule: 'V + ㄴ다',
        example: {
          base: '가다',
          conjugated: '간다',
          english: 'goes'
        }
      },
      {
        type: 'Adjective',
        rule: 'A + 다',
        example: {
          base: '크다',
          conjugated: '크다',
          english: 'is big'
        }
      },
      {
        type: 'Noun',
        rule: 'N + (이)다',
        example: {
          base: '학생',
          conjugated: '학생이다',
          english: 'is a student'
        }
      },
      {
        type: 'Past tense',
        rule: 'V/A + 았/었다',
        example: {
          base: '갔다',
          conjugated: '갔다',
          english: 'went'
        }
      }
    ],
    examples: [
      {
        korean: '한국에는 다양한 형태의 집이 있다.',
        english: 'Korea has various types of housing.',
        nepali: 'कोरियामा विभिन्न प्रकारका घरहरू छन्।'
      },
      {
        korean: '아파트는 한국에서 가장 인기 있는 주거 형태이다.',
        english: 'Apartments are the most popular housing type in Korea.',
        nepali: 'अपार्टमेन्ट कोरियामा सबैभन्दा लोकप्रिय आवास प्रकार हो।'
      },
      {
        korean: '전세는 한국의 독특한 임대 제도이다.',
        english: 'Jeonse is Korea\'s unique rental system.',
        nepali: 'जोन्से कोरियाको अनौठो भाडा प्रणाली हो।'
      },
      {
        korean: '최근 쉐어하우스가 젊은 층에서 인기를 얻고 있다.',
        english: 'Recently, share houses are gaining popularity among young people.',
        nepali: 'हालै, शेयर हाउसहरू युवाहरूमा लोकप्रिय हुँदैछन्।'
      },
      {
        korean: '부동산에서 집을 찾는 것이 일반적이다.',
        english: 'It is common to look for housing through real estate agencies.',
        nepali: 'घरजग्गा एजेन्सीमार्फत घर खोज्नु सामान्य हो।'
      }
    ],
    practice: [
      {
        prompt: {
          korean: '한국 사람들은 아파트에 많이 살다',
          english: 'Korean people live in apartments a lot'
        },
        answer: {
          korean: '한국 사람들은 아파트에 많이 산다.',
          english: 'Korean people live in apartments a lot.'
        }
      },
      {
        prompt: {
          korean: '월세는 보통 매달 내다',
          english: 'Monthly rent is usually paid every month'
        },
        answer: {
          korean: '월세는 보통 매달 낸다.',
          english: 'Monthly rent is usually paid every month.'
        }
      }
    ]
  }
];

// ============================================
// PAGE 147-148 - 대화 (Conversations)
// ============================================

export const conversations = [
  {
    id: 1,
    page: 147,
    title: {
      korean: '부동산에서',
      english: 'At the Real Estate Agency',
      nepali: 'घरजग्गा एजेन्सीमा'
    },
    situation: {
      korean: '라민 씨가 부동산에 가서 집을 알아보고 있습니다.',
      english: 'Ramin is looking for a house at the real estate agency.',
      nepali: 'रामिन घरजग्गा एजेन्सीमा घर खोज्दै छन्।'
    },
    conversation: [
      {
        speaker: '라민',
        korean: '방 두 개짜리 빌라를 찾고 있는데요. 월세로요.',
        english: 'I\'m looking for a two-room villa. For monthly rent.',
        nepali: 'म दुई कोठा भएको भिला खोज्दैछु। मासिक भाडामा।'
      },
      {
        speaker: '부동산 직원',
        korean: '네, 이 근처에 괜찮은 빌라가 있어요. 남향이라서 햇빛이 잘 들어요.',
        english: 'Yes, there\'s a nice villa nearby. It faces south, so sunlight comes in well.',
        nepali: 'हजुर, यहाँ नजिकै राम्रो भिला छ। दक्षिणमुखी भएकोले घामको किरण राम्रोसँग आउँछ।'
      },
      {
        speaker: '라민',
        korean: '월세는 얼마예요?',
        english: 'How much is the monthly rent?',
        nepali: 'मासिक भाडा कति हो?'
      },
      {
        speaker: '부동산 직원',
        korean: '보증금 1천만 원에 월세 50만 원이에요. 신축인 데다가 깨끗해요.',
        english: 'It\'s a 10 million won deposit with 500,000 won monthly rent. It\'s newly built and clean.',
        nepali: 'धरौटी एक करोड वन र मासिक भाडा पाँच लाख वन हो। नयाँ निर्मित र सफा छ।'
      },
      {
        speaker: '라민',
        korean: '지하철역에서 가까워요?',
        english: 'Is it close to the subway station?',
        nepali: 'मेट्रो स्टेशनबाट नजिक छ?'
      },
      {
        speaker: '부동산 직원',
        korean: '네, 걸어서 5분 거리예요. 버스 정류장도 가까운 데다가 마트도 있어요.',
        english: 'Yes, it\'s a 5-minute walk. The bus stop is also close, and there\'s a mart too.',
        nepali: 'हजुर, हिँडेर पाँच मिनेटको दूरी हो। बस स्टप पनि नजिक छ र सुपरमार्केट पनि छ।'
      },
      {
        speaker: '라민',
        korean: '좋네요. 한번 볼 수 있을까요?',
        english: 'That sounds good. Can I take a look?',
        nepali: 'राम्रो लाग्यो। एक पटक हेर्न सक्छु?'
      },
      {
        speaker: '부동산 직원',
        korean: '그럼요. 지금 바로 가실 수 있어요.',
        english: 'Of course. You can go right now.',
        nepali: 'अवश्य। अहिले नै जान सक्नुहुन्छ।'
      }
    ],
    keyExpressions: [
      {
        korean: '방 두 개짜리',
        english: 'Two-room (unit)',
        nepali: 'दुई कोठा भएको',
        explanation: 'Used to describe the number of rooms'
      },
      {
        korean: '남향이라서',
        english: 'Because it faces south',
        nepali: 'दक्षिणमुखी भएकोले',
        explanation: 'South-facing properties get more sunlight'
      },
      {
        korean: '한번 볼 수 있을까요?',
        english: 'Can I take a look?',
        nepali: 'एक पटक हेर्न सक्छु?',
        explanation: 'Polite way to ask to view a property'
      }
    ]
  },
  {
    id: 2,
    page: 148,
    title: {
      korean: '전세 집 구하기',
      english: 'Looking for a Jeonse House',
      nepali: 'जोन्से घर खोज्दै'
    },
    situation: {
      korean: '호웬 씨가 학습관 근처에서 전세 아파트를 찾고 있습니다.',
      english: 'Houen is looking for a jeonse apartment near the learning center.',
      nepali: 'होवेन शिक्षण केन्द्र नजिकै जोन्से अपार्टमेन्ट खोज्दै छन्।'
    },
    conversation: [
      {
        speaker: '호웬',
        korean: '학습관 근처에 방 두 개짜리 아파트를 찾고 있어요. 전세로요.',
        english: 'I\'m looking for a two-room apartment near the learning center. On jeonse.',
        nepali: 'म शिक्षण केन्द्र नजिकै दुई कोठा भएको अपार्टमेन्ट खोज्दैछु। जोन्सेमा।'
      },
      {
        speaker: '부동산 직원',
        korean: '두 군데가 있어요. 하나는 역세권인 데다가 마트도 가까워요.',
        english: 'There are two options. One is in the station area and also close to a mart.',
        nepali: 'दुईवटा छन्। एउटा स्टेशन क्षेत्रमा छ र सुपरमार्केट पनि नजिक छ।'
      },
      {
        speaker: '호웬',
        korean: '다른 하나는요?',
        english: 'What about the other one?',
        nepali: 'अर्को कस्तो छ?'
      },
      {
        speaker: '부동산 직원',
        korean: '역에서 좀 멀지만 전망이 좋은 데다가 조용해요.',
        english: 'It\'s a bit far from the station, but it has a good view and is quiet.',
        nepali: 'स्टेशनबाट अलि टाढा छ, तर दृश्य राम्रो छ र शान्त छ।'
      },
      {
        speaker: '호웬',
        korean: '전세금은 얼마예요?',
        english: 'How much is the jeonse deposit?',
        nepali: 'जोन्से धरौटी कति हो?'
      },
      {
        speaker: '부동산 직원',
        korean: '역 근처는 2억이고, 조용한 곳은 1억 8천이에요.',
        english: 'The one near the station is 200 million, and the quiet one is 180 million.',
        nepali: 'स्टेशन नजिकको दुई अर्ब हो, र शान्त ठाउँको एक अर्ब अस्सी करोड हो।'
      },
      {
        speaker: '호웬',
        korean: '둘 다 한번 보고 싶어요.',
        english: 'I\'d like to see both of them.',
        nepali: 'दुवै हेर्न चाहन्छु।'
      }
    ],
    keyExpressions: [
      {
        korean: '전세로요',
        english: 'On jeonse (lease)',
        nepali: 'जोन्सेमा',
        explanation: 'Specifying the rental type'
      },
      {
        korean: '역세권',
        english: 'Station area',
        nepali: 'स्टेशन क्षेत्र',
        explanation: 'Area within walking distance of a subway station'
      },
      {
        korean: '둘 다',
        english: 'Both',
        nepali: 'दुवै',
        explanation: 'Used when referring to two options'
      }
    ]
  }
];

// ============================================
// PAGE 148 - 발음 (Pronunciation)
// ============================================

export const pronunciation = {
  page: 148,
  title: {
    korean: '비음화',
    english: 'Nasalization',
    nepali: 'नासिक्यकरण'
  },
  explanation: {
    korean: '받침 ㅂ, ㄷ, ㄱ 뒤에 ㄴ, ㅁ이 오면 비음으로 발음됩니다.',
    english: 'When ㄴ or ㅁ comes after final consonants ㅂ, ㄷ, ㄱ, they are pronounced as nasal sounds.',
    nepali: 'जब ㄴ वा ㅁ अन्तिम व्यञ्जन ㅂ, ㄷ, ㄱ पछि आउँछ, तिनीहरू नासिक्य ध्वनिको रूपमा उच्चारण गरिन्छ।'
  },
  rules: [
    {
      condition: 'ㅂ + ㄴ, ㅁ',
      result: '[ㅁ]',
      examples: [
        { written: '업무', pronounced: '[엄무]', english: 'work/duties' },
        { written: '입문', pronounced: '[임문]', english: 'introduction' },
        { written: '밥물', pronounced: '[밤물]', english: 'rice water' },
        { written: '값만', pronounced: '[감만]', english: 'only the price' },
        { written: '월급날', pronounced: '[월금날]', english: 'payday' }
      ]
    },
    {
      condition: 'ㄷ + ㄴ, ㅁ',
      result: '[ㄴ]',
      examples: [
        { written: '걷는', pronounced: '[건는]', english: 'walking' },
        { written: '믿는', pronounced: '[민는]', english: 'believing' },
        { written: '닫는', pronounced: '[단는]', english: 'closing' },
        { written: '콧물', pronounced: '[콘물]', english: 'runny nose' },
        { written: '있는데', pronounced: '[인는데]', english: 'there is, but...' }
      ]
    },
    {
      condition: 'ㄱ + ㄴ, ㅁ',
      result: '[ㅇ]',
      examples: [
        { written: '식물', pronounced: '[싱물]', english: 'plant' },
        { written: '국물', pronounced: '[궁물]', english: 'broth' },
        { written: '학년', pronounced: '[항년]', english: 'school year' },
        { written: '악마', pronounced: '[앙마]', english: 'devil' },
        { written: '한국말', pronounced: '[한궁말]', english: 'Korean language' }
      ]
    }
  ],
  practiceWords: [
    { written: '작년', pronounced: '[장년]', english: 'last year' },
    { written: '십만', pronounced: '[심만]', english: 'one hundred thousand' },
    { written: '합니다', pronounced: '[함니다]', english: 'do/does' },
    { written: '먹는', pronounced: '[멍는]', english: 'eating' }
  ]
};

// ============================================
// PAGE 149-150 - 읽기 (Reading)
// ============================================

export const readings = [
  {
    id: 1,
    page: 149,
    title: {
      korean: '집 보기 체크리스트',
      english: 'House Viewing Checklist',
      nepali: 'घर हेर्ने चेकलिस्ट'
    },
    content: {
      korean: `집을 보러 갈 때는 여러 가지를 확인해야 한다. 먼저 햇빛이 잘 들어오는지 확인한다. 남향인 집이 좋다. 다음으로 소음을 확인한다. 조용한 곳이 좋다. 수도, 가스, 전기 등 시설이 잘 작동하는지도 확인한다.

주변 환경도 중요하다. 지하철역이나 버스 정류장이 가까운지, 마트나 편의점이 있는지 확인한다. 학교가 가까운지도 중요하다.

계약할 때는 등기부등본을 확인하고, 특약사항을 꼼꼼히 읽어야 한다. 집주인과 직접 계약하는 것이 더 안전하다.`,
      english: `When going to view a house, you need to check various things. First, check if sunlight comes in well. South-facing houses are good. Next, check the noise level. Quiet places are better. Also check if utilities like water, gas, and electricity work properly.

The surrounding environment is also important. Check if subway stations or bus stops are close, and if there are marts or convenience stores nearby. Whether schools are close is also important.

When signing a contract, check the property registration and read the special terms carefully. It's safer to contract directly with the landlord.`,
      nepali: `घर हेर्न जाँदा विभिन्न कुराहरू जाँच गर्नुपर्छ। पहिले, घामको किरण राम्रोसँग आउँछ कि भनेर जाँच गर्नुहोस्। दक्षिणमुखी घर राम्रो हुन्छ। त्यसपछि, आवाजको स्तर जाँच गर्नुहोस्। शान्त ठाउँ राम्रो हुन्छ। पानी, ग्यास, र बिजुली जस्ता सुविधाहरू ठीकसँग काम गर्छन् कि भनेर पनि जाँच गर्नुहोस्।

वरपरको वातावरण पनि महत्त्वपूर्ण छ। मेट्रो स्टेशन वा बस स्टप नजिक छ कि छैन, र सुपरमार्केट वा सुविधा पसलहरू छन् कि छैनन् जाँच गर्नुहोस्। विद्यालय नजिक छ कि छैन भन्ने पनि महत्त्वपूर्ण छ।

सम्झौता गर्दा, सम्पत्ति दर्ता जाँच गर्नुहोस् र विशेष सर्तहरू ध्यानपूर्वक पढ्नुहोस्। घरधनीसँग सिधै सम्झौता गर्नु बढी सुरक्षित छ।`
    },
    vocabulary: [
      { korean: '소음', english: 'noise', nepali: 'आवाज' },
      { korean: '작동하다', english: 'to operate/work', nepali: 'काम गर्नु' },
      { korean: '주변 환경', english: 'surrounding environment', nepali: 'वरपरको वातावरण' },
      { korean: '안전하다', english: 'to be safe', nepali: 'सुरक्षित हुनु' }
    ],
    comprehensionQuestions: [
      {
        question: {
          korean: '집을 볼 때 먼저 무엇을 확인해야 합니까?',
          english: 'What should you check first when viewing a house?',
          nepali: 'घर हेर्दा पहिले के जाँच गर्नुपर्छ?'
        },
        answer: {
          korean: '햇빛이 잘 들어오는지 확인해야 합니다.',
          english: 'You should check if sunlight comes in well.',
          nepali: 'घामको किरण राम्रोसँग आउँछ कि भनेर जाँच गर्नुपर्छ।'
        }
      },
      {
        question: {
          korean: '계약할 때 무엇을 확인해야 합니까?',
          english: 'What should you check when signing a contract?',
          nepali: 'सम्झौता गर्दा के जाँच गर्नुपर्छ?'
        },
        answer: {
          korean: '등기부등본을 확인하고 특약사항을 읽어야 합니다.',
          english: 'You should check the property registration and read the special terms.',
          nepali: 'सम्पत्ति दर्ता जाँच गर्नुपर्छ र विशेष सर्तहरू पढ्नुपर्छ।'
        }
      }
    ]
  },
  {
    id: 2,
    page: 150,
    title: {
      korean: '쉐어하우스 문화',
      english: 'Share House Culture',
      nepali: 'शेयर हाउस संस्कृति'
    },
    content: {
      korean: `최근 한국에서는 쉐어하우스가 젊은 층에서 인기를 얻고 있다. 쉐어하우스는 여러 사람이 함께 사는 주거 형태이다. 각자 개인 방이 있고, 거실이나 부엌 같은 공간은 함께 사용한다.

쉐어하우스의 장점은 여러 가지가 있다. 먼저 주거 비용을 줄일 수 있다. 월세와 공과금을 나눠서 내기 때문이다. 또한 함께 밥을 먹거나 여가 활동을 하면서 새로운 관계를 만들 수 있다.

다양한 사람들과 교류하고 싶은 사람들에게 쉐어하우스는 좋은 선택이 될 수 있다.`,
      english: `Recently in Korea, share houses are gaining popularity among young people. A share house is a type of housing where multiple people live together. Each person has their own room, and common spaces like the living room and kitchen are shared.

There are several advantages to share houses. First, you can reduce housing costs since monthly rent and utility bills are split. Also, you can build new relationships by eating together or doing leisure activities together.

For people who want to interact with various people, a share house can be a good choice.`,
      nepali: `हालसालै कोरियामा, शेयर हाउसहरू युवाहरूमा लोकप्रिय हुँदैछन्। शेयर हाउस एक प्रकारको आवास हो जहाँ धेरै मानिसहरू सँगै बस्छन्। प्रत्येक व्यक्तिको आफ्नो कोठा हुन्छ, र बैठक कोठा र भान्सा जस्ता साझा ठाउँहरू सँगै प्रयोग गरिन्छ।

शेयर हाउसका धेरै फाइदाहरू छन्। पहिलो, तपाईं आवास खर्च घटाउन सक्नुहुन्छ किनभने मासिक भाडा र उपयोगिता बिलहरू बाँडिन्छन्। साथै, तपाईं सँगै खाना खाएर वा फुर्सदका गतिविधिहरू गरेर नयाँ सम्बन्धहरू बनाउन सक्नुहुन्छ।

विभिन्न मानिसहरूसँग अन्तरक्रिया गर्न चाहने मानिसहरूको लागि, शेयर हाउस राम्रो विकल्प हुन सक्छ।`
    },
    vocabulary: [
      { korean: '주거 형태', english: 'type of housing', nepali: 'आवासको प्रकार' },
      { korean: '장점', english: 'advantage', nepali: 'फाइदा' },
      { korean: '줄이다', english: 'to reduce', nepali: 'घटाउनु' },
      { korean: '나누다', english: 'to share/divide', nepali: 'बाँड्नु' },
      { korean: '여가 활동', english: 'leisure activities', nepali: 'फुर्सदका गतिविधिहरू' },
      { korean: '교류하다', english: 'to interact/exchange', nepali: 'अन्तरक्रिया गर्नु' }
    ],
    comprehensionQuestions: [
      {
        question: {
          korean: '쉐어하우스란 무엇입니까?',
          english: 'What is a share house?',
          nepali: 'शेयर हाउस भनेको के हो?'
        },
        answer: {
          korean: '여러 사람이 함께 사는 주거 형태입니다.',
          english: 'It is a type of housing where multiple people live together.',
          nepali: 'यो एक प्रकारको आवास हो जहाँ धेरै मानिसहरू सँगै बस्छन्।'
        }
      },
      {
        question: {
          korean: '쉐어하우스의 장점은 무엇입니까?',
          english: 'What are the advantages of a share house?',
          nepali: 'शेयर हाउसका फाइदाहरू के हुन्?'
        },
        answer: {
          korean: '주거 비용을 줄일 수 있고, 새로운 관계를 만들 수 있습니다.',
          english: 'You can reduce housing costs and build new relationships.',
          nepali: 'तपाईं आवास खर्च घटाउन सक्नुहुन्छ र नयाँ सम्बन्धहरू बनाउन सक्नुहुन्छ।'
        }
      }
    ]
  }
];

// ============================================
// PAGE 151-152 - 문화 (Culture)
// ============================================

export const culture = {
  page: 151,
  title: {
    korean: '한국의 주거 문화',
    english: 'Korean Housing Culture',
    nepali: 'कोरियाको आवास संस्कृति'
  },
  sections: [
    {
      subtitle: {
        korean: '전세 제도',
        english: 'Jeonse System',
        nepali: 'जोन्से प्रणाली'
      },
      content: {
        korean: '전세는 한국의 독특한 임대 제도입니다. 세입자가 집주인에게 큰 금액의 보증금을 맡기고, 계약 기간 동안 월세 없이 살 수 있습니다. 계약이 끝나면 보증금 전액을 돌려받습니다.',
        english: 'Jeonse is Korea\'s unique rental system. The tenant deposits a large sum with the landlord and can live without paying monthly rent during the contract period. When the contract ends, the full deposit is returned.',
        nepali: 'जोन्से कोरियाको अनौठो भाडा प्रणाली हो। भाडावालले घरधनीलाई ठूलो रकम धरौटीको रूपमा राख्छ र सम्झौता अवधिभर मासिक भाडा नतिरी बस्न सक्छ। सम्झौता सकिएपछि, पूरा धरौटी फिर्ता हुन्छ।'
      }
    },
    {
      subtitle: {
        korean: '아파트 문화',
        english: 'Apartment Culture',
        nepali: 'अपार्टमेन्ट संस्कृति'
      },
      content: {
        korean: '한국에서는 아파트가 가장 인기 있는 주거 형태입니다. 편의 시설이 많고, 관리가 편하기 때문입니다. 특히 대도시에서는 아파트 단지가 많습니다.',
        english: 'In Korea, apartments are the most popular type of housing. This is because they have many amenities and are easy to manage. Especially in big cities, there are many apartment complexes.',
        nepali: 'कोरियामा, अपार्टमेन्ट सबैभन्दा लोकप्रिय आवास प्रकार हो। यो किनभने तिनीहरूमा धेरै सुविधाहरू छन् र व्यवस्थापन गर्न सजिलो छ। विशेष गरी ठूला शहरहरूमा, धेरै अपार्टमेन्ट कम्प्लेक्सहरू छन्।'
      }
    },
    {
      subtitle: {
        korean: '부동산 중개',
        english: 'Real Estate Brokerage',
        nepali: 'घरजग्गा दलाली'
      },
      content: {
        korean: '한국에서는 부동산(중개업소)을 통해 집을 구하는 것이 일반적입니다. 부동산에서 집을 소개받고, 계약도 도와줍니다. 중개 수수료는 보통 거래 금액의 0.4~0.9%입니다.',
        english: 'In Korea, it is common to find housing through real estate agencies. They introduce properties and help with contracts. Brokerage fees are usually 0.4-0.9% of the transaction amount.',
        nepali: 'कोरियामा, घरजग्गा एजेन्सीहरूमार्फत घर खोज्नु सामान्य हो। तिनीहरूले सम्पत्तिहरू परिचय गराउँछन् र सम्झौतामा मद्दत गर्छन्। दलाली शुल्क सामान्यतया कारोबार रकमको ०.४-०.९% हुन्छ।'
      }
    }
  ],
  tips: [
    {
      korean: '계약 전에 등기부등본을 꼭 확인하세요.',
      english: 'Make sure to check the property registration before signing a contract.',
      nepali: 'सम्झौता गर्नु अघि सम्पत्ति दर्ता अवश्य जाँच गर्नुहोस्।'
    },
    {
      korean: '특약사항은 계약서에 명시해야 합니다.',
      english: 'Special terms should be specified in the contract.',
      nepali: 'विशेष सर्तहरू सम्झौतामा उल्लेख गर्नुपर्छ।'
    },
    {
      korean: '입주 전에 집 상태를 사진으로 기록하세요.',
      english: 'Record the condition of the house with photos before moving in.',
      nepali: 'बस्नु अघि घरको अवस्था फोटोमा रेकर्ड गर्नुहोस्।'
    }
  ]
};

// ============================================
// Quiz Questions
// ============================================

export const quizQuestions = [
  {
    id: 1,
    type: 'vocabulary',
    question: {
      korean: '매달 내는 집 비용을 무엇이라고 합니까?',
      english: 'What do you call the housing cost paid every month?',
      nepali: 'हरेक महिना तिर्ने घरको खर्चलाई के भनिन्छ?'
    },
    options: [
      { korean: '전세', english: 'Jeonse' },
      { korean: '월세', english: 'Monthly rent' },
      { korean: '보증금', english: 'Security deposit' },
      { korean: '관리비', english: 'Maintenance fee' }
    ],
    correctAnswer: 1,
    explanation: {
      korean: '월세는 매달 내는 집 비용입니다.',
      english: 'Monthly rent (월세) is the housing cost paid every month.',
      nepali: 'मासिक भाडा (월세) हरेक महिना तिर्ने घरको खर्च हो।'
    }
  },
  {
    id: 2,
    type: 'vocabulary',
    question: {
      korean: '지하철역 가까이에 있는 지역을 무엇이라고 합니까?',
      english: 'What do you call an area close to a subway station?',
      nepali: 'मेट्रो स्टेशन नजिकको क्षेत्रलाई के भनिन्छ?'
    },
    options: [
      { korean: '학군', english: 'School district' },
      { korean: '역세권', english: 'Station area' },
      { korean: '주차장', english: 'Parking lot' },
      { korean: '산책로', english: 'Walking trail' }
    ],
    correctAnswer: 1,
    explanation: {
      korean: '역세권은 지하철역 가까이에 있는 지역입니다.',
      english: 'Station area (역세권) refers to an area close to a subway station.',
      nepali: 'स्टेशन क्षेत्र (역세권) मेट्रो स्टेशन नजिकको क्षेत्रलाई जनाउँछ।'
    }
  },
  {
    id: 3,
    type: 'grammar',
    question: {
      korean: '빈칸에 알맞은 것을 고르세요: "이 집은 깨끗한 ___ 교통도 편리해요."',
      english: 'Choose the correct answer: "This house is clean ___ transportation is also convenient."',
      nepali: 'सही उत्तर छान्नुहोस्: "यो घर सफा छ ___ यातायात पनि सुविधाजनक छ।"'
    },
    options: [
      { korean: '데다가', english: 'in addition' },
      { korean: '때문에', english: 'because' },
      { korean: '지만', english: 'but' },
      { korean: '면서', english: 'while' }
    ],
    correctAnswer: 0,
    explanation: {
      korean: '"-(으)ㄴ 데다가"는 앞의 내용에 다른 내용을 더할 때 사용합니다.',
      english: '"-(으)ㄴ 데다가" is used to add additional information to the preceding content.',
      nepali: '"-(으)ㄴ 데다가" अघिल्लो कुरामा थप जानकारी थप्दा प्रयोग गरिन्छ।'
    }
  },
  {
    id: 4,
    type: 'grammar',
    question: {
      korean: '일기체로 바르게 쓴 것을 고르세요.',
      english: 'Choose the correctly written diary/report style sentence.',
      nepali: 'सही डायरी/रिपोर्ट शैलीको वाक्य छान्नुहोस्।'
    },
    options: [
      { korean: '한국에는 다양한 집이 있어요.', english: 'Korea has various houses. (polite)' },
      { korean: '한국에는 다양한 집이 있다.', english: 'Korea has various houses. (narrative)' },
      { korean: '한국에는 다양한 집이 있습니다.', english: 'Korea has various houses. (formal)' },
      { korean: '한국에는 다양한 집이 있네요.', english: 'Korea has various houses. (exclamatory)' }
    ],
    correctAnswer: 1,
    explanation: {
      korean: '일기체나 보고서에서는 "-다" 형태를 사용합니다.',
      english: 'In diary or report writing, the "-다" form is used.',
      nepali: 'डायरी वा रिपोर्ट लेखनमा, "-다" रूप प्रयोग गरिन्छ।'
    }
  },
  {
    id: 5,
    type: 'comprehension',
    question: {
      korean: '전세의 특징은 무엇입니까?',
      english: 'What is the characteristic of jeonse?',
      nepali: 'जोन्सेको विशेषता के हो?'
    },
    options: [
      { korean: '매달 월세를 낸다', english: 'Pay monthly rent' },
      { korean: '큰 보증금을 내고 월세 없이 산다', english: 'Pay a large deposit and live without monthly rent' },
      { korean: '집을 사야 한다', english: 'Must buy the house' },
      { korean: '관리비만 낸다', english: 'Only pay maintenance fee' }
    ],
    correctAnswer: 1,
    explanation: {
      korean: '전세는 큰 보증금을 내고 월세 없이 사는 한국의 독특한 임대 제도입니다.',
      english: 'Jeonse is Korea\'s unique rental system where you pay a large deposit and live without monthly rent.',
      nepali: 'जोन्से कोरियाको अनौठो भाडा प्रणाली हो जहाँ तपाईं ठूलो धरौटी तिर्नुहुन्छ र मासिक भाडा नतिरी बस्नुहुन्छ।'
    }
  },
  {
    id: 6,
    type: 'vocabulary',
    question: {
      korean: '새로 지은 건물을 무엇이라고 합니까?',
      english: 'What do you call a newly built building?',
      nepali: 'नयाँ बनेको भवनलाई के भनिन्छ?'
    },
    options: [
      { korean: '풀옵션', english: 'Fully furnished' },
      { korean: '신축', english: 'Newly built' },
      { korean: '남향', english: 'South-facing' },
      { korean: '원룸', english: 'Studio' }
    ],
    correctAnswer: 1,
    explanation: {
      korean: '신축은 새로 지은 건물을 의미합니다.',
      english: 'Sinchuk (신축) means a newly built building.',
      nepali: 'सिन्चुक (신축) भनेको नयाँ बनेको भवन हो।'
    }
  },
  {
    id: 7,
    type: 'vocabulary',
    question: {
      korean: '집을 빌려 사는 사람을 무엇이라고 합니까?',
      english: 'What do you call a person who rents a house?',
      nepali: 'घर भाडामा बस्ने व्यक्तिलाई के भनिन्छ?'
    },
    options: [
      { korean: '집주인', english: 'Landlord' },
      { korean: '세입자', english: 'Tenant' },
      { korean: '부동산', english: 'Real estate agent' },
      { korean: '이웃', english: 'Neighbor' }
    ],
    correctAnswer: 1,
    explanation: {
      korean: '세입자는 집을 빌려 사는 사람입니다.',
      english: 'Seipja (세입자) is a person who rents a house.',
      nepali: 'सेइप्जा (세입자) घर भाडामा बस्ने व्यक्ति हो।'
    }
  },
  {
    id: 8,
    type: 'comprehension',
    question: {
      korean: '쉐어하우스의 장점이 아닌 것은?',
      english: 'Which is NOT an advantage of a share house?',
      nepali: 'शेयर हाउसको फाइदा नभएको कुन हो?'
    },
    options: [
      { korean: '주거 비용을 줄일 수 있다', english: 'Can reduce housing costs' },
      { korean: '새로운 관계를 만들 수 있다', english: 'Can build new relationships' },
      { korean: '혼자만의 공간이 넓다', english: 'Private space is large' },
      { korean: '공과금을 나눠서 낼 수 있다', english: 'Can split utility bills' }
    ],
    correctAnswer: 2,
    explanation: {
      korean: '쉐어하우스는 개인 공간이 작고 공용 공간을 함께 사용합니다.',
      english: 'In a share house, personal space is small and common spaces are shared.',
      nepali: 'शेयर हाउसमा, व्यक्तिगत स्थान सानो हुन्छ र साझा ठाउँहरू सँगै प्रयोग गरिन्छ।'
    }
  },
  {
    id: 9,
    type: 'grammar',
    question: {
      korean: '"역에서 가까운 ___ 마트도 있어요"에서 빈칸에 알맞은 것은?',
      english: 'What goes in the blank: "It\'s close to the station ___ there\'s also a mart"?',
      nepali: 'खाली ठाउँमा के आउँछ: "स्टेशनबाट नजिक छ ___ सुपरमार्केट पनि छ"?'
    },
    options: [
      { korean: '데다가', english: 'in addition' },
      { korean: '니까', english: 'because' },
      { korean: '거나', english: 'or' },
      { korean: '든지', english: 'whether' }
    ],
    correctAnswer: 0,
    explanation: {
      korean: '"데다가"는 추가 정보를 더할 때 사용합니다.',
      english: '"데다가" is used to add additional information.',
      nepali: '"데다가" थप जानकारी थप्दा प्रयोग गरिन्छ।'
    }
  },
  {
    id: 10,
    type: 'vocabulary',
    question: {
      korean: '계약할 때 처음 내는 돈을 무엇이라고 합니까?',
      english: 'What do you call the money paid first when signing a contract?',
      nepali: 'सम्झौता गर्दा पहिले तिर्ने पैसालाई के भनिन्छ?'
    },
    options: [
      { korean: '잔금', english: 'Remaining balance' },
      { korean: '계약금', english: 'Down payment' },
      { korean: '월세', english: 'Monthly rent' },
      { korean: '관리비', english: 'Maintenance fee' }
    ],
    correctAnswer: 1,
    explanation: {
      korean: '계약금은 계약할 때 처음 내는 돈입니다.',
      english: 'Gyeyakgeum (계약금) is the down payment made when signing a contract.',
      nepali: 'ग्ये याक्गेउम (계약금) सम्झौता गर्दा तिर्ने बयाना रकम हो।'
    }
  }
];

// ============================================
// Combined exports for App.jsx compatibility
// ============================================

export const vocabulary = allVocabulary;
export const grammar = grammarPoints;
export const dialogues = conversations;
export const readingPassages = readings;
export const practiceExercises = quizQuestions;

// Export all content
export default {
  chapterInfo,
  housingTypeVocabulary,
  rentalSystemVocabulary,
  transportEnvironmentVocabulary,
  interiorVocabulary,
  contractVocabulary,
  additionalVocabulary,
  allVocabulary,
  vocabulary,
  grammarPoints,
  grammar,
  conversations,
  dialogues,
  pronunciation,
  readings,
  readingPassages,
  culture,
  quizQuestions,
  practiceExercises
};
