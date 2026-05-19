// app/ice-legacy/page.tsx
// React + TypeScript + TailwindCSS
// Fully Responsive ICE Legacy Page

import { FloatingNavbar } from "@/components/ui/floating-navbar";
import {
  Calendar,
  ArrowRight,
  Building2,
  Landmark,
  Globe,
} from "lucide-react";

const timelineData = [
  {
    year: "1994",
    title: "First ICE Exhibition, Bengaluru",
  },
  {
    year: "1995",
    title: "Second edition — demand exceeds capacity",
  },
  {
    year: "1997",
    title: "Sushil Mantri sells 42 flats in 22 days",
  },
  {
    year: "2000",
    title: "Multi-city expansion begins",
  },
  {
    year: "2003",
    title: "Reynolds & Himalaya join",
  },
  {
    year: "2007",
    title: "Tata & Nikon become regular exhibitors",
  },
  {
    year: "2010",
    title: "First Bollywood celebrity inauguration",
  },
  {
    year: "2012",
    title: "Political inaugurations by senior leaders",
  },
  {
    year: "2015",
    title: "Samsung, LG, Sony enter roster",
  },
  {
    year: "2017",
    title: "Footfall reaches landmark milestone",
  },
  {
    year: "2019",
    title: "Record pre-COVID participation",
  },
  {
    year: "2022",
    title: "Post-COVID comeback",
  },
  {
    year: "2024",
    title: "30th Anniversary & iGEN 2.0 launch",
  },
];

