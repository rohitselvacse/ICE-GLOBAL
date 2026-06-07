


import { FloatingNavbar } from "@/components/ui/floating-navbar";
import { useState, useEffect, useRef } from "react";
import {
  Award,
  Building2,
  Store,
  Users,
  Smartphone,
  TrendingUp,
} from "lucide-react";

const iconmap = {
  award: Award,
  landmark: Building2, // fallback
  store: Store,
  users: Users,
  smartphone: Smartphone,
  "trending-up": TrendingUp,
};


// const API_BASE = "http://localhost:8086";
 const API_BASE = import.meta.env.VITE_API_BASE_URL || "";
const FONT_DISPLAY = "'DM Serif Display', Georgia, serif";
const FONT_SANS = "'DM Sans', system-ui, sans-serif";



// ─── Utility ──────────────────────────────────────────────────────────────────
const cn = (...args) => args.filter(Boolean).join(" ");

// ─── Icons (inline SVG) ───────────────────────────────────────────────────────
const icons = {
  star: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
  chevronDown: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M6 9l6 6 6-6"/></svg>,
  arrowRight: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7"/></svg>,
  check: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4"><path d="M20 6L9 17l-5-5"/></svg>,
  play: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M5 3l14 9-14 9V3z"/></svg>,
  mapPin: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  shield: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  users: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
  store: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M3 9l1-6h16l1 6M3 9h18M5 9v12h14V9"/></svg>,
  award: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>,
  trending: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg>,
  calendar: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>,
  globe: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
  newspaper: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M4 22h16a2 2 0 002-2V4a2 2 0 00-2-2H8a2 2 0 00-2 2v16a4 4 0 01-4-4V6"/><path d="M14 2v4h4M12 11v6M8 11h8M8 15h4"/></svg>,
};

const iconMap = { "shield-check": icons.shield, users: icons.users, store: icons.store, award: icons.award, "trending-up": icons.trending, calendar: icons.calendar, globe: icons.globe, newspaper: icons.newspaper, heart: icons.star, layout: icons.store, "map-pin": icons.mapPin };

const getIcon = (icon) => {
  const icons = {
    users: "👥",
    award: "🏆",
    smartphone: "📱",
    "trending-up": "📈",
    newspaper: "📰",
    search: "🔍",
    shield: "🛡️",
    hand: "🤝",
    tag: "🏷️",
    heart: "❤️",
  };

  return icons[icon] || "•";
};
// ─── Components ───────────────────────────────────────────────────────────────
const Chip = ({ children, dark = false }) => (
  <span className={cn("inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border", dark ? "border-[#F0652E]/40 text-[#F0652E] bg-[#F0652E]/10" : "border-[#F0652E]/25 text-[#F0652E] bg-[#F0652E]/10")}>
    {children}
  </span>
);

const SectionHeader = ({ chip, title, subtitle, center = true, dark = false }) => (
  <div className={cn("max-w-3xl mb-12", center && "mx-auto text-center")}>
    {chip && <Chip dark={dark}>{chip}</Chip>}
    <h2 className={cn("mt-3 text-3xl md:text-4xl font-extrabold leading-tight tracking-tight", dark ? "text-white" : "text-[#1D1D46]")} style={{ fontFamily: FONT_DISPLAY }}>
      {title}
    </h2>
    {subtitle && <p className={cn("mt-4 text-base leading-relaxed", dark ? "text-slate-300" : "text-slate-500")}>{subtitle}</p>}
  </div>
);

const Tag = ({ children }) => (
  <span className="inline-block bg-[#F0652E]/15 text-[#F0652E] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">{children}</span>
);

