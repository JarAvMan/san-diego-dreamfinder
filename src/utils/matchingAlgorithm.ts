
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
      case 'outdoor_time':
        // Preference for outdoor activities
        neighborhoods.forEach(n => {
          if (n.tags.includes('outdoors') || n.tags.includes('parks') || n.tags.includes('beach') || n.tags.includes('hiking')) {
            n.matchScore += value;
          }
        });
        break;
        
      case 'walkability':
        // Preference for walkable areas
        neighborhoods.forEach(n => {
          if (n.tags.includes('walkable') || n.tags.includes('urban') || n.tags.includes('shopping')) {
            n.matchScore += value;
          }
        });
        break;
        
      case 'quiet_residential':
        // Preference for quiet residential areas
        neighborhoods.forEach(n => {
          if (n.tags.includes('quiet') || n.tags.includes('suburban') || n.tags.includes('safe')) {
            n.matchScore += value;
          } else if (n.tags.includes('nightlife') || n.tags.includes('busy')) {
            n.matchScore -= value * 0.5;
          }
        });
        break;
        
      case 'historic_character':
        // Preference for historic character
        neighborhoods.forEach(n => {
          if (n.tags.includes('historic') || n.tags.includes('character') || n.tags.includes('charming')) {
            n.matchScore += value;
          } else if (n.tags.includes('modern') || n.tags.includes('new-development')) {
            n.matchScore -= value * 0.5;
          }
        });
        break;

      case 'scenic_views':
        // Preference for scenic views
        neighborhoods.forEach(n => {
          if (n.tags.includes('views') || n.tags.includes('scenic') || n.tags.includes('coastal')) {
            n.matchScore += value;
          }
        });
        break;

      case 'schools':
        // Preference for good schools
        neighborhoods.forEach(n => {
          if (n.tags.includes('good-schools') || n.tags.includes('family') || n.tags.includes('education')) {
            n.matchScore += value;
          }
        });
        break;

      case 'social_scene':
        // Preference for social scene
        neighborhoods.forEach(n => {
          if (n.tags.includes('nightlife') || n.tags.includes('entertainment') || n.tags.includes('culture')) {
            n.matchScore += value;
          }
        });
        break;

      case 'diversity':
        // Preference for diverse communities
        neighborhoods.forEach(n => {
          if (n.tags.includes('diverse') || n.tags.includes('inclusive') || n.tags.includes('culture')) {
            n.matchScore += value;
          }
        });
        break;

      case 'distance_downtown':
        // Openness to living away from downtown
        neighborhoods.forEach(n => {
          if (n.tags.includes('suburban') || n.tags.includes('rural') || n.tags.includes('quiet')) {
            n.matchScore += value;
          } else if (n.tags.includes('downtown') || n.tags.includes('urban')) {
            n.matchScore -= value * 0.5;
          }
        });
        break;

      case 'beach_proximity':
        // Preference for beach proximity
        neighborhoods.forEach(n => {
          if (n.tags.includes('beach') || n.tags.includes('coastal') || n.tags.includes('waterfront')) {
            n.matchScore += value;
          }
        });
        break;
        
      case 'flexible_commute':
        // Flexibility in commute
        neighborhoods.forEach(n => {
          if (n.tags.includes('suburban') || n.tags.includes('rural')) {
            n.matchScore += value;
          }
        });
        break;

      case 'newer_homes':
        // Preference for newer homes
        neighborhoods.forEach(n => {
          if (n.tags.includes('modern') || n.tags.includes('new-development') || n.tags.includes('luxury')) {
            n.matchScore += value;
          } else if (n.tags.includes('historic') || n.tags.includes('character')) {
            n.matchScore -= value * 0.5;
          }
        });
        break;
        
      case 'community_oriented':
        // Preference for community orientation
        neighborhoods.forEach(n => {
          if (n.tags.includes('community') || n.tags.includes('family') || n.tags.includes('events')) {
            n.matchScore += value;
          }
        });
        break;
        
      case 'dining_nightlife':
        // Preference for dining and nightlife
        neighborhoods.forEach(n => {
          if (n.tags.includes('dining') || n.tags.includes('nightlife') || n.tags.includes('entertainment')) {
            n.matchScore += value;
          }
        });
        break;
        
      case 'tourist_friendly':
        // Openness to tourist areas
        neighborhoods.forEach(n => {
          if (n.tags.includes('tourism') || n.tags.includes('popular') || n.tags.includes('attractions')) {
            n.matchScore += value;
          }
        });
        break;
        
      case 'vibrant_culture':
        // Preference for vibrant culture
        neighborhoods.forEach(n => {
          if (n.tags.includes('arts') || n.tags.includes('culture') || n.tags.includes('foodie')) {
            n.matchScore += value;
          }
        });
        break;
        
      case 'affordability':
        // Importance of affordability
        neighborhoods.forEach(n => {
          if (n.tags.includes('affordable')) {
            n.matchScore += value;
          } else if (n.tags.includes('luxury') || n.tags.includes('upscale')) {
            n.matchScore -= value * 0.5;
          }
        });
        break;
        
      case 'outdoor_recreation':
        // Preference for outdoor recreation
        neighborhoods.forEach(n => {
          if (n.tags.includes('outdoors') || n.tags.includes('recreation') || n.tags.includes('active')) {
            n.matchScore += value;
          }
        });
        break;
        
      case 'privacy_space':
        // Preference for privacy and space
        neighborhoods.forEach(n => {
          if (n.tags.includes('spacious') || n.tags.includes('quiet') || n.tags.includes('rural')) {
            n.matchScore += value;
          } else if (n.tags.includes('dense') || n.tags.includes('urban')) {
            n.matchScore -= value * 0.5;
          }
        });
        break;
        
      case 'long_term_home':
        // Looking for long-term home
        neighborhoods.forEach(n => {
          if (n.tags.includes('established') || n.tags.includes('stable') || n.tags.includes('family')) {
            n.matchScore += value;
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
