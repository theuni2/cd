// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'i.imgur.com',
//       },
//       {
//         protocol: 'https',
//         hostname: 'images.pexels.com',
//       },
//       {
//         protocol: 'https',
//         hostname: 'img.freepik.com',
//       },
//        {
//         protocol: 'https',
//         hostname: 'images.unsplash.com',
//       },
//       {
//         protocol: 'https',
//         hostname: 'media.licdn.com',
//       },
//     ],
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },

// }

// module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
    ],
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  async redirects() {
    return [
      // Old duplicate URL
      {
        source: '/india/research-mentors-students-india-2',
        destination: '/research-mentors-students-india',
        permanent: true,
      },

      // Old India URL
      {
        source: '/india/india-high-school-research-coaching',
        destination: '/india-high-school-research-coaching',
        permanent: true,
      },

      // Old Dubai URL
      {
        source: '/dubai/dubai-student-university-prep-research',
        destination: '/dubai-student-university-prep-research',
        permanent: true,
      },

      // Old Dubai URL
      {
        source: '/dubai/dubai-research-bootcamp-for-high-school',
        destination: '/dubai-research-bootcamp-for-high-school',
        permanent: true,
      },

      // Old Dubai URL
      {
        source: '/dubai/dubai-high-school-internship-placement',
        destination: '/dubai-high-school-internship-placement',
        permanent: true,
      },

      // Old Dubai URL
      {
        source: '/dubai/dubai-internship-training-for-teenagers',
        destination: '/dubai-internship-training-for-teenagers',
        permanent: true,
      },

      // Old UAE URL
      {
        source: '/uae/uae-corporate-internships-for-teens',
        destination: '/uae-corporate-internships-for-teens',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;