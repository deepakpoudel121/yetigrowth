export default function sitemap() {
  const baseUrl = 'https://yetigrowth.com' // Replace with your actual domain
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Add more pages as needed
  ]
}