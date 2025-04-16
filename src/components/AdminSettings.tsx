import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface StoredContact {
  contact: {
    name: string;
    email: string;
    phone: string;
  };
  areas: string[];
  timestamp: string;
}

interface StoredContactFormSubmission {
  contact: {
    name: string;
    email: string;
    phone: string;
  };
  message: string;
  timestamp: string;
}

const AdminSettings: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [zapierWebhook, setZapierWebhook] = useState('');
  const [contactFormWebhook, setContactFormWebhook] = useState('');
  const [storedContacts, setStoredContacts] = useState<StoredContact[]>([]);
  const [storedFormSubmissions, setStoredFormSubmissions] = useState<StoredContactFormSubmission[]>([]);
  const [passwordError, setPasswordError] = useState('');
  const [isFirstTimeLogin, setIsFirstTimeLogin] = useState(false);
  const { toast } = useToast();

  // Initialize state from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setZapierWebhook(localStorage.getItem('zapierWebhookUrl') || '');
      setContactFormWebhook(localStorage.getItem('contactFormWebhookUrl') || '');
      
      const adminAuth = localStorage.getItem('adminAuth');
      if (adminAuth) {
        try {
          const authData = JSON.parse(adminAuth);
          if (new Date(authData.expiry) > new Date()) {
            setIsAuthenticated(true);
          } else {
            localStorage.removeItem('adminAuth');
          }
        } catch (error) {
          console.error('Error parsing admin auth:', error);
          localStorage.removeItem('adminAuth');
        }
      }

      setIsFirstTimeLogin(!localStorage.getItem('adminPasswordHash'));
    }
  }, []);

  // Save settings when webhook URLs change
  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem('zapierWebhookUrl', zapierWebhook);
      localStorage.setItem('contactFormWebhookUrl', contactFormWebhook);
    }
  }, [zapierWebhook, contactFormWebhook, isAuthenticated]);

  // Load stored contacts and form submissions
  useEffect(() => {
    const loadData = () => {
      if (typeof window === 'undefined') return;

      try {
        const contacts = JSON.parse(localStorage.getItem('storedContacts') || '[]');
        setStoredContacts(contacts);
        
        const formSubmissions = JSON.parse(localStorage.getItem('storedContactFormSubmissions') || '[]');
        setStoredFormSubmissions(formSubmissions);
      } catch (error) {
        console.error('Error loading stored data:', error);
        setStoredContacts([]);
        setStoredFormSubmissions([]);
      }
    };

    if (isOpen && isAuthenticated) {
      loadData();
    }
  }, [isOpen, isAuthenticated]);

  // Listen for keyboard shortcut (Alt+Shift+A)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.shiftKey && e.key === 'A') {
        setIsOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const saveSettings = () => {
    if (typeof window === 'undefined') return;

    localStorage.setItem('zapierWebhookUrl', zapierWebhook);
    localStorage.setItem('contactFormWebhookUrl', contactFormWebhook);
    localStorage.setItem('isAdmin', 'true');
    toast({
      title: "Settings Saved",
      description: "Your webhook URLs have been updated.",
    });
    setIsOpen(false);
  };

  const handleLogin = () => {
    if (typeof window === 'undefined') return;

    // Check if a password is already set
    const savedPasswordHash = localStorage.getItem('adminPasswordHash');
    
    if (!savedPasswordHash) {
      // First time setup - save this password
      const passwordHash = btoa(password); // Simple base64 encoding (not secure for production)
      localStorage.setItem('adminPasswordHash', passwordHash);
      setAuthenticated();
      toast({
        title: "Password Set",
        description: "Your admin password has been saved. Remember it for future access.",
      });
    } else {
      // Verify password
      const passwordHash = btoa(password);
      if (passwordHash === savedPasswordHash) {
        setAuthenticated();
        setPasswordError('');
      } else {
        setPasswordError('Incorrect password. Please try again.');
      }
    }
  };

  const setAuthenticated = () => {
    if (typeof window === 'undefined') return;

    // Set authentication with 24-hour expiry
    const expiry = new Date();
    expiry.setHours(expiry.getHours() + 24);
    
    localStorage.setItem('adminAuth', JSON.stringify({
      authenticated: true,
      expiry: expiry.toISOString()
    }));
    
    setIsAuthenticated(true);
  };

  const handlePasswordKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  const exportQuizContacts = () => {
    if (typeof window === 'undefined') return;

    const csvContent = [
      // CSV Header
      ['Name', 'Email', 'Phone', 'Recommended Areas', 'Timestamp'].join(','),
      // CSV Rows
      ...storedContacts.map(item => [
        `"${item.contact.name}"`,
        `"${item.contact.email}"`,
        `"${item.contact.phone}"`,
        `"${item.areas.join(', ')}"`,
        `"${new Date(item.timestamp).toLocaleString()}"`
      ].join(','))
    ].join('\n');

    downloadCSV(csvContent, `neighborhood-quiz-leads-${new Date().toISOString().slice(0, 10)}.csv`);
  };
  
  const exportFormSubmissions = () => {
    if (typeof window === 'undefined') return;

    const csvContent = [
      // CSV Header
      ['Name', 'Email', 'Phone', 'Message', 'Timestamp'].join(','),
      // CSV Rows
      ...storedFormSubmissions.map(item => [
        `"${item.contact.name}"`,
        `"${item.contact.email}"`,
        `"${item.contact.phone}"`,
        `"${item.message.replace(/"/g, '""')}"`,
        `"${new Date(item.timestamp).toLocaleString()}"`
      ].join(','))
    ].join('\n');

    downloadCSV(csvContent, `contact-form-submissions-${new Date().toISOString().slice(0, 10)}.csv`);
  };
  
  const downloadCSV = (content: string, filename: string) => {
    if (typeof window === 'undefined') return;

    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const clearQuizContacts = () => {
    if (typeof window === 'undefined') return;

    if (confirm('Are you sure you want to clear all stored quiz contacts? This cannot be undone.')) {
      localStorage.removeItem('storedContacts');
      setStoredContacts([]);
      toast({
        title: "Quiz Contacts Cleared",
        description: "All locally stored quiz leads have been removed.",
      });
    }
  };
  
  const clearFormSubmissions = () => {
    if (typeof window === 'undefined') return;

    if (confirm('Are you sure you want to clear all stored contact form submissions? This cannot be undone.')) {
      localStorage.removeItem('storedContactFormSubmissions');
      setStoredFormSubmissions([]);
      toast({
        title: "Form Submissions Cleared",
        description: "All locally stored contact form submissions have been removed.",
      });
    }
  };

  const resetPassword = () => {
    if (typeof window === 'undefined') return;

    if (confirm('Are you sure you want to reset your admin password? You will need to set a new one.')) {
      localStorage.removeItem('adminPasswordHash');
      localStorage.removeItem('adminAuth');
      setIsAuthenticated(false);
      setIsFirstTimeLogin(true);
      toast({
        title: "Password Reset",
        description: "Your admin password has been reset.",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        {!isAuthenticated ? (
          <>
            <DialogHeader>
              <DialogTitle>Admin Login</DialogTitle>
              <DialogDescription>
                Enter your admin password to access settings.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={handlePasswordKeyDown}
                />
                {passwordError && (
                  <p className="text-sm text-destructive">{passwordError}</p>
                )}
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleLogin}>Login</Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Admin Settings</DialogTitle>
              <DialogDescription>
                Configure your Zapier integrations and manage stored contacts.
                <br /><small className="text-muted-foreground">Access this panel anytime with Alt+Shift+A</small>
              </DialogDescription>
            </DialogHeader>
            
            <Tabs defaultValue="webhooks" className="w-full">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
                <TabsTrigger value="data">Stored Data</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>
              
              <TabsContent value="webhooks">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="quiz-webhook">Quiz Webhook URL</Label>
                    <Input
                      id="quiz-webhook"
                      placeholder="https://hooks.zapier.com/hooks/catch/..."
                      value={zapierWebhook}
                      onChange={(e) => setZapierWebhook(e.target.value)}
                    />
                    <p className="text-sm text-muted-foreground">
                      This webhook will receive contact info and matched neighborhoods from the quiz.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contact-form-webhook">Contact Form Webhook URL</Label>
                    <Input
                      id="contact-form-webhook"
                      placeholder="https://hooks.zapier.com/hooks/catch/..."
                      value={contactFormWebhook}
                      onChange={(e) => setContactFormWebhook(e.target.value)}
                    />
                    <p className="text-sm text-muted-foreground">
                      This webhook will receive submissions from the contact form.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="data" className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Quiz Contacts ({storedContacts.length})</h3>
                  {storedContacts.length > 0 ? (
                    <div className="border rounded-md max-h-60 overflow-y-auto">
                      <div className="p-4 space-y-4">
                        {storedContacts.map((contact, index) => (
                          <div key={index} className="p-3 border-b last:border-0">
                            <div className="font-medium">{contact.contact.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {contact.contact.email} | {contact.contact.phone}
                            </div>
                            <div className="text-sm mt-1">
                              <span className="font-medium">Areas:</span> {contact.areas.join(', ')}
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              {new Date(contact.timestamp).toLocaleString()}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">No stored quiz contacts yet.</p>
                  )}
                  
                  <div className="flex space-x-2 mt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={exportQuizContacts}
                      disabled={storedContacts.length === 0}
                    >
                      Export CSV
                    </Button>
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={clearQuizContacts}
                      disabled={storedContacts.length === 0}
                    >
                      Clear All
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Form Submissions ({storedFormSubmissions.length})</h3>
                  {storedFormSubmissions.length > 0 ? (
                    <div className="border rounded-md max-h-60 overflow-y-auto">
                      <div className="p-4 space-y-4">
                        {storedFormSubmissions.map((submission, index) => (
                          <div key={index} className="p-3 border-b last:border-0">
                            <div className="font-medium">{submission.contact.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {submission.contact.email} | {submission.contact.phone}
                            </div>
                            <div className="text-sm mt-1">
                              <span className="font-medium">Message:</span> {submission.message.length > 100 ? 
                                submission.message.substring(0, 100) + '...' : submission.message}
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              {new Date(submission.timestamp).toLocaleString()}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">No stored form submissions yet.</p>
                  )}
                  
                  <div className="flex space-x-2 mt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={exportFormSubmissions}
                      disabled={storedFormSubmissions.length === 0}
                    >
                      Export CSV
                    </Button>
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={clearFormSubmissions}
                      disabled={storedFormSubmissions.length === 0}
                    >
                      Clear All
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="security" className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Admin Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Manage your admin authentication settings.
                  </p>
                  
                  <div className="mt-4">
                    <Button 
                      variant="outline" 
                      onClick={resetPassword}
                    >
                      Reset Admin Password
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2">
                      You'll need to set a new password after resetting.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <DialogFooter>
              <Button onClick={saveSettings}>Save Settings</Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AdminSettings;
