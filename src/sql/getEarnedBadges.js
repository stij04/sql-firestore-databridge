const sql = require("mssql");
const sqlConfig = require("../config/sqlConfig");

async function getEarnedBadges() {
  try {
    await sql.connect(sqlConfig);
    const result = await sql.query`SELECT * FROM ZiskOceneni`;
    await sql.close();

    return result.recordset;
  } catch (err) {
    console.error("Error fetching earned badges:", err);
    throw err;
  }
}

module.exports = { getEarnedBadges };
