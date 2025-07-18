'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ComparisonRow {
  feature: string;
  ignite: ReactNode;
  ladder: ReactNode;
  aip: ReactNode;
  whyUs: ReactNode;
}

const rows: ComparisonRow[] = [
  {
    feature: 'Scope & Project Type',
    ignite: (
      <>
        <span className="font-medium italic">Real placements</span> with field experts + Letter of Completion & hands-on learning
      </>
    ),
    ladder: 'Startup projects',
    aip: 'Field placements; Not necessarily mentored',
    whyUs: (
      <>
        Intern with{' '}
        <span className="font-medium italic">leading startups, companies, field experts, and nonprofits</span>{' '}
        — build a global network
      </>
    ),
  },
  {
    feature: 'Geographic Reach',
    ignite: (
      <>
        <span className="italic font-medium">Global reach</span> — India & international
      </>
    ),
    ladder: 'Global — US & international',
    aip: 'India-based; open to international students',
    whyUs: (
      <>
        <span className="italic font-medium">Equal access</span> for students in India & worldwide;
        <br />
        <span className="italic">One transparent, affordable price</span>
      </>
    ),
  },
  {
    feature: 'Selectivity & Prestige',
    ignite: (
      <>
        Competitive with <span className="italic font-medium">1:1 mentor support</span> every step
      </>
    ),
    ladder: 'Competitive: 70 spots',
    aip: 'Varies by placement; moderate competition',
    whyUs: (
      <>
        <span className="italic font-medium">No GPA cutoffs</span>, no complicated applications. Just{' '}
        <span className="font-medium">exclusive, high-quality opportunities</span>.
      </>
    ),
  },
];

export default function InternshipComparisonSection() {
  return (
    <section className="bg-white py-20 px-4 md:px-20">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">How Ignite Compares</h2>
        <p className="mt-4 text-lg text-gray-600">
          A quick look at what makes Ignite Internships stand out in a sea of global programs.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm"
      >
        <table className="min-w-full text-left border-collapse bg-white">
          <thead className="bg-blue-50">
            <tr>
              <th className="p-4 font-semibold text-sm text-gray-700">Feature</th>
              <th className="p-4 font-semibold text-sm text-gray-700">Ignite Internships (CD)</th>
              <th className="p-4 font-semibold text-sm text-gray-700">Competitor 1</th>
              <th className="p-4 font-semibold text-sm text-gray-700">Competitor 2</th>
              <th className="p-4 font-semibold text-sm text-gray-700">Why Us?</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {rows.map((row, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              >
                <td className="p-4 font-semibold text-gray-800">{row.feature}</td>
                <td className="p-4">{row.ignite}</td>
                <td className="p-4">{row.ladder}</td>
                <td className="p-4">{row.aip}</td>
                <td className="p-4">{row.whyUs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
}


