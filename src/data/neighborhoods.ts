import { Neighborhood } from '../types';

export const sandiegoNeighborhoods: Neighborhood[] = [
  {
    id: 'chula-vista',
    name: 'Chula Vista',
    description: 'A fast-growing city offering suburban comfort, good schools, and convenient access to both downtown San Diego and the border.',
    image: 'Photos/Chula-Vista.jpg',
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
    image: 'Photos/Otay-Mesa.jpg',
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
    id: 'imperial-beach',
    name: 'Imperial Beach',
    description: 'A laid-back beach town with surf culture, oceanfront dining, and a quieter vibe compared to other coastal communities.',
    image: 'Photos/Imperial-Beach.jpg',
    matchScore: 0,
    keyFeatures: ['Beachfront access and surfing', 'Laid-back, small-town vibe', 'Affordable coastal living', 'Eclectic dining and shops', 'Birdwatching at the estuary'],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['residential', 'beach'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Imperial+Beach&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=city%3Ag30_9mu9qbuz&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'solana-beach',
    name: 'Solana Beach',
    description: 'A charming coastal town known for its walkable neighborhoods, scenic cliffs, and the Cedros Design District.',
    image: 'Photos/Solana-Beach.jpg',
    matchScore: 0,
    keyFeatures: ['Blufftop ocean views', 'Cedros Design District', 'Trendy coastal restaurants', 'Walkable beach town feel', 'Access to Amtrak/Coaster'],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['residential', 'walkable', 'beach'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Solana+Beach&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=city%3Ag30_9mueewrr&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'del-mar',
    name: 'Del Mar',
    description: 'An upscale seaside community famous for its beaches, luxury homes, and the iconic Del Mar Racetrack.',
    image: 'Photos/Del-Mar.jpg',
    matchScore: 0,
    keyFeatures: ['Luxury coastal estates', 'Home to Del Mar Racetrack', 'Charming beach village', 'Oceanfront dining and shops', 'Seaside parks and trails'],
    budget: {
      min: 1500000,
      max: 10000000
    },
    tags: ['upscale', 'luxury', 'beach'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Del+Mar&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=city%3Ag30_9muee8u1&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'la-jolla',
    name: 'La Jolla',
    description: 'An upscale coastal community with stunning ocean views, beautiful beaches, and a vibrant village atmosphere.',
    image: 'Photos/La-Jolla.jpg',
    matchScore: 0,
    keyFeatures: ['Luxury coastal living', 'Top-rated schools', 'Beautiful beaches and coves', 'High-end shopping and dining', 'UCSD campus nearby'],
    budget: {
      min: 1500000,
      max: 10000000
    },
    tags: ['walkable', 'upscale', 'luxury', 'beach'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=92037&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=zip%3A92037&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'rancho-santa-fe',
    name: 'Rancho Santa Fe',
    description: 'One of the most affluent communities in the country, known for sprawling estates, equestrian living, and elite privacy.',
    image: 'Photos/Rancho-Santa-Fe.jpg',
    matchScore: 0,
    keyFeatures: ['Exclusive gated estates', 'Equestrian properties', 'Lush, rural landscapes', 'Golf and country clubs', 'Elite private schools nearby'],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['residential'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Rancho+Santa+Fe&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=area%3Ag20_9muev5f3&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'north-park',
    name: 'North Park',
    description: 'A hip, walkable neighborhood filled with craft breweries, local shops, and historic homes.',
    image: 'Photos/North-Park.jpg',
    matchScore: 0,
    keyFeatures: ['Craft beer and dining scene', 'Walkable urban core', 'Historic Craftsman homes', 'Lively arts and music culture', 'Popular with young professionals'],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['historic', 'residential', 'walkable'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=North+Park&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9mudq9j3&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'south-park',
    name: 'South Park',
    description: 'A quiet, tree-lined community with craftsman-style homes, indie shops, and a strong local vibe.',
    image: 'Photos/South-Park.jpg',
    matchScore: 0,
    keyFeatures: ['Tree-lined streets', 'Independent cafes and boutiques', 'Craftsman and Spanish homes', 'Close-knit community feel', 'Easy access to Balboa Park'],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['residential'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=South+Park&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9mudntnu&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'bankers-hill',
    name: 'Bankers Hill',
    description: 'An elegant area with historic homes, urban views, and proximity to Balboa Park and downtown.',
    image: 'Photos/Bankers-Hill.jpg',
    matchScore: 0,
    keyFeatures: ['Panoramic city and bay views', 'Elegant historic architecture', 'Close to Balboa Park', 'Mix of condos and mansions', 'Peaceful yet central location'],
    budget: {
      min: 800000,
      max: 2000000
    },
    tags: ['urban', 'historic', 'condos'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=San+Diego&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=Neighborhood%3DBankers+Hill&pak=county%3Ag40_9mugyude&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'downtown-san-diego',
    name: 'Downtown San Diego',
    description: 'The urban core of San Diego with luxury condos, high-rise living, nightlife, and waterfront attractions.',
    image: 'Photos/Downtown-San-Diego.jpg',
    matchScore: 0,
    keyFeatures: ['Urban high-rise living', 'Waterfront marina access', 'Gaslamp Quarter nightlife', 'Cultural venues and museums', 'Walkable lifestyle'],
    budget: {
      min: 1500000,
      max: 10000000
    },
    tags: ['upscale', 'luxury'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=92101&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=zip%3A92101&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'hillcrest',
    name: 'Hillcrest',
    description: 'A lively and inclusive neighborhood known for its LGBTQ+ community, dining, and walkability.',
    image: 'Photos/Hillcrest.jpg',
    matchScore: 0,
    keyFeatures: ['LGBTQ+ inclusive community', 'Vibrant nightlife and dining', 'Eclectic shopping options', 'Urban walkability', 'Historic homes and condos'],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['residential'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Hillcrest&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9mudmcwk&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'mira-mesa',
    name: 'Mira Mesa',
    description: 'A diverse, family-friendly suburb known for its parks, schools, and strong tech employment presence nearby.',
    image: 'Photos/Mira-Mesa.jpg',
    matchScore: 0,
    keyFeatures: ['Family-friendly environment', 'Diverse food options', 'Close to tech employers', 'Top-rated public schools', 'Numerous parks and trails'],
    budget: {
      min: 600000,
      max: 1000000
    },
    tags: ['suburban', 'schools', 'family'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Mira+Mesa&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9mueq27k&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'el-cajon',
    name: 'El Cajon',
    description: 'A valley community offering suburban living, affordability, and a blend of cultures.',
    image: 'Photos/El-Cajon.jpg',
    matchScore: 0,
    keyFeatures: ['Affordable home options', 'Cultural diversity', 'Suburban convenience', 'Local dining and shopping', 'Mountain view surroundings'],
    budget: {
      min: 600000,
      max: 1000000
    },
    tags: ['suburban', 'family'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=El+Cajon&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=city%3Ag30_9mufd7rg&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'santee',
    name: 'Santee',
    description: 'An East County suburb with family-friendly vibes, outdoor recreation, and growing retail centers.',
    image: 'Photos/Santee.jpg',
    matchScore: 0,
    keyFeatures: ['Excellent school districts', 'Family-oriented neighborhoods', 'Outdoor recreation at Mission Trails', 'Newer housing developments', 'Community sports complexes'],
    budget: {
      min: 600000,
      max: 1000000
    },
    tags: ['suburban', 'family'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Santee&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=city%3Ag30_9mufcvnh&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'city-heights',
    name: 'City Heights',
    description: 'An urban, culturally diverse neighborhood known for its local eateries and community programs.',
    image: 'Photos/City-Heights.jpg',
    matchScore: 0,
    keyFeatures: ['Rich cultural diversity', 'Affordable housing', 'Urban redevelopment projects', 'Authentic international cuisine', 'Community-led initiatives'],
    budget: {
      min: 800000,
      max: 2000000
    },
    tags: ['urban', 'condos'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=92105&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=zip%3A92105&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'rancho-san-diego',
    name: 'Rancho San Diego',
    description: 'A suburban enclave with large homes, top schools, and a peaceful residential feel.',
    image: 'Photos/Rancho-San-Diego.jpg',
    matchScore: 0,
    keyFeatures: ['Peaceful suburban setting', 'Top-rated schools nearby', 'Rolling hills and scenic views', 'Shopping and restaurants', 'Spacious family homes'],
    budget: {
      min: 600000,
      max: 1000000
    },
    tags: ['suburban', 'schools', 'family'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Rancho+San+Diego&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=area%3Ag20_9muf7kjs&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'encanto',
    name: 'Encanto',
    description: 'A hilly, diverse residential neighborhood offering great views and a central location.',
    image: 'Photos/Encanto.jpg',
    matchScore: 0,
    keyFeatures: ['Centrally located neighborhood', 'Diverse community', 'Elevated views of the city', 'Access to public transit', 'Community redevelopment zone'],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['residential'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=92114&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=zip%3A92114&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'barrio-logan',
    name: 'Barrio Logan',
    description: 'A historic and artistic neighborhood with deep Chicano roots and a thriving creative scene.',
    image: 'Photos/Barrio-Logan.jpg',
    matchScore: 0,
    keyFeatures: ['Strong Chicano cultural identity', 'Murals and street art at Chicano Park', 'Creative arts scene', 'Local breweries and eateries', 'Proximity to downtown'],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['historic', 'residential'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Logan+Heights&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9mudn959&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'national-city',
    name: 'National City',
    description: 'One of San Diegos oldest cities, offering historic charm and diverse cultural influence.',
    image: 'Photos/National-City.jpg',
    matchScore: 0,
    keyFeatures: ['Historic and diverse community', 'Affordable housing options', 'Naval base proximity', 'Growing small business scene', 'Easy freeway and transit access'],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['historic', 'residential'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=National+City&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=city%3Ag30_9mu9z6e9&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'mission-valley',
    name: 'Mission Valley',
    description: 'A centrally located hub with shopping, business centers, and convenient access to all of San Diego.',
    image: 'Photos/Mission-Valley.jpg',
    matchScore: 0,
    keyFeatures: ['Major shopping and entertainment centers', 'Central location', 'New mixed-use developments', 'Access to trolley lines', 'Proximity to freeways and downtown'],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['residential'],
    kvCoreLink: 'http://jaredharman.exprealty.com/index.php?advanced=1&display=92108&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=zip%3A92108&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'la-mesa',
    name: 'La Mesa',
    description: 'A walkable suburban downtown known for its community events, antique shops, and family-friendly feel.',
    image: 'Photos/La-Mesa.jpg',
    matchScore: 0,
    keyFeatures: ['Charming walkable village', 'Regular farmer\'s markets', 'Family-friendly parks and schools', 'Historic architecture', 'Local shops and cafes'],
    budget: {
      min: 600000,
      max: 1000000
    },
    tags: ['suburban', 'walkable', 'family'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=La+Mesa&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=city%3Ag30_9muf3jsm&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'fletcher-hills',
    name: 'Fletcher Hills',
    description: 'A quiet, residential area with rolling hills and scenic views, tucked near El Cajon and La Mesa.',
    image: 'Photos/Fletcher-Hills.jpg',
    matchScore: 0,
    keyFeatures: ['Quiet, residential setting', 'Established suburban feel', 'Hilltop views and wide streets', 'Close to Grossmont College', 'Mid-century homes'],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['residential'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=San+Diego&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=Neighborhood%3DFletcher+Hills&pak=county%3Ag40_9mugyude&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'san-carlos',
    name: 'San Carlos',
    description: 'A peaceful, suburban neighborhood near Mission Trails with excellent schools and outdoor access.',
    image: 'Photos/San-Carlos.jpg',
    matchScore: 0,
    keyFeatures: ['Close to Mission Trails Regional Park', 'Well-rated public schools', 'Safe and suburban', 'Family-friendly atmosphere', 'Views of Cowles Mountain'],
    budget: {
      min: 600000,
      max: 1000000
    },
    tags: ['suburban', 'schools', 'family'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=San+Diego&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&
