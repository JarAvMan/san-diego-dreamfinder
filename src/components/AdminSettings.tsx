
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
  DialogTitle 
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface StoredContact {
  contact: {
    name: string;
    email: string;
    phone: string;
  };
  areas: string[];
  timestamp: string;
}

const AdminSettings: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [zapierWebhook, setZapierWebhook] = useState(localStorage.getItem('zapierWebhookUrl') || '');
  const [storedContacts, setStoredContacts] = useState<StoredContact[]>([]);
  const { toast } = useToast();

  // Load stored contacts
  useEffect(() => {
    const loadContacts = () => {
      try {
        const contacts = JSON.parse(localStorage.getItem('storedContacts') || '[]');
        setStoredContacts(contacts);
      } catch (error) {
        console.error('Error loading stored contacts:', error);
        setStoredContacts([]);
      }
    };

    if (isOpen) {
      loadContacts();
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
    localStorage.setItem('isAdmin', 'true');
    toast({
      title: "Settings Saved",
      description: "Your Zapier webhook URL has been updated.",
    });
    setIsOpen(false);
  };

  const exportContacts = () => {
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

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `neighborhood-quiz-leads-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const clearContacts = () => {
    if (confirm('Are you sure you want to clear all stored contacts? This cannot be undone.')) {
      localStorage.removeItem('storedContacts');
      setStoredContacts([]);
      toast({
        title: "Contacts Cleared",
        description: "All locally stored contacts have been removed.",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Admin Settings</DialogTitle>
          <DialogDescription>
            Configure your Zapier integration and manage stored contacts.
            <br /><small className="text-muted-foreground">Access this panel anytime with Alt+Shift+A</small>
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="zapier-url">Zapier Webhook URL</Label>
            <Input
              id="zapier-url"
              placeholder="https://hooks.zapier.com/hooks/catch/..."
              value={zapierWebhook}
              onChange={(e) => setZapierWebhook(e.target.value)}
            />
            <p className="text-sm text-muted-foreground">
              This webhook will receive contact info and matched neighborhoods for your CRM.
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Stored Contacts ({storedContacts.length})</h3>
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
              <p className="text-sm text-muted-foreground">No stored contacts yet.</p>
            )}
            
            <div className="flex space-x-2 mt-4">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={exportContacts}
                disabled={storedContacts.length === 0}
              >
                Export CSV
              </Button>
              <Button 
                variant="destructive" 
                size="sm"
                onClick={clearContacts}
                disabled={storedContacts.length === 0}
              >
                Clear All
              </Button>
            </div>
          </div>
        </div>
        
        <DialogFooter>
          <Button onClick={saveSettings}>Save Settings</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AdminSettings;
