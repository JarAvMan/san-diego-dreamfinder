import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'YOUR_PROJECT_ID',
  dataset: 'production', // Or your chosen dataset
  useCdn: false,         // `true` if you want cached data; `false` ensures the latest
  apiVersion: '2023-08-29' // or today's date
});

export default client;
