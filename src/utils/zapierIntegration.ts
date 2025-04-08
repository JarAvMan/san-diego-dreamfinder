/**
 * Utility to send contact information to Zapier webhook
 */

interface ZapierPayload {
  contactInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  recommendedAreas: string[];
  timestamp: string;
  message?: string; // Optional message for contact form
}

export const sendToZapier = async (
  webhookUrl: string,
  contactInfo: { firstName: string; lastName: string; email: string; phone: string },
  recommendedAreas: string[],
  message?: string // Optional message parameter
): Promise<boolean> => {
  if (!webhookUrl) {
    console.error("No Zapier webhook URL provided");
    return false;
  }

  const payload: ZapierPayload = {
    contactInfo,
    recommendedAreas,
    timestamp: new Date().toISOString(),
  };
  
  // Add message if provided (for contact form)
  if (message) {
    payload.message = message;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors", // Needed for cross-origin requests to Zapier
      body: JSON.stringify(payload),
    });
    
    console.log("Zapier webhook triggered", payload);
    return true;
  } catch (error) {
    console.error("Error triggering Zapier webhook:", error);
    return false;
  }
};