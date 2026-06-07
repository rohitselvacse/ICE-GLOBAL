



"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, LogIn, UserCircle2, Sun, Moon, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { navItems as defaultNavItems } from "@/data/expo-data";

interface DropdownItem {
  name: string;
  href: string;
}

interface NavItem {
  name: string;
  href: string;
  dropdown?: DropdownItem[];
  description?: string;
}

interface FloatingNavbarProps {
  navItems?: NavItem[];
  className?: string;
}

type Branding = {
  logoUrl: string;
  darkLogoUrl: string;
  navLogoUrl: string;
  navDarkLogoUrl: string;
  navWidth: number;
  navHeight: number;
  faviconUrl: string;
  logoType: string;
  width: number;
  height: number;
  padding: string;
  background: string;
  href: string;
  alt: string;
};

// ─── Full Mega Menu Data ───────────────────────────────────────────────────────
const MEGA_MENUS: Record<string, { description: string; items: DropdownItem[] }> = {
  "Ice Legacy": {
    description: "30 years of trust, legacy and marketplace leadership.",
    items: [
      { name: "About ICE Exhibitions",          href: "/ice-exihibition" },
      { name: "Founder Vision",                  href: "/ice-legacy/founder-vision" },
      { name: "Our Marketplace Philosophy",      href: "/ice-legacy/philosophy" },
      { name: "Mission & Vision",                href: "/ice-legacy/mission-vision" },
      { name: "Our 30-Year Journey",             href: "/ice-legacy/30-year-journey" },
      { name: "ICE Timeline (Year by Year)",     href: "/ice-legacy/timeline" },
      { name: "ICE Milestones",                  href: "/ice-legacy/milestones" },
      { name: "ICE Across Generations",          href: "/ice-legacy/generations" },
      { name: "Building Buyer Trust Since 1994", href: "/ice-legacy/buyer-trust" },
      { name: "Legacy of Marketplace Leadership",href: "/ice-legacy/marketplace-leadership" },
      { name: "Why India Trusts ICE",            href: "/ice-legacy/why-india-trusts" },
      { name: "ICE Brand Evolution",             href: "/ice-legacy/brand-evolution" },
      { name: "Historic Exhibitions Archive",    href: "/ice-legacy/historic-archive" },
      { name: "Historic Brand Participation",    href: "/ice-legacy/historic-brands" },
      { name: "ICE Through The Decades",         href: "/ice-legacy/through-decades" },
      { name: "Old Exhibition Photos",           href: "/gallery" },
      { name: "Historic Newspaper Coverage",     href: "/ice-legacy/newspaper-coverage" },
      { name: "The Sushil Mantri Story",         href: "/ice-legacy/sushil-mantri-story" },
      { name: "ICE 1.0 to iGEN 2.0",            href: "/ice-legacy/ice-to-igen" },
      { name: "ICE Economic Contribution",       href: "/ice-legacy/economic-contribution" },
    ],
  },
  "Exhibit At Ice": {
    description: "Book your stall, launch your brand, grow your business.",
    items: [
      { name: "Why Exhibit at ICE",         href: "/exhibit/why-exhibit" },
      { name: "Exhibitor Benefits",         href: "/exhibit/benefits" },
      { name: "Why Brands Choose ICE",      href: "/exhibit/why-brands" },
      { name: "Visibility Creates Sales",   href: "/exhibit/visibility-sales" },
      { name: "Live Buyer Engagement",      href: "/exhibit/buyer-engagement" },
      { name: "Lead Generation at ICE",     href: "/exhibit/lead-generation" },
      { name: "Product Launch Platform",    href: "/exhibit/product-launch" },
      { name: "Trust Transfer Effect",      href: "/exhibit/trust-transfer" },
      { name: "Exhibition ROI",             href: "/exhibit/roi" },
      { name: "Why Startups Should Exhibit",href: "/exhibit/startups" },
      { name: "Why SMEs Should Exhibit",    href: "/exhibit/smes" },
      { name: "Why Large Brands Exhibit",   href: "/exhibit/large-brands" },
      { name: "Stall Booking",              href: "/exhibit/stall-booking" },
      { name: "Sponsorship Packages",       href: "/sponsor" },
      { name: "Pavilion Booking",           href: "/exhibit/pavilion-booking" },
      { name: "Premium Branding Zones",     href: "/exhibit/branding-zones" },
      { name: "LED & Digital Promotions",   href: "/exhibit/led-digital" },
      { name: "Custom Stall Design",        href: "/exhibit/stall-design" },
      { name: "Multi-City Participation",   href: "/exhibit/multi-city" },
      { name: "First-Time Exhibitor Guide", href: "/exhibit/first-time-guide" },
      { name: "Exhibitor FAQ",              href: "/exhibit/faq" },
    ],
  },
  "Visit Ice": {
    description: "Discover, compare and connect — all under one roof.",
    items: [
      { name: "Why Visit ICE",                href: "/visit/why-visit" },
      { name: "Visitor Benefits",             href: "/visit/benefits" },
      { name: "Product Discovery",            href: "/visit/product-discovery" },
      { name: "New Brand Discovery",          href: "/visit/new-brands" },
      { name: "Innovation Showcase",          href: "/visit/innovation" },
      { name: "Live Demonstrations",          href: "/visit/live-demos" },
      { name: "Exclusive Exhibition Deals",   href: "/visit/deals" },
      { name: "Family Entertainment & Shopping", href: "/visit/family" },
      { name: "Compare Products Live",        href: "/visit/compare-products" },
      { name: "Meet Brand Founders Directly", href: "/visit/meet-founders" },
      { name: "Business Networking",          href: "/visit/networking" },
      { name: "Buyer-Seller Meetings",        href: "/visit/buyer-seller-meetings" },
      { name: "Distributor & Retailer Connect", href: "/visit/distributor-connect" },
      { name: "B2B Marketplace Opportunities",href: "/visit/b2b-marketplace" },
      { name: "Visitor FAQ",                  href: "/visit/faq" },
      { name: "Exhibition Experience Guide",  href: "/visit/experience-guide" },
    ],
  },
  "Industries @ Ice": {
    description: "15 high-impact sectors under the ICE ecosystem.",
    items: [
      { name: "Real Estate Expo",           href: "/industries/real-estate" },
      { name: "EV & Mobility Expo",         href: "/industries/ev-mobility" },
      { name: "FMCG Expo",                  href: "/industries/fmcg" },
      { name: "Electronics Expo",           href: "/industries/electronics" },
      { name: "Home Appliances Expo",       href: "/industries/home-appliances" },
      { name: "Fashion & Lifestyle Expo",   href: "/industries/fashion-lifestyle" },
      { name: "Food & Beverage Expo",       href: "/industries/food-beverage" },
      { name: "Ayurveda & Organic Expo",    href: "/industries/ayurveda-organic" },
      { name: "Healthcare & Wellness Expo", href: "/industries/healthcare-wellness" },
      { name: "Startup Expo",               href: "/industries/startup" },
      { name: "Made In India Expo",         href: "/industries/made-in-india" },
      { name: "Smart Home & Technology Expo",href: "/industries/smart-home-tech" },
      { name: "Education Expo",             href: "/industries/education" },
      { name: "Luxury Products Expo",       href: "/industries/luxury" },
      { name: "Financial Services Expo",    href: "/industries/financial-services" },
    ],
  },
  "Brands & Success": {
    description: "Real brands. Real results. Real proof.",
    items: [
      { name: "Top Brands at ICE",          href: "/brands/topbrands" },
      { name: "Historic Brand Participation",href: "/brands/historic" },
      { name: "Emerging Brands at ICE",     href: "/brands/emerging" },
      { name: "Brand Success Stories",      href: "/brands/success-stories" },
      { name: "Marketplace Leaders",        href: "/brands/marketplace-leaders" },
      { name: "Startup Success Stories",    href: "/brands/startups" },
      { name: "Seller Success Stories",     href: "/brands/seller" },
      { name: "Buyer Success Stories",      href: "/buyers/stories" },
      { name: "Business Expansion Stories", href: "/brands/expansion" },
      { name: "Product Launch Stories",     href: "/brands/product-launches" },
      { name: "Video Testimonials",         href: "/brands/video-testimonials" },
      { name: "ICE Across India",           href: "/brands/across-india" },
      { name: "City-Wise Exhibitions",      href: "/brands/city-exhibitions" },
      { name: "National Exhibition Network",href: "/brands/national-network" },
    ],
  },
  "Upcoming Expos": {
    description: "Book your stall or register as a visitor today.",
    items: [
      { name: "Upcoming Events & Calendar",  href: "/expos/calendar" },
      { name: "Mega Expo Events",            href: "/expos/mega-events" },
      { name: "Industry-Specific Expos",     href: "/expos/industry-specific" },
      { name: "Multi-City Event Schedule",   href: "/expos/multi-city" },
      { name: "Exhibitor Registration",      href: "/expos/exhibitor-registration" },
      { name: "Visitor Registration",        href: "/expos/visitor-registration" },
      { name: "Sponsorship Registration",    href: "/upcoming/sponsor" },
      { name: "VIP Access Registration",     href: "/expos/vip-access" },
      { name: "Early Bird Booking",          href: "/expos/early-bird" },
      { name: "Launch Events",               href: "/expos/launch-events" },
      { name: "B2B Trade Events",            href: "/expos/b2b-trade" },
    ],
  },
  "Media Center": {
    description: "Photo gallery, press coverage, blogs and more.",
    items: [
      { name: "Photo Gallery",               href: "/gallery" },
      { name: "Video Gallery",               href: "/media/videos" },
      { name: "Historic Archives",           href: "/media/archives" },
      { name: "Celebrities @ ICE",           href: "/media/celebrities" },
      { name: "VVIPs @ ICE",                href: "/media/vvips" },
      { name: "Political Leaders at ICE",    href: "/media/political-leaders" },
      { name: "Industry Icons at ICE",       href: "/media/industry-icons" },
      { name: "Press Releases",              href: "/media/press-releases" },
      { name: "Media Coverage",              href: "/media/coverage" },
      { name: "ICE In The News",             href: "/media/in-the-news" },
      { name: "TV & Digital Media Coverage", href: "/media/tv-digital" },
      { name: "Press Kit Download",          href: "/media/press-kit" },
      { name: "Exhibition Trends Blog",      href: "/media/blog/exhibition-trends" },
      { name: "Consumer Trends Blog",        href: "/media/blog/consumer-trends" },
      { name: "Marketplace Insights Blog",   href: "/media/blog/marketplace-insights" },
      { name: "Physical vs Digital Marketing",href: "/media/blog/physical-vs-digital" },
      { name: "Brand Growth Articles",       href: "/media/blog/brand-growth" },
      { name: "Future of Exhibitions",       href: "/media/blog/future-exhibitions" },
    ],
  },
  "Ice To Igen": {
    description: "The bridge from 30 years of legacy to the future of trust platforms.",
    items: [
      { name: "What Is iGEN",                           href: "/IgenWorld" },
      { name: "ICE 1.0 to iGEN 2.0",                   href: "/igen/ice-to-igen" },
      { name: "What ICE Did Physically — iGEN Digitally",href: "/igen/physical-to-digital" },
      { name: "The Future of Trust Platforms",          href: "/igen/trust-platforms" },
      { name: "India Global Expo News",                 href: "/igenNews" },
      { name: "Recognition Economy",                    href: "/igen/recognition-economy" },
      { name: "Reputation Economy",                     href: "/igen/reputation-economy" },
      { name: "Global Buyer Discovery",                 href: "/igen/global-buyer-discovery" },
      { name: "Export Marketplace",                     href: "/igen/export-marketplace" },
      { name: "Future of B2B Trust",                    href: "/igen/b2b-trust" },
      { name: "SME Ecosystem",                          href: "/igen/sme-ecosystem" },
      { name: "Mission 2047",                           href: "/igen/mission-2047" },
      { name: "Building 1000 Business Leaders",         href: "/igen/1000-leaders" },
      { name: "The Future of Marketplace Platforms",    href: "/igen/future-marketplace" },
    ],
  },
  "Investor & Partnership": {
    description: "Invest, partner, collaborate or join the ICE team.",
    items: [
      { name: "Partnership Opportunities",      href: "/partnership" },
      { name: "Investor Relations",             href: "/invest/investor-relations" },
      { name: "Strategic Alliances",            href: "/invest/strategic-alliances" },
      { name: "International Trade Partnerships",href: "/invest/international-trade" },
      { name: "Global Marketplace Vision",      href: "/invest/global-vision" },
      { name: "India Expansion Strategy",       href: "/invest/india-expansion" },
      { name: "Brand Collaborations",           href: "/invest/brand-collaborations" },
      { name: "Joint Ventures",                 href: "/invest/joint-ventures" },
      { name: "Industry Associations",          href: "/invest/industry-associations" },
      { name: "Government Collaboration",       href: "/invest/government" },
      { name: "Franchise Inquiry",              href: "/invest/franchise" },
      { name: "Join ICE — Careers",             href: "/invest/careers" },
      { name: "Career Opportunities",           href: "/invest/openings" },
      { name: "Internship Opportunities",       href: "/invest/internships" },
      { name: "Why Work With ICE",              href: "/invest/why-work-with-ice" },
    ],
  },
};

