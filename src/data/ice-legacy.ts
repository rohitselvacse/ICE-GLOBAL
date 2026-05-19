import { expoImages } from "@/data/expo-data";

export type Cta = {
  label: string;
  href: string;
};

export type LegacyImage = {
  image: string;
  title: string;
  caption?: string;
};

export type FounderVisionContent = {
  hero: {
    chip: string;
    title: string;
    subtitle: string;
    cta: Cta;
    image: string;
    imageAlt: string;
  };
  origin: {
    label: string;
    title: string;
    paragraphs: string[];
    pullQuote: string;
  };
  beliefs: {
    title: string;
    items: { number: string; title: string; body: string }[];
  };
  timeline: {
    title: string;
    steps: { year: string; title: string; body: string }[];
  };
  quote: {
    text: string;
    attribution: string;
    images: LegacyImage[];
  };
  entrepreneurialJourney: {
    title: string;
    paragraphs: string[];
    image: string;
    caption: string;
  };
  economy: {
    title: string;
    cards: { title: string; body: string }[];
    images: LegacyImage[];
  };
  endorsements: {
    title: string;
    subtitle: string;
    cards: { image: string; name: string; title: string; year: string }[];
  };
  future: {
    title: string;
    paragraphs: string[];
    bullets: string[];
    cta: Cta;
    image: string;
    imageAlt: string;
  };
  closingCta: {
    title: string;
    subtitle: string;
    primaryCta: Cta;
    secondaryCta: Cta;
  };
};

export type MarketplacePhilosophyContent = {
  hero: {
    chip: string;
    title: string;
    subtitle: string;
    image: string;
    imageAlt: string;
  };
  belief: {
    label: string;
    title: string;
    paragraphs: string[];
    pullQuote: string;
  };
  principles: {
    title: string;
    items: { title: string; body: string }[];
  };
  operatingModel: {
    title: string;
    bullets: string[];
    image: string;
    imageAlt: string;
  };
  closingCta: {
    title: string;
    subtitle: string;
    primaryCta: Cta;
    secondaryCta: Cta;
  };
};

export type IceLegacyContent = {
  founderVision: FounderVisionContent;
  marketplacePhilosophy: MarketplacePhilosophyContent;
};

const entrance1995 = "https://i.ibb.co/7NbRjS1s/Colorful-entrance-to-ICE-1995.png";
const crowd1998 = "https://i.ibb.co/MkZqy2Ht/Crowd-gathering-at-ICE-1998-entrance.png";
const ice1997 = "https://i.ibb.co/qF5xNyCG/Ice-1997-exhibition-entrance-at-dusk.png";
const topBrand = "https://i.ibb.co/ZzpfT4mx/ICE-Top-Brands-011.png";
const megaArch = "https://i.ibb.co/7tm9JCKM/ICE-YEARS20.png";
const infographic = "https://i.ibb.co/60sFxbb4/Warm-Blue-Exhibition-Poster-with-Parallelograms.png";

