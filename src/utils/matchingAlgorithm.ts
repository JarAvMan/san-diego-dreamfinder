
import { QuizAnswer, Neighborhood, LikertOption } from '../types';
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
      case 'vibrant_area':
        // Preference for vibrant areas with activities
        neighborhoods.forEach(n => {
          if (n.tags.includes('nightlife') || n.tags.includes('urban') || n.tags.includes('dining')) {
            n.matchScore += value;
          } else if (n.tags.includes('quiet') || n.tags.includes('suburban') || n.tags.includes('rural')) {
            n.matchScore -= value * 0.5;
          }
        });
        break;
        
      case 'quiet_residential':
        // Preference for quiet residential neighborhoods
        neighborhoods.forEach(n => {
          if (n.tags.includes('quiet') || n.tags.includes('suburban') || n.tags.includes('family')) {
            n.matchScore += value;
          } else if (n.tags.includes('nightlife') || n.tags.includes('urban')) {
            n.matchScore -= value * 0.5;
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
          if (n.tags.includes('transit')) {
            n.matchScore += value;
          } else if (n.tags.includes('urban')) {
            n.matchScore += value * 0.5;
          }
        });
        break;

      case 'driving':
        // Preference for driving over walking/biking
        neighborhoods.forEach(n => {
          if (n.tags.includes('suburban') || n.tags.includes('rural')) {
            n.matchScore += value;
          } else if (n.tags.includes('walkable') || n.tags.includes('transit')) {
            n.matchScore -= value * 0.5;
          }
        });
        break;

      case 'outdoors':
        // Preference for outdoor activities
        neighborhoods.forEach(n => {
          if (n.tags.includes('outdoors') || n.tags.includes('parks') || n.tags.includes('beach')) {
            n.matchScore += value;
          }
        });
        break;

      case 'near_water':
        // Preference for living near water
        neighborhoods.forEach(n => {
          if (n.tags.includes('beach') || n.tags.includes('waterfront') || n.tags.includes('coastal')) {
            n.matchScore += value;
          }
        });
        break;

      case 'active_community':
        // Preference for active community with events
        neighborhoods.forEach(n => {
          if (n.tags.includes('community') || n.tags.includes('events')) {
            n.matchScore += value;
          }
        });
        break;

      case 'arts_culture':
        // Preference for arts and culture
        neighborhoods.forEach(n => {
          if (n.tags.includes('arts') || n.tags.includes('culture')) {
            n.matchScore += value;
          }
        });
        break;

      case 'historic_modern':
        // Preference for mix of historic charm and modern development
        neighborhoods.forEach(n => {
          if (n.tags.includes('historic') || n.tags.includes('mixed')) {
            n.matchScore += value;
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

      case 'community':
        // Preference for strong community sense
        neighborhoods.forEach(n => {
          if (n.tags.includes('community') || n.tags.includes('events')) {
            n.matchScore += value;
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
        
      case 'pet_friendly':
        // Preference for pet-friendly areas
        neighborhoods.forEach(n => {
          if (n.tags.includes('pet-friendly') || n.tags.includes('parks')) {
            n.matchScore += value;
          }
        });
        break;
        
      case 'large_yards':
        // Preference for large yards and open spaces
        neighborhoods.forEach(n => {
          if (n.tags.includes('spacious') || n.tags.includes('suburban') || n.tags.includes('rural')) {
            n.matchScore += value;
          } else if (n.tags.includes('urban') || n.tags.includes('condos')) {
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
