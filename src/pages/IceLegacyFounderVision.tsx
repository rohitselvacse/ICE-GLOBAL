import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import Footer from "@/components/Footer";
import { FloatingNavbar } from "@/components/ui/floating-navbar";
import { Button } from "@/components/ui/button";
import {
  defaultIceLegacyContent,
  mergeIceLegacyContent,
  type FounderVisionContent,
} from "@/data/ice-legacy";

const apiBase = import.meta.env.VITE_API_BASE_URL || "";
const mediaBase = (import.meta.env.VITE_MEDIA_BASE_URL || "").replace(/\/$/, "");

const resolveImage = (src?: string) => {
  if (!src) return "";
  if (src.startsWith("http") || src.startsWith("data:") || src.startsWith("blob:")) return src;
  return mediaBase ? `${mediaBase}/${src.replace(/^\/+/, "")}` : src;
};

const SectionTitle = ({ eyebrow, title }: { eyebrow?: string; title: string }) => (
  <div className="mx-auto max-w-3xl text-center">
    {eyebrow && (
      <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#b22222]">{eyebrow}</p>
    )}
    <h2 className="mt-3 text-3xl font-bold leading-tight text-[#172033] md:text-5xl">{title}</h2>
  </div>
);

const IceLegacyFounderVision = () => {
  const [content, setContent] = useState<FounderVisionContent>(
    defaultIceLegacyContent.founderVision
  );

  useEffect(() => {
    let alive = true;

    const loadContent = async () => {
      try {
        const res = await fetch(`${apiBase}/ice-legacy-content`);
        const type = res.headers.get("content-type") || "";
        if (!res.ok || !type.includes("application/json")) return;
        const payload = await res.json();
        if (alive) setContent(mergeIceLegacyContent(payload).founderVision);
      } catch {
        if (alive) setContent(defaultIceLegacyContent.founderVision);
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

      <section className="pt-28">
        <div className="container-custom grid min-h-[72vh] items-center gap-10 py-10 lg:grid-cols-[0.45fr_0.55fr] lg:py-16">
          <div className="overflow-hidden rounded-lg border border-[#dfe2d5] bg-white shadow-xl shadow-[#172033]/10">
            <img
              src={resolveImage(content.hero.image)}
              alt={content.hero.imageAlt}
              className="aspect-square w-full object-cover"
            />
          </div>
          <div>
            <span className="inline-flex rounded-full border border-[#d93636]/20 bg-[#fff2f2] px-4 py-2 text-sm font-bold text-[#b22222]">
              {content.hero.chip}
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-[#172033] md:text-6xl">
              {content.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4c586f]">{content.hero.subtitle}</p>
            <Button asChild size="lg" className="mt-8 bg-[#d93636] text-white hover:bg-[#bd2d2d]">
              <Link to={content.hero.cta.href}>
                {content.hero.cta.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="origin" className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#b22222]">
              {content.origin.label}
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#172033] md:text-5xl">
              {content.origin.title}
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-9 text-[#4c586f]">
              {content.origin.paragraphs.slice(0, 3).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <blockquote className="my-9 rounded-lg border-l-4 border-[#d93636] bg-[#f7f8f3] p-7 text-2xl font-semibold leading-9 text-[#172033]">
              "{content.origin.pullQuote}"
            </blockquote>
            <div className="space-y-5 text-lg leading-9 text-[#4c586f]">
              {content.origin.paragraphs.slice(3).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle title={content.beliefs.title} />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {content.beliefs.items.map((item) => (
              <article key={item.number} className="rounded-lg border border-[#dfe2d5] bg-white p-7 shadow-sm">
                <p className="text-4xl font-bold text-[#d93636]">{item.number}</p>
                <h3 className="mt-5 text-xl font-bold leading-7">{item.title}</h3>
                <p className="mt-4 leading-7 text-[#596579]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#172033] text-white">
        <div className="container-custom">
          <h2 className="text-center text-3xl font-bold md:text-5xl">{content.timeline.title}</h2>
          <div className="relative mt-12 grid gap-8 lg:grid-cols-4">
            <div className="absolute left-0 right-0 top-8 hidden h-px bg-white/20 lg:block" />
            {content.timeline.steps.map((step) => (
              <article key={`${step.year}-${step.title}`} className="relative">
                <span className="relative z-10 inline-flex rounded-full bg-[#f4c542] px-4 py-2 text-sm font-bold text-[#172033]">
                  {step.year}
                </span>
                <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 leading-7 text-white/70">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <p className="text-7xl font-serif leading-none text-[#d93636]">"</p>
          <blockquote className="mx-auto max-w-5xl text-2xl italic leading-10 text-[#172033] md:text-3xl">
            {content.quote.text}
          </blockquote>
          <p className="mt-6 font-semibold text-[#596579]">{content.quote.attribution}</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {content.quote.images.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-lg border border-[#dfe2d5] bg-[#f7f8f3] text-left">
                <img src={resolveImage(item.image)} alt={item.title} className="h-64 w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-bold">{item.title}</h3>
                  {item.caption && <p className="mt-1 text-sm text-[#596579]">{item.caption}</p>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              {content.entrepreneurialJourney.title}
            </h2>
            <div className="mt-7 space-y-5 text-lg leading-8 text-[#4c586f]">
              {content.entrepreneurialJourney.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <figure>
            <img
              src={resolveImage(content.entrepreneurialJourney.image)}
              alt={content.entrepreneurialJourney.caption}
              className="h-[520px] w-full rounded-lg object-cover shadow-xl shadow-[#172033]/10"
            />
            <figcaption className="mt-3 text-sm text-[#596579]">
              {content.entrepreneurialJourney.caption}
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle title={content.economy.title} />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {content.economy.cards.map((card) => (
              <article key={card.title} className="rounded-lg border border-[#dfe2d5] bg-[#f7f8f3] p-7">
                <h3 className="text-xl font-bold">{card.title}</h3>
                <p className="mt-4 leading-7 text-[#596579]">{card.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {content.economy.images.map((item) => (
              <img key={item.title} src={resolveImage(item.image)} alt={item.title} className="h-72 w-full rounded-lg object-cover" />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#172033] text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold md:text-5xl">{content.endorsements.title}</h2>
            <p className="mt-5 text-lg leading-8 text-white/70">{content.endorsements.subtitle}</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {content.endorsements.cards.map((card, index) => (
              <article key={`${card.name}-${card.year}-${index}`} className="overflow-hidden rounded-lg bg-white text-[#172033]">
                <img src={resolveImage(card.image)} alt={card.name} className="h-64 w-full object-cover" />
                <div className="p-5">
                  <h3 className="font-bold">{card.name}</h3>
                  <p className="mt-1 text-sm text-[#596579]">{card.title}</p>
                  <p className="mt-3 text-sm font-bold text-[#b22222]">{card.year}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">{content.future.title}</h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-[#4c586f]">
              {content.future.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="mt-7 space-y-4">
              {content.future.bullets.map((item) => (
                <li key={item} className="flex gap-3 text-[#4c586f]">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#0f766e]" />
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-8 bg-[#172033] text-white hover:bg-[#263249]">
              <Link to={content.future.cta.href}>
                {content.future.cta.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <img
            src={resolveImage(content.future.image)}
            alt={content.future.imageAlt}
            className="h-[520px] w-full rounded-lg object-cover shadow-xl shadow-[#172033]/10"
          />
        </div>
      </section>

      <section className="bg-[#0f766e] px-4 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold md:text-5xl">{content.closingCta.title}</h2>
          <p className="mt-5 text-lg leading-8 text-white/80">{content.closingCta.subtitle}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-white text-[#0f766e] hover:bg-[#eef6f4]">
              <Link to={content.closingCta.primaryCta.href}>{content.closingCta.primaryCta.label}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/70 bg-transparent text-white hover:bg-white hover:text-[#0f766e]">
              <Link to={content.closingCta.secondaryCta.href}>{content.closingCta.secondaryCta.label}</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default IceLegacyFounderVision;
