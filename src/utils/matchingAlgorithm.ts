import { Neighborhood, QuizAnswer, LikertOption } from '../types';
import { sandiegoNeighborhoods } from '../data/neighborhoods';

// Convert importance scale to numeric value
const importanceToValue = (option: LikertOption): number => {
  switch (option) {
    case 'not_important': return 0;
    case 'somewhat_important': return 1.5;
    case 'very_important': return 3;
  }
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
    const importance = importanceToValue(answer.value);
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
    
    // Adjust scores based on answer
    switch (answer.questionId) {
      // ... keep existing switch statement logic
    }
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
  return rankedNeighborhoods.slice(0, 3);
};