// ─── Theme engine ──────────────────────────────────────────────────────────────
// step 0 = full light (default)
// step 1 = NAVBAR + MEGA MENUS go dark — page body stays light
// step 2 = FULL dark — navbar + mega menus + entire body + all page content
const STYLE_ID = "ice-theme-override";
type ThemeStep = 0 | 1 | 2;

function applyThemeStep(step: ThemeStep) {
  // Only step 2 applies Tailwind dark class to <html>
  if (step === 2) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  let el = document.getElementById(STYLE_ID) as HTMLStyleElement | null;
  if (!el) {
    el = document.createElement("style");
    el.id = STYLE_ID;
    document.head.appendChild(el);
  }

  if (step === 0) {
    // ── Full light ────────────────────────────────────────────────────────────
    el.textContent = `
      :root {
        color-scheme: light;
        --background:0 0% 100%; --foreground:0 0% 5%;
        --card:0 0% 100%; --card-foreground:0 0% 5%;
        --popover:0 0% 100%; --popover-foreground:0 0% 5%;
        --primary:217 91% 60%; --primary-foreground:0 0% 100%;
        --secondary:210 40% 96%; --secondary-foreground:0 0% 5%;
        --muted:210 40% 96%; --muted-foreground:215 16% 47%;
        --accent:210 40% 96%; --accent-foreground:0 0% 5%;
        --border:214 32% 91%; --input:214 32% 91%; --ring:217 91% 60%;
      }
      body,#root { background-color:hsl(0,0%,100%)!important; color:hsl(0,0%,5%)!important; }

      .ice-navbar { background:hsla(0,0%,100%,0.85)!important; border-bottom:1px solid hsl(214,32%,91%)!important; box-shadow:none!important; }
      .ice-logo-text { color:hsl(0,0%,5%)!important; }
      .ice-nav-link { color:hsl(215,16%,47%)!important; text-shadow:none!important; transition:color 0.25s,background 0.25s!important; }
      .ice-nav-link:hover { color:hsl(0,0%,5%)!important; background:hsla(0,0%,0%,0.05)!important; }
      .ice-nav-link.active { color:hsl(217,91%,60%)!important; background:hsla(217,91%,60%,0.1)!important; }

      .ice-mega-panel { background:hsl(0,0%,100%)!important; border-color:hsl(214,32%,91%)!important; box-shadow:0 8px 40px rgba(0,0,0,0.1)!important; }
      .ice-mega-left { background:hsla(217,91%,60%,0.05)!important; }
      .ice-mega-title { color:hsl(0,0%,5%)!important; }
      .ice-mega-desc { color:hsl(215,16%,47%)!important; }
      .ice-mega-see-all { color:hsl(217,91%,60%)!important; }
      .ice-mega-sub-link { color:hsl(215,16%,47%)!important; }
      .ice-mega-sub-link:hover { color:hsl(0,0%,5%)!important; background:hsla(217,91%,60%,0.08)!important; }
      .ice-mega-arrow { color:hsl(217,91%,60%)!important; }
      .ice-mega-divider { border-color:hsl(214,32%,91%)!important; }
    `;
  }
  
  else if (step === 1) {
    // ── Navbar + Mega menus dark — body stays 100% untouched ─────────────────
    el.textContent = `
      /* NO :root, NO body overrides — page content completely unchanged */

      .ice-navbar {
        background:hsla(0,0%,7%,0.98)!important;
        border-bottom:1px solid hsl(0,0%,18%)!important;
        box-shadow:0 2px 24px rgba(0,0,0,0.5)!important;
        backdrop-filter:blur(18px)!important;
      }
      .ice-logo-text { color:hsl(0,0%,95%)!important; }
      .ice-nav-link { color:hsl(0,0%,62%)!important; text-shadow:none!important; transition:color 0.25s,background 0.25s!important; }
      .ice-nav-link:hover { color:hsl(0,0%,98%)!important; background:hsla(255,255,255,0.07)!important; }
      .ice-nav-link.active { color:hsl(217,91%,65%)!important; background:hsla(217,91%,60%,0.15)!important; }

      .ice-mega-panel {
        background:hsl(0,0%,9%)!important;
        border-color:hsl(0,0%,18%)!important;
        box-shadow:0 20px 60px rgba(0,0,0,0.65)!important;
      }
      .ice-mega-left { background:hsla(217,91%,60%,0.08)!important; }
      .ice-mega-title { color:hsl(0,0%,95%)!important; }
      .ice-mega-desc { color:hsl(0,0%,52%)!important; }
      .ice-mega-see-all { color:hsl(217,91%,65%)!important; }
      .ice-mega-sub-link { color:hsl(0,0%,52%)!important; }
      .ice-mega-sub-link:hover { color:hsl(0,0%,95%)!important; background:hsla(255,255,255,0.06)!important; }
      .ice-mega-arrow { color:hsl(217,91%,60%)!important; }
      .ice-mega-divider { border-color:hsl(0,0%,18%)!important; }
    `;
  }
  

//   else if (step === 1) {
//  el.textContent = `
//   html,
//   body,
//   #root,
//   main,
//   section,
//   div {
//     background-color: #050505 !important;
//     color: white !important;
//   }


//     .ice-navbar {
//       background: hsla(0,0%,7%,0.98) !important;
//       border-bottom: 1px solid hsl(0,0%,18%) !important;
//       box-shadow: 0 2px 24px rgba(0,0,0,0.5) !important;
//       backdrop-filter: blur(18px) !important;
//     }

//     .ice-logo-text { color:hsl(0,0%,95%)!important; }
//     .ice-nav-link { color:hsl(0,0%,62%)!important; }

//     .ice-mega-panel {
//       background:hsl(0,0%,9%)!important;
//       border-color:hsl(0,0%,18%)!important;
//     }
//   `;
// }
  else {
    // ── Full dark — everything ────────────────────────────────────────────────
    el.textContent = `
      :root {
        color-scheme: dark;
        --background:0 0% 5%; --foreground:0 0% 98%;
        --card:0 0% 8%; --card-foreground:0 0% 98%;
        --popover:0 0% 5%; --popover-foreground:0 0% 98%;
        --primary:217 91% 60%; --primary-foreground:0 0% 5%;
        --secondary:0 0% 12%; --secondary-foreground:0 0% 98%;
        --muted:0 0% 12%; --muted-foreground:0 0% 60%;
        --accent:0 0% 12%; --accent-foreground:0 0% 98%;
        --border:0 0% 15%; --input:0 0% 15%; --ring:217 91% 60%;
      }
      body,#root { background-color:hsl(0,0%,5%)!important; color:hsl(0,0%,98%)!important; }

      .ice-navbar { background:hsla(0,0%,5%,0.96)!important; border-bottom:1px solid hsl(0,0%,15%)!important; box-shadow:0 2px 20px rgba(0,0,0,0.4)!important; }
      .ice-logo-text { color:hsl(0,0%,98%)!important; }
      .ice-nav-link { color:hsl(0,0%,60%)!important; text-shadow:none!important; transition:color 0.25s,background 0.25s!important; }
      .ice-nav-link:hover { color:hsl(0,0%,98%)!important; background:hsla(255,255,255,0.06)!important; }
      .ice-nav-link.active { color:hsl(217,91%,60%)!important; background:hsla(217,91%,60%,0.15)!important; }

      .ice-mega-panel { background:hsl(0,0%,8%)!important; border-color:hsl(0,0%,15%)!important; box-shadow:0 20px 60px rgba(0,0,0,0.7)!important; }
      .ice-mega-left { background:hsla(217,91%,60%,0.07)!important; }
      .ice-mega-title { color:hsl(0,0%,98%)!important; }
      .ice-mega-desc { color:hsl(0,0%,55%)!important; }
      .ice-mega-see-all { color:hsl(217,91%,60%)!important; }
      .ice-mega-sub-link { color:hsl(0,0%,55%)!important; }
      .ice-mega-sub-link:hover { color:hsl(0,0%,98%)!important; background:hsla(255,255,255,0.05)!important; }
      .ice-mega-arrow { color:hsl(217,91%,60%)!important; }
      .ice-mega-divider { border-color:hsl(0,0%,15%)!important; }
    `;
  }

  localStorage.setItem("theme-step", String(step));
}

