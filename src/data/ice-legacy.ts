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

// export type FounderVisionContent = {
//   hero: {
//     chip: string;
//     title: string;
//     subtitle: string;
//     cta: Cta;
//     image: string;
//     imageAlt: string;
//   };
//   origin: {
//     label: string;
//     title: string;
//     paragraphs: string[];
//     pullQuote: string;
//   };
//   beliefs: {
//     title: string;
//     items: { number: string; title: string; body: string }[];
//   };
//   timeline: {
//     title: string;
//     steps: { year: string; title: string; body: string }[];
//   };
//   quote: {
//     text: string;
//     attribution: string;
//     images: LegacyImage[];
//   };
//   entrepreneurialJourney: {
//     title: string;
//     paragraphs: string[];
//     image: string;
//     caption: string;
//   };
//   economy: {
//     title: string;
//     cards: { title: string; body: string }[];
//     images: LegacyImage[];
//   };
//   endorsements: {
//     title: string;
//     subtitle: string;
//     cards: { image: string; name: string; title: string; year: string }[];
//   };
//   future: {
//     title: string;
//     paragraphs: string[];
//     bullets: string[];
//     cta: Cta;
//     image: string;
//     imageAlt: string;
//   };
//   closingCta: {
//     title: string;
//     subtitle: string;
//     primaryCta: Cta;
//     secondaryCta: Cta;
//   };
// };

// export type MarketplacePhilosophyContent = {
//   hero: {
//     chip: string;
//     title: string;
//     subtitle: string;
//     image: string;
//     imageAlt: string;
//   };
//   belief: {
//     label: string;
//     title: string;
//     paragraphs: string[];
//     pullQuote: string;
//   };
//   principles: {
//     title: string;
//     items: { title: string; body: string }[];
//   };
//   operatingModel: {
//     title: string;
//     bullets: string[];
//     image: string;
//     imageAlt: string;
//   };
//   closingCta: {
//     title: string;
//     subtitle: string;
//     primaryCta: Cta;
//     secondaryCta: Cta;
//   };
// };

export type WhyIndiaTrustsIceContent = {
  sectionVisibility: {
    hero: boolean;
    pillars: boolean;
    stats: boolean;
    mediaProof: boolean;
    buyerTestimonials: boolean;
    sellerTestimonials: boolean;
    vvipGallery: boolean;
    celebrityGallery: boolean;
    closingCta: boolean;
  };
  hero: {
    title: string;
    subtitle: string;
    chips: string[];
    image: string;
    imageAlt: string;
  };
  pillars: {
    title: string;
    reasons: { title: string; body: string; image: string; imageAlt: string }[];
  };
  stats: { value: string; label: string }[];
  mediaProof: {
    title: string;
    cards: { source: string; headline: string; detail: string; year: string; image: string; imageAlt: string }[];
  };
  buyerTestimonials: {
    title: string;
    cards: { name: string; designation: string; quote: string; rating: string; image: string }[];
  };
  sellerTestimonials: {
    title: string;
    cards: { name: string; designation: string; quote: string; rating: string; image: string }[];
  };
  vvipGallery: {
    title: string;
    cards: { image: string; name: string; title: string; year: string }[];
  };
  celebrityGallery: {
    title: string;
    cards: { image: string; name: string; occasion: string; year: string }[];
  };
  closingCta: {
    title: string;
    subtitle: string;
    primaryCta: Cta;
    secondaryCta: Cta;
  };
};

// export type BrandEvolutionContent = {
//   sectionVisibility: {
//     hero: boolean;
//     nameEvolution: boolean;
//     logoHistory: boolean;
//     philosophy: boolean;
//     promoMaterials: boolean;
//     websiteEvolution: boolean;
//     brandValues: boolean;
//     milestones: boolean;
//     cta: boolean;
//   };
//   hero: {
//     title: string;
//     subtitle: string;
//   };
//   nameEvolution: {
//     heading: string;
//     steps: { era: string; brandName: string; description: string }[];
//   };
//   logoHistory: {
//     heading: string;
//     cards: { image: string; era: string; caption: string; alt: string }[];
//   };
//   philosophy: {
//     title: string;
//     paragraphs: string[];
//     image: string;
//     imageAlt: string;
//   };
//   promoMaterials: {
//     heading: string;
//     cards: { image: string; year: string; caption: string; alt: string }[];
//   };
//   websiteEvolution: {
//     heading: string;
//     cards: { title: string; body: string }[];
//   };
//   brandValues: {
//     heading: string;
//     cards: { title: string; body: string }[];
//   };
//   milestones: {
//     heading: string;
//     nodes: { year: string; body: string }[];
//   };
//   cta: {
//     heading: string;
//     subtitle: string;
//     primaryCta: Cta;
//     secondaryCta: Cta;
//   };
// };

export type IceLegacyContent = {
  // founderVision: FounderVisionContent;
  // marketplacePhilosophy: MarketplacePhilosophyContent;
  whyIndiaTrustsIce: WhyIndiaTrustsIceContent;
  // brandEvolution: BrandEvolutionContent;
};

