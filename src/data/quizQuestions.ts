
import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'budget',
    text: 'I am looking for a home within the median San Diego price range ($825,000).',
    category: 'budget'
  },
  {
    id: 'luxury',
    text: 'I prefer luxury homes with high-end finishes and amenities.',
    category: 'budget'
  },
  {
    id: 'condo',
    text: 'I would prefer a condo or townhouse over a single-family home.',
    category: 'home_type'
  },
  {
    id: 'walkability',
    text: 'Being able to walk to restaurants, shops, and amenities is important to me.',
    category: 'walkability'
  },
  {
    id: 'public_transit',
    text: 'Access to public transportation is a priority for me.',
    category: 'walkability'
  },
  {
    id: 'nightlife',
    text: 'I enjoy having access to nightlife, restaurants, and entertainment.',
    category: 'nightlife'
  },
  {
    id: 'schools',
    text: 'Living in a top-rated school district is important to me.',
    category: 'schools'
  },
  {
    id: 'commute',
    text: 'I prefer a short commute to downtown San Diego (under 30 minutes).',
    category: 'commute'
  },
  {
    id: 'yard',
    text: 'Having a backyard or outdoor space is essential for me.',
    category: 'size'
  },
  {
    id: 'urban',
    text: 'I prefer an urban environment over a suburban setting.',
    category: 'environment'
  },
  {
    id: 'beach',
    text: 'Living near the beach or coast is important to me.',
    category: 'environment'
  },
  {
    id: 'quiet',
    text: 'I prefer quiet neighborhoods over busy, active areas.',
    category: 'environment'
  }
];

export const likertLabels = {
  strongly_disagree: 'Strongly Disagree',
  disagree: 'Disagree',
  neutral: 'Neutral',
  agree: 'Agree',
  strongly_agree: 'Strongly Agree'
};
