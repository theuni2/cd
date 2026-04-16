'use client'; // This directive is CRITICAL to fix the error

import React from 'react';
import { Calendar, Timer, Award } from 'lucide-react';

const CompetitionDeadlines = () => {
  const competitions = [
    // {
    //   name: "Blue Ocean Competition",
    //   deadline: "22 Feb 2026", //
    //   reg: "Open for 2027", //
    //   type: "Business"
    // },
    // {
    //   name: "Conrad Challenge",
    //   deadline: "Nov 2026 (Expected)", //
    //   reg: "Aug – Sep 2026", //
    //   type: "Innovation"
    // },
    {
      name: "John Locke Institute",
      deadline: "30 June 2026", //
      reg: "Deadline: 31 May 2026", //
      type: "Essay"
    },
    {
      name: "Harvard Int. Review (HIR)",
      deadline: "2 Jan 2027 (Fall)", //
      reg: "Rolling Cycles", //
      type: "Research"
    },
    {
      name: "Queen's Commonwealth",
      deadline: "23 May 2026", //
      reg: "Open Now",
      type: "Essay"
    },
    // {
    //   name: "Cambridge (CCIR)",
    //   deadline: "10 May 2026", //
    //   reg: "Opens 15 Jan 2026", //
    //   type: "Research"
    // }
  ];

  return (
    <section style={{ 
      backgroundColor: '#0f172a', 
      padding: '100px 20px', 
      fontFamily: 'sans-serif',
      color: '#ffffff' 
    }}>
      <style>{`
        .comp-card {
          background-color: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(251, 191, 36, 0.2);
          border-radius: 24px;
          padding: 30px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .comp-card:hover {
          transform: translateY(-5px);
          border-color: #fbbf24;
          background-color: rgba(255, 255, 255, 0.05);
          box-shadow: 0 10px 30px -10px rgba(251, 191, 36, 0.2);
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '900', textTransform: 'uppercase', margin: '0 0 16px 0' }}>
            Competition <span style={{ color: '#fbbf24' }}>Deadlines</span>
          </h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: '#fbbf24', margin: '0 auto' }}></div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '24px' 
        }}>
          {competitions.map((comp, index) => (
            <div key={index} className="comp-card">
              <div style={{ 
                display: 'inline-block', 
                padding: '4px 12px', 
                borderRadius: '100px', 
                backgroundColor: 'rgba(251, 191, 36, 0.1)', 
                color: '#fbbf24', 
                fontSize: '11px', 
                fontWeight: 'bold', 
                marginBottom: '20px' 
              }}>
                {comp.type}
              </div>

              <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '24px' }}>{comp.name}</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Timer size={18} color="#fbbf24" />
                  <div>
                    <p style={{ fontSize: '11px', color: '#94a3b8', margin: 0 }}>SUBMISSION DEADLINE</p>
                    <p style={{ fontSize: '15px', fontWeight: 'bold', margin: 0 }}>{comp.deadline}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Calendar size={18} color="#fbbf24" />
                  <div>
                    <p style={{ fontSize: '11px', color: '#94a3b8', margin: 0 }}>REGISTRATION</p>
                    <p style={{ fontSize: '15px', fontWeight: '600', margin: 0, color: '#cbd5e1' }}>{comp.reg}</p>
                  </div>
                </div>
              </div>

              <Award size={80} style={{ 
                position: 'absolute', 
                bottom: '-20px', 
                right: '-20px', 
                opacity: 0.05, 
                color: '#fbbf24' 
              }} />
            </div>
          ))}
        </div>

        <div style={{ 
          marginTop: '60px', 
          textAlign: 'center', 
          padding: '30px', 
          borderRadius: '24px', 
          border: '1px dashed rgba(251, 191, 36, 0.3)',
          color: '#cbd5e1',
          fontStyle: 'italic'
        }}>
          We also enable access to a wider range of competitions beyond these.
        </div>
      </div>
    </section>
  );
};

export default CompetitionDeadlines;