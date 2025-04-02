
import { Neighborhood } from './types';

// Coastal region neighborhoods
export const coastalNeighborhoods: Neighborhood[] = [
  {
    id: '1',
    name: 'La Jolla',
    description: 'Upscale coastal community with beautiful beaches, fine dining, and luxury shopping.',
    image: '/Images/La-Jolla.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=La+Jolla',
    budget: {
      min: 1200000,
      max: 5000000
    },
    keyFeatures: [
      'Beaches and coves',
      'Upscale shopping and dining',
      'Top schools including UCSD',
      'Outdoor recreation options'
    ],
    tags: ['Luxury', 'Beach', 'Upscale', 'Shopping', 'Views']
  },
  {
    id: '8',
    name: 'Coronado',
    description: 'Island community with pristine beaches, the iconic Hotel Del Coronado, and upscale homes.',
    image: '/Images/Coronado.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=Coronado',
    budget: {
      min: 1500000,
      max: 5000000
    },
    keyFeatures: [
      'Coronado Beach',
      'Hotel Del Coronado',
      'Small-town atmosphere',
      'Military presence with Naval Base'
    ],
    tags: ['Beach', 'Luxury', 'Island', 'Historic', 'Resort']
  },
  {
    id: '6',
    name: 'Ocean Beach',
    description: 'Laid-back beach community with a bohemian vibe, surf culture, and casual dining.',
    image: '/Images/Ocean-Beach.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=Ocean+Beach',
    budget: {
      min: 800000,
      max: 1600000
    },
    keyFeatures: [
      'Dog-friendly beach',
      'Ocean Beach Pier',
      'Farmers Market',
      'Surf spots and beach lifestyle'
    ],
    tags: ['Beach', 'Casual', 'Surfing', 'Bohemian', 'Dog-Friendly']
  },
  {
    id: '10',
    name: 'Pacific Beach',
    description: 'Lively beach community popular with young professionals, offering surf, sun, and nightlife.',
    image: '/Images/Pacific-Beach.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=Pacific+Beach',
    budget: {
      min: 800000,
      max: 2000000
    },
    keyFeatures: [
      'Beach and boardwalk',
      'Active nightlife scene',
      'Casual dining options',
      'Young professional population'
    ],
    tags: ['Beach', 'Nightlife', 'Young', 'Active', 'Social']
  },
  {
    id: '11',
    name: 'Point Loma',
    description: 'Peninsula neighborhood with marina lifestyle, ocean views, and historic landmarks.',
    image: '/Images/Point-Loma.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=Point+Loma',
    budget: {
      min: 900000,
      max: 3000000
    },
    keyFeatures: [
      'Cabrillo National Monument',
      'Marinas and yacht clubs',
      'Liberty Station marketplace',
      'Ocean and bay views'
    ],
    tags: ['Water', 'Views', 'Nautical', 'Historic', 'Established']
  },
  {
    id: '12',
    name: 'Del Mar',
    description: 'Coastal village known for beautiful beaches, Del Mar racetrack, and luxury estates.',
    image: '/Images/Del-Mar.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=Del+Mar',
    budget: {
      min: 1500000,
      max: 10000000
    },
    keyFeatures: [
      'Del Mar Racetrack',
      'Beautiful beaches',
      'Village shopping and dining',
      'Luxury oceanfront homes'
    ],
    tags: ['Luxury', 'Beach', 'Upscale', 'Equestrian', 'Village']
  },
  {
    id: '16',
    name: 'Carlsbad',
    description: 'Coastal North County city with beautiful beaches, family attractions, and planned communities.',
    image: '/Images/Carlsbad.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=Carlsbad',
    budget: {
      min: 900000,
      max: 3000000
    },
    keyFeatures: [
      'Carlsbad State Beach',
      'LEGOLAND California',
      'Flower Fields',
      'Master-planned communities'
    ],
    tags: ['Beach', 'Family-Friendly', 'Master-Planned', 'Attractions', 'Resort']
  },
  {
    id: '17',
    name: 'Solana Beach',
    description: 'Small coastal community with excellent beaches, dining scene, and the Cedros Design District.',
    image: '/Images/Solana-Beach.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=Solana+Beach',
    budget: {
      min: 1200000,
      max: 4000000
    },
    keyFeatures: [
      'Cedros Design District',
      'Fletcher Cove Beach',
      'Belly Up Tavern music venue',
      'Coastal bluff views'
    ],
    tags: ['Beach', 'Walkable', 'Design', 'Boutique', 'Concerts']
  },
  {
    id: '18',
    name: 'Encinitas',
    description: 'Eclectic beach town with historic downtown, surf culture, and spiritual attractions.',
    image: '/Images/Cardiff.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=Encinitas',
    budget: {
      min: 1000000,
      max: 3500000
    },
    keyFeatures: [
      'Famous surf spots',
      'Self-Realization Fellowship gardens',
      'Historic downtown',
      'Moonlight Beach'
    ],
    tags: ['Beach', 'Surf', 'Spiritual', 'Eclectic', 'Outdoors']
  },
  {
    id: '31',
    name: 'Bay Park',
    description: 'Residential neighborhood with bay views, proximity to Mission Bay, and a mix of home styles.',
    image: '/Images/Bay-Park.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=Bay+Park',
    budget: {
      min: 750000,
      max: 1400000
    },
    keyFeatures: [
      'Views of Mission Bay and city skyline',
      'Close to Mission Bay Park',
      'Mix of mid-century and newer homes',
      'Quiet residential streets'
    ],
    tags: ['Views', 'Bay', 'Residential', 'Convenient', 'Central']
  },
  {
    id: '37',
    name: 'Bay Ho',
    description: 'Residential neighborhood with bay views, proximity to Mission Bay, and a mix of home styles.',
    image: '/Images/Bay-Ho.jpg',
    kvCoreLink: 'https://jaredharmanrealtor.kvcoreidx.com/search/results?community=Bay+Ho',
    budget: {
      min: 700000,
      max: 1300000
    },
    keyFeatures: [
      'Views of Mission Bay and the city',
      'Close to Mission Bay Park',
      'Mix of mid-century and newer homes',
      'Quiet residential streets'
    ],
    tags: ['Views', 'Bay', 'Residential', 'Convenient', 'Central']
  }
];
