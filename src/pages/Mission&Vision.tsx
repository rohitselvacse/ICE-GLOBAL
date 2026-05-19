// import { FloatingNavbar } from "@/components/ui/floating-navbar";
// import { useState } from "react";

// const styles = `
//   @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

//   :root {
//     --ice-navy: #0B1F3A;
//     --ice-deep: #071428;
//     --ice-gold: #C9943A;
//     --ice-gold-light: #E8B96A;
//     --ice-gold-pale: #F5E5C0;
//     --ice-saffron: #E8600A;
//     --ice-cream: #FAF6EE;
//     --ice-muted: #6B7280;
//     --ice-border: rgba(201,148,58,0.25);
//   }

//   * { box-sizing: border-box; margin: 0; padding: 0; }

//   body {
//     font-family: 'DM Sans', sans-serif;
//     background: var(--ice-cream);
//     color: var(--ice-navy);
//     line-height: 1.6;
//   }

//   .page-wrap {
//     max-width: 1200px;
//     margin: 0 auto;
//     padding: 0 2rem;
//   }

//   /* NAV */
//   .nav {
//     background: var(--ice-navy);
//     padding: 1.25rem 2rem;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     position: sticky;
//     top: 0;
//     z-index: 100;
//     border-bottom: 1px solid var(--ice-border);
//   }
//   .nav-logo {
//     font-family: 'Playfair Display', serif;
//     font-size: 1.5rem;
//     font-weight: 900;
//     color: var(--ice-gold);
//     letter-spacing: 0.04em;
//   }
//   .nav-logo span { color: #fff; font-weight: 400; }
//   .nav-tag {
//     font-size: 0.7rem;
//     color: var(--ice-gold-light);
//     letter-spacing: 0.2em;
//     text-transform: uppercase;
//     font-family: 'DM Mono', monospace;
//   }

//   /* SECTION 1 — HERO */
//   .hero {
//     background: var(--ice-navy);
//     padding: 7rem 2rem 6rem;
//     text-align: center;
//     position: relative;
//     overflow: hidden;
//   }
//   .hero::before {
//     content: '';
//     position: absolute;
//     top: 0; left: 0; right: 0; bottom: 0;
//     background: repeating-linear-gradient(
//       90deg,
//       transparent,
//       transparent 79px,
//       rgba(201,148,58,0.04) 79px,
//       rgba(201,148,58,0.04) 80px
//     );
//     pointer-events: none;
//   }
//   .section-label {
//     font-family: 'DM Mono', monospace;
//     font-size: 0.68rem;
//     letter-spacing: 0.25em;
//     text-transform: uppercase;
//     color: var(--ice-gold);
//     margin-bottom: 1.5rem;
//     display: inline-block;
//   }
//   .hero-label { color: var(--ice-gold-light); }
//   .hero h1 {
//     font-family: 'Playfair Display', serif;
//     font-size: clamp(2.2rem, 5vw, 3.8rem);
//     font-weight: 900;
//     color: #fff;
//     line-height: 1.15;
//     max-width: 900px;
//     margin: 0 auto 1.75rem;
//   }
//   .hero h1 em {
//     font-style: italic;
//     color: var(--ice-gold-light);
//   }
//   .hero-sub {
//     font-size: 1.1rem;
//     color: rgba(255,255,255,0.6);
//     max-width: 600px;
//     margin: 0 auto;
//     line-height: 1.75;
//     font-weight: 300;
//   }
//   .hero-rule {
//     width: 48px;
//     height: 2px;
//     background: var(--ice-gold);
//     margin: 2rem auto 0;
//   }

//   /* SECTIONS SHARED */
//   section {
//     padding: 5rem 0;
//   }
//   section + section {
//     border-top: 1px solid rgba(11,31,58,0.08);
//   }
//   .section-heading {
//     font-family: 'Playfair Display', serif;
//     font-size: clamp(1.6rem, 3vw, 2.4rem);
//     font-weight: 700;
//     color: var(--ice-navy);
//     line-height: 1.2;
//     margin-bottom: 2.5rem;
//   }

//   /* SECTION 2 & 3 — MISSION / VISION CARDS */
//   .statement-card {
//     background: #fff;
//     border-radius: 2px;
//     padding: 3rem 3.5rem;
//     border-left: 5px solid var(--ice-gold);
//     box-shadow: 0 1px 3px rgba(11,31,58,0.06);
//     margin-bottom: 2rem;
//   }
//   .statement-card.vision {
//     border-left-color: var(--ice-saffron);
//     background: var(--ice-navy);
//   }
//   .statement-card.vision .card-label,
//   .statement-card.vision .card-h2,
//   .statement-card.vision .card-body { color: #fff; }
//   .statement-card.vision .card-label { color: var(--ice-saffron); }
//   .statement-card.vision .card-h2 { color: var(--ice-gold-light); }
//   .card-label {
//     font-family: 'DM Mono', monospace;
//     font-size: 0.65rem;
//     letter-spacing: 0.25em;
//     text-transform: uppercase;
//     color: var(--ice-gold);
//     margin-bottom: 1rem;
//   }
//   .card-h2 {
//     font-family: 'Playfair Display', serif;
//     font-size: 1.75rem;
//     font-weight: 700;
//     color: var(--ice-navy);
//     line-height: 1.25;
//     margin-bottom: 1.25rem;
//   }
//   .card-body {
//     font-size: 1.05rem;
//     color: var(--ice-muted);
//     line-height: 1.85;
//     max-width: 820px;
//   }
//   .statement-card.vision .card-body { color: rgba(255,255,255,0.7); }

