const { getBadges } = require("../sql/getBadges");
const { createBadge } = require("../firestore/createBadge");

const TEST_MODE = true;

async function transferBadges() {
  try {
    const badges = await getBadges();

    let count = 0;
    for (const badge of badges) {
      if (TEST_MODE && count === 1) break;
      count++;

      await createBadge({
        OceId: badge.OceId,
        OceTyoId: badge.OceTyoId,
        OceNazev: badge.OceNazev,
        OcePopis: badge.OcePopis,
        OcePodminky: badge.OcePodminky,
        OceMena: badge.OceMena,
        OceObrazek: badge.OceObrazek,
        OceSkryto: badge.OceSkryto,
        OceVytvoril: badge.OceVytvoril,
        OceVytvoreno: badge.OceVytvoreno,
        OceUpravil: badge.OceUpravil,
        OceUpraveno: badge.OceUpraveno,
      });
    }

    console.log("Badges transferred. (IN TOTAL: " + count + ")");
  } catch (err) {
    console.error("Error during badges transfer:", err);
  }
}

module.exports = { transferBadges };
