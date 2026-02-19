import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Building a Mechanical Prosthetic Arm: A Project-Based Learning Spotlight',
  description: 'Discover how Aarav engineered an affordable, mechanical prosthetic arm through Career Discovery’s project-based learning program.',
  alternates: {
    canonical: "https://www.thecareerdiscovery.com/blogs/prosthetic-arm-project",
  },
}

export default function ProjectSpotlightBlog() {
  return (
    <section>
      <Navigation />
      <main className="min-h-screen mt-8">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">

          {/* Meta Info */}
          <div className="mb-6 flex flex-wrap items-center gap-4 text-sm font-medium text-[#c5a059] uppercase tracking-wider">
            <span>By Career Discovery Team</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
            <span>Project-Based Learning Spotlight</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
            <span>5–6 minute read</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#0a2342] leading-tight mb-8">
            Building a Mechanical Prosthetic Arm: A Story of Empathy and Engineering
          </h1>

          {/* Hero Image Placeholder */}
          <img
            src="/blog/prosthetic-hero.png" // Replace with your actual hero image path
            alt="Mechanical Prosthetic Arm Project"
            className="w-full h-[400px] object-cover rounded-2xl mb-12 shadow-lg"
          />

          {/* Table of Contents Box */}
          <div className="bg-gray-50 border border-gray-100 p-6 rounded-xl mb-10">
            <h3 className="text-lg font-bold text-[#0a2342] mb-4 uppercase tracking-wide">Table of Contents</h3>
            <ul className="space-y-2 text-[#c5a059] font-medium">
              <li><a href="#seeing-a-problem" className="hover:underline">Seeing a Problem Beyond the Classroom</a></li>
              <li><a href="#curiosity-to-solution" className="hover:underline">From Curiosity to a Mechanical Solution</a></li>
              <li><a href="#how-it-was-built" className="hover:underline">How the Prosthetic Arm Was Built</a></li>
              <li><a href="#learning-constraints" className="hover:underline">Learning Through Constraints, Not Shortcuts</a></li>
              <li><a href="#outcomes-impact" className="hover:underline">Outcomes, Impact, and What’s Next</a></li>
              <li><a href="#why-projects-define" className="hover:underline">Why Projects Like This Define Career Discovery</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <article className="mt-10 text-gray-800 leading-relaxed text-[17px] space-y-6">

            {/* Section 1 */}
            <h2 id="seeing-a-problem" className="text-2xl font-serif font-bold text-[#0a2342] mt-12 mb-4">
              Seeing a Problem Beyond the Classroom
            </h2>
            <p>
              When Aarav began thinking about his project, he wasn’t trying to chase a competition or build something flashy for a resume. He was focused on a much simpler but deeper question: How can technology be made more accessible to people who actually need it?
            </p>
            <p>
              Assistive devices like prosthetic arms are often expensive, complex, and difficult to repair especially in regions with limited access to advanced medical infrastructure. Aarav wanted to explore whether a functional prosthetic arm could be built using only mechanical principles, without relying on electronics or costly components.
            </p>
            <p>
              That question became the foundation of his Career Discovery project. What followed was not just an engineering exercise, but a powerful lesson in problem-solving, empathy, and real-world design thinking.
            </p>

            {/* Section 2 */}
            <h2 id="curiosity-to-solution" className="text-2xl font-serif font-bold text-[#0a2342] mt-12 mb-4">
              From Curiosity to a Mechanical Solution
            </h2>
            <p>
              Unlike many modern prosthetics that depend heavily on sensors, motors, and software, Aarav deliberately chose a different approach. His goal was to design a prosthetic arm that prioritized:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#c5a059]">
              <li>Simplicity</li>
              <li>Affordability</li>
              <li>Ease of repair</li>
              <li>Functional movement</li>
            </ul>
            <p>
              By removing electronics from the equation, Aarav challenged himself to rely on basic mechanical principles, the same fundamentals that underpin classical engineering.
            </p>
            <p>
              This decision shaped the entire project. Instead of asking, <em>What technology can I add?</em> Aarav asked, <em>What is the minimum needed to make this work well?</em> That mindset became one of the most valuable learning outcomes of the journey.
            </p>

            {/* Section 3 */}
            <h2 id="how-it-was-built" className="text-2xl font-serif font-bold text-[#0a2342] mt-12 mb-4">
              How the Prosthetic Arm Was Built
            </h2>
            <p>
              The prosthetic arm Aarav designed is entirely mechanical, constructed using common, low-cost materials. Every design choice was made with accessibility in mind. The structure includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#c5a059]">
              <li>Hinged joints that mimic natural arm movement</li>
              <li>Mechanical linkages that translate motion across the arm</li>
              <li>Tension mechanisms, such as strings or wires, that allow gripping and bending</li>
              <li>A focus on durability and ease of adjustment</li>
            </ul>
            <p>
              Rather than aiming for perfection in the first iteration, Aarav focused on functionality. Could the arm grip an object? Could it bend in a way that resembles natural movement? Could the design be understood and repaired without specialized tools?
            </p>
            <p>
              Each prototype answered these questions a little better than the last. The project is still ongoing, with refinements underway but even in its current form, it demonstrates how thoughtful engineering can emerge from limited resources.
            </p>

            {/* Build Progress Image Grid Placeholder */}
            <div className="my-12 p-6 bg-gray-50 rounded-xl border border-gray-100 text-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Replace these with actual progress images */}
                <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 font-medium">[Progress Image 1]</div>
                <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 font-medium">[Progress Image 2]</div>
              </div>
              <p className="text-sm text-gray-500 italic">Build progress and early prototypes of the mechanical arm.</p>
            </div>

            {/* Section 4 */}
            <h2 id="learning-constraints" className="text-2xl font-serif font-bold text-[#0a2342] mt-12 mb-4">
              Learning Through Constraints, Not Shortcuts
            </h2>
            <p>
              One of the most defining aspects of Aarav’s project was working within constraints. There were no advanced labs, no expensive components, and no ready-made solutions. Instead, Aarav learned to:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#c5a059]">
              <li>Break down complex movement into simple mechanical actions</li>
              <li>Iterate based on physical testing, not simulations alone</li>
              <li>Balance strength, flexibility, and comfort in a human-centered design</li>
            </ul>
            <p>
              These challenges mirror what engineers face in the real world where budget, materials, and context matter just as much as theory. Through the process, Aarav didn’t just learn how to build something. He learned how to think like an engineer.
            </p>

            {/* Section 5 */}
            <h2 id="outcomes-impact" className="text-2xl font-serif font-bold text-[#0a2342] mt-12 mb-4">
              Outcomes, Impact, and What’s Next
            </h2>
            <p>
              Even at its current stage, Aarav’s prosthetic arm stands as proof that meaningful innovation doesn’t require massive resources, just clear intent and disciplined execution.
            </p>
            <ul className="space-y-4 mt-6">
              <li className="flex gap-3">
                <span className="text-[#c5a059] font-bold">✓</span>
                <span><strong>Developed a fully functional</strong> mechanically driven prosthetic arm prototype capable of executing basic gripping and bending motions with a grip response time under 2 seconds and consistent object hold stability during testing trials.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c5a059] font-bold">✓</span>
                <span><strong>Applied core engineering principles</strong> (levers, joint mechanics, tension systems, and force distribution) to build a human-centered solution, successfully translating theoretical concepts into a working model through multiple structured design iterations and load-testing cycles.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c5a059] font-bold">✓</span>
                <span><strong>Designed with affordability in focus,</strong> using cost-efficient and locally accessible materials to reduce projected production costs by an estimated 40–60% compared to conventional entry-level prosthetics, while maintaining structural reliability.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c5a059] font-bold">✓</span>
                <span><strong>Completed end-to-end prototyping and testing,</strong> conducting repeated stress and motion trials to refine durability and ergonomics, resulting in a measurable improvement in joint flexibility and grip precision across iterations.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c5a059] font-bold">✓</span>
                <span><strong>Gained hands-on experience in constraint-based engineering,</strong> managing material limitations, mechanical failures, and design adjustments within a defined timeline mirroring real-world product development environments.</span>
              </li>
            </ul>

            <p className="mt-8">
              More importantly, the project opens doors to what comes next. With continued refinement, the prosthetic arm has the potential to:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#c5a059]">
              <li>Improve comfort and wearability for extended daily use</li>
              <li>Achieve smoother, more efficient motion through optimized joint mechanics</li>
              <li>Adapt to different users through modular or adjustable components</li>
            </ul>
            <p>
              Beyond the device itself, the larger impact lies in what the project represents. Aarav’s work shows that students don’t need to wait for college labs, startups, or grants to work on real problems. With the right guidance and intent, they can design solutions that intersect engineering, empathy, and social responsibility.
            </p>

            {/* Section 6 */}
            <h2 id="why-projects-define" className="text-2xl font-serif font-bold text-[#0a2342] mt-12 mb-4 border-t border-gray-200 pt-10">
              Why Projects Like This Define Career Discovery
            </h2>
            <p>
              At Career Discovery, we believe students learn best when they work on problems that matter. Aarav’s journey reflects what happens when curiosity meets structured mentorship and project-based learning. Instead of memorizing concepts, students:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#c5a059]">
              <li>Apply knowledge to real challenges</li>
              <li>Explore career paths through hands-on experience</li>
              <li>Build confidence by creating tangible outcomes</li>
            </ul>
            <p>
              Projects like the mechanical prosthetic arm don’t just teach engineering, they help students discover who they want to become and how they want to make an impact. For students exploring careers in engineering, design, healthcare, or social innovation, this kind of learning goes far beyond the classroom.
            </p>

          </article>
        </div>
      </main>
      <Footer />
    </section>
  );
}