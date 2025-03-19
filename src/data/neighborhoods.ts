
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
  },
  {
    id: 'downtown-san-diego',
    name: 'Downtown San Diego',
    description: 'The urban heart of San Diego with high-rise condos, entertainment venues, and business districts. Downtown offers a cosmopolitan lifestyle with waterfront access, nightlife, and cultural attractions.',
    image: 'https://images.unsplash.com/photo-1538975832153-73a0d6c1f74b?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Urban high-rise living',
      'Waterfront and marina access',
      'Gaslamp Quarter nightlife',
      'Cultural venues and museums',
      'Walkable urban lifestyle'
    ],
    budget: {
      min: 500000,
      max: 3000000
    },
    tags: ['urban', 'nightlife', 'walkable', 'condos', 'waterfront']
  },
  {
    id: 'south-park',
    name: 'South Park',
    description: 'A charming neighborhood with a small-town feel, boutique shopping, and craftsman homes. South Park offers a quieter alternative to North Park with a strong sense of community and local businesses.',
    image: 'https://images.unsplash.com/photo-1560518883-729fafc2da6d?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Boutique shopping',
      'Craftsman homes',
      'Community-oriented',
      'Local cafes and restaurants',
      'Family-friendly'
    ],
    budget: {
      min: 750000,
      max: 1300000
    },
    tags: ['community', 'quiet', 'historic', 'walkable', 'family']
  },
  {
    id: 'bankers-hill',
    name: 'Bankers Hill',
    description: 'An elegant neighborhood adjacent to Balboa Park with historic mansions and modern high-rises. Bankers Hill offers panoramic city views, canyon overlooks, and a sophisticated urban lifestyle.',
    image: 'https://images.unsplash.com/photo-1560519307-9e73b3a3601d?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Historic architecture',
      'Balboa Park access',
      'City and canyon views',
      'Mix of homes and condos',
      'Pedestrian bridges'
    ],
    budget: {
      min: 800000,
      max: 2500000
    },
    tags: ['upscale', 'historic', 'views', 'walkable', 'parks']
  },
  {
    id: 'ocean-beach',
    name: 'Ocean Beach',
    description: 'A laid-back, bohemian beach community with a strong surfing culture and local vibe. Ocean Beach offers a casual lifestyle with independent shops, a fishing pier, and a dog-friendly beach.',
    image: 'https://images.unsplash.com/photo-1578302758063-0ef3e048ca89?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Casual beach lifestyle',
      'Surfing culture',
      'Eclectic shops and dining',
      'Dog-friendly beach',
      'Farmers market'
    ],
    budget: {
      min: 800000,
      max: 1800000
    },
    tags: ['beach', 'casual', 'bohemian', 'surfing', 'local']
  },
  {
    id: 'mission-beach',
    name: 'Mission Beach',
    description: 'A vibrant beachfront community with a boardwalk, amusement park, and active lifestyle. Mission Beach offers beachfront properties, vacation rentals, and endless outdoor recreation opportunities.',
    image: 'https://images.unsplash.com/photo-1586803134530-30ba60cbe2c3?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Beachfront properties',
      'Boardwalk culture',
      'Belmont Park amusement',
      'Water sports and recreation',
      'Vibrant beach scene'
    ],
    budget: {
      min: 1000000,
      max: 4000000
    },
    tags: ['beach', 'active', 'tourist', 'recreation', 'vacation']
  },
  {
    id: 'point-loma',
    name: 'Point Loma',
    description: 'A scenic peninsula with maritime history, waterfront areas, and military presence. Point Loma offers stunning bay views, prestigious homes, marinas, and the iconic Cabrillo National Monument.',
    image: 'https://images.unsplash.com/photo-1596396094534-5fb45a0bd141?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Ocean and bay views',
      'Maritime history',
      'Marinas and yacht clubs',
      'Historic lighthouse',
      'Military facilities'
    ],
    budget: {
      min: 900000,
      max: 3500000
    },
    tags: ['waterfront', 'historic', 'upscale', 'maritime', 'views']
  },
  {
    id: 'solana-beach',
    name: 'Solana Beach',
    description: 'A coastal community with blufftop homes, beach access, and the Cedros Design District. Solana Beach offers a relaxed atmosphere with upscale shopping, dining, and the renowned Belly Up music venue.',
    image: 'https://images.unsplash.com/photo-1566159199879-3e99f23e63b3?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Design district shopping',
      'Live music venues',
      'Fletcher Cove Beach Park',
      'Train station access',
      'Upscale coastal living'
    ],
    budget: {
      min: 1200000,
      max: 4000000
    },
    tags: ['beach', 'upscale', 'arts', 'design', 'coastal']
  },
  {
    id: 'rancho-santa-fe',
    name: 'Rancho Santa Fe',
    description: 'One of Southern California\'s most exclusive communities with estate properties, equestrian facilities, and country clubs. Rancho Santa Fe offers luxury rural living with privacy and spacious lots.',
    image: 'https://images.unsplash.com/photo-1606768666853-403c90a981ad?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Estate properties',
      'Equestrian lifestyle',
      'Golf courses and country clubs',
      'Privacy and security',
      'Rural sophistication'
    ],
    budget: {
      min: 2500000,
      max: 20000000
    },
    tags: ['luxury', 'estates', 'equestrian', 'golf', 'exclusive']
  },
  {
    id: 'old-town',
    name: 'Old Town',
    description: 'The historic heart of San Diego with Mexican heritage, museums, and cultural attractions. Old Town offers a glimpse into early California with preserved buildings, restaurants, and festive atmosphere.',
    image: 'https://images.unsplash.com/photo-1576488489579-6967c02c56fc?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Historic district',
      'Mexican restaurants',
      'Museums and tours',
      'Cultural festivals',
      'Tourist destination'
    ],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['historic', 'cultural', 'tourist', 'walkable', 'dining']
  },
  {
    id: 'kensington',
    name: 'Kensington',
    description: 'A charming neighborhood with Spanish-style homes, a walkable business district, and strong community spirit. Kensington offers a small-town feel with tree-lined streets and an independent movie theater.',
    image: 'https://images.unsplash.com/photo-1597575732103-9f6d520143d1?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Spanish-style architecture',
      'Walkable village center',
      'Community events',
      'Local library',
      'Charming streetscape'
    ],
    budget: {
      min: 850000,
      max: 1700000
    },
    tags: ['community', 'walkable', 'historic', 'quiet', 'charming']
  },
  {
    id: 'la-mesa',
    name: 'La Mesa',
    description: 'A family-friendly suburb known as the "Jewel of the Hills" with a mix of housing options and a revitalized downtown. La Mesa offers good schools, community events, and convenient shopping centers.',
    image: 'https://images.unsplash.com/photo-1596312862268-d63a6f54ba2d?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Historic downtown village',
      'Family-oriented community',
      'Mix of housing options',
      'Trolley access',
      'Community events'
    ],
    budget: {
      min: 600000,
      max: 1200000
    },
    tags: ['suburban', 'family', 'community', 'transit', 'affordable']
  },
  {
    id: 'scripps-ranch',
    name: 'Scripps Ranch',
    description: 'A master-planned community with eucalyptus trees, family homes, and excellent schools. Scripps Ranch offers a suburban lifestyle with parks, lakes, and a strong sense of community.',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Top-rated schools',
      'Family-oriented community',
      'Miramar Reservoir access',
      'Eucalyptus-lined streets',
      'Community organizations'
    ],
    budget: {
      min: 800000,
      max: 1800000
    },
    tags: ['suburban', 'family', 'schools', 'planned', 'community']
  },
  {
    id: 'carlsbad',
    name: 'Carlsbad',
    description: 'A coastal city with beautiful beaches, flower fields, and family attractions. Carlsbad offers upscale living with master-planned communities, resort hotels, and the LEGOLAND theme park.',
    image: 'https://images.unsplash.com/photo-1565009591067-74a5a4e3d3bd?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Beautiful beaches',
      'Flower fields',
      'LEGOLAND California',
      'Golf courses',
      'Premium shopping'
    ],
    budget: {
      min: 900000,
      max: 3000000
    },
    tags: ['beach', 'family', 'tourist', 'upscale', 'planned']
  },
  {
    id: 'escondido',
    name: 'Escondido',
    description: 'A diverse inland city with agricultural heritage, arts scene, and affordable housing options. Escondido offers a mix of urban and rural experiences with wineries, parks, and cultural attractions.',
    image: 'https://images.unsplash.com/photo-1559751449-5114ce1c28fa?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Diverse housing options',
      'Arts and culture center',
      'San Diego Zoo Safari Park',
      'Wineries and breweries',
      'Agricultural heritage'
    ],
    budget: {
      min: 500000,
      max: 1000000
    },
    tags: ['affordable', 'diverse', 'arts', 'rural', 'family']
  },
  {
    id: 'old-chula-vista',
    name: 'Old Chula Vista',
    description: 'The historic core of Chula Vista with charming vintage homes, tree-lined streets, and a revitalized downtown. Old Chula Vista offers character and community with convenient amenities.',
    image: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Historic architecture',
      'Revitalized downtown',
      'Community parks',
      'Tree-lined streets',
      'Cultural diversity'
    ],
    budget: {
      min: 550000,
      max: 900000
    },
    tags: ['historic', 'affordable', 'diverse', 'community', 'walkable']
  },
  {
    id: 'new-chula-vista',
    name: 'New Chula Vista',
    description: 'The eastern expansion of Chula Vista with master-planned communities, modern amenities, and family-friendly neighborhoods. New Chula Vista offers newer homes, shopping centers, and recreational facilities.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Master-planned communities',
      'Modern homes',
      'Olympic Training Center',
      'Shopping centers',
      'Family-oriented'
    ],
    budget: {
      min: 600000,
      max: 1000000
    },
    tags: ['suburban', 'family', 'planned', 'newer', 'affordable']
  },
  {
    id: 'otay-mesa',
    name: 'Otay Mesa',
    description: 'A developing area with industrial zones, border proximity, and newer residential communities. Otay Mesa offers affordable housing options with access to employment centers and the Mexican border.',
    image: 'https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Affordable housing',
      'Industrial employment',
      'Border access',
      'Newer developments',
      'Growing community'
    ],
    budget: {
      min: 500000,
      max: 800000
    },
    tags: ['affordable', 'industrial', 'border', 'developing', 'diverse']
  },
  {
    id: 'imperial-beach',
    name: 'Imperial Beach',
    description: 'The southernmost beach city in California with a laid-back atmosphere, surfing culture, and coastal access. Imperial Beach offers more affordable coastal living with ongoing redevelopment.',
    image: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Surfing culture',
      'Affordable beach living',
      'Tijuana Estuary',
      'Fishing pier',
      'Casual atmosphere'
    ],
    budget: {
      min: 600000,
      max: 1300000
    },
    tags: ['beach', 'affordable', 'casual', 'surfing', 'diverse']
  },
  {
    id: 'mira-mesa',
    name: 'Mira Mesa',
    description: 'A diverse suburban community with tech industry presence, shopping centers, and family neighborhoods. Mira Mesa offers cultural diversity with a range of housing options and good schools.',
    image: 'https://images.unsplash.com/photo-1560518883-5580d0a4d4d9?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Cultural diversity',
      'Tech employment',
      'Family neighborhoods',
      'Shopping centers',
      'Community parks'
    ],
    budget: {
      min: 650000,
      max: 1100000
    },
    tags: ['diverse', 'suburban', 'family', 'tech', 'affordable']
  },
  {
    id: 'kearny-mesa',
    name: 'Kearny Mesa',
    description: 'A commercial and industrial area with Asian cultural influence, restaurant scene, and business districts. Kearny Mesa offers convenient location with diverse dining options and shopping centers.',
    image: 'https://images.unsplash.com/photo-1626624340240-aadc087dd7f1?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Asian dining scene',
      'Central location',
      'Business district',
      'Montgomery Field airport',
      'Shopping centers'
    ],
    budget: {
      min: 550000,
      max: 900000
    },
    tags: ['commercial', 'central', 'diverse', 'dining', 'asian']
  },
  {
    id: 'el-cajon',
    name: 'El Cajon',
    description: 'A diverse valley city with Middle Eastern influence, affordable housing, and strong community. El Cajon offers a mix of urban and suburban areas with cultural diversity and family-friendly neighborhoods.',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Cultural diversity',
      'Affordable housing',
      'Middle Eastern community',
      'Local events',
      'Valley setting'
    ],
    budget: {
      min: 500000,
      max: 800000
    },
    tags: ['affordable', 'diverse', 'valley', 'family', 'cultural']
  },
  {
    id: 'santee',
    name: 'Santee',
    description: 'A family-friendly suburban city with parks, outdoor recreation, and affordable housing. Santee offers a small-town feel with community events, shopping centers, and access to nature preserves.',
    image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Family-oriented',
      'Santee Lakes Recreation',
      'Shopping centers',
      'Affordable housing',
      'Community events'
    ],
    budget: {
      min: 550000,
      max: 900000
    },
    tags: ['suburban', 'family', 'affordable', 'outdoor', 'community']
  },
  {
    id: 'city-heights',
    name: 'City Heights',
    description: 'One of San Diego\'s most diverse neighborhoods with international flair, affordable housing, and urban revitalization. City Heights offers cultural richness with global markets, restaurants, and community activism.',
    image: 'https://images.unsplash.com/photo-1600041898317-de4c2ba29ecc?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Cultural diversity',
      'Affordable housing',
      'International markets',
      'Community activism',
      'Urban revitalization'
    ],
    budget: {
      min: 450000,
      max: 750000
    },
    tags: ['diverse', 'affordable', 'urban', 'international', 'community']
  },
  {
    id: 'rancho-san-diego',
    name: 'Rancho San Diego',
    description: 'A master-planned community with golf courses, natural preserves, and suburban lifestyle. Rancho San Diego offers family-friendly neighborhoods, shopping centers, and outdoor recreation opportunities.',
    image: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Master-planned community',
      'Golf courses',
      'Nature preserves',
      'Family neighborhoods',
      'Shopping centers'
    ],
    budget: {
      min: 650000,
      max: 1000000
    },
    tags: ['suburban', 'family', 'planned', 'golf', 'outdoor']
  },
  {
    id: 'encanto',
    name: 'Encanto',
    description: 'A diverse southeastern neighborhood with a mix of housing styles, canyon views, and community pride. Encanto offers affordability, larger lots, and convenient access to downtown San Diego.',
    image: 'https://images.unsplash.com/photo-1560518883-7f777e4e7c95?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Affordable housing',
      'Cultural diversity',
      'Canyon views',
      'Community pride',
      'Larger lots'
    ],
    budget: {
      min: 450000,
      max: 700000
    },
    tags: ['affordable', 'diverse', 'views', 'community', 'spacious']
  },
  {
    id: 'barrio-logan',
    name: 'Barrio Logan',
    description: 'A historic Mexican-American neighborhood with vibrant arts scene, cultural heritage, and waterfront industry. Barrio Logan offers colorful murals, Chicano Park, and a developing food and arts scene.',
    image: 'https://images.unsplash.com/photo-1556909114-9d3c3ca585a2?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Chicano Park murals',
      'Mexican-American heritage',
      'Arts district',
      'Waterfront industry',
      'Community activism'
    ],
    budget: {
      min: 500000,
      max: 800000
    },
    tags: ['cultural', 'arts', 'historic', 'diverse', 'developing']
  },
  {
    id: 'national-city',
    name: 'National City',
    description: 'A diverse working-class city with industrial areas, affordable housing, and Filipino influence. National City offers convenience to downtown, shopping centers, and a developing waterfront.',
    image: 'https://images.unsplash.com/photo-1574297498358-e4ded1749fa5?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Affordable housing',
      'Filipino community',
      'Naval base access',
      'Mile of Cars auto mall',
      'Diverse neighborhoods'
    ],
    budget: {
      min: 450000,
      max: 700000
    },
    tags: ['affordable', 'diverse', 'industrial', 'working-class', 'convenient']
  },
  {
    id: 'mission-valley',
    name: 'Mission Valley',
    description: 'A central commercial district with shopping centers, condo developments, and river parkland. Mission Valley offers convenient location, modern living options, and easy freeway access.',
    image: 'https://images.unsplash.com/photo-1574958269340-fa927503f3dd?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Shopping and entertainment',
      'Modern condos',
      'San Diego River trail',
      'Central location',
      'Transit access'
    ],
    budget: {
      min: 550000,
      max: 1000000
    },
    tags: ['central', 'condos', 'shopping', 'transit', 'convenient']
  },
  {
    id: 'fletcher-hills',
    name: 'Fletcher Hills',
    description: 'A quiet residential neighborhood with hillside homes, suburban atmosphere, and family focus. Fletcher Hills offers views, good schools, and a peaceful environment on the border of El Cajon and La Mesa.',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Hillside views',
      'Quiet streets',
      'Family neighborhoods',
      'Good schools',
      'Suburban atmosphere'
    ],
    budget: {
      min: 650000,
      max: 900000
    },
    tags: ['suburban', 'quiet', 'family', 'views', 'established']
  },
  {
    id: 'san-carlos',
    name: 'San Carlos',
    description: 'A well-established suburban community with Lake Murray access, family neighborhoods, and convenient shopping. San Carlos offers quiet streets, outdoor recreation, and a family-oriented environment.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Lake Murray recreation',
      'Family neighborhoods',
      'Mission Trails access',
      'Good schools',
      'Suburban lifestyle'
    ],
    budget: {
      min: 700000,
      max: 1000000
    },
    tags: ['suburban', 'family', 'established', 'outdoor', 'quiet']
  },
  {
    id: 'poway',
    name: 'Poway',
    description: '"The City in the Country" with rural charm, family focus, and excellent schools. Poway offers spacious properties, outdoor recreation, and a strong community identity.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Top-rated schools',
      'Rural atmosphere',
      'Family-oriented',
      'Lake Poway recreation',
      'Community events'
    ],
    budget: {
      min: 750000,
      max: 1500000
    },
    tags: ['suburban', 'family', 'schools', 'outdoor', 'community']
  },
  {
    id: 'rancho-bernardo',
    name: 'Rancho Bernardo',
    description: 'A master-planned community with golf courses, business parks, and retirement communities. Rancho Bernardo offers a mix of family neighborhoods and senior living with convenient amenities.',
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Golf courses',
      'Business centers',
      'Senior communities',
      'Family neighborhoods',
      'Planned development'
    ],
    budget: {
      min: 700000,
      max: 1300000
    },
    tags: ['suburban', 'golf', 'planned', 'senior', 'family']
  },
  {
    id: 'clairemont',
    name: 'Clairemont',
    description: 'A central suburban community with mid-century homes, canyon views, and convenient location. Clairemont offers family-friendly neighborhoods with parks, schools, and easy access to beaches and employment.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Mid-century homes',
      'Central location',
      'Canyon views',
      'Family neighborhoods',
      'Community parks'
    ],
    budget: {
      min: 650000,
      max: 1000000
    },
    tags: ['suburban', 'family', 'central', 'established', 'convenient']
  },
  {
    id: 'serra-mesa',
    name: 'Serra Mesa',
    description: 'A centrally-located community with a medical center, family neighborhoods, and convenient access. Serra Mesa offers affordable living with a suburban feel and proximity to major employment centers.',
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Central location',
      'Medical center',
      'Family neighborhoods',
      'Affordable housing',
      'Community parks'
    ],
    budget: {
      min: 600000,
      max: 900000
    },
    tags: ['central', 'family', 'affordable', 'convenient', 'established']
  },
  {
    id: 'linda-vista',
    name: 'Linda Vista',
    description: 'A diverse hillside community with university presence, cultural variety, and canyon views. Linda Vista offers affordable housing, ethnic diversity, and convenient access to USD and other amenities.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'University of San Diego',
      'Cultural diversity',
      'Affordable housing',
      'Canyon views',
      'Ethnic markets'
    ],
    budget: {
      min: 550000,
      max: 850000
    },
    tags: ['diverse', 'affordable', 'university', 'views', 'convenient']
  },
  {
    id: 'tierrasanta',
    name: 'Tierrasanta',
    description: 'A family-oriented suburban community known as the "Island in the Hills" with parks, schools, and natural surroundings. Tierrasanta offers a quiet environment with outdoor recreation and community focus.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Family-friendly',
      'Parks and trails',
      'Good schools',
      'Military families',
      'Community events'
    ],
    budget: {
      min: 700000,
      max: 1100000
    },
    tags: ['suburban', 'family', 'outdoor', 'quiet', 'military']
  },
  {
    id: 'talmadge',
    name: 'Talmadge',
    description: 'A historic neighborhood with 1920s architecture, charming gateways, and tree-lined streets. Talmadge offers vintage character with proximity to urban amenities and a strong sense of community.',
    image: 'https://images.unsplash.com/photo-1585129918930-02f72156e606?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Historic architecture',
      'Charming gateways',
      'Tree-lined streets',
      'Central location',
      'Strong community'
    ],
    budget: {
      min: 700000,
      max: 1100000
    },
    tags: ['historic', 'charming', 'community', 'central', 'established']
  },
  {
    id: 'oceanside',
    name: 'Oceanside',
    description: 'A coastal city with beautiful beaches, military presence, and growing arts district. Oceanside offers affordable beach living, a pier, harbor, and increasingly vibrant downtown.',
    image: 'https://images.unsplash.com/photo-1582550131146-9fe66b6ef9c0?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Beach lifestyle',
      'Military community',
      'Historic pier',
      'Harbor marina',
      'Growing arts scene'
    ],
    budget: {
      min: 600000,
      max: 1500000
    },
    tags: ['beach', 'military', 'affordable', 'developing', 'coastal']
  },
  {
    id: 'vista',
    name: 'Vista',
    description: 'An inland North County city with hillsides, breweries, and family-friendly neighborhoods. Vista offers affordable housing, a revitalized downtown, and a growing brewery and arts scene.',
    image: 'https://images.unsplash.com/photo-1588385886326-c22e80e2996f?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Craft breweries',
      'Affordable housing',
      'Hillside views',
      'Downtown revitalization',
      'Community events'
    ],
    budget: {
      min: 550000,
      max: 900000
    },
    tags: ['affordable', 'breweries', 'family', 'arts', 'developing']
  },
  {
    id: 'fallbrook',
    name: 'Fallbrook',
    description: 'The "Avocado Capital of the World" with rural charm, agricultural heritage, and artistic community. Fallbrook offers country living with larger properties, small-town atmosphere, and natural beauty.',
    image: 'https://images.unsplash.com/photo-1592595896616-c37162298647?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Agricultural heritage',
      'Rural atmosphere',
      'Avocado groves',
      'Arts community',
      'Larger properties'
    ],
    budget: {
      min: 600000,
      max: 1200000
    },
    tags: ['rural', 'agriculture', 'arts', 'quiet', 'country']
  },
  {
    id: '4s-ranch',
    name: '4S Ranch',
    description: 'A newer master-planned community with family focus, modern homes, and community amenities. 4S Ranch offers excellent schools, parks, and a suburban lifestyle with planned conveniences.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Master-planned community',
      'Excellent schools',
      'Parks and trails',
      'Modern homes',
      'Family-oriented'
    ],
    budget: {
      min: 800000,
      max: 1500000
    },
    tags: ['suburban', 'family', 'planned', 'newer', 'schools']
  },
  {
    id: 'alpine',
    name: 'Alpine',
    description: 'A mountain community with rural atmosphere, outdoor recreation, and larger properties. Alpine offers cooler climate, natural surroundings, and a small-town feel with country living.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Rural mountain setting',
      'Larger properties',
      'Cooler climate',
      'Outdoor recreation',
      'Small-town atmosphere'
    ],
    budget: {
      min: 600000,
      max: 1300000
    },
    tags: ['rural', 'mountains', 'outdoor', 'quiet', 'spacious']
  },
  {
    id: 'ramona',
    name: 'Ramona',
    description: 'A rural valley community with agricultural heritage, equestrian properties, and country lifestyle. Ramona offers affordable larger properties, wineries, and a traditional small-town atmosphere.',
    image: 'https://images.unsplash.com/photo-1438786657495-640937046d18?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Equestrian properties',
      'Rural atmosphere',
      'Wineries and vineyards',
      'Affordable land',
      'Agricultural heritage'
    ],
    budget: {
      min: 550000,
      max: 1000000
    },
    tags: ['rural', 'equestrian', 'agriculture', 'country', 'affordable']
  },
  {
    id: 'julian',
    name: 'Julian',
    description: 'A historic mountain town with gold rush heritage, apple orchards, and four seasons climate. Julian offers a charming downtown, tourism economy, and rural mountain lifestyle.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Historic gold mining town',
      'Apple orchards and pies',
      'Four seasons climate',
      'Tourism destination',
      'Mountain lifestyle'
    ],
    budget: {
      min: 500000,
      max: 1000000
    },
    tags: ['historic', 'rural', 'mountains', 'tourism', 'seasonal']
  },
  {
    id: 'rancho-penasquitos',
    name: 'Rancho Peñasquitos',
    description: 'A family-friendly suburban community with canyon surroundings, parks, and good schools. Rancho Peñasquitos offers a comfortable suburban lifestyle with outdoor recreation and community focus.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Family neighborhoods',
      'Los Peñasquitos Canyon',
      'Good schools',
      'Parks and trails',
      'Suburban lifestyle'
    ],
    budget: {
      min: 700000,
      max: 1200000
    },
    tags: ['suburban', 'family', 'outdoor', 'established', 'community']
  },
  {
    id: 'sorrento-valley',
    name: 'Sorrento Valley',
    description: 'A technology and business hub with office parks, biotech companies, and limited residential areas. Sorrento Valley offers a prime location for tech employment with canyon surroundings.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Tech employment center',
      'Biotech companies',
      'Office parks',
      'Limited residential',
      'Convenient location'
    ],
    budget: {
      min: 700000,
      max: 1100000
    },
    tags: ['tech', 'employment', 'business', 'central', 'convenient']
  },
  {
    id: 'fairbanks-ranch',
    name: 'Fairbanks Ranch',
    description: 'An exclusive gated community with estate properties, equestrian facilities, and country club. Fairbanks Ranch offers luxury living with privacy, security, and prestigious atmosphere.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Gated luxury estates',
      'Country club',
      'Equestrian facilities',
      'Privacy and security',
      'Prestigious address'
    ],
    budget: {
      min: 2500000,
      max: 15000000
    },
    tags: ['luxury', 'gated', 'estates', 'equestrian', 'exclusive']
  },
  {
    id: 'cardiff',
    name: 'Cardiff-by-the-Sea',
    description: 'A charming coastal community with surf culture, beaches, and laid-back lifestyle. Cardiff offers walkable neighborhoods, ocean views, and a strong connection to surfing and beach activities.',
    image: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Surf culture',
      'Beautiful beaches',
      'Ocean view homes',
      'Walkable community',
      'Laid-back lifestyle'
    ],
    budget: {
      min: 1200000,
      max: 3500000
    },
    tags: ['beach', 'surfing', 'coastal', 'laid-back', 'walkable']
  },
  {
    id: 'san-marcos',
    name: 'San Marcos',
    description: 'A growing inland city with university presence, planned communities, and family focus. San Marcos offers affordable housing options, educational institutions, and developing commercial centers.',
    image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Cal State San Marcos',
      'Planned communities',
      'Affordable housing',
      'Family-oriented',
      'Growing city'
    ],
    budget: {
      min: 600000,
      max: 1000000
    },
    tags: ['affordable', 'family', 'education', 'growing', 'planned']
  },
  {
    id: 'allied-gardens',
    name: 'Allied Gardens',
    description: 'A mid-century suburban neighborhood with family focus, community parks, and established homes. Allied Gardens offers quiet streets, good schools, and a traditional suburban lifestyle.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Mid-century homes',
      'Community parks',
      'Family neighborhoods',
      'Good schools',
      'Established community'
    ],
    budget: {
      min: 650000,
      max: 900000
    },
    tags: ['suburban', 'family', 'established', 'quiet', 'community']
  },
  {
    id: 'del-cerro',
    name: 'Del Cerro',
    description: 'A hillside neighborhood with views, family homes, and upscale atmosphere. Del Cerro offers larger properties, panoramic vistas, and a quiet residential environment with convenient location.',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Panoramic views',
      'Upscale homes',
      'Quiet streets',
      'Convenient location',
      'San Diego State proximity'
    ],
    budget: {
      min: 800000,
      max: 1300000
    },
    tags: ['views', 'upscale', 'family', 'quiet', 'established']
  },
  {
    id: 'el-cerrito',
    name: 'El Cerrito',
    description: 'A small, centrally-located neighborhood with mix of homes, canyon views, and convenient access. El Cerrito offers affordability, mid-century architecture, and proximity to SDSU and urban amenities.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Mid-century homes',
      'Central location',
      'Canyon views',
      'SDSU proximity',
      'Affordable housing'
    ],
    budget: {
      min: 600000,
      max: 900000
    },
    tags: ['affordable', 'central', 'established', 'convenient', 'views']
  },
  {
    id: 'lemon-grove',
    name: 'Lemon Grove',
    description: 'A small city with agricultural heritage, working-class neighborhoods, and community pride. Lemon Grove offers affordable housing, cultural diversity, and a small-town atmosphere with urban convenience.',
    image: 'https://images.unsplash.com/photo-1560518883-75e8d5928021?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Affordable housing',
      'Cultural diversity',
      'Small-town character',
      'Transit access',
      'Community pride'
    ],
    budget: {
      min: 500000,
      max: 750000
    },
    tags: ['affordable', 'diverse', 'small-town', 'working-class', 'community']
  },
  {
    id: 'spring-valley',
    name: 'Spring Valley',
    description: 'A diverse unincorporated area with mix of housing, rural pockets, and family neighborhoods. Spring Valley offers affordability, larger lots, and a blend of suburban and semi-rural environments.',
    image: 'https://images.unsplash.com/photo-1560518883-75e8d5928021?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Affordable housing',
      'Cultural diversity',
      'Mix of urban and rural',
      'Family neighborhoods',
      'Larger lots available'
    ],
    budget: {
      min: 500000,
      max: 800000
    },
    tags: ['affordable', 'diverse', 'spacious', 'family', 'semi-rural']
  },
  {
    id: 'paradise-hills',
    name: 'Paradise Hills',
    description: 'A diverse southeastern neighborhood with affordable homes, canyon views, and community atmosphere. Paradise Hills offers multicultural character, family focus, and value with convenient location.',
    image: 'https://images.unsplash.com/photo-1560518883-75e8d5928021?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Affordable housing',
      'Cultural diversity',
      'Family-oriented',
      'Canyon views',
      'Community focus'
    ],
    budget: {
      min: 450000,
      max: 700000
    },
    tags: ['affordable', 'diverse', 'family', 'views', 'community']
  },
  {
    id: 'college-area',
    name: 'College Area',
    description: 'A neighborhood surrounding San Diego State University with student housing, historic homes, and educational focus. College Area offers vibrant atmosphere, diverse housing options, and cultural amenities.',
    image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'SDSU campus',
      'Student-oriented',
      'Historic districts',
      'Cultural diversity',
      'Mix of housing'
    ],
    budget: {
      min: 600000,
      max: 1000000
    },
    tags: ['education', 'students', 'diverse', 'urban', 'cultural']
  },
  {
    id: 'bay-park',
    name: 'Bay Park',
    description: 'A hillside neighborhood with bay views, family homes, and convenient central location. Bay Park offers a mix of mid-century and newer homes with panoramic vistas and outdoor recreation nearby.',
    image: 'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Bay and canyon views',
      'Central location',
      'Mid-century homes',
      'Mission Bay access',
      'Family-friendly'
    ],
    budget: {
      min: 800000,
      max: 1500000
    },
    tags: ['views', 'central', 'family', 'established', 'convenient']
  },
  {
    id: 'bay-ho',
    name: 'Bay Ho',
    description: 'A hillside neighborhood with bay views, canyon access, and family atmosphere. Bay Ho offers affordable homes with good location, outdoor recreation, and a mix of housing styles.',
    image: 'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Bay and canyon views',
      'Affordable homes',
      'Central location',
      'Mix of housing styles',
      'Outdoor recreation'
    ],
    budget: {
      min: 750000,
      max: 1300000
    },
    tags: ['views', 'central', 'affordable', 'family', 'established']
  }
];

