import { FloatingNavbar } from "@/components/ui/floating-navbar";
import {
  ArrowRight,
  Building2,
  Users,
  Trophy,
  MapPin,
} from "lucide-react";

const milestoneStats = [
  {
    number: "1994",
    label: "Year Founded",
    desc: "India's first organised consumer mega expo",
  },
  {
    number: "30+",
    label: "Years of Operations",
    desc: "30 consecutive annual exhibitions",
  },
  {
    number: "20M+",
    label: "Loyal Buyers",
    desc: "Cumulative buyer footfall across all editions",
  },
  {
    number: "10,000+",
    label: "Brands & Stalls",
    desc: "Brands and seller stalls across ICE editions",
  },
  {
    number: "10 Cities",
    label: "Mega Arches",
    desc: "ICE's physical presence markers across India",
  },
  {
    number: "100+",
    label: "Brand Categories",
    desc: "Every category from electronics to wellness",
  },
];

const topMilestones = [
  {
    year: "1994",
    title: "The First Exhibition — A Category Is Born",
    body: "In 1994, ICE opened its doors in Bengaluru to a market that had never seen an organised consumer exposition. The response validated what Sushil Mantri believed for years — India was ready for a physical consumer marketplace.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "1997",
    title: "The Proof of Concept — 42 Flats, 22 Days",
    body: "Sushil Mantri exhibited his real estate project at ICE and sold 42 residential flats in 22 days. ICE became a proven commercial launchpad.",
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "2000s",
    title: "Multi-City Expansion",
    body: "ICE expanded beyond Karnataka into Tamil Nadu, Telangana, and Andhra Pradesh — becoming South India's definitive consumer expo.",
    image:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "2010s",
    title: "Celebrity & Political Endorsement",
    body: "Bollywood stars and senior ministers inaugurated ICE editions, bringing national credibility and media attention.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "2024",
    title: "iGEN 2.0 — The Marketplace Goes Digital",
    body: "ICE launched iGEN 2.0 — extending the physical marketplace experience into a year-round digital platform.",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1200&auto=format&fit=crop",
  },
];

const comparisonRows = [
  {
    label: "Brand Participation",
    then: "Hundreds of local brands",
    now: "10,000+ brands across all editions",
  },
  {
    label: "Buyer Footfall",
    then: "Thousands per edition",
    now: "20 million+ cumulative buyers",
  },
  {
    label: "Cities",
    then: "1 city (Bengaluru)",
    now: "10+ cities with Mega Arches",
  },
  {
    label: "Exhibition Format",
    then: "Single venue, single city",
    now: "Multi-city, digital-physical hybrid",
  },
  {
    label: "Technology",
    then: "Manual registration",
    now: "iGEN 2.0 digital platform",
  },
  {
    label: "Platform Reach",
    then: "South India regional",
    now: "National + international participation",
  },
];

const brands = [
  "Reynolds",
  "Tata Indicom",
  "Himalaya",
  "Nikon",
  "Panasonic",
  "Samsung",
  "LG",
  "Sony",
  "Indian Oil",
  "Sleepwell",
  "Poonam Furniture",
  "Shriram Life",
];

const buyerCards = [
  {
    stat: "20M+",
    title: "Loyal Buyers and Counting",
    body: "ICE's cumulative buyer footfall across 30 years has crossed 20 million consumers.",
  },
  {
    stat: "3rd Gen",
    title: "Multigenerational Buyer Loyalty",
    body: "ICE has buyers whose parents and grandparents attended before them.",
  },
  {
    stat: "365 Days",
    title: "Now Available Year-Round",
    body: "The ICE experience now continues throughout the year through iGEN 2.0.",
  },
];

const crowdImages = [
  "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1200&auto=format&fit=crop",
];

