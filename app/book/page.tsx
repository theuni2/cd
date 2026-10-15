import Footer from '@/components/Footer';
import { 
  BookOpen, 
  ExternalLink, 
  Star, 
  CheckCircle2, 
  Award, 
  GraduationCap, 
  Globe2, 
  Sparkles, 
  Compass, 
  FileText, 
  TrendingUp
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Colleges, Careers, and Counselling: The Uni Discovery Blueprint | By Ananya Sachdev",
  description: "The definitive, step-by-step admissions guide by Ananya Sachdev (Columbia & SRCC alumna, 2x TEDx speaker). Discover how to navigate global university admissions across the US, UK, Canada, Europe, and Asia with confidence.",
  alternates: {
    canonical: "https://www.thecareerdiscovery.com/book",
  },
  openGraph: {
    title: "Colleges, Careers, and Counselling: The Uni Discovery Blueprint",
    description: "A practical, step-by-step roadmap for global college admissions by Ananya Sachdev. Available on Amazon.",
    url: "https://www.thecareerdiscovery.com/book",
    siteName: "Career Discovery",
    images: [
      {
        url: "/images/book/book_cover.png",
        width: 682,
        height: 1024,
        alt: "Colleges, Careers, and Counselling Book Cover",
      },
    ],
    type: "book",
  },
};