//   /* SECTION 4 — VALUES */
//   .values-section { background: var(--ice-navy); color: #fff; }
//   .values-section .section-heading { color: #fff; }
//   .values-grid {
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
//     gap: 1.5rem;
//   }
//   .value-card {
//     background: rgba(255,255,255,0.04);
//     border: 1px solid rgba(201,148,58,0.2);
//     border-radius: 2px;
//     padding: 2rem;
//     transition: background 0.2s;
//   }
//   .value-card:hover { background: rgba(201,148,58,0.07); }
//   .value-number {
//     font-family: 'DM Mono', monospace;
//     font-size: 0.65rem;
//     color: var(--ice-gold);
//     letter-spacing: 0.15em;
//     margin-bottom: 1rem;
//   }
//   .value-heading {
//     font-family: 'Playfair Display', serif;
//     font-size: 1.2rem;
//     font-weight: 700;
//     color: var(--ice-gold-light);
//     margin-bottom: 0.875rem;
//   }
//   .value-body {
//     font-size: 0.9rem;
//     color: rgba(255,255,255,0.6);
//     line-height: 1.8;
//   }

//   /* SECTION 5 — TIMELINE */
//   .timeline-section { background: var(--ice-cream); }
//   .timeline-steps {
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
//     gap: 0;
//     border: 1px solid rgba(11,31,58,0.1);
//     border-radius: 2px;
//     overflow: hidden;
//   }
//   .timeline-step {
//     padding: 2rem 1.75rem;
//     border-right: 1px solid rgba(11,31,58,0.1);
//     background: #fff;
//     position: relative;
//   }
//   .timeline-step:last-child { border-right: none; }
//   .timeline-step::before {
//     content: '';
//     position: absolute;
//     top: 0; left: 0; right: 0;
//     height: 3px;
//     background: var(--ice-gold);
//     transform: scaleX(0);
//     transform-origin: left;
//     transition: transform 0.3s ease;
//   }
//   .timeline-step:hover::before { transform: scaleX(1); }
//   .era-chip {
//     font-family: 'DM Mono', monospace;
//     font-size: 0.65rem;
//     letter-spacing: 0.15em;
//     background: var(--ice-navy);
//     color: var(--ice-gold);
//     padding: 0.3rem 0.6rem;
//     border-radius: 2px;
//     display: inline-block;
//     margin-bottom: 1rem;
//   }
//   .step-heading {
//     font-family: 'Playfair Display', serif;
//     font-size: 1rem;
//     font-weight: 700;
//     color: var(--ice-navy);
//     margin-bottom: 0.75rem;
//     line-height: 1.3;
//   }
//   .step-body {
//     font-size: 0.85rem;
//     color: var(--ice-muted);
//     line-height: 1.75;
//   }

//   /* SECTION 6 — TEAM */
//   .team-section { background: #fff; }
//   .team-grid {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 4rem;
//     align-items: start;
//   }
//   @media (max-width: 768px) { .team-grid { grid-template-columns: 1fr; gap: 2rem; } }
//   .team-left p {
//     font-size: 1rem;
//     color: var(--ice-muted);
//     line-height: 1.85;
//     margin-bottom: 1.25rem;
//   }
//   .team-cards {
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
//   }
//   .team-card {
//     background: var(--ice-cream);
//     border: 1px solid rgba(11,31,58,0.08);
//     border-radius: 2px;
//     padding: 1.25rem 1.5rem;
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//   }
//   .team-avatar {
//     width: 52px;
//     height: 52px;
//     border-radius: 50%;
//     background: var(--ice-navy);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-shrink: 0;
//     font-family: 'Playfair Display', serif;
//     font-size: 1rem;
//     color: var(--ice-gold);
//     font-weight: 700;
//   }
//   .team-info-role {
//     font-size: 0.7rem;
//     font-family: 'DM Mono', monospace;
//     letter-spacing: 0.15em;
//     text-transform: uppercase;
//     color: var(--ice-gold);
//     margin-bottom: 0.2rem;
//   }
//   .team-info-name {
//     font-family: 'Playfair Display', serif;
//     font-size: 1rem;
//     font-weight: 700;
//     color: var(--ice-navy);
//   }
//   .team-info-desc {
//     font-size: 0.8rem;
//     color: var(--ice-muted);
//     margin-top: 0.2rem;
//   }

