
import { LeadInfo, Neighborhood } from "@/types";

export const sendToZapier = async (leadInfo: LeadInfo, recommendations: Neighborhood[]) => {
  try {
    const webhookUrl = localStorage.getItem('zapierWebhookUrl');
    
    if (!webhookUrl) {
      console.log('Zapier webhook URL not configured');
      return false;
    }
    
    // Format data for Zapier
    const payload = {
      firstName: leadInfo.firstName,
      lastName: leadInfo.lastName,
      email: leadInfo.email,
      phone: leadInfo.phone,
      topNeighborhood: recommendations[0]?.name || 'No match',
      allNeighborhoods: recommendations.map(n => n.name).join(', '),
      matchScores: recommendations.map(n => `${n.name}: ${n.matchScore}%`).join('; '),
      timestamp: new Date().toISOString()
    };
    
    // Send data to Zapier webhook
    const response = await fetch(webhookUrl, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      console.log('Successfully sent data to Zapier');
      return true;
    } else {
      console.error('Failed to send data to Zapier:', response.statusText);
      return false;
    }
  } catch (error) {
    console.error('Error sending data to Zapier:', error);
    return false;
  }
};
