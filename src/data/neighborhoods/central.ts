
import { Neighborhood } from './types';

// Central San Diego neighborhoods
export const centralNeighborhoods: Neighborhood[] = [
  {
    id: '2',
    name: 'North Park',
    description: 'Hip urban neighborhood with craft breweries, eateries, and vibrant nightlife.',
    image: '/Images/North-Park.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=North+Park',
    budget: {
      min: 750000,
      max: 1500000
    },
    keyFeatures: [
      'Trendy restaurants and bars',
      'Craft beer scene',
      'Art galleries and studios',
      'Historic Craftsman homes'
    ],
    tags: ['Trendy', 'Urban', 'Nightlife', 'Breweries', 'Historic']
  },
  {
    id: '4',
    name: 'Downtown San Diego',
    description: 'Urban living with high-rise condos, Gaslamp Quarter entertainment, and waterfront views.',
    image: '/Images/Downtown-San-Diego.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=Downtown+San+Diego',
    budget: {
      min: 600000,
      max: 3000000
    },
    keyFeatures: [
      'Gaslamp Quarter nightlife',
      'Petco Park and sporting events',
      'Waterfront attractions',
      'Luxury high-rise living'
    ],
    tags: ['Urban', 'Nightlife', 'Walkable', 'Condos', 'Entertainment']
  },
  {
    id: '7',
    name: 'Hillcrest',
    description: 'Diverse, LGBTQ-friendly urban neighborhood with eclectic shops and restaurants.',
    image: '/Images/Hillcrest.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=Hillcrest',
    budget: {
      min: 700000,
      max: 1500000
    },
    keyFeatures: [
      'LGBTQ+ friendly community',
      'Diverse dining scene',
      'Boutique shopping',
      'Vibrant nightlife and events'
    ],
    tags: ['Diverse', 'Urban', 'LGBTQ-Friendly', 'Restaurants', 'Walkable']
  },
  {
    id: '9',
    name: 'Mission Hills',
    description: 'Elegant neighborhood with historic homes, canyon views, and proximity to downtown.',
    image: '/Images/Mission-Hills.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=Mission+Hills',
    budget: {
      min: 1000000,
      max: 2500000
    },
    keyFeatures: [
      'Historic architecture',
      'Canyon views',
      'Walkable village area',
      'Upscale boutiques and dining'
    ],
    tags: ['Historic', 'Upscale', 'Views', 'Charming', 'Established']
  },
  {
    id: '14',
    name: 'South Park',
    description: 'Charming historic neighborhood with craftsman homes, local shops, and community feel.',
    image: '/Images/South-Park.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=South+Park',
    budget: {
      min: 750000,
      max: 1500000
    },
    keyFeatures: [
      'Craftsman architecture',
      'Independent boutiques',
      'Community events',
      'Walkable neighborhood'
    ],
    tags: ['Historic', 'Trendy', 'Walkable', 'Community', 'Charming']
  },
  {
    id: '15',
    name: 'Bankers Hill',
    description: 'Urban neighborhood near Balboa Park with historic homes, modern condos, and canyon views.',
    image: '/Images/Bankers-Hill.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=Bankers+Hill',
    budget: {
      min: 700000,
      max: 2500000
    },
    keyFeatures: [
      'Balboa Park adjacent',
      'Historic mansions',
      'Modern high-rises',
      'Canyon and city views'
    ],
    tags: ['Urban', 'Historic', 'Views', 'Walkable', 'Park']
  },
  {
    id: '20',
    name: 'Kensington',
    description: 'Charming, historic neighborhood with Spanish architecture, a walkable village, and community events.',
    image: '/Images/Kensington.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=Kensington',
    budget: {
      min: 800000,
      max: 1800000
    },
    keyFeatures: [
      'Spanish-style homes',
      'Walkable village center',
      'Community library and park',
      'Local restaurants and theater'
    ],
    tags: ['Historic', 'Spanish', 'Village', 'Charming', 'Walkable']
  },
  {
    id: '21',
    name: 'Little Italy',
    description: 'Vibrant urban district with Italian heritage, farmers markets, restaurants, and modern condos.',
    image: '/Images/Downtown-San-Diego.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=Little+Italy',
    budget: {
      min: 600000,
      max: 2000000
    },
    keyFeatures: [
      'Saturday Mercato farmers market',
      'Italian restaurants and cafes',
      'Waterfront adjacent',
      'Urban loft living'
    ],
    tags: ['Urban', 'Food', 'Walkable', 'Culture', 'Condos']
  },
  {
    id: '22',
    name: 'University Heights',
    description: 'Diverse urban neighborhood with craftsman homes, international dining, and trendy shops.',
    image: '/Images/Normal-Heights.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=University+Heights',
    budget: {
      min: 750000,
      max: 1300000
    },
    keyFeatures: [
      'Historic streetcar suburb',
      'Diverse food scene',
      'Trolley Barn Park',
      'Bungalow and craftsman homes'
    ],
    tags: ['Urban', 'Diverse', 'Historic', 'Food', 'Walkable']
  },
  {
    id: '26',
    name: 'Normal Heights',
    description: 'Eclectic urban neighborhood with arts focus, diverse dining, and historic bungalows.',
    image: '/Images/Normal-Heights.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=Normal+Heights',
    budget: {
      min: 650000,
      max: 1200000
    },
    keyFeatures: [
      'Adams Avenue antique shops',
      'Art and music events',
      'Diverse food options',
      'Craftsman and Spanish homes'
    ],
    tags: ['Urban', 'Arts', 'Diverse', 'Historic', 'Walkable']
  },
  {
    id: '27',
    name: 'Mission Valley',
    description: 'Central commercial and residential hub with shopping centers, condos, and river park.',
    image: '/Images/Mission-Valley.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=Mission+Valley',
    budget: {
      min: 500000,
      max: 1000000
    },
    keyFeatures: [
      'Major shopping centers',
      'San Diego River trail',
      'Central location',
      'Condo and apartment living'
    ],
    tags: ['Shopping', 'Central', 'Condos', 'Convenient', 'Commerce']
  },
  {
    id: '30',
    name: 'Talmadge',
    description: 'Historic neighborhood with tree-lined streets, Spanish architecture, and central location.',
    image: '/Images/Talmadge.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=Talmadge',
    budget: {
      min: 700000,
      max: 1300000
    },
    keyFeatures: [
      'Historic homes with character',
      'Tree-lined streets',
      'Central urban location',
      'Spanish and Mediterranean architecture'
    ],
    tags: ['Historic', 'Character', 'Spanish', 'Trees', 'Central']
  }
];
