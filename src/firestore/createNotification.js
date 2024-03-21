const { db } = require("../config/firebaseConfig");

async function createNotification(notificationInfo) {
  try {
    await db.collection("notifikace").add(notificationInfo);

    console.log("Successfully created notification in Firestore.");
  } catch (error) {
    console.error("Error creating notification or saving to Firestore:", error);
    throw error;
  }
}

module.exports = { createNotification };
