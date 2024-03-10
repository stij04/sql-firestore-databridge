const sql = require("mssql");
const sqlConfig = require("../config/sqlConfig");

async function getBadges() {
  try {
    await sql.connect(sqlConfig);
    const result = await sql.query`SELECT * FROM oceneni`;
    await sql.close();

    return result.recordset;
  } catch (err) {
    console.error("Error fetching badges:", err);
    throw err;
  }
}

module.exports = { getBadges };
