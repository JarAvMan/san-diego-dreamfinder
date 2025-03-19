
import { Neighborhood } from '../types';

export const sandiegoNeighborhoods: Neighborhood[] = [
  {
    id: 'la-jolla',
    name: 'La Jolla',
    description: 'An upscale coastal community with stunning ocean views, beautiful beaches, and a vibrant village atmosphere. La Jolla offers luxury living with high-end shopping, dining, and cultural attractions.',
    image: 'https://images.unsplash.com/photo-1569398327329-36a1aeee9574?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Luxury coastal living',
      'Top-rated schools',
      'Beautiful beaches and coves',
      'High-end shopping and dining',
      'UCSD campus nearby'
    ],
    budget: {
      min: 1500000,
      max: 10000000
    },
    tags: ['luxury', 'beach', 'schools', 'walkable', 'upscale']
  },
  {
    id: 'north-park',
    name: 'North Park',
    description: 'A vibrant, urban neighborhood known for its arts scene, craft breweries, diverse dining options, and historic Craftsman homes. North Park is popular with young professionals and has a lively atmosphere.',
    image: 'https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Trendy urban atmosphere',
      'Craft beer and dining scene',
      'Historic Craftsman homes',
      'Walkable streets',
      'Arts and culture'
    ],
    budget: {
      min: 700000,
      max: 1200000
    },
    tags: ['urban', 'nightlife', 'walkable', 'arts', 'breweries']
  },
  {
    id: 'coronado',
    name: 'Coronado',
    description: 'An exclusive island community with beautiful beaches, the iconic Hotel Del Coronado, and a small-town atmosphere. Coronado offers a peaceful environment with upscale homes and a village-like downtown.',
    image: 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Island living',
      'Beautiful beaches',
      'Small-town atmosphere',
      'Historic Hotel Del Coronado',
      'Excellent schools'
    ],
    budget: {
      min: 1800000,
      max: 8000000
    },
    tags: ['luxury', 'beach', 'quiet', 'schools', 'upscale']
  },
  {
    id: 'little-italy',
    name: 'Little Italy',
    description: 'A vibrant downtown neighborhood with Italian heritage, known for its restaurant scene, farmers markets, and urban lifestyle. Little Italy offers modern condos and lofts with easy access to downtown amenities.',
    image: 'https://images.unsplash.com/photo-1617469767053-7010bd994130?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Urban downtown living',
      'Amazing restaurant scene',
      'Modern condos and lofts',
      'Farmers markets',
      'Waterfront access'
    ],
    budget: {
      min: 600000,
      max: 1500000
    },
    tags: ['urban', 'walkable', 'nightlife', 'condos', 'dining']
  },
  {
    id: 'mission-hills',
    name: 'Mission Hills',
    description: 'A prestigious neighborhood with historic homes, tree-lined streets, and stunning views. Mission Hills offers upscale living with convenient access to downtown and a strong community feel.',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Historic, elegant homes',
      'Upscale, established neighborhood',
      'Stunning views',
      'Tree-lined streets',
      'Strong community'
    ],
    budget: {
      min: 1200000,
      max: 3000000
    },
    tags: ['upscale', 'historic', 'quiet', 'views', 'community']
  },
  {
    id: 'pacific-beach',
    name: 'Pacific Beach',
    description: 'A lively beach community with a mix of young professionals and longtime residents. Pacific Beach offers a relaxed beach lifestyle with plenty of dining, shopping, and nightlife along with beach access.',
    image: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Beach lifestyle',
      'Active nightlife',
      'Boardwalk and beaches',
      'Mix of housing options',
      'Young, energetic vibe'
    ],
    budget: {
      min: 800000,
      max: 2000000
    },
    tags: ['beach', 'nightlife', 'young', 'active', 'casual']
  },
  {
    id: 'hillcrest',
    name: 'Hillcrest',
    description: 'A diverse, urban neighborhood known for its LGBTQ+ community, eclectic shops, restaurants, and nightlife. Hillcrest offers a mix of historic homes and modern condos in a walkable environment.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Diverse, inclusive community',
      'Vibrant nightlife',
      'Walkable urban environment',
      'Eclectic dining and shopping',
      'Mix of housing styles'
    ],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['urban', 'diverse', 'nightlife', 'walkable', 'LGBTQ']
  },
  {
    id: 'carmel-valley',
    name: 'Carmel Valley',
    description: 'A planned community with excellent schools, parks, and family-friendly amenities. Carmel Valley offers newer homes, shopping centers, and a suburban atmosphere with easy access to employment centers.',
    image: 'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Family-friendly environment',
      'Top-rated schools',
      'Newer homes and communities',
      'Parks and recreation',
      'Close to tech employers'
    ],
    budget: {
      min: 1000000,
      max: 2500000
    },
    tags: ['suburban', 'family', 'schools', 'planned', 'newer']
  },
  {
    id: 'del-mar',
    name: 'Del Mar',
    description: 'An exclusive coastal village with beautiful beaches, the famous Del Mar racetrack, and upscale living. Del Mar offers luxury homes with ocean views and a charming downtown village.',
    image: 'https://images.unsplash.com/photo-1563461661744-2c7e2cc1496b?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Luxury coastal village',
      'Beautiful beaches',
      'Del Mar racetrack',
      'Upscale dining and shopping',
      'Ocean view properties'
    ],
    budget: {
      min: 1800000,
      max: 10000000
    },
    tags: ['luxury', 'beach', 'upscale', 'village', 'exclusive']
  },
  {
    id: 'normal-heights',
    name: 'Normal Heights',
    description: 'A diverse, mid-city neighborhood with a bohemian vibe, known for its coffee shops, music venues, and historic homes. Normal Heights offers affordability with urban character and a strong sense of community.',
    image: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Bohemian character',
      'Historic homes',
      'Coffee shops and breweries',
      'Arts and music scene',
      'Diverse community'
    ],
    budget: {
      min: 600000,
      max: 1000000
    },
    tags: ['diverse', 'affordable', 'arts', 'historic', 'community']
  }
];
