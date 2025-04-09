import type { VercelRequest, VercelResponse } from '@vercel/node';
import client from '../san-diego-neighborhood-match/sanityClient'; // Adjust the path as necessary

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log("Sitemap function invoked.");

  try {
    console.log("Fetching posts from Sanity...");
    const posts: Array<{ slug: string; _updatedAt: string }> = await client.fetch(
      `*[_type == "post"]{
         "slug": slug.current,
         _updatedAt
       }`
    );
    console.log(`Fetched ${posts.length} posts.`);

    const baseUrl = 'https://sandiegoneighborhoodmatch.com';
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // Add the homepage entry.
    sitemap += `<url>\n`;
    sitemap += `  <loc>${baseUrl}</loc>\n`;
    sitemap += `  <changefreq>daily</changefreq>\n`;
    sitemap += `  <priority>1.0</priority>\n`;
    sitemap += `</url>\n`;

    // Loop through each post and add its URL to the sitemap.
    posts.forEach((post) => {
      if (!post.slug) return; // Skip posts without a valid slug.
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

    // Set the correct header for XML and send the generated sitemap.
    res.setHeader("Content-Type", "text/xml");
    res.status(200).send(sitemap);
    console.log("Sitemap generated successfully.");
  } catch (error) {
    console.error("Error generating sitemap:", error);
    res.status(500).send("Internal Server Error");
  }
}
