const { getEarnedLevels } = require("../sql/getEarnedLevels");
const { createEarnedLevel } = require("../firestore/createEarnedLevel");

const TEST_MODE = true;

async function transferEarnedLevels() {
  try {
    const earnedLevels = await getEarnedLevels();

    let count = 0;
    for (const earnedLevel of earnedLevels) {
      if (TEST_MODE && count === 1) break;
      count++;

      await createEarnedLevel({
        ZiuId: earnedLevel.ZiuId,
        ZiuUziId: earnedLevel.ZiuUziId,
        ZiuUroId: earnedLevel.ZiuUroId,
        ZiuVytvoreno: earnedLevel.ZiuVytvoreno,
        ZiuUpraveno: earnedLevel.ZiuUpraveno,
      });
    }

    console.log("Earned levels transferred. (IN TOTAL: " + count + ")");
  } catch (err) {
    console.error("Error during earned levels transfer:", err);
  }
}

module.exports = { transferEarnedLevels };
