const { db } = require("../config/firebaseConfig");

async function createPerformance(performanceInfo) {
  try {
    await db.collection("vykon").add(performanceInfo);

    console.log("Successfully created performance in Firestore.");
  } catch (error) {
    console.error("Error creating performance or saving to Firestore:", error);
    throw error;
  }
}

module.exports = { createPerformance };
