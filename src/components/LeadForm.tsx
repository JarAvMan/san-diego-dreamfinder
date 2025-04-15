
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
    phone: ''
  });
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
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
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!consent) {
      newErrors.consent = 'Please agree to receive communications';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className={cn("p-8 rounded-2xl border bg-card/80 backdrop-blur-sm shadow-sm animate-fade-in", className)}>
      <h2 className="text-2xl font-semibold mb-2">One Last Step!</h2>
      <p className="text-muted-foreground mb-6">
        Enter your details to see your personalized San Diego neighborhood recommendations
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="Your first name"
              value={formData.firstName}
              onChange={handleChange}
              className={errors.firstName ? "border-destructive" : ""}
            />
            {errors.firstName && (
              <p className="text-destructive text-sm">{errors.firstName}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Your last name"
              value={formData.lastName}
              onChange={handleChange}
              className={errors.lastName ? "border-destructive" : ""}
            />
            {errors.lastName && (
              <p className="text-destructive text-sm">{errors.lastName}</p>
            )}
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && (
            <p className="text-destructive text-sm">{errors.email}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="(555) 555-5555"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? "border-destructive" : ""}
          />
          {errors.phone && (
            <p className="text-destructive text-sm">{errors.phone}</p>
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
            <Label htmlFor="consent" className="text-sm leading-tight">
              I agree to receive marketing emails and occasional texts from Jared Harman, San Diego Realtor. I understand I can unsubscribe at any time.
            </Label>
          </div>
          {errors.consent && (
            <p className="text-destructive text-sm">{errors.consent}</p>
          )}
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
          Your information is secure and will never be shared. By submitting this form, you agree to our{" "}
          <Link to="/privacy" target="_blank" className="text-primary hover:underline">Privacy Policy</Link>
          {" "}and consent to be contacted by email, phone, or text.
        </p>
      </form>
    </div>
  );
};

export default LeadForm;