const cities = [
  {
    city: "Bengaluru",
    year: "1998",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
  },
  {
    city: "Chennai",
    year: "2005",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    city: "Hyderabad",
    year: "2007",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1200&auto=format&fit=crop",
];

export default function IceJourney() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <FloatingNavbar />
      {/* SECTION 1 — HERO */}
      <section className="relative h-screen flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2000&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="absolute text-[260px] md:text-[420px] font-black text-white/5 leading-none select-none">
          30
        </div>

        <div className="relative z-10 text-center max-w-5xl px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg border border-white/20 px-5 py-2 rounded-full text-sm mb-6">
            <Calendar size={16} />
            Est. 1994 · Still Going Strong
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Thirty Years.
            <br />
            One Vision.
            <br />
            A Million Stories.
          </h1>

          <p className="text-gray-300 text-lg md:text-2xl mt-8 leading-relaxed max-w-4xl mx-auto">
            The ICE journey — from a single exhibition hall in Bengaluru in
            1994 to India's largest consumer marketplace network in 2024.
          </p>
        </div>
      </section>

      {/* SECTION 2 — INTRO */}
      <section className="py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            A Journey That Mirrors India's Economic Story
          </h2>

          <div className="space-y-8 text-lg text-gray-300 leading-9">
            <p>
              The story of ICE across 30 years is, in many ways, the story of
              India's modern economic transformation. ICE was born in the same
              year that India's economic liberalisation began reshaping the
              country's marketplace.
            </p>

            <p>
              From the pre-internet, pre-organised-retail world of 1994 —
              through the digital revolution of the 2010s and the post-COVID
              reset of the 2020s — ICE has remained relevant at every stage.
            </p>

            <p>
              This is the story of that journey. Decade by decade. City by city.
              Brand by brand. Buyer by buyer.
            </p>
          </div>
        </div>
      </section>

      {/* 1990s */}
      <DecadeSection
        reverse={false}
        decade="THE 1990s — THE FOUNDING DECADE"
        title="Building India's First Organised Consumer Marketplace From Zero"
        paragraphs={[
          "India in 1994 was a country of economic awakening. Liberalisation had opened the economy to brands, products, and aspirations.",
          "ICE launched into this vacuum. The first editions were modest by current standards — but the response was extraordinary.",
          "Brand participation grew quickly. ICE became a fixed point in Bengaluru's commercial calendar.",
        ]}
        bullets={[
          "1994 — First ICE Exhibition, Bengaluru",
          "1995 — Consumer response exceeds projections",
          "1997 — Sushil Mantri milestone",
          "Late 1990s — Expansion to first additional city",
        ]}
      />

      {/* 2000s */}
      <DecadeSection
        reverse={true}
        decade="THE 2000s — THE GROWTH DECADE"
        title="From Bengaluru to South India — ICE Builds a Regional Institution"
        paragraphs={[
          "The 2000s were a decade of geographical and commercial expansion for ICE.",
          "National brands like Reynolds, Tata, Himalaya, and Nikon joined ICE.",
          "ICE became a multi-day family event and a genuine consumer festival.",
        ]}
        bullets={[
          "Expansion to Chennai & Hyderabad",
          "National brands join as exhibitors",
          "100,000+ visitors per edition",
          "Multi-city annual calendar established",
        ]}
      />

      {/* 2010s */}
      <DecadeSection
        reverse={false}
        decade="THE 2010s — THE MATURITY DECADE"
        title="Celebrities, VVIPs, and National Scale"
        paragraphs={[
          "The 2010s transformed ICE into a nationally recognised consumer event brand.",
          "Political inaugurations elevated ICE's credibility.",
          "Bollywood celebrities brought national media attention and cultural significance.",
        ]}
        bullets={[
          "Samsung, LG, Sony, Panasonic join",
          "First Bollywood celebrity inauguration",
          "National political inaugurations",
          "Footfall crosses 1 million cumulative",
        ]}
      />

      {/* 2020s */}
      <DecadeSection
        reverse={true}
        decade="THE 2020s — THE DIGITAL LEAP"
        title="COVID, Comeback, and the iGEN 2.0 Revolution"
        paragraphs={[
          "COVID-19 became the biggest disruption ICE had faced in 30 years.",
          "ICE accelerated its digital transformation during the pandemic.",
          "The comeback editions proved physical experiences still mattered deeply.",
        ]}
        bullets={[
          "Pandemic pause",
          "Digital transformation accelerates",
          "Record post-pandemic participation",
          "iGEN 2.0 launched",
        ]}
      />

      {/* SECTION 7 — TIMELINE */}
      <section className="py-28 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-14 text-center">
            The ICE Journey — Key Milestones at a Glance
          </h2>

          <div className="overflow-x-auto">
            <div className="flex gap-6 min-w-max pb-6">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className="w-[280px] bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl"
                >
                  <div className="inline-flex px-4 py-2 rounded-full bg-white text-black font-bold text-sm mb-5">
                    {item.year}
                  </div>

                  <p className="text-gray-300 leading-7">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — CITIES */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold">
              ICE Across India — Mega Entrance Arches in 10 Cities
            </h2>

            <p className="text-gray-400 mt-6 text-lg">
              These iconic arches have marked the entrance to India's most
              trusted consumer marketplace.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {cities.map((city, index) => (
              <div
                key={index}
                className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5"
              >
                <div className="h-72 overflow-hidden">
                  <img
                    src={city.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    alt=""
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold">{city.city}</h3>

                  <p className="text-gray-400 mt-2">
                    Mega Arch Installation · {city.year}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-14">
            <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition">
              See All 10 ICE Mega Arch Cities
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 9 — CLOSING */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            “The 30-year ICE journey has not been about the number of
            exhibitions. It has been about the quality of trust built at every
            single one.”
          </h2>

          <p className="text-gray-400 text-xl mt-10">
            And the journey continues — now in its most ambitious chapter yet.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-14">
            <button className="px-8 py-4 rounded-full bg-white text-black font-semibold flex items-center gap-2 hover:scale-105 transition">
              View Year-by-Year Timeline
              <ArrowRight size={18} />
            </button>

            <button className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition">
              Be Part of the Next Chapter
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

type DecadeSectionProps = {
  reverse?: boolean;
  decade: string;
  title: string;
  paragraphs: string[];
  bullets: string[];
};

function DecadeSection({
  reverse,
  decade,
  title,
  paragraphs,
  bullets,
}: DecadeSectionProps) {
  return (
    <section className="py-28 px-6 border-t border-white/5">
      <div
        className={`max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* TEXT */}
        <div>
          <div className="inline-flex items-center gap-2 text-sm uppercase tracking-[3px] text-gray-400 mb-6">
            <Landmark size={16} />
            {decade}
          </div>

          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            {title}
          </h2>

          <div className="space-y-7 mt-10 text-gray-300 leading-8 text-lg">
            {paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>

          <div className="mt-10 space-y-4">
            {bullets.map((bullet, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-4"
              >
                <Building2 className="mt-1" size={18} />
                <p className="text-gray-200">{bullet}</p>
              </div>
            ))}
          </div>
        </div>

        {/* IMAGE SIDE */}
        <div>
          <div className="rounded-[32px] overflow-hidden border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop"
              className="w-full h-[520px] object-cover"
              alt=""
            />
          </div>

          <div className="grid grid-cols-3 gap-4 mt-5">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden border border-white/10"
              >
                <img
                  src={img}
                  className="w-full h-36 object-cover"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}