const archImages = [
  {
    city: "Bengaluru",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1200&auto=format&fit=crop",
  },
  {
    city: "Chennai",
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    city: "Hyderabad",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Milestones() {
  return (
    <main className="bg-black text-white">
        <FloatingNavbar/>
      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1800&auto=format&fit=crop"
          alt="ICE Crowd"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            The Milestones That Defined India's Largest
            Consumer Marketplace
          </h1>

          <p className="mt-8 text-xl text-zinc-300 leading-9">
            Thirty years of achievements that changed how
            India buys, discovers, and connects with brands.
          </p>
        </div>
      </section>

      {/* STATS GRID */}
      <section className="py-28 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {milestoneStats.map((item, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-white/10 rounded-3xl p-10 hover:border-white/20 transition"
            >
              <h2 className="text-5xl md:text-6xl font-black mb-4">
                {item.number}
              </h2>

              <h3 className="text-2xl font-bold mb-4">
                {item.label}
              </h3>

              <p className="text-zinc-400 leading-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TOP MILESTONES */}
      <section className="py-28 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-16">
            The Five Moments That Defined ICE's Legacy
          </h2>

          <div className="flex gap-8 overflow-x-auto pb-6">
            {topMilestones.map((item, i) => (
              <div
                key={i}
                className="min-w-[380px] max-w-[380px] bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden"
              >
                <div className="h-60">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8">
                  <div className="inline-flex px-4 py-2 rounded-full bg-white text-black text-sm font-bold mb-6">
                    {item.year}
                  </div>

                  <h3 className="text-2xl font-bold mb-5 leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-zinc-300 leading-8">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THEN VS NOW */}
      <section className="py-28 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">
            ICE Then and Now — Three Decades of Growth
          </h2>

          <div className="overflow-hidden rounded-3xl border border-white/10">
            <div className="grid grid-cols-3 bg-zinc-900 text-xl font-bold">
              <div className="p-6 border-r border-white/10">
                Milestone
              </div>

              <div className="p-6 border-r border-white/10">
                ICE in 1994
              </div>

              <div className="p-6">
                ICE in 2024
              </div>
            </div>

            {comparisonRows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-3 border-t border-white/10"
              >
                <div className="p-6 bg-zinc-950 font-semibold border-r border-white/10">
                  {row.label}
                </div>

                <div className="p-6 border-r border-white/10 text-zinc-300">
                  {row.then}
                </div>

                <div className="p-6 text-zinc-300">
                  {row.now}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="py-28 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              The Brands That Made ICE History
            </h2>

            <div className="space-y-8 text-zinc-300 leading-9 text-lg">
              <p>
                ICE's brand roster over 30 years reads like a
                who's who of India's most trusted consumer
                brands. From first-generation Indian
                manufacturers to global multinationals — the
                breadth of ICE's brand history is unmatched.
              </p>

              <p>
                Some brands have exhibited at ICE for over a
                decade consecutively — representing genuine
                institutional partnership beyond a typical
                vendor-client relationship.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {brands.map((brand, i) => (
              <div
                key={i}
                className="h-28 rounded-2xl border border-white/10 bg-zinc-900 flex items-center justify-center text-center p-4"
              >
                <span className="font-bold text-lg">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUYERS */}
      <section className="py-28 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">
            20 Million Reasons ICE Is India's Most Trusted
            Consumer Expo
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {buyerCards.map((card, i) => (
              <div
                key={i}
                className="bg-zinc-900 border border-white/10 rounded-3xl p-10"
              >
                <h3 className="text-5xl font-black mb-6">
                  {card.stat}
                </h3>

                <h4 className="text-2xl font-bold mb-5">
                  {card.title}
                </h4>

                <p className="text-zinc-300 leading-8">
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {crowdImages.map((img, i) => (
              <div
                key={i}
                className="h-80 rounded-3xl overflow-hidden"
              >
                <img
                  src={img}
                  alt="ICE Crowd"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHES */}
      <section className="py-28 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black">
              From 1 City to 10 — ICE Mega Arches Across
              India
            </h2>

            <p className="mt-6 text-zinc-300 text-lg leading-8">
              Each ICE Mega Arch marks ICE's arrival in a new
              city, market, and community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {archImages.map((item, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900"
              >
                <div className="h-80">
                  <img
                    src={item.image}
                    alt={item.city}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-2 text-zinc-400 mb-4">
                    <MapPin size={18} />
                    {item.city}
                  </div>

                  <h3 className="text-2xl font-bold">
                    ICE Mega Arch
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ECONOMIC STRIP */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            The Economic Milestones Behind the Numbers
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "Lakhs+",
                label: "Jobs supported across 30 years",
                icon: Users,
              },
              {
                number: "100+",
                label: "Brand categories represented",
                icon: Trophy,
              },
              {
                number: "16-Page",
                label: "Original brochure → 60-page archive",
                icon: Building2,
              },
              {
                number: "2047",
                label: "India@100 vision horizon",
                icon: ArrowRight,
              },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="bg-zinc-900 border border-white/10 rounded-3xl p-10"
                >
                  <Icon className="mb-6" size={34} />

                  <h3 className="text-5xl font-black mb-4">
                    {item.number}
                  </h3>

                  <p className="text-zinc-300 leading-7">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black leading-tight">
            The Next Milestone Is Yours to Make
          </h2>

          <p className="mt-8 text-xl text-zinc-300">
            Join 10,000+ brands that have already made ICE
            history.
          </p>

          <div className="mt-14 flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-8 py-5 rounded-full bg-white text-black font-bold hover:scale-105 transition">
              Exhibit at ICE 2025
            </button>

            <button className="px-8 py-5 rounded-full border border-white/20 bg-white/10 hover:bg-white hover:text-black transition font-bold">
              View Full ICE Timeline
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}