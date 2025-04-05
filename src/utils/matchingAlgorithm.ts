
import { Neighborhood, QuizAnswer, LikertOption } from '../types';
import { sandiegoNeighborhoods } from '../data/neighborhoods';

// Convert Likert scale to numeric value with increased weight
const likertToValue = (option: LikertOption): number => {
  switch (option) {
    case 'strongly_disagree': return -3; // Increased negative weight
    case 'somewhat_disagree': return -1.5;
    case 'neutral': return 0;
    case 'somewhat_agree': return 1.5;
    case 'strongly_agree': return 3; // Increased positive weight
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
    const value = likertToValue(answer.value);
    console.log(`Processing answer for question ${answer.questionId}: value=${value}`);
    
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
    const weightedValue = value * (categoryWeights[category as keyof typeof categoryWeights] || 1);
    console.log(`Category: ${category}, weighted value: ${weightedValue}`);
    
    // Adjust scores based on answer
    switch (answer.questionId) {
      case 'outdoor_time':
      case 'q1_outdoor_activities': // Added this alternate ID format
        // Preference for outdoor activities
        neighborhoods.forEach(n => {
          if (n.tags.includes('outdoors') || n.tags.includes('parks') || n.tags.includes('beach') || n.tags.includes('hiking')) {
            n.matchScore += weightedValue * 1.2;
          } else {
            // Slightly penalize neighborhoods without these tags when user prefers outdoors
            n.matchScore -= weightedValue * 0.3;
          }
        });
        break;
        
      case 'walkability':
      case 'q4_walkability': // Added this alternate ID format
        // Preference for walkable areas
        neighborhoods.forEach(n => {
          if (n.tags.includes('walkable') || n.tags.includes('urban') || n.tags.includes('shopping')) {
            n.matchScore += weightedValue * 1.5;
          } else if (n.tags.includes('suburban') || n.tags.includes('rural')) {
            // Stronger inverse correlation between walkability preference and rural/suburban areas
            n.matchScore -= weightedValue * 0.6;
          }
        });
        break;
        
      case 'quiet_residential':
      case 'q6_quiet_residential': // Added this alternate ID format
        // Preference for quiet residential areas
        neighborhoods.forEach(n => {
          if (n.tags.includes('quiet') || n.tags.includes('suburban') || n.tags.includes('safe')) {
            n.matchScore += weightedValue * 1.3;
          } else if (n.tags.includes('nightlife') || n.tags.includes('busy') || n.tags.includes('urban')) {
            // Stronger negative impact for busy areas when quiet is preferred
            n.matchScore -= weightedValue * 0.8;
          }
        });
        break;
        
      case 'historic_character':
      case 'q8_local_history': // Added this alternate ID format
        // Preference for historic character
        neighborhoods.forEach(n => {
          if (n.tags.includes('historic') || n.tags.includes('character') || n.tags.includes('charming')) {
            n.matchScore += weightedValue * 1.4;
          } else if (n.tags.includes('modern') || n.tags.includes('new-development')) {
            // Stronger negative impact for modern areas when historic is preferred
            n.matchScore -= weightedValue * 0.7;
          }
        });
        break;

      case 'scenic_views':
      case 'q2_waterfront_proximity': // Added this alternate ID format
        // Preference for scenic views
        neighborhoods.forEach(n => {
          if (n.tags.includes('views') || n.tags.includes('scenic') || n.tags.includes('coastal') || n.tags.includes('beach')) {
            n.matchScore += weightedValue * 1.2;
          } else {
            // Small penalty for non-scenic areas
            n.matchScore -= weightedValue * 0.2;
          }
        });
        break;

      case 'schools':
      case 'q10_school_quality': // Added this alternate ID format
        // Preference for good schools
        neighborhoods.forEach(n => {
          if (n.tags.includes('good-schools') || n.tags.includes('schools') || n.tags.includes('family') || n.tags.includes('education')) {
            n.matchScore += weightedValue * 1.5;
          } else {
            // Significant impact on score for areas without good schools when this is important
            n.matchScore -= weightedValue * 0.5;
          }
        });
        break;

      case 'social_scene':
      case 'q5_urban_vibrancy': // Added this alternate ID format
      case 'q14_nightlife_dining': // Added this alternate ID format
        // Preference for social scene
        neighborhoods.forEach(n => {
          if (n.tags.includes('nightlife') || n.tags.includes('entertainment') || n.tags.includes('culture')) {
            n.matchScore += weightedValue * 1.3;
          } else if (n.tags.includes('quiet') || n.tags.includes('suburban')) {
            // Negative correlation between social scene and quiet areas
            n.matchScore -= weightedValue * 0.6;
          }
        });
        break;

      case 'diversity':
      case 'q7_cultural_diversity': // Added this alternate ID format
        // Preference for diverse communities
        neighborhoods.forEach(n => {
          if (n.tags.includes('diverse') || n.tags.includes('inclusive') || n.tags.includes('culture')) {
            n.matchScore += weightedValue * 1.2;
          }
        });
        break;

      case 'distance_downtown':
      case 'q12_commute_distance': // Added this alternate ID format
      case 'q22_commute_tradeoff': // Added this alternate ID format
        // Openness to living away from downtown
        neighborhoods.forEach(n => {
          if (n.tags.includes('suburban') || n.tags.includes('rural') || n.tags.includes('quiet')) {
            n.matchScore += weightedValue * 1.1;
          } else if (n.tags.includes('downtown') || n.tags.includes('urban')) {
            n.matchScore -= weightedValue * 0.7;
          }
        });
        break;

      case 'beach_proximity':
      case 'q2_waterfront_proximity': // Added this alternate ID format
        // Preference for beach proximity
        neighborhoods.forEach(n => {
          if (n.tags.includes('beach') || n.tags.includes('coastal') || n.tags.includes('waterfront')) {
            n.matchScore += weightedValue * 1.6; // Strong weight for beach preference
          } else {
            // Significant penalty for non-beach areas when beach is important
            n.matchScore -= weightedValue * 0.6;
          }
        });
        break;
        
      case 'flexible_commute':
      case 'q13_public_transit': // Added this alternate ID format
        // Flexibility in commute
        neighborhoods.forEach(n => {
          if (n.tags.includes('suburban') || n.tags.includes('rural')) {
            n.matchScore += weightedValue * 0.9;
          } else if (n.tags.includes('central') || n.tags.includes('downtown')) {
            // Small negative impact for central locations when commuting is flexible
            n.matchScore -= weightedValue * 0.2;
          }
        });
        break;

      case 'newer_homes':
      case 'q9_housing_age': // Added this alternate ID format
        // Preference for newer homes
        neighborhoods.forEach(n => {
          if (n.tags.includes('modern') || n.tags.includes('new-development') || n.tags.includes('luxury')) {
            n.matchScore += weightedValue * 1.3;
          } else if (n.tags.includes('historic') || n.tags.includes('character')) {
            // Stronger negative correlation between preference for new and historic homes
            n.matchScore -= weightedValue * 0.8;
          }
        });
        break;
        
      case 'community_oriented':
      case 'q15_community_interaction': // Added this alternate ID format
        // Preference for community orientation
        neighborhoods.forEach(n => {
          if (n.tags.includes('community') || n.tags.includes('family') || n.tags.includes('events')) {
            n.matchScore += weightedValue * 1.2;
          }
        });
        break;
        
      case 'dining_nightlife':
      case 'q14_nightlife_dining': // Added this alternate ID format
      case 'q21_culinary_culture': // Added this alternate ID format
        // Preference for dining and nightlife
        neighborhoods.forEach(n => {
          if (n.tags.includes('dining') || n.tags.includes('nightlife') || n.tags.includes('entertainment')) {
            n.matchScore += weightedValue * 1.4;
          } else if (n.tags.includes('quiet') || n.tags.includes('rural')) {
            // Strong negative impact for quiet areas when nightlife is preferred
            n.matchScore -= weightedValue * 0.7;
          }
        });
        break;
        
      case 'tourist_friendly':
        // Openness to tourist areas
        neighborhoods.forEach(n => {
          if (n.tags.includes('tourism') || n.tags.includes('popular') || n.tags.includes('attractions')) {
            n.matchScore += weightedValue;
          } else if (n.tags.includes('quiet') || n.tags.includes('suburban')) {
            // Slight negative impact for quiet areas when tourism is preferred
            n.matchScore -= weightedValue * 0.3;
          }
        });
        break;
        
      case 'vibrant_culture':
      case 'q21_culinary_culture': // Added this alternate ID format
        // Preference for vibrant culture
        neighborhoods.forEach(n => {
          if (n.tags.includes('arts') || n.tags.includes('culture') || n.tags.includes('foodie')) {
            n.matchScore += weightedValue * 1.3;
          } else if (n.tags.includes('suburban') || n.tags.includes('quiet')) {
            // Negative correlation between cultural vibrancy and quiet areas
            n.matchScore -= weightedValue * 0.5;
          }
        });
        break;
        
      case 'affordability':
      case 'q11_affordability': // Added this alternate ID format
        // Importance of affordability
        neighborhoods.forEach(n => {
          // Use budget information to determine affordability
          if (n.budget.min < 700000) {
            n.matchScore += weightedValue * 1.5; // Strong weight for truly affordable areas
          } else if (n.budget.min >= 1000000) {
            // Strong negative impact for luxury areas when affordability is important
            n.matchScore -= weightedValue * 0.9;
          }
        });
        break;
        
      case 'outdoor_recreation':
      case 'q3_parks_recreation': // Added this alternate ID format
      case 'q20_sports_recreation': // Added this alternate ID format
        // Preference for outdoor recreation
        neighborhoods.forEach(n => {
          if (n.tags.includes('outdoors') || n.tags.includes('recreation') || n.tags.includes('active') || n.tags.includes('parks')) {
            n.matchScore += weightedValue * 1.2;
          } else {
            // Small penalty for areas without outdoor recreation
            n.matchScore -= weightedValue * 0.3;
          }
        });
        break;
        
      case 'privacy_space':
      case 'q23_space_privacy': // Added this alternate ID format
        // Preference for privacy and space
        neighborhoods.forEach(n => {
          if (n.tags.includes('spacious') || n.tags.includes('quiet') || n.tags.includes('rural')) {
            n.matchScore += weightedValue * 1.4;
          } else if (n.tags.includes('dense') || n.tags.includes('urban')) {
            // Strong negative correlation between privacy preference and urban density
            n.matchScore -= weightedValue * 0.8;
          }
        });
        break;
        
      case 'long_term_home':
      case 'q24_long_term': // Added this alternate ID format
        // Looking for long-term home
        neighborhoods.forEach(n => {
          if (n.tags.includes('established') || n.tags.includes('stable') || n.tags.includes('family')) {
            n.matchScore += weightedValue * 1.1;
          } else if (n.tags.includes('trending') || n.tags.includes('nightlife')) {
            // Slight negative for trendy areas when stability is preferred
            n.matchScore -= weightedValue * 0.4;
          }
        });
        break;
        
      case 'q16_pet_friendly': // Pet friendly
        neighborhoods.forEach(n => {
          if (n.tags.includes('family') || n.tags.includes('parks') || n.tags.includes('outdoors') || n.tags.includes('spacious')) {
            n.matchScore += weightedValue * 1.1;
          }
        });
        break;
        
      case 'q17_healthcare_access': // Healthcare access
        neighborhoods.forEach(n => {
          if (n.tags.includes('urban') || n.tags.includes('central')) {
            n.matchScore += weightedValue * 1.0;
          }
        });
        break;
        
      case 'q18_sustainability': // Sustainability
        neighborhoods.forEach(n => {
          if (n.tags.includes('walkable') || n.tags.includes('urban')) {
            n.matchScore += weightedValue * 1.1;
          }
        });
        break;
        
      case 'q19_noise_levels': // Noise sensitivity
        neighborhoods.forEach(n => {
          if (n.tags.includes('quiet') || n.tags.includes('suburban') || n.tags.includes('rural')) {
            n.matchScore += weightedValue * 1.3;
          } else if (n.tags.includes('nightlife') || n.tags.includes('busy') || n.tags.includes('urban')) {
            n.matchScore -= weightedValue * 0.8;
          }
        });
        break;
        
      case 'q25_lifestyle_balance': // Lifestyle balance
        neighborhoods.forEach(n => {
          if (n.tags.includes('walkable') || n.tags.includes('central')) {
            n.matchScore += weightedValue * 1.1;
          }
        });
        break;
        
      default:
        // For any unrecognized question IDs, log but don't crash
        console.log(`Unrecognized question ID: ${answer.questionId}`);
        break;
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
