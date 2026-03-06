// Central registry of all chapters
// Add new chapters here as they are created

import * as chapter4 from './chapter4';
import * as chapter5 from './chapter5';
import * as chapter6 from './chapter6';
import * as chapter7 from './chapter7';

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
  9: { korean: '자가용 이용', english: 'Using Private Vehicle', nepali: 'निजी सवारी प्रयोग' },
  10: { korean: '길 찾기', english: 'Finding Directions', nepali: 'बाटो खोज्ने' },
};
