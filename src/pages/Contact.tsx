import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { sendToZapier } from '@/utils/zapierIntegration';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, X } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: 'First name must be at least 2 characters.'
  }),
  lastName: z.string().min(2, {
    message: 'Last name must be at least 2 characters.'
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.'
  }),
  phone: z.string().min(10, {
    message: 'Please enter a valid phone number.'
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.'
  }),
  consent: z.boolean().refine(val => val === true, {
    message: 'You must agree to receive communications'
  })
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      consent: false
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    console.log('Contact form submitted:', data);

    const webhookUrl = localStorage.getItem('contactFormWebhookUrl') || '';

    try {
      const currentContacts = JSON.parse(localStorage.getItem('storedContactFormSubmissions') || '[]');
      currentContacts.push({
        contact: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone
        },
        message: data.message,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('storedContactFormSubmissions', JSON.stringify(currentContacts));
    } catch (error) {
      console.error('Error storing contact locally:', error);
    }

    let zapierSuccess = false;
    if (webhookUrl) {
      zapierSuccess = await sendToZapier(webhookUrl, {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone
      }, [],
      data.message
      );
    }

    if (webhookUrl && zapierSuccess) {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you shortly."
      });
    } else {
      toast({
        title: "Message Received!",
        description: "Thank you for reaching out. I'll get back to you shortly."
      });
    }

    form.reset();
    setIsSubmitting(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b py-4 px-6">
        <div className="container flex justify-between items-center">
          <div className="font-semibold text-xl tracking-tight">San Diego Neighborhood Matchmaker</div>
          
          {isMobile ? <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="text-muted-foreground p-2 rounded-md hover:bg-muted/50" aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}>
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
              
              {mobileMenuOpen && <nav className="absolute top-16 right-0 left-0 bg-background z-50 border-b shadow-lg">
                  <ul className="flex flex-col p-4">
                    <li className="py-2"><Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
                    <li className="py-2"><Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
                    <li className="py-2"><Link to="/areas" onClick={() => setMobileMenuOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Areas</Link></li>
                    <li className="py-2"><Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-foreground font-medium transition-colors">Contact</Link></li>
                  </ul>
                </nav>}
            </div> : <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
                <li><Link to="/areas" className="text-muted-foreground hover:text-foreground transition-colors">Areas</Link></li>
                <li><Link to="/contact" className="text-foreground font-medium transition-colors">Contact</Link></li>
              </ul>
            </nav>}
        </div>
      </header>
      
      <main className="flex-1 container py-8 px-4 md:py-12 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Contact Me</h1>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have questions about San Diego neighborhoods or ready to start your home search? Reach out, and I'll be happy to assist you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-primary/10 rounded-full text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">(619) 485-9219</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-primary/10 rounded-full text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">jared@jaredharman.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-primary/10 rounded-full text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Office Address</h3>
                    <p className="text-muted-foreground">2900 North Park Way, San Diego, CA 92104</p>
                    <p className="text-muted-foreground">Team MatchPoint brokered by eXp Realty</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 md:mt-0">
              <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="firstName" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your first name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    
                    <FormField control={form.control} name="lastName" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your last name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                  </div>
                  
                  <FormField control={form.control} name="email" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  
                  <FormField control={form.control} name="phone" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  
                  <FormField control={form.control} name="message" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="How can I help you?" className="resize-none min-h-[120px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  
                  <FormField
                    control={form.control}
                    name="consent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I agree to receive marketing emails and occasional texts from Jared Harman, San Diego Realtor. I understand I can unsubscribe at any time.
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Submit'}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center pt-3">
                    Your information is secure and will never be shared. By submitting this form, you agree to our{" "}
                    <Link to="/privacy" target="_blank" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                    {" "}and consent to be contacted by email, phone, or text.
                  </p>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="border-t py-6 px-6 bg-muted/30">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2025 Jared Harman Real Estate. All rights reserved. DRE #02193879</p>
        </div>
      </footer>
    </div>;
};

export default Contact;