//   /* SECTION 7 — IGEN */
//   .igen-section { background: var(--ice-cream); }
//   .igen-grid {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 4rem;
//     align-items: start;
//   }
//   @media (max-width: 768px) { .igen-grid { grid-template-columns: 1fr; gap: 2rem; } }
//   .igen-visual {
//     background: var(--ice-navy);
//     border-radius: 2px;
//     padding: 3rem 2.5rem;
//     display: flex;
//     flex-direction: column;
//     gap: 1.5rem;
//   }
//   .igen-visual-label {
//     font-family: 'DM Mono', monospace;
//     font-size: 0.65rem;
//     letter-spacing: 0.2em;
//     color: var(--ice-gold);
//     text-transform: uppercase;
//   }
//   .igen-visual-title {
//     font-family: 'Playfair Display', serif;
//     font-size: 2rem;
//     font-weight: 900;
//     color: #fff;
//     line-height: 1.1;
//   }
//   .igen-visual-title span { color: var(--ice-saffron); }
//   .igen-visual-divider {
//     height: 1px;
//     background: rgba(201,148,58,0.2);
//   }
//   .igen-stat {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 0.5rem 0;
//     border-bottom: 1px solid rgba(255,255,255,0.06);
//   }
//   .igen-stat-label { font-size: 0.85rem; color: rgba(255,255,255,0.5); }
//   .igen-stat-val { font-family: 'DM Mono', monospace; font-size: 0.85rem; color: var(--ice-gold-light); }

//   .igen-right p {
//     font-size: 0.98rem;
//     color: var(--ice-muted);
//     line-height: 1.85;
//     margin-bottom: 1.25rem;
//   }
//   .igen-bullets {
//     list-style: none;
//     margin-bottom: 2rem;
//   }
//   .igen-bullets li {
//     font-size: 0.9rem;
//     color: var(--ice-muted);
//     padding: 0.6rem 0;
//     border-bottom: 1px solid rgba(11,31,58,0.07);
//     display: flex;
//     gap: 0.75rem;
//     align-items: flex-start;
//     line-height: 1.6;
//   }
//   .igen-bullets li::before {
//     content: '→';
//     color: var(--ice-gold);
//     flex-shrink: 0;
//     font-family: 'DM Mono', monospace;
//     margin-top: 0.05rem;
//   }
//   .cta-btn {
//     display: inline-flex;
//     align-items: center;
//     gap: 0.5rem;
//     background: var(--ice-navy);
//     color: var(--ice-gold-light);
//     padding: 0.875rem 1.75rem;
//     border-radius: 2px;
//     font-size: 0.875rem;
//     font-family: 'DM Sans', sans-serif;
//     font-weight: 500;
//     letter-spacing: 0.04em;
//     border: none;
//     cursor: pointer;
//     text-decoration: none;
//     transition: background 0.2s;
//   }
//   .cta-btn:hover { background: var(--ice-gold); color: var(--ice-navy); }

//   /* SECTION 8 — STATS */
//   .stats-section { background: var(--ice-navy); }
//   .stats-section .section-heading { color: #fff; text-align: center; }
//   .stats-grid {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     gap: 1.5rem;
//   }
//   @media (max-width: 640px) { .stats-grid { grid-template-columns: 1fr; } }
//   .stat-card {
//     background: rgba(255,255,255,0.04);
//     border: 1px solid rgba(201,148,58,0.18);
//     border-radius: 2px;
//     padding: 2.5rem 2rem;
//     text-align: center;
//   }
//   .stat-number {
//     font-family: 'Playfair Display', serif;
//     font-size: 3rem;
//     font-weight: 900;
//     color: var(--ice-gold);
//     line-height: 1;
//     margin-bottom: 0.75rem;
//   }
//   .stat-heading {
//     font-size: 1rem;
//     font-weight: 600;
//     color: #fff;
//     margin-bottom: 0.75rem;
//   }
//   .stat-body {
//     font-size: 0.85rem;
//     color: rgba(255,255,255,0.5);
//     line-height: 1.75;
//   }

//   /* FOOTER */
//   .footer {
//     background: var(--ice-deep);
//     padding: 2.5rem;
//     text-align: center;
//     border-top: 1px solid rgba(201,148,58,0.15);
//   }
//   .footer p {
//     font-family: 'DM Mono', monospace;
//     font-size: 0.68rem;
//     letter-spacing: 0.15em;
//     color: rgba(255,255,255,0.25);
//     text-transform: uppercase;
//   }
// `;

// const values = [
//   {
//     heading: "Trust First",
//     body: "Every partnership, every brand selection, every operational decision at ICE is filtered through one question: does this build or protect the trust that buyers and sellers place in ICE? Trust is not a value we preach — it is the standard against which every action is measured.",
//   },
//   {
//     heading: "Access for All",
//     body: "ICE believes that every brand — from a first-generation Indian manufacturer to a global multinational — deserves access to a level marketplace. Our platform is designed to make that access as equitable, affordable, and commercially meaningful as possible.",
//   },
//   {
//     heading: "Community Before Commerce",
//     body: "The commercial outcomes of ICE are the result of community — not the other way around. We invest in relationships between brands, buyers, and our platform because those relationships are the foundation on which all transactions rest.",
//   },
//   {
//     heading: "Continuous Evolution",
//     body: "India's marketplace has changed dramatically across three decades. ICE has evolved with every shift — from the pre-digital era to the digital-physical hybrid of iGEN 2.0. Our commitment to evolution is what has kept ICE relevant and growing across 30 years of market change.",
//   },
// ];

