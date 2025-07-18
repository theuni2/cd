'use client';

import { motion } from 'framer-motion';

const comparisonData = [
  {
    feature: 'Price (USD)',
    us: '$3,000 including 1v1 mentorship with top professors, LORs, and journal publication guidance',
    others: [
      '~$3000 for only 1v1 mentorship without add-ons like publication extending to $3,795',
      '~$6500 for premium research and publication',
      '~$5,000+ ',
       '~$6500',
    ],
  },
  {
    feature: 'Format',
    us: ' 1v1 Ultra‑focused 10-hr sessions (5-hr with a top Professor, 5-hr with an expert writer) ',
    others: [
      '1-on-1 with only a PhD mentor',
      '1-on-1 with only a PhD mentor',
      'Seminars (small cohort) with professors; 1v1 with only PhD mentor ',
      '1-on-1 research with PhD/postdoc, lectures, workshops',
     
    ],
  },
  {
    feature: 'Mentor Type',
    us: ' Professors from top universities like the Ivy Leagues, Columbia + PhD experts + writing mentor (1v1)  ',
    others: [
      'PhD mentors',
      'PhD mentors',
      'Professors only in seminars',
      'PhD mentors and Professors',
     
    ],
  },
  {
    feature: 'Publication',
    us: 'Laser-focused on producing a ready-to-submit paper in 10 sessions, with guidance for publishing in reputed global journals.',
    others: [
      'Assistance in journal completion; publication as an add-on (chargeable)',
      'Not guaranteed; Publication with Premium Research and Publication Program',
      'Only guidance in journal publication',
      'Guided publication track; only the top 5% invited for publication',
    ],
  },
  {
    feature: 'Selectivity',
    us: 'Open to motivated 9th to 12th graders despite their grades',
    others: [
      'Moderately selective',
      'Selective (focuses on academic scores + interview)',
      '26% acceptance; GPA > 3.9; fewer than 5% are 9th graders',
      'Selective; involves an interview session',
    ],
  },
  {
    feature: 'Flexibility',
    us: 'Fully customizable topic and workflow in 1-on-1 sessions with professors',
    others: [
      'Moderately flexible in topic/output',
      'Semi-flexible schedule',
      'Seminars have fixed schedules',
      'Less flexible, set research tracks',
    ],
  },
];

export default function ComparisonSection() {
  return (
    <section className="bg-[#f9f9f9] py-20 px-4 md:px-24 text-[#1a1a1a]">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
          How We Compare
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          See how our approach stacks up against other student research programs.
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200 bg-white">
        <table className="min-w-[900px] w-full text-left border-collapse">
          <thead className="bg-[#f2f2f2] text-sm uppercase text-gray-700">
            <tr>
              <th className="p-4 font-medium">Feature</th>
              <th className="p-4 font-medium text-[#111]">Thinktank (CD)</th>
              {[...Array(4)].map((_, i) => (
                <th key={i} className="p-4 font-medium text-gray-600 text-sm text-center">
                  Competitor {i + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, idx) => (
              <motion.tr
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="border-t border-gray-200"
              >
                <td className="p-4 font-medium">{row.feature}</td>
                <td className="p-4 text-gray-900 text-sm">{row.us}</td>
                {row.others.map((text, i) => (
                  <td key={i} className="p-4 text-sm text-gray-600 text-center">
                    {text}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
