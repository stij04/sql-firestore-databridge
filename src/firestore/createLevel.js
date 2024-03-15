const { db } = require("../config/firebaseConfig");

async function createLevel(levelInfo) {
  try {
    await db.collection("uroven").add(levelInfo);

    console.log("Successfully created level in Firestore.");
  } catch (error) {
    console.error("Error creating level or saving to Firestore:", error);
    throw error;
  }
}

module.exports = { createLevel };
