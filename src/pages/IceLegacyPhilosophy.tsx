import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import Footer from "@/components/Footer";
import { FloatingNavbar } from "@/components/ui/floating-navbar";
import { Button } from "@/components/ui/button";
import {
  defaultIceLegacyContent,
  mergeIceLegacyContent,
  type MarketplacePhilosophyContent,
} from "@/data/ice-legacy";

const apiBase = import.meta.env.VITE_API_BASE_URL || "";
const mediaBase = (import.meta.env.VITE_MEDIA_BASE_URL || "").replace(/\/$/, "");

const resolveImage = (src?: string) => {
  if (!src) return "";
  if (src.startsWith("http") || src.startsWith("data:") || src.startsWith("blob:")) return src;
  return mediaBase ? `${mediaBase}/${src.replace(/^\/+/, "")}` : src;
};

const IceLegacyPhilosophy = () => {
  const [content, setContent] = useState<MarketplacePhilosophyContent>(
    defaultIceLegacyContent.marketplacePhilosophy
  );

  useEffect(() => {
    let alive = true;

    const loadContent = async () => {
      try {
        const res = await fetch(`${apiBase}/ice-legacy-content`);
        const type = res.headers.get("content-type") || "";
        if (!res.ok || !type.includes("application/json")) return;
        const payload = await res.json();
        if (alive) setContent(mergeIceLegacyContent(payload).marketplacePhilosophy);
      } catch {
        if (alive) setContent(defaultIceLegacyContent.marketplacePhilosophy);
      }
    };

    loadContent();
    return () => {
      alive = false;
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#f7f8f3] text-[#172033]">
      <FloatingNavbar />

      <section className="relative flex min-h-[76vh] items-center overflow-hidden pt-24">
        <img
          src={resolveImage(content.hero.image)}
          alt={content.hero.imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#101827]/70" />
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-white/25 bg-white/15 px-4 py-2 text-sm font-bold uppercase tracking-[0.14em] text-white backdrop-blur">
              {content.hero.chip}
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
              {content.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">{content.hero.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#b22222]">
              {content.belief.label}
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">{content.belief.title}</h2>
          </div>
          <div>
            <div className="space-y-5 text-lg leading-8 text-[#4c586f]">
              {content.belief.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <blockquote className="mt-8 rounded-lg border-l-4 border-[#d93636] bg-[#f7f8f3] p-7 text-2xl font-semibold leading-9">
              "{content.belief.pullQuote}"
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">{content.principles.title}</h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {content.principles.items.map((item) => (
              <article key={item.title} className="rounded-lg border border-[#dfe2d5] bg-white p-7 shadow-sm">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-7 text-[#596579]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#172033] text-white">
        <div className="container-custom grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">{content.operatingModel.title}</h2>
            <ul className="mt-8 space-y-4">
              {content.operatingModel.bullets.map((item) => (
                <li key={item} className="flex gap-3 text-white/75">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#f4c542]" />
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <img
            src={resolveImage(content.operatingModel.image)}
            alt={content.operatingModel.imageAlt}
            className="h-[520px] w-full rounded-lg object-cover shadow-xl shadow-black/20"
          />
        </div>
      </section>

      <section className="bg-[#d93636] px-4 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold md:text-5xl">{content.closingCta.title}</h2>
          <p className="mt-5 text-lg leading-8 text-white/85">{content.closingCta.subtitle}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-white text-[#b22222] hover:bg-[#fff2f2]">
              <Link to={content.closingCta.primaryCta.href}>
                {content.closingCta.primaryCta.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/70 bg-transparent text-white hover:bg-white hover:text-[#b22222]">
              <Link to={content.closingCta.secondaryCta.href}>{content.closingCta.secondaryCta.label}</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default IceLegacyPhilosophy;
