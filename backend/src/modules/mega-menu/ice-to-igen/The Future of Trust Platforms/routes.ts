import { FastifyInstance } from "fastify";
import { z } from "zod";
import { getDb } from "../../../../db/mongo";
import { defaultIceLegacy } from "../../../ice-legacy/default-content";

const looseObject = z.record(z.any()).default({});

const iceSectionsSchema = z.object({
  heroBanner: looseObject,
  splitInfoSection: looseObject,
  featureCards: looseObject,
  gridCards: looseObject,
  statsStrip: looseObject,
  timeline: looseObject,
  testimonialCards: looseObject,
  logoPartnerStrip: looseObject,
  founderTeam: looseObject,
  videoShowcase: looseObject,
  faqAccordion: looseObject,
  ctaBanner: looseObject,
  galleryMasonry: looseObject,
  awardsAchievements: looseObject,
  processSteps: looseObject,
  comparisonSection: looseObject,
  stickyScrollStory: looseObject,
  sectorCategoryTabs: looseObject,
  hoverAnimationCards: looseObject,
  communitySection: looseObject,
  imageBulletSection: looseObject,
  newsBlogPreview: looseObject,
  megaFeatureBanner: looseObject,
  interactiveMap: looseObject,
  vvipCelebrityShowcase: looseObject,
});

const COLLECTION = "mega-menu-ice-to-igen-the-future-of-trust-platforms";
const DOC_KEY = "default";
const ROUTE = "/api/ice-to-igen/the-future-of-trust-platforms";

export default async function IceToIgenTheFutureOfTrustPlatformsRoutes(app: FastifyInstance) {
  app.get(ROUTE, async () => {
    const db = await getDb();
    const col = db.collection(COLLECTION);
    const stored = await col.findOne({ key: DOC_KEY });

    if (!stored) return defaultIceLegacy;

    const { _id, key, ...sections } = stored;
    return { ...defaultIceLegacy, ...sections };
  });

  app.get(ROUTE + "/:sectionKey", async (request, reply) => {
    const { sectionKey } = request.params as { sectionKey: string };

    if (!(sectionKey in defaultIceLegacy)) {
      return reply.code(404).send({ message: 'Section "' + sectionKey + '" not found' });
    }

    const db = await getDb();
    const col = db.collection(COLLECTION);
    const stored = await col.findOne({ key: DOC_KEY });
    const defaultSection = defaultIceLegacy[sectionKey as keyof typeof defaultIceLegacy];

    if (!stored || !stored[sectionKey]) return defaultSection;

    return { ...defaultSection, ...stored[sectionKey] };
  });

  app.put(ROUTE, { preHandler: [app.authenticate] }, async (request, reply) => {
    const parse = iceSectionsSchema.safeParse(request.body);
    if (!parse.success) {
      request.log.warn({ issues: parse.error.issues }, COLLECTION + ".update validation failed");
      return reply.code(400).send({ message: "Invalid payload", issues: parse.error.issues });
    }

    const db = await getDb();
    const col = db.collection(COLLECTION);
    await col.updateOne(
      { key: DOC_KEY },
      { $set: { ...parse.data, key: DOC_KEY } },
      { upsert: true }
    );

    request.log.info(COLLECTION + ".updateAll success");
    return { success: true, data: parse.data };
  });

  app.patch(ROUTE + "/:sectionKey", { preHandler: [app.authenticate] }, async (request, reply) => {
    const { sectionKey } = request.params as { sectionKey: string };

    if (!(sectionKey in defaultIceLegacy)) {
      return reply.code(404).send({ message: 'Section "' + sectionKey + '" not found' });
    }

    const body = request.body as Record<string, any>;
    if (!body || typeof body !== "object") {
      return reply.code(400).send({ message: "Invalid payload" });
    }

    const db = await getDb();
    const col = db.collection(COLLECTION);
    await col.updateOne(
      { key: DOC_KEY },
      { $set: { [sectionKey]: body, key: DOC_KEY } },
      { upsert: true }
    );

    request.log.info(COLLECTION + ".updateSection success - key: " + sectionKey);
    return { success: true, sectionKey, data: body };
  });

  app.post(ROUTE + "/restore", { preHandler: [app.authenticate] }, async () => {
    const db = await getDb();
    const col = db.collection(COLLECTION);
    await col.updateOne(
      { key: DOC_KEY },
      { $set: { ...defaultIceLegacy, key: DOC_KEY } },
      { upsert: true }
    );

    return { success: true, data: defaultIceLegacy };
  });

  app.post(ROUTE + "/:sectionKey/restore", { preHandler: [app.authenticate] }, async (request, reply) => {
    const { sectionKey } = request.params as { sectionKey: string };

    if (!(sectionKey in defaultIceLegacy)) {
      return reply.code(404).send({ message: 'Section "' + sectionKey + '" not found' });
    }

    const defaultSection = defaultIceLegacy[sectionKey as keyof typeof defaultIceLegacy];
    const db = await getDb();
    const col = db.collection(COLLECTION);
    await col.updateOne(
      { key: DOC_KEY },
      { $set: { [sectionKey]: defaultSection, key: DOC_KEY } },
      { upsert: true }
    );

    request.log.info(COLLECTION + ".restoreSection success - key: " + sectionKey);
    return { success: true, sectionKey, data: defaultSection };
  });
}