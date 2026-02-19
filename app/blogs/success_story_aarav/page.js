'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { 
  Rocket, Wrench, Heart, Zap, 
  ArrowRight, Star, Clock, 
  CheckCircle, Puzzle, Lightbulb 
} from 'lucide-react';

const KidsProjectPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(totalScroll / windowHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFDFC] text-slate-800 font-sans selection:bg-violet-200 selection:text-violet-900">
    

      {/* Fun Rainbow Progress Bar */}
      <div className="fixed top-0 left-0 h-2 bg-gradient-to-r from-violet-500 via-pink-500 to-amber-500 z-50 rounded-r-full transition-all duration-300" style={{ width: `${scrollProgress * 100}%` }}></div>

    

      <main className="max-w-5xl mx-auto px-6 py-12">
        
        {/* HERO SECTION: Big, Bold, Colorful */}
        <header className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-violet-200/50 filter blur-[100px] -z-10 opacity-60 rounded-full"></div>
          
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-xs font-black tracking-wider uppercase mb-6 shadow-sm border border-amber-200">
            ✨ Student Spotlight
          </span>
          
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-6">
            From Curiosity to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Creation.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            Meet Aarav. He didn't use fancy electronics. He used <span className="text-violet-600 font-bold">pure physics</span> to build a helping hand. 🦾
          </p>

          {/* Hero Image Card */}
          <div className="mt-12 mx-auto max-w-4xl aspect-video bg-slate-100 rounded-[2rem] border-8 border-white shadow-2xl shadow-violet-100 overflow-hidden relative group">
            {/* Placeholder Image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-white flex flex-col items-center justify-center text-slate-400">
              <Wrench className="w-16 h-16 mb-4 text-slate-300" />
              <span className="font-bold text-lg">Detailed Photo of Aarav's Mechanical Arm</span>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-5 py-3 rounded-2xl shadow-lg border border-white/50 flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-2xl">🤖</div>
               <div>
                 <p className="text-xs text-slate-500 font-bold uppercase">Project Type</p>
                 <p className="font-bold text-slate-800">Mechanical Engineering</p>
               </div>
            </div>
          </div>
        </header>

        {/* STORY BLOCKS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Main Content Column */}
          <article className="md:col-span-8 space-y-12">
            
            {/* Section 1: The Problem */}
            <section>
              <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center"><Heart className="w-6 h-6" /></span>
                The Big Question
              </h2>
              <div className="prose prose-lg text-slate-600 leading-relaxed bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <p>
                  Aarav wasn't trying to win a trophy. He was thinking about people. specifically, people who need prosthetic arms but can't afford the expensive electronic ones.
                </p>
                <p className="font-bold text-slate-800">
                  He asked himself: "Can I build a working arm using only simple mechanics? No batteries. No sensors. Just clever engineering."
                </p>
              </div>
            </section>

            {/* Section 2: The Solution (Cards) */}
            <section>
              <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center"><Lightbulb className="w-6 h-6" /></span>
                The "Aha!" Moment
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-violet-50 to-white p-6 rounded-3xl border border-violet-100">
                  <h3 className="font-bold text-violet-900 text-lg mb-2">Simplicity First</h3>
                  <p className="text-sm text-slate-600">Instead of asking "what can I add?", he asked "what can I take away?"</p>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-3xl border border-amber-100">
                  <h3 className="font-bold text-amber-900 text-lg mb-2">Easy to Fix</h3>
                  <p className="text-sm text-slate-600">If it breaks, you don't need a computer scientist to fix it. Just a screwdriver.</p>
                </div>
              </div>
            </section>

            {/* Section 3: How it works (Visual) */}
            <section className="bg-slate-900 text-white p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-[80px] opacity-20"></div>
              
              <h2 className="text-3xl font-black mb-8 relative z-10">How It Actually Works ⚙️</h2>
              
              <div className="space-y-6 relative z-10">
                {[
                  { title: "Hinged Joints", desc: "Mimics real elbows and fingers.", icon: "💪" },
                  { title: "Invisible Strings", desc: "Tension wires inside the arm pull the fingers closed when the elbow bends.", icon: "🧵" },
                  { title: "The Grip", desc: "Allows the user to hold cups, pens, and small objects.", icon: "✊" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <h3 className="font-bold text-lg text-white">{item.title}</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: What He Learned */}
            <section>
              <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center"><Puzzle className="w-6 h-6" /></span>
                Learning by Doing
              </h2>
              <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100">
                <p className="text-emerald-900 font-medium text-lg mb-6">
                  Aarav didn't have a high-tech lab. He had constraints. And constraints make you creative.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Problem Solving", "Mechanical Design", "Empathy", "Prototyping"].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-white text-emerald-700 font-bold rounded-full text-sm shadow-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </section>

          </article>

          {/* SIDEBAR: Fun & Sticky */}
          <aside className="md:col-span-4 space-y-6">
            
            {/* Quick Stats Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 sticky top-28">
              <h3 className="font-black text-slate-900 text-xl mb-6">Project Stats</h3>
              
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase">Timeline</p>
                    <p className="font-bold text-slate-800">8 Weeks</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase">Difficulty</p>
                    <p className="font-bold text-slate-800">Intermediate</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                    <Star className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase">Impact</p>
                    <p className="font-bold text-slate-800">High Potential</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2">Want to build something?</h4>
                <p className="text-xs text-slate-500 mb-4">Take our fun quiz to find your perfect project!</p>
                <button className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 rounded-xl transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                  Take the Quiz <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </aside>

        </div>

        {/* FOOTER CTA */}
        <section className="mt-20 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl font-black mb-6">Your Turn to Invent! 🚀</h2>
            <p className="text-violet-100 text-lg mb-8">
              You don't need to wait until college to change the world. Start your Career Discovery journey today.
            </p>
            <button className="bg-white text-violet-700 px-10 py-4 rounded-full font-black text-lg hover:shadow-2xl hover:scale-105 transition-all">
              Get Started for Free
            </button>
          </div>
        </section>

      </main>
    </div>
  );
};

export default KidsProjectPage;