import { QuizAnswer, Neighborhood } from '@/types';
import { sandiegoNeighborhoods } from '../data/neighborhoods';
import { calculateNeighborhoodMatches } from './matchingAlgorithm';

interface AIPrompt {
  role: 'system' | 'user';
  content: string;
}

interface ExtendedQuizAnswer extends QuizAnswer {
  importance: number;
}

export async function getAIRecommendations(answers: QuizAnswer[]): Promise<Neighborhood[]> {
  // Format the answers into a natural language description
  const preferences = formatAnswersToPrompt(answers as ExtendedQuizAnswer[]);
  
  // Create the prompt for the AI model
  const prompt: AIPrompt[] = [
    {
      role: 'system',
      content: `You are a San Diego neighborhood expert. Your task is to recommend the best neighborhoods based on user preferences.
      Consider factors like lifestyle, environment, housing, community, and practical aspects.
      Be specific about why each neighborhood matches the user's preferences.
      Return your recommendations in a structured format.`
    },
    {
      role: 'user',
      content: `Based on these preferences: ${preferences}
      
      Please recommend the top 3 neighborhoods from this list: ${sandiegoNeighborhoods.map(n => n.name).join(', ')}
      
      For each recommendation, explain why it matches the user's preferences and highlight specific features that align with their needs.`
    }
  ];

  try {
    // Call the local AI model (you'll need to implement this based on your chosen model)
    const response = await callLocalAIModel(prompt);
    
    // Parse the AI response and match it with our neighborhood data
    return parseAIResponse(response, sandiegoNeighborhoods);
  } catch (error) {
    console.error('Error getting AI recommendations:', error);
    // Fallback to the algorithmic approach if AI fails
    return calculateNeighborhoodMatches(answers);
  }
}

function formatAnswersToPrompt(answers: ExtendedQuizAnswer[]): string {
  return answers.map(answer => {
    const question = getQuestionText(answer.questionId);
    return `${question}: ${answer.value} (Importance: ${answer.importance})`;
  }).join('\n');
}

function getQuestionText(questionId: string): string {
  // Map question IDs to their full text
  const questionMap: Record<string, string> = {
    walkability: 'How important is walkability to you?',
    quiet: 'How important is a quiet environment?',
    scenic: 'How important are scenic views?',
    waterfront: 'How important is waterfront access?',
    historic: 'How important are historic homes?',
    newer_homes: 'How important are newer homes?',
    space: 'How important is having more space?',
    community: 'How important is a strong community feel?',
    diversity: 'How important is diversity?',
    noise: 'How important is avoiding noise?',
    schools: 'How important are good schools?',
    commute: 'How important is commute time?',
    affordability: 'How important is affordability?'
  };
  
  return questionMap[questionId] || questionId;
}

async function callLocalAIModel(prompt: AIPrompt[]): Promise<string> {
  // TODO: Implement this based on your chosen local AI model
  // For example, you could use:
  // - Ollama (https://ollama.ai/)
  // - LocalAI (https://github.com/go-skynet/LocalAI)
  // - llama.cpp
  // - or any other local LLM solution
  
  // Example implementation with Ollama:
  const response = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'llama2', // or any other model you have installed
      prompt: prompt.map(p => `${p.role}: ${p.content}`).join('\n'),
      stream: false
    })
  });
  
  const data = await response.json();
  return data.response;
}

function parseAIResponse(response: string, neighborhoods: Neighborhood[]): Neighborhood[] {
  // Extract neighborhood names from the AI response
  const recommendedNames = extractNeighborhoodNames(response);
  
  // Match the names with our neighborhood data
  return recommendedNames
    .map(name => neighborhoods.find(n => n.name.toLowerCase() === name.toLowerCase()))
    .filter((n): n is Neighborhood => n !== undefined)
    .slice(0, 3); // Ensure we only return top 3
}

function extractNeighborhoodNames(response: string): string[] {
  // Simple regex to extract neighborhood names
  const names = response.match(/\b([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)\b/g) || [];
  return names.filter(name => 
    sandiegoNeighborhoods.some(n => 
      n.name.toLowerCase() === name.toLowerCase()
    )
  );
} 