const { db } = require("../config/firebaseConfig");

async function createBadge(badgeInfo) {
  try {
    await db.collection("oceneni").add(badgeInfo);

    console.log("Successfully created badge in Firestore.");
  } catch (error) {
    console.error("Error creating badge or saving to Firestore:", error);
    throw error;
  }
}

module.exports = { createBadge };