const entrance1995 = "https://i.ibb.co/7NbRjS1s/Colorful-entrance-to-ICE-1995.png";
const crowd1998 = "https://i.ibb.co/MkZqy2Ht/Crowd-gathering-at-ICE-1998-entrance.png";
const ice1997 = "https://i.ibb.co/qF5xNyCG/Ice-1997-exhibition-entrance-at-dusk.png";
const topBrand = "https://i.ibb.co/ZzpfT4mx/ICE-Top-Brands-011.png";
const megaArch = "https://i.ibb.co/7tm9JCKM/ICE-YEARS20.png";
const infographic = "https://i.ibb.co/60sFxbb4/Warm-Blue-Exhibition-Poster-with-Parallelograms.png";

export const defaultIceLegacyContent: IceLegacyContent = {
  // founderVision: {
  //   hero: {
  //     chip: "The Visionary Founder of ICE Exhibitions",
  //     title: "Sushil Mantri - The Man Who Imagined India's Biggest Consumer Marketplace Before It Existed",
  //     subtitle:
  //       "A fundamental insight in 1994. A physical marketplace built from nothing. 30 years of proof that trust is India's most powerful commercial force.",
  //     cta: { label: "Read the Full Founder Story", href: "#origin" },
  //     image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&h=1000&fit=crop",
  //     imageAlt: "Founder portrait of Sushil Mantri",
  //   },
  //   origin: {
  //     label: "The Origin",
  //     title: "The Observation That Changed India's Marketplace",
  //     paragraphs: [
  //       "In the early 1990s, India was waking up to a new economic reality. Liberalisation had opened the gates to brands, products, and ambitions. But the infrastructure to connect those brands with India's rapidly aspiring consumers simply did not exist.",
  //       "Sushil Mantri - then a young, capital-light entrepreneur in Bengaluru - saw what others missed: there was a massive, structural gap between manufacturers and end consumers. Distribution channels were fragmented, geographically limited, and controlled by a small class of traditional retailers. Emerging brands had no direct voice. Consumers had no direct access.",
  //       "His insight was both simple and revolutionary: what if you could bring the entire marketplace to the people - at scale, under one roof, for a limited but intensely commercial period? A curated, physical, temporary mega-marketplace before that concept had a name or a category.",
  //       "That question became the founding DNA of ICE. Not just an exhibition, but a genuinely new commercial infrastructure for a newly liberalising India.",
  //     ],
  //     pullQuote:
  //       "What if the marketplace came to the people - rather than waiting for the people to find the marketplace?",
  //   },
  //   beliefs: {
  //     title: "The Three Beliefs That Built ICE",
  //     items: [
  //       {
  //         number: "01",
  //         title: "Physical Trust Builds Faster Than Digital Trust",
  //         body:
  //           "Sushil Mantri's core belief - reinforced by 30 years of evidence - is that when a consumer touches, tries, and transacts with a brand in a curated physical environment, the resulting trust is deeper, longer-lasting, and more commercially powerful than any digital interaction.",
  //       },
  //       {
  //         number: "02",
  //         title: "Every Brand Deserves a Level Marketplace",
  //         body:
  //           "From the first ICE exhibition, Mantri insisted that the platform must be accessible to brands at every scale - not just those with the largest marketing budgets. This democratising philosophy is what made ICE the launchpad for hundreds of Indian brands.",
  //       },
  //       {
  //         number: "03",
  //         title: "A Trusted Marketplace Is the Fastest Economic Engine",
  //         body:
  //           "ICE was never just a commercial event. It was - and remains - an economic multiplier. Every edition creates jobs, generates revenue for sellers, delivers value to buyers, and stimulates local economies in host cities.",
  //       },
  //     ],
  //   },
  //   timeline: {
  //     title: "From First Idea to 30-Year Legacy",
  //     steps: [
  //       {
  //         year: "1994",
  //         title: "The First Exhibition",
  //         body: "First ICE expo launches in Bengaluru. Hundreds of brands. Thousands of buyers. The marketplace category is born.",
  //       },
  //       {
  //         year: "1997",
  //         title: "The Proof of Concept",
  //         body: "Sushil Mantri's own story - 42 flats sold in 22 days through ICE visibility. ICE becomes a proven brand launchpad.",
  //       },
  //       {
  //         year: "2000s",
  //         title: "The Expanding Vision",
  //         body: "ICE expands across South India. National brands join. Millions of buyers attend. The vision scales beyond Bengaluru.",
  //       },
  //       {
  //         year: "2024",
  //         title: "iGEN 2.0",
  //         body: "The final evolution - physical trust platform becomes a permanent digital-physical marketplace. The vision of universal marketplace access is realised.",
  //       },
  //     ],
  //   },
  //   quote: {
  //     text:
  //       "ICE was never just an exhibition. It was proof that India's consumers were ready, that Indian brands could rise to meet them, and that trust - built in person - is the most powerful commercial currency there is.",
  //     attribution: "- Sushil Mantri, Founder, ICE Exhibitions",
  //     images: [
  //       { image: ice1997, title: "Founder at ICE event", caption: "Founder archive" },
  //       { image: entrance1995, title: "ICE inauguration ceremony", caption: "VVIPs at ICE" },
  //       { image: crowd1998, title: "Large ICE crowd", caption: "ICE crowd archive" },
  //     ],
  //   },
  //   entrepreneurialJourney: {
  //     title: "Building ICE Without Capital - Only Vision",
  //     paragraphs: [
  //       "Sushil Mantri started ICE with minimal financial resources. There were no venture capital backers, no corporate sponsors, and no government grants. The early exhibitions were built on personal relationships, grassroots marketing, and a deep understanding of what both brands and consumers actually needed.",
  //       "The team was built on trust rather than corporate contracts. Venue partnerships were formed through personal negotiation with local authorities and infrastructure owners. Brand participants were signed through face-to-face conviction, not expensive sales processes.",
  //       "The early ICE exhibitions were not glamorous by contemporary standards - but they were extraordinarily effective. They created genuine commercial transactions. They helped brands find new markets. They gave consumers access to products that would otherwise have been geographically inaccessible.",
  //       "This approach - community-first, trust-first, commercial second - became the operational philosophy of ICE that has survived and strengthened over 30 years.",
  //     ],
  //     image: entrance1995,
  //     caption: "Early-era ICE exhibition entrance and crowd energy.",
  //   },
  //   economy: {
  //     title: "What Sushil Mantri Built for India's Economy",
  //     cards: [
  //       {
  //         title: "A Launchpad for Indian Brands",
  //         body:
  //           "Hundreds of Indian brands - from small manufacturers to national players - used ICE as their primary launch and growth platform in South India. Many of India's recognisable consumer brands built their first serious consumer base through ICE.",
  //       },
  //       {
  //         title: "Access for India's Aspiring Consumers",
  //         body:
  //           "Before organised retail and before e-commerce, ICE was how South India's aspiring middle class accessed quality branded products at verified prices. ICE democratised the consumer experience - not just for brands, but for buyers.",
  //       },
  //       {
  //         title: "A Template for Physical Marketplace Events",
  //         body:
  //           "ICE created the operational blueprint for consumer exhibition events in India. The processes, community relationships, and marketplace infrastructure that ICE built over 30 years have shaped the broader exhibition industry.",
  //       },
  //     ],
  //     images: [
  //       { image: topBrand, title: "Top Brands at ICE" },
  //       { image: megaArch, title: "ICE Mega Arches" },
  //       { image: crowd1998, title: "ICE Crowd" },
  //     ],
  //   },
  //   endorsements: {
  //     title: "A Vision That India's Leaders Recognised and Endorsed",
  //     subtitle:
  //       "ICE exhibitions have been inaugurated by Chief Ministers, Union Ministers, MPs, and state government leaders - a three-decade record of political and institutional trust.",
  //     cards: [
  //       { image: entrance1995, name: "Archive Leader", title: "Chief Guest", year: "1995" },
  //       { image: ice1997, name: "Archive Leader", title: "Government Representative", year: "1997" },
  //       { image: megaArch, name: "Archive Leader", title: "Industry Guest", year: "2008" },
  //       { image: crowd1998, name: "Archive Leader", title: "Public Representative", year: "2024" },
  //     ],
  //   },
  //   future: {
  //     title: "The Vision Now - ICE Global and iGEN 2.0",
  //     paragraphs: [
  //       "Sushil Mantri's vision for ICE has always been larger than any single exhibition. The long-term goal has been a permanent, accessible, trusted marketplace infrastructure that connects every Indian brand with every Indian consumer - regardless of geography, season, or economic cycle.",
  //       "iGEN 2.0 is the realisation of that vision. A digital-physical hybrid marketplace where the trust that ICE built over 30 physical years powers a 365-day online platform.",
  //     ],
  //     bullets: [
  //       "iGEN 2.0 enables year-round buyer-seller connectivity",
  //       "ICE e-Expo gives brands a permanent digital exhibition presence",
  //       "Digital pre-registration connects qualified buyers to brands before exhibitions",
  //       "ICE Global expands the marketplace to every major Indian city",
  //       "The founder's vision of universal market access is now digitally achievable",
  //     ],
  //     cta: { label: "Explore iGEN 2.0 - The Future of ICE", href: "/Igen World" },
  //     image: infographic,
  //     imageAlt: "ICE infographic",
  //   },
  //   closingCta: {
  //     title: "The Founder's Marketplace Is Now Yours to Be Part Of",
  //     subtitle: "Whether you are a brand, a buyer, or a partner - you are the reason ICE was built.",
  //     primaryCta: { label: "Exhibit at ICE - Carry the Legacy Forward", href: "/sponsor" },
  //     secondaryCta: { label: "Explore The Sushil Mantri Story", href: "/ice-legacy/sushil-mantri-story" },
  //   },
  // },
  // marketplacePhilosophy: {
  //   hero: {
  //     chip: "Our Marketplace Philosophy",
  //     title: "When Buyers and Sellers Meet Physically, Trust Grows Faster",
  //     subtitle:
  //       "ICE was built on a simple commercial truth: direct human interaction compresses doubt, accelerates confidence, and turns discovery into real transactions.",
  //     image: expoImages.aerial,
  //     imageAlt: "Crowd at an ICE marketplace event",
  //   },
  //   belief: {
  //     label: "Core Belief",
  //     title: "Physical marketplaces make trust visible.",
  //     paragraphs: [
  //       "A consumer exhibition is not only a place to display products. It is a trust environment where buyers can touch, compare, ask questions, negotiate, and purchase with confidence.",
  //       "For brands, the physical marketplace creates a level stage. Established companies, emerging manufacturers, and ambitious local businesses all meet consumers in the same high-attention environment.",
  //       "For buyers, the exhibition removes distance. Products, founders, sellers, demonstrations, offers, and service commitments become immediate and inspectable.",
  //     ],
  //     pullQuote: "Trust grows fastest when a buyer can see the seller, test the product, and feel the marketplace around them.",
  //   },
  //   principles: {
  //     title: "The Principles Behind the ICE Marketplace",
  //     items: [
  //       {
  //         title: "Access Before Advertising",
  //         body: "ICE gives brands direct access to buyers before expensive media spend becomes the only way to be noticed.",
  //       },
  //       {
  //         title: "Discovery Before Decision",
  //         body: "Visitors can discover, compare, question, and shortlist in one journey, which makes purchase decisions more confident.",
  //       },
  //       {
  //         title: "Community Before Transaction",
  //         body: "The marketplace works because brands, buyers, partners, and local economies all benefit from the same concentrated event.",
  //       },
  //     ],
  //   },
  //   operatingModel: {
  //     title: "How ICE Turns Philosophy Into a Marketplace System",
  //     bullets: [
  //       "Curated exhibitor categories that make discovery easier for buyers",
  //       "High-visibility stalls and arches that help brands stand out",
  //       "Live demos and face-to-face conversations that reduce buyer hesitation",
  //       "VVIP inaugurations and institutional presence that strengthen credibility",
  //       "Digital extensions that keep the buyer-seller relationship alive after the event",
  //     ],
  //     image: expoImages.booth,
  //     imageAlt: "Brand stall at an ICE exhibition",
  //   },
  //   closingCta: {
  //     title: "Bring Your Brand Into India's Trust Marketplace",
  //     subtitle: "The ICE marketplace is designed for real visibility, real conversations, and real commercial momentum.",
  //     primaryCta: { label: "Exhibit at ICE", href: "/sponsor" },
  //     secondaryCta: { label: "Read Founder Vision", href: "/ice-legacy/founder-vision" },
  //   },
  // },
  whyIndiaTrustsIce: {
    sectionVisibility: {
      hero: true,
      pillars: true,
      stats: true,
      mediaProof: true,
      buyerTestimonials: true,
      sellerTestimonials: true,
      vvipGallery: true,
      celebrityGallery: true,
      closingCta: true,
    },
    hero: {
      title: "Why 20 Million Indians Have Chosen ICE - Year After Year, for 30 Years",
      subtitle:
        "ICE's credibility is not a marketing claim. It is documented, verifiable, and earned across three decades. This page presents the evidence.",
      chips: ["30+ Years Verified", "Government Inaugurated", "10,000+ Curated Brands"],
      image: crowd1998,
      imageAlt: "Crowd at an ICE exhibition hall",
    },
    pillars: {
      title: "The Five Pillars of ICE's National Credibility",
      reasons: [
        {
          title: "1. Three Decades of Unbroken Delivery",
          body:
            "ICE has operated every year for over 30 years without a single failed edition. In India's commercial landscape - where events, platforms, and businesses regularly fail to deliver on their promises - this consistency is the foundation of ICE's buyer trust. When consumers know an event will happen, will be high quality, and will deliver genuine value, they return. And they bring others.",
          image: entrance1995,
          imageAlt: "Historic ICE entrance from the 1990s",
        },
        {
          title: "2. Inaugurated by India's Institutional Leaders",
          body:
            "ICE exhibitions have been inaugurated by Chief Ministers, Union Ministers, MPs, national industrialists, and civic leaders across 30 years. This pattern of institutional endorsement - from government figures who would not associate their reputation with an untrustworthy event - is one of the most powerful credibility signals in Indian commercial culture.",
          image: ice1997,
          imageAlt: "VVIP inauguration at ICE",
        },
        {
          title: "3. India's Most Trusted Consumer Brands Choose ICE",
          body:
            "Reynolds. Tata. Himalaya. Nikon. Panasonic. Samsung. LG. Sony. Indian Oil. Sleepwell. These are not brands that choose their exhibition partners carelessly. Their consistent, multi-year participation in ICE is a signal of marketplace credibility that no amount of marketing can manufacture. Trusted brands exhibit where buyers trust the platform.",
          image: topBrand,
          imageAlt: "Top brands at ICE",
        },
        {
          title: "4. Celebrity Endorsement Across Multiple ICE Editions",
          body:
            "India's Bollywood stars have appeared at ICE inaugurations and as brand ambassadors at ICE exhibitions. In a culture where celebrity association carries significant consumer trust implications, ICE's celebrity history is a commercial credibility asset of real measurable value.",
          image: megaArch,
          imageAlt: "Celebrity and public visibility at ICE",
        },
        {
          title: "5. The Sushil Mantri Proof - 42 Flats in 22 Days",
          body:
            "In 1997, Sushil Mantri exhibited a real estate project at ICE and sold 42 residential flats in 22 days. This transaction - accomplished through ICE's visibility, credibility, and qualified buyer access - remains the most cited proof point of ICE's commercial trust power. It is not anecdote. It is documented commercial history.",
          image: infographic,
          imageAlt: "ICE proof point infographic",
        },
      ],
    },
    stats: [
      { value: "30+", label: "Years of institutional trust without interruption" },
      { value: "20M+", label: "Buyers who chose ICE over all alternatives" },
      { value: "10,000+", label: "Brands that trusted ICE with their consumer relationships" },
      { value: "3 Generations", label: "Of Indian consumers who have grown up with ICE" },
    ],
    mediaProof: {
      title: "How India's Media Has Documented ICE's Credibility",
      cards: [
        {
          source: "Deccan Herald",
          headline: "ICE Exhibition Opens With Record Brand Participation",
          detail: "Coverage demonstrating scale and quality",
          year: "1990s",
          image: "",
          imageAlt: "Representative Deccan Herald clipping",
        },
        {
          source: "Times of India",
          headline: "South India's Largest Consumer Expo Celebrates Another Successful Edition",
          detail: "Regional leader credibility",
          year: "2000s",
          image: "",
          imageAlt: "Representative Times of India clipping",
        },
        {
          source: "National TV Coverage",
          headline: "ICE Mega Expo - How South India's Biggest Exhibition Survived Three Decades",
          detail: "Legacy feature coverage",
          year: "2010s",
          image: "",
          imageAlt: "Representative national TV coverage still",
        },
      ],
    },
    buyerTestimonials: {
      title: "In Their Own Words - Why Buyers Trust ICE",
      cards: [
        {
          name: "Ramesh Kumar",
          designation: "Repeat visitor, Bengaluru",
          quote:
            "My family has visited ICE for years because we can compare real products, meet sellers directly, and buy with confidence.",
          rating: "5.0",
          image: "",
        },
        {
          name: "Anita Rao",
          designation: "Buyer, Hyderabad",
          quote:
            "ICE gives us choices we cannot find in one normal market. The brands, offers, and live demos make the visit worth it.",
          rating: "5.0",
          image: "",
        },
        {
          name: "Prakash Shetty",
          designation: "Buyer, Mangaluru",
          quote:
            "I trust ICE because the same platform has delivered good experiences for decades. It feels familiar and credible.",
          rating: "4.9",
          image: "",
        },
      ],
    },
    sellerTestimonials: {
      title: "What Brands Say - The Seller Side of ICE Trust",
      cards: [
        {
          name: "Priya Nair",
          designation: "Consumer electronics exhibitor",
          quote:
            "ICE brings serious buyers to the stall. The trust built by the event helps conversations move faster.",
          rating: "5.0",
          image: "",
        },
        {
          name: "Arvind Menon",
          designation: "Home lifestyle brand",
          quote:
            "We use ICE to launch products because customers can see, touch, ask, and decide on the spot.",
          rating: "4.9",
          image: "",
        },
        {
          name: "Meera Shah",
          designation: "Wellness brand partner",
          quote:
            "The credibility of ICE makes it easier for new customers to trust our brand during first interaction.",
          rating: "5.0",
          image: "",
        },
      ],
    },
    vvipGallery: {
      title: "Leaders Who Have Stood on the ICE Stage",
      cards: [
        { image: entrance1995, name: "General Vijay Singh G", title: "National leader and chief guest", year: "Archive" },
        { image: ice1997, name: "Pankaj Modi Ji", title: "Public leader and inauguration guest", year: "Archive" },
        { image: megaArch, name: "State Leadership Guest", title: "Government representative", year: "2008" },
        { image: crowd1998, name: "Industry Leadership Guest", title: "Business and civic leader", year: "2024" },
      ],
    },
    celebrityGallery: {
      title: "Faces That Have Amplified ICE's Reach and Trust",
      cards: [
        { image: megaArch, name: "Celebrity Guest", occasion: "ICE inauguration appearance", year: "Archive" },
        { image: crowd1998, name: "Brand Ambassador", occasion: "Product launch at ICE", year: "Archive" },
        { image: topBrand, name: "Film Personality", occasion: "Public appearance", year: "Archive" },
        { image: infographic, name: "Entertainment Guest", occasion: "Campaign moment", year: "Archive" },
      ],
    },
    closingCta: {
      title: "ICE trust is 30 years in the making. It is available to every brand that joins the marketplace.",
      subtitle: "Bring your brand to India's most trusted consumer platform.",
      primaryCta: { label: "Exhibit at ICE 2025", href: "/sponsor" },
      secondaryCta: { label: "Read ICE's 30-Year Legacy", href: "/ice-legacy/30-year-journey" },
    },
  },
  // brandEvolution: {
  //   sectionVisibility: {
  //     hero: true,
  //     nameEvolution: true,
  //     logoHistory: true,
  //     philosophy: true,
  //     promoMaterials: true,
  //     websiteEvolution: true,
  //     brandValues: true,
  //     milestones: true,
  //     cta: true,
  //   },
  //   hero: {
  //     title: "From ICE to ICE Mega Expo to ICE Global - The Evolution of India's Marketplace Brand",
  //     subtitle:
  //       "A 30-year brand journey that mirrors India's consumer economy - growing from regional pioneer to national marketplace leader.",
  //   },
  //   nameEvolution: {
  //     heading: "The Four Chapters of the ICE Brand",
  //     steps: [
  //       {
  //         era: "1994",
  //         brandName: "ICE",
  //         description:
  //           "International Consumer Exhibition. Original founding name. South India. Physical marketplace pioneer.",
  //       },
  //       {
  //         era: "2000s",
  //         brandName: "ICE Mega Expo",
  //         description:
  //           "Brand scaled to reflect the actual size and ambition of the exhibition. 'Mega' added to communicate scale.",
  //       },
  //       {
  //         era: "2015",
  //         brandName: "ICE Mega Expo + icemegaexpo.com",
  //         description:
  //           "Digital identity added. Brand becomes dual - physical exhibition plus online presence.",
  //       },
  //       {
  //         era: "2024",
  //         brandName: "ICE Global + iGEN 2.0 + iceglobal.in",
  //         description:
  //           "National rebrand. Global ambition signalled. Digital-physical platform identity formalised.",
  //       },
  //     ],
  //   },
  //   logoHistory: {
  //     heading: "The ICE Logo - How the Visual Identity Evolved",
  //     cards: [
  //       {
  //         image: "",
  //         era: "1994-2000s",
  //         caption: "The founding identity - simple, functional, trust-communicating",
  //         alt: "ICE original logo",
  //       },
  //       {
  //         image: "",
  //         era: "2000s-2015",
  //         caption: "Scale signalled - the Mega identity communicates the exhibition's true size",
  //         alt: "ICE Mega Expo logo",
  //       },
  //       {
  //         image: "",
  //         era: "2015-2023",
  //         caption: "Digital-age update - cleaner, digital-first visual language",
  //         alt: "ICE Mega Expo updated logo",
  //       },
  //       {
  //         image: "",
  //         era: "2024+",
  //         caption: "The national brand - global ambition, Indian trust foundation",
  //         alt: "ICE Global and iGEN logo",
  //       },
  //     ],
  //   },
  //   philosophy: {
  //     title: "Why the Brand Evolved - And What Stayed Constant",
  //     paragraphs: [
  //       "The ICE brand has changed its name and visual identity three times across 30 years. Each change reflected a genuine evolution in the platform's scale, ambition, and commercial reality - not a rebrand for rebrand's sake.",
  //       "The first name change - from 'ICE' to 'ICE Mega Expo' - came when the exhibition genuinely became mega. The scale, brand participation, and consumer footfall had outgrown a simple 'exhibition' identity. The word 'Mega' was earned, not aspirational.",
  //       "The most recent change - to 'ICE Global' - reflects the platform's national and international ambitions. The iceglobal.in domain signals that ICE's marketplace is no longer just a South India institution but a national platform with global brand participation potential.",
  //       "Through every name and logo change, the core of the brand has remained unchanged: trust, curation, physical marketplace excellence, and the belief that buyers and sellers benefit most from meeting in person in a high-quality environment.",
  //     ],
  //     image: infographic,
  //     imageAlt: "ICE infographic or promotional identity graphic",
  //   },
  //   promoMaterials: {
  //     heading: "The ICE Brand Through Its Marketing Materials",
  //     cards: [
  //       {
  //         image: topBrand,
  //         year: "2000s",
  //         caption: "ICE Mega Expo promotional identity used across exhibition campaigns.",
  //         alt: "ICE Mega Expo promotional material",
  //       },
  //       {
  //         image: megaArch,
  //         year: "2024",
  //         caption: "30 years - documented and designed",
  //         alt: "ICE 30-year anniversary infographic",
  //       },
  //       {
  //         image: infographic,
  //         year: "2024",
  //         caption: "The new face of the oldest consumer marketplace",
  //         alt: "iGEN 2.0 promotional graphic",
  //       },
  //     ],
  //   },
  //   websiteEvolution: {
  //     heading: "The Digital Brand - From First Website to iGEN 2.0",
  //     cards: [
  //       {
  //         title: "icemegaexpo.com - The First Digital Home",
  //         body:
  //           "The ICE Mega Expo website established ICE's digital identity - gallery, timeline, team, and brand presence online for the first time.",
  //       },
  //       {
  //         title: "iceglobal.in - The National Platform",
  //         body:
  //           "iceglobal.in launched as the Version 2.0 national platform - redesigned mega menu, deeper content, iGEN 2.0 integration, and a complete digital home for ICE's 30-year legacy.",
  //       },
  //       {
  //         title: "iGEN Platform - The Marketplace App",
  //         body:
  //           "Beyond the website, iGEN 2.0 is a platform - a digital marketplace with buyer pre-registration, e-Expo, and year-round brand-buyer connectivity.",
  //       },
  //     ],
  //   },
  //   brandValues: {
  //     heading: "What Has Never Changed in 30 Years - The ICE Brand Constants",
  //     cards: [
  //       {
  //         title: "Trust",
  //         body:
  //           "Every ICE brand decision - from the name to the logo to the website - has been made in service of one goal: communicating and protecting trust.",
  //       },
  //       {
  //         title: "Curation",
  //         body:
  //           "The ICE brand has always signalled curation - not every brand gets in, not every event is ICE. That selectivity is a brand asset.",
  //       },
  //       {
  //         title: "Scale",
  //         body:
  //           "ICE has always been Mega - even before that word was in the name. The brand communicates the scale of the experience, the number of brands, and the size of the buyer community.",
  //       },
  //       {
  //         title: "India",
  //         body:
  //           "ICE is an India brand - rooted in Indian commercial culture, serving Indian consumers and brands, and building the marketplace infrastructure that India's economy needs.",
  //       },
  //     ],
  //   },
  //   milestones: {
  //     heading: "Key Moments in the ICE Brand History",
  //     nodes: [
  //       { year: "1994", body: "ICE brand born. First exhibition. South India's first consumer expo." },
  //       { year: "Late 1990s", body: "First brand guidelines developed. ICE identity formalised." },
  //       { year: "2000s", body: "'Mega' added. ICE Mega Expo identity launched." },
  //       { year: "2015", body: "icemegaexpo.com launches. Digital identity established." },
  //       { year: "2024", body: "ICE Global rebrand. iceglobal.in. iGEN 2.0. National identity." },
  //     ],
  //   },
  //   cta: {
  //     heading: "The ICE Brand Is India's Most Trusted Consumer Marketplace Mark",
  //     subtitle: "When your brand appears under the ICE banner, it inherits 30 years of buyer trust.",
  //     primaryCta: { label: "Exhibit Under the ICE Brand - Register Now", href: "/sponsor" },
  //     secondaryCta: { label: "Explore ICE Legacy", href: "/ice-legacy/founder-vision" },
  //   },
  // },
};

