import React from 'react';
import { 
  Trophy, 
  Target, 
  Users, 
  BookOpen, 
  Briefcase, 
  HeartHandshake,
  Lightbulb,
  ArrowRight
} from 'lucide-react';

const THEMES = [
  {
    icon: <BookOpen className="w-6 h-6 text-blue-600" />,
    title: "Sports Literacy",
    desc: "Addressing awareness in schools with weak sports culture."
  },
  {
    icon: <Briefcase className="w-6 h-6 text-blue-600" />,
    title: "Careers Behind the Court",
    desc: "Helping athletes understand analytics, marketing, and management."
  },
  {
    icon: <Trophy className="w-6 h-6 text-blue-600" />,
    title: "Infrastructure Access",
    desc: "Providing basic equipment and safe play spaces for underfunded areas."
  },
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: "Gender Inclusion",
    desc: "Campaigns and workshops to boost girls' participation in sports."
  },
];

const PROJECT_IDEAS = [
  {
    title: "Sports Education Now Fund",
    category: "Fundraising & Logistics",
    desc: "A student-led fund to supply rural schools with kits and run weekend workshops.",
    sdg: "SDG 4"
  },
  {
    title: "Community League Manager",
    category: "Events & Leadership",
    desc: "Organizing an intra-community tournament to foster local talent and teamwork.",
    sdg: "SDG 3"
  },
  {
    title: "Careers in Sports Hub",
    category: "Education & Mentorship",
    desc: "A digital or physical hub connecting students with mentors in sports management.",
    sdg: "SDG 8"
  },
];

export default function SportsTrackSection() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-6">
            <Trophy className="w-4 h-4" />
            <span>Community Service Track</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Turn Passion into <span className="text-blue-600">Impact</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Students pick a sports-education problem and build a full-fledged community service project around it. It's about moving beyond playing to creating structure, leadership, and advocacy.
          </p>
        </div>

        {/* PART 1: THEMES (Grid Layout) */}
        <div className="mb-24">
          <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" />
            Choose Your Focus Area
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {THEMES.map((item, index) => (
              <div key={index} className="group p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-4 group-hover:bg-blue-50 transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PART 2: PROJECT EXAMPLES (Card Layout) */}
        <div className="bg-gray-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 opacity-10 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2"></div>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  <Lightbulb className="w-6 h-6 text-yellow-400" />
                  What Students Can Build
                </h3>
                <p className="text-gray-400">Real-world project examples to inspire your journey.</p>
              </div>
              {/* Optional Link */}
              <button className="text-blue-400 text-sm font-semibold flex items-center gap-1 hover:text-blue-300 transition-colors">
                View Guidelines <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PROJECT_IDEAS.map((project, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-2xl hover:bg-gray-800 transition-colors duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-1 bg-gray-700 text-gray-300 rounded border border-gray-600">
                      {project.sdg}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {project.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}