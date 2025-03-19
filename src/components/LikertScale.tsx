
import React from 'react';
import { LikertOption } from '@/types';
import { likertLabels } from '@/data/quizQuestions';
import { cn } from '@/lib/utils';

interface LikertScaleProps {
  value: LikertOption | null;
  onChange: (value: LikertOption) => void;
}

const LikertScale: React.FC<LikertScaleProps> = ({ value, onChange }) => {
  const options: LikertOption[] = [
    'strongly_disagree',
    'somewhat_disagree',
    'neutral',
    'somewhat_agree',
    'strongly_agree'
  ];

  return (
    <div className="grid grid-cols-5 gap-2 mt-6 w-full">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={cn(
            "likert-option flex flex-col items-center justify-center p-3 rounded-lg border transition-all",
            "hover:border-primary/50 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20",
            value === option 
              ? "border-primary bg-primary/5 shadow-sm" 
              : "border-border bg-card"
          )}
        >
          <div 
            className={cn(
              "w-3 h-3 rounded-full mb-2",
              value === option 
                ? "bg-primary" 
                : "bg-muted"
            )}
          />
          <span className={cn(
            "text-xs font-medium text-center",
            value === option 
              ? "text-primary" 
              : "text-muted-foreground"
          )}>
            {likertLabels[option]}
          </span>
        </button>
      ))}
    </div>
  );
};

export default LikertScale;
