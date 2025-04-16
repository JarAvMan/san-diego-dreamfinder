import React, { useState, useEffect } from 'react';
import { QuizQuestion, QuizAnswer, LeadInfo, Neighborhood, QuizStep, LikertOption } from '@/types';
import { quizQuestions } from '@/data/quizQuestions';
import QuizCard from './QuizCard';
import ProgressBar from './ProgressBar';
import LeadForm from './LeadForm';
import ResultsPage from './ResultsPage';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Sparkles, AlertCircle, Loader2 } from 'lucide-react';
import { getTopNeighborhoods } from '@/utils/matchingAlgorithm';
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { sendToZapier } from '@/utils/zapierIntegration';
import { useNavigate } from 'react-router-dom';

const QuizContainer: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<QuizStep>(QuizStep.WELCOME);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [leadInfo, setLeadInfo] = useState<LeadInfo | null>(null);
  const [recommendations, setRecommendations] = useState<Neighborhood[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const totalQuestions = quizQuestions.length;
  
  const ZAPIER_WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/20518038/2eliqxb/";

  const currentAnswer = answers.find(a => a.questionId === currentQuestion?.id)?.value || null;

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setCurrentStep(QuizStep.LEAD_FORM);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    } else {
      setCurrentStep(QuizStep.WELCOME);
    }
  };

  const handleAnswer = (value: LikertOption) => {
    if (!currentQuestion) return;
    
    setAnswers(prev => {
      const existingIndex = prev.findIndex(a => a.questionId === currentQuestion.id);
      if (existingIndex >= 0) {
        const newAnswers = [...prev];
        newAnswers[existingIndex] = {
          questionId: currentQuestion.id,
          value
        };
        return newAnswers;
      } else {
        return [...prev, {
          questionId: currentQuestion.id,
          value
        }];
      }
    });
  };

  const generateResultId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };

  const handleLeadSubmit = async (data: LeadInfo) => {
    setLeadInfo(data);
    setError(null);
    setIsSubmitting(true);

    try {
      const topNeighborhoods = getTopNeighborhoods(answers);
      setRecommendations(topNeighborhoods);

      // Generate a unique result ID
      const resultId = generateResultId();
      
      // Store results in localStorage
      localStorage.setItem(`quiz_results_${resultId}`, JSON.stringify({
        neighborhoods: topNeighborhoods,
        leadInfo: data,
        timestamp: new Date().toISOString()
      }));

      toast({
        title: "Profile Created!",
        description: "Generating your personalized neighborhood matches..."
      });

      // Send data to Zapier using the shared utility
      await sendToZapier(
        data,
        topNeighborhoods.map(n => n.name),
        ZAPIER_WEBHOOK_URL
      );

      // Navigate to results page with the unique ID
      navigate(`/results/${resultId}`);
    } catch (err) {
      console.error('Error processing recommendations:', err);
      setError('There was an error generating your recommendations. Please try again.');
      toast({
        title: "Error",
        description: "There was a problem generating your recommendations. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const startQuiz = () => {
    setCurrentStep(QuizStep.QUESTIONS);
  };

  const resetQuiz = () => {
    setCurrentStep(QuizStep.WELCOME);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setLeadInfo(null);
    setRecommendations([]);
    setError(null);
  };

  const isNextEnabled = currentAnswer !== null;

  if (!currentQuestion && currentStep === QuizStep.QUESTIONS) {
    return (
      <div className="p-8 text-center space-y-4" role="alert">
        <AlertCircle className="h-8 w-8 text-destructive mx-auto" />
        <h3 className="text-xl font-semibold text-destructive">Error</h3>
        <p className="text-muted-foreground">There was a problem loading the quiz questions.</p>
        <Button onClick={resetQuiz}>Return to Start</Button>
      </div>
    );
  }

  return (
    <div className="quiz-container p-4 max-w-4xl mx-auto" role="main">
      {currentStep === QuizStep.WELCOME && (
        <div className="p-8 text-center space-y-8 animate-fade-in bg-card/80 backdrop-blur-sm shadow-sm rounded-2xl border">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-1" /> Personalized Recommendations
          </div>
          
          <h1 className="text-2xl md:text-3xl font-semibold">Find Your Perfect San Diego Neighborhood</h1>
          
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Answer 25 quick questions about your lifestyle and preferences, and our AI will match you with the ideal San Diego neighborhoods for your next home.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-center max-w-lg mx-auto">
            <div className="p-3 bg-muted/50 rounded-lg">
              <p className="font-medium">25 Simple Questions</p>
            </div>
            <div className="p-3 bg-muted/50 rounded-lg">
              <p className="font-medium">5 Minute Quiz</p>
            </div>
            <div className="p-3 bg-muted/50 rounded-lg">
              <p className="font-medium">AI-Powered</p>
            </div>
            <div className="p-3 bg-muted/50 rounded-lg">
              <p className="font-medium">100% Free</p>
            </div>
          </div>
          
          <Button 
            size="lg" 
            onClick={startQuiz} 
            className="mt-2 px-8 py-6 text-lg font-medium group"
            aria-label="Start the neighborhood matching quiz"
          >
            Start Your Match Quiz
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Button>
        </div>
      )}

      {currentStep === QuizStep.QUESTIONS && currentQuestion && (
        <div className="space-y-8 animate-fade-in">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-muted-foreground">
                Question {currentQuestionIndex + 1} of {totalQuestions}
              </span>
              <span className="text-sm font-medium text-primary">
                {Math.round((currentQuestionIndex + 1) / totalQuestions * 100)}% Complete
              </span>
            </div>
            <ProgressBar currentStep={currentQuestionIndex + 1} totalSteps={totalQuestions} />
          </div>
          
          <QuizCard 
            question={currentQuestion} 
            answer={currentAnswer} 
            onAnswer={handleAnswer} 
            isActive={true} 
          />
          
          <div className="flex justify-between pt-6">
            <Button 
              variant="outline" 
              onClick={handlePrevious} 
              className="flex items-center"
              aria-label="Go to previous question"
            >
              <ArrowLeft className="mr-2" size={16} />
              Previous
            </Button>
            
            <Button 
              onClick={handleNext} 
              disabled={!isNextEnabled} 
              className="flex items-center group"
              aria-label={currentQuestionIndex < totalQuestions - 1 ? "Go to next question" : "Complete the quiz"}
            >
              {currentQuestionIndex < totalQuestions - 1 ? (
                <>
                  Next Question
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </>
              ) : (
                <>
                  Complete Quiz
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </>
              )}
            </Button>
          </div>
        </div>
      )}

      {currentStep === QuizStep.LEAD_FORM && (
        <LeadForm 
          onSubmit={handleLeadSubmit} 
          isSubmitting={isSubmitting}
        />
      )}

      {error && (
        <div className="p-4 bg-destructive/10 text-destructive rounded-lg flex items-center space-x-2">
          <AlertCircle className="h-5 w-5" />
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default QuizContainer;
