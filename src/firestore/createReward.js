const { db } = require("../config/firebaseConfig");

async function createReward(rewardInfo) {
  try {
    await db.collection("odmena").add(rewardInfo);

    console.log("Successfully created reward in Firestore.");
  } catch (error) {
    console.error("Error creating reward or saving to Firestore:", error);
    throw error;
  }
}

module.exports = { createReward };