// const timeline = [
//   {
//     era: "1994–2004",
//     heading: "Creating the Category",
//     body: "ICE built the physical consumer exhibition category from zero in South India — educating brands, consumers, and communities about the marketplace model.",
//   },
//   {
//     era: "2004–2014",
//     heading: "Scaling the Trust",
//     body: "ICE expanded to multiple cities, grew its brand roster to thousands, and built a loyal buyer base that returned annually — proving the mission at scale.",
//   },
//   {
//     era: "2014–2024",
//     heading: "Deepening the Impact",
//     body: "Celebrity endorsements, political inaugurations, and national brand participation deepened ICE's credibility as India's most trusted consumer expo.",
//   },
//   {
//     era: "2024–2047",
//     heading: "Realising the Vision",
//     body: "iGEN 2.0 launches. The mission of universal marketplace access begins its digital-physical chapter. India@100 is the horizon.",
//   },
// ];

// const teamMembers = [
//   {
//     initials: "ICE",
//     role: "Founders",
//     name: "ICE Founders",
//     desc: "Three decades of vision, discipline, and marketplace trust.",
//   },
//   {
//     initials: "CO",
//     role: "Co-Founders",
//     name: "ICE Co-Founders",
//     desc: "Partners in building India's most trusted B2B2C expo ecosystem.",
//   },
//   {
//     initials: "OLT",
//     role: "Team ICE",
//     name: "Operations & Leadership",
//     desc: "One of India's most experienced exhibition management organisations.",
//   },
// ];

// const igenBullets = [
//   "Digital pre-registration delivers qualified buyer leads to brands before events",
//   "e-Expo provides permanent online brand presence accessible year-round",
//   "AI-powered buyer-seller matching extends the curation quality of ICE to digital",
//   "ICE e-Expo hosts are accessible at icemegaexpo.com/ice-e-expo",
//   "Physical exhibitions remain the trust anchor — digital extends their reach",
// ];

// const stats = [
//   {
//     number: "10,000+",
//     heading: "Brands Supported",
//     body: "Over 10,000 brands across 30 years have used ICE as a primary platform for consumer market entry, growth, and brand building — achieving commercial outcomes through marketplace trust.",
//   },
//   {
//     number: "20M+",
//     heading: "Buyers Served",
//     body: "ICE has given 20 million consumers direct access to quality brands at verified prices — democratising the consumer experience across South India and beyond.",
//   },
//   {
//     number: "30+",
//     heading: "Years of Mission Delivery",
//     body: "Thirty consecutive years of annual exhibitions — without break, without failure, and with consistent growth — is the strongest proof of mission integrity any organisation can provide.",
//   },
// ];

// export default function ICELegacyPage() {
//   const [activeValue, setActiveValue] = useState<number | null>(null);

//   return (
//     <>
//       <style>{styles}</style>
//       <FloatingNavbar />

//       {/* NAV */}
//       <nav className="nav">
//         <div className="nav-logo">ICE<span> Mega Expo</span></div>
//         <div className="nav-tag">Sub-Page 04 · Ice Legacy</div>
//       </nav>

//       {/* SECTION 1 — HERO */}
//       <div className="hero">
//         <div className="page-wrap">
//           <span className="section-label hero-label">Our Purpose</span>
//           <h1>
//             The Mission and Vision That Have <em>Guided ICE</em> for 30 Years — and the Next 30
//           </h1>
//           <p className="hero-sub">
//             Building India's most trusted B2B2C consumer marketplace. Every year. Every city. Every brand.
//           </p>
//           <div className="hero-rule" />
//         </div>
//       </div>

