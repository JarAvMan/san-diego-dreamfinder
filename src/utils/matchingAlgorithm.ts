
import { Neighborhood, QuizAnswer, LikertOption } from '../types';
import { sandiegoNeighborhoods } from '../data/neighborhoods';

// Convert Likert scale to numeric value
const likertToValue = (option: LikertOption): number => {
  switch (option) {
    case 'strongly_disagree': return -2;
    case 'somewhat_disagree': return -1;
    case 'neutral': return 0;
    case 'somewhat_agree': return 1;
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
      case 'nature_sounds':
        // Preference for natural surroundings
        neighborhoods.forEach(n => {
          if (n.tags.includes('quiet') || n.tags.includes('suburban') || n.tags.includes('rural')) {
            n.matchScore += value;
          } else if (n.tags.includes('urban') || n.tags.includes('nightlife')) {
            n.matchScore -= value * 0.5;
          }
        });
        break;
        
      case 'discover_shops':
        // Preference for discovering shops and eateries
        neighborhoods.forEach(n => {
          if (n.tags.includes('shopping') || n.tags.includes('dining') || n.tags.includes('boutiques')) {
            n.matchScore += value;
          }
        });
        break;
        
      case 'fast_paced':
        // Preference for fast-paced environment
        neighborhoods.forEach(n => {
          if (n.tags.includes('urban') || n.tags.includes('nightlife') || n.tags.includes('busy')) {
            n.matchScore += value;
          } else if (n.tags.includes('quiet') || n.tags.includes('rural')) {
            n.matchScore -= value * 0.5;
          }
        });
        break;
        
      case 'slow_paced':
        // Preference for slower-paced environment
        neighborhoods.forEach(n => {
          if (n.tags.includes('quiet') || n.tags.includes('suburban') || n.tags.includes('rural')) {
            n.matchScore += value;
          } else if (n.tags.includes('urban') || n.tags.includes('nightlife')) {
            n.matchScore -= value * 0.5;
          }
        });
        break;

      case 'community_involvement':
        // Preference for community involvement
        neighborhoods.forEach(n => {
          if (n.tags.includes('community') || n.tags.includes('events') || n.tags.includes('family')) {
            n.matchScore += value;
          }
        });
        break;

      case 'privacy':
        // Preference for privacy
        neighborhoods.forEach(n => {
          if (n.tags.includes('quiet') || n.tags.includes('spacious') || n.tags.includes('rural')) {
            n.matchScore += value;
          } else if (n.tags.includes('dense') || n.tags.includes('urban')) {
            n.matchScore -= value * 0.5;
          }
        });
        break;

      case 'creative_area':
        // Preference for creative areas
        neighborhoods.forEach(n => {
          if (n.tags.includes('arts') || n.tags.includes('culture') || n.tags.includes('hipster')) {
            n.matchScore += value;
          }
        });
        break;

      case 'diverse_neighborhood':
        // Preference for diverse neighborhoods
        neighborhoods.forEach(n => {
          if (n.tags.includes('diverse') || n.tags.includes('urban') || n.tags.includes('culture')) {
            n.matchScore += value;
          }
        });
        break;

      case 'outdoor_spaces':
        // Preference for outdoor spaces
        neighborhoods.forEach(n => {
          if (n.tags.includes('outdoors') || n.tags.includes('parks') || n.tags.includes('hiking')) {
            n.matchScore += value;
          }
        });
        break;

      case 'marina_access':
        // Preference for marina access
        neighborhoods.forEach(n => {
          if (n.tags.includes('marina') || n.tags.includes('waterfront') || n.tags.includes('boating')) {
            n.matchScore += value;
          }
        });
        break;
        
      case 'beach_access':
        // Preference for beach access
        neighborhoods.forEach(n => {
          if (n.tags.includes('beach') || n.tags.includes('coastal')) {
            n.matchScore += value;
          }
        });
        break;

      case 'active_lifestyle':
        // Preference for active lifestyle
        neighborhoods.forEach(n => {
          if (n.tags.includes('outdoors') || n.tags.includes('fitness') || n.tags.includes('active')) {
            n.matchScore += value;
          }
        });
        break;
        
      case 'nightlife':
        // Preference for nightlife
        neighborhoods.forEach(n => {
          if (n.tags.includes('nightlife') || n.tags.includes('entertainment') || n.tags.includes('bars')) {
            n.matchScore += value;
          } else if (n.tags.includes('quiet') || n.tags.includes('rural')) {
            n.matchScore -= value * 0.5;
          }
        });
        break;
        
      case 'daytime_activities':
        // Preference for daytime activities
        neighborhoods.forEach(n => {
          if (n.tags.includes('family') || n.tags.includes('parks') || n.tags.includes('outdoors')) {
            n.matchScore += value;
          } else if (n.tags.includes('nightlife')) {
            n.matchScore -= value * 0.5;
          }
        });
        break;
        
      case 'cultural_events':
        // Preference for cultural events
        neighborhoods.forEach(n => {
          if (n.tags.includes('culture') || n.tags.includes('events') || n.tags.includes('arts')) {
            n.matchScore += value;
          }
        });
        break;
        
      case 'food_culture':
        // Preference for food culture
        neighborhoods.forEach(n => {
          if (n.tags.includes('dining') || n.tags.includes('restaurants') || n.tags.includes('foodie')) {
            n.matchScore += value;
          }
        });
        break;
        
      case 'farmers_markets':
        // Preference for farmers markets
        neighborhoods.forEach(n => {
          if (n.tags.includes('farmers-market') || n.tags.includes('organic') || n.tags.includes('community')) {
            n.matchScore += value;
          }
        });
        break;
        
      case 'coffee_shops':
        // Preference for coffee shops
        neighborhoods.forEach(n => {
          if (n.tags.includes('coffee') || n.tags.includes('cafes') || n.tags.includes('walkable')) {
            n.matchScore += value;
          }
        });
        break;
        
      case 'historical_charm':
        // Preference for historical charm
        neighborhoods.forEach(n => {
          if (n.tags.includes('historic') || n.tags.includes('character') || n.tags.includes('charming')) {
            n.matchScore += value;
          } else if (n.tags.includes('modern') || n.tags.includes('new-development')) {
            n.matchScore -= value * 0.5;
          }
        });
        break;
        
      case 'beach_vibe':
        // Preference for beach town vibe
        neighborhoods.forEach(n => {
          if (n.tags.includes('beach-vibe') || n.tags.includes('coastal') || n.tags.includes('laid-back')) {
            n.matchScore += value;
          }
        });
        break;

      // Additional case for college/university areas
      case 'education_proximity':
        neighborhoods.forEach(n => {
          if (n.tags.includes('university') || n.tags.includes('education') || n.tags.includes('schools')) {
            n.matchScore += value;
          }
        });
        break;

      // Case for affordability preference
      case 'affordability':
        neighborhoods.forEach(n => {
          if (n.tags.includes('affordable')) {
            n.matchScore += value;
          } else if (n.tags.includes('luxury') || n.tags.includes('upscale')) {
            n.matchScore -= value * 0.5;
          }
        });
        break;

      // Case for luxury preference
      case 'luxury_living':
        neighborhoods.forEach(n => {
          if (n.tags.includes('luxury') || n.tags.includes('upscale') || n.tags.includes('exclusive')) {
            n.matchScore += value;
          } else if (n.tags.includes('affordable')) {
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
