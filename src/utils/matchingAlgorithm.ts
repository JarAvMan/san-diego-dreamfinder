import { Neighborhood, QuizAnswer, LikertOption } from '@/types';
import { sandiegoNeighborhoods } from '../data/neighborhoods';

// Define weights for each importance level
const IMPORTANCE_WEIGHTS = {
  not_important: 0,
  somewhat_important: 0.5,
  very_important: 1
};

// Define tag weights for each neighborhood characteristic
const TAG_WEIGHTS = {
  // Beach and Waterfront
  beach: 1,
  waterfront: 1,
  coastal: 1,
  
  // Parks and Green Spaces
  parks: 1,
  greenspace: 1,
  outdoor: 1,
  
  // Safety
  safe: 1,
  'low-crime': 1,
  security: 1,
  
  // Education
  schools: 1,
  education: 1,
  family: 0.5,
  
  // Transportation
  transit: 1,
  'public-transport': 1,
  commute: 0.5,
  freeway: 0.5,
  highway: 0.5,
  
  // Walkability
  walkable: 1,
  pedestrian: 1,
  urban: 0.5,
  
  // Dining and Entertainment
  dining: 1,
  restaurants: 1,
  food: 1,
  nightlife: 1,
  entertainment: 1,
  social: 0.5,
  
  // Affordability
  affordable: 1,
  budget: 1,
  value: 1,
  
  // Community
  community: 1,
  events: 1,
  
  // Work and Downtown
  downtown: 1,
  work: 1,
  
  // Pet Friendliness
  'pet-friendly': 1,
  dogs: 1,
  
  // Cultural
  cultural: 1,
  arts: 1,
  
  // Shopping
  shopping: 1,
  retail: 1,
  convenience: 0.5,
  
  // Quiet and Residential
  quiet: 1,
  residential: 1,
  peaceful: 1,
  
  // Healthcare
  healthcare: 1,
  medical: 1,
  hospitals: 1,
  
  // Bike Infrastructure
  'bike-friendly': 1,
  cycling: 1,
  trails: 0.5,
  
  // Historic and Modern
  historic: 1,
  modern: 1,
  architecture: 0.5,
  
  // Traffic
  traffic: 1,
  congestion: 1,
  
  // Fitness
  fitness: 1,
  recreation: 1,
  sports: 0.5,
  
  // Family
  children: 0.5,
  
  // Airport
  airport: 1,
  travel: 0.5,
  
  // Sustainability
  sustainable: 1,
  green: 1,
  'eco-friendly': 1,
  
  // Identity
  identity: 1,
  character: 1,
  unique: 1
};

// Calculate neighborhood match scores based on user answers
export const calculateNeighborhoodMatches = (answers: QuizAnswer[]): Neighborhood[] => {
  console.log("Starting matching algorithm with answers:", answers);
  
  // Create a deep copy of neighborhoods to work with
  const neighborhoods = JSON.parse(JSON.stringify(sandiegoNeighborhoods)) as Neighborhood[];
  
  // Reset all match scores
  neighborhoods.forEach(n => n.matchScore = 0);
  
  // Create a weighting system for different question categories
  const categoryWeights = {
    lifestyle: 1.3,  // Increase lifestyle importance
    environment: 1.2,
    housing: 1.1,
    community: 1.2,
    practical: 0.9
  };
  
  // Track how many questions of each type were answered to normalize later
  const categoryQuestionCounts: Record<string, number> = {
    lifestyle: 0,
    environment: 0,
    housing: 0,
    community: 0,
    practical: 0
  };
  
  // Process each answer
  answers.forEach(answer => {
    const importance = IMPORTANCE_WEIGHTS[answer.value as LikertOption];
    console.log(`Processing answer for question ${answer.questionId}: importance=${importance}`);
    
    // Determine the question category from the ID
    let category = 'lifestyle'; // default category
    if (answer.questionId.includes('walkability') || answer.questionId.includes('quiet') || 
        answer.questionId.includes('scenic') || answer.questionId.includes('waterfront'))
      category = 'environment';
    else if (answer.questionId.includes('historic') || answer.questionId.includes('newer_homes') || 
             answer.questionId.includes('space'))
      category = 'housing';
    else if (answer.questionId.includes('community') || answer.questionId.includes('diversity') || 
             answer.questionId.includes('noise'))
      category = 'community';
    else if (answer.questionId.includes('schools') || answer.questionId.includes('commute') || 
             answer.questionId.includes('affordability'))
      category = 'practical';
    
    // Track question count for this category
    categoryQuestionCounts[category]++;
      
    // Apply the category weight to the value
    const weightedValue = importance * (categoryWeights[category as keyof typeof categoryWeights] || 1);
    console.log(`Category: ${category}, weighted value: ${weightedValue}`);
    
    // Get the tags associated with this question
    const questionTags = getQuestionTags(answer.questionId);
    
    if (questionTags) {
      // For each neighborhood, calculate its match score based on the question's tags
      neighborhoods.forEach(neighborhood => {
        let matchScore = 0;
        
        // Check each tag associated with the question
        questionTags.forEach(tag => {
          // If the neighborhood has this tag, add to its score
          if (neighborhood.tags.includes(tag)) {
            const tagWeight = TAG_WEIGHTS[tag as keyof typeof TAG_WEIGHTS] || 1;
            matchScore += weightedValue * tagWeight;
          }
        });
        
        // Add the match score to the neighborhood's total
        neighborhood.matchScore += matchScore;
      });
    }
  });

  // Normalize scores based on the number of questions answered in each category
  neighborhoods.forEach(neighborhood => {
    let normalizedScore = 0;
    let totalWeight = 0;
    
    // Calculate weighted average based on category question counts
    Object.entries(categoryQuestionCounts).forEach(([category, count]) => {
      if (count > 0) {
        const weight = categoryWeights[category as keyof typeof categoryWeights] || 1;
        normalizedScore += (neighborhood.matchScore / count) * weight;
        totalWeight += weight;
      }
    });
    
    // Set the final normalized score
    neighborhood.matchScore = totalWeight > 0 ? normalizedScore / totalWeight : 0;
  });

  // Add some randomization to break ties and ensure variety in results
  neighborhoods.forEach(n => {
    // Add a small random factor (±5%) to each score
    const randomFactor = 0.95 + Math.random() * 0.1;
    n.matchScore = n.matchScore * randomFactor;
    
    // Ensure match scores are never negative (makes UI cleaner)
    if (n.matchScore < 0) n.matchScore = 0;
  });
  
  // Log scores for all neighborhoods to help with debugging
  console.log("Neighborhood scores before sorting:", 
    neighborhoods.map(n => ({ 
      name: n.name, 
      score: n.matchScore.toFixed(2),
      tags: n.tags
    }))
  );
  
  // Sort by match score (highest first)
  return neighborhoods.sort((a, b) => b.matchScore - a.matchScore);
};

