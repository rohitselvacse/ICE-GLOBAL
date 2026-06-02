import { FastifyInstance } from "fastify";
import { z } from "zod";
import { getDb } from "../../../db/mongo";
import { defaultIceLegacy } from "../../ice-legacy/default-content"; 

const looseObject = z.record(z.any()).default({});

const iceLegacySchema = z.object({
  exihibitionVision: looseObject,
  marketplacePhilosophy: looseObject,
  whyIndiaTrustsIce: looseObject,
  brandEvolution: looseObject,
});

export default async function ExihibitionRoutes(app: FastifyInstance) {
  app.get("/ice-legacy-exihibition", async () => {
    const db = await getDb();
    const col = db.collection("ice-legacy-exihibition");
    const stored = await col.findOne({ key: "default" });
    if (!stored) return defaultIceLegacy;
    const { _id, key, ...exihibition } = stored;
    return { ...defaultIceLegacy, ...exihibition };
  });

  app.put("/ice-legacy-exihibition", { preHandler: [app.authenticate] }, async (request, reply) => {
    const parse = iceLegacySchema.safeParse(request.body);
    if (!parse.success) {
      request.log.warn({ issues: parse.error.issues }, "iceLegacy.update validation failed");
      return reply.code(400).send({ message: "Invalid payload" });
    }

    const db = await getDb();
    const col = db.collection("ice-legacy-exihibition");
    await col.updateOne({ key: "default" }, { $set: { ...parse.data, key: "default" } }, { upsert: true });
    request.log.info("iceLegacy.update success");
    return parse.data;
  });

  app.post("/ice-legacy-exihibition/restore", { preHandler: [app.authenticate] }, async () => {
    const db = await getDb();
    const col = db.collection("ice-legacy-exihibition");
    await col.updateOne({ key: "default" }, { $set: { ...defaultIceLegacy, key: "default" } }, { upsert: true });
    return defaultIceLegacy;
  });
}
