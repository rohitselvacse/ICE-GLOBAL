import { getDb } from "../src/db/mongo";
import { defaultIceLegacy } from "../src/modules/ice-legacy/default-content";

const seedIceLegacy = {
  key: "default",
  ...defaultIceLegacy,
};

const run = async () => {
  try {
    const db = await getDb();
    const col = db.collection("ice-legacy-content");
    await col.updateOne({ key: "default" }, { $set: seedIceLegacy }, { upsert: true });
    console.log("ICE Legacy seed applied.");
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    process.exit(0);
  }
};

run();