// ─── Theme Toggle ──────────────────────────────────────────────────────────────
const ThemeToggle = () => {
  const [step, setStep] = useState<ThemeStep>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme-step");
      if (saved === "1") return 1;
      if (saved === "2") return 2;
      const legacy = localStorage.getItem("theme");
      if (legacy === "dark") return 2;
    }
    return 0;
  });

  useEffect(() => { applyThemeStep(step); }, []); // eslint-disable-line

  const toggle = () => {
    // 0 → 1 (navbar dark) → 2 (full dark) → 0 (back to light)
    const next: ThemeStep = step === 0 ? 1 : step === 1 ? 2 : 0;
    setStep(next);
    applyThemeStep(next);
  };

  const isDark = step === 2;
  const isHalf = step === 1;

  // Toggle pill bg colour
  const bgColor  = isDark ? "#1e293b" : isHalf ? "#334155" : "#e2e8f0";
  const bdrColor = isDark ? "#334155" : isHalf ? "#475569" : "#cbd5e1";
  // Knob x: 0=light(left,2), 1=half(centre,14), 2=dark(right,26)
  const knobX    = isDark ? 26 : isHalf ? 14 : 2;
  const knobBg   = isDark ? "#3b82f6" : isHalf ? "#64748b" : "#ffffff";
  const knobShadow = "0 1px 4px rgba(0,0,0,0.3)";

  return (
    <button
      onClick={toggle}
      title={
        step === 0 ? "Step 1: Dark navbar only"
        : step === 1 ? "Step 2: Full dark mode"
        : "Back to light mode"
      }
      aria-label={step === 0 ? "Light mode" : step === 1 ? "Navbar dark" : "Full dark mode"}
      style={{
        position:"relative", display:"inline-flex", alignItems:"center",
        width:52, height:28, borderRadius:9999,
        backgroundColor:bgColor, border:`1px solid ${bdrColor}`,
        cursor:"pointer", flexShrink:0,
        transition:"background-color 0.3s ease, border-color 0.3s ease",
        outline:"none", padding:0,
      }}
    >
      <Sun size={11} strokeWidth={2.5} style={{ position:"absolute", left:7, color: step === 0 ? "#eab308" : "#64748b", pointerEvents:"none", transition:"color 0.3s" }} />
      <Moon size={11} strokeWidth={2.5} style={{ position:"absolute", right:7, color: isDark ? "#93c5fd" : "#94a3b8", pointerEvents:"none", transition:"color 0.3s" }} />
      <motion.span
        animate={{ x: knobX }}
        transition={{ type:"spring", stiffness:500, damping:35 }}
        style={{
          position:"absolute", left:0, width:22, height:22, borderRadius:"50%",
          backgroundColor: knobBg, boxShadow: knobShadow,
          display:"flex", alignItems:"center", justifyContent:"center", zIndex:1,
          transition:"background-color 0.3s",
        }}
      >
        {isDark
          ? <Moon size={11} style={{ color:"#fff" }} strokeWidth={2.5} />
          : isHalf
            ? <Moon size={11} style={{ color:"#cbd5e1" }} strokeWidth={2.5} />
            : <Sun size={11} style={{ color:"#eab308" }} strokeWidth={2.5} />
        }
      </motion.span>
    </button>
  );
};

