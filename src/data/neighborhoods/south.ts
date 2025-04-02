
import { Neighborhood } from './types';

// South Bay neighborhoods
export const southNeighborhoods: Neighborhood[] = [
  {
    id: '32',
    name: 'Chula Vista',
    description: 'Large South Bay city with diverse communities, family amenities, and waterfront development.',
    image: '/Images/Chula-Vista.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=Chula+Vista',
    budget: {
      min: 550000,
      max: 950000
    },
    keyFeatures: [
      'Affordable housing options',
      'Family-friendly parks and schools',
      'Waterfront development and marina',
      'Diverse community'
    ],
    tags: ['Affordable', 'Family-Friendly', 'Diverse', 'South Bay', 'Waterfront']
  }
];
