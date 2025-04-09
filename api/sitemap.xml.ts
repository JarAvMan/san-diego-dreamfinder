import { VercelRequest, VercelResponse } from '@vercel/node';
import client from '/workspaces/san-diego-dreamfinder/src/sanityClient.ts'; // Adjust the path to your Sanity client file

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // Fetch published blog posts from Sanity.
    // This query assumes your blog posts are of _type "post" and have a slug.
    const posts = await client.fetch(
      `*[_type == "post"]{ 
        "slug": slug.current, 
        _updatedAt 
      }`
    );
    
    const baseUrl = 'https://sandiegoneighborhoodmatch.com';
    
    // Begin building the XML string.
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    
    // Add homepage entry.
    sitemap += `<url>
      <loc>${baseUrl}</loc>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>\n`;
    
    // Loop through the blog posts and add them to the sitemap.
    posts.forEach((post: { slug: string; _updatedAt: string }) => {
      sitemap += `<url>
        <loc>${baseUrl}/blog/${post.slug}</loc>
        <lastmod>${post._updatedAt.substring(0, 10)}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>\n`;
    });
    
    sitemap += `</urlset>`;
    
    // Set the appropriate content type and send the XML.
    res.setHeader("Content-Type", "text/xml");
    res.status(200).send(sitemap);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).send('Internal Server Error');
  }
}
