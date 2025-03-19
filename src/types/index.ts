
export type LikertOption = 
  | 'strongly_disagree'
  | 'disagree'
  | 'neutral'
  | 'agree'
  | 'strongly_agree';

export interface QuizQuestion {
  id: string;
  text: string;
  category: QuestionCategory;
}

export type QuestionCategory = 
  | 'budget'
  | 'home_type'
  | 'walkability'
  | 'nightlife'
  | 'schools'
  | 'commute'
  | 'size'
  | 'environment';

export interface QuizAnswer {
  questionId: string;
  value: LikertOption;
}

export interface UserProfile {
  answers: QuizAnswer[];
  leadInfo?: LeadInfo;
  recommendedNeighborhoods?: Neighborhood[];
}

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
  budget: BudgetRange;
  tags: string[];
}

export interface BudgetRange {
  min: number;
  max: number;
}

export enum QuizStep {
  WELCOME = 'welcome',
  QUESTIONS = 'questions',
  LEAD_FORM = 'lead_form',
  RESULTS = 'results'
}
