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


// import { MetadataRoute } from 'next';

// export default function sitemap(): MetadataRoute.Sitemap {
//   const baseUrl = 'https://www.thecareerdiscovery.com';
//   const lastModified = new Date();

//   const pages = [
//     '/',
//     '/research',
//     '/internship',
//     '/launchpad',
//     '/blogs',
//     '/claimit',

//     // Launchpad
//     '/podcast',
//     '/startup',
//     '/service_project',

//     // Claim It
//     '/essay_comp',

// //blogs_pge
// '/blogs/stem-vs-non-stem-how-to-decide',
// '/blogs/why-mentorship-is-the-fastest-way-to-succeed-as-a-student',
// "/blogs/research-mentors-global-admissions",
// "/blogs/benefits-of-research-coaching-for-indian-high-schoolers",
// "/blogs/how-to-discover-your-ideal-career-path-before-college",

//     // Dubai Programs
//     '/dubai-research-bootcamp-for-high-school',
//     '/dubai-student-university-prep-research',
//     '/professor-sessionsfor-dubai-students',
//     '/dubai-high-school-internship-placement',
//     '/dubai-internship-training-for-teenagers',
//     '/uae-corporate-internships-for-teens',

//     // India Programs
//     '/india-high-schoolers-internship-program',
//     '/india-high-school-research-coaching',
//     '/research-mentors-students-india',
//     '/corporate-internship-india-teens',

//     // Legal
//     '/privacy',
//     '/terms',
//     '/cookies',
//   ];

//   return pages.map((path) => ({
//     url: `${baseUrl}${path}`,
//     lastModified,
//     changeFrequency: path === '/' ? 'weekly' : 'monthly',
//     priority:
//       path === '/'
//         ? 1.0
//         : path.includes('dubai') || path.includes('india')
//         ? 0.9
//         : 0.7,
//   }));
// }



import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.thecareerdiscovery.com';
  const lastModified = new Date();

  // 👇 REPLACE THIS ENTIRE ARRAY
const pages = [
  // Home
  '/',

  // Main Pages
  '/research',
  '/internship',
  '/launchpad',
  '/blogs',
  '/claimit',

  // LaunchPad
  '/podcast',
  '/startup',
  '/service_project',

  // ClaimIt
  '/essay_comp',

  // Competition Pages
  '/solve_challenge',
  '/solve_eg',
  '/writing_competition',
  '/forge_writing_competition',
  '/novus_comp',
  '/pitch_competition',

  // Student Projects
  '/tech-project',
  '/community_service',
  '/climate_project',
  '/sports_launchpad',
  '/tedx',
  '/workshop',
  '/youth_edu',
  '/youth_study',

  // India Programs
  '/india',
  '/india-high-school-research-coaching',
  '/india-high-schoolers-internship-program',
  '/research-mentors-students-india',
  '/india/research-mentors-students-india',
  '/corporate-internship-india-teens',

  // Dubai / UAE Programs
  '/dubai-research-bootcamp-for-high-school',
  '/dubai-student-university-prep-research',
  '/professor-sessionsfor-dubai-students',
  '/dubai-high-school-internship-placement',
  '/dubai-internship-training-for-teenagers',
  '/uae-corporate-internships-for-teens',

  // Blog Pages
  '/blogs/stem-vs-non-stem-how-to-decide',
  '/blogs/why-mentorship-is-the-fastest-way-to-succeed-as-a-student',
  '/blogs/research-mentors-global-admissions',
  '/blogs/benefits-of-research-coaching-for-indian-high-schoolers',
  '/blogs/how-to-discover-your-ideal-career-path-before-college',
  '/blogs/code_that_cares',
  '/blogs/crash_guard',
  '/blogs/mechanical_prosthetic_arm',
  '/blogs/success_story_aarav',
  '/blogs/writing-debating-program-students-university-application-india',
  '/blogs/research-program-for-high-school-student',

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