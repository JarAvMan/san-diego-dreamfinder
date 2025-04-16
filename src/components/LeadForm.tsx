
import React, { useState } from 'react';
import { LeadInfo } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface LeadFormProps {
  onSubmit: (leadInfo: LeadInfo) => void;
  className?: string;
}

const LeadForm: React.FC<LeadFormProps> = ({ onSubmit, className }) => {
  const [formData, setFormData] = useState<LeadInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '' // Keeping this in the type but not showing the field
  });
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit({
        ...formData,
        phone: '' // Send empty string for phone
      });
    }
  };

  return (
    <div className={cn("p-8 rounded-2xl border bg-card/80 backdrop-blur-sm shadow-sm animate-fade-in", className)}>
      <h2 className="text-2xl font-semibold mb-2">One Last Step!</h2>
      <p className="text-muted-foreground mb-6">
        We ask for your email so we can send you your personalized neighborhood match results.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <FormControl>
              <Input
                id="firstName"
                name="firstName"
                placeholder="Your first name"
                value={formData.firstName}
                onChange={handleChange}
                className={errors.firstName ? "border-destructive" : ""}
              />
            </FormControl>
            {errors.firstName && (
              <p className="text-destructive text-sm">{errors.firstName}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <FormControl>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Your last name"
                value={formData.lastName}
                onChange={handleChange}
                className={errors.lastName ? "border-destructive" : ""}
              />
            </FormControl>
            {errors.lastName && (
              <p className="text-destructive text-sm">{errors.lastName}</p>
            )}
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <FormControl>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "border-destructive" : ""}
            />
          </FormControl>
          {errors.email && (
            <p className="text-destructive text-sm">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-start space-x-2">
            <Checkbox
              id="consent"
              checked={consent}
              onCheckedChange={(checked) => setConsent(checked as boolean)}
              className="mt-1"
            />
            <div className="space-y-1 leading-none">
              <Label htmlFor="consent" className="text-sm leading-tight">
                I'd like to receive marketing emails and occasional texts from Jared Harman, San Diego Realtor (optional).
              </Label>
            </div>
          </div>
        </div>
        
        <div className="pt-4">
          <Button 
            type="submit" 
            className="w-full py-6 text-base font-medium"
          >
            Find My Perfect Neighborhoods
          </Button>
        </div>
        
        <p className="text-xs text-muted-foreground text-center pt-3">
          Your information is secure and will never be shared. View our{" "}
          <Link to="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LeadForm;
