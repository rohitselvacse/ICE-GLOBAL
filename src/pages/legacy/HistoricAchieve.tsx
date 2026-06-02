import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, Building2, Newspaper, Star, UsersRound } from "lucide-react";

import Footer from "@/components/Footer";
import { FloatingNavbar } from "@/components/ui/floating-navbar";
import { Button } from "@/components/ui/button";
import {
  defaultIceLegacyContent,
  mergeIceLegacyContent,
  type WhyIndiaTrustsIceContent,
} from "@/data/ice-legacy";

const apiBase = import.meta.env.VITE_API_BASE_URL || "";
const mediaBase = (import.meta.env.VITE_MEDIA_BASE_URL || "").replace(/\/$/, "");

const resolveImage = (src?: string) => {
  if (!src) return "";
  if (src.startsWith("http") || src.startsWith("data:") || src.startsWith("blob:")) return src;
  return mediaBase ? `${mediaBase}/${src.replace(/^\/+/, "")}` : src;
};

const SectionHeading = ({ eyebrow, title, inverse = false }: { eyebrow?: string; title: string; inverse?: boolean }) => (
  <div className="mx-auto max-w-4xl text-center">
    {eyebrow && <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#b22222]">{eyebrow}</p>}
    <h2 className={`mt-3 text-3xl font-bold leading-tight md:text-5xl ${inverse ? "text-white" : "text-[#162033]"}`}>
      {title}
    </h2>
  </div>
);

const ImageFrame = ({ src, alt, className = "" }: { src?: string; alt: string; className?: string }) => {
  const image = resolveImage(src);
  return image ? (
    <img src={image} alt={alt} className={className} />
  ) : (
    <div className={`${className} flex items-center justify-center bg-[#e9efe8] text-sm font-semibold text-[#52616c]`}>
      Image pending
    </div>
  );
};

const TestimonialGrid = ({
  title,
  cards,
  tone,
}: {
  title: string;
  cards: WhyIndiaTrustsIceContent["buyerTestimonials"]["cards"];
  tone: "buyer" | "seller";
}) => (
  <section className={tone === "buyer" ? "section-padding bg-white" : "section-padding bg-[#f2f7f6]"}>
    <div className="container-custom">
      <SectionHeading eyebrow={tone === "buyer" ? "Buyer proof" : "Brand proof"} title={title} />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {cards.map((card, index) => (
          <article key={`${card.name}-${index}`} className="rounded-lg border border-[#d8e1db] bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <ImageFrame
                src={card.image}
                alt={card.name}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold text-[#162033]">{card.name}</h3>
                <p className="text-sm text-[#607080]">{card.designation}</p>
              </div>
            </div>
            <p className="mt-5 leading-7 text-[#4b5b68]">"{card.quote}"</p>
            <div className="mt-5 flex items-center gap-1 text-[#d19218]" aria-label={`${card.rating} star rating`}>
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Star key={starIndex} className="h-4 w-4 fill-current" />
              ))}
              <span className="ml-2 text-sm font-semibold text-[#162033]">{card.rating}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const HistoricAchieve = () => {
  const [content, setContent] = useState<WhyIndiaTrustsIceContent>(
    defaultIceLegacyContent.whyIndiaTrustsIce
  );

  useEffect(() => {
    let alive = true;

    const loadContent = async () => {
      try {
        const res = await fetch(`${apiBase}/ice-legacy-content`);
        const type = res.headers.get("content-type") || "";
        if (!res.ok || !type.includes("application/json")) return;
        const payload = await res.json();
        if (alive) setContent(mergeIceLegacyContent(payload).whyIndiaTrustsIce);
      } catch {
        if (alive) setContent(defaultIceLegacyContent.whyIndiaTrustsIce);
      }
    };

    loadContent();
    return () => {
      alive = false;
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#f7f8f3] text-[#162033]">
      <FloatingNavbar />

      {content.sectionVisibility.hero && (
        <section className="pt-28">
          <div className="container-custom grid min-h-[72vh] items-center gap-10 py-10 lg:grid-cols-2 lg:py-16">
            <div className="overflow-hidden rounded-lg border border-[#d8e1db] bg-white shadow-xl shadow-[#162033]/10">
              <ImageFrame
                src={content.hero.image}
                alt={content.hero.imageAlt}
                className="h-[420px] w-full object-cover md:h-[620px]"
              />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f766e]">ICE Legacy Trust Proof</p>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-[#162033] md:text-6xl">
                {content.hero.title}
              </h1>
              <div className="mt-6 flex flex-wrap gap-3">
                {content.hero.chips.map((chip) => (
                  <span key={chip} className="inline-flex items-center rounded-full border border-[#b22222]/25 bg-white px-4 py-2 text-sm font-bold text-[#b22222]">
                    <BadgeCheck className="mr-2 h-4 w-4" />
                    {chip}
                  </span>
                ))}
              </div>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#4b5b68]">{content.hero.subtitle}</p>
            </div>
          </div>
        </section>
      )}

      {content.sectionVisibility.pillars && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionHeading eyebrow="Credibility pillars" title={content.pillars.title} />
            <div className="mt-12 space-y-12">
              {content.pillars.reasons.map((reason, index) => (
                <article
                  key={`${reason.title}-${index}`}
                  className="grid items-center gap-7 lg:grid-cols-2"
                >
                  <div className={index % 2 ? "lg:order-2" : ""}>
                    <h3 className="text-2xl font-bold leading-tight text-[#162033] md:text-3xl">{reason.title}</h3>
                    <p className="mt-5 text-lg leading-8 text-[#4b5b68]">{reason.body}</p>
                  </div>
                  <ImageFrame
                    src={reason.image}
                    alt={reason.imageAlt}
                    className="h-80 w-full rounded-lg object-cover shadow-lg shadow-[#162033]/10"
                  />
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {content.sectionVisibility.stats && (
        <section className="bg-[#162033] px-4 py-14 text-white">
          <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.stats.map((stat) => (
              <article key={`${stat.value}-${stat.label}`} className="rounded-lg border border-white/15 bg-white/10 p-6 text-center">
                <p className="text-4xl font-bold text-[#f3c64e]">{stat.value}</p>
                <p className="mt-3 text-sm leading-6 text-white/75">{stat.label}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {content.sectionVisibility.mediaProof && (
        <section className="section-padding bg-[#f2f7f6]">
          <div className="container-custom">
            <SectionHeading eyebrow="Media record" title={content.mediaProof.title} />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {content.mediaProof.cards.map((card, index) => (
                <article key={`${card.source}-${index}`} className="overflow-hidden rounded-lg border border-[#d8e1db] bg-white">
                  {card.image ? (
                    <ImageFrame src={card.image} alt={card.imageAlt || card.source} className="h-48 w-full object-cover" />
                  ) : (
                    <div className="flex h-32 items-center justify-center bg-[#162033] text-white">
                      <Newspaper className="h-9 w-9" />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#b22222]">{card.source}</p>
                    <h3 className="mt-3 text-xl font-bold leading-7 text-[#162033]">{card.headline}</h3>
                    <p className="mt-4 leading-7 text-[#607080]">{card.detail}</p>
                    <p className="mt-5 text-sm font-bold text-[#0f766e]">{card.year}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {content.sectionVisibility.buyerTestimonials && (
        <TestimonialGrid title={content.buyerTestimonials.title} cards={content.buyerTestimonials.cards} tone="buyer" />
      )}
      {content.sectionVisibility.sellerTestimonials && (
        <TestimonialGrid title={content.sellerTestimonials.title} cards={content.sellerTestimonials.cards} tone="seller" />
      )}

      {content.sectionVisibility.vvipGallery && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionHeading eyebrow="VVIP proof" title={content.vvipGallery.title} />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {content.vvipGallery.cards.map((card, index) => (
                <article key={`${card.name}-${index}`} className="overflow-hidden rounded-lg border border-[#d8e1db] bg-[#f7f8f3]">
                  <ImageFrame src={card.image} alt={card.name} className="h-64 w-full object-cover" />
                  <div className="p-5">
                    <Building2 className="h-5 w-5 text-[#0f766e]" />
                    <h3 className="mt-3 font-bold">{card.name}</h3>
                    <p className="mt-1 text-sm text-[#607080]">{card.title}</p>
                    <p className="mt-3 text-sm font-bold text-[#b22222]">{card.year}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {content.sectionVisibility.celebrityGallery && (
        <section className="section-padding bg-[#162033] text-white">
          <div className="container-custom">
            <SectionHeading eyebrow="Celebrity reach" title={content.celebrityGallery.title} inverse />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {content.celebrityGallery.cards.map((card, index) => (
                <article key={`${card.name}-${index}`} className="overflow-hidden rounded-lg bg-white text-[#162033]">
                  <ImageFrame src={card.image} alt={card.name} className="h-64 w-full object-cover" />
                  <div className="p-5">
                    <UsersRound className="h-5 w-5 text-[#b22222]" />
                    <h3 className="mt-3 font-bold">{card.name}</h3>
                    <p className="mt-1 text-sm text-[#607080]">{card.occasion}</p>
                    <p className="mt-3 text-sm font-bold text-[#0f766e]">{card.year}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {content.sectionVisibility.closingCta && (
        <section className="bg-[#0f766e] px-4 py-20 text-center text-white">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">{content.closingCta.title}</h2>
            <p className="mt-5 text-lg leading-8 text-white/80">{content.closingCta.subtitle}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-[#0f766e] hover:bg-[#eef6f4]">
                <Link to={content.closingCta.primaryCta.href}>
                  {content.closingCta.primaryCta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/70 bg-transparent text-white hover:bg-white hover:text-[#0f766e]">
                <Link to={content.closingCta.secondaryCta.href}>{content.closingCta.secondaryCta.label}</Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
};

export default HistoricAchieve;
