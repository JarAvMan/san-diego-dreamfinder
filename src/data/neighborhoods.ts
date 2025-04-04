
import { Neighborhood } from '../types';

export const sandiegoNeighborhoods: Neighborhood[] = [
  {
    id: 'chula-vista',
    name: 'Chula Vista',
    description: 'A fast-growing city offering suburban comfort, good schools, and convenient access to both downtown San Diego and the border.',
    image: '/src/data/Images/Chula-Vista.jpg',
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
    image: '/src/data/Images/Otay-Mesa.jpg',
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
    image: '/src/data/Images/Imperial-Beach.jpg',
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
    image: '/src/data/Images/Solana-Beach.jpg',
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
    image: '/src/data/Images/Del-Mar.jpg',
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
    image: '/src/data/Images/La-Jolla.jpg',
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
    image: '/src/data/Images/Rancho-Santa-Fe.jpg',
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
    image: '/src/data/Images/North-Park.jpg',
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
    image: '/src/data/Images/South-Park.jpg',
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
    image: '/src/data/Images/Bankers-Hill.jpg',
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
    image: '/src/data/Images/Downtown-San-Diego.jpg',
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
    image: '/src/data/Images/Hillcrest.jpg',
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
    image: '/src/data/Images/Mira-Mesa.jpg',
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
    image: '/src/data/Images/El-Cajon.jpg',
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
    image: '/src/data/Images/Santee.jpg',
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
    image: '/src/data/Images/City-Heights.jpg',
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
    image: '/src/data/Images/Rancho-San-Diego.jpg',
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
    image: '/src/data/Images/Encanto.jpg',
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
    image: '/src/data/Images/Barrio-Logan.jpg',
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
    description: 'One of San Diego's oldest cities, offering historic charm and diverse cultural influence.',
    image: '/src/data/Images/National-City.jpg',
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
    image: '/src/data/Images/Mission-Valley.jpg',
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
    image: '/src/data/Images/La-Mesa.jpg',
    matchScore: 0,
    keyFeatures: ['Charming walkable village', 'Regular farmer's markets', 'Family-friendly parks and schools', 'Historic architecture', 'Local shops and cafes'],
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
    image: '/src/data/Images/Fletcher-Hills.jpg',
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
    image: '/src/data/Images/San-Carlos.jpg',
    matchScore: 0,
    keyFeatures: ['Close to Mission Trails Regional Park', 'Well-rated public schools', 'Safe and suburban', 'Family-friendly atmosphere', 'Views of Cowles Mountain'],
    budget: {
      min: 600000,
      max: 1000000
    },
    tags: ['suburban', 'schools', 'family'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=San+Diego&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=Neighborhood%3DSAN+CARLOS&pak=county%3Ag40_9mugyude&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'poway',
    name: 'Poway',
    description: 'Known as "The City in the Country," Poway offers large lots, top-ranked schools, and a rural-suburban balance.',
    image: '/src/data/Images/Poway.jpg',
    matchScore: 0,
    keyFeatures: ['Top-rated public schools', 'Large lot homes and estates', 'Equestrian and hiking trails', 'Safe, quiet neighborhoods', 'Suburban-meets-rural charm'],
    budget: {
      min: 600000,
      max: 1000000
    },
    tags: ['suburban', 'schools', 'family'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Poway&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=city%3Ag30_9mug9jhs&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'escondido',
    name: 'Escondido',
    description: 'A North County inland city with historic roots, vineyards, and access to hiking and Lake Hodges.',
    image: '/src/data/Images/Escondido.jpg',
    matchScore: 0,
    keyFeatures: ['Historic downtown district', 'Family-friendly community', 'Local wineries and breweries', 'Access to Lake Hodges trails', 'Arts and theater scene'],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['historic', 'residential'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Escondido&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=city%3Ag30_9musrzyx&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'rancho-bernardo',
    name: 'Rancho Bernardo',
    description: 'A master-planned community with golf courses, family neighborhoods, and retirement options.',
    image: '/src/data/Images/Rancho-Bernardo.jpg',
    matchScore: 0,
    keyFeatures: ['Golf course communities', 'Retirement villages and family homes', 'Highly rated schools', 'Local shopping centers', 'Lake Hodges nearby'],
    budget: {
      min: 600000,
      max: 1000000
    },
    tags: ['suburban', 'family'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Rancho+Bernardo&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9muezv6y&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'carmel-valley',
    name: 'Carmel Valley',
    description: 'A highly desirable area with top-rated schools, business parks, and suburban luxury.',
    image: '/src/data/Images/Carmel-Valley.jpg',
    matchScore: 0,
    keyFeatures: ['Top-rated public schools', 'Master-planned communities', 'Close to tech and biotech jobs', 'Newer homes and condos', 'Suburban lifestyle with parks'],
    budget: {
      min: 1500000,
      max: 10000000
    },
    tags: ['schools', 'upscale', 'luxury'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Carmel+Valley&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9muekuer&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'clairemont',
    name: 'Clairemont',
    description: 'A central, mid-century suburb offering convenience, canyons, and quick freeway access.',
    image: '/src/data/Images/Clairemont.jpg',
    matchScore: 0,
    keyFeatures: ['Central location with quick access', 'Canyon views and parks', 'Variety of mid-century homes', 'Established neighborhoods', 'Close to bay and beaches'],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['residential'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Clairemont&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=area%3Ag20_9mudtrk0&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'serra-mesa',
    name: 'Serra Mesa',
    description: 'A quiet neighborhood ideal for families and professionals, with easy access to major job centers.',
    image: '/src/data/Images/Serra-Mesa.jpg',
    matchScore: 0,
    keyFeatures: ['Quiet, central neighborhood', 'Affordable starter homes', 'Close to hospitals and job centers', 'Near Mission Valley amenities', 'Parks and recreation areas'],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['residential'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Serra+Mesa&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9mudwd0w&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'linda-vista',
    name: 'Linda Vista',
    description: 'Home to the University of San Diego, Linda Vista features canyon views and cultural diversity.',
    image: '/src/data/Images/Linda-Vista.jpg',
    matchScore: 0,
    keyFeatures: ['Home to University of San Diego', 'Canyon and city views', 'Diverse community', 'Proximity to Fashion Valley', 'Convenient transit options'],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['residential'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Linda+Vista&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9mudt8tc&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'tierrasanta',
    name: 'Tierrasanta',
    description: 'Often called "The Island in the Hills," this residential community offers quiet streets and strong schools.',
    image: '/src/data/Images/Tierrasanta.jpg',
    matchScore: 0,
    keyFeatures: ['Suburban, quiet living', 'Access to Mission Trails hiking', 'Highly rated schools', 'Family-focused community', 'Tree-lined residential streets'],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['residential', 'schools'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Tierrasanta&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9mufb46f&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'normal-heights',
    name: 'Normal Heights',
    description: 'A walkable, eclectic area along Adams Ave known for vintage shops, coffee houses, and local events.',
    image: '/src/data/Images/Normal-Heights.jpg',
    matchScore: 0,
    keyFeatures: ['Eclectic, bohemian atmosphere', 'Adams Ave dining and music', 'Walkable lifestyle', 'Craftsman homes and bungalows', 'Vibrant arts and culture scene'],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['residential', 'walkable'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Normal+Heights&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9mudqusv&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'kensington',
    name: 'Kensington',
    description: 'An upscale historic neighborhood with Spanish-style homes, tree-lined streets, and a village feel.',
    image: '/src/data/Images/Kensington.jpg',
    matchScore: 0,
    keyFeatures: ['Spanish-style architecture', 'Upscale village feel', 'Boutique shopping and cafes', 'Tree-lined residential streets', 'Close-knit community'],
    budget: {
      min: 1500000,
      max: 10000000
    },
    tags: ['historic', 'walkable', 'upscale', 'luxury'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Kensington&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9mudrjp1&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'talmadge',
    name: 'Talmadge',
    description: 'Known for its historic character, architectural charm, and community pride.',
    image: '/src/data/Images/Talmadge.jpg',
    matchScore: 0,
    keyFeatures: ['Architecturally rich homes', 'Quiet residential streets', 'Central location', 'Pride of ownership', 'Strong neighborhood identity'],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['historic', 'residential'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Talmadge&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9mudrs0z&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'oceanside',
    name: 'Oceanside',
    description: 'A coastal city with a revitalized downtown, surf culture, and military presence from nearby Camp Pendleton.',
    image: '/src/data/Images/Oceanside.jpg',
    matchScore: 0,
    keyFeatures: ['Revitalized coastal downtown', 'Surf and beach culture', 'New dining and hotels', 'Harbor and pier access', 'Eclectic and artistic vibe'],
    budget: {
      min: 800000,
      max: 2000000
    },
    tags: ['urban', 'condos', 'beach'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Oceanside&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=city%3Ag30_9mut486e&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'vista',
    name: 'Vista',
    description: 'An inland North County community known for affordability, parks, and breweries.',
    image: '/src/data/Images/Vista.jpg',
    matchScore: 0,
    keyFeatures: ['Affordable North County option', 'Hilly terrain and views', 'Family-friendly neighborhoods', 'Microbrewery scene', 'Parks and cultural events'],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['residential'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Vista&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=city%3Ag30_9musu1vr&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'fallbrook',
    name: 'Fallbrook',
    description: 'A rural escape with avocado groves, art galleries, and a small-town feel.',
    image: '/src/data/Images/Fallbrook.jpg',
    matchScore: 0,
    keyFeatures: ['Rural countryside charm', 'Avocado groves and farms', 'Artist and gallery scene', 'Small-town Main Street', 'Equestrian lifestyle'],
    budget: {
      min: 500000,
      max: 900000
    },
    tags: ['rural', 'scenic'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Fallbrook&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=area%3Ag20_9mutu6ww&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'scripps-ranch',
    name: 'Scripps Ranch',
    description: 'A suburban, family-centric community with lake views, eucalyptus trees, and top-rated schools.',
    image: '/src/data/Images/Scripps-Ranch.jpg',
    matchScore: 0,
    keyFeatures: ['Lake Miramar access', 'Eucalyptus-lined streets', 'Suburban with upscale homes', 'Great schools and parks', 'Family-oriented community'],
    budget: {
      min: 600000,
      max: 1000000
    },
    tags: ['suburban', 'schools', 'family'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Scripps+Ranch&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9mug05jp&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: '4s-ranch',
    name: '4s Ranch',
    description: 'A master-planned community with new homes, excellent schools, and community amenities.',
    image: '/src/data/Images/4s-Ranch.jpg',
    matchScore: 0,
    keyFeatures: ['Modern planned community', 'Highly ranked schools', 'Shopping and dining options', 'Family-friendly vibe', 'Community events and parks'],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['residential', 'schools'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=4S+Ranch&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9muez46p&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'alpine',
    name: 'Alpine',
    description: 'A mountain foothill town with a rural vibe, horses, and wide open space.',
    image: '/src/data/Images/Alpine.jpg',
    matchScore: 0,
    keyFeatures: ['Mountain foothill location', 'Larger rural lots', 'Quiet, scenic setting', 'Equestrian-friendly properties', 'Escape from city hustle'],
    budget: {
      min: 500000,
      max: 900000
    },
    tags: ['rural', 'scenic'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Alpine&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=area%3Ag20_9mufz54c&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'ramona',
    name: 'Ramona',
    description: 'Known for its country feel, wineries, and ranch-style living in San Diego's inland mountains.',
    image: '/src/data/Images/Ramona.jpg',
    matchScore: 0,
    keyFeatures: ['Country living with space', 'Local vineyards and farms', 'Equestrian properties', 'Small-town community feel', 'Gateway to hiking trails'],
    budget: {
      min: 500000,
      max: 900000
    },
    tags: ['rural', 'scenic'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Ramona&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=area%3Ag20_9mugutth&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'julian',
    name: 'Julian',
    description: 'A historic mountain town famous for its apple pie, gold rush past, and charming main street.',
    image: '/src/data/Images/Julian.jpg',
    matchScore: 0,
    keyFeatures: ['Historic gold mining town', 'Famous for apple pie', 'Charming mountain village', 'Seasonal snowfall', 'Bed-and-breakfast getaways'],
    budget: {
      min: 500000,
      max: 900000
    },
    tags: ['historic', 'rural', 'scenic'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Julian&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=city%3Aplc-0607337582&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'rancho-penasquitos',
    name: 'Rancho Penasquitos',
    description: 'A quiet, suburban neighborhood with trails, top schools, and family-focused living.',
    image: '/src/data/Images/Rancho-Penasquitos.jpg',
    matchScore: 0,
    keyFeatures: ['Suburban hillside community', 'Great schools and parks', 'Close to tech corridors', 'Family-friendly neighborhoods', 'Access to trails and canyons'],
    budget: {
      min: 600000,
      max: 1000000
    },
    tags: ['suburban', 'schools', 'family'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Rancho+Penasquitos&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9muew8x6&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'sorrento-valley',
    name: 'Sorrento Valley',
    description: 'A tech hub by day, with nearby hiking and freeway access to the coast or city.',
    image: '/src/data/Images/sorrento-valley.jpg',
    matchScore: 0,
    keyFeatures: ['Major tech employment hub', 'Central to coast and freeways', 'Business parks and offices', 'Nearby hiking trails', 'Convenient commute access'],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['residential'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Sorrento+Valley&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9muejkbj&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'fairbanks-ranch',
    name: 'Fairbanks Ranch',
    description: 'A gated luxury community with estates, privacy, and equestrian amenities.',
    image: '/src/data/Images/Fairbanks-Ranch.jpg',
    matchScore: 0,
    keyFeatures: ['Exclusive gated estates', 'Luxury equestrian properties', 'Secluded and secure', 'Prestigious country club', 'Lush surroundings'],
    budget: {
      min: 1500000,
      max: 10000000
    },
    tags: ['upscale', 'luxury'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Fairbanks+Ranch&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=area%3Ag20_9muetmgm&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'carlsbad',
    name: 'Carlsbad',
    description: 'A coastal city with beaches, family attractions, and a balanced lifestyle of leisure and business.',
    image: '/src/data/Images/Carlsbad.jpg',
    matchScore: 0,
    keyFeatures: ['Coastal village and beaches', 'Legoland and family attractions', 'Great schools and business parks', 'Upscale shopping and dining', 'Resort-style communities'],
    budget: {
      min: 600000,
      max: 1000000
    },
    tags: ['suburban', 'family', 'beach'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Carlsbad&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=city%3Ag30_9mus7nhs&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'cardiff',
    name: 'Cardiff',
    description: 'A relaxed beach town with a surf-first attitude and scenic blufftop views.',
    image: '/src/data/Images/Cardiff.jpg',
    matchScore: 0,
    keyFeatures: ['Blufftop ocean views', 'Quaint surf town feel', 'Walkable restaurants and shops', 'Community events and schools', 'Close to beaches and parks'],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['residential', 'beach'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Cardiff-By-The-Sea&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=area%3Ag20_9mueg7t6&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'san-marcos',
    name: 'San Marcos',
    description: 'A growing inland community known for schools, universities, and suburban conveniences.',
    image: '/src/data/Images/San-Marcos.jpg',
    matchScore: 0,
    keyFeatures: ['Growing university town', 'Affordable housing', 'Family parks and trails', 'Top-rated schools', 'Newer developments'],
    budget: {
      min: 600000,
      max: 1000000
    },
    tags: ['suburban', 'schools', 'family'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=San+Marcos&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=city%3Ag30_9must8h1&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'allied-gardens',
    name: 'Allied Gardens',
    description: 'A post-war suburb with family appeal, parks, and proximity to SDSU.',
    image: '/src/data/Images/Allied-Gardens.jpg',
    matchScore: 0,
    keyFeatures: ['Mid-century suburban homes', 'Safe and quiet streets', 'Close to SDSU and Del Cerro', 'Community sports fields', 'Great starter neighborhood'],
    budget: {
      min: 600000,
      max: 1000000
    },
    tags: ['suburban', 'family'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Allied+Gardens&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9mudxdxt&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'del-cerro',
    name: 'Del Cerro',
    description: 'An established hillside neighborhood with strong schools and suburban calm.',
    image: '/src/data/Images/Del-Cerro.jpg',
    matchScore: 0,
    keyFeatures: ['Hillside views and privacy', 'Strong community vibe', 'Large family homes', 'Close to Mission Trails', 'Highly rated schools'],
    budget: {
      min: 600000,
      max: 1000000
    },
    tags: ['suburban', 'schools', 'family'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Del+Cerro&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9muf80kx&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'el-cerrito',
    name: 'El Cerrito',
    description: 'A small, residential neighborhood known for its character homes and central location.',
    image: '/src/data/Images/El-Cerrito.jpg',
    matchScore: 0,
    keyFeatures: ['Historic charm and character', 'Centrally located', 'Quiet, tree-lined streets', 'Well-maintained homes', 'Easy access to freeways'],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['residential'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=El+Cerrito&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9mudrftu&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'lemon-grove',
    name: 'Lemon Grove',
    description: 'A small-town community with historic charm and a suburban feel close to the city.',
    image: '/src/data/Images/Lemon-Grove.jpg',
    matchScore: 0,
    keyFeatures: ['Affordable suburban living', 'Historic lemon heritage', 'Community-focused vibe', 'Quick access to downtown', 'Public transportation nearby'],
    budget: {
      min: 600000,
      max: 1000000
    },
    tags: ['suburban', 'historic', 'family'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Lemon+Grove&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=city%3Ag30_9muf0yf5&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'spring-valley',
    name: 'Spring Valley',
    description: 'A diverse, hilly suburb with affordability and views across East County.',
    image: '/src/data/Images/Spring-Valley.jpg',
    matchScore: 0,
    keyFeatures: ['Affordable home prices', 'Hilly terrain with views', 'Diverse neighborhoods', 'Suburban and semi-rural mix', 'Convenient East County location'],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['residential'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Spring+Valley&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=area%3Ag20_9muf4ns6&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'paradise-hills',
    name: 'Paradise Hills',
    description: 'A culturally rich residential area with strong community pride and views of the bay.',
    image: '/src/data/Images/Paradise-Hills.jpg',
    matchScore: 0,
    keyFeatures: ['Diverse and vibrant community', 'Bay and canyon views', 'Residential with parks', 'Family-oriented feel', 'Affordable housing options'],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['residential'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Paradise+Hills&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9mucbk80&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'college-area',
    name: 'College Area',
    description: 'Anchored by SDSU, this area has a mix of student life, residential streets, and eateries.',
    image: '/src/data/Images/College-Area.jpg',
    matchScore: 0,
    keyFeatures: ['Adjacent to SDSU campus', 'Student and faculty mix', 'Walkable to restaurants and coffee shops', 'Mid-century and Spanish homes', 'Lively college-town energy'],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['residential'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=College+West&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9mudrvb7&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'coronado',
    name: 'Coronado',
    description: 'An upscale island community with world-famous beaches, historic charm, and resort luxury.',
    image: '/src/data/Images/Coronado.jpg',
    matchScore: 0,
    keyFeatures: ['Coastal lifestyle', 'Luxury homes', 'Historic charm', 'Feature 4', 'Feature 5'],
    budget: {
      min: 1500000,
      max: 10000000
    },
    tags: ['historic', 'upscale', 'luxury', 'beach'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Coronado&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=city%3Ag30_9mu9ty63&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'mission-hills',
    name: 'Mission Hills',
    description: 'A historic neighborhood with elegant homes, canyon views, and a refined village feel.',
    image: '/src/data/Images/Mission-Hills.jpg',
    matchScore: 0,
    keyFeatures: ['Historic estate homes', 'Stunning canyon and bay views', 'Upscale, quiet streets', 'Boutique shopping and dining', 'Close to Hillcrest and downtown'],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['historic', 'residential', 'walkable'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Mission+Hills&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9mudm6nt&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'old-town',
    name: 'Old Town',
    description: 'The birthplace of San Diego, rich in Mexican heritage, preserved buildings, and tourist charm.',
    image: '/src/data/Images/Old-Town.jpg',
    matchScore: 0,
    keyFeatures: ['Historic birthplace of San Diego', 'Mexican heritage and culture', 'Tourist-friendly attractions', 'Adobe architecture', 'Shops and local eateries'],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['residential'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Old+Town&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9mudm4uc&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'bay-park',
    name: 'Bay Park',
    description: 'A hillside neighborhood with bay views, casual restaurants, and quick freeway access.',
    image: '/src/data/Images/Bay-Park.jpg',
    matchScore: 0,
    keyFeatures: ['Views of Mission Bay', 'Quiet, family-friendly vibe', 'Centrally located', 'Mid-century homes', 'Quick freeway access'],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['residential'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Bay+Park&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9mudt16n&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'bay-ho',
    name: 'Bay Ho',
    description: 'A quiet coastal mesa community with views, mid-century homes, and access to Clairemont amenities.',
    image: '/src/data/Images/Bay-Ho.jpg',
    matchScore: 0,
    keyFeatures: ['Canyon and coastal views', 'Close to Clairemont amenities', 'Quiet, residential streets', 'Mid-century charm', 'Access to Pacific Beach'],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['residential', 'beach'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Bay+Ho&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9mudsxkm&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'point-loma',
    name: 'Point Loma',
    description: 'A scenic peninsula community with harbor views, historic sites, and coastal charm.',
    image: '/src/data/Images/Point-Loma.jpg',
    matchScore: 0,
    keyFeatures: ['Coastal lifestyle', 'Historic charm', 'Feature 3', 'Feature 4', 'Feature 5'],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['historic', 'residential', 'beach'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=92106&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=zip%3A92106&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'mission-beach',
    name: 'Mission Beach',
    description: 'A classic beach community with boardwalk energy, nightlife, and surfside condos.',
    image: '/src/data/Images/Mission-Beach.jpg',
    matchScore: 0,
    keyFeatures: ['Coastal lifestyle', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['residential', 'beach'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Mission+Beach&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9mud7yhy&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'pacific-beach',
    name: 'Pacific Beach',
    description: 'A vibrant beach town with surf culture, nightlife, and a youthful, active lifestyle.',
    image: '/src/data/Images/Pacific-Beach.jpg',
    matchScore: 0,
    keyFeatures: ['Coastal lifestyle', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['residential', 'beach'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Pacific+Beach&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9muds5w4&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  },
  {
    id: 'ocean-beach',
    name: 'Ocean Beach',
    description: 'A bohemian beach town with vintage shops, pier views, and a laid-back spirit.',
    image: '/src/data/Images/Ocean-Beach.jpg',
    matchScore: 0,
    keyFeatures: ['Coastal lifestyle', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    budget: {
      min: 700000,
      max: 1500000
    },
    tags: ['residential', 'beach'],
    kvCoreLink: 'https://jaredharman.exprealty.com/index.php?advanced=1&display=Ocean+Beach&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=31&statuses%5B%5D=0&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&pak=neighborhood%3Ag10_9mud7cxm&sortby=listings.listingdate+DESC&rtype=grid&leadid=122098710'
  }
];

