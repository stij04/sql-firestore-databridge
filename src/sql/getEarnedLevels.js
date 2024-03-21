const sql = require("mssql");
const sqlConfig = require("../config/sqlConfig");

async function getEarnedLevels() {
  try {
    await sql.connect(sqlConfig);
    const result = await sql.query`SELECT * FROM ZiskUrovne`;
    await sql.close();

    return result.recordset;
  } catch (err) {
    console.error("Error fetching earned levels:", err);
    throw err;
  }
}

module.exports = { getEarnedLevels };
