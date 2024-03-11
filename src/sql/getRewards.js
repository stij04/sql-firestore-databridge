const sql = require("mssql");
const sqlConfig = require("../config/sqlConfig");

async function getRewards() {
  try {
    await sql.connect(sqlConfig);
    const result = await sql.query`SELECT * FROM odmena`;
    await sql.close();

    return result.recordset;
  } catch (err) {
    console.error("Error fetching rewards:", err);
    throw err;
  }
}

module.exports = { getRewards };
