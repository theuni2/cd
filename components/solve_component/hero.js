// "use client";

// import React from 'react';
// import { motion } from 'framer-motion';

// export default function SolveHero() {
//   // Fade-in animation variants for staggered loading
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (custom) => ({
//       opacity: 1,
//       y: 0,
//       transition: { 
//         duration: 0.8, 
//         delay: custom * 0.15, 
//         ease: [0.215, 0.61, 0.355, 1] 
//       }
//     })
//   };

//   return (
//     <section className="relative min-h-screen w-full bg-[#030712] overflow-hidden flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      
//       {/* Premium Background Ambient Glows */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none z-0">
//         <div className="absolute top-[-10%] left-[10%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-blue-600/10 blur-[80px] sm:blur-[120px]" />
//         <div className="absolute bottom-[20%] right-[5%] w-[250px] h-[250px] sm:w-[450px] sm:h-[450px] rounded-full bg-emerald-500/10 blur-[80px] sm:blur-[120px]" />
//       </div>

//       {/* Subtle Grid Overlay */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

//       {/* Main Content Container */}
//       <div className="relative w-full max-w-5xl mx-auto text-center z-10 flex flex-col items-center">
        
//         {/* Top Notification Pill */}
//         <motion.div 
//           custom={0}
//           initial="hidden"
//           animate="visible"
//           variants={fadeInUp}
//           className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-900/80 border border-gray-800 backdrop-blur-md mb-6 sm:mb-8 text-xs sm:text-sm font-medium tracking-wide text-gray-300"
//         >
//           <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
//           <span>Applications Now Open for Year 1</span>
//         </motion.div>

//         {/* Main Title Block */}
//         <motion.h1 
//           custom={1}
//           initial="hidden"
//           animate="visible"
//           variants={fadeInUp}
//           className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 uppercase"
//         >
//           SOLVE
//         </motion.h1>

//         {/* Sub-Headline / Positioning Statement */}
//         <motion.p 
//           custom={2}
//           initial="hidden"
//           animate="visible"
//           variants={fadeInUp}
//           className="text-lg sm:text-xl md:text-2xl font-light text-gray-400 max-w-3xl leading-relaxed tracking-wide"
//         >
//           A global youth competition pitching innovative <span className="text-blue-400 font-medium">technology</span> and <span className="text-emerald-400 font-medium">social impact</span> ideas to solve real-world challenges.
//         </motion.p>

//         {/* Dual Track Badges */}
//         <motion.div 
//           custom={3}
//           initial="hidden"
//           animate="visible"
//           variants={fadeInUp}
//           className="flex flex-wrap justify-center gap-3 mt-8 mb-12 max-w-xl"
//         >
//           <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-950/40 to-blue-900/20 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-semibold tracking-wider uppercase">
//             // Tech Innovation
//           </div>
//           <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-950/40 to-emerald-900/20 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold tracking-wider uppercase">
//             // Social Impact
//           </div>
//         </motion.div>

//         {/* Call To Actions */}
//         <motion.div 
//           custom={4}
//           initial="hidden"
//           animate="visible"
//           variants={fadeInUp}
//           className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
//         >
//           <button className="relative group overflow-hidden px-8 py-4 w-full sm:w-64 rounded-xl bg-white text-black font-semibold tracking-wide transition-all duration-300 hover:bg-neutral-200 active:scale-98 shadow-lg shadow-white/5">
//             Submit Your Idea
//           </button>
          
//           <button className="px-8 py-4 w-full sm:w-64 rounded-xl bg-transparent border border-gray-800 text-gray-300 font-medium tracking-wide transition-all duration-300 hover:bg-gray-900 hover:border-gray-700 active:scale-98">
//             View Guidelines
//           </button>
//         </motion.div>

//         {/* Quick Meta Stats */}
//         <motion.div 
//           custom={5}
//           initial="hidden"
//           animate="visible"
//           variants={fadeInUp}
//           className="grid grid-cols-3 gap-4 sm:gap-12 mt-16 sm:mt-24 pt-8 border-t border-gray-900 w-full max-w-3xl text-center"
//         >
//           <div>
//             <p className="text-gray-500 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-1">Target Age</p>
//             <p className="text-white text-base sm:text-xl font-semibold">14—18 Years</p>
//           </div>
//           <div>
//             <p className="text-gray-500 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-1">Format</p>
//             <p className="text-white text-base sm:text-xl font-semibold">Solo / Team</p>
//           </div>
//           <div>
//             <p className="text-gray-500 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-1">Initial Phase</p>
//             <p className="text-white text-base sm:text-xl font-semibold">Pitch Deck + Video</p>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function SolveHeroUltraPremium() {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef(null);

  // Parallax Mouse Tracking for the Main Image Frame
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  useEffect(() => {
    setMounted(true);
    
    // Interactive Canvas Background Particles Simulation
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = [];
    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.2
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96, 165, 250, ${p.alpha})`;
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(drawParticles);
    };
    drawParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (!mounted) return null;

  const styles = {
    section: {
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#02040a',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '140px 24px 100px 24px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      boxSizing: 'border-box'
    },
    gridOverlay: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.015) 1px, transparent 1px)',
      backgroundSize: '4rem 4rem',
      maskImage: 'radial-gradient(circle at 50% 40%, black 40%, transparent 80%)',
      WebkitMaskImage: 'radial-gradient(circle at 50% 40%, black 40%, transparent 80%)',
      pointerEvents: 'none'
    },
    container: {
      width: '100%',
      maxWidth: '1200px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '64px',
      alignItems: 'center',
      position: 'relative',
      zIndex: 10
    },
    textSide: {
      textAlign: 'left',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
    pill: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '6px 14px',
      borderRadius: '9999px',
      backgroundColor: 'rgba(17, 24, 39, 0.6)',
      border: '1px solid rgba(55, 65, 81, 0.5)',
      fontSize: '11px',
      fontFamily: 'monospace',
      color: '#34d399',
      marginBottom: '28px',
      backdropFilter: 'blur(8px)'
    },
    h1: {
      fontSize: 'clamp(2.5rem, 6vw, 5rem)',
      fontWeight: 900,
      letterSpacing: '-0.02em',
      lineHeight: 1.1,
      margin: '0 0 24px 0',
      background: 'linear-gradient(to bottom, #ffffff 60%, #9ca3af)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    p: {
      fontSize: 'clamp(1rem, 2vw, 1.2rem)',
      fontWeight: 300,
      color: '#9ca3af',
      lineHeight: 1.6,
      margin: '0 0 40px 0'
    },
    btnGroup: {
      display: 'flex',
      gap: '16px',
      width: '100%',
      flexWrap: 'wrap'
    },
    btnPrimary: {
      padding: '14px 32px',
      borderRadius: '12px',
      backgroundColor: '#ffffff',
      color: '#000000',
      fontWeight: 700,
      fontSize: '14px',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 0 30px rgba(255,255,255,0.1)'
    },
    btnSecondary: {
      padding: '14px 32px',
      borderRadius: '12px',
      backgroundColor: 'transparent',
      color: '#ffffff',
      fontWeight: 600,
      fontSize: '14px',
      border: '1px solid #27272a',
      cursor: 'pointer'
    },
    /* Interactive Image Container Frame */
    imageWrapper: {
      width: '100%',
      perspective: '1000px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    imageCard: {
      width: '100%',
      maxWidth: '480px',
      aspectRatio: '4/5',
      borderRadius: '24px',
      position: 'relative',
      overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.08)',
      backgroundColor: '#090d16',
      boxShadow: '0 50px 100px -20px rgba(0,0,0,0.7)',
      transformStyle: 'preserve-3d'
    },
    imgElement: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.75,
      transition: 'scale 0.5s ease'
    },
    imageGlassOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, #02040a 5%, rgba(2,4,10,0.4) 40%, transparent 100%)',
      zIndex: 2
    },
    imageContent: {
      position: 'absolute',
      bottom: '32px',
      left: '32px',
      right: '32px',
      zIndex: 3,
      textAlign: 'left',
      transform: 'translateZ(40px)' // Pops text forward out of the screen
    }
  };

  return (
    <section style={styles.section}>
      {/* Dynamic Background Effects */}
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }} />
      <div style={styles.gridOverlay} />
      <div style={{ position: 'absolute', top: '10%', left: '40%', width: '400px', height: '400px', borderRadius: '50%', backgroundColor: 'rgba(59, 130, 246, 0.08)', filter: 'blur(120px)', pointerEvents: 'none', zIndex: 1 }} />

      <div style={styles.container}>
        
        {/* LEFT COL: RICH TEXT ARCHITECTURE */}
        <div style={styles.textSide}>
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={styles.pill}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#34d399', boxShadow: '0 0 8px #34d399' }} />
            <span>GLOBAL YOUTH INNOVATION HUB</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={styles.h1}
          >
            SOLVE THE FUTURE.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={styles.p}
          >
            A high-conviction international platform for innovators aged 14—18. Pitch transformative tech models or framework-driven social impact blueprints to scale real-world problem solutions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={styles.btnGroup}
          >
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} style={styles.btnPrimary}>
              Submit Pitch Frame
            </motion.button>
            <motion.button whileHover={{ scale: 1.03, borderColor: '#4b5563' }} whileTap={{ scale: 0.98 }} style={styles.btnSecondary}>
              System Guide
            </motion.button>
          </motion.div>
        </div>

        {/* RIGHT COL: 3D PARALLAX IMAGE COMPONENT */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={styles.imageWrapper}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div 
            style={{ 
              ...styles.imageCard, 
              rotateX: rotateX, 
              rotateY: rotateY 
            }}
          >
            <div style={styles.imageGlassOverlay} />
            
            {/* Real Unsplash Premium Cinematic Image Base */}
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=cover" 
              alt="Global Youth Collaboration" 
              style={styles.imgElement}
              className="hero-card-img"
            />

            {/* Embedded Floating Metrics Overlay */}
            <div style={styles.imageContent}>
              <span style={{ fontSize: '10px', fontFamily: 'monospace', color: '#60a5fa', fontWeight: 'bold', trackingSpacing: '0.1em' }}>
                // COHORT_YEAR_01
              </span>
              <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#ffffff', margin: '6px 0 12px 0', trackingTight: '-0.01em' }}>
                Where Impact Meets Tech
              </h3>
              <div style={{ display: 'flex', gap: '24px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '12px' }}>
                <div>
                  <div style={{ fontSize: '10px', color: '#4b5563', fontWeight: 'bold', textTransform: 'uppercase' }}>Target Pool</div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#ffffff' }}>500-2000+</div>
                </div>
                <div>
                  <div style={{ fontSize: '10px', color: '#4b5563', fontWeight: 'bold', textTransform: 'uppercase' }}>Entry Fee</div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#34d399' }}>0.00 Free</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}