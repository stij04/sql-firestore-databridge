const { transferNewUsers } = require("./services/transferNewUsers");
const { transferPerformances } = require("./services/transferPerformances");
const { transferBadges } = require("./services/transferBadges");
const { transferEarnedBadges } = require("./services/transferEarnedBadges");
const { transferRewards } = require("./services/transferRewards");
const { transferLevels } = require("./services/transferLevels");
const { transferSeasons } = require("./services/transferSeasons");
const { transferNotifications } = require("./services/transferNotifications");

const TRANSFER_USERS = false;
const TRANSFER_PERFORMANCES = false;
const TRANSFER_BADGES = false;
const TRANSFER_EARNED_BADGES = false;
const TRANSFER_REWARDS = false;
const TRANSFER_LEVELS = false;
const TRANSFER_SEASONS = false;
const TRANSFER_NOTIFICATIONS = false;

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

    if (TRANSFER_REWARDS) {
      await transferRewards();
    }

    if (TRANSFER_LEVELS) {
      await transferLevels();
    }

    if (TRANSFER_SEASONS) {
      await transferSeasons();
    }

    if (TRANSFER_NOTIFICATIONS) {
      await transferNotifications();
    }

    console.log("Data transfer complete.");
  } catch (err) {
    console.error("Error during data transfer:", err);
  }
}

transferData();
