import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Engineering Impact in Motion: Meteor 350 Crash Guard | Project Spotlight',
  description: 'Discover how a Career Discovery student designed and developed a custom crash guard for the Royal Enfield Meteor 350, from CAD simulations to real-world fabrication.',
  alternates: {
    canonical: "https://www.thecareerdiscovery.com/blogs/crash-guard-project",
  },
}

export default function CrashGuardProjectBlog() {
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
            <span>6–7 minute read</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#0a2342] leading-tight mb-8">
            Engineering Impact in Motion: Designing a Crash Guard for the Royal Enfield Meteor 350
          </h1>

          {/* Hero Image Placeholder */}
          <img
            src="/blog/motorbike.jpeg" // Replace with your actual hero image path
            alt="Royal Enfield Meteor 350 Crash Guard Prototype"
            className="w-full h-[400px] object-cover rounded-2xl mb-12 shadow-lg"
          />

          {/* Table of Contents Box */}
          <div className="bg-gray-50 border border-gray-100 p-6 rounded-xl mb-10">
            <h3 className="text-lg font-bold text-[#0a2342] mb-4 uppercase tracking-wide">Table of Contents</h3>
            <ul className="space-y-2 text-[#c5a059] font-medium">
              <li><a href="#identifying-problem" className="hover:underline">Identifying a Real-World Rider Problem</a></li>
              <li><a href="#market-research-to-metal" className="hover:underline">From Market Research to Metal</a></li>
              <li><a href="#engineering-design-development" className="hover:underline">Engineering the Crash Guard: Design & Development</a></li>
              <li><a href="#materials-manufacturing" className="hover:underline">Materials, Manufacturing & Structural Decisions</a></li>
              <li><a href="#testing-iteration-validation" className="hover:underline">Testing, Iteration & Validation</a></li>
              <li><a href="#business-strategy" className="hover:underline">Business Strategy: Beyond the Prototype</a></li>
              <li><a href="#outcomes-impact" className="hover:underline">Outcomes, Impact & Industry Readiness</a></li>
              <li><a href="#why-projects-define" className="hover:underline">Why Projects Like This Define Career Discovery</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <article className="mt-10 text-gray-800 leading-relaxed text-[17px] space-y-6">

            {/* Section 1 */}
            <h2 id="identifying-problem" className="text-2xl font-serif font-bold text-[#0a2342] mt-12 mb-4">
              Identifying a Real-World Rider Problem
            </h2>
            <p>
              India is home to over 200+ million two-wheelers, and motorcycles are not just vehicles—they are daily companions for commuting, touring, and adventure riding. Among mid-weight cruisers, the Royal Enfield Meteor 350 stands out as one of the most popular choices for urban and highway riders alike.
            </p>
            <p>
              But with rising traffic density and unpredictable road conditions, one question becomes critical: <strong>How do you protect both the rider and the motorcycle without compromising aesthetics or affordability?</strong>
            </p>
            <p>
              This is the challenge Dev chose to solve. As part of a structured product development curriculum, Dev undertook the end-to-end development of a motorbike crash guard, engineered specifically for the Meteor 350. What followed was not just a fabrication project, but a comprehensive engineering journey covering:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#c5a059]">
              <li>Market research</li>
              <li>CAD-based design and packaging studies</li>
              <li>Material selection</li>
              <li>Structural simulations</li>
              <li>Prototyping and welding</li>
              <li>Testing and failure analysis</li>
              <li>Costing and go-to-market strategy</li>
            </ul>
            <p>
              This was industry-style product development—not a classroom model.
            </p>

            {/* Section 2 */}
            <h2 id="market-research-to-metal" className="text-2xl font-serif font-bold text-[#0a2342] mt-12 mb-4">
              From Market Research to Metal
            </h2>
            <p>
              Before touching CAD software or steel tubing, Dev began where real automotive companies begin: the market. He studied:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#c5a059]">
              <li>Existing crash guard designs in the Indian aftermarket</li>
              <li>Price brackets (₹2,000 - ₹6,000 range)</li>
              <li>Rider feedback on durability and aesthetics</li>
              <li>Common failure points in low-cost guards</li>
              <li>Installation challenges and compatibility issues</li>
            </ul>
            <p>
              The insight was clear: Most guards either focused on low cost but weak weld quality, or heavy-duty build with excessive weight, often adding 4 to 6 kg unnecessarily.
            </p>
            <p>
              Dev defined three measurable design goals:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#c5a059]">
              <li>High impact resistance during low-speed crashes</li>
              <li>Weight optimization without sacrificing structural strength</li>
              <li>Manufacturability within Indian fabrication ecosystems</li>
            </ul>
            <p>
              This clarity shaped every engineering decision that followed.
            </p>

            {/* Section 3 */}
            <h2 id="engineering-design-development" className="text-2xl font-serif font-bold text-[#0a2342] mt-12 mb-4">
              Engineering the Crash Guard: Design & Development
            </h2>
            <p>
              Using CAD tools, Dev created multiple concept geometries to ensure:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#c5a059]">
              <li>Frame compatibility</li>
              <li>Adequate ground clearance</li>
              <li>Engine casing protection</li>
              <li>Leg safety during side impacts</li>
              <li>Visual alignment with the cruiser aesthetics of the Meteor 350</li>
            </ul>
            <p>
              Packaging studies ensured that:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#c5a059]">
              <li>The guard did not interfere with foot pegs</li>
              <li>Mounting points aligned with existing chassis bolts</li>
              <li>No structural stress was transferred to weak subframe areas</li>
            </ul>
            <p>
              To validate performance before fabrication, Dev conducted basic FEA (Finite Element Analysis) simulations, analyzing:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#c5a059]">
              <li>Impact load distribution</li>
              <li>Vibration response</li>
              <li>Stress concentration at weld joints</li>
            </ul>
            <p>
              Simulation results helped refine tube thickness and joint angles, reducing projected stress concentrations by nearly 18–22% compared to the initial design iteration.
            </p>

            {/* Section 4 */}
            <h2 id="materials-manufacturing" className="text-2xl font-serif font-bold text-[#0a2342] mt-12 mb-4">
              Materials, Manufacturing & Structural Decisions
            </h2>
            <p>
              Material selection was critical. Dev chose mild steel tubular sections, balancing:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#c5a059]">
              <li>Strength-to-cost ratio</li>
              <li>Impact resistance</li>
              <li>Weldability</li>
              <li>Availability in local markets</li>
            </ul>
            <p>
              Manufacturing processes explored included:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#c5a059]">
              <li>Precision tube bending</li>
              <li>MIG and TIG welding</li>
              <li>Jig-based fabrication for alignment accuracy</li>
              <li>Powder coating for corrosion resistance</li>
            </ul>
            <p>
              <strong>Why powder coating?</strong> Because Indian road conditions expose motorcycles to dust, rain, and humidity. Powder coating improves corrosion resistance and surface durability by up to 3-4 times compared to basic paint finishes.
            </p>
            <p>
              To improve bracket precision, Dev used 3D-printed brackets during prototyping. This allowed:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#c5a059]">
              <li>Faster iteration</li>
              <li>Dimensional validation</li>
              <li>Reduced material wastage</li>
            </ul>
            <p>
              Instead of trial-and-error welding, he validated fitment before final fabrication—a professional-grade approach.
            </p>

            {/* Section 5 */}
            <h2 id="testing-iteration-validation" className="text-2xl font-serif font-bold text-[#0a2342] mt-12 mb-4">
              Testing, Iteration & Validation
            </h2>
            <p>
              Engineering is not about the first design. It is about iteration. Dev conducted:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#c5a059]">
              <li>Static load testing</li>
              <li>Simulated impact stress evaluations</li>
              <li>Weld integrity inspections</li>
              <li>Mounting stability assessments</li>
            </ul>
            <p>
              During early testing, minor vibration-induced stress was observed at specific junction points. Rather than reinforcing blindly (which would increase weight), Dev optimized the geometry and weld positioning, improving vibration resistance while maintaining structural efficiency.
            </p>
            <p>
              Each iteration improved load distribution, mount alignment, and structural rigidity. The final prototype achieved stable mounting with no noticeable frame misalignment, balanced weight distribution, and improved structural strength compared to standard aftermarket entry-level models.
            </p>

            {/* Section 6 */}
            <h2 id="business-strategy" className="text-2xl font-serif font-bold text-[#0a2342] mt-12 mb-4">
              Business Strategy: Beyond the Prototype
            </h2>
            <p>
              What sets this project apart is that it didn’t stop at fabrication. Dev analyzed:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#c5a059]">
              <li>Raw material costs</li>
              <li>Fabrication labor</li>
              <li>Coating and finishing expenses</li>
              <li>Distribution margins</li>
              <li>Competitive pricing strategy</li>
            </ul>
            <p>
              By optimizing material usage and manufacturing steps, the projected unit cost remained competitive within the mid-market pricing band, while offering higher durability.
            </p>
            <p>
              He explored positioning strategies spanning touring riders seeking premium protection, urban riders prioritizing safety, and aftermarket accessory retailers. This introduced him to a critical industry lesson: <em>“Engineering excellence must align with market feasibility.”</em>
            </p>

            {/* Section 7 */}
            <h2 id="outcomes-impact" className="text-2xl font-serif font-bold text-[#0a2342] mt-12 mb-4">
              Outcomes, Impact & Industry Readiness
            </h2>
            <p>
              By the end of the project, Dev had:
            </p>
            <ul className="space-y-4 mt-6">
              <li className="flex gap-3">
                <span className="text-[#c5a059] font-bold">✓</span>
                <span><strong>Developed a fully functional crash guard prototype</strong> tailored specifically to the Royal Enfield Meteor 350.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c5a059] font-bold">✓</span>
                <span><strong>Applied real-world design principles</strong> translating safety requirements into manufacturable geometry.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c5a059] font-bold">✓</span>
                <span><strong>Used FEA-backed analysis</strong> to reduce stress concentration by ~20% across iterations.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c5a059] font-bold">✓</span>
                <span><strong>Integrated powder coating</strong> to enhance corrosion resistance and product lifespan.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c5a059] font-bold">✓</span>
                <span><strong>Understood the complete product lifecycle</strong> from concept to commercialization.</span>
              </li>
            </ul>

            <p className="mt-8">
              More importantly, he developed industry-aligned competencies in automotive accessory design, structural validation, fabrication planning, cost modeling, and iterative engineering. These are skills directly transferable to OEM and aftermarket automotive environments.
            </p>

            {/* Section 8 */}
            <h2 id="why-projects-define" className="text-2xl font-serif font-bold text-[#0a2342] mt-12 mb-4 border-t border-gray-200 pt-10">
              Why Projects Like This Define Career Discovery
            </h2>
            <p>
              Dev’s project represents what modern engineering education should look like. Not theoretical diagrams, not isolated CAD models—but real, tangible products built for real machines on real roads.
            </p>
            <p>
              By working on an actual motorcycle platform like the Royal Enfield Meteor 350, Dev didn’t just learn “about” product development—he experienced it. He learned that:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#c5a059]">
              <li>Safety must be quantified, not assumed</li>
              <li>Manufacturing constraints shape design</li>
              <li>Aesthetics influence purchasing decisions</li>
              <li>Testing reveals what theory misses</li>
              <li>Cost determines scalability</li>
            </ul>
            <p>
              Projects like this transform students from passive learners into problem-solvers who think like engineers and strategists. At Career Discovery, we believe that when students build for the real world, they build confidence, competence, and clarity about their future. Dev’s crash guard is more than a metal structure, it is a milestone in becoming industry-ready.
            </p>

            {/* Call to Action Box */}

          <div 
  className="mt-12 p-8 rounded-xl shadow-2xl text-center"
  style={{ backgroundColor: '#0a2342', color: 'white' }}
>
  <h3 
    className="text-3xl font-serif font-bold mb-4"
    style={{ color: '#c5a059' }}
  >
    Build What Matters
  </h3>
  
  <p 
    className="mb-8 max-w-2xl mx-auto leading-relaxed"
    style={{ color: '#e5e7eb' }} 
  >
    If you’re a student who wants to go beyond hypothetical assignments and work on problems that exist in the real world, Career Discovery is where that journey begins. It starts as an idea. With mentorship, structure, and curiosity, it becomes a product with purpose. <strong style={{ color: 'white' }}>Your project could be next.</strong>
  </p>
  
  <a href='https://www.thecareerdiscovery.com/launchpad'>

  <button 
    className="px-8 py-4 font-bold tracking-wider hover:scale-105 transition-all duration-300 rounded shadow-lg uppercase text-sm"
    style={{ backgroundColor: '#c5a059', color: '#0a2342' }}
  >
    Explore Our Programs
  </button>
  </a>
</div>

          </article>
        </div>
      </main>
      <Footer />
    </section>
  );
}