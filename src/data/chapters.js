// Central registry of all chapters
// Add new chapters here as they are created

import * as chapter4 from './chapter4';
import * as chapter5 from './chapter5';
import * as chapter6 from './chapter6';
import * as chapter7 from './chapter7';
import * as chapter9 from './chapter9';
import * as chapter10 from './chapter10';
import * as chapter11 from './chapter11';
import * as chapter12 from './chapter12';
import * as chapter13 from './chapter13';
import * as chapter14 from './chapter14';
import * as chapter15 from './chapter15';
import * as chapter16 from './chapter16';

export const chapters = {
  4: {
    id: 4,
    ...chapter4
  },
  5: {
    id: 5,
    ...chapter5
  },
  6: {
    id: 6,
    ...chapter6
  },
  7: {
    id: 7,
    ...chapter7
  },
  9: {
    id: 9,
    ...chapter9
  },
  10: {
    id: 10,
    ...chapter10
  },
  11: {
    id: 11,
    ...chapter11
  },
  12: {
    id: 12,
    ...chapter12
  },
  13: {
    id: 13,
    ...chapter13
  },
  14: {
    id: 14,
    ...chapter14
  },
  15: {
    id: 15,
    ...chapter15
  },
  16: {
    id: 16,
    ...chapter16
  },
};

// List of available chapter numbers for navigation
export const availableChapters = Object.keys(chapters).map(Number).sort((a, b) => a - b);

// Get chapter data by number
export const getChapter = (chapterNum) => chapters[chapterNum];

// Chapter titles for quick reference (Korean/English)
export const chapterTitles = {
  4: { korean: '교환과 환불', english: 'Exchange and Refund', nepali: 'साटासाट र फिर्ता' },
  5: { korean: '소비와 절약', english: 'Consumption and Savings', nepali: 'खपत र बचत' },
  6: { korean: '주거 환경', english: 'Living Environment', nepali: 'बसोबास वातावरण' },
  7: { korean: '문화생활', english: 'Cultural Life', nepali: 'सांस्कृतिक जीवन' },
  8: { korean: '대중교통 이용', english: 'Using Public Transportation', nepali: 'सार्वजनिक यातायात प्रयोग' },
  9: { korean: '고장과 수리', english: 'Breakdown and Repair', nepali: 'बिग्रिएको र मर्मत' },
  10: { korean: '취업', english: 'Getting a Job', nepali: 'रोजगारी पाउने' },
  11: { korean: '부동산', english: 'Real Estate', nepali: 'घरजग्गा' },
  12: { korean: '전통 명절', english: 'Traditional Korean Holidays', nepali: 'परम्परागत चाडपर्व' },
  13: { korean: '직장 생활', english: 'Workplace Life', nepali: 'कार्यस्थल जीवन' },
  14: { korean: '인터넷과 스마트폰', english: 'Internet and Smartphone', nepali: 'इन्टरनेट र स्मार्टफोन' },
  15: { korean: '고민과 상담', english: 'Concerns and Counseling', nepali: 'चिन्ता र परामर्श' },
  16: { korean: '기후와 날씨', english: 'Climate and Weather', nepali: 'जलवायु र मौसम' },
};
