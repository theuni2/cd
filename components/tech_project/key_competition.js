import React from 'react';
import { CalendarDays, Hourglass, ArrowRight } from 'lucide-react';

const CompetitionsTimeline = () => {
const competitions = [
  {
    name: 'Regeneron ISEF',
    logoSrc: 'https://images.squarespace-cdn.com/content/v1/61e9374e0434354049a258f9/eebb55ad-8f0d-47d4-8b3c-f0a949cd3ba4/ISEF.png',
    reg: 'Affiliated Fair Season (Oct – Feb)',
    deadline: 'Varies by Region (Typically March)',
    status: 'high-stakes',
    description: 'The world\'s largest pre-college STEM competition.'
  },
  {
    name: 'IRIS National Fair',
    logoSrc: 'https://tse3.mm.bing.net/th/id/OIP.FETzVZU169fp3kW_lKCyngHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3',
    reg: 'Open June – August',
    deadline: 'October 2026 (Expected)',
    status: 'regional-major',
    description: 'India\'s premier research-based science fair for students.'
  },
  {
    name: 'Google Science Fair',
    logoSrc: 'https://www.phosphore.com/wp-content/uploads/2016/04/Google-Science-Fair.jpg',
    reg: 'Currently On Hiatus',
    deadline: 'TBD (Check Official Site)',
    status: 'hiatus',
    description: 'Global online competition for young scientists and engineers.'
  }
];

  return (
    <section style={{ padding: '96px 24px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header Section */}
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '64px', gap: '24px' }}>
          <div style={{ maxWidth: '600px' }}>
            <h2 style={{ 
              fontSize: '48px', 
              fontWeight: '900', 
              color: '#011B3E', 
              lineHeight: '1.1', 
              textTransform: 'uppercase', 
              margin: 0,
              letterSpacing: '-2px'
            }}>
              Competitions <br /> 
              <span style={{ 
                background: 'linear-gradient(90deg, #011B3E, #012E6A, #011B3E)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Covered & Deadlines
              </span>
            </h2>
            <div style={{ width: '80px', height: '8px', backgroundColor: '#FFD700', marginTop: '16px', borderRadius: '10px' }}></div>
          </div>
          
          <div style={{ 
            alignSelf: 'flex-start',
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px', 
            backgroundColor: '#011B3E', 
            color: '#ffffff', 
            padding: '12px 20px', 
            borderRadius: '12px', 
            fontWeight: 'bold', 
            fontSize: '14px', 
            textTransform: 'uppercase',
            boxShadow: '0 10px 15px -3px rgba(1, 27, 62, 0.3)'
          }}>
            <CalendarDays size={20} color="#FFD700" /> Cycle Dashboard
          </div>
        </div>

        {/* The Grid Hub */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
          gap: '32px' 
        }}>
          {competitions.map((item, index) => (
            <div 
              key={index}
              style={{ 
                position: 'relative', 
                backgroundColor: 'rgba(255, 255, 255, 0.6)', 
                padding: '32px', 
                borderRadius: '32px', 
                border: '1px solid #f3f4f6', 
                display: 'flex', 
                flexDirection: 'column',
                boxShadow: '0 15px 40px rgba(0,0,0,0.04)',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Index Badge */}
              <div style={{ 
                position: 'absolute', 
                top: '-16px', 
                left: '-16px', 
                width: '48px', 
                height: '48px', 
                borderRadius: '50%', 
                backgroundColor: '#011B3E', 
                color: '#ffffff', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontWeight: '900', 
                fontSize: '18px', 
                border: '4px solid #ffffff'
              }}>
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Logo Box */}
              <div style={{ 
                backgroundColor: '#F9FAFB', 
                borderRadius: '16px', 
                height: '96px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: '32px',
                padding: '16px'
              }}>
                <img src={item.logoSrc} alt={item.name} style={{ maxHeight: '64px', maxWidth: '100%', objectFit: 'contain' }} />
              </div>

              {/* Deadline Details */}
              <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ padding: '8px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
                    <Hourglass size={16} color="#011B3E" />
                  </div>
                  <div>
                    <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1px' }}>Registration</span>
                    <p style={{ fontSize: '16px', fontWeight: '700', color: '#011B3E', margin: 0 }}>{item.reg}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ padding: '8px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
                    <CalendarDays size={16} color="#011B3E" />
                  </div>
                  <div>
                    <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1px' }}>Application Deadline</span>
                    <p style={{ fontSize: '16px', fontWeight: '800', color: '#011B3E', margin: 0 }}>{item.deadline}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Banner */}
        <div style={{ 
          marginTop: '64px', 
          backgroundColor: '#011B3E', 
          borderRadius: '32px', 
          padding: '40px', 
          color: '#ffffff', 
          position: 'relative', 
          overflow: 'hidden' 
        }}>
          {/* Decorative Circle */}
          <div style={{ 
            position: 'absolute', 
            top: '-80px', 
            right: '-80px', 
            width: '256px', 
            height: '256px', 
            backgroundColor: '#FFD700', 
            opacity: '0.1', 
            borderRadius: '50%' 
          }}></div>
          
          <p style={{ 
            position: 'relative', 
            zIndex: 1, 
            fontSize: '20px', 
            fontWeight: '500', 
            lineHeight: '1.6', 
            maxWidth: '900px', 
            fontStyle: 'italic',
            margin: 0
          }}>
            There are several <span style={{ color: '#FFD700', fontWeight: '800' }}>additional competitions and awards</span> we can explore; we'll discuss these in detail during your strategy call based on your interests.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CompetitionsTimeline;