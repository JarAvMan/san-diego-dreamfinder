
import { LeadInfo } from '@/types';

/**
 * Send lead information to a Zapier webhook
 * 
 * @param webhookUrl - The Zapier webhook URL
 * @param leadInfo - User information collected from the lead form
 * @param recommendedNeighborhoods - Array of neighborhood names
 * @param additionalData - Optional additional data to send
 * @returns Boolean indicating if the send was successful
 */
export const sendToZapier = async (
  webhookUrl: string, 
  leadInfo: LeadInfo, 
  recommendedNeighborhoods: string[],
  additionalData?: string
): Promise<boolean> => {
  try {
    if (!webhookUrl) {
      console.error('No Zapier webhook URL provided');
      return false;
    }

    // Prepare the data for Zapier
    const payload = {
      firstName: leadInfo.firstName,
      lastName: leadInfo.lastName,
      email: leadInfo.email,
      phone: leadInfo.phone,
      neighborhoods: recommendedNeighborhoods.join(', '),
      date: new Date().toISOString(),
      additionalData: additionalData || ''
    };

    // Send the data to Zapier webhook
    const response = await fetch(webhookUrl, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to send data to Zapier: ${response.statusText}`);
    }

    console.log('Successfully sent lead to Zapier');
    return true;
  } catch (error) {
    console.error('Error sending data to Zapier:', error);
    return false;
  }
};
