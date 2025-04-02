
import { Neighborhood } from './types';

// East County neighborhoods
export const eastNeighborhoods: Neighborhood[] = [
  {
    id: '28',
    name: 'La Mesa',
    description: 'East County city with historic downtown village, family neighborhoods, and outdoor recreation.',
    image: '/Images/La-Mesa.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=La+Mesa',
    budget: {
      min: 600000,
      max: 1200000
    },
    keyFeatures: [
      'Historic downtown village',
      'Mount Helix views',
      'La Mesa Oktoberfest',
      'Mix of historic and newer homes'
    ],
    tags: ['Historic', 'Village', 'Family-Friendly', 'Established', 'Events']
  },
  {
    id: '29',
    name: 'Allied Gardens',
    description: 'Family-friendly post-war neighborhood with parks, good schools, and community feel.',
    image: '/Images/Allied-Gardens.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=Allied+Gardens',
    budget: {
      min: 700000,
      max: 1100000
    },
    keyFeatures: [
      'Post-war tract homes',
      'Family-oriented community',
      'Parks and recreation centers',
      'Convenient location'
    ],
    tags: ['Family-Friendly', 'Established', 'Parks', 'Mid-Century', 'Affordable']
  },
  {
    id: '33',
    name: 'El Cajon',
    description: 'East County city with a mix of housing options, shopping, and community events.',
    image: '/Images/El-Cajon.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=El+Cajon',
    budget: {
      min: 450000,
      max: 850000
    },
    keyFeatures: [
      'Affordable housing options',
      'Shopping and dining centers',
      'Community events and parks',
      'Easy access to mountains and desert'
    ],
    tags: ['Affordable', 'East County', 'Convenient', 'Family-Friendly', 'Diverse']
  },
  {
    id: '35',
    name: 'Santee',
    description: 'East County city with a mix of housing, shopping, and outdoor recreational opportunities.',
    image: '/Images/Santee.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=Santee',
    budget: {
      min: 600000,
      max: 1100000
    },
    keyFeatures: [
      'Santee Lakes Recreation Preserve',
      'Affordable housing options',
      'Shopping and dining centers',
      'Family-friendly community'
    ],
    tags: ['Recreation', 'Affordable', 'Family-Friendly', 'East County', 'Lakes']
  }
];
