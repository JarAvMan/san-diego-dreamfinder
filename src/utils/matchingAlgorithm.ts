
import { QuizAnswer, Neighborhood, LikertOption } from '../types';
import { sandiegoNeighborhoods } from '../data/neighborhoods';

// Convert Likert scale to numeric value
const likertToValue = (option: LikertOption): number => {
  switch (option) {
    case 'strongly_disagree': return -2;
    case 'disagree': return -1;
    case 'neutral': return 0;
    case 'agree': return 1;
    case 'strongly_agree': return 2;
  }
};

// Calculate neighborhood match scores based on user answers
export const calculateNeighborhoodMatches = (answers: QuizAnswer[]): Neighborhood[] => {
  // Create a copy of neighborhoods to work with
  const neighborhoods = JSON.parse(JSON.stringify(sandiegoNeighborhoods)) as Neighborhood[];
  
  // Reset all match scores
  neighborhoods.forEach(n => n.matchScore = 0);
  
  // Process each answer
  answers.forEach(answer => {
    const value = likertToValue(answer.value);
    
    // Adjust scores based on answer
    switch (answer.questionId) {
      case 'budget':
        // Preference for median price range ($825,000)
        neighborhoods.forEach(n => {
          // Higher score for neighborhoods within or below median price
          if (n.budget.min <= 825000 && n.budget.max >= 825000) {
            n.matchScore += value;
          } else if (n.budget.max < 825000) {
            // Affordable neighborhoods get bonus if user wants median price
            n.matchScore += value > 0 ? value : 0;
          } else if (n.budget.min > 825000) {
            // Expensive neighborhoods get penalty if user wants median price
            n.matchScore -= value > 0 ? value : 0;
          }
        });
        break;
        
      case 'luxury':
        // Preference for luxury homes
        neighborhoods.forEach(n => {
          if (n.tags.includes('luxury') || n.tags.includes('upscale')) {
            n.matchScore += value;
          } else {
            n.matchScore -= value * 0.5; // Small penalty for non-luxury if user wants luxury
          }
        });
        break;
        
      case 'condo':
        // Preference for condos/townhouses
        neighborhoods.forEach(n => {
          if (n.tags.includes('condos')) {
            n.matchScore += value;
          } else if (n.id === 'downtown-san-diego' || n.id === 'little-italy' || n.id === 'hillcrest' || n.id === 'mission-valley') {
            // Areas with many condos
            n.matchScore += value * 0.75;
          }
        });
        break;
        
      case 'walkability':
        // Preference for walkable neighborhoods
        neighborhoods.forEach(n => {
          if (n.tags.includes('walkable')) {
            n.matchScore += value;
          } else if (n.tags.includes('urban')) {
            n.matchScore += value * 0.5;
          }
        });
        break;
        
      case 'public_transit':
        // Preference for public transit
        neighborhoods.forEach(n => {
          if (n.id === 'downtown-san-diego' || n.id === 'little-italy' || n.id === 'hillcrest' || n.id === 'north-park' || n.id === 'la-mesa' || n.id === 'mission-valley') {
            n.matchScore += value;
          } else if (n.tags.includes('urban') || n.tags.includes('transit')) {
            n.matchScore += value * 0.5;
          }
        });
        break;
        
      case 'nightlife':
        // Preference for nightlife and entertainment
        neighborhoods.forEach(n => {
          if (n.tags.includes('nightlife')) {
            n.matchScore += value;
          } else if (n.tags.includes('dining') || n.tags.includes('urban')) {
            n.matchScore += value * 0.5;
          } else if (n.tags.includes('quiet')) {
            n.matchScore -= value * 0.5;
          }
        });
        break;
        
      case 'schools':
        // Preference for good schools
        neighborhoods.forEach(n => {
          if (n.tags.includes('schools')) {
            n.matchScore += value;
          } else if (n.tags.includes('family')) {
            n.matchScore += value * 0.5;
          }
        });
        break;
        
      case 'commute':
        // Preference for short commute to downtown
        neighborhoods.forEach(n => {
          if (n.id === 'downtown-san-diego' || n.id === 'little-italy' || n.id === 'hillcrest' || n.id === 'north-park' || n.id === 'mission-hills' || n.id === 'bankers-hill') {
            n.matchScore += value;
          } else if (n.id === 'coronado' || n.id === 'mission-valley' || n.id === 'south-park') {
            n.matchScore += value * 0.5; // Still close to downtown
          } else if (n.id === 'carmel-valley' || n.id === 'del-mar' || n.id === 'rancho-bernardo' || n.id === 'ramona' || n.id === 'julian') {
            n.matchScore -= value * 0.5; // Further from downtown
          }
        });
        break;
        
      case 'yard':
        // Preference for yards/outdoor space
        neighborhoods.forEach(n => {
          if (n.tags.includes('suburban') || n.tags.includes('rural') || n.tags.includes('spacious')) {
            n.matchScore += value;
          } else if (n.tags.includes('condos') || n.id === 'downtown-san-diego' || n.id === 'little-italy') {
            n.matchScore -= value * 0.5;
          }
        });
        break;
        
      case 'urban':
        // Preference for urban environment
        neighborhoods.forEach(n => {
          if (n.tags.includes('urban')) {
            n.matchScore += value;
          } else if (n.tags.includes('suburban') || n.tags.includes('quiet') || n.tags.includes('rural')) {
            n.matchScore -= value * 0.5;
          }
        });
        break;
        
      case 'beach':
        // Preference for coastal/beach proximity
        neighborhoods.forEach(n => {
          if (n.tags.includes('beach')) {
            n.matchScore += value;
          } else if (n.tags.includes('coastal') || n.tags.includes('waterfront')) {
            n.matchScore += value * 0.5;
          }
        });
        break;
        
      case 'quiet':
        // Preference for quiet neighborhoods
        neighborhoods.forEach(n => {
          if (n.tags.includes('quiet') || n.tags.includes('rural')) {
            n.matchScore += value;
          } else if (n.tags.includes('nightlife') || n.tags.includes('urban')) {
            n.matchScore -= value * 0.5;
          }
        });
        break;
    }
  });
  
  // Sort by match score (highest first)
  return neighborhoods.sort((a, b) => b.matchScore - a.matchScore);
};

// Get top 3 recommended neighborhoods
export const getTopNeighborhoods = (answers: QuizAnswer[]): Neighborhood[] => {
  const rankedNeighborhoods = calculateNeighborhoodMatches(answers);
  return rankedNeighborhoods.slice(0, 3);
};
