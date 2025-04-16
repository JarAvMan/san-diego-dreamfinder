import { WebhookPayload, WebhookConfig, WebhookResponse, WebhookError } from '@/types/webhook';
import { LeadInfo } from '@/types';

const DEFAULT_CONFIG: WebhookConfig = {
  url: '',
  enabled: true,
  retryCount: 3,
  timeout: 5000, // 5 seconds
};

class WebhookService {
  private config: WebhookConfig;

  constructor(config: Partial<WebhookConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
  }

  private async fetchWithTimeout(url: string, options: RequestInit): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.config.timeout);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  private async retry<T>(fn: () => Promise<T>, retries: number): Promise<T> {
    try {
      return await fn();
    } catch (error) {
      if (retries > 0) {
        console.warn(`Webhook request failed, retrying (${retries} attempts remaining)...`);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second before retry
        return this.retry(fn, retries - 1);
      }
      throw error;
    }
  }

  private async sendRequest(payload: WebhookPayload): Promise<WebhookResponse> {
    if (!this.config.enabled || !this.config.url) {
      throw new Error('Webhook is not configured or disabled');
    }

    const response = await this.fetchWithTimeout(this.config.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error: WebhookError = new Error(`Webhook request failed with status ${response.status}`);
      error.status = response.status;
      error.response = response;
      throw error;
    }

    const data = await response.json();
    return {
      success: true,
      status: response.status,
      message: 'Webhook request successful',
      data,
    };
  }

  public async sendLeadData(leadInfo: LeadInfo, neighborhoods: string[]): Promise<WebhookResponse> {
    const payload: WebhookPayload = {
      contact: {
        firstName: leadInfo.firstName,
        lastName: leadInfo.lastName,
        email: leadInfo.email,
        marketingConsent: leadInfo.marketingConsent,
      },
      recommendations: {
        neighborhoods,
        timestamp: new Date().toISOString(),
      },
      source: 'neighborhood_quiz',
      metadata: {
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
      },
    };

    try {
      return await this.retry(() => this.sendRequest(payload), this.config.retryCount);
    } catch (error) {
      console.error('Failed to send webhook data:', error);
      return {
        success: false,
        status: (error as WebhookError).status || 500,
        message: (error as Error).message,
      };
    }
  }

  public updateConfig(newConfig: Partial<WebhookConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }
}

// Create a singleton instance
const webhookService = new WebhookService();

export default webhookService; 