// ─── Hero Banner ──────────────────────────────────────────────────────────────
const HeroBanner = ({ data }) => {
  if (!data) return null;
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1D1D46]">
      {data.backgroundImage && (
        <div className="absolute inset-0">
          <img src={data.backgroundImage} alt={data.backgroundAlt || ""} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1D1D46] via-[#1D1D46]/90 to-[#1D1D46]/50" />
        </div>
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Chip dark>{data.chip}</Chip>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight" style={{ fontFamily: FONT_DISPLAY }}>
            {data.title}
          </h1>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl">{data.subtitle}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {(data.trustChips || []).map((chip, i) => (
              <span key={i} className="flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                <span className="text-green-400">{icons.check}</span>{chip}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href={data.primaryCta?.href || "#"} className="inline-flex items-center gap-2 bg-[#F0652E] hover:bg-[#d85725] text-white font-bold px-6 py-3 rounded-lg transition-colors">
              {data.primaryCta?.label} {icons.arrowRight}
            </a>
            <a href={data.secondaryCta?.href || "#"} className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              {data.secondaryCta?.label}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {(data.stats || []).map((stat, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur">
              <div className="text-4xl font-black text-[#F0652E]" style={{ fontFamily: FONT_DISPLAY }}>{stat.value}</div>
              <div className="mt-1 text-sm text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Stats Strip ─────────────────────────────────────────────────────────────
const StatsStrip = ({ data }) => {
  if (!data) return null;
  return (
    <section className="bg-[#F0652E] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader chip={data.chip} title={data.title} subtitle={data.subtitle} dark />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {(data.stats || []).map((stat, i) => (
            <div key={i} className="bg-white/10 border border-white/15 rounded-xl p-5 text-center">
              <div className="flex justify-center mb-2 text-[#F0652E]">{iconMap[stat.icon] || icons.star}</div>
              <div className="text-3xl font-black text-white" style={{ fontFamily: FONT_DISPLAY }}>{stat.value}</div>
              <div className="mt-1 text-xs text-[#ffe0d2] font-medium leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Feature Cards ────────────────────────────────────────────────────────────
const FeatureCards = ({ data }) => {
  if (!data) return null;
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader chip={data.chip} title={data.title} subtitle={data.subtitle} />
        <div className="grid md:grid-cols-3 gap-8">
          {(data.cards || []).map((card, i) => (
            <div key={i} className="group relative rounded-2xl border border-slate-100 p-8 hover:border-[#F0652E]/30 hover:shadow-xl hover:shadow-[#F0652E]/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#F0652E]/10 flex items-center justify-center text-[#F0652E] mb-6">
                {iconMap[card.icon] || icons.shield}
              </div>
              <h3 className="text-xl font-bold text-[#1D1D46] mb-3" style={{ fontFamily: FONT_DISPLAY }}>{card.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{card.body}</p>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <p className="text-xs font-bold text-[#F0652E] uppercase tracking-wide">{card.highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Split Info Section ────────────────────────────────────────────────────────
const SplitInfoSection = ({ data }) => {
  if (!data?.sections) return null;
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto space-y-24">
        {data.sections.map((sec, i) => {
          const imgLeft = sec.layout === "image-left";
          return (
            <div key={sec.id || i} className={cn("grid lg:grid-cols-2 gap-12 items-center", !imgLeft && "")}>
              <div className={cn("overflow-hidden rounded-2xl shadow-2xl", !imgLeft && "lg:order-2")}>
                {sec.image ? (
                  <img src={sec.image} alt={sec.imageAlt || ""} className="w-full h-80 object-cover" />
                ) : (
                  <div className="w-full h-80 bg-slate-200 flex items-center justify-center text-slate-400">No image</div>
                )}
              </div>
              <div className={cn(!imgLeft && "lg:order-1")}>
                {sec.chip && <Chip>{sec.chip}</Chip>}
                <h3 className="mt-4 text-3xl font-extrabold text-[#1D1D46] leading-tight" style={{ fontFamily: FONT_DISPLAY }}>{sec.title}</h3>
                <p className="mt-5 text-slate-500 leading-relaxed">{sec.body}</p>
                {sec.cta && (
                  <a href={sec.cta.href || "#"} className="mt-6 inline-flex items-center gap-2 text-[#F0652E] font-semibold hover:gap-3 transition-all">
                    {sec.cta.label} {icons.arrowRight}
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// ─── Timeline ─────────────────────────────────────────────────────────────────
// const Timeline = ({ data }) => {
//   if (!data?.nodes) return null;
//   return (
//     <section className="py-20 px-6 bg-white">
//       <div className="max-w-5xl mx-auto">
//         <SectionHeader chip={data.chip} title={data.title} subtitle={data.subtitle} />
//         <div className="relative">
//           <div className="absolute left-8 top-0 bottom-0 w-px bg-[#F0652E]/15" />
//           <div className="space-y-12">
//             {data.nodes.map((node, i) => (
//               <div key={i} className="relative flex gap-8">
//                 <div className={cn("relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-black text-sm border-2", node.highlight ? "bg-[#F0652E] border-[#F0652E] text-white" : "bg-white border-[#F0652E]/30 text-[#F0652E]")} style={{ fontFamily: FONT_DISPLAY }}>
//                   {node.year?.slice(0, 4) || "?"}
//                 </div>
//                 <div className={cn("flex-1 rounded-2xl border p-6 pb-7", node.highlight ? "border-[#F0652E]/30 bg-[#F0652E]/10" : "border-slate-100 bg-slate-50")}>
//                   <div className="flex items-start gap-4 flex-wrap">
//                     <div className="flex-1">
//                       <p className="text-xs font-bold text-[#F0652E] uppercase tracking-widest">{node.year}</p>
//                       <h4 className="mt-1 text-xl font-bold text-[#1D1D46]" style={{ fontFamily: FONT_DISPLAY }}>{node.title}</h4>
//                       <p className="mt-2 text-sm text-slate-500 leading-relaxed">{node.body}</p>
//                     </div>
//                     {node.image && (
//                       <img src={node.image} alt={node.imageAlt || node.title} className="w-24 h-20 object-cover rounded-lg flex-shrink-0" />
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

const Timeline = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

  if (!data?.nodes) return null;

  useEffect(() => {
    const observers = [];

    itemRefs.current.forEach((el, index) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        {
          threshold: 0.6,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [data]);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          chip={data.chip}
          title={data.title}
          subtitle={data.subtitle}
        />

        <div className="relative">
          {/* base line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-[#F0652E]/15" />

          {/* active progress line */}
          <div
            className="absolute left-8 top-0 w-px bg-[#0642BA] transition-all duration-300"
            style={{
              height: `${((activeIndex + 1) / data.nodes.length) * 100}%`,
            }}
          />

          <div className="space-y-12">
            {data.nodes.map((node, i) => (
              <div
                key={i}
                ref={(el) => (itemRefs.current[i] = el)}
                className="relative flex gap-8"
              >
                {/* Circle */}
                <div
                  className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-black text-sm border-2 transition-all duration-300 ${
                    i <= activeIndex
                      ? "bg-[#0642BA] border-[#0642BA] text-white"
                      : "bg-white border-[#F0652E]/30 text-[#F0652E]"
                  }`}
                  style={{ fontFamily: FONT_DISPLAY }}
                >
                  {node.year?.slice(0, 4) || "?"}
                </div>

                {/* Content */}
                <div
                  className={`flex-1 rounded-2xl border p-6 pb-7 transition-all duration-300 ${
                    i <= activeIndex
                      ? "border-[#0642BA]/30 bg-[#0642BA]/10"
                      : "border-slate-100 bg-slate-50"
                  }`}
                >
                  <div className="flex items-start gap-4 flex-wrap">
                    <div className="flex-1">
                      <p className="text-xs font-bold text-[#0642BA] uppercase tracking-widest">
                        {node.year}
                      </p>

                      <h4
                        className="mt-1 text-xl font-bold text-[#1D1D46]"
                        style={{ fontFamily: FONT_DISPLAY }}
                      >
                        {node.title}
                      </h4>

                      <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                        {node.body}
                      </p>
                    </div>

                    {node.image && (
                      <img
                        src={node.image}
                        alt={node.imageAlt || node.title}
                        className="w-24 h-20 object-cover rounded-lg flex-shrink-0"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Grid Cards (Categories) ──────────────────────────────────────────────────

const GridCards = ({ data }) => {
  if (!data?.cards) return null;
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader chip={data.chip} title={data.title} subtitle={data.subtitle} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.cards.map((card, i) => (
            <a key={i} href={card.href || "#"} className="group relative overflow-hidden rounded-2xl bg-white border border-slate-100 hover:border-[#F0652E]/30 hover:shadow-xl hover:shadow-[#F0652E]/10 transition-all duration-300 block">
              {card.image && (
                <div className="overflow-hidden h-40">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              )}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-[#1D1D46] text-base leading-tight">{card.title}</h3>
                  {card.tag && <Tag>{card.tag}</Tag>}
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{card.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Testimonials ─────────────────────────────────────────────────────────────
const Testimonials = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);
  if (!data) return null;
  const tabs = data.tabs || ["Buyers", "Sellers", "Partners"];
  const allCards = [data.buyers || [], data.sellers || [], data.partners || []];
  const cards = allCards[activeTab] || [];
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader chip={data.chip} title={data.title} subtitle={data.subtitle} />
        <div className="flex gap-2 justify-center mb-10">
          {tabs.map((tab, i) => (
            <button key={i} onClick={() => setActiveTab(i)} className={cn("px-5 py-2 rounded-full text-sm font-semibold border transition-all", activeTab === i ? "bg-[#F0652E] border-[#F0652E] text-white" : "border-slate-200 text-slate-500 hover:border-[#F0652E]/50")}>
              {tab}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <div key={i} className="rounded-2xl border border-slate-100 p-7 bg-slate-50">
              <div className="flex gap-1 text-[#F0652E] mb-4">
                {[...Array(5)].map((_, s) => <span key={s}>{icons.star}</span>)}
                <span className="ml-2 text-sm font-semibold text-slate-700">{card.rating}</span>
              </div>
              <blockquote className="text-slate-600 leading-relaxed text-sm">"{card.quote}"</blockquote>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F0652E]/15 flex items-center justify-center text-[#F0652E] font-bold text-sm">
                  {card.name?.[0] || "?"}
                </div>
                <div>
                  <p className="font-bold text-[#1D1D46] text-sm">{card.name}</p>
                  <p className="text-xs text-slate-400">{card.designation}</p>
                </div>
                {card.verified && <span className="ml-auto text-green-500 text-xs font-semibold flex items-center gap-1">{icons.check} Verified</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── FAQ Accordion ────────────────────────────────────────────────────────────
const FAQ = ({ data }) => {
  const [openItems, setOpenItems] = useState({});
  const [activeCategory, setActiveCategory] = useState(0);
  if (!data?.categories) return null;
  const toggle = (key) => setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  const cat = data.categories[activeCategory];
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <SectionHeader chip={data.chip} title={data.title} subtitle={data.subtitle} />
        <div className="flex gap-2 justify-center mb-10 flex-wrap">
          {data.categories.map((c, i) => (
            <button key={i} onClick={() => setActiveCategory(i)} className={cn("px-4 py-2 rounded-full text-sm font-semibold border transition-all", activeCategory === i ? "bg-[#1D1D46] border-[#1D1D46] text-white" : "border-slate-200 text-slate-500 hover:border-slate-400")}>
              {c.label}
            </button>
          ))}
        </div>
        <div className="space-y-3">
          {(cat?.faqs || []).map((faq, i) => {
            const key = `${activeCategory}-${i}`;
            const open = openItems[key];
            return (
              <div key={i} className={cn("rounded-xl border overflow-hidden transition-all", open ? "border-[#F0652E]/30 bg-white" : "border-slate-200 bg-white")}>
                <button onClick={() => toggle(key)} className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-slate-50 transition-colors">
                  <span className="font-semibold text-[#1D1D46] text-sm">{faq.question}</span>
                  <span className={cn("flex-shrink-0 text-slate-400 transition-transform", open && "rotate-180")}>{icons.chevronDown}</span>
                </button>
                {open && (
                  <div className="px-6 pb-5 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ─── Founder / Team ───────────────────────────────────────────────────────────
const FounderTeam = ({ data }) => {
  if (!data) return null;
  const { founder, team } = data;
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader chip={data.chip} title={data.title} subtitle={data.subtitle} />
        {founder && (
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 rounded-3xl bg-[#1D1D46] overflow-hidden">
            <div className="order-2 lg:order-1 p-10 text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-[#F0652E] mb-2">Founder</p>
              <h3 className="text-3xl font-black text-white mb-1" style={{ fontFamily: FONT_DISPLAY }}>{founder.name}</h3>
              <p className="text-slate-400 text-sm mb-5">{founder.title}</p>
              <p className="text-slate-300 leading-relaxed text-sm mb-6">{founder.bio}</p>
              {founder.quote && (
                <blockquote className="border-l-4 border-[#F0652E] pl-5 italic text-slate-200 text-sm leading-relaxed">
                  "{founder.quote}"
                </blockquote>
              )}
              {founder.achievements && (
                <ul className="mt-6 space-y-2">
                  {founder.achievements.map((a, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-green-400 flex-shrink-0 mt-0.5">{icons.check}</span>{a}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="order-1 lg:order-2 h-80 lg:h-full min-h-[320px]">
              {founder.image ? (
                <img src={founder.image} alt={founder.imageAlt || founder.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-[#1D1D46]/85 flex items-center justify-center text-slate-600 text-6xl font-black">SM</div>
              )}
            </div>
          </div>
        )}
        {team && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="rounded-2xl border border-slate-100 p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[#F0652E]/10 flex items-center justify-center text-[#F0652E] font-black text-xl mx-auto mb-4" style={{ fontFamily: FONT_DISPLAY }}>
                  {member.name?.[0] || "?"}
                </div>
                <h4 className="font-bold text-[#1D1D46] text-sm">{member.name}</h4>
                <p className="text-xs text-[#F0652E] font-semibold mt-1">{member.title}</p>
                <p className="mt-3 text-xs text-slate-400 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

// ─── Logo Partner Strip ───────────────────────────────────────────────────────
const LogoPartnerStrip = ({ data }) => {
  if (!data?.categories) return null;
  return (
    <section className="py-16 px-6 bg-[#1D1D46]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader chip={data.chip} title={data.title} subtitle={data.subtitle} dark />
        {data.categories.map((cat, i) => (
          <div key={i} className="mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-[#F0652E] mb-4">{cat.label}</p>
            <div className="flex flex-wrap gap-3">
              {(cat.logos || []).map((logo, j) => (
                <div key={j} className="bg-white/10 border border-white/15 rounded-lg px-5 py-2.5 text-white font-semibold text-sm hover:bg-white/20 transition-colors">
                  {logo.name}
                </div>
              ))}
            </div>
          </div>
        ))}
        {data.note && <p className="text-slate-500 text-xs mt-4 italic">{data.note}</p>}
      </div>
    </section>
  );
};

// ─── CTA Banner ───────────────────────────────────────────────────────────────
const CTABanner = ({ data }) => {
  const [activeVariant, setActiveVariant] = useState(0);
  if (!data?.variants) return null;
  const v = data.variants[activeVariant];
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {v.backgroundImage && (
        <div className="absolute inset-0">
          <img src={v.backgroundImage} alt="" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1D1D46]/95 to-[#F0652E]/90" />
        </div>
      )}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="flex gap-2 justify-center mb-8">
          {data.variants.map((va, i) => (
            <button key={i} onClick={() => setActiveVariant(i)} className={cn("px-4 py-1.5 rounded-full text-xs font-bold border transition-all", activeVariant === i ? "bg-white text-[#F0652E] border-white" : "border-white/30 text-white/70 hover:border-white/60")}>
              {va.chip}
            </button>
          ))}
        </div>
        {v.urgencyNote && <p className="text-[#F0652E] text-xs font-bold uppercase tracking-widest mb-4">{v.urgencyNote}</p>}
        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-5" style={{ fontFamily: FONT_DISPLAY }}>{v.title}</h2>
        <p className="text-white/75 text-base leading-relaxed max-w-2xl mx-auto mb-8">{v.subtitle}</p>
        {v.stats?.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {v.stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-black text-[#F0652E]" style={{ fontFamily: FONT_DISPLAY }}>{s.value}</div>
                <div className="text-white/60 text-xs font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        )}
        <div className="flex flex-wrap gap-4 justify-center">
          <a href={v.primaryCta?.href || "#"} className="inline-flex items-center gap-2 bg-white text-[#F0652E] font-bold px-7 py-3 rounded-lg hover:bg-[#d85725]/10 transition-colors">
            {v.primaryCta?.label} {icons.arrowRight}
          </a>
          <a href={v.secondaryCta?.href || "#"} className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold px-7 py-3 rounded-lg hover:border-white/70 transition-colors">
            {v.secondaryCta?.label}
          </a>
        </div>
      </div>
    </section>
  );
};


const ImageBulletSection = ({ data }) => {
  if (!data?.sections?.length) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {data.sections.map((section, index) => {
          const imageLeft = section.layout === "image-left";

          return (
            <div
              key={section.id || index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                imageLeft ? "" : "lg:[&>*:first-child]:order-2"
              }`}
            >
              {/* Image */}
              <div>
                <img
                  src={section.image}
                  alt={section.imageAlt}
                  className="w-full rounded-3xl object-cover shadow-lg"
                />
              </div>

              {/* Content */}
              <div>
                {section.chip && (
                  <span className="inline-flex px-4 py-2 rounded-full bg-orange-100 text-[#F0652E] text-sm font-semibold mb-4">
                    {section.chip}
                  </span>
                )}

                <h2 className="text-4xl font-bold text-[#1D1D46] mb-8">
                  {section.title}
                </h2>

                <div className="space-y-6">
                  {section.bullets?.map((bullet, i) => (
                    <div
                      key={i}
                      className="flex gap-4 p-4 rounded-2xl border border-slate-200 hover:border-[#F0652E]/30 transition"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#F0652E]/10 flex items-center justify-center text-[#F0652E] flex-shrink-0">
                        {getIcon(bullet.icon)}
                      </div>

                      <div>
                        <h3 className="font-bold text-[#1D1D46] mb-2">
                          {bullet.title}
                        </h3>

                        <p className="text-slate-600 text-sm leading-relaxed">
                          {bullet.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {section.cta && (
                  <div className="mt-8">
                    <a
                      href={section.cta.href}
                      className="inline-flex items-center px-6 py-3 rounded-xl bg-[#1D1D46] text-white font-semibold hover:opacity-90 transition"
                    >
                      {section.cta.label}
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};


const NewsBlogPreview = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">

        <SectionHeader
          chip={data.chip}
          title={data.title}
          subtitle={data.subtitle}
        />

        {/* Featured Article */}
        {data.featured && (
          <div className="grid lg:grid-cols-2 gap-8 items-center rounded-3xl overflow-hidden border border-[#0642BA]/10 bg-white shadow-sm hover:shadow-xl transition-all duration-300 mb-12">
            
            <div className="h-72 lg:h-96 overflow-hidden">
              <img
                src={data.featured.image}
                alt={data.featured.imageAlt || ""}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="p-8 lg:p-10">

              <div className="flex flex-wrap items-center gap-3 mb-5">

                <span className="bg-[#0642BA] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {data.featured.badge || "Featured"}
                </span>

                <span className="text-[#0642BA] text-xs font-semibold uppercase tracking-wide">
                  {data.featured.source}
                </span>

                <span className="text-slate-400 text-xs">
                  {data.featured.date}
                </span>
              </div>

              <h3
                className="text-3xl font-bold text-[#1D1D46] leading-tight mb-4"
                style={{ fontFamily: FONT_DISPLAY }}
              >
                {data.featured.headline}
              </h3>

              <p
                className="text-slate-600 leading-relaxed text-base"
                style={{ fontFamily: FONT_SANS }}
              >
                {data.featured.summary}
              </p>

              <a
                href={data.featured.href || "#"}
                className="inline-flex items-center gap-2 mt-6 text-[#F0652E] font-semibold hover:gap-3 transition-all"
                style={{ fontFamily: FONT_SANS }}
              >
                Read Full Story
                {icons.arrowRight}
              </a>
            </div>
          </div>
        )}

        {/* Article Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {(data.articles || []).slice(0, 6).map((art, i) => (
            <a
              key={i}
              href={art.href || "#"}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-[#0642BA]/30 hover:shadow-xl transition-all duration-300"
            >
              {art.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.headline}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              )}

              <div className="p-6">

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-[#0642BA] uppercase tracking-wide">
                    {art.source}
                  </span>

                  <span className="text-slate-300">•</span>

                  <span className="text-xs text-slate-400">
                    {art.date}
                  </span>
                </div>

                <h4
                  className="text-lg text-[#1D1D46] leading-snug mb-3 font-semibold group-hover:text-[#0642BA] transition-colors"
                  style={{ fontFamily: FONT_DISPLAY }}
                >
                  {art.headline}
                </h4>

                <p
                  className="text-sm text-slate-600 leading-relaxed mb-4"
                  style={{ fontFamily: FONT_SANS }}
                >
                  {art.summary}
                </p>

                <span
                  className="inline-flex items-center gap-2 text-[#F0652E] text-sm font-semibold"
                  style={{ fontFamily: FONT_SANS }}
                >
                  Read More
                  {icons.arrowRight}
                </span>

              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-14">

          <a
            href="/news"
            className="inline-flex items-center gap-2 bg-[#F0652E] hover:bg-[#d85725] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            style={{ fontFamily: FONT_SANS }}
          >
            View All News
            {icons.arrowRight}
          </a>

        </div>

      </div>
    </section>
  );
};


// ─── Interactive Map Cities ───────────────────────────────────────────────────
const InteractiveMap = ({ data }) => {
  const [selected, setSelected] = useState(null);
  if (!data?.cities) return null;
  const city = data.cities.find(c => c.id === selected);
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader chip={data.chip} title={data.title} subtitle={data.subtitle} />
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-3">
            {data.cities.map((c) => (
              <button key={c.id} onClick={() => setSelected(selected === c.id ? null : c.id)} className={cn("w-full text-left rounded-xl border p-4 transition-all", selected === c.id ? "border-[#F0652E]/50 bg-[#F0652E]/10" : "border-slate-200 bg-white hover:border-[#F0652E]/30")}>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={cn("w-2 h-2 rounded-full flex-shrink-0", c.highlight ? "bg-[#F0652E]" : "bg-slate-300")} />
                      <span className="font-bold text-[#1D1D46] text-sm">{c.name}</span>
                      {c.upcoming && <Tag>2025</Tag>}
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5 pl-4">{c.state} · {c.status}</p>
                  </div>
                  <span className="text-slate-300">{icons.mapPin}</span>
                </div>
              </button>
            ))}
          </div>
          <div className="lg:col-span-2">
            {city ? (
              <div className="rounded-2xl border border-[#F0652E]/30 bg-white overflow-hidden h-full">
                {city.image && <img src={city.image} alt={city.name} className="w-full h-48 object-cover" />}
                <div className="p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-black text-[#1D1D46]" style={{ fontFamily: FONT_DISPLAY }}>{city.name}</h3>
                      <p className="text-sm text-slate-400">{city.state}</p>
                    </div>
                    <span className={cn("px-3 py-1 rounded-full text-xs font-bold", city.highlight ? "bg-[#F0652E]/15 text-[#F0652E]" : "bg-slate-100 text-slate-500")}>
                      {city.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div className="bg-slate-50 rounded-lg p-3 text-center">
                      <div className="text-xs text-slate-400 font-medium">First Edition</div>
                      <div className="text-lg font-bold text-[#1D1D46]">{city.firstEdition}</div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-3 text-center">
                      <div className="text-xs text-slate-400 font-medium">Total Editions</div>
                      <div className="text-lg font-bold text-[#1D1D46]">{city.totalEditions}</div>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">{city.description}</p>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center h-full min-h-64 text-slate-400 text-sm">
                Select a city to explore its ICE history
              </div>
            )}
          </div>
        </div>
        {data.expansionCta && (
          <div className="mt-10 rounded-2xl bg-[#1D1D46] text-white p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold mb-1" style={{ fontFamily: FONT_DISPLAY }}>{data.expansionCta.title}</h4>
              <p className="text-slate-400 text-sm">{data.expansionCta.body}</p>
            </div>
            <a href={data.expansionCta.cta?.href || "#"} className="flex-shrink-0 bg-[#F0652E] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#d85725] transition-colors inline-flex items-center gap-2">
              {data.expansionCta.cta?.label} {icons.arrowRight}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

// ─── VVIP Celebrity Showcase ──────────────────────────────────────────────────
const VVIPShowcase = ({ data }) => {
  if (!data) return null;
  return (
    <section className="py-20 px-6 bg-[#1D1D46] text-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader chip={data.chip} title={data.title} subtitle={data.subtitle} dark />
        {data.intro && <p className="text-slate-400 text-sm leading-relaxed max-w-3xl mx-auto text-center mb-12">{data.intro}</p>}

        {data.vvipSection && (
          <div className="mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-[#F0652E] mb-6">{data.vvipSection.title}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {(data.vvipSection.cards || []).map((card, i) => (
                <div key={i} className="rounded-xl overflow-hidden bg-white/5 border border-white/10">
                  {card.image ? <img src={card.image} alt={card.name} className="w-full h-44 object-cover" /> : <div className="w-full h-44 bg-white/5 flex items-center justify-center text-white/20 text-4xl font-black">?</div>}
                  <div className="p-4">
                    <p className="font-bold text-white text-sm">{card.name}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{card.title}</p>
                    <p className="text-[#F0652E] text-xs font-semibold mt-2">{card.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {data.credibilityNote && (
          <div className="rounded-2xl bg-white/5 border border-white/10 p-8 text-center">
            <h4 className="text-xl font-bold text-[#F0652E] mb-3" style={{ fontFamily: FONT_DISPLAY }}>{data.credibilityNote.title}</h4>
            <p className="text-slate-300 text-sm leading-relaxed max-w-3xl mx-auto">{data.credibilityNote.body}</p>
          </div>
        )}

        {data.closingCta && (
          <div className="mt-10 text-center">
            <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: FONT_DISPLAY }}>{data.closingCta.title}</h3>
            <p className="text-slate-400 text-sm mb-6">{data.closingCta.subtitle}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={data.closingCta.primaryCta?.href || "#"} className="inline-flex items-center gap-2 bg-[#F0652E] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#d85725] transition-colors">
                {data.closingCta.primaryCta?.label} {icons.arrowRight}
              </a>
              <a href={data.closingCta.secondaryCta?.href || "#"} className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg hover:border-white/60 transition-colors">
                {data.closingCta.secondaryCta?.label}
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// ─── Comparison Section ────────────────────────────────────────────────────────
const ComparisonSection = ({ data }) => {
  const [activeTable, setActiveTable] = useState(0);
  if (!data?.tables) return null;
  const tbl = data.tables[activeTable];
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionHeader chip={data.chip} title={data.title} subtitle={data.subtitle} />
        <div className="flex gap-2 justify-center mb-8">
          {data.tables.map((t, i) => (
            <button key={i} onClick={() => setActiveTable(i)} className={cn("px-4 py-2 rounded-full text-sm font-semibold border transition-all", activeTable === i ? "bg-[#1D1D46] border-[#1D1D46] text-white" : "border-slate-200 text-slate-500 hover:border-slate-400")}>
              {t.label}
            </button>
          ))}
        </div>
        <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#1D1D46] text-white">
                {tbl.headers.map((h, i) => (
                  <th key={i} className={cn("px-5 py-4 text-left font-bold", i === 1 && "text-[#F0652E]", i === 0 && "w-1/3")}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tbl.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="px-5 py-3 font-semibold text-slate-700">{row[0]}</td>
                  <td className="px-5 py-3 text-green-700 font-medium">{row[1]}</td>
                  <td className="px-5 py-3 text-slate-400">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {data.conclusion && (
          <div className="mt-8 rounded-2xl bg-[#F0652E]/10 border border-[#F0652E]/20 p-7">
            <h4 className="font-bold text-[#1D1D46] text-lg mb-2" style={{ fontFamily: FONT_DISPLAY }}>{data.conclusion.title}</h4>
            <p className="text-[#F0652E]/80 text-sm leading-relaxed">{data.conclusion.body}</p>
          </div>
        )}
      </div>
    </section>
  );
};

// ─── Sector Category Tabs ─────────────────────────────────────────────────────
const SectorCategoryTabs = ({ data }) => {
  const [active, setActive] = useState(0);
  if (!data?.tabs) return null;
  const tab = data.tabs[active];
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader chip={data.chip} title={data.title} subtitle={data.subtitle} />
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {data.tabs.map((t, i) => (
            <button key={i} onClick={() => setActive(i)} className={cn("px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all", active === i ? "bg-[#F0652E] border-[#F0652E] text-white" : "border-slate-200 bg-white text-slate-500 hover:border-[#F0652E]/30")}>
              {t.label}
            </button>
          ))}
        </div>
        {tab && (
          <div className="grid lg:grid-cols-2 gap-10 items-center bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
            <div>
              {tab.stat && (
                <div className="inline-flex items-center gap-2 bg-[#F0652E]/10 border border-[#F0652E]/20 rounded-xl px-4 py-2 mb-6">
                  <span className="text-2xl font-black text-[#F0652E]" style={{ fontFamily: FONT_DISPLAY }}>{tab.stat.value}</span>
                  <span className="text-xs text-[#F0652E] font-medium">{tab.stat.label}</span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-[#1D1D46] leading-snug mb-4" style={{ fontFamily: FONT_DISPLAY }}>{tab.headline}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{tab.body}</p>
              <ul className="space-y-3">
                {(tab.features || []).map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-0.5">{icons.check}</span>
                    <span className="text-slate-600">{f}</span>
                  </li>
                ))}
              </ul>
              {tab.cta && (
                <a href={tab.cta.href || "#"} className="mt-7 inline-flex items-center gap-2 bg-[#F0652E] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#d85725] transition-colors">
                  {tab.cta.label} {icons.arrowRight}
                </a>
              )}
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              {tab.image ? <img src={tab.image} alt={tab.imageAlt || tab.label} className="w-full h-80 object-cover" /> : <div className="w-full h-80 bg-slate-100 flex items-center justify-center text-slate-300">No image</div>}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// ─── Process Steps ────────────────────────────────────────────────────────────
const ProcessSteps = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);
  if (!data) return null;
  const steps = activeTab === 0 ? data.exhibitorSteps : data.buyerSteps;
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionHeader chip={data.chip} title={data.title} subtitle={data.subtitle} />
        <div className="flex gap-2 justify-center mb-12">
          {(data.tabs || []).map((tab, i) => (
            <button key={i} onClick={() => setActiveTab(i)} className={cn("px-5 py-2 rounded-full text-sm font-semibold border transition-all", activeTab === i ? "bg-[#1D1D46] border-[#1D1D46] text-white" : "border-slate-200 text-slate-500 hover:border-slate-400")}>
              {tab}
            </button>
          ))}
        </div>
        <div className="relative">
          <div className="absolute left-7 top-0 bottom-0 w-px bg-slate-100 hidden md:block" />
          <div className="space-y-8">
            {(steps || []).map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-[#F0652E] text-white font-black text-lg flex items-center justify-center shadow-lg" style={{ fontFamily: FONT_DISPLAY }}>
                  {step.step}
                </div>
                <div className="flex-1 bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h4 className="font-bold text-[#1D1D46]">{step.title}</h4>
                    <span className="text-xs font-bold text-[#F0652E] bg-[#F0652E]/10 border border-[#F0652E]/20 px-2 py-0.5 rounded-full flex-shrink-0">{step.duration}</span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.body}</p>
                  {step.cta && (
                    <a href={step.cta.href || "#"} className="mt-4 inline-flex items-center gap-1.5 text-[#F0652E] font-semibold text-sm hover:gap-2 transition-all">
                      {step.cta.label} {icons.arrowRight}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const VideoShowcase = ({ data }) => {
  if (!data?.featured) return null;

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          chip={data.chip}
          title={data.title}
          subtitle={data.subtitle}
        />

        {/* Featured Video */}
        <div className="mb-12 overflow-hidden bg-white border border-slate-200 rounded-3xl">
          <div className="grid lg:grid-cols-2">
            <div className="relative">
              <img
                src={data.featured.thumbnail}
                alt={data.featured.thumbnailAlt}
                className="w-full h-full object-cover min-h-[320px]"
              />

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-semibold text-white rounded-full bg-[#F0652E]">
                  {data.featured.badge}
                </span>
              </div>

              <div className="absolute bottom-4 right-4 bg-black/80 text-white text-xs px-2 py-1 rounded">
                {data.featured.duration}
              </div>
            </div>

            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-[#1D1D46] mb-4">
                {data.featured.title}
              </h3>

              <p className="text-slate-600 leading-relaxed mb-6">
                {data.featured.description}
              </p>

              <button className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#1D1D46] text-white font-semibold hover:opacity-90 transition">
                Watch Video
              </button>
            </div>
          </div>
        </div>

        {/* Video Gallery */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {data.gallery?.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.thumbnailAlt}
                  className="w-full h-52 object-cover"
                />

                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 text-[#1D1D46] text-xs font-semibold px-2 py-1 rounded-full">
                    {video.year}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>

              <div className="p-5">
                <h4 className="font-bold text-[#1D1D46] mb-2 line-clamp-2">
                  {video.title}
                </h4>

                <p className="text-sm text-slate-500 line-clamp-4">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Awards ───────────────────────────────────────────────────────────────────
const Awards = ({ data }) => {
  if (!data?.cards) return null;
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader chip={data.chip} title={data.title} subtitle={data.subtitle} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.cards.map((card, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition-shadow">
              {card.image && <img src={card.image} alt={card.title} className="w-full h-36 object-cover" />}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#F0652E]">{card.source}</span>
                  <span className="text-xs text-slate-400 font-medium">{card.year}</span>
                </div>
                <h4 className="font-bold text-[#1D1D46] mb-2" style={{ fontFamily: FONT_DISPLAY }}>{card.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const HoverAnimationCards = ({ data }) => {
  if (!data?.cards?.length) return null;

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          chip={data.chip}
          title={data.title}
          subtitle={data.subtitle}
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {data.cards.map((card) => {
            const Icon = iconmap[card.icon];

            return (
              <div
                key={card.id}
                className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer shadow-lg"
              >
                {/* Background Image */}
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, ${card.color}, transparent)`,
                  }}
                />

                {/* Default Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end transition-all duration-500 group-hover:translate-y-[-120px]">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-white/20 backdrop-blur"
                  >
                    {Icon && <Icon className="w-7 h-7 text-white" />}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {card.title}
                  </h3>

                  <p className="text-white/90 text-sm">
                    {card.teaser}
                  </p>
                </div>

                {/* Hover Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white">
                  <h4
                    className="font-bold text-lg mb-3"
                    style={{ color: card.color }}
                  >
                    {card.title}
                  </h4>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {card.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ─── iGEN Mega Feature Banner ─────────────────────────────────────────────────
const MegaFeatureBanner = ({ data }) => {
  if (!data) return null;
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-[#1D1D46]">
      {data.backgroundImage && (
        <div className="absolute inset-0 opacity-10">
          <img src={data.backgroundImage} alt="" className="w-full h-full object-cover" />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0642BA]/70 to-[#1D1D46]/90" />
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#0642BA]/20 border border-[#0642BA]/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-[#0642BA] rounded-full animate-pulse" />
            <span className="text-[#0642BA] text-xs font-bold uppercase tracking-widest">{data.badge || "Now Live"}</span>
          </div>
          <Chip dark>{data.chip}</Chip>
          <h2 className="mt-4 text-3xl md:text-4xl font-black text-white leading-tight" style={{ fontFamily: FONT_DISPLAY }}>{data.title}</h2>
          <p className="mt-4 text-slate-300 text-sm leading-relaxed">{data.subtitle}</p>
          <p className="mt-4 text-slate-400 text-sm leading-relaxed">{data.body}</p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {(data.highlights || []).map((h, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                <span className="text-[#0642BA]">{icons.check}</span>{h.text}
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={data.primaryCta?.href || "#"} className="inline-flex items-center gap-2 bg-[#0642BA] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#05389e] transition-colors">
              {data.primaryCta?.label} {icons.arrowRight}
            </a>
            <a href={data.secondaryCta?.href || "#"} className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg hover:border-white/60 transition-colors">
              {data.secondaryCta?.label}
            </a>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#0642BA]/20">
          {data.image ? <img src={data.image} alt={data.imageAlt || ""} className="w-full h-80 object-cover" /> : <div className="w-full h-80 bg-[#0642BA]/20 flex items-center justify-center text-[#0642BA] text-6xl font-black">iGEN</div>}
        </div>
      </div>
    </section>
  );
};

// ─── Gallery Masonry ──────────────────────────────────────────────────────────
const GalleryMasonry = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  if (!data?.images) return null;
  const filtered = activeCategory === "All" ? data.images : data.images.filter(img => img.category === activeCategory);
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader chip={data.chip} title={data.title} subtitle={data.subtitle} />
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {(data.categories || []).map((cat, i) => (
            <button key={i} onClick={() => setActiveCategory(cat)} className={cn("px-4 py-1.5 rounded-full text-sm font-semibold border transition-all", activeCategory === cat ? "bg-[#1D1D46] border-[#1D1D46] text-white" : "border-slate-200 text-slate-500 hover:border-slate-400")}>
              {cat}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((img, i) => (
            <div key={i} className={cn("group relative overflow-hidden rounded-2xl", img.size === "large" && "sm:col-span-2 lg:col-span-1")}>
              <img src={img.image} alt={img.alt} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <div>
                  <p className="text-white font-semibold text-sm">{img.caption}</p>
                  <p className="text-white/60 text-xs mt-1">{img.year} · {img.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Community Section ────────────────────────────────────────────────────────
const CommunitySection = ({ data }) => {
  if (!data) return null;
  return (
    <section className="py-20 px-6 bg-[#1D1D46] text-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader chip={data.chip} title={data.title} subtitle={data.subtitle} dark />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {(data.communityStats || []).map((stat, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
              <div className="text-3xl font-black text-[#F0652E] mb-1" style={{ fontFamily: FONT_DISPLAY }}>{stat.value}</div>
              <div className="text-xs text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {(data.joinOptions || []).map((option, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-7">
              <h4 className="text-xl font-bold text-white mb-2" style={{ fontFamily: FONT_DISPLAY }}>{option.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{option.description}</p>
              <ul className="space-y-2 mb-6">
                {(option.benefits || []).map((b, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="text-green-400 flex-shrink-0 mt-0.5">{icons.check}</span>{b}
                  </li>
                ))}
              </ul>
              <a href={option.cta?.href || "#"} className="inline-flex items-center gap-2 bg-[#F0652E] text-white font-bold px-5 py-2.5 rounded-lg hover:bg-[#d85725] transition-colors text-sm">
                {option.cta?.label} {icons.arrowRight}
              </a>
            </div>
          ))}
        </div>
        {data.testimonialHighlight && (
          <blockquote className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-xl text-white/80 italic leading-relaxed" style={{ fontFamily: FONT_DISPLAY }}>"{data.testimonialHighlight.quote}"</p>
            <footer className="mt-3 text-slate-500 text-sm font-semibold">— {data.testimonialHighlight.attribution}</footer>
          </blockquote>
        )}
      </div>
    </section>
  );
};

// ─── Sticky Story (chapters) ──────────────────────────────────────────────────
const StickyScrollStory = ({ data }) => {
  const [active, setActive] = useState(0);
  if (!data?.chapters) return null;
  const ch = data.chapters[active];
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader chip={data.chip} title={data.title} subtitle={data.subtitle} />
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="space-y-2">
            {data.chapters.map((chapter, i) => (
              <button key={i} onClick={() => setActive(i)} className={cn("w-full text-left rounded-xl p-4 border transition-all", active === i ? "border-[#F0652E]/50 bg-[#F0652E]/10" : "border-slate-200 bg-white hover:border-[#F0652E]/30")}>
                <p className="text-xs font-bold text-[#F0652E] uppercase tracking-widest mb-1">{chapter.number}</p>
                <p className="font-semibold text-[#1D1D46] text-sm leading-snug">{chapter.title}</p>
              </button>
            ))}
          </div>
          <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
            {ch.image && <img src={ch.image} alt={ch.imageAlt || ""} className="w-full h-60 object-cover" />}
            <div className="p-8">
              <p className="text-xs font-bold text-[#F0652E] uppercase tracking-widest mb-1">{ch.number}</p>
              <h3 className="text-2xl font-bold text-[#1D1D46] mb-4" style={{ fontFamily: FONT_DISPLAY }}>{ch.title}</h3>
              {ch.pullQuote && (
                <blockquote className="border-l-4 border-[#F0652E] pl-5 italic text-slate-600 font-medium text-lg mb-5 leading-relaxed" style={{ fontFamily: FONT_DISPLAY }}>
                  "{ch.pullQuote}"
                </blockquote>
              )}
              <div className="space-y-3">
                {ch.body.split('\n\n').map((para, i) => (
                  <p key={i} className="text-slate-500 text-sm leading-relaxed">{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Navbar ───────────────────────────────────────────────────────────────────

  
 


// ─── Main App ─────────────────────────────────────────────────────────────────
type IceExihibitionProps = {
  apiPath?: string;
};

export default function LegacyOfMarketplaceLeadership({ apiPath = "/api/marketplace-leadership" }: IceExihibitionProps = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE}${apiPath}`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        console.log(res);
        return res.json();
        
      })
      .then(json => { setData(json); setLoading(false); })
      
      .catch(err => { setError(err.message); setLoading(false); });
  }, [apiPath]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#1D1D46]">
        
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#F0652E] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white font-semibold" style={{ fontFamily: FONT_DISPLAY }}>Loading ICE Global...</p>
        </div>
      </div>
    );
  }
  

  return (
    <div
  className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white"
  style={{ fontFamily: FONT_SANS }}
>
      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      {error && (
        <div className="bg-[#F0652E]/10 border-b border-[#F0652E]/25 px-6 py-2 text-center text-sm text-[#F0652E]">
          ⚠ Using fallback data (API error: {error}). Connect to <code className="bg-[#F0652E]/15 px-1 rounded">{API_BASE}{apiPath}</code>
        </div>
      )}
      < FloatingNavbar/>
      <div className="pt-16">
  {data?.heroBanner?.visible !== false && (
  <HeroBanner data={data.heroBanner} />
)}
{data?.splitInfoSection?.visible !== false && (
  <SplitInfoSection data={data.splitInfoSection} />
)}

{data?.featureCards?.visible !== false && (
  <FeatureCards data={data.featureCards} />
)}


{data?.gridCards?.visible !== false && (
  <GridCards data={data.gridCards} />
)}

{data?.statsStrip?.visible !== false && (
  <StatsStrip data={data.statsStrip} />
)}



{data?.timeline?.visible !== false && (
  <Timeline data={data.timeline} />
)}

{data?.testimonialCards?.visible !== false && (
  <Testimonials data={data.testimonialCards} />
)}

{data?.logoPartnerStrip?.visible !== false && (
  <LogoPartnerStrip data={data.logoPartnerStrip} />
)}

{data?.founderTeam?.visible !== false && (
  <FounderTeam data={data.founderTeam} />
)}


{data?.videoShowcase?.visible !== false && (
  <VideoShowcase data={data.videoShowcase} />
)}


{data?.faqAccordion?.visible !== false && (
  <FAQ data={data.faqAccordion} />
)}

{data?.ctaBanner?.visible !== false && (
  <CTABanner data={data.ctaBanner} />
)}


{data?.galleryMasonry?.visible !== false && (
  <GalleryMasonry data={data.galleryMasonry} />
)}


{data?.awardsAchievements?.visible !== false && (
  <Awards data={data.awardsAchievements} />
)}

{data?.processSteps?.visible !== false && (
  <ProcessSteps data={data.processSteps} />
)}

{data?.comparisonSection?.visible !== false && (
  <ComparisonSection data={data.comparisonSection} />
)}

{data?.stickyScrollStory?.visible !== false && (
  <StickyScrollStory data={data.stickyScrollStory} />
)}

{data?.sectorCategoryTabs?.visible !== false && (
  <SectorCategoryTabs data={data.sectorCategoryTabs} />
)}

{data?.hoverAnimationCards?.visible !== false && (
  <HoverAnimationCards data={data.hoverAnimationCards} />
)}

{data?.communitySection?.visible !== false && (
  <CommunitySection data={data.communitySection} />
)}


{data?.imageBulletSection?.visible !== false && (
  <ImageBulletSection data={data.imageBulletSection} />
)}


{data?.newsBlogPreview?.visible !== false && (
  <NewsBlogPreview data={data.newsBlogPreview} />
)}

{data?.megaFeatureBanner?.visible !== false && (
  <MegaFeatureBanner data={data.megaFeatureBanner} />
)}

{data?.interactiveMap?.visible !== false && (
  <InteractiveMap data={data.interactiveMap} />
)}

{data?.vvipCelebrityShowcase?.visible !== false && (
  <VVIPShowcase data={data.vvipCelebrityShowcase} />
)}
      </div>
    </div>
  );
}
