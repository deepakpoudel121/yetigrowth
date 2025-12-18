export default function sitemap() {
  return [
    {
      url: 'https://yetigrowth.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.yetigrowth.com/blog/web-development-trends-2025',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Add all your pages
  ]
}