export const mergeIceLegacyContent = (payload?: Partial<IceLegacyContent> | null): IceLegacyContent => ({
  ...defaultIceLegacyContent,
  ...(payload || {}),
  // founderVision: {
  //   ...defaultIceLegacyContent.founderVision,
  //   ...(payload?.founderVision || {}),
  //   hero: { ...defaultIceLegacyContent.founderVision.hero, ...(payload?.founderVision?.hero || {}) },
  //   origin: { ...defaultIceLegacyContent.founderVision.origin, ...(payload?.founderVision?.origin || {}) },
  //   beliefs: { ...defaultIceLegacyContent.founderVision.beliefs, ...(payload?.founderVision?.beliefs || {}) },
  //   timeline: { ...defaultIceLegacyContent.founderVision.timeline, ...(payload?.founderVision?.timeline || {}) },
  //   quote: { ...defaultIceLegacyContent.founderVision.quote, ...(payload?.founderVision?.quote || {}) },
  //   entrepreneurialJourney: {
  //     ...defaultIceLegacyContent.founderVision.entrepreneurialJourney,
  //     ...(payload?.founderVision?.entrepreneurialJourney || {}),
  //   },
  //   economy: { ...defaultIceLegacyContent.founderVision.economy, ...(payload?.founderVision?.economy || {}) },
  //   endorsements: {
  //     ...defaultIceLegacyContent.founderVision.endorsements,
  //     ...(payload?.founderVision?.endorsements || {}),
  //   },
  //   future: { ...defaultIceLegacyContent.founderVision.future, ...(payload?.founderVision?.future || {}) },
  //   closingCta: {
  //     ...defaultIceLegacyContent.founderVision.closingCta,
  //     ...(payload?.founderVision?.closingCta || {}),
  //   },
  // },
  // marketplacePhilosophy: {
  //   ...defaultIceLegacyContent.marketplacePhilosophy,
  //   ...(payload?.marketplacePhilosophy || {}),
  //   hero: {
  //     ...defaultIceLegacyContent.marketplacePhilosophy.hero,
  //     ...(payload?.marketplacePhilosophy?.hero || {}),
  //   },
  //   belief: {
  //     ...defaultIceLegacyContent.marketplacePhilosophy.belief,
  //     ...(payload?.marketplacePhilosophy?.belief || {}),
  //   },
  //   principles: {
  //     ...defaultIceLegacyContent.marketplacePhilosophy.principles,
  //     ...(payload?.marketplacePhilosophy?.principles || {}),
  //   },
  //   operatingModel: {
  //     ...defaultIceLegacyContent.marketplacePhilosophy.operatingModel,
  //     ...(payload?.marketplacePhilosophy?.operatingModel || {}),
  //   },
  //   closingCta: {
  //     ...defaultIceLegacyContent.marketplacePhilosophy.closingCta,
  //     ...(payload?.marketplacePhilosophy?.closingCta || {}),
  //   },
  // },
  whyIndiaTrustsIce: {
    ...defaultIceLegacyContent.whyIndiaTrustsIce,
    ...(payload?.whyIndiaTrustsIce || {}),
    sectionVisibility: {
      ...defaultIceLegacyContent.whyIndiaTrustsIce.sectionVisibility,
      ...(payload?.whyIndiaTrustsIce?.sectionVisibility || {}),
    },
    hero: {
      ...defaultIceLegacyContent.whyIndiaTrustsIce.hero,
      ...(payload?.whyIndiaTrustsIce?.hero || {}),
    },
    pillars: {
      ...defaultIceLegacyContent.whyIndiaTrustsIce.pillars,
      ...(payload?.whyIndiaTrustsIce?.pillars || {}),
    },
    mediaProof: {
      ...defaultIceLegacyContent.whyIndiaTrustsIce.mediaProof,
      ...(payload?.whyIndiaTrustsIce?.mediaProof || {}),
    },
    buyerTestimonials: {
      ...defaultIceLegacyContent.whyIndiaTrustsIce.buyerTestimonials,
      ...(payload?.whyIndiaTrustsIce?.buyerTestimonials || {}),
    },
    sellerTestimonials: {
      ...defaultIceLegacyContent.whyIndiaTrustsIce.sellerTestimonials,
      ...(payload?.whyIndiaTrustsIce?.sellerTestimonials || {}),
    },
    vvipGallery: {
      ...defaultIceLegacyContent.whyIndiaTrustsIce.vvipGallery,
      ...(payload?.whyIndiaTrustsIce?.vvipGallery || {}),
    },
    celebrityGallery: {
      ...defaultIceLegacyContent.whyIndiaTrustsIce.celebrityGallery,
      ...(payload?.whyIndiaTrustsIce?.celebrityGallery || {}),
    },
    closingCta: {
      ...defaultIceLegacyContent.whyIndiaTrustsIce.closingCta,
      ...(payload?.whyIndiaTrustsIce?.closingCta || {}),
    },
  },
  // brandEvolution: {
  //   ...defaultIceLegacyContent.brandEvolution,
  //   ...(payload?.brandEvolution || {}),
  //   sectionVisibility: {
  //     ...defaultIceLegacyContent.brandEvolution.sectionVisibility,
  //     ...(payload?.brandEvolution?.sectionVisibility || {}),
  //   },
  //   hero: { ...defaultIceLegacyContent.brandEvolution.hero, ...(payload?.brandEvolution?.hero || {}) },
  //   nameEvolution: {
  //     ...defaultIceLegacyContent.brandEvolution.nameEvolution,
  //     ...(payload?.brandEvolution?.nameEvolution || {}),
  //   },
  //   logoHistory: {
  //     ...defaultIceLegacyContent.brandEvolution.logoHistory,
  //     ...(payload?.brandEvolution?.logoHistory || {}),
  //   },
  //   philosophy: {
  //     ...defaultIceLegacyContent.brandEvolution.philosophy,
  //     ...(payload?.brandEvolution?.philosophy || {}),
  //   },
  //   promoMaterials: {
  //     ...defaultIceLegacyContent.brandEvolution.promoMaterials,
  //     ...(payload?.brandEvolution?.promoMaterials || {}),
  //   },
  //   websiteEvolution: {
  //     ...defaultIceLegacyContent.brandEvolution.websiteEvolution,
  //     ...(payload?.brandEvolution?.websiteEvolution || {}),
  //   },
  //   brandValues: {
  //     ...defaultIceLegacyContent.brandEvolution.brandValues,
  //     ...(payload?.brandEvolution?.brandValues || {}),
  //   },
  //   milestones: {
  //     ...defaultIceLegacyContent.brandEvolution.milestones,
  //     ...(payload?.brandEvolution?.milestones || {}),
  //   },
  //   cta: { ...defaultIceLegacyContent.brandEvolution.cta, ...(payload?.brandEvolution?.cta || {}) },
  // },
});
