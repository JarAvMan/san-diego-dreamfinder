import { QuizQuestion } from '@/types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'beach_proximity',
    question: 'How important is proximity to the beach or waterfront?',
    type: 'likert',
    options: [
      { id: 'not_important', text: 'Not Important' },
      { id: 'somewhat_important', text: 'Somewhat Important' },
      { id: 'very_important', text: 'Very Important' }
    ],
    tags: ['beach', 'waterfront', 'coastal']
  },
  {
    id: 'parks_greenspace',
    question: 'How important is living near parks and green spaces?',
    type: 'likert',
    options: [
      { id: 'not_important', text: 'Not Important' },
      { id: 'somewhat_important', text: 'Somewhat Important' },
      { id: 'very_important', text: 'Very Important' }
    ],
    tags: ['parks', 'greenspace', 'outdoor']
  },
  {
    id: 'safety',
    question: 'How important is neighborhood safety and low crime?',
    type: 'likert',
    options: [
      { id: 'not_important', text: 'Not Important' },
      { id: 'somewhat_important', text: 'Somewhat Important' },
      { id: 'very_important', text: 'Very Important' }
    ],
    tags: ['safe', 'low-crime', 'security']
  },
  {
    id: 'schools',
    question: 'How important is access to top-rated public and private schools?',
    type: 'likert',
    options: [
      { id: 'not_important', text: 'Not Important' },
      { id: 'somewhat_important', text: 'Somewhat Important' },
      { id: 'very_important', text: 'Very Important' }
    ],
    tags: ['schools', 'education', 'family']
  },
  {
    id: 'public_transport',
    question: 'How important is having reliable public transportation nearby?',
    type: 'likert',
    options: [
      { id: 'not_important', text: 'Not Important' },
      { id: 'somewhat_important', text: 'Somewhat Important' },
      { id: 'very_important', text: 'Very Important' }
    ],
    tags: ['transit', 'public-transport', 'commute']
  },
  {
    id: 'walkability',
    question: 'How important is being in a walkable area for daily errands?',
    type: 'likert',
    options: [
      { id: 'not_important', text: 'Not Important' },
      { id: 'somewhat_important', text: 'Somewhat Important' },
      { id: 'very_important', text: 'Very Important' }
    ],
    tags: ['walkable', 'pedestrian', 'urban']
  },
  {
    id: 'dining',
    question: 'How important is a vibrant local dining and restaurant scene?',
    type: 'likert',
    options: [
      { id: 'not_important', text: 'Not Important' },
      { id: 'somewhat_important', text: 'Somewhat Important' },
      { id: 'very_important', text: 'Very Important' }
    ],
    tags: ['dining', 'restaurants', 'food']
  },
  {
    id: 'affordability',
    question: 'How important is affordability and reasonable housing costs?',
    type: 'likert',
    options: [
      { id: 'not_important', text: 'Not Important' },
      { id: 'somewhat_important', text: 'Somewhat Important' },
      { id: 'very_important', text: 'Very Important' }
    ],
    tags: ['affordable', 'budget', 'value']
  },
  {
    id: 'nightlife',
    question: 'How important is a lively nightlife and entertainment options?',
    type: 'likert',
    options: [
      { id: 'not_important', text: 'Not Important' },
      { id: 'somewhat_important', text: 'Somewhat Important' },
      { id: 'very_important', text: 'Very Important' }
    ],
    tags: ['nightlife', 'entertainment', 'social']
  },
  {
    id: 'community',
    question: 'How important is a strong sense of community and neighborhood events?',
    type: 'likert',
    options: [
      { id: 'not_important', text: 'Not Important' },
      { id: 'somewhat_important', text: 'Somewhat Important' },
      { id: 'very_important', text: 'Very Important' }
    ],
    tags: ['community', 'events', 'social']
  },
  {
    id: 'work_proximity',
    question: 'How important is proximity to your workplace or downtown core?',
    type: 'likert',
    options: [
      { id: 'not_important', text: 'Not Important' },
      { id: 'somewhat_important', text: 'Somewhat Important' },
      { id: 'very_important', text: 'Very Important' }
    ],
    tags: ['downtown', 'work', 'commute']
  },
  {
    id: 'pet_friendly',
    question: 'How important is a pet-friendly environment with dog parks?',
    type: 'likert',
    options: [
      { id: 'not_important', text: 'Not Important' },
      { id: 'somewhat_important', text: 'Somewhat Important' },
      { id: 'very_important', text: 'Very Important' }
    ],
    tags: ['pet-friendly', 'dogs', 'parks']
  },
  {
    id: 'cultural',
    question: 'How important is access to cultural venues like galleries and theaters?',
    type: 'likert',
    options: [
      { id: 'not_important', text: 'Not Important' },
      { id: 'somewhat_important', text: 'Somewhat Important' },
      { id: 'very_important', text: 'Very Important' }
    ],
    tags: ['cultural', 'arts', 'entertainment']
  },
  {
    id: 'shopping',
    question: 'How important is being close to shopping centers and retail hubs?',
    type: 'likert',
    options: [
      { id: 'not_important', text: 'Not Important' },
      { id: 'somewhat_important', text: 'Somewhat Important' },
      { id: 'very_important', text: 'Very Important' }
    ],
    tags: ['shopping', 'retail', 'convenience']
  },
  {
    id: 'quiet',
    question: 'How important is having quiet, residential streets and low traffic?',
    type: 'likert',
    options: [
      { id: 'not_important', text: 'Not Important' },
      { id: 'somewhat_important', text: 'Somewhat Important' },
      { id: 'very_important', text: 'Very Important' }
    ],
    tags: ['quiet', 'residential', 'peaceful']
  },
  {
    id: 'healthcare',
    question: 'How important is access to health care facilities and hospitals?',
    type: 'likert',
    options: [
      { id: 'not_important', text: 'Not Important' },
      { id: 'somewhat_important', text: 'Somewhat Important' },
      { id: 'very_important', text: 'Very Important' }
    ],
    tags: ['healthcare', 'medical', 'hospitals']
  },
  {
    id: 'bike_friendly',
    question: 'How important is bike-friendly infrastructure and trails?',
    type: 'likert',
    options: [
      { id: 'not_important', text: 'Not Important' },
      { id: 'somewhat_important', text: 'Somewhat Important' },
      { id: 'very_important', text: 'Very Important' }
    ],
    tags: ['bike-friendly', 'cycling', 'trails']
  },
  {
    id: 'freeway_access',
    question: 'How important is easy access to major freeways or highways?',
    type: 'likert',
    options: [
      { id: 'not_important', text: 'Not Important' },
      { id: 'somewhat_important', text: 'Somewhat Important' },
      { id: 'very_important', text: 'Very Important' }
    ],
    tags: ['freeway', 'highway', 'commute']
  },
  {
    id: 'historic',
    question: 'How important is a balance of modern development and historic character?',
    type: 'likert',
    options: [
      { id: 'not_important', text: 'Not Important' },
      { id: 'somewhat_important', text: 'Somewhat Important' },
      { id: 'very_important', text: 'Very Important' }
    ],
    tags: ['historic', 'modern', 'architecture']
  },
  {
    id: 'traffic',
    question: 'How important is low overall congestion and traffic flow?',
    type: 'likert',
    options: [
      { id: 'not_important', text: 'Not Important' },
      { id: 'somewhat_important', text: 'Somewhat Important' },
      { id: 'very_important', text: 'Very Important' }
    ],
    tags: ['traffic', 'congestion', 'commute']
  },
  {
    id: 'fitness',
    question: 'How important is nearby fitness and recreational facilities?',
    type: 'likert',
    options: [
      { id: 'not_important', text: 'Not Important' },
      { id: 'somewhat_important', text: 'Somewhat Important' },
      { id: 'very_important', text: 'Very Important' }
    ],
    tags: ['fitness', 'recreation', 'sports']
  },
  {
    id: 'family',
    question: 'How important is living in a family-oriented neighborhood?',
    type: 'likert',
    options: [
      { id: 'not_important', text: 'Not Important' },
      { id: 'somewhat_important', text: 'Somewhat Important' },
      { id: 'very_important', text: 'Very Important' }
    ],
    tags: ['family', 'children', 'community']
  },
  {
    id: 'airport',
    question: 'How important is proximity to the airport for travel convenience?',
    type: 'likert',
    options: [
      { id: 'not_important', text: 'Not Important' },
      { id: 'somewhat_important', text: 'Somewhat Important' },
      { id: 'very_important', text: 'Very Important' }
    ],
    tags: ['airport', 'travel', 'convenience']
  },
  {
    id: 'sustainability',
    question: 'How important is environmental sustainability and green initiatives?',
    type: 'likert',
    options: [
      { id: 'not_important', text: 'Not Important' },
      { id: 'somewhat_important', text: 'Somewhat Important' },
      { id: 'very_important', text: 'Very Important' }
    ],
    tags: ['sustainable', 'green', 'eco-friendly']
  },
  {
    id: 'identity',
    question: 'How important is a neighborhood with a distinct local identity?',
    type: 'likert',
    options: [
      { id: 'not_important', text: 'Not Important' },
      { id: 'somewhat_important', text: 'Somewhat Important' },
      { id: 'very_important', text: 'Very Important' }
    ],
    tags: ['identity', 'character', 'unique']
  }
];

export const likertLabels = {
  not_important: 'Not Important',
  somewhat_important: 'Somewhat Important',
  very_important: 'Very Important'
};
