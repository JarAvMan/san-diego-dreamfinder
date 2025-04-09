import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'czumqwya',
  dataset: 'production', // Or your chosen dataset
  useCdn: false,         // `true` if you want cached data; `false` ensures the latest
  apiVersion: '2025-04-08' // or today's date
});

export default client;