// Get top 3 recommended neighborhoods
export const getTopNeighborhoods = (answers: QuizAnswer[]): Neighborhood[] => {
  if (!answers || answers.length === 0) {
    console.error("No quiz answers provided to getTopNeighborhoods");
    return sandiegoNeighborhoods.slice(0, 3); // Return first 3 as fallback
  }
  
  const rankedNeighborhoods = calculateNeighborhoodMatches(answers);
  // Log the top 5 neighborhoods with their scores for debugging
  console.log("Top 5 matched neighborhoods:", 
    rankedNeighborhoods.slice(0, 5).map(n => ({ 
      name: n.name, 
      score: n.matchScore.toFixed(2),
      tags: n.tags
    }))
  );
  
  // Always return exactly 3 neighborhoods, sorted by match score
  return rankedNeighborhoods
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 3);
};

function calculateMatchScore(answers: QuizAnswer[], neighborhood: Neighborhood): number {
  let totalScore = 0;
  let totalWeight = 0;

  // Calculate score based on answers and neighborhood tags
  answers.forEach(answer => {
    const importanceWeight = IMPORTANCE_WEIGHTS[answer.value as LikertOption];
    const questionTags = getQuestionTags(answer.questionId);
    
    if (questionTags) {
      questionTags.forEach(tag => {
        const tagWeight = (TAG_WEIGHTS as Record<string, number>)[tag] || 0;
        const tagScore = neighborhood.tags.includes(tag) ? 1 : 0;
        
        totalScore += importanceWeight * tagWeight * tagScore;
        totalWeight += importanceWeight * tagWeight;
      });
    }
  });

  // Normalize score to be between 0 and 1
  return totalWeight > 0 ? totalScore / totalWeight : 0;
}

function getQuestionTags(questionId: string): string[] | null {
  // This would typically come from your quiz questions data
  // For now, we'll return a mock implementation
  const questionTags: Record<string, string[]> = {
    beach_proximity: ['beach', 'waterfront', 'coastal'],
    parks_greenspace: ['parks', 'greenspace', 'outdoor'],
    safety: ['safe', 'low-crime', 'security'],
    schools: ['schools', 'education', 'family'],
    public_transport: ['transit', 'public-transport', 'commute'],
    walkability: ['walkable', 'pedestrian', 'urban'],
    dining: ['dining', 'restaurants', 'food'],
    affordability: ['affordable', 'budget', 'value'],
    nightlife: ['nightlife', 'entertainment', 'social'],
    community: ['community', 'events', 'social'],
    work_proximity: ['downtown', 'work', 'commute'],
    pet_friendly: ['pet-friendly', 'dogs', 'parks'],
    cultural: ['cultural', 'arts', 'entertainment'],
    shopping: ['shopping', 'retail', 'convenience'],
    quiet: ['quiet', 'residential', 'peaceful'],
    healthcare: ['healthcare', 'medical', 'hospitals'],
    bike_friendly: ['bike-friendly', 'cycling', 'trails'],
    freeway_access: ['freeway', 'highway', 'commute'],
    historic: ['historic', 'modern', 'architecture'],
    traffic: ['traffic', 'congestion', 'commute'],
    fitness: ['fitness', 'recreation', 'sports'],
    family: ['family', 'children', 'community'],
    airport: ['airport', 'travel', 'convenience'],
    sustainability: ['sustainable', 'green', 'eco-friendly'],
    identity: ['identity', 'character', 'unique']
  };

  return questionTags[questionId] || null;
}
