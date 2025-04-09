import type { VercelRequest, VercelResponse } from '@vercel/node';
import client from './sanityClient.js'; // Note the .js extension

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log('Sitemap function invoked.');

  try {
    // Fetch published blog posts from Sanity.
    const posts: Array<{ slug: string; _updatedAt: string }> = await client.fetch(
      `*[_type == "post"]{ "slug": slug.current, _updatedAt }`
    );
    console.log(`Fetched ${posts.length} posts from Sanity.`);
    
    const baseUrl = 'https://sandiegoneighborhoodmatch.com';
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    
    // Add homepage entry.
    sitemap += `<url>\n`;
    sitemap += `  <loc>${baseUrl}</loc>\n`;
    sitemap += `  <changefreq>daily</changefreq>\n`;
    sitemap += `  <priority>1.0</priority>\n`;
    sitemap += `</url>\n`;
    
    // Add each blog post URL.
    posts.forEach(post => {
      if (!post.slug) return;
      const lastmod = post._updatedAt ? post._updatedAt.substring(0, 10) : '';
      
      sitemap += `<url>\n`;
      sitemap += `  <loc>${baseUrl}/blog/${post.slug}</loc>\n`;
      if (lastmod) {
        sitemap += `  <lastmod>${lastmod}</lastmod>\n`;
      }
      sitemap += `  <changefreq>weekly</changefreq>\n`;
      sitemap += `  <priority>0.8</priority>\n`;
      sitemap += `</url>\n`;
    });
    
    sitemap += `</urlset>`;
    
    res.setHeader('Content-Type', 'text/xml');
    res.status(200).send(sitemap);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).send('Internal Server Error');
  }
}
