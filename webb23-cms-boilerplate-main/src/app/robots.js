export default function Robots() {
  const sitemapUrl = 'https://yourdomain.com/sitemap.xml'; // Replace with your actual sitemap URL

  return `
      User-agent: *
      Allow: /
      Disallow: /private/
      Sitemap: ${sitemapUrl}
  `.trim();
}
