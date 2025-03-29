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
    tags: ['luxury', 'beach', 'schools', 'walkable', 'upscale'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=92037&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=zip%3A92037&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
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
    tags: ['urban', 'nightlife', 'walkable', 'arts', 'breweries'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=North+Park&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9mudq9j3&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
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
    tags: ['luxury', 'beach', 'quiet', 'schools', 'upscale'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Coronado&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=city%3Ag30_9mu9ty63&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
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
    tags: ['urban', 'walkable', 'nightlife', 'condos', 'dining'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=San+Diego&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=Neighborhood%3DLittle+Italy&pak=county%3Ag40_9mugyude&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
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
    tags: ['upscale', 'historic', 'quiet', 'views', 'community'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Mission+Hills&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9mudm6nt&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
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
    tags: ['beach', 'nightlife', 'young', 'active', 'casual'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Pacific+Beach&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9muds5w4&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
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
    tags: ['urban', 'diverse', 'nightlife', 'walkable', 'LGBTQ'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Hillcrest&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9mudmcwk&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
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
    tags: ['suburban', 'family', 'schools', 'planned', 'newer'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Carmel+Valley&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9muekuer&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
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
    tags: ['luxury', 'beach', 'upscale', 'village', 'exclusive'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Del+Mar&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=city%3Ag30_9muee8u1&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
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
    tags: ['diverse', 'affordable', 'arts', 'historic', 'community'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Normal+Heights&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9mudqusv&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'mission-bay',
    name: 'Mission Bay',
    description: 'A waterfront park and recreation area with beaches, water sports, and family attractions. Mission Bay offers a variety of activities and amenities for visitors and locals alike.',
    image: 'https://images.unsplash.com/photo-1590667684347-527675b7b024?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Waterfront park',
      'Beaches and swimming',
      'Water sports',
      'Family attractions',
      'Resort hotels'
    ],
    budget: {
      min: 900000,
      max: 3000000
    },
    tags: ['waterfront', 'recreation', 'family', 'tourist', 'active'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=San+Diego&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=Neighborhood%3DMission+Bay&pak=county%3Ag40_9mugyude&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'university-city',
    name: 'University City',
    description: 'A suburban community with a mix of housing options, shopping centers, and access to UCSD. University City offers a convenient location with good schools and family-friendly amenities.',
    image: 'https://images.unsplash.com/photo-1560518883-5580d0a4d4d9?q=80&w=1000&auto=format&fit=crop',
    matchScore: 0,
    keyFeatures: [
      'Access to UCSD',
      'Shopping centers',
      'Family-friendly',
      'Good schools',
      'Convenient location'
    ],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['suburban', 'family', 'schools', 'university', 'convenient'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=San+Diego&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=Neighborhood%3DUniversity+City&pak=county%3Ag40_9mugyude&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
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
    tags: ['commercial', 'central', 'diverse', 'dining', 'asian'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=San+Diego&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=Neighborhood%3DKearny+Mesa&pak=county%3Ag40_9mugyude&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
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
    tags: ['urban', 'nightlife', 'walkable', 'condos', 'waterfront'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=92101&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=zip%3A92101&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
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
    tags: ['community', 'quiet', 'historic', 'walkable', 'family'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=South+Park&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9mudntnu&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
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
    tags: ['upscale', 'historic', 'views', 'walkable', 'parks'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=San+Diego&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=Neighborhood%3DBankers+Hill&pak=county%3Ag40_9mugyude&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
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
    tags: ['beach', 'casual', 'bohemian', 'surfing', 'local'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Ocean+Beach&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9mud7cxm&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
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
    tags: ['beach', 'active', 'tourist', 'recreation', 'vacation'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Mission+Beach&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9mud7yhy&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
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
    tags: ['waterfront', 'historic', 'upscale', 'maritime', 'views'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=92106&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=zip%3A92106&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'solana-beach',
    name: 'Solana Beach',
    description: 'A coastal community with blufftop homes, beach access, and the Cedros Design District. Solana Beach offers a relaxed atmosphere with upscale shopping, dining, and the renowned Belly Up music venue.',
