// import { FastifyInstance } from "fastify";
// import { z } from "zod";
// import { getDb } from "../../db/mongo";
// import { defaultIceLegacy } from "./default-content";

// const looseObject = z.record(z.any()).default({});

// const iceLegacySchema = z.object({
//   founderVision: looseObject,
//   marketplacePhilosophy: looseObject,
//   whyIndiaTrustsIce: looseObject,
//   brandEvolution: looseObject,
// });

// export default async function iceLegacyRoutes(app: FastifyInstance) {
//   app.get("/ice-legacy-content", async () => {
//     const db = await getDb();
//     const col = db.collection("ice-legacy-content");
//     const stored = await col.findOne({ key: "default" });
//     if (!stored) return defaultIceLegacy;
//     const { _id, key, ...content } = stored;
//     return { ...defaultIceLegacy, ...content };
//   });

//   app.put("/ice-legacy-content", { preHandler: [app.authenticate] }, async (request, reply) => {
//     const parse = iceLegacySchema.safeParse(request.body);
//     if (!parse.success) {
//       request.log.warn({ issues: parse.error.issues }, "iceLegacy.update validation failed");
//       return reply.code(400).send({ message: "Invalid payload" });
//     }

//     const db = await getDb();
//     const col = db.collection("ice-legacy-content");
//     await col.updateOne({ key: "default" }, { $set: { ...parse.data, key: "default" } }, { upsert: true });
//     request.log.info("iceLegacy.update success");
//     return parse.data;
//   });

//   app.post("/ice-legacy-content/restore", { preHandler: [app.authenticate] }, async () => {
//     const db = await getDb();
//     const col = db.collection("ice-legacy-content");
//     await col.updateOne({ key: "default" }, { $set: { ...defaultIceLegacy, key: "default" } }, { upsert: true });
//     return defaultIceLegacy;
//   });
// }



import { FastifyInstance } from "fastify";
import { z } from "zod";
import { getDb } from "../../db/mongo";
import { defaultIceLegacy } from "./default-content"

const looseObject = z.record(z.any()).default({});

// ── Schema — one key per section ─────────────────────────────────────────────
const iceSectionsSchema = z.object({
  heroBanner:             looseObject,
  splitInfoSection:       looseObject,
  featureCards:           looseObject,
  gridCards:              looseObject,
  statsStrip:             looseObject,
  timeline:               looseObject,
  testimonialCards:       looseObject,
  logoPartnerStrip:       looseObject,
  founderTeam:            looseObject,
  videoShowcase:          looseObject,
  faqAccordion:           looseObject,
  ctaBanner:              looseObject,
  galleryMasonry:         looseObject,
  awardsAchievements:     looseObject,
  processSteps:           looseObject,
  comparisonSection:      looseObject,
  stickyScrollStory:      looseObject,
  sectorCategoryTabs:     looseObject,
  hoverAnimationCards:    looseObject,
  communitySection:       looseObject,
  imageBulletSection:     looseObject,
  newsBlogPreview:        looseObject,
  megaFeatureBanner:      looseObject,
  interactiveMap:         looseObject,
  vvipCelebrityShowcase:  looseObject,
});

const COLLECTION = "ice-sections";
const DOC_KEY    = "default";

