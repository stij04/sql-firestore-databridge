const { db } = require("../config/firebaseConfig");

async function createSeason(seasonInfo) {
  try {
    await db.collection("sezona").add(seasonInfo);

    console.log("Successfully created season in Firestore.");
  } catch (error) {
    console.error("Error creating season or saving to Firestore:", error);
    throw error;
  }
}

module.exports = { createSeason };
