import type { VercelRequest, VercelResponse } from '@vercel/node';
import client from '../san-diego-neighborhood-match/sanityClient';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // Fetch published blog posts from Sanity.
    // Adjust the query if your document type is different (e.g. "post" may vary).
    const posts: Array<{ slug: string; _updatedAt: string }> = await client.fetch(
      `*[_type == "post"]{ "slug": slug.current, _updatedAt }`
    );

    const baseUrl = 'https://sandiegoneighborhoodmatch.com';
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // Add the homepage entry.
    sitemap += `<url>\n`;
    sitemap += `  <loc>${baseUrl}</loc>\n`;
    sitemap += `  <changefreq>daily</changefreq>\n`;
    sitemap += `  <priority>1.0</priority>\n`;
    sitemap += `</url>\n`;

    // Loop through blog posts and add each to the sitemap.
    posts.forEach((post) => {
      // Only add posts with a valid slug.
      if (!post.slug) return;
      const lastmod = post._updatedAt ? post._updatedAt.substring(0, 10) : '';
      
      sitemap += `<url>\n`;
      sitemap += `  <loc>${baseUrl}/blog/${post.slug}</loc>\n`;
      sitemap += `  <lastmod>${lastmod}</lastmod>\n`;
      sitemap += `  <changefreq>weekly</changefreq>\n`;
      sitemap += `  <priority>0.8</priority>\n`;
      sitemap += `</url>\n`;
    });

    sitemap += `</urlset>`;

    // Set the correct content type for XML and send the sitemap.
    res.setHeader('Content-Type', 'text/xml');
    res.status(200).send(sitemap);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).send('Internal Server Error');
  }
}
