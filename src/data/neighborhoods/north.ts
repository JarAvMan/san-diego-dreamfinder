
import { Neighborhood } from './types';

// North County neighborhoods
export const northNeighborhoods: Neighborhood[] = [
  {
    id: '3',
    name: 'Scripps Ranch',
    description: 'Family-friendly suburban community with excellent schools and natural surroundings.',
    image: '/Images/Scripps-Ranch.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=Scripps+Ranch',
    budget: {
      min: 900000,
      max: 1800000
    },
    keyFeatures: [
      'Top-rated public schools',
      'Lake Miramar recreation',
      'Community events and parks',
      'Eucalyptus trees and green spaces'
    ],
    tags: ['Family-Friendly', 'Schools', 'Suburban', 'Safe', 'Nature']
  },
  {
    id: '5',
    name: 'Carmel Valley',
    description: 'Modern master-planned community with top schools, parks, and shopping centers.',
    image: '/Images/Carmel-Valley.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=Carmel+Valley',
    budget: {
      min: 1100000,
      max: 2500000
    },
    keyFeatures: [
      'Excellent public schools',
      'Family-oriented community',
      'Tech and business hub',
      'Modern amenities and shopping'
    ],
    tags: ['Family-Friendly', 'Upscale', 'Master-Planned', 'Schools', 'Modern']
  },
  {
    id: '13',
    name: 'Rancho Santa Fe',
    description: 'Exclusive inland community with luxury estates, equestrian facilities, and privacy.',
    image: '/Images/Rancho-Santa-Fe.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=Rancho+Santa+Fe',
    budget: {
      min: 2500000,
      max: 20000000
    },
    keyFeatures: [
      'Equestrian properties',
      'World-class golf',
      'Large estate homes',
      'Private and exclusive community'
    ],
    tags: ['Luxury', 'Equestrian', 'Estates', 'Private', 'Golf']
  },
  {
    id: '19',
    name: 'University City',
    description: 'Mixed-use community near UCSD with a combination of student housing, family homes, and tech jobs.',
    image: '/Images/Sorrento-Valley.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=University+City',
    budget: {
      min: 700000,
      max: 1500000
    },
    keyFeatures: [
      'Proximity to UCSD',
      'UTC Shopping Center',
      'Tech and biotech jobs',
      'Mix of condos and single-family homes'
    ],
    tags: ['Education', 'Shopping', 'Technology', 'Academic', 'Mixed-Use']
  },
  {
    id: '23',
    name: 'Escondido',
    description: 'Inland North County city with agricultural roots, wineries, and affordable housing options.',
    image: '/Images/Escondido.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=Escondido',
    budget: {
      min: 600000,
      max: 1200000
    },
    keyFeatures: [
      'San Diego Zoo Safari Park',
      'Local wineries and breweries',
      'Historic downtown district',
      'Daley Ranch conservation area'
    ],
    tags: ['Affordable', 'Wineries', 'Historic', 'Spacious', 'Rural']
  },
  {
    id: '24',
    name: 'Rancho Bernardo',
    description: 'Well-established inland community with golf courses, business parks, and family-friendly atmosphere.',
    image: '/Images/Rancho-Bernardo.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=Rancho+Bernardo',
    budget: {
      min: 750000,
      max: 1500000
    },
    keyFeatures: [
      'Golf courses and country clubs',
      'Tech employment centers',
      'Established community',
      'Family-oriented neighborhoods'
    ],
    tags: ['Golf', 'Established', 'Family-Friendly', 'Tech', 'Suburban']
  },
  {
    id: '25',
    name: 'Clairemont',
    description: 'Central suburban community with mid-century homes, canyon views, and convenient location.',
    image: '/Images/Clairemont.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=Clairemont',
    budget: {
      min: 700000,
      max: 1200000
    },
    keyFeatures: [
      'Mid-century architecture',
      'Tecolote Canyon Natural Park',
      'Central location',
      'Family-friendly neighborhoods'
    ],
    tags: ['Central', 'Mid-Century', 'Affordable', 'Family-Friendly', 'Views']
  },
  {
    id: '34',
    name: 'Poway',
    description: 'Inland North County community known for excellent schools, parks, and family-oriented events.',
    image: '/Images/Poway.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=Poway',
    budget: {
      min: 800000,
      max: 1600000
    },
    keyFeatures: [
      'Top-rated Poway Unified School District',
      'Parks and recreation areas',
      'Family-friendly community events',
      'Safe and quiet neighborhoods'
    ],
    tags: ['Schools', 'Family-Friendly', 'Safe', 'Suburban', 'Parks']
  },
  {
    id: '36',
    name: '4s Ranch',
    description: 'Planned community in North County with excellent schools, parks, and family-oriented lifestyle.',
    image: '/Images/4S-Ranch.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=4S+Ranch',
    budget: {
      min: 900000,
      max: 1800000
    },
    keyFeatures: [
      'Top-rated Poway Unified School District',
      'Community parks and recreation',
      'Safe and well-maintained neighborhoods',
      'Family-oriented community events'
    ],
    tags: ['Master-Planned', 'Schools', 'Family-Friendly', 'Safe', 'Suburban']
  },
  {
    id: '38',
    name: 'Mira Mesa',
    description: 'Large suburban community with diverse housing, shopping, and convenient freeway access.',
    image: '/Images/Mira-Mesa.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=Mira+Mesa',
    budget: {
      min: 650000,
      max: 1200000
    },
    keyFeatures: [
      'Affordable housing options',
      'Diverse shopping and dining',
      'Convenient freeway access',
      'Large community park'
    ],
    tags: ['Affordable', 'Convenient', 'Diverse', 'Suburban', 'Central']
  },
  {
    id: '39',
    name: 'Serra Mesa',
    description: 'Central residential community with canyon views, parks, and convenient access to amenities.',
    image: '/Images/Serra-Mesa.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=Serra+Mesa',
    budget: {
      min: 680000,
      max: 1250000
    },
    keyFeatures: [
      'Canyon views and open space',
      'Parks and recreation areas',
      'Central location',
      'Family-friendly neighborhoods'
    ],
    tags: ['Central', 'Views', 'Residential', 'Convenient', 'Parks']
  },
  {
    id: '40',
    name: 'Linda Vista',
    description: 'Central community with a mix of housing options, the University of San Diego, and convenient location.',
    image: '/Images/Linda-Vista.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=Linda+Vista',
    budget: {
      min: 620000,
      max: 1150000
    },
    keyFeatures: [
      'University of San Diego',
      'Mix of housing options',
      'Central location',
      'Parks and recreation areas'
    ],
    tags: ['Central', 'Education', 'Convenient', 'Diverse', 'Residential']
  }
];
