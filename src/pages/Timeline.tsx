import { useMemo, useState } from "react";
import {
  Calendar,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { FloatingNavbar } from "@/components/ui/floating-navbar";

const timeline1990s = [
  {
    year: "1994",
    title: "ICE Exhibition — Bengaluru",
    desc: "First edition. India's first organised consumer mega expo. Hundreds of brands. Extraordinary first-year consumer response.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "1995",
    title: "ICE Exhibition 2nd Edition — Bengaluru",
    desc: "Demand exceeds capacity. Consumer footfall surpasses all projections. Brand roster doubles.",
    image:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "1996",
    title: "ICE Exhibition 3rd Edition — Bengaluru",
    desc: "Third consecutive sold-out edition. ICE becomes a fixed point on Bengaluru's consumer calendar.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
  },
];

const timeline2000s = [
  {
    year: "2000",
    title: "Growth Editions",
    desc: "National brand entry begins. Reynolds joins. Multi-city expansion continues.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "2003",
    title: "Health & Wellness Growth",
    desc: "Himalaya and FMCG brands join. Health and wellness category expands.",
    image:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1200&auto=format&fit=crop",
  },
];

const timeline2010s = [
  {
    year: "2010",
    title: "Celebrity Era Begins",
    desc: "First Bollywood celebrity inauguration. National media coverage.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "2015",
    title: "Mega Arches Expansion",
    desc: "Panasonic joins. ICE Mega Arches erected in 10 cities.",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1200&auto=format&fit=crop",
  },
];

const timeline2020s = [
  {
    year: "2022",
    title: "Post-COVID Comeback",
    desc: "Pent-up demand drives strong buyer and brand participation.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "2024",
    title: "30-Year Anniversary",
    desc: "iGEN 2.0 launched. iceglobal.in established. Legacy documented.",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1200&auto=format&fit=crop",
  },
];

const galleryImages = [
  {
    year: "1995",
    city: "Bengaluru",
    decade: "1990s",
    image:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "2004",
    city: "Hyderabad",
    decade: "2000s",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "2015",
    city: "Chennai",
    decade: "2010s",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1200&auto=format&fit=crop",
  },
];

type TimelineItemType = {
  year: string;
  title: string;
  desc: string;
  image: string;
};

function TimelineSection({
  id,
  heading,
  items,
}: {
  id: string;
  heading: string;
  items: TimelineItemType[];
}) {
  return (
    <section
      id={id}
      className="py-24 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black mb-20">
          {heading}
        </h2>

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-16">
            {items.map((item, i) => (
              <div
                key={i}
                className="relative grid lg:grid-cols-[120px_1fr] gap-10"
              >
                <div className="relative">
                  <div className="absolute left-0 top-3 h-10 w-10 rounded-full border border-white/20 bg-black flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-white" />
                  </div>
                </div>

                <div className="bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <div className="p-8 md:p-10">
                      <div className="inline-flex px-4 py-2 rounded-full bg-white text-black text-sm font-bold mb-6">
                        {item.year}
                      </div>

                      <h3 className="text-2xl font-bold mb-5">
                        {item.title}
                      </h3>

                      <p className="text-zinc-300 leading-8">
                        {item.desc}
                      </p>
                    </div>

                    <div className="h-[300px]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Timeline() {
  const [activeFilter, setActiveFilter] =
    useState("All");

  const filteredImages = useMemo(() => {
    if (activeFilter === "All") return galleryImages;

    return galleryImages.filter(
      (item) => item.decade === activeFilter
    );
  }, [activeFilter]);

  return (
    <main className="bg-black text-white">
        <FloatingNavbar />
      {/* HERO */}
      <section className="py-32 border-b border-white/10">
        <div className="max-w-5xl mx-auto text-center px-6">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-sm mb-8">
            <Calendar size={16} />
            30 Editions · 30 Years · One Unbroken Legacy
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            ICE — Every Year, Every Edition, Since 1994
          </h1>

          <p className="mt-8 text-xl text-zinc-300 leading-9">
            A complete, documented record of India's most
            trusted consumer marketplace — year by year for
            30 years.
          </p>
        </div>
      </section>

      {/* STICKY NAV */}
      <section className="sticky top-20 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
          <div className="flex gap-4 py-5 min-w-max">
            {[
              {
                label: "All Editions",
                href: "#all",
              },
              {
                label: "1990s (1994–1999)",
                href: "#1990s",
              },
              {
                label: "2000s (2000–2009)",
                href: "#2000s",
              },
              {
                label: "2010s (2010–2019)",
                href: "#2010s",
              },
              {
                label: "2020s (2020–Present)",
                href: "#2020s",
              },
            ].map((tab, i) => (
              <a
                key={i}
                href={tab.href}
                className="px-6 py-3 rounded-full border border-white/10 bg-zinc-900 hover:bg-white hover:text-black transition whitespace-nowrap"
              >
                {tab.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div id="all">
        <TimelineSection
          id="1990s"
          heading="The 1990s — Founding Editions"
          items={timeline1990s}
        />

        <TimelineSection
          id="2000s"
          heading="The 2000s — Growth Editions"
          items={timeline2000s}
        />

        <TimelineSection
          id="2010s"
          heading="The 2010s — Scale & Star Power"
          items={timeline2010s}
        />

        <TimelineSection
          id="2020s"
          heading="The 2020s — Resilience and Digital Evolution"
          items={timeline2020s}
        />
      </div>

      {/* STATS */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              number: "30+",
              label: "Editions of ICE",
            },
            {
              number: "10,000+",
              label: "Total brands across all editions",
            },
            {
              number: "20M+",
              label: "Total buyer footfall across all editions",
            },
            {
              number: "10 Cities",
              label: "Exhibition city locations",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-white/10 rounded-3xl p-10"
            >
              <h3 className="text-5xl font-black mb-4">
                {stat.number}
              </h3>

              <p className="text-zinc-400 text-lg leading-7">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-28 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-black">
              ICE Entrance Arches — 1995 to 2019
            </h2>

            <p className="mt-6 text-zinc-300 text-lg leading-8">
              The iconic entrance arch is the visual symbol of
              ICE's arrival in a city.
            </p>
          </div>

          {/* FILTER */}
          <div className="flex flex-wrap gap-4 mt-12">
            {[
              "All",
              "1990s",
              "2000s",
              "2010s",
            ].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-3 rounded-full transition ${
                  activeFilter === filter
                    ? "bg-white text-black"
                    : "bg-zinc-900 border border-white/10"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {filteredImages.map((img, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900"
              >
                <div className="h-72 overflow-hidden">
                  <img
                    src={img.image}
                    alt={img.city}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-zinc-400 text-sm mb-3">
                    <MapPin size={16} />
                    {img.city}
                  </div>

                  <h3 className="text-2xl font-bold">
                    {img.year}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[40px] bg-zinc-900 border border-white/10 p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                The next ICE edition is being written. Will
                your brand be part of the story?
              </h2>
            </div>

            <button className="px-8 py-5 rounded-full bg-white text-black font-bold hover:scale-105 transition inline-flex items-center gap-3 whitespace-nowrap">
              Book Your Stall at ICE 2025
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}