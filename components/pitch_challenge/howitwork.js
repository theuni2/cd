// 'use client';

// import { motion } from 'framer-motion';
// import { Video, Sparkles, Send, Award, School, Globe, ArrowRight } from 'lucide-react';

// export default function HowItWorksAndPrizes() {
//   const steps = [
//     {
//       number: '01',
//       icon: <Video size={24} color="#06B6D4" />,
//       title: 'Pick a Big Idea',
//       description:
//         'Choose a complex topic in Physics, Life Sciences, Chemistry, or CS/AI that fascinates you—something you love explaining.',
//       image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
//       imageAlt: 'Student sketching scientific diagrams',
//     },
//     {
//       number: '02',
//       icon: <Sparkles size={24} color="#6366F1" />,
//       title: 'Make a 2-Min Video',
//       description:
//         'Bring it to life using animations, live demonstrations, or creative storytelling. Keep it clear, engaging, and under 120 seconds.',
//       image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
//       imageAlt: 'Video editing software setup',
//     },
//     {
//       number: '03',
//       icon: <Send size={24} color="#F59E0B" />,
//       title: 'Submit & Get Reviewed',
//       description:
//         'Upload your entry through our portal. Top videos will be evaluated by university professors, educators, and science communicators.',
//       image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
//       imageAlt: 'Student submitting research work digitally',
//     },
//   ];

//   const prizes = [
//     {
//       icon: <Award size={28} color="#F59E0B" />,
//       title: '$30,000 Scholarship',
//       sub: 'Directly toward your higher education and university tuition fees',
//       highlight: true,
//       badge: 'Grand Winner',
//       image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
//     },
//     {
//       icon: <School size={28} color="#06B6D4" />,
//       title: '$15,000 School Grant',
//       sub: 'To upgrade science equipment, robotics labs, or STEM facilities',
//       highlight: false,
//       badge: 'School Award',
//       image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
//     },
//     {
//       icon: <Globe size={28} color="#6366F1" />,
//       title: '$5,000 Teacher Award',
//       sub: 'For the inspirational educator who guided and supported your entry',
//       highlight: false,
//       badge: 'Mentor Award',
//       image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
//     },
//   ];

//   return (
//     <section style={styles.wrapper} id="how-it-works">
//       {/* ---------------- SECTION 1: HOW IT WORKS ---------------- */}
//       <div style={styles.container}>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           style={styles.headerBlock}
//         >
//           <span style={styles.sectionLabel}>The Process</span>
//           <h2 style={styles.sectionTitle}>How To Enter in 3 Steps</h2>
//           <p style={styles.sectionDesc}>
//             No expensive cameras or studio gear required. What matters most is how clearly and creatively you communicate your idea.
//           </p>
//         </motion.div>

//         <div style={styles.grid3}>
//           {steps.map((step, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: idx * 0.15 }}
//               style={styles.stepCard}
//             >
//               {/* Card Image Header */}
//               <div style={styles.imageWrap}>
//                 <img src={step.image} alt={step.imageAlt} style={styles.cardImg} />
//                 <div style={styles.imgOverlay} />
//                 <span style={styles.stepNumBadge}>{step.number}</span>
//               </div>

//               <div style={styles.cardContent}>
//                 <div style={styles.titleRow}>
//                   <div style={styles.iconCircle}>{step.icon}</div>
//                   <h3 style={styles.cardTitle}>{step.title}</h3>
//                 </div>
//                 <p style={styles.cardText}>{step.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Divider Line */}
//       <div style={styles.divider} />

//       {/* ---------------- SECTION 2: PRIZE BREAKDOWN ---------------- */}
//       <div style={styles.container} id="prizes">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           style={styles.headerBlock}
//         >
//           <span style={styles.sectionLabelGold}>The Rewards</span>
//           <h2 style={styles.sectionTitle}>$50,000 Total Prize Purse</h2>
//           <p style={styles.sectionDesc}>
//             Winning doesn’t just fund your future—it empowers your teacher and your school’s scientific community too.
//           </p>
//         </motion.div>

//         <div style={styles.grid3}>
//           {prizes.map((prize, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: idx * 0.15 }}
//               style={prize.highlight ? styles.prizeCardGold : styles.prizeCard}
//             >
//               <div style={styles.prizeImageWrap}>
//                 <img src={prize.image} alt={prize.title} style={styles.prizeImg} />
//                 <div style={styles.prizeImgOverlay} />
//                 <span style={prize.highlight ? styles.badgeGold : styles.badgeNormal}>
//                   {prize.badge}
//                 </span>
//               </div>

