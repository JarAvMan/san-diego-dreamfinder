import { Neighborhood } from '@/types';

// San Diego Neighborhoods with descriptions, budget ranges, and images
export const sandiegoNeighborhoods: Neighborhood[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
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
    id: 16,
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
    id: 17,
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
    id: 18,
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
    id: 19,
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
    id: 20,
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
    id: 21,
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
    id: 22,
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
    id: 23,
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
    id: 24,
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
    id: 25,
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
    id: 26,
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
    id: 27,
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
    id: 28,
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
    id: 29,
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
    id: 30,
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
  },
  {
    id: 31,
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
    id: 32,
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
  },
  {
    id: 33,
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
    id: 34,
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
    id: 35,
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
  },
  {
    id: 36,
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
    id: 37,
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
  },
  {
    id: 38,
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
    id: 39,
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
    id: 40,
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
