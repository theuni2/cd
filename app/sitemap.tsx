// import { MetadataRoute } from 'next';

// export default function sitemap(): MetadataRoute.Sitemap {
//   const baseUrl = "https://www.thecareerdiscovery.com";

//   return [
//     {
//       url: `${baseUrl}/`,
//       lastModified: new Date(),
//       changeFrequency: 'weekly',
//       priority: 1.0,
//     },
//     {
//       url: `${baseUrl}/claimit`,
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.8,
//     },
//     {
//       url: `${baseUrl}/cookies`,
//       lastModified: new Date(),
//       changeFrequency: 'yearly',
//       priority: 0.5,
//     },
//     {
//       url: `${baseUrl}/internship`,
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.7,
//     },
//     {
//       url: `${baseUrl}/launchpad`,
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/privacy`,
//       lastModified: new Date(),
//       changeFrequency: 'yearly',
//       priority: 0.5,
//     },
//     {
//       url: `${baseUrl}/research`,
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.7,
//     },
//     {
//       url: `${baseUrl}/terms`,
//       lastModified: new Date(),
//       changeFrequency: 'yearly',
//       priority: 0.5,
//     },
//     {
//       url: `${baseUrl}/thank-you`,
//       lastModified: new Date(),
//       changeFrequency: 'yearly',
//       priority: 0.3,
//     }
//   ];
// }


import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.thecareerdiscovery.com';
  const lastModified = new Date();

  const pages = [
    '/',
    '/research',
    '/internship',
    '/launchpad',
    '/blogs',
    '/claimit',

    // Launchpad
    '/podcast',
    '/startup',
    '/service_project',

    // Claim It
    '/essay_comp',

    // Dubai Programs
    '/dubai-research-bootcamp-for-high-school',
    '/dubai-student-university-prep-research',
    '/professor-sessionsfor-dubai-students',
    '/dubai-high-school-internship-placement',
    '/dubai-internship-training-for-teenagers',
    '/uae-corporate-internships-for-teens',

    // India Programs
    '/india-high-schoolers-internship-program',
    '/india-high-school-research-coaching',
    '/research-mentors-students-india',
    '/corporate-internship-india-teens',

    // Legal
    '/privacy',
    '/terms',
    '/cookies',
  ];

  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority:
      path === '/'
        ? 1.0
        : path.includes('dubai') || path.includes('india')
        ? 0.9
        : 0.7,
  }));
}
