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
        VykDatum: performance.VykDatum,
        VykUziId: performance.VykUziId,
        VykPozId: performance.VykPozId,
        VykSezId: performance.VykSezId,
        VykKusy: performance.VykKusy,
        VykKilogramy: performance.VykKilogramy,
        VykBody: performance.VykBody,
        VykKoef: performance.VykKoef,
        VykKoefVaha: performance.VykKoefVaha,
        VykPoznamka: performance.VykPoznamka,
        VykOprava: performance.VykOprava,
        VykVytvoril: performance.VykVytvoril,
        VykVytvoreno: performance.VykVytvoreno,
        VykUpravil: performance.VykUpravil,
        VykUpraveno: performance.VykUpraveno,
      });
    }

    console.log("Performances transferred. (IN TOTAL: " + count + ")");
  } catch (err) {
    console.error("Error during performances transfer:", err);
  }
}

module.exports = { transferPerformances };