export default async function IceSectionsRoutes(app: FastifyInstance) {

  // ── GET all 25 sections ────────────────────────────────────────────────────
  // Frontend: fetch("/api/ice-sections")
  app.get("/api/ice-sections", async () => {
    const db     = await getDb();
    const col    = db.collection(COLLECTION);
    const stored = await col.findOne({ key: DOC_KEY });

    if (!stored) return  defaultIceLegacy 
;

    const { _id, key, ...sections } = stored;
    // merge so any missing keys always fall back to default
    return { ... defaultIceLegacy 
, ...sections };
  });


  // ── GET single section by key ──────────────────────────────────────────────
  // Frontend: fetch("/api/ice-sections/heroBanner")
  app.get("/api/ice-sections/:sectionKey", async (request, reply) => {
    const { sectionKey } = request.params as { sectionKey: string };

    if (!(sectionKey in  defaultIceLegacy 
)) {
      return reply.code(404).send({ message: `Section "${sectionKey}" not found` });
    }

    const db     = await getDb();
    const col    = db.collection(COLLECTION);
    const stored = await col.findOne({ key: DOC_KEY });

    const defaultSection =  defaultIceLegacy 
[sectionKey as keyof typeof  defaultIceLegacy 
];

    if (!stored || !stored[sectionKey]) return defaultSection;

    // merge section-level so missing fields fall back to default
    return { ...defaultSection, ...stored[sectionKey] };
  });


  // ── PUT update all sections (full replace) ─────────────────────────────────
  // Frontend: fetch("/api/ice-sections", { method: "PUT", body: JSON.stringify(allSections) })
  app.put(
    "/api/ice-sections",
    { preHandler: [app.authenticate] },
    async (request, reply) => {
      const parse = iceSectionsSchema.safeParse(request.body);
      if (!parse.success) {
        request.log.warn({ issues: parse.error.issues }, "iceSections.update validation failed");
        return reply.code(400).send({ message: "Invalid payload", issues: parse.error.issues });
      }

      const db  = await getDb();
      const col = db.collection(COLLECTION);
      await col.updateOne(
        { key: DOC_KEY },
        { $set: { ...parse.data, key: DOC_KEY } },
        { upsert: true }
      );

      request.log.info("iceSections.updateAll success");
      return { success: true, data: parse.data };
    }
  );


  // ── PATCH update a single section by key ──────────────────────────────────
  // Frontend: fetch("/api/ice-sections/heroBanner", { method: "PATCH", body: JSON.stringify(newData) })
  app.patch(
    "/api/ice-sections/:sectionKey",
    { preHandler: [app.authenticate] },
    async (request, reply) => {
      const { sectionKey } = request.params as { sectionKey: string };

      if (!(sectionKey in  defaultIceLegacy 
)) {
        return reply.code(404).send({ message: `Section "${sectionKey}" not found` });
      }

      const body = request.body as Record<string, any>;
      if (!body || typeof body !== "object") {
        return reply.code(400).send({ message: "Invalid payload" });
      }

      const db  = await getDb();
      const col = db.collection(COLLECTION);

      // $set only the specific section key — leaves all other sections untouched
      await col.updateOne(
        { key: DOC_KEY },
        { $set: { [`${sectionKey}`]: body, key: DOC_KEY } },
        { upsert: true }
      );

      request.log.info(`iceSections.updateSection success — key: ${sectionKey}`);
      return { success: true, sectionKey, data: body };
    }
  );


  // ── POST restore all sections to default ──────────────────────────────────
  // Frontend: fetch("/api/ice-sections/restore", { method: "POST" })
  app.post(
    "/api/ice-sections/restore",
    { preHandler: [app.authenticate] },
    async () => {
      const db  = await getDb();
      const col = db.collection(COLLECTION);
      await col.updateOne(
        { key: DOC_KEY },
        { $set: { ... defaultIceLegacy 
, key: DOC_KEY } },
        { upsert: true }
      );

      return { success: true, data:  defaultIceLegacy 
 };
    }
  );


  // ── POST restore a single section to default ──────────────────────────────
  // Frontend: fetch("/api/ice-sections/heroBanner/restore", { method: "POST" })
  app.post(
    "/api/ice-sections/:sectionKey/restore",
    { preHandler: [app.authenticate] },
    async (request, reply) => {
      const { sectionKey } = request.params as { sectionKey: string };

      if (!(sectionKey in  defaultIceLegacy 
)) {
        return reply.code(404).send({ message: `Section "${sectionKey}" not found` });
      }

      const defaultSection =  defaultIceLegacy 
[sectionKey as keyof typeof  defaultIceLegacy 
];

      const db  = await getDb();
      const col = db.collection(COLLECTION);
      await col.updateOne(
        { key: DOC_KEY },
        { $set: { [`${sectionKey}`]: defaultSection, key: DOC_KEY } },
        { upsert: true }
      );

      request.log.info(`iceSections.restoreSection success — key: ${sectionKey}`);
      return { success: true, sectionKey, data: defaultSection };
    }
  );
}