//       {/* SECTION 2 — MISSION */}
//       <section>
//         <div className="page-wrap">
//           <div className="statement-card">
//             <div className="card-label">Our Mission</div>
//             <div className="card-h2">Connecting India's Brands and Consumers Through the Power of Physical Trust</div>
//             <p className="card-body">
//               ICE's mission is to create and sustain India's most trusted and accessible B2B2C consumer marketplace — delivering curated, high-quality physical exhibition events that connect genuine buyers with quality brands, generate real commercial transactions, and build the long-term marketplace relationships that India's economy needs to grow.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* SECTION 3 — VISION */}
//       <section style={{ paddingTop: 0 }}>
//         <div className="page-wrap">
//           <div className="statement-card vision">
//             <div className="card-label">Our Vision — India @ 100 · 2047</div>
//             <div className="card-h2">A Permanent, National, Digital-Physical Marketplace Ecosystem by 2047</div>
//             <p className="card-body">
//               By the 100th year of India's independence, ICE — powered by iGEN 2.0 — will be India's largest and most trusted digital-physical consumer marketplace network: present in every major Indian city, accessible to every consumer regardless of geography, empowering brands at every scale, and operating 365 days a year through a seamless digital-physical platform. This is not an aspiration. It is the direction every decision ICE makes is pointed toward.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* SECTION 4 — VALUES */}
//       <section className="values-section">
//         <div className="page-wrap">
//           <h2 className="section-heading">The Four Values That Guide Every ICE Decision</h2>
//           <div className="values-grid">
//             {values.map((v, i) => (
//               <div
//                 key={i}
//                 className="value-card"
//                 onMouseEnter={() => setActiveValue(i)}
//                 onMouseLeave={() => setActiveValue(null)}
//                 style={{ cursor: "default" }}
//               >
//                 <div className="value-number">0{i + 1}</div>
//                 <div className="value-heading">{v.heading}</div>
//                 <p className="value-body">{v.body}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* SECTION 5 — TIMELINE */}
//       <section className="timeline-section">
//         <div className="page-wrap">
//           <h2 className="section-heading">How the ICE Mission Has Been Delivered — Decade by Decade</h2>
//           <div className="timeline-steps">
//             {timeline.map((step, i) => (
//               <div className="timeline-step" key={i}>
//                 <div className="era-chip">{step.era}</div>
//                 <div className="step-heading">{step.heading}</div>
//                 <p className="step-body">{step.body}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* SECTION 6 — TEAM */}
//       <section className="team-section">
//         <div className="page-wrap">
//           <div className="team-grid">
//             <div className="team-left">
//               <span className="section-label">Our People</span>
//               <h2 className="section-heading">The People Behind the Mission</h2>
//               <p>
//                 ICE's mission has been sustained across three decades by a team built on institutional knowledge, personal relationships, and a shared belief in the power of the physical marketplace. The founders, co-founders, and OLT team of ICE represent one of India's most experienced exhibition management organisations.
//               </p>
//               <p>
//                 The leadership team brings together expertise in event management, brand marketing, consumer behaviour, and — with iGEN 2.0 — digital platform development.
//               </p>
//             </div>
//             <div className="team-cards">
//               {teamMembers.map((m, i) => (
//                 <div className="team-card" key={i}>
//                   <div className="team-avatar">{m.initials}</div>
//                   <div>
//                     <div className="team-info-role">{m.role}</div>
//                     <div className="team-info-name">{m.name}</div>
//                     <div className="team-info-desc">{m.desc}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SECTION 7 — IGEN */}
//       <section className="igen-section">
//         <div className="page-wrap">
//           <span className="section-label">Digital Chapter</span>
//           <div className="igen-grid">
//             <div className="igen-visual">
//               <div className="igen-visual-label">iGEN 2.0 Platform</div>
//               <div className="igen-visual-title">The Mission<br />in the <span>Digital Age</span></div>
//               <div className="igen-visual-divider" />
//               {[
//                 ["Platform", "Digital-Physical Hybrid"],
//                 ["Availability", "365 Days / Year"],
//                 ["Access", "National Scale"],
//                 ["Launched", "2024"],
//                 ["Horizon", "India @ 100 · 2047"],
//               ].map(([label, val], i) => (
//                 <div className="igen-stat" key={i}>
//                   <span className="igen-stat-label">{label}</span>
//                   <span className="igen-stat-val">{val}</span>
//                 </div>
//               ))}
//             </div>
//             <div className="igen-right">
//               <h2 className="section-heading">iGEN 2.0 — The Mission in the Digital Age</h2>
//               <p>
//                 iGEN 2.0 is not a departure from ICE's mission — it is the mission's digital chapter. The same goal of connecting buyers and sellers in a trusted, curated environment now operates 365 days a year through a seamless digital-physical platform.
//               </p>
//               <p>
//                 The iGEN 2.0 platform extends ICE's marketplace infrastructure to buyers and brands who cannot access physical exhibitions — democratising market access at a national scale, as the original ICE mission always intended.
//               </p>
//               <ul className="igen-bullets">
//                 {igenBullets.map((b, i) => (
//                   <li key={i}>{b}</li>
//                 ))}
//               </ul>
//               <a className="cta-btn" href="https://icemegaexpo.com/ice-e-expo" target="_blank" rel="noopener noreferrer">
//                 Explore iGEN 2.0 →
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SECTION 8 — STATS */}
//       <section className="stats-section">
//         <div className="page-wrap">
//           <h2 className="section-heading">The Mission in Numbers</h2>
//           <div className="stats-grid">
//             {stats.map((s, i) => (
//               <div className="stat-card" key={i}>
//                 <div className="stat-number">{s.number}</div>
//                 <div className="stat-heading">{s.heading}</div>
//                 <p className="stat-body">{s.body}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="footer">
//         <p>ICE Mega Expo · Sub-Page 04 · Ice Legacy · Mission &amp; Vision · India @ 100</p>
//       </footer>
//     </>
//   );
// }



import { FloatingNavbar } from "@/components/ui/floating-navbar";
import { useState } from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   tailwind.config.js — add these under theme.extend:

   colors: {
     'ice-navy':      '#0B1F3A',
     'ice-deep':      '#071428',
     'ice-gold':      '#C9943A',
     'ice-gold-lt':   '#E8B96A',
     'ice-saffron':   '#E8600A',
     'ice-cream':     '#FAF6EE',
     'ice-muted':     '#6B7280',
   },
   fontFamily: {
     display: ["'Playfair Display'", 'serif'],
     sans:    ["'DM Sans'",          'sans-serif'],
     mono:    ["'DM Mono'",          'monospace'],
   },

   Also add this Google Fonts <link> to your HTML <head>:
   <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
───────────────────────────────────────────────────────────────────────────── */

// ─── Types ────────────────────────────────────────────────────────────────────

interface ValueItem {
  heading: string;
  body: string;
}

interface TimelineItem {
  era: string;
  heading: string;
  body: string;
}

interface TeamMember {
  initials: string;
  role: string;
  name: string;
  desc: string;
}

interface StatItem {
  number: string;
  heading: string;
  body: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const VALUES: ValueItem[] = [
  {
    heading: "Trust First",
    body: "Every partnership, every brand selection, every operational decision at ICE is filtered through one question: does this build or protect the trust that buyers and sellers place in ICE? Trust is not a value we preach — it is the standard against which every action is measured.",
  },
  {
    heading: "Access for All",
    body: "ICE believes that every brand — from a first-generation Indian manufacturer to a global multinational — deserves access to a level marketplace. Our platform is designed to make that access as equitable, affordable, and commercially meaningful as possible.",
  },
  {
    heading: "Community Before Commerce",
    body: "The commercial outcomes of ICE are the result of community — not the other way around. We invest in relationships between brands, buyers, and our platform because those relationships are the foundation on which all transactions rest.",
  },
  {
    heading: "Continuous Evolution",
    body: "India's marketplace has changed dramatically across three decades. ICE has evolved with every shift — from the pre-digital era to the digital-physical hybrid of iGEN 2.0. Our commitment to evolution is what has kept ICE relevant and growing across 30 years of market change.",
  },
];

const TIMELINE: TimelineItem[] = [
  {
    era: "1994–2004",
    heading: "Creating the Category",
    body: "ICE built the physical consumer exhibition category from zero in South India — educating brands, consumers, and communities about the marketplace model.",
  },
  {
    era: "2004–2014",
    heading: "Scaling the Trust",
    body: "ICE expanded to multiple cities, grew its brand roster to thousands, and built a loyal buyer base that returned annually — proving the mission at scale.",
  },
  {
    era: "2014–2024",
    heading: "Deepening the Impact",
    body: "Celebrity endorsements, political inaugurations, and national brand participation deepened ICE's credibility as India's most trusted consumer expo.",
  },
  {
    era: "2024–2047",
    heading: "Realising the Vision",
    body: "iGEN 2.0 launches. The mission of universal marketplace access begins its digital-physical chapter. India@100 is the horizon.",
  },
];

const TEAM: TeamMember[] = [
  {
    initials: "ICE",
    role: "Founders",
    name: "ICE Founders",
    desc: "Three decades of vision, discipline, and marketplace trust.",
  },
  {
    initials: "CO",
    role: "Co-Founders",
    name: "ICE Co-Founders",
    desc: "Partners in building India's most trusted B2B2C expo ecosystem.",
  },
  {
    initials: "OLT",
    role: "Team ICE",
    name: "Operations & Leadership",
    desc: "One of India's most experienced exhibition management organisations.",
  },
];

const IGEN_BULLETS: string[] = [
  "Digital pre-registration delivers qualified buyer leads to brands before events",
  "e-Expo provides permanent online brand presence accessible year-round",
  "AI-powered buyer-seller matching extends the curation quality of ICE to digital",
  "ICE e-Expo hosts are accessible at icemegaexpo.com/ice-e-expo",
  "Physical exhibitions remain the trust anchor — digital extends their reach",
];

const IGEN_STATS: [string, string][] = [
  ["Platform", "Digital-Physical Hybrid"],
  ["Availability", "365 Days / Year"],
  ["Access", "National Scale"],
  ["Launched", "2024"],
  ["Horizon", "India @ 100 · 2047"],
];

const STATS: StatItem[] = [
  {
    number: "10,000+",
    heading: "Brands Supported",
    body: "Over 10,000 brands across 30 years have used ICE as a primary platform for consumer market entry, growth, and brand building — achieving commercial outcomes through marketplace trust.",
  },
  {
    number: "20M+",
    heading: "Buyers Served",
    body: "ICE has given 20 million consumers direct access to quality brands at verified prices — democratising the consumer experience across South India and beyond.",
  },
  {
    number: "30+",
    heading: "Years of Mission Delivery",
    body: "Thirty consecutive years of annual exhibitions — without break, without failure, and with consistent growth — is the strongest proof of mission integrity any organisation can provide.",
  },
];

// ─── Atoms ────────────────────────────────────────────────────────────────────

function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={`font-mono text-[0.65rem] tracking-[0.22em] uppercase block mb-5 ${
        light ? "text-[#E8B96A]" : "text-[#C9943A]"
      }`}
    >
      {children}
    </span>
  );
}

