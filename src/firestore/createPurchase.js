const { db } = require("../config/firebaseConfig");

async function createPurchase(purchaseInfo) {
  try {
    await db.collection("nakup").add(purchaseInfo);

    console.log("Successfully created purchase in Firestore.");
  } catch (error) {
    console.error("Error creating purchase or saving to Firestore:", error);
    throw error;
  }
}

module.exports = { createPurchase };