// ─── Mega Menu Dropdown ────────────────────────────────────────────────────────
const MegaDropdown = ({ item, isActive }: { item: NavItem; isActive: boolean }) => {
  const [open, setOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const megaData = MEGA_MENUS[item.name];

  const onEnter = () => { if (timerRef.current) clearTimeout(timerRef.current); setOpen(true); };
  const onLeave = () => { timerRef.current = setTimeout(() => setOpen(false), 180); };

  // Split dropdown items into 3 columns
  const cols = megaData ? [
    megaData.items.slice(0, Math.ceil(megaData.items.length / 3)),
    megaData.items.slice(Math.ceil(megaData.items.length / 3), Math.ceil(megaData.items.length * 2 / 3)),
    megaData.items.slice(Math.ceil(megaData.items.length * 2 / 3)),
  ] : [];

  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <Link
        to={item.href}
        className={cn(
          "ice-nav-link inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap",
          isActive ? "active text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-card"
        )}
      >
        {item.name}
        {megaData && (
          <ChevronDown size={13} className={cn("transition-transform duration-200 flex-shrink-0", open ? "rotate-180" : "")} />
        )}
      </Link>

      <AnimatePresence>
        {open && megaData && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.18 }}
            className="fixed left-0 right-0 mt-2 z-50 px-4"
            style={{ top: "60px" }}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            <div className="ice-mega-panel max-w-6xl mx-auto rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
              <div className="grid grid-cols-4 ice-mega-divider divide-x divide-border h-full">
                {/* Left — title + description + CTA */}
                <div className="ice-mega-left p-6 bg-primary/5 flex flex-col justify-between">
                  <div>
                    <h3 className="ice-mega-title text-base font-bold text-foreground mb-2">{item.name}</h3>
                    <p className="ice-mega-desc text-sm text-muted-foreground leading-relaxed">{megaData.description}</p>
                  </div>
                  <Link
                    to={item.href}
                    className="ice-mega-see-all mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    See all →
                  </Link>
                </div>

                {/* Centre — 3 columns of links */}
                {cols.map((col, ci) => (
                  <div key={ci} className="p-6 flex flex-col gap-1">
                    {col.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        className="ice-mega-sub-link flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-primary/8 transition-colors group"
                      >
                        <span className="ice-mega-arrow text-primary text-xs opacity-60 group-hover:opacity-100">→</span>
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── FloatingNavbar ────────────────────────────────────────────────────────────
export const FloatingNavbar = ({
  navItems,
  className,
}: FloatingNavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileOpenItem, setMobileOpenItem] = useState<string | null>(null);
  const [items, setItems] = useState<NavItem[]>([]);
  const [branding, setBranding] = useState<Branding | null>(null);
  const [showMe, setShowMe] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const base = import.meta.env.VITE_API_BASE_URL || "";
    const loadNav = async () => {
      try {
        const res = await fetch(`${base}/hero`);
        if (!res.ok) throw new Error();
        const data = await res.json();
        setItems(Array.isArray(data.navItems) && data.navItems.length ? data.navItems : defaultNavItems);
      } catch {
        setItems(defaultNavItems);
      }
    };
    loadNav();

    const syncAuth = () => {
      const token = localStorage.getItem("user_access_token");
      setShowMe(!!token);
      setShowLogin(!token);
    };
    syncAuth();
    const handleStorage = (e: StorageEvent) => { if (e.key === "user_access_token" || e.key === "user_email") syncAuth(); };
    const handleAuthChange = () => syncAuth();
    window.addEventListener("storage", handleStorage);
    window.addEventListener("auth-change", handleAuthChange as EventListener);
    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("auth-change", handleAuthChange as EventListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const base = import.meta.env.VITE_API_BASE_URL || "";
    fetch(`${base}/branding`)
      .then((r) => r.ok ? r.json() : null)
      .then((p) => {
        if (!p) return;
        setBranding(p);
        if (p?.faviconUrl) {
          const l = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;
          if (l) { l.href = p.faviconUrl; } else {
            const nl = document.createElement("link"); nl.rel = "icon"; nl.href = p.faviconUrl; document.head.appendChild(nl);
          }
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (navItems?.length) setItems(navItems);
  }, [navItems]);
  useEffect(() => { setIsMobileMenuOpen(false); setMobileOpenItem(null); }, [location.pathname]);

  return (
    <>
      {/* ── Desktop nav ── */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "ice-navbar fixed top-0 inset-x-0 z-50 px-1 md:px-2 py-3 transition-all duration-300",
          isScrolled
            ? "bg-card/90 backdrop-blur-xl border-b border-border shadow-xl"
            : "bg-card/60 backdrop-blur-sm",
          className
        )}
      >
        {/* inject scrollbar-hiding rule once */}
        <style>{`
          .ice-nav-links { scrollbar-width: none; -ms-overflow-style: none; }
          .ice-nav-links::-webkit-scrollbar { display: none; }
        `}</style>

        {/*
          3-column layout — all on ONE line, never wraps:
          [logo: shrink-0] [links: overflow-x scroll, fills middle] [auth: shrink-0]
          The outer nav uses overflow:hidden so nothing can spill.
        */}
        <div
          className="flex items-center w-full max-w-[1600px] mx-auto"
          style={{ minWidth: 0, overflow: "hidden" }}
        >
          {/* ① Logo — fixed, never shrinks */}
          <Link
            to={branding?.href || "/"}
            className="ice-logo-text flex items-center gap-2 font-display font-bold text-xl text-foreground hover:text-primary transition-colors"
            style={{
              flexShrink: 0,
              padding: branding?.padding || undefined,
              background: branding?.background || undefined,
              marginRight: "8px",
            }}
          >
            {branding?.navLogoUrl || branding?.logoUrl ? (
              <img
                src={branding.navLogoUrl || branding.logoUrl}
                alt={branding.alt || "ICE Exhibitions"}
                style={{
                  width: branding.navWidth || branding.width ? `${branding.navWidth || branding.width}px` : undefined,
                  height: branding.navHeight || branding.height ? `${branding.navHeight || branding.height}px` : undefined,
                  objectFit: "contain",
                }}
              />
            ) : (
              <>ICE <span className="text-primary"> GLOBAL </span></>
            )}
          </Link>

          {/* ② Nav links — scrollable, fills all remaining middle space */}
          <div
            className="ice-nav-links hidden md:flex items-center gap-0.5"
            style={{
              flex: "1 1 0%",
              minWidth: 0,
              overflowX: "auto",
              overflowY: "visible",
              flexWrap: "nowrap",
            }}
          >
            {items.map((item) => (
              <MegaDropdown key={item.name} item={item} isActive={location.pathname === item.href} />
            ))}
          </div>

          {/* ③ Auth + Theme — fixed right, never shrinks or wraps */}
          <div
            className="hidden md:flex items-center gap-2"
            style={{ flexShrink: 0, marginLeft: "8px" }}
          >
            {showMe ? (
              <Link
                to="/me"
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap",
                  location.pathname === "/me" ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-card"
                )}
              >
                <span className="inline-flex items-center gap-1"><UserCircle2 className="w-4 h-4" /> Me</span>
              </Link>
            ) : showLogin ? (
              <Link
                to="/me"
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap",
                  location.pathname === "/me" ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-card"
                )}
              >
                <span className="inline-flex items-center gap-1"><LogIn className="w-4 h-4" /> Login</span>
              </Link>
            ) : null}
            <ThemeToggle />
          </div>

          {/* Mobile: toggle + hamburger */}
          <div className="md:hidden flex items-center gap-3" style={{ flexShrink: 0, marginLeft: "auto" }}>
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen((p) => !p)}
              className="p-2 text-foreground"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-background/97 backdrop-blur-xl pt-20 overflow-y-auto"
          >
            <div className="flex flex-col px-6 pb-10">
              {items.map((item, index) => {
                const megaData = MEGA_MENUS[item.name];
                const isOpen = mobileOpenItem === item.name;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-border/40"
                  >
                    {megaData ? (
                      <>
                        <button
                          onClick={() => setMobileOpenItem(isOpen ? null : item.name)}
                          className="w-full flex items-center justify-between py-4 text-lg font-semibold text-foreground"
                        >
                          {item.name}
                          <ChevronDown size={18} className={cn("transition-transform duration-200 text-muted-foreground", isOpen ? "rotate-180" : "")} />
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pb-4 flex flex-col gap-0.5">
                                {megaData.items.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    to={sub.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                                  >
                                    <span className="text-primary text-xs">→</span>
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn("block py-4 text-lg font-semibold transition-colors", location.pathname === item.href ? "text-primary" : "text-foreground")}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                );
              })}

              {/* Auth */}
              {(showMe || showLogin) && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: items.length * 0.05 }}
                  className="border-b border-border/40"
                >
                  <Link
                    to="/me"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-4 text-lg font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    <span className="inline-flex items-center gap-2">
                      {showMe ? <><UserCircle2 className="w-5 h-5" /> Me</> : <><LogIn className="w-5 h-5" /> Login</>}
                    </span>
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};