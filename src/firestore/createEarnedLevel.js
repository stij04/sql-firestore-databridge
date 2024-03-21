const { db } = require("../config/firebaseConfig");

async function createEarnedLevel(earnedLevelInfo) {
  try {
    await db.collection("zisk_urovne").add(earnedLevelInfo);

    console.log("Successfully created earned level in Firestore.");
  } catch (error) {
    console.error("Error creating earned level or saving to Firestore:", error);
    throw error;
  }
}

module.exports = { createEarnedLevel };
