import { LeadInfo } from './index';

export interface WebhookPayload {
  contact: {
    firstName: string;
    lastName: string;
    email: string;
    marketingConsent: boolean;
  };
  recommendations: {
    neighborhoods: string[];
    timestamp: string;
  };
  source: string;
  metadata?: Record<string, unknown>;
}

export interface WebhookConfig {
  url: string;
  enabled: boolean;
  retryCount: number;
  timeout: number;
}

export interface WebhookResponse {
  success: boolean;
  status: number;
  message: string;
  data?: unknown;
}

export interface WebhookError extends Error {
  status?: number;
  response?: Response;
} 