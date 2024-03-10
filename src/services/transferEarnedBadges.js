const { getEarnedBadges } = require("../sql/getEarnedBadges");
const { createEarnedBadge } = require("../firestore/createEarnedBadge");

const TEST_MODE = true;

async function transferEarnedBadges() {
  try {
    const earnedBadges = await getEarnedBadges();

    let count = 0;
    for (const earnedBadge of earnedBadges) {
      if (TEST_MODE && count === 1) break;
      count++;

      await createEarnedBadge({
        ZioId: earnedBadge.ZioId,
        ZioOceId: earnedBadge.ZioOceId,
        ZioUziId: earnedBadge.ZioUziId,
        ZioVytvoril: earnedBadge.ZioVytvoril,
        ZioVytvoreno: earnedBadge.ZioVytvoreno,
        ZioUpravil: earnedBadge.ZioUpravil,
        ZioUpraveno: earnedBadge.ZioUpraveno,
      });
    }

    console.log("Earned badges transferred. (IN TOTAL: " + count + ")");
  } catch (err) {
    console.error("Error during earned badges transfer:", err);
  }
}

module.exports = { transferEarnedBadges };
