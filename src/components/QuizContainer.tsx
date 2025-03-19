
import React, { useState, useEffect } from 'react';
import { QuizQuestion, QuizAnswer, LeadInfo, Neighborhood, QuizStep, LikertOption } from '@/types';
import { quizQuestions } from '@/data/quizQuestions';
import QuizCard from './QuizCard';
import ProgressBar from './ProgressBar';
import LeadForm from './LeadForm';
import ResultsPage from './ResultsPage';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getTopNeighborhoods } from '@/utils/matchingAlgorithm';
import { useToast } from "@/components/ui/use-toast";

const QuizContainer: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<QuizStep>(QuizStep.WELCOME);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [leadInfo, setLeadInfo] = useState<LeadInfo | null>(null);
  const [recommendations, setRecommendations] = useState<Neighborhood[]>([]);
  const { toast } = useToast();

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const totalQuestions = quizQuestions.length;
  
  // Find current answer if it exists
  const currentAnswer = answers.find(a => a.questionId === currentQuestion?.id)?.value || null;

  // Handle next question navigation
  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Last question completed, move to lead form
      setCurrentStep(QuizStep.LEAD_FORM);
    }
  };

  // Handle previous question navigation
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    } else {
      // First question, go back to welcome
      setCurrentStep(QuizStep.WELCOME);
    }
  };

  // Handle answer selection
  const handleAnswer = (value: LikertOption) => {
    setAnswers(prev => {
      // Check if we already have an answer for this question
      const existingIndex = prev.findIndex(a => a.questionId === currentQuestion.id);
      
      if (existingIndex >= 0) {
        // Update existing answer
        const newAnswers = [...prev];
        newAnswers[existingIndex] = { 
          questionId: currentQuestion.id, 
          value 
        };
        return newAnswers;
      } else {
        // Add new answer
        return [
          ...prev, 
          { 
            questionId: currentQuestion.id, 
            value 
          }
        ];
      }
    });
  };

  // Handle lead form submission
  const handleLeadSubmit = (data: LeadInfo) => {
    setLeadInfo(data);
    
    // Calculate recommendations based on answers
    const topNeighborhoods = getTopNeighborhoods(answers);
    setRecommendations(topNeighborhoods);
    
    // Show success toast
    toast({
      title: "Profile Created!",
      description: "Generating your personalized neighborhood matches...",
    });
    
    // Simulate API delay
    setTimeout(() => {
      setCurrentStep(QuizStep.RESULTS);
    }, 1500);
    
    // Here you would typically send the lead info to your CRM system
    console.log('Lead captured:', data);
    console.log('Quiz answers:', answers);
    console.log('Recommendations:', topNeighborhoods);
  };

  // Start the quiz from welcome screen
  const startQuiz = () => {
    setCurrentStep(QuizStep.QUESTIONS);
  };

  // Reset the entire quiz
  const resetQuiz = () => {
    setCurrentStep(QuizStep.WELCOME);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setLeadInfo(null);
    setRecommendations([]);
  };

  // Determine if next button should be enabled
  const isNextEnabled = currentAnswer !== null;

  return (
    <div className="quiz-container p-4">
      {currentStep === QuizStep.WELCOME && (
        <div className="p-8 text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Find Your Perfect San Diego Neighborhood</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Answer a few questions about your lifestyle and preferences, and our AI will match you with the ideal San Diego neighborhoods for your next home.
          </p>
          <Button 
            size="lg" 
            onClick={startQuiz} 
            className="mt-8 px-8 py-6 text-lg"
          >
            Start Quiz
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      )}

      {currentStep === QuizStep.QUESTIONS && (
        <div className="space-y-8 animate-fade-in">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-muted-foreground">
                Question {currentQuestionIndex + 1} of {totalQuestions}
              </span>
              <span className="text-sm font-medium text-primary">
                {Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100)}%
              </span>
            </div>
            <ProgressBar 
              currentStep={currentQuestionIndex + 1} 
              totalSteps={totalQuestions} 
            />
          </div>
          
          <QuizCard 
            question={currentQuestion}
            answer={currentAnswer}
            onAnswer={handleAnswer}
            isActive={true}
          />
          
          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              className="flex items-center"
            >
              <ArrowLeft className="mr-2" size={16} />
              Back
            </Button>
            
            <Button
              onClick={handleNext}
              disabled={!isNextEnabled}
              className="flex items-center"
            >
              {currentQuestionIndex < totalQuestions - 1 ? (
                <>
                  Next
                  <ArrowRight className="ml-2" size={16} />
                </>
              ) : (
                <>
                  Complete
                  <ArrowRight className="ml-2" size={16} />
                </>
              )}
            </Button>
          </div>
        </div>
      )}

      {currentStep === QuizStep.LEAD_FORM && (
        <LeadForm onSubmit={handleLeadSubmit} />
      )}

      {currentStep === QuizStep.RESULTS && recommendations.length > 0 && (
        <ResultsPage neighborhoods={recommendations} />
      )}
    </div>
  );
};

export default QuizContainer;
