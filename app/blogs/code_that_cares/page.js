import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Code That Cares: Armilli | Student Project Spotlight',
  description: 'Discover how a Career Discovery student built Armilli, an AI-assisted diagnosis and monitoring platform designed for early detection of animal health issues.',
  alternates: {
    canonical: "https://www.thecareerdiscovery.com/blogs/armilli-project",
  },
}

export default function ArmilliProjectBlog() {
  return (
    <section>
      <Navigation />
      <main className="min-h-screen mt-8">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">

          {/* Meta Info */}
          <div className="mb-6 flex flex-wrap items-center gap-4 text-sm font-medium text-[#c5a059] uppercase tracking-wider">
            <span>By Career Discovery Team</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
            <span>Student Project Spotlight</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
            <span>6 minute read</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#0a2342] leading-tight mb-8">
            Code That Cares: Armilli
          </h1>

          {/* Hero Image Placeholder */}
          <img
            src="/blog/vet.png" // Replace with your actual hero image path
            alt="Armilli AI Animal Diagnosis Platform"
            className="w-full h-[400px] object-cover rounded-2xl mb-12 shadow-lg"
          />

          {/* Table of Contents Box */}
          <div className="bg-gray-50 border border-gray-100 p-6 rounded-xl mb-10">
            <h3 className="text-lg font-bold text-[#0a2342] mb-4 uppercase tracking-wide">Table of Contents</h3>
            <ul className="space-y-2 text-[#c5a059] font-medium">
              <li><a href="#seeing-what-animals-cant-say" className="hover:underline">Seeing What Animals Can’t Say</a></li>
              <li><a href="#designing-diagnostic-experience" className="hover:underline">From Idea to Interface: Designing a Diagnostic Experience</a></li>
              <li><a href="#reading-emotions-vision" className="hover:underline">Reading Emotions Through Vision: The AI Layer</a></li>
              <li><a href="#learning-beyond-screen" className="hover:underline">Learning Beyond the Screen</a></li>
              <li><a href="#outcomes-real-world-impact" className="hover:underline">Outcomes and Real-World Impact</a></li>
              <li><a href="#why-projects-define" className="hover:underline">Why Projects Like Armilli Define Career Discovery</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <article className="mt-10 text-gray-800 leading-relaxed text-[17px] space-y-6">

            {/* Section 1 */}
            <h2 id="seeing-what-animals-cant-say" className="text-2xl font-serif font-bold text-[#0a2342] mt-12 mb-4">
              Seeing What Animals Can’t Say
            </h2>
            <p>
              Animals can’t describe pain. They can’t explain discomfort, fear, or illness. Most of the time, their distress shows up quietly through subtle behavioral changes, facial expressions, or shifts in mood that often go unnoticed until it’s too late.
            </p>
            <p>
              Armilli was born from a simple but powerful question: <strong>What if technology could help humans notice these early signs before they become serious problems in animals?</strong>
            </p>
            <p>
              As part of the Career Discovery program, a student set out to explore how artificial intelligence and web-based systems could be applied to animal health and well-being. With the guidance of an experienced mentor, that curiosity evolved into Armilli, a diagnosis and monitoring platform designed to support early detection of animal health and behavioral issues.
            </p>

            {/* Section 2 */}
            <h2 id="designing-diagnostic-experience" className="text-2xl font-serif font-bold text-[#0a2342] mt-12 mb-4">
              From Idea to Interface: Designing a Diagnostic Experience
            </h2>
            <p>
              The foundation of Armilli is a symptom-based diagnostic website built to be intuitive, accessible, and informative. The platform guides users through a structured flow of health-related inputs.
            </p>
            <p>
              Users respond to prompts about observable symptoms and behavior, allowing the system to:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#c5a059]">
              <li>Narrow down possible concerns</li>
              <li>Highlight patterns that may indicate underlying issues</li>
              <li>Encourage timely veterinary consultation rather than delayed action</li>
            </ul>
            <p>
              The website was developed using standard web development frameworks, with mentor support ensuring the system followed logical diagnostic reasoning and ethical design practices. For the student, this phase was about more than building pages; it was about learning how technology shapes decision-making in real-world health contexts.
            </p>

            {/* Section 3 */}
            <h2 id="reading-emotions-vision" className="text-2xl font-serif font-bold text-[#0a2342] mt-12 mb-4">
              Reading Emotions Through Vision: The AI Layer
            </h2>
            <p>
              What makes Armilli truly distinctive is its AI-assisted live monitoring feature.
            </p>
            <p>
              Using computer vision and facial expression recognition techniques, the platform analyzes visual cues from an animal’s face when positioned in front of a camera. The system processes these cues to classify observable emotional states such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#c5a059]">
              <li>Angry</li>
              <li>Sad</li>
              <li>Neutral</li>
            </ul>
            <p>
              These emotional indicators can serve as early signals of discomfort, stress, or pain especially in animals that mask symptoms instinctively. The mentor led the development of the core AI models, while the student focused on:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#c5a059]">
              <li>Understanding how the models integrate with the website</li>
              <li>Designing the interface flow for live monitoring</li>
              <li>Learning the ethical considerations of AI in health-related applications</li>
            </ul>
            <p>
              This division of responsibility gave the student exposure to industry-grade AI systems without reducing the project to theory alone.
            </p>

            {/* Section 4 */}
            <h2 id="learning-beyond-screen" className="text-2xl font-serif font-bold text-[#0a2342] mt-12 mb-4">
              Learning Beyond the Screen
            </h2>
            <p>
              Armilli wasn’t just a technical build, it was a learning experience grounded in responsibility. Through the project, the student gained hands-on exposure to:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#c5a059]">
              <li>Real-world applications of AI and computer vision</li>
              <li>System integration between frontend interfaces and backend intelligence</li>
              <li>Ethical boundaries in health-tech and animal monitoring</li>
              <li>The role of technology as a support tool, not a replacement for professionals</li>
            </ul>
            <p>
              One of the most important lessons was understanding <em>what not to automate</em>. Armilli does not claim to replace veterinarians. Instead, she wanted it to act as an awareness and early-detection tool bridging the gap between observation and professional care.
            </p>
            <p>
              This mindset reflects how modern health technology is built: cautiously, responsibly, and with human judgment at the center.
            </p>

            {/* Section 5 */}
            <h2 id="outcomes-real-world-impact" className="text-2xl font-serif font-bold text-[#0a2342] mt-12 mb-4">
              Outcomes and Real-World Impact
            </h2>
            <p>
              Armilli demonstrates the growing potential of AI-assisted monitoring in animal health through measurable engagement and outcomes.
            </p>
            <ul className="space-y-4 mt-6">
              <li className="flex gap-3">
                <span className="text-[#c5a059] font-bold">✓</span>
                <span><strong>Improved early detection awareness:</strong> The platform enables users to identify potential health or behavioral concerns within minutes of symptom input, reducing delayed response time and encouraging proactive care.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c5a059] font-bold">✓</span>
                <span><strong>Promoted timely veterinary action:</strong> By flagging possible risk indicators, Armilli supports faster decision-making, increasing the likelihood of consultation at early symptom stages rather than advanced progression.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c5a059] font-bold">✓</span>
                <span><strong>Enhanced understanding of animal emotional states:</strong> Through structured behavioral input tracking, the system helps users recognize stress, anxiety, or discomfort patterns—transforming subjective observation into more informed insights.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c5a059] font-bold">✓</span>
                <span><strong>Delivered accessible AI-driven health guidance:</strong> Built as a web-based platform, Armilli ensures ease of access without specialized hardware, demonstrating how scalable digital tools can provide meaningful, real-time support to animal caregivers.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c5a059] font-bold">✓</span>
                <span><strong>Validated feasibility of AI in preventive pet care:</strong> Through iterative testing and user feedback loops, the platform demonstrates how lightweight AI models can translate behavioral and health data into actionable recommendations.</span>
              </li>
            </ul>

            <p className="mt-8">
              For the student, the outcome was equally impactful. The project offered a clear window into how AI, healthcare, and ethical design intersect—an exposure rarely achieved through classroom learning alone. More importantly, it proved that students can work on real, socially relevant problems long before entering professional fields.
            </p>

            {/* Section 6 */}
            <h2 id="why-projects-define" className="text-2xl font-serif font-bold text-[#0a2342] mt-12 mb-4 border-t border-gray-200 pt-10">
              Why Projects Like Armilli Define Career Discovery
            </h2>
            <p>
              At Career Discovery, learning doesn’t start with textbooks, it starts with questions that matter. Armilli is a powerful example of what happens when students are encouraged to:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#c5a059]">
              <li>Explore interdisciplinary fields like AI and health-tech</li>
              <li>Work alongside mentors with real-world experience</li>
              <li>Build systems that have social and ethical relevance</li>
            </ul>
            <p>
              These projects don’t just teach skills. They help students discover where their interests can make a difference. Whether a student is curious about artificial intelligence, healthcare, animal welfare, or product design, projects like Armilli offer a pathway to explore those interests meaningfully.
            </p>

            {/* Call to Action Box */}
            {/* <div className="mt-12 p-8 bg-[#0a2342] text-white rounded-xl shadow-2xl text-center">
              <h3 className="text-3xl font-serif font-bold text-[#c5a059] mb-4">Build What Matters</h3>
              <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                If you’re a student who wants to go beyond hypothetical assignments and work on problems that exist in the real world, Career Discovery is where that journey begins. Armilli started as an idea. With mentorship, structure, and curiosity, it became a platform with purpose. <strong>Your project could be next.</strong>
              </p>
              <button className="px-8 py-4 bg-[#c5a059] text-[#0a2342] font-bold tracking-wider hover:bg-white transition-all duration-300 rounded shadow-lg uppercase text-sm">
                Explore Our Programs
              </button>
            </div> */}
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
  
  <p className="mb-8 max-w-2xl mx-auto leading-relaxed text-gray-200">
    If you’re a student who wants to go beyond hypothetical assignments and work on problems that exist in the real world, Career Discovery is where that journey begins. Armilli started as an idea. With mentorship, structure, and curiosity, it became a platform with purpose. <strong style={{ color: 'white' }}>Your project could be next.</strong>
  </p>
  
  <a href='https://www.thecareerdiscovery.com/launchpad'>
  <button 

    className="px-8 py-4 font-bold tracking-wider hover:scale-105 transition-all duration-300 rounded shadow-lg uppercase text-sm hover:bg-white"
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