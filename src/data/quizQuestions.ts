
import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'vibrant_area',
    text: 'I prefer living in a vibrant area with lots of activity, restaurants, and nightlife.',
    category: 'environment'
  },
  {
    id: 'quiet_residential',
    text: 'I enjoy a quieter, residential neighborhood with a strong sense of community.',
    category: 'environment'
  },
  {
    id: 'walkability',
    text: 'I love being able to walk to coffee shops, parks, and local businesses.',
    category: 'walkability'
  },
  {
    id: 'public_transit',
    text: 'Having easy access to public transportation (bus, trolley, etc.) is important to me.',
    category: 'walkability'
  },
  {
    id: 'driving',
    text: 'I prefer driving everywhere rather than relying on walking or biking.',
    category: 'walkability'
  },
  {
    id: 'outdoors',
    text: 'I love spending time outdoors and want easy access to hiking trails, parks, or beaches.',
    category: 'environment'
  },
  {
    id: 'near_water',
    text: 'I prioritize living near water—whether it\'s the ocean, a bay, or a lake.',
    category: 'environment'
  },
  {
    id: 'active_community',
    text: 'I\'d love to be part of an active community with regular outdoor events like farmer\'s markets and street fairs.',
    category: 'environment'
  },
  {
    id: 'arts_culture',
    text: 'I want to live in an area with a strong arts, music, or cultural scene.',
    category: 'environment'
  },
  {
    id: 'historic_modern',
    text: 'I enjoy being around a mix of historic charm and modern development.',
    category: 'environment'
  },
  {
    id: 'nightlife',
    text: 'I prefer a neighborhood known for its nightlife, bars, and entertainment options.',
    category: 'nightlife'
  },
  {
    id: 'community',
    text: 'I would love to live in a neighborhood with a strong sense of community and neighborhood events.',
    category: 'environment'
  },
  {
    id: 'schools',
    text: 'Being close to highly rated schools and family-friendly amenities is important to me.',
    category: 'schools'
  },
  {
    id: 'pet_friendly',
    text: 'I want to live in an area that is very pet-friendly, with dog parks and walking paths.',
    category: 'environment'
  },
  {
    id: 'large_yards',
    text: 'I prefer neighborhoods with large yards and open spaces rather than dense housing.',
    category: 'environment'
  }
];

export const likertLabels = {
  strongly_disagree: 'Strongly Disagree',
  somewhat_disagree: 'Somewhat Disagree',
  neutral: 'Neutral',
  somewhat_agree: 'Somewhat Agree',
  strongly_agree: 'Strongly Agree'
};
