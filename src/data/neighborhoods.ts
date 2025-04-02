import { Neighborhood } from '../types';

export const sandiegoNeighborhoods: Neighborhood[] = [
  {
    id: 'chula-vista',
    name: 'Chula Vista',
    description: 'A fast-growing city offering suburban comfort, good schools, and convenient access to both downtown San Diego and the border.',
    image: '/src/data/Photos/Chula-Vista.jpg',
    matchScore: 0,
    keyFeatures: ['Master-planned communities', 'Excellent public schools', 'Parks and recreation centers', 'Family-friendly environment', 'Newer construction homes'],
    budget: {
      min: 600000,
      max: 1000000
    },
    tags: ['suburban', 'schools', 'family'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Chula+Vista&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=city%3Ag30_9muc97b8&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'otay-mesa',
    name: 'Otay Mesa',
    description: 'A border-adjacent neighborhood known for its industrial growth, new residential developments, and proximity to Tijuana.',
    image: '/src/data/Photos/Otay-Mesa.jpg',
    matchScore: 0,
    keyFeatures: ['Proximity to US-Mexico border', 'Affordable housing developments', 'Industrial and logistics growth', 'Emerging residential areas', 'Easy freeway access'],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['residential'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Otay+Mesa&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9muc1zw0&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'national-city',
    name: 'National City',
    description: 'One of the oldest cities in San Diego County, known for its diversity, vibrant community, and affordable living.',
    image: '/src/data/Photos/National-City.jpg',
    matchScore: 0,
    keyFeatures: ['Diverse community', 'Affordable housing options', 'Proximity to downtown San Diego', 'Local events and festivals', 'Easy access to transportation'],
    budget: {
      min: 500000,
      max: 900000
    },
    tags: ['diverse', 'affordable'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=National+City&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=city%3Ag30_9muc979w&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'paradise-hills',
    name: 'Paradise Hills',
    description: 'A residential neighborhood offering a mix of housing options, community parks, and a suburban atmosphere.',
    image: '/src/data/Photos/Paradise-Hills.jpg',
    matchScore: 0,
    keyFeatures: ['Residential community', 'Parks and recreation', 'Diverse housing options', 'Community events', 'Convenient location'],
    budget: {
      min: 450000,
      max: 850000
    },
    tags: ['residential', 'parks'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Paradise+Hills&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9muc972z&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'encanto',
    name: 'Encanto',
    description: 'Known for its rich history, cultural diversity, and community spirit, offering a variety of housing styles and local businesses.',
    image: '/src/data/Photos/Encanto.jpg',
    matchScore: 0,
    keyFeatures: ['Historic neighborhood', 'Cultural diversity', 'Community events', 'Local businesses', 'Varied housing styles'],
    budget: {
      min: 400000,
      max: 800000
    },
    tags: ['historic', 'cultural'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Encanto&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9muc9731&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'la-jolla',
    name: 'La Jolla',
    description: 'A picturesque coastal community known for its stunning beaches, upscale residences, and vibrant village atmosphere.',
    image: '/src/data/Photos/La-Jolla.jpg',
    matchScore: 0,
    keyFeatures: ['Beautiful beaches', 'Upscale residences', 'Village atmosphere', 'Cultural attractions', 'Outdoor activities'],
    budget: {
      min: 1200000,
      max: 5000000
    },
    tags: ['coastal', 'upscale', 'beaches'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=La+Jolla&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=city%3Ag30_9muc9d4k&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'del-mar',
    name: 'Del Mar',
    description: 'A charming seaside village famous for its beautiful beaches, horse racing, and upscale dining and shopping.',
    image: '/src/data/Photos/Del-Mar.jpg',
    matchScore: 0,
    keyFeatures: ['Beaches', 'Horse racing', 'Upscale dining', 'Boutique shopping', 'Coastal lifestyle'],
    budget: {
      min: 1500000,
      max: 6000000
    },
    tags: ['coastal', 'luxury', 'beaches'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Del+Mar&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=city%3Ag30_9muc9d4n&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'solana-beach',
    name: 'Solana Beach',
    description: 'A laid-back coastal town offering a mix of sandy beaches, eclectic shops, and a thriving arts scene.',
    image: '/src/data/Photos/Solana-Beach.jpg',
    matchScore: 0,
    keyFeatures: ['Sandy beaches', 'Eclectic shops', 'Arts scene', 'Coastal vibe', 'Outdoor activities'],
    budget: {
      min: 900000,
      max: 3000000
    },
    tags: ['coastal', 'arts', 'beaches'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Solana+Beach&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=city%3Ag30_9muc9d4r&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'carlsbad',
    name: 'Carlsbad',
    description: 'A vibrant coastal city known for its beautiful beaches, family-friendly attractions like Legoland, and thriving business community.',
    image: '/src/data/Photos/Carlsbad.jpg',
    matchScore: 0,
    keyFeatures: ['Beaches', 'Legoland', 'Business community', 'Family-friendly', 'Outdoor recreation'],
    budget: {
      min: 800000,
      max: 2500000
    },
    tags: ['coastal', 'family', 'beaches'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Carlsbad&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=city%3Ag30_9muc9d4p&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'oceanside',
    name: 'Oceanside',
    description: 'A coastal city offering a mix of sandy beaches, a historic pier, and a revitalized downtown area.',
    image: '/src/data/Photos/Oceanside.jpg',
    matchScore: 0,
    keyFeatures: ['Beaches', 'Historic pier', 'Downtown revitalization', 'Surfing', 'Military presence'],
    budget: {
      min: 600000,
      max: 1500000
    },
    tags: ['coastal', 'beaches', 'military'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Oceanside&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=city%3Ag30_9muc9d4w&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'cardiff',
    name: 'Cardiff',
    description: 'A laid-back surf town known for its beautiful beaches, health-conscious eateries, and relaxed lifestyle.',
    image: '/src/data/Photos/Cardiff.jpg',
    matchScore: 0,
    keyFeatures: ['Surfing', 'Beaches', 'Health-conscious', 'Relaxed lifestyle', 'Coastal charm'],
    budget: {
      min: 1000000,
      max: 3500000
    },
    tags: ['coastal', 'surfing', 'beaches'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Cardiff&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=city%3Ag30_9muc9d4q&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
    {
    id: 'imperial-beach',
    name: 'Imperial Beach',
    description: 'The most southwesterly city in the continental United States, known for its surf beaches and laid-back lifestyle.',
    image: '/src/data/Photos/Imperial-Beach.jpg',
    matchScore: 0,
    keyFeatures: ['Surfing', 'Beaches', 'Laid-back lifestyle', 'Small-town charm', 'Close to the border'],
    budget: {
      min: 550000,
      max: 1200000
    },
    tags: ['coastal', 'surfing', 'beaches'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Imperial+Beach&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=city%3Ag30_9muc97b6&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'coronado',
    name: 'Coronado',
    description: 'An island city known for its beautiful beaches, the iconic Hotel del Coronado, and a relaxed, resort-like atmosphere.',
    image: '/src/data/Photos/Coronado.jpg',
    matchScore: 0,
    keyFeatures: ['Beaches', 'Hotel del Coronado', 'Resort atmosphere', 'Family-friendly', 'Golfing'],
    budget: {
      min: 1300000,
      max: 6000000
    },
    tags: ['coastal', 'luxury', 'beaches'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Coronado&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=city%3Ag30_9muc97b2&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'mission-beach',
    name: 'Mission Beach',
    description: 'A lively beach community known for its boardwalk, Belmont Park amusement park, and vibrant nightlife.',
    image: '/src/data/Photos/Mission-Beach.jpg',
    matchScore: 0,
    keyFeatures: ['Boardwalk', 'Belmont Park', 'Nightlife', 'Beach activities', 'Casual dining'],
    budget: {
      min: 800000,
      max: 2500000
    },
    tags: ['coastal', 'beaches', 'nightlife'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Mission+Beach&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9muc9d53&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'pacific-beach',
    name: 'Pacific Beach',
    description: 'A popular beach neighborhood with a mix of surf shops, casual eateries, and a lively bar scene.',
    image: '/src/data/Photos/Pacific-Beach.jpg',
    matchScore: 0,
    keyFeatures: ['Surf shops', 'Casual dining', 'Bar scene', 'Beach activities', 'Young crowd'],
    budget: {
      min: 750000,
      max: 2000000
    },
    tags: ['coastal', 'beaches', 'nightlife'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Pacific+Beach&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9muc9d55&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'ocean-beach',
    name: 'Ocean Beach',
    description: 'A quirky and laid-back beach town known for its vintage shops, surf culture, and dog-friendly atmosphere.',
    image: '/src/data/Photos/Ocean-Beach.jpg',
    matchScore: 0,
    keyFeatures: ['Vintage shops', 'Surf culture', 'Dog-friendly', 'Farmers market', 'Community events'],
    budget: {
      min: 700000,
      max: 1800000
    },
    tags: ['coastal', 'beaches', 'dog-friendly'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Ocean+Beach&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9muc9d54&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'point-loma',
    name: 'Point Loma',
    description: 'A scenic peninsula offering stunning views, historic landmarks, and a mix of residential neighborhoods and marinas.',
    image: '/src/data/Photos/Point-Loma.jpg',
    matchScore: 0,
    keyFeatures: ['Scenic views', 'Historic landmarks', 'Residential neighborhoods', 'Marinas', 'Outdoor recreation'],
    budget: {
      min: 900000,
      max: 3000000
    },
    tags: ['scenic', 'historic', 'views'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Point+Loma&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9muc9d56&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'bay-park',
    name: 'Bay Park',
    description: 'A residential neighborhood known for its bay views, proximity to Mission Bay Park, and a mix of mid-century homes.',
    image: '/src/data/Photos/Bay-Park.jpg',
    matchScore: 0,
    keyFeatures: ['Bay views', 'Mission Bay Park', 'Mid-century homes', 'Residential', 'Convenient location'],
    budget: {
      min: 750000,
      max: 1800000
    },
    tags: ['views', 'residential', 'bay'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Bay+Park&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9muc9d4y&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'bay-ho',
    name: 'Bay Ho',
    description: 'A residential neighborhood offering affordable housing options, bay views, and a convenient location near major freeways.',
    image: '/src/data/Photos/Bay-Ho.jpg',
    matchScore: 0,
    keyFeatures: ['Affordable housing', 'Bay views', 'Convenient location', 'Residential', 'Family-friendly'],
    budget: {
      min: 650000,
      max: 1500000
    },
    tags: ['affordable', 'residential', 'bay'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Bay+Ho&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9muc9d4z&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'north-park',
    name: 'North Park',
    description: 'A vibrant urban neighborhood known for its craft breweries, trendy restaurants, and historic Craftsman homes.',
    image: '/src/data/Photos/North-Park.jpg',
    matchScore: 0,
    keyFeatures: ['Craft breweries', 'Trendy restaurants', 'Craftsman homes', 'Walkable', 'Arts and culture'],
    budget: {
      min: 700000,
      max: 1600000
    },
    tags: ['urban', 'craft', 'walkable'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=North+Park&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9muc973w&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'south-park',
    name: 'South Park',
    description: 'A charming historic neighborhood with tree-lined streets, independent shops, and a strong sense of community.',
    image: '/src/data/Photos/South-Park.jpg',
    matchScore: 0,
    keyFeatures: ['Tree-lined streets', 'Independent shops', 'Community', 'Historic', 'Walkable'],
    budget: {
      min: 750000,
      max: 1700000
    },
    tags: ['historic', 'community', 'walkable'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=South+Park&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9muc9741&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'hillcrest',
    name: 'Hillcrest',
    description: 'A diverse and vibrant neighborhood known for its LGBTQ+ community, eclectic restaurants, and lively nightlife.',
    image: '/src/data/Photos/Hillcrest.jpg',
    matchScore: 0,
    keyFeatures: ['LGBTQ+ community', 'Eclectic restaurants', 'Nightlife', 'Walkable', 'Diverse'],
    budget: {
      min: 700000,
      max: 1800000
    },
    tags: ['diverse', 'lgbtq+', 'walkable'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Hillcrest&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9muc973m&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'downtown-san-diego',
    name: 'Downtown San Diego',
    description: 'A bustling urban center with high-rise condos, trendy restaurants, and attractions like the Gaslamp Quarter and Petco Park.',
    image: '/src/data/Photos/Downtown-San-Diego.jpg',
    matchScore: 0,
    keyFeatures: ['High-rise condos', 'Trendy restaurants', 'Gaslamp Quarter', 'Petco Park', 'Urban living'],
    budget: {
      min: 600000,
      max: 5000000
    },
    tags: ['urban', 'downtown', 'nightlife'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Downtown+San+Diego&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=city%3Ag30_9muc973g&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'bankers-hill',
    name: 'Bankers Hill',
    description: 'An upscale residential neighborhood with historic homes, panoramic views, and a central location near Balboa Park.',
    image: '/src/data/Photos/Bankers-Hill.jpg',
    matchScore: 0,
    keyFeatures: ['Historic homes', 'Panoramic views', 'Balboa Park', 'Upscale', 'Residential'],
    budget: {
      min: 900000,
      max: 4000000
    },
    tags: ['upscale', 'historic', 'views'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Bankers+Hill&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%
