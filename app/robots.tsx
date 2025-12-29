import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: [
        '/thank-you',
        '/login',
        '/dashboard',
        '/admin',
        '/api',
      ],
      allow: '/',
    },
  }
}