export const defaultIceLegacyContent: IceLegacyContent = {
  founderVision: {
    hero: {
      chip: "The Visionary Founder of ICE Exhibitions",
      title: "Sushil Mantri - The Man Who Imagined India's Biggest Consumer Marketplace Before It Existed",
      subtitle:
        "A fundamental insight in 1994. A physical marketplace built from nothing. 30 years of proof that trust is India's most powerful commercial force.",
      cta: { label: "Read the Full Founder Story", href: "#origin" },
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&h=1000&fit=crop",
      imageAlt: "Founder portrait of Sushil Mantri",
    },
    origin: {
      label: "The Origin",
      title: "The Observation That Changed India's Marketplace",
      paragraphs: [
        "In the early 1990s, India was waking up to a new economic reality. Liberalisation had opened the gates to brands, products, and ambitions. But the infrastructure to connect those brands with India's rapidly aspiring consumers simply did not exist.",
        "Sushil Mantri - then a young, capital-light entrepreneur in Bengaluru - saw what others missed: there was a massive, structural gap between manufacturers and end consumers. Distribution channels were fragmented, geographically limited, and controlled by a small class of traditional retailers. Emerging brands had no direct voice. Consumers had no direct access.",
        "His insight was both simple and revolutionary: what if you could bring the entire marketplace to the people - at scale, under one roof, for a limited but intensely commercial period? A curated, physical, temporary mega-marketplace before that concept had a name or a category.",
        "That question became the founding DNA of ICE. Not just an exhibition, but a genuinely new commercial infrastructure for a newly liberalising India.",
      ],
      pullQuote:
        "What if the marketplace came to the people - rather than waiting for the people to find the marketplace?",
    },
    beliefs: {
      title: "The Three Beliefs That Built ICE",
      items: [
        {
          number: "01",
          title: "Physical Trust Builds Faster Than Digital Trust",
          body:
            "Sushil Mantri's core belief - reinforced by 30 years of evidence - is that when a consumer touches, tries, and transacts with a brand in a curated physical environment, the resulting trust is deeper, longer-lasting, and more commercially powerful than any digital interaction.",
        },
        {
          number: "02",
          title: "Every Brand Deserves a Level Marketplace",
          body:
            "From the first ICE exhibition, Mantri insisted that the platform must be accessible to brands at every scale - not just those with the largest marketing budgets. This democratising philosophy is what made ICE the launchpad for hundreds of Indian brands.",
        },
        {
          number: "03",
          title: "A Trusted Marketplace Is the Fastest Economic Engine",
          body:
            "ICE was never just a commercial event. It was - and remains - an economic multiplier. Every edition creates jobs, generates revenue for sellers, delivers value to buyers, and stimulates local economies in host cities.",
        },
      ],
    },
    timeline: {
      title: "From First Idea to 30-Year Legacy",
      steps: [
        {
          year: "1994",
          title: "The First Exhibition",
          body: "First ICE expo launches in Bengaluru. Hundreds of brands. Thousands of buyers. The marketplace category is born.",
        },
        {
          year: "1997",
          title: "The Proof of Concept",
          body: "Sushil Mantri's own story - 42 flats sold in 22 days through ICE visibility. ICE becomes a proven brand launchpad.",
        },
        {
          year: "2000s",
          title: "The Expanding Vision",
          body: "ICE expands across South India. National brands join. Millions of buyers attend. The vision scales beyond Bengaluru.",
        },
        {
          year: "2024",
          title: "iGEN 2.0",
          body: "The final evolution - physical trust platform becomes a permanent digital-physical marketplace. The vision of universal marketplace access is realised.",
        },
      ],
    },
    quote: {
      text:
        "ICE was never just an exhibition. It was proof that India's consumers were ready, that Indian brands could rise to meet them, and that trust - built in person - is the most powerful commercial currency there is.",
      attribution: "- Sushil Mantri, Founder, ICE Exhibitions",
      images: [
        { image: ice1997, title: "Founder at ICE event", caption: "Founder archive" },
        { image: entrance1995, title: "ICE inauguration ceremony", caption: "VVIPs at ICE" },
        { image: crowd1998, title: "Large ICE crowd", caption: "ICE crowd archive" },
      ],
    },
    entrepreneurialJourney: {
      title: "Building ICE Without Capital - Only Vision",
      paragraphs: [
        "Sushil Mantri started ICE with minimal financial resources. There were no venture capital backers, no corporate sponsors, and no government grants. The early exhibitions were built on personal relationships, grassroots marketing, and a deep understanding of what both brands and consumers actually needed.",
        "The team was built on trust rather than corporate contracts. Venue partnerships were formed through personal negotiation with local authorities and infrastructure owners. Brand participants were signed through face-to-face conviction, not expensive sales processes.",
        "The early ICE exhibitions were not glamorous by contemporary standards - but they were extraordinarily effective. They created genuine commercial transactions. They helped brands find new markets. They gave consumers access to products that would otherwise have been geographically inaccessible.",
        "This approach - community-first, trust-first, commercial second - became the operational philosophy of ICE that has survived and strengthened over 30 years.",
      ],
      image: entrance1995,
      caption: "Early-era ICE exhibition entrance and crowd energy.",
    },
    economy: {
      title: "What Sushil Mantri Built for India's Economy",
      cards: [
        {
          title: "A Launchpad for Indian Brands",
          body:
            "Hundreds of Indian brands - from small manufacturers to national players - used ICE as their primary launch and growth platform in South India. Many of India's recognisable consumer brands built their first serious consumer base through ICE.",
        },
        {
          title: "Access for India's Aspiring Consumers",
          body:
            "Before organised retail and before e-commerce, ICE was how South India's aspiring middle class accessed quality branded products at verified prices. ICE democratised the consumer experience - not just for brands, but for buyers.",
        },
        {
          title: "A Template for Physical Marketplace Events",
          body:
            "ICE created the operational blueprint for consumer exhibition events in India. The processes, community relationships, and marketplace infrastructure that ICE built over 30 years have shaped the broader exhibition industry.",
        },
      ],
      images: [
        { image: topBrand, title: "Top Brands at ICE" },
        { image: megaArch, title: "ICE Mega Arches" },
        { image: crowd1998, title: "ICE Crowd" },
      ],
    },
    endorsements: {
      title: "A Vision That India's Leaders Recognised and Endorsed",
      subtitle:
        "ICE exhibitions have been inaugurated by Chief Ministers, Union Ministers, MPs, and state government leaders - a three-decade record of political and institutional trust.",
      cards: [
        { image: entrance1995, name: "Archive Leader", title: "Chief Guest", year: "1995" },
        { image: ice1997, name: "Archive Leader", title: "Government Representative", year: "1997" },
        { image: megaArch, name: "Archive Leader", title: "Industry Guest", year: "2008" },
        { image: crowd1998, name: "Archive Leader", title: "Public Representative", year: "2024" },
      ],
    },
    future: {
      title: "The Vision Now - ICE Global and iGEN 2.0",
      paragraphs: [
        "Sushil Mantri's vision for ICE has always been larger than any single exhibition. The long-term goal has been a permanent, accessible, trusted marketplace infrastructure that connects every Indian brand with every Indian consumer - regardless of geography, season, or economic cycle.",
        "iGEN 2.0 is the realisation of that vision. A digital-physical hybrid marketplace where the trust that ICE built over 30 physical years powers a 365-day online platform.",
      ],
      bullets: [
        "iGEN 2.0 enables year-round buyer-seller connectivity",
        "ICE e-Expo gives brands a permanent digital exhibition presence",
        "Digital pre-registration connects qualified buyers to brands before exhibitions",
        "ICE Global expands the marketplace to every major Indian city",
        "The founder's vision of universal market access is now digitally achievable",
      ],
      cta: { label: "Explore iGEN 2.0 - The Future of ICE", href: "/Igen World" },
      image: infographic,
      imageAlt: "ICE infographic",
    },
    closingCta: {
      title: "The Founder's Marketplace Is Now Yours to Be Part Of",
      subtitle: "Whether you are a brand, a buyer, or a partner - you are the reason ICE was built.",
      primaryCta: { label: "Exhibit at ICE - Carry the Legacy Forward", href: "/sponsor" },
      secondaryCta: { label: "Explore The Sushil Mantri Story", href: "/ice-legacy/sushil-mantri-story" },
    },
  },
  marketplacePhilosophy: {
    hero: {
      chip: "Our Marketplace Philosophy",
      title: "When Buyers and Sellers Meet Physically, Trust Grows Faster",
      subtitle:
        "ICE was built on a simple commercial truth: direct human interaction compresses doubt, accelerates confidence, and turns discovery into real transactions.",
      image: expoImages.aerial,
      imageAlt: "Crowd at an ICE marketplace event",
    },
    belief: {
      label: "Core Belief",
      title: "Physical marketplaces make trust visible.",
      paragraphs: [
        "A consumer exhibition is not only a place to display products. It is a trust environment where buyers can touch, compare, ask questions, negotiate, and purchase with confidence.",
        "For brands, the physical marketplace creates a level stage. Established companies, emerging manufacturers, and ambitious local businesses all meet consumers in the same high-attention environment.",
        "For buyers, the exhibition removes distance. Products, founders, sellers, demonstrations, offers, and service commitments become immediate and inspectable.",
      ],
      pullQuote: "Trust grows fastest when a buyer can see the seller, test the product, and feel the marketplace around them.",
    },
    principles: {
      title: "The Principles Behind the ICE Marketplace",
      items: [
        {
          title: "Access Before Advertising",
          body: "ICE gives brands direct access to buyers before expensive media spend becomes the only way to be noticed.",
        },
        {
          title: "Discovery Before Decision",
          body: "Visitors can discover, compare, question, and shortlist in one journey, which makes purchase decisions more confident.",
        },
        {
          title: "Community Before Transaction",
          body: "The marketplace works because brands, buyers, partners, and local economies all benefit from the same concentrated event.",
        },
      ],
    },
    operatingModel: {
      title: "How ICE Turns Philosophy Into a Marketplace System",
      bullets: [
        "Curated exhibitor categories that make discovery easier for buyers",
        "High-visibility stalls and arches that help brands stand out",
        "Live demos and face-to-face conversations that reduce buyer hesitation",
        "VVIP inaugurations and institutional presence that strengthen credibility",
        "Digital extensions that keep the buyer-seller relationship alive after the event",
      ],
      image: expoImages.booth,
      imageAlt: "Brand stall at an ICE exhibition",
    },
    closingCta: {
      title: "Bring Your Brand Into India's Trust Marketplace",
      subtitle: "The ICE marketplace is designed for real visibility, real conversations, and real commercial momentum.",
      primaryCta: { label: "Exhibit at ICE", href: "/sponsor" },
      secondaryCta: { label: "Read Founder Vision", href: "/ice-legacy/founder-vision" },
    },
  },
};

