import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'czumqwya', // Replace with your actual Sanity project ID
  dataset: 'production',        // Or your preferred dataset
  useCdn: false,                // false if you need fresh data
  apiVersion: '2025-04-08',       // Use current date or specific API version
});

export default client;