export default function BookPage() {
  const chapters = [
    {
      number: "01",
      title: "Why & Where to Study Abroad",
      description: "Finding your purpose beyond rankings. Evaluating global academic cultures, costs, campus ecosystems, and personal growth goals.",
      icon: Globe2
    },
    {
      number: "02",
      title: "College & Course Discovery",
      description: "How to build a balanced, strategic university list (Reach, Target, Likely) aligned with your genuine intellectual curiosity and long-term career aspirations.",
      icon: Compass
    },
    {
      number: "03",
      title: "Standardised Tests & Academics",
      description: "Demystifying SAT, ACT, APs, and school board conversions (CBSE, ISC, IB, A-Levels). Creating an efficient testing and coursework timeline.",
      icon: GraduationCap
    },
    {
      number: "04",
      title: "Building an Authentic Profile",
      description: "Developing your unique 'academic spike' through high-impact research, leadership, community initiatives, and meaningful extracurriculars.",
      icon: TrendingUp
    },
    {
      number: "05",
      title: "Essays, SOPs & Storytelling",
      description: "Mastering the art of authentic personal narrative. Avoiding clichés, structuring powerful hooks, and writing essays that leave admissions officers inspired.",
      icon: FileText
    },
    {
      number: "06",
      title: "Financial Aid, Interviews & Beyond",
      description: "Securing scholarships, acing alumni and admissions interviews, pre-departure checklists, and smoothly transitioning into international university life.",
      icon: Award
    }
  ];

  const testimonials = [
    {
      quote: "Honestly, if you're not working with Uni Discovery, you're missing out. They make the entire process so much clearer and easier to navigate.",
      author: "Suhana Chopra",
      institution: "Columbia University 2026",
      avatar: "SC"
    },
    {
      quote: "If you're serious about getting into a top university, you need more than just good grades on paper. Uni Discovery helped me refine how I was telling my story, pointed out gaps I wouldn't have noticed, and pushed me to present a stronger version of my profile.",
      author: "Anvay Arora",
      institution: "University of Michigan 2026",
      avatar: "AA"
    },
    {
      quote: "I didn't realise how much went into the application process until I was in the middle of it. Uni Discovery helped me stay on track, avoid common mistakes, and approach everything with a clear plan.",
      author: "Ssavya Garg",
      institution: "SMU 2026",
      avatar: "SG"
    },
    {
      quote: "Uni Discovery helped me structure everything step by step so I knew what to focus on instead of panicking. I genuinely don't think I would've managed the process this smoothly without their support.",
      author: "Isheeta Jain",
      institution: "NYU 2026",
      avatar: "IJ"
    }
  ];

  const bookHighlights = [
    "Country-Agnostic Blueprint covering US, UK, Canada, Europe, Singapore & Asia",
    "Real-world Case Studies, Diagnostic Activities & Step-by-Step Checklists",
    "Practical Frameworks to uncover your unique academic 'Spike'",
    "In-depth breakdown of essays, letters of recommendation & scholarships",
    "Pre-departure readiness & transition guide for first-year success"
  ];

  return (
    <section className="bg-white text-gray-900 font-sans pt-16">
      {/* Hero Showcase Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/70 via-white to-white py-16 lg:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Book Cover Image with 3D Effect */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="relative group">
                {/* Glow & Backdrop */}
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-amber-300 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
                
                {/* Book Cover Frame */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white transform transition-transform duration-300 hover:scale-[1.02] hover:-rotate-1 max-w-[340px] md:max-w-[380px]">
                  <img 
                    src="/images/book/book_cover.png" 
                    alt="Colleges, Careers, and Counselling: The Uni Discovery Blueprint by Ananya Sachdev"
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>

                {/* Floating Amazon Badge */}
                <div className="absolute -bottom-4 right-4 md:-right-4 bg-gray-950 text-white px-4 py-2 rounded-xl shadow-xl border border-gray-800 flex items-center gap-2 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  Published by Amaryllis
                </div>
              </div>
            </div>

            {/* Right: Book Overview & CTAs */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 text-orange-800 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-orange-600" />
                The Essential Higher Education Guide
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-[1.15]">
                Colleges, Careers, <br className="hidden sm:inline" />
                and <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Counselling</span>
              </h1>
              
              <p className="text-lg font-medium text-gray-600 italic">
                The Uni Discovery Blueprint — By <span className="text-gray-900 font-semibold not-italic">Ananya Sachdev</span>
              </p>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-2xl">
                Applying to university—especially abroad—can feel overwhelming. There are countless decisions to make, from course selection to essays, tests, and financial aid. 
                <strong className="text-gray-950"> The Uni Discovery Blueprint</strong> is a practical, country-agnostic roadmap designed to turn ambition into confident, strategic action.
              </p>

              {/* Quick Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-left">
                {bookHighlights.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a 
                  href="https://www.amazon.in/dp/937317097X" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-orange-500/25 transition-all duration-200 transform hover:-translate-y-0.5 text-base"
                >
                  <BookOpen className="w-5 h-5" />
                  Order on Amazon
                  <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
                </a>

                <a 
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold px-6 py-4 rounded-full transition-colors duration-200 text-base"
                >
                  Connect with Our Counsellors
                </a>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 text-xs text-gray-500 pt-2">
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  Paperback & E-Book Available
                </span>
                <span>•</span>
                <span>ISBN: 978-93-7317-097-8</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About The Book Deep-Dive */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-orange-600">Inside The Guide</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-950">
              A Complete Roadmap From Exploration to Acceptance
            </h3>
            <p className="max-w-2xl mx-auto text-gray-600 text-base sm:text-lg">
              Getting into the right university is not just about building a strong application—it is about discovering the right path for your future.
            </p>
          </div>

          {/* Book Back Cover Synthesis Card */}
          <div className="bg-gradient-to-br from-gray-50 to-orange-50/40 rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm space-y-6 text-gray-800 leading-relaxed text-[17px]">
            <p className="font-serif text-xl sm:text-2xl text-gray-950 font-medium leading-snug">
              “Applying to university can feel a bit like being handed the pieces of a puzzle without seeing the picture on the box.”
            </p>
            
            <p>
              There are countless college lists, conflicting advice, essay deadlines, rankings, scholarships, interviews, and opinions from everyone around you. Amidst all that noise, you're expected to make one of the biggest decisions of your life.
            </p>

            <p>
              <strong className="text-gray-950">Colleges, Careers, and Counselling: The Uni Discovery Blueprint</strong> breaks down the admissions process into clear, manageable stages and helps students approach each decision with confidence rather than confusion.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm">
                <h4 className="font-bold text-gray-950 text-lg mb-2 flex items-center gap-2">
                  <Globe2 className="w-5 h-5 text-orange-500" />
                  Country-Agnostic Approach
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Instead of focusing on one single education system, it explains the core principles that top universities across the US, UK, Canada, Singapore, Europe, and Asia consistently look for.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm">
                <h4 className="font-bold text-gray-950 text-lg mb-2 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-orange-500" />
                  Actionable Frameworks
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Packed with case studies, real-world examples, activities, diagnostic checklists, and FAQs to help you understand not just where you should apply, but why those choices align with your goals.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Chapters Grid */}
      <section className="py-20 bg-gray-50 border-y border-gray-200/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-orange-600">Curriculum & Chapters</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-950">
              What You'll Discover in the Blueprint
            </h3>
            <p className="max-w-2xl mx-auto text-gray-600 text-base">
              A holistic end-to-end framework covering every milestone of the global university admissions cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chapters.map((chapter, idx) => {
              const Icon = chapter.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-200">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-black text-gray-200 group-hover:text-orange-200 transition-colors">
                        {chapter.number}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-gray-950 group-hover:text-orange-600 transition-colors">
                      {chapter.title}
                    </h4>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {chapter.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-orange-600">
                    <span>Part of the Core Framework</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              Verified Student Endorsements
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-950">
              What Students & Admits Say
            </h3>
            <p className="max-w-2xl mx-auto text-gray-600 text-base">
              Real feedback from students who used the Uni Discovery methodology to gain admission to top global universities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className="bg-gray-50 rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between hover:border-orange-200 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic text-[16px] leading-relaxed">
                    “{t.quote}”
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-200 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-600 text-white font-bold flex items-center justify-center text-sm shadow">
                    {t.avatar}
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-950 text-sm">{t.author}</h5>
                    <p className="text-xs font-semibold text-orange-600">{t.institution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Author Section */}
      <section className="py-20 bg-gray-950 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Author Image & Credentials */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative">
                <div className="w-56 h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden border-4 border-orange-500 shadow-2xl bg-gray-900">
                  <img 
                    src="/images/book/ananya_sachdev.jpg" 
                    alt="Ananya Sachdev - Author & Founder of Uni Discovery"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-extrabold uppercase px-4 py-1.5 rounded-full shadow-lg tracking-wider whitespace-nowrap">
                  2x TEDx Speaker
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mt-6">Ananya Sachdev</h3>
              <p className="text-orange-400 text-sm font-medium mt-1">Founder, Uni Discovery & Career Discovery</p>
              <p className="text-gray-400 text-xs mt-1">Columbia University & SRCC Alumna</p>
            </div>

            {/* Author Biography */}
            <div className="lg:col-span-8 space-y-5 text-gray-300 leading-relaxed text-base">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800 text-orange-400 text-xs font-bold uppercase tracking-wider">
                About The Author
              </div>

              <h4 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Empowering the Next Generation of Global Scholars
              </h4>

              <p>
                <strong>Ananya Sachdev</strong> is a 2x TEDx speaker, former national-level athlete, and 2x EdTech founder focused on transforming how students discover and pursue global education opportunities. She is a graduate of <strong>Columbia University</strong> and <strong>SRCC</strong>, where she developed her expertise in education, leadership, and global systems.
              </p>

              <p>
                She also brings extensive experience in strategy and mentorship across the <strong>USA, Japan, and Dubai</strong>. As the founder of Uni Discovery and Career Discovery, higher education mentorship platforms, she has guided students from school to the university level in exploring career paths, building profiles, and gaining admission to top global institutions.
              </p>

              <p>
                Through structured, mentor-led programmes in STEM, media, marketing, research, and entrepreneurship, she has helped over <strong>100+ students</strong> secure admissions to their dream universities worldwide. Her mission is to bridge the gap between ambition and access by making world-class mentorship and opportunities accessible to students from all backgrounds.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Bottom CTA Card */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-gray-950 text-white rounded-3xl p-8 md:p-14 text-center space-y-6 shadow-2xl border border-gray-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight">
              Turn Your College Ambition Into Action
            </h3>

            <p className="max-w-xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed">
              Order your copy of <span className="text-white font-semibold">Colleges, Careers, and Counselling</span> on Amazon today, or partner with our team for 1-on-1 personalised mentoring.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a 
                href="https://www.amazon.in/dp/937317097X"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold px-8 py-3.5 rounded-full shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <BookOpen className="w-5 h-5" />
                Buy on Amazon
                <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
              </a>

              <a 
                href="/#contact"
                className="inline-block bg-white text-gray-950 font-bold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-md"
              >
                Schedule a Consultation
              </a>
            </div>

            <p className="text-xs text-gray-500 pt-2">
              Available in Paperback and Kindle Edition on Amazon India and global marketplaces.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </section>
  );
}
