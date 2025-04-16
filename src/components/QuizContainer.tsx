import React, { useState, useEffect } from 'react';
import { QuizQuestion, QuizAnswer, LeadInfo, Neighborhood, QuizStep, LikertOption } from '@/types';
import { quizQuestions } from '@/data/quizQuestions';
import QuizCard from './QuizCard';
import ProgressBar from './ProgressBar';
import LeadForm from './LeadForm';
import ResultsPage from './ResultsPage';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { getTopNeighborhoods } from '@/utils/matchingAlgorithm';
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const QuizContainer: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<QuizStep>(QuizStep.WELCOME);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [leadInfo, setLeadInfo] = useState<LeadInfo | null>(null);
  const [recommendations, setRecommendations] = useState<Neighborhood[]>([]);

  const {
    toast
  } = useToast();

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

  const handleLeadSubmit = (data: LeadInfo) => {
    setLeadInfo(data);

    const topNeighborhoods = getTopNeighborhoods(answers);
    setRecommendations(topNeighborhoods);

    toast({
      title: "Profile Created!",
      description: "Generating your personalized neighborhood matches..."
    });

    // Send data to Zapier
    fetch(ZAPIER_WEBHOOK_URL, {
      method: 'POST',
      body: JSON.stringify({
        ...data,
        answers,
        neighborhoods: topNeighborhoods.map(n => n.name).join(', '),
        date: new Date().toISOString()
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).catch(error => {
      console.error('Error sending data to Zapier:', error);
    });

    setTimeout(() => {
      setCurrentStep(QuizStep.RESULTS);
    }, 1500);
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
  };

  const isNextEnabled = currentAnswer !== null;

  return <div className="quiz-container p-4 max-w-4xl mx-auto">
      {currentStep === QuizStep.WELCOME && <div className="p-8 text-center space-y-8 animate-fade-in bg-card/80 backdrop-blur-sm shadow-sm rounded-2xl border">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-1" /> Personalized Recommendations
          </div>
          
          <h3 className="text-2xl md:text-3xl font-semibold">Find Your Perfect San Diego Neighborhood</h3>
          
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
          
          <Button size="lg" onClick={startQuiz} className="mt-2 px-8 py-6 text-lg font-medium group">
            Start Your Match Quiz
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Button>
        </div>}

      {currentStep === QuizStep.QUESTIONS && <div className="space-y-8 animate-fade-in">
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
          
          <QuizCard question={currentQuestion} answer={currentAnswer} onAnswer={handleAnswer} isActive={true} />
          
          <div className="flex justify-between pt-6">
            <Button variant="outline" onClick={handlePrevious} className="flex items-center">
              <ArrowLeft className="mr-2" size={16} />
              Previous
            </Button>
            
            <Button onClick={handleNext} disabled={!isNextEnabled} className="flex items-center group">
              {currentQuestionIndex < totalQuestions - 1 ? <>
                  Next Question
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </> : <>
                  Complete Quiz
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </>}
            </Button>
          </div>
        </div>}

      {currentStep === QuizStep.LEAD_FORM && <LeadForm onSubmit={handleLeadSubmit} />}

      {currentStep === QuizStep.RESULTS && recommendations.length > 0 && <ResultsPage neighborhoods={recommendations} leadInfo={leadInfo || undefined} />}
    </div>;
};

export default QuizContainer;
