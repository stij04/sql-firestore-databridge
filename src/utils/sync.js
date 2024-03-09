const fs = require("fs");
const { lastSyncFilename } = require("../config");

function getLastSyncDate() {
  if (fs.existsSync(lastSyncFilename)) {
    return fs.readFileSync(lastSyncFilename, "utf8");
  }
  return "1900-01-01";
}

function saveLastSyncDate(date) {
  fs.writeFileSync(lastSyncFilename, date);
}

module.exports = { getLastSyncDate, saveLastSyncDate };
