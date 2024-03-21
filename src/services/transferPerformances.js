const { getPerformances } = require("../sql/getPerformances");
const { createPerformance } = require("../firestore/createPerformance");

const TEST_MODE = true;

async function transferPerformances() {
  try {
    const performances = await getPerformances();

    let count = 0;
    for (const performance of performances) {
      if (TEST_MODE && count === 1) break;
      count++;

      await createPerformance({
        VykId: performance.VykId,
        VykUziId: performance.VykUziId,
        VykSezId: performance.VykSezId,
        VykDatum: performance.VykDatum,
        VykKusy: performance.VykKusy,
        VykKilogramy: performance.VykKilogramy,
        VykBody: performance.VykBody,
        VykKoef: performance.VykKoef,
        VykKoefVaha: performance.VykKoefVaha,
        VykVytvoreno: performance.VykVytvoreno,
        VykUpraveno: performance.VykUpraveno,
      });
    }

    console.log("Performances transferred. (IN TOTAL: " + count + ")");
  } catch (err) {
    console.error("Error during performances transfer:", err);
  }
}

module.exports = { transferPerformances };
