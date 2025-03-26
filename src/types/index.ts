
export interface LeadInfo {
  name: string;
  email: string;
  phone: string;
}

export interface Neighborhood {
  id: string;
  name: string;
  description: string;
  image: string;
  matchScore: number;
  keyFeatures: string[];
  budget: {
    min: number;
    max: number;
  };
  tags: string[];
  kvCoreLink?: string; // Add optional property for kvCORE link
}

export interface QuizQuestion {
  id: string;
  question: string;
  description?: string;
  options: {
    id: string;
    text: string;
    tags?: string[];
    icon?: string;
    excludeTags?: string[];
    boostTags?: string[];
  }[];
  maxOptions?: number;
  type: 'single' | 'multiple' | 'likert' | 'priceRange';
  required?: boolean;
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: {
    [questionId: string]: {
      selectedOptionIds: string[];
      likertValue?: number;
      priceRange?: { min: number; max: number };
    };
  };
  selectedNeighborhoods: Neighborhood[];
  leadInfo?: LeadInfo;
}