function SectionHeading({
  children,
  light = false,
  center = false,
}: {
  children: React.ReactNode;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <h2
      className={[
        "font-display font-bold leading-tight mb-10",
        "text-[1.7rem] md:text-[2.2rem]",
        light ? "text-white" : "text-[#0B1F3A]",
        center ? "text-center" : "",
      ].join(" ")}
    >
      {children}
    </h2>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ICELegacyPage() {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  return (
    <>
    
      {/* Inline only for fonts + minimal pseudo-element tricks Tailwind can't do */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

        /* vertical grid shimmer on hero */
        .hero-grid::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            90deg,
            transparent, transparent 79px,
            rgba(201,148,58,0.045) 79px, rgba(201,148,58,0.045) 80px
          );
          pointer-events: none;
        }

        /* top-border reveal on timeline steps */
        .tl-step {
          position: relative;
        }
        .tl-step::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: #C9943A;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .tl-step:hover::before {
          transform: scaleX(1);
        }
      `}</style>

     
        <FloatingNavbar/>

        
       

        {/* ══ S1 — HERO ════════════════════════════════════════════════════════ */}
        <section className="relative hero-grid bg-[#0B1F3A] py-28 px-6 text-center overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto">
            <SectionLabel light>Our Purpose</SectionLabel>

            <h1 className="font-display font-black text-4xl md:text-6xl text-white leading-[1.12] mb-7">
              The Mission and Vision That Have{" "}
              <em className="not-italic text-[#E8B96A]">Guided ICE</em> for 30
              Years — and the Next 30
            </h1>

            <p className="text-white/60 text-lg font-light leading-relaxed max-w-xl mx-auto">
              Building India's most trusted B2B2C consumer marketplace. Every
              year. Every city. Every brand.
            </p>

            <div className="w-12 h-0.5 bg-[#C9943A] mx-auto mt-8" />
          </div>
        </section>

        {/* ══ S2 — MISSION CARD ════════════════════════════════════════════════ */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white border-l-[5px] border-[#C9943A] rounded-none px-10 py-10 shadow-sm">
              <p className="font-mono text-[0.65rem] tracking-[0.22em] uppercase text-[#C9943A] mb-4">
                Our Mission
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B1F3A] leading-snug mb-5">
                Connecting India's Brands and Consumers Through the Power of
                Physical Trust
              </h2>
              <p className="text-[#6B7280] text-base leading-[1.85] max-w-3xl">
                ICE's mission is to create and sustain India's most trusted and
                accessible B2B2C consumer marketplace — delivering curated,
                high-quality physical exhibition events that connect genuine
                buyers with quality brands, generate real commercial
                transactions, and build the long-term marketplace relationships
                that India's economy needs to grow.
              </p>
            </div>
          </div>
        </section>

        {/* ══ S3 — VISION CARD ═════════════════════════════════════════════════ */}
        <section className="pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-[#0B1F3A] border-l-[5px] border-[#E8600A] rounded-none px-10 py-10">
              <p className="font-mono text-[0.65rem] tracking-[0.22em] uppercase text-[#E8600A] mb-4">
                Our Vision — India @ 100 · 2047
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#E8B96A] leading-snug mb-5">
                A Permanent, National, Digital-Physical Marketplace Ecosystem
                by 2047
              </h2>
              <p className="text-white/65 text-base leading-[1.85] max-w-3xl">
                By the 100th year of India's independence, ICE — powered by
                iGEN 2.0 — will be India's largest and most trusted
                digital-physical consumer marketplace network: present in every
                major Indian city, accessible to every consumer regardless of
                geography, empowering brands at every scale, and operating 365
                days a year through a seamless digital-physical platform. This
                is not an aspiration. It is the direction every decision ICE
                makes is pointed toward.
              </p>
            </div>
          </div>
        </section>

        {/* ══ S4 — VALUES ══════════════════════════════════════════════════════ */}
        <section className="bg-[#0B1F3A] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionHeading light>
              The Four Values That Guide Every ICE Decision
            </SectionHeading>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {VALUES.map((v, i) => (
                <div
                  key={i}
                  className="border border-[#C9943A]/20 p-7 transition-colors duration-200 cursor-default"
                  style={{
                    background:
                      hoveredValue === i
                        ? "rgba(201,148,58,0.08)"
                        : "rgba(255,255,255,0.03)",
                  }}
                  onMouseEnter={() => setHoveredValue(i)}
                  onMouseLeave={() => setHoveredValue(null)}
                >
                  <p className="font-mono text-[0.65rem] tracking-[0.15em] text-[#C9943A] mb-4">
                    0{i + 1}
                  </p>
                  <h3 className="font-display text-lg font-bold text-[#E8B96A] mb-3 leading-snug">
                    {v.heading}
                  </h3>
                  <p className="text-white/55 text-sm leading-[1.8]">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ S5 — TIMELINE ════════════════════════════════════════════════════ */}
        <section className="bg-[#FAF6EE] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionHeading>
              How the ICE Mission Has Been Delivered — Decade by Decade
            </SectionHeading>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#0B1F3A]/10 overflow-hidden">
              {TIMELINE.map((step, i) => (
                <div
                  key={i}
                  className={`tl-step bg-white p-8 ${
                    i < TIMELINE.length - 1
                      ? "border-r border-[#0B1F3A]/10"
                      : ""
                  }`}
                >
                  <span className="font-mono text-[0.65rem] tracking-[0.15em] bg-[#0B1F3A] text-[#C9943A] px-2 py-1 inline-block mb-4">
                    {step.era}
                  </span>
                  <h3 className="font-display text-base font-bold text-[#0B1F3A] leading-snug mb-3">
                    {step.heading}
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-[1.75]">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ S6 — TEAM ════════════════════════════════════════════════════════ */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Left copy */}
            <div>
              <SectionLabel>Our People</SectionLabel>
              <SectionHeading>The People Behind the Mission</SectionHeading>
              <p className="text-[#6B7280] text-base leading-[1.85] mb-5">
                ICE's mission has been sustained across three decades by a team
                built on institutional knowledge, personal relationships, and a
                shared belief in the power of the physical marketplace. The
                founders, co-founders, and OLT team of ICE represent one of
                India's most experienced exhibition management organisations.
              </p>
              <p className="text-[#6B7280] text-base leading-[1.85]">
                The leadership team brings together expertise in event
                management, brand marketing, consumer behaviour, and — with
                iGEN 2.0 — digital platform development.
              </p>
            </div>

            {/* Right cards */}
            <div className="flex flex-col gap-4">
              {TEAM.map((m, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-[#FAF6EE] border border-[#0B1F3A]/[0.08] px-5 py-4"
                >
                  <div className="w-14 h-14 rounded-full bg-[#0B1F3A] flex items-center justify-center shrink-0 font-display font-bold text-[#C9943A] text-sm">
                    {m.initials}
                  </div>
                  <div>
                    <p className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-[#C9943A] mb-0.5">
                      {m.role}
                    </p>
                    <p className="font-display font-bold text-[#0B1F3A] text-sm leading-snug">
                      {m.name}
                    </p>
                    <p className="text-[#6B7280] text-xs mt-0.5">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ S7 — iGEN 2.0 ════════════════════════════════════════════════════ */}
        <section className="bg-[#FAF6EE] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionLabel>Digital Chapter</SectionLabel>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              {/* Infographic panel */}
              <div className="bg-[#0B1F3A] p-10 flex flex-col gap-6">
                <p className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-[#C9943A]">
                  iGEN 2.0 Platform
                </p>
                <h3 className="font-display font-black text-4xl text-white leading-tight">
                  The Mission
                  <br />
                  in the{" "}
                  <span className="text-[#E8600A]">Digital Age</span>
                </h3>
                <div className="h-px bg-[#C9943A]/20" />
                <div className="flex flex-col gap-1">
                  {IGEN_STATS.map(([label, val], i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-2.5 border-b border-white/[0.06]"
                    >
                      <span className="text-white/50 text-sm">{label}</span>
                      <span className="font-mono text-[#E8B96A] text-sm">
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Text */}
              <div>
                <h2 className="font-display font-bold text-3xl text-[#0B1F3A] leading-snug mb-7">
                  iGEN 2.0 — The Mission in the Digital Age
                </h2>
                <p className="text-[#6B7280] text-base leading-[1.85] mb-4">
                  iGEN 2.0 is not a departure from ICE's mission — it is the
                  mission's digital chapter. The same goal of connecting buyers
                  and sellers in a trusted, curated environment now operates 365
                  days a year through a seamless digital-physical platform.
                </p>
                <p className="text-[#6B7280] text-base leading-[1.85] mb-7">
                  The iGEN 2.0 platform extends ICE's marketplace
                  infrastructure to buyers and brands who cannot access physical
                  exhibitions — democratising market access at a national scale,
                  as the original ICE mission always intended.
                </p>

                <ul className="mb-9">
                  {IGEN_BULLETS.map((b, i) => (
                    <li
                      key={i}
                      className="flex gap-3 items-start text-sm text-[#6B7280] leading-[1.7] py-3 border-b border-[#0B1F3A]/[0.07]"
                    >
                      <span className="font-mono text-[#C9943A] shrink-0 mt-[1px]">
                        →
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://icemegaexpo.com/ice-e-expo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0B1F3A] text-[#E8B96A] text-sm font-medium tracking-wide px-7 py-3.5 transition-colors duration-200 hover:bg-[#C9943A] hover:text-[#0B1F3A]"
                >
                  Explore iGEN 2.0 →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══ S8 — STATS ═══════════════════════════════════════════════════════ */}
        <section className="bg-[#0B1F3A] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionHeading light center>
              The Mission in Numbers
            </SectionHeading>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className="bg-white/[0.04] border border-[#C9943A]/[0.18] px-8 py-10 text-center"
                >
                  <p className="font-display font-black text-5xl text-[#C9943A] leading-none mb-3">
                    {s.number}
                  </p>
                  <p className="font-semibold text-white text-base mb-3">
                    {s.heading}
                  </p>
                  <p className="text-white/50 text-sm leading-[1.75]">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FOOTER ═══════════════════════════════════════════════════════════ */}
        <footer className="bg-[#071428] border-t border-[#C9943A]/15 py-8 text-center">
          <p className="font-mono text-[0.65rem] tracking-[0.18em] uppercase text-white/20">
            ICE Mega Expo · Sub-Page 04 · Ice Legacy · Mission &amp; Vision ·
            India @ 100
          </p>
        </footer>
     
    </>
  );
}