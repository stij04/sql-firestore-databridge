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
        OceNazev: badge.OceNazev,
        OcePopis: badge.OcePopis,
        OceMena: badge.OceMena,
        OceObrazek: badge.OceObrazek,
        OceSkryto: badge.OceSkryto,
        OceVytvoreno: badge.OceVytvoreno,
        OceUpraveno: badge.OceUpraveno,
      });
    }

    console.log("Badges transferred. (IN TOTAL: " + count + ")");
  } catch (err) {
    console.error("Error during badges transfer:", err);
  }
}

module.exports = { transferBadges };