//               <div style={styles.prizeContent}>
//                 <div style={styles.prizeHeaderRow}>
//                   <div style={styles.prizeIconWrap}>{prize.icon}</div>
//                   <h3 style={styles.prizeAmount}>{prize.title}</h3>
//                 </div>
//                 <p style={styles.prizeSub}>{prize.sub}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA banner at the bottom */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           style={styles.banner}
//         >
//           <div>
//             <h4 style={styles.bannerTitle}>Ready to show the world what you know?</h4>
//             <p style={styles.bannerText}>Submission is completely free for all global and Dubai participants ages 13–18.</p>
//           </div>
//           <a href="#submit" style={styles.bannerBtn}>
//             Start Submission <ArrowRight size={18} />
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// // Inline CSS Stylesheet (No Tailwind Required)
// const styles = {
//   wrapper: {
//     backgroundColor: '#0B0F19',
//     color: '#F9FAFB',
//     padding: '80px 20px',
//     fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//   },
//   container: {
//     maxWidth: '1000px',
//     margin: '0 auto',
//   },
//   headerBlock: {
//     textAlign: 'center',
//     marginBottom: '56px',
//   },
//   sectionLabel: {
//     fontSize: '13px',
//     fontWeight: '700',
//     color: '#06B6D4',
//     textTransform: 'uppercase',
//     letterSpacing: '1.5px',
//     display: 'inline-block',
//     marginBottom: '8px',
//   },
//   sectionLabelGold: {
//     fontSize: '13px',
//     fontWeight: '700',
//     color: '#F59E0B',
//     textTransform: 'uppercase',
//     letterSpacing: '1.5px',
//     display: 'inline-block',
//     marginBottom: '8px',
//   },
//   sectionTitle: {
//     fontSize: 'clamp(2rem, 4vw, 3rem)',
//     fontWeight: '800',
//     margin: '0 0 16px 0',
//     letterSpacing: '-0.5px',
//   },
//   sectionDesc: {
//     fontSize: '17px',
//     color: '#9CA3AF',
//     maxWidth: '600px',
//     margin: '0 auto',
//     lineHeight: '1.6',
//   },
//   grid3: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//     gap: '24px',
//   },
//   stepCard: {
//     backgroundColor: '#161F33',
//     border: '1px solid rgba(255, 255, 255, 0.08)',
//     borderRadius: '18px',
//     overflow: 'hidden',
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   imageWrap: {
//     position: 'relative',
//     height: '160px',
//     width: '100%',
//     overflow: 'hidden',
//   },
//   cardImg: {
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//   },
//   imgOverlay: {
//     position: 'absolute',
//     inset: 0,
//     background: 'linear-gradient(to top, #161F33 5%, transparent 100%)',
//   },
//   stepNumBadge: {
//     position: 'absolute',
//     top: '12px',
//     right: '12px',
//     backgroundColor: 'rgba(11, 15, 25, 0.75)',
//     backdropFilter: 'blur(8px)',
//     color: '#06B6D4',
//     fontSize: '14px',
//     fontWeight: '800',
//     fontFamily: 'monospace',
//     padding: '4px 10px',
//     borderRadius: '8px',
//     border: '1px solid rgba(6, 182, 212, 0.3)',
//   },
//   cardContent: {
//     padding: '24px',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '12px',
//   },
//   titleRow: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//   },
//   iconCircle: {
//     width: '40px',
//     height: '40px',
//     borderRadius: '10px',
//     backgroundColor: 'rgba(255, 255, 255, 0.05)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     border: '1px solid rgba(255, 255, 255, 0.08)',
//     flexShrink: 0,
//   },
//   cardTitle: {
//     fontSize: '18px',
//     fontWeight: '700',
//     margin: '0',
//     color: '#FFFFFF',
//   },
//   cardText: {
//     fontSize: '14px',
//     color: '#9CA3AF',
//     margin: '0',
//     lineHeight: '1.6',
//   },
//   divider: {
//     height: '1px',
//     backgroundColor: 'rgba(255, 255, 255, 0.08)',
//     margin: '80px auto',
//     maxWidth: '1000px',
//   },
//   prizeCard: {
//     backgroundColor: '#161F33',
//     border: '1px solid rgba(255, 255, 255, 0.08)',
//     borderRadius: '18px',
//     overflow: 'hidden',
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   prizeCardGold: {
//     backgroundColor: '#161F33',
//     border: '2px solid #F59E0B',
//     boxShadow: '0 0 25px rgba(245, 158, 11, 0.25)',
//     borderRadius: '18px',
//     overflow: 'hidden',
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   prizeImageWrap: {
//     position: 'relative',
//     height: '150px',
//     width: '100%',
//     overflow: 'hidden',
//   },
//   prizeImg: {
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//   },
//   prizeImgOverlay: {
//     position: 'absolute',
//     inset: 0,
//     background: 'linear-gradient(to top, #161F33 10%, transparent 100%)',
//   },
//   badgeGold: {
//     position: 'absolute',
//     top: '12px',
//     left: '12px',
//     backgroundColor: '#F59E0B',
//     color: '#000000',
//     fontSize: '11px',
//     fontWeight: '800',
//     textTransform: 'uppercase',
//     letterSpacing: '0.8px',
//     padding: '4px 10px',
//     borderRadius: '6px',
//   },
//   badgeNormal: {
//     position: 'absolute',
//     top: '12px',
//     left: '12px',
//     backgroundColor: 'rgba(11, 15, 25, 0.8)',
//     backdropFilter: 'blur(8px)',
//     color: '#FFFFFF',
//     fontSize: '11px',
//     fontWeight: '700',
//     textTransform: 'uppercase',
//     letterSpacing: '0.8px',
//     padding: '4px 10px',
//     borderRadius: '6px',
//     border: '1px solid rgba(255, 255, 255, 0.15)',
//   },
//   prizeContent: {
//     padding: '24px',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '10px',
//   },
//   prizeHeaderRow: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//   },
//   prizeIconWrap: {
//     flexShrink: 0,
//   },
//   prizeAmount: {
//     fontSize: '20px',
//     fontWeight: '800',
//     color: '#FFFFFF',
//     margin: '0',
//   },
//   prizeSub: {
//     fontSize: '13px',
//     color: '#9CA3AF',
//     margin: '0',
//     lineHeight: '1.5',
//   },
//   banner: {
//     marginTop: '56px',
//     padding: '32px 40px',
//     borderRadius: '20px',
//     background: 'linear-gradient(135deg, #161F33 0%, #1E293B 100%)',
//     border: '1px solid rgba(255, 255, 255, 0.12)',
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     gap: '20px',
//   },
//   bannerTitle: {
//     fontSize: '20px',
//     fontWeight: '700',
//     color: '#FFFFFF',
//     margin: '0 0 6px 0',
//   },
//   bannerText: {
//     fontSize: '14px',
//     color: '#9CA3AF',
//     margin: '0',
//   },
//   bannerBtn: {
//     display: 'inline-flex',
//     alignItems: 'center',
//     gap: '8px',
//     padding: '14px 28px',
//     borderRadius: '12px',
//     fontWeight: '700',
//     fontSize: '15px',
//     color: '#FFFFFF',
//     textDecoration: 'none',
//     background: 'linear-gradient(90deg, #6366F1, #06B6D4)',
//     boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
//     whiteSpace: 'nowrap',
//   },
// };


'use client';

import { motion } from 'framer-motion';
import { 
  Video, 
  Sparkles, 
  Send, 
  Trophy, 
  Ribbon, 
  Users, 
  Compass, 
  Mail, 
  FileText, 
  Award, 
  ShieldCheck, 
  ArrowRight,
  Tag
} from 'lucide-react';

export default function HowItWorksAndPrizes() {
  // 3-Step Entry Process
  const steps = [
    {
      number: '01',
      icon: <Video size={22} color="#06B6D4" />,
      title: 'Pick a Core Inquiry',
      description:
        'Select a compelling scientific concept across Chemistry, Earth & Space, CS/AI, or Environmental Sustainability.',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Student sketching scientific diagrams',
    },
    {
      number: '02',
      icon: <Sparkles size={22} color="#6366F1" />,
      title: 'Create Your Presentation',
      description:
        'Deliver your research storytelling through animations, live demonstrations, or clear visual models in under 120 seconds.',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Video editing software setup',
    },
    {
      number: '03',
      icon: <Send size={22} color="#F59E0B" />,
      title: 'Submit & Tag Hashtag',
      description:
        'Publish your video with #ApexDiscovery2026. Top entries will be reviewed by our elite panel of PhDs and educators.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Student submitting research work digitally',
    },
  ];

  // Prize Tiers (Matching Screenshot Card Architecture)
  const prizeTiers = [
    {
      badge: 'SECOND PRIZE',
      badgeStyle: styles.badgeSecond,
      title: 'The Distinction Award',
      value: '$750 Estimated Value',
      valueColor: '#9CA3AF',
      headerIcon: <Ribbon size={24} color="#A855F7" />,
      highlight: false,
      perks: [
        {
          icon: <Compass size={16} color="#06B6D4" />,
          title: 'Personalised Profile Roadmap',
          desc: '1-on-1 strategic roadmap designed with an Education Strategist to elevate your global academic profile.',
        },
        {
          icon: <Award size={16} color="#06B6D4" />,
          title: 'Exclusive Merchandise',
          desc: 'Custom competition-branded winner gear and physical merchandise package delivered directly to you.',
        },
        {
          icon: <ShieldCheck size={16} color="#06B6D4" />,
          title: 'Certificate of Excellence',
          desc: 'An official, verified credential recognizing your high-tier achievement in the global competition.',
        },
      ],
    },
    {
      badge: 'GRAND PRIZE WINNER',
      badgeStyle: styles.badgeGrand,
      title: 'The Laureate Fellowship',
      value: '$1000 Estimated Value',
      valueColor: '#F59E0B',
      headerIcon: <Trophy size={24} color="#F59E0B" />,
      highlight: true,
      perks: [
        {
          icon: <Compass size={16} color="#F59E0B" />,
          title: 'Personalised Founder Roadmap',
          desc: 'Elite 1-on-1 global academic profile architecture designed directly with an agency Founder.',
        },
        {
          icon: <Mail size={16} color="#F59E0B" />,
          title: 'Signed Letter of Commendation',
          desc: 'An official executive recommendation letter detailing your unique research and writing excellence.',
        },
        {
          icon: <FileText size={16} color="#F59E0B" />,
          title: 'Media Coverage & Showcase',
          desc: 'Dedicated press features and public editorial coverage spotlighting your winning entry.',
        },
        {
          icon: <Trophy size={16} color="#F59E0B" />,
          title: 'Championship Trophy & Gear',
          desc: 'A premium physical championship trophy alongside custom, exclusive winner merchandise.',
        },
      ],
    },
    {
      badge: 'THIRD PRIZE',
      badgeStyle: styles.badgeThird,
      title: 'The Honors Award',
      value: '$500 Estimated Value',
      valueColor: '#9CA3AF',
      headerIcon: <Users size={24} color="#06B6D4" />,
      highlight: false,
      perks: [
        {
          icon: <Compass size={16} color="#06B6D4" />,
          title: 'Personalised Profile Roadmap',
          desc: '1-on-1 strategic roadmap designed with an Education Strategist to maximize college profile trajectory.',
        },
        {
          icon: <ShieldCheck size={16} color="#06B6D4" />,
          title: 'Official Winner Certificate',
          desc: 'A formal, high-impact credential of achievement to anchor your college applications and resumes.',
        },
      ],
    },
  ];

  return (
    <section style={styles.wrapper} id="how-it-works">
      
      {/* ---------------- SECTION 1: HOW IT WORKS ---------------- */}
      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={styles.headerBlock}
        >
          <span style={styles.sectionLabel}>The Process</span>
          <h2 style={styles.sectionTitle}>How To Enter in 3 Steps</h2>
          <p style={styles.sectionDesc}>
            No complex studio gear required. What matters most is how clearly and analytically you demystify your chosen scientific concept.
          </p>
        </motion.div>

        <div style={styles.grid3}>
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              style={styles.stepCard}
            >
              <div style={styles.imageWrap}>
                <img src={step.image} alt={step.imageAlt} style={styles.cardImg} />
                <div style={styles.imgOverlay} />
                <span style={styles.stepNumBadge}>{step.number}</span>
              </div>

              <div style={styles.cardContent}>
                <div style={styles.titleRow}>
                  <div style={styles.iconCircle}>{step.icon}</div>
                  <h3 style={styles.cardTitle}>{step.title}</h3>
                </div>
                <p style={styles.cardText}>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section Divider Line */}
      <div style={styles.divider} />

      {/* ---------------- SECTION 2: REWARD TIERS (SCREENSHOT STYLE) ---------------- */}
      <div style={styles.container} id="prizes">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={styles.headerBlock}
        >
          <span style={styles.sectionLabelGold}>The Rewards</span>
          <h2 style={styles.sectionTitle}>Recognition & Mentorship Ecosystem</h2>
          <p style={styles.sectionDesc}>
            Every tier is engineered to give your academic profile tangible proof of distinction, publication reach, and expert guidance.
          </p>
        </motion.div>

        {/* 3-Column Prize Card Grid */}
        <div style={styles.prizeGrid}>
          {prizeTiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              style={tier.highlight ? styles.prizeCardGrand : styles.prizeCardStandard}
            >
              {/* Badge */}
              <div>
                <span style={tier.badgeStyle}>{tier.badge}</span>
              </div>

              {/* Title & Header Icon */}
              <div style={styles.prizeHeaderRow}>
                <h3 style={styles.tierTitle}>{tier.title}</h3>
                <div>{tier.headerIcon}</div>
              </div>

              {/* Estimated Value Callout */}
              <p style={{ ...styles.estimatedValue, color: tier.valueColor }}>
                {tier.value}
              </p>

              <div style={styles.prizeInnerDivider} />

              {/* Perk List */}
              <div style={styles.perksList}>
                {tier.perks.map((perk, pIdx) => (
                  <div key={pIdx} style={styles.perkItem}>
                    <div style={styles.perkIconWrap}>{perk.icon}</div>
                    <div style={styles.perkTextGroup}>
                      <h4 style={styles.perkTitle}>{perk.title}</h4>
                      <p style={styles.perkDesc}>{perk.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mandatory Hashtag Reminder Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={styles.hashtagNoticeBar}
        >
          <Tag size={18} color="#F59E0B" />
          <span>
            <strong>Public Upload Guideline:</strong> Ensure your video or paper upload includes{' '}
            <code style={styles.codeHighlight}>#ApexDiscovery2026</code> to be indexed for judging.
          </span>
        </motion.div>

        {/* Bottom Call to Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={styles.banner}
        >
          <div>
            <h4 style={styles.bannerTitle}>Ready to elevate your academic trajectory?</h4>
            <p style={styles.bannerText}>Submissions are open for students ages 13–18 globally.</p>
          </div>
<<<<<<< HEAD
          <a href="/submit" style={styles.bannerBtn}>
=======
          <a href="#submit" style={styles.bannerBtn}>
>>>>>>> 4c6c84e2b7e1f70877b0c46d7da4ac3117a7511d
            Enter the Challenge <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Inline CSS Stylesheet
const styles = {
  wrapper: {
    backgroundColor: '#0B0F19',
    color: '#F9FAFB',
    padding: '80px 20px',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  container: {
    maxWidth: '1040px',
    margin: '0 auto',
  },
  headerBlock: {
    textAlign: 'center',
    marginBottom: '56px',
  },
  sectionLabel: {
    fontSize: '12px',
    fontWeight: '700',
    color: '#06B6D4',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    display: 'inline-block',
    marginBottom: '8px',
  },
  sectionLabelGold: {
    fontSize: '12px',
    fontWeight: '700',
    color: '#F59E0B',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    display: 'inline-block',
    marginBottom: '8px',
  },
  sectionTitle: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: '800',
    margin: '0 0 16px 0',
    letterSpacing: '-0.5px',
  },
  sectionDesc: {
    fontSize: '16px',
    color: '#9CA3AF',
    maxWidth: '620px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  grid3: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
  },
  stepCard: {
    backgroundColor: '#121826',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '18px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  imageWrap: {
    position: 'relative',
    height: '160px',
    width: '100%',
    overflow: 'hidden',
  },
  cardImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  imgOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, #121826 5%, transparent 100%)',
  },
  stepNumBadge: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    backgroundColor: 'rgba(11, 15, 25, 0.75)',
    backdropFilter: 'blur(8px)',
    color: '#06B6D4',
    fontSize: '13px',
    fontWeight: '800',
    fontFamily: 'monospace',
    padding: '4px 10px',
    borderRadius: '8px',
    border: '1px solid rgba(6, 182, 212, 0.3)',
  },
  cardContent: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  titleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  iconCircle: {
    width: '38px',
    height: '38px',
    borderRadius: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    flexShrink: 0,
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: '700',
    margin: '0',
    color: '#FFFFFF',
  },
  cardText: {
    fontSize: '14px',
    color: '#9CA3AF',
    margin: '0',
    lineHeight: '1.6',
  },
  divider: {
    height: '1px',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    margin: '80px auto',
    maxWidth: '1040px',
  },

  /* PRIZE GRID STYLES (Based on reference screenshot) */
  prizeGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    alignItems: 'stretch',
  },
  prizeCardStandard: {
    backgroundColor: '#0D111A',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '24px',
    padding: '32px 28px',
    display: 'flex',
    flexDirection: 'column',
  },
  prizeCardGrand: {
    backgroundColor: '#0F1522',
    border: '1px solid rgba(245, 158, 11, 0.3)',
    boxShadow: '0 0 30px rgba(245, 158, 11, 0.08)',
    borderRadius: '24px',
    padding: '32px 28px',
    display: 'flex',
    flexDirection: 'column',
  },
  badgeSecond: {
    display: 'inline-block',
    fontSize: '11px',
    fontWeight: '800',
    letterSpacing: '0.8px',
    color: '#C084FC',
    backgroundColor: 'rgba(168, 85, 247, 0.12)',
    padding: '6px 12px',
    borderRadius: '9999px',
    marginBottom: '20px',
  },
  badgeGrand: {
    display: 'inline-block',
    fontSize: '11px',
    fontWeight: '800',
    letterSpacing: '0.8px',
    color: '#F59E0B',
    backgroundColor: 'rgba(245, 158, 11, 0.12)',
    padding: '6px 12px',
    borderRadius: '9999px',
    marginBottom: '20px',
  },
  badgeThird: {
    display: 'inline-block',
    fontSize: '11px',
    fontWeight: '800',
    letterSpacing: '0.8px',
    color: '#38BDF8',
    backgroundColor: 'rgba(56, 189, 248, 0.12)',
    padding: '6px 12px',
    borderRadius: '9999px',
    marginBottom: '20px',
  },
  prizeHeaderRow: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '12px',
  },
  tierTitle: {
    fontSize: '24px',
    fontWeight: '800',
    color: '#FFFFFF',
    margin: '0',
    lineHeight: '1.25',
  },
  estimatedValue: {
    fontSize: '14px',
    fontWeight: '700',
    marginTop: '10px',
    marginBottom: '20px',
  },
  prizeInnerDivider: {
    height: '1px',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    marginBottom: '24px',
  },
  perksList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  perkItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '14px',
  },
  perkIconWrap: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    marginTop: '2px',
  },
  perkTextGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  perkTitle: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#FFFFFF',
    margin: '0',
  },
  perkDesc: {
    fontSize: '13px',
    color: '#9CA3AF',
    margin: '0',
    lineHeight: '1.5',
  },
  hashtagNoticeBar: {
    marginTop: '40px',
    padding: '14px 20px',
    borderRadius: '12px',
    backgroundColor: 'rgba(245, 158, 11, 0.08)',
    border: '1px solid rgba(245, 158, 11, 0.2)',
    color: '#E5E7EB',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    textAlign: 'center',
  },
  codeHighlight: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#F59E0B',
    padding: '2px 6px',
    borderRadius: '4px',
    fontFamily: 'monospace',
    fontWeight: '700',
  },
  banner: {
    marginTop: '32px',
    padding: '32px 40px',
    borderRadius: '20px',
    background: 'linear-gradient(135deg, #121826 0%, #1E293B 100%)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '20px',
  },
  bannerTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#FFFFFF',
    margin: '0 0 6px 0',
  },
  bannerText: {
    fontSize: '14px',
    color: '#9CA3AF',
    margin: '0',
  },
  bannerBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '14px 28px',
    borderRadius: '12px',
    fontWeight: '700',
    fontSize: '15px',
    color: '#FFFFFF',
    textDecoration: 'none',
    background: 'linear-gradient(90deg, #6366F1, #06B6D4)',
    boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
    whiteSpace: 'nowrap',
  },
};