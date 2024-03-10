const { transferNewUsers } = require("./services/transferNewUsers");
const { transferPerformances } = require("./services/transferPerformances");
const { transferBadges } = require("./services/transferBadges");
const { transferEarnedBadges } = require("./services/transferEarnedBadges");

const TRANSFER_USERS = false;
const TRANSFER_PERFORMANCES = false;
const TRANSFER_BADGES = false;
const TRANSFER_EARNED_BADGES = false;

async function transferData() {
  try {
    if (TRANSFER_USERS) {
      await transferNewUsers();
    }
    if (TRANSFER_PERFORMANCES) {
      await transferPerformances();
    }
    if (TRANSFER_BADGES) {
      await transferBadges();
    }
    if (TRANSFER_EARNED_BADGES) {
      await transferEarnedBadges();
    }

    console.log("Data transfer complete.");
  } catch (err) {
    console.error("Error during data transfer:", err);
  }
}

transferData();
