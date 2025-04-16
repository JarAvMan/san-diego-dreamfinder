import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps, className }) => {
  // Guard against division by zero
  if (totalSteps === 0) {
    return (
      <div className={cn("w-full bg-muted rounded-full h-1.5 overflow-hidden", className)}>
        <div 
          className="h-full bg-primary rounded-full transition-all duration-500 ease-in-out"
          style={{ width: '0%' }}
          aria-valuenow={0}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    );
  }

  const progress = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className={cn("w-full bg-muted rounded-full h-1.5 overflow-hidden", className)}>
      <div 
        className="h-full bg-primary rounded-full transition-all duration-500 ease-in-out"
        style={{ width: `${progress}%` }}
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
};

export default ProgressBar;
