
import React from 'react';
import { QuizQuestion, LikertOption } from '@/types';
import LikertScale from './LikertScale';
import { cn } from '@/lib/utils';

interface QuizCardProps {
  question: QuizQuestion;
  answer: LikertOption | null;
  onAnswer: (value: LikertOption) => void;
  isActive: boolean;
}

const QuizCard: React.FC<QuizCardProps> = ({
  question,
  answer,
  onAnswer,
  isActive
}) => {
  return (
    <div 
      className={cn(
        "quiz-card p-8 rounded-2xl border bg-card/80 backdrop-blur-sm shadow-sm",
        "transition-all duration-500 ease-in-out",
        isActive 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-8 pointer-events-none"
      )}
    >
      <h3 className="text-xl font-medium text-card-foreground mb-6">
        {question.text}
      </h3>
      
      <LikertScale 
        value={answer} 
        onChange={onAnswer} 
      />
    </div>
  );
};

export default QuizCard;
