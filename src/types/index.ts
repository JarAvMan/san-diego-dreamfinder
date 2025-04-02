
export interface LeadInfo {
  name: string;
  email: string;
  phone: string;
}

export interface Neighborhood {
  id: string | number;
  name: string;
  description: string;
  image: string;
  matchScore?: number;
  keyFeatures: string[];
  budget: {
    min: number;
    max: number;
  };
  tags: string[];
  kvCoreLink?: string;
}

export type LikertOption = 'strongly_disagree' | 'somewhat_disagree' | 'neutral' | 'somewhat_agree' | 'strongly_agree';

export interface QuizAnswer {
  questionId: string;
  value: LikertOption;
}

export enum QuizStep {
  WELCOME = 'welcome',
  QUESTIONS = 'questions',
  LEAD_FORM = 'lead_form',
  RESULTS = 'results'
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
  category?: string;
  text?: string; // Added for backward compatibility
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
