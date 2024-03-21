const { getPurchases } = require("../sql/getPurchases");
const { createPurchase } = require("../firestore/createPurchase");

const TEST_MODE = true;

async function transferPurchases() {
  try {
    const purchases = await getPurchases();

    let count = 0;
    for (const purchase of purchases) {
      if (TEST_MODE && count === 1) break;
      count++;

      await createPurchase({
        NakId: purchase.NakId,
        NakUziId: purchase.NakUziId,
        NakOdmId: purchase.NakOdmId,
        NakPoznamka: purchase.NakPoznamka,
        NakPotvrdil: purchase.NakPotvrdil,
        NakPotvrzeno: purchase.NakPotvrzeno,
        NakVytvoreno: purchase.NakVytvoreno,
        NakUpraveno: purchase.NakUpraveno,
      });
    }

    console.log("Purchases transferred. (IN TOTAL: " + count + ")");
  } catch (err) {
    console.error("Error during purchases transfer:", err);
  }
}

module.exports = { transferPurchases };
