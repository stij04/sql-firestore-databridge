const { getRewards } = require("../sql/getRewards");
const { createReward } = require("../firestore/createReward");

const TEST_MODE = true;

async function transferRewards() {
  try {
    const rewards = await getRewards();

    let count = 0;
    for (const reward of rewards) {
      if (TEST_MODE && count === 1) break;
      count++;

      await createReward({
        OdmId: reward.OdmId,
        OdmNazev: reward.OdmNazev,
        OdmPopis: reward.OdmPopis,
        OdmCena: reward.OdmCena,
        OdmObrazek: reward.OdmObrazek,
        OdmSkryto: reward.OdmSkryto,
        OdmVytvoreno: reward.OdmVytvoreno,
        OdmUpraveno: reward.OdmUpraveno,
      });
    }

    console.log("Rewards transferred. (IN TOTAL: " + count + ")");
  } catch (err) {
    console.error("Error during rewards transfer:", err);
  }
}

module.exports = { transferRewards };