export const mergeIceLegacyContent = (payload?: Partial<IceLegacyContent> | null): IceLegacyContent => ({
  ...defaultIceLegacyContent,
  ...(payload || {}),
  founderVision: {
    ...defaultIceLegacyContent.founderVision,
    ...(payload?.founderVision || {}),
    hero: { ...defaultIceLegacyContent.founderVision.hero, ...(payload?.founderVision?.hero || {}) },
    origin: { ...defaultIceLegacyContent.founderVision.origin, ...(payload?.founderVision?.origin || {}) },
    beliefs: { ...defaultIceLegacyContent.founderVision.beliefs, ...(payload?.founderVision?.beliefs || {}) },
    timeline: { ...defaultIceLegacyContent.founderVision.timeline, ...(payload?.founderVision?.timeline || {}) },
    quote: { ...defaultIceLegacyContent.founderVision.quote, ...(payload?.founderVision?.quote || {}) },
    entrepreneurialJourney: {
      ...defaultIceLegacyContent.founderVision.entrepreneurialJourney,
      ...(payload?.founderVision?.entrepreneurialJourney || {}),
    },
    economy: { ...defaultIceLegacyContent.founderVision.economy, ...(payload?.founderVision?.economy || {}) },
    endorsements: {
      ...defaultIceLegacyContent.founderVision.endorsements,
      ...(payload?.founderVision?.endorsements || {}),
    },
    future: { ...defaultIceLegacyContent.founderVision.future, ...(payload?.founderVision?.future || {}) },
    closingCta: {
      ...defaultIceLegacyContent.founderVision.closingCta,
      ...(payload?.founderVision?.closingCta || {}),
    },
  },
  marketplacePhilosophy: {
    ...defaultIceLegacyContent.marketplacePhilosophy,
    ...(payload?.marketplacePhilosophy || {}),
    hero: {
      ...defaultIceLegacyContent.marketplacePhilosophy.hero,
      ...(payload?.marketplacePhilosophy?.hero || {}),
    },
    belief: {
      ...defaultIceLegacyContent.marketplacePhilosophy.belief,
      ...(payload?.marketplacePhilosophy?.belief || {}),
    },
    principles: {
      ...defaultIceLegacyContent.marketplacePhilosophy.principles,
      ...(payload?.marketplacePhilosophy?.principles || {}),
    },
    operatingModel: {
      ...defaultIceLegacyContent.marketplacePhilosophy.operatingModel,
      ...(payload?.marketplacePhilosophy?.operatingModel || {}),
    },
    closingCta: {
      ...defaultIceLegacyContent.marketplacePhilosophy.closingCta,
      ...(payload?.marketplacePhilosophy?.closingCta || {}),
    },
  },
});
