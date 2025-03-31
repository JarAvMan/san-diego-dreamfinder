
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
  DialogTabs,
  DialogTab
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
  const [zapierWebhook, setZapierWebhook] = useState(localStorage.getItem('zapierWebhookUrl') || '');
  const [contactFormWebhook, setContactFormWebhook] = useState(localStorage.getItem('contactFormWebhookUrl') || '');
  const [storedContacts, setStoredContacts] = useState<StoredContact[]>([]);
  const [storedFormSubmissions, setStoredFormSubmissions] = useState<StoredContactFormSubmission[]>([]);
  const { toast } = useToast();

  // Load stored contacts and form submissions
  useEffect(() => {
    const loadData = () => {
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

    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

  // Listen for keyboard shortcut (Alt+Shift+A)
  useEffect(() => {
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
    localStorage.setItem('zapierWebhookUrl', zapierWebhook);
    localStorage.setItem('contactFormWebhookUrl', contactFormWebhook);
    localStorage.setItem('isAdmin', 'true');
    toast({
      title: "Settings Saved",
      description: "Your webhook URLs have been updated.",
    });
    setIsOpen(false);
  };

  const exportQuizContacts = () => {
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
    if (confirm('Are you sure you want to clear all stored contact form submissions? This cannot be undone.')) {
      localStorage.removeItem('storedContactFormSubmissions');
      setStoredFormSubmissions([]);
      toast({
        title: "Form Submissions Cleared",
        description: "All locally stored contact form submissions have been removed.",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Admin Settings</DialogTitle>
          <DialogDescription>
            Configure your Zapier integrations and manage stored contacts.
            <br /><small className="text-muted-foreground">Access this panel anytime with Alt+Shift+A</small>
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="webhooks" className="w-full">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
            <TabsTrigger value="data">Stored Data</TabsTrigger>
          </TabsList>
          
          <TabsContent value="webhooks" className="space-y-4">
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
        </Tabs>
        
        <DialogFooter>
          <Button onClick={saveSettings}>Save Settings</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AdminSettings;
