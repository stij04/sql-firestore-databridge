const { db } = require("../config/firebaseConfig");

async function createEarnedBadge(earnedBadgeInfo) {
  try {
    await db.collection("zisk_oceneni").add(earnedBadgeInfo);

    console.log("Successfully created earned badge in Firestore.");
  } catch (error) {
    console.error("Error creating earned badge or saving to Firestore:", error);
    throw error;
  }
}

module.exports = { createEarnedBadge };
