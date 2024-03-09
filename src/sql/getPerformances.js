const sql = require("mssql");
const sqlConfig = require("../config/sqlConfig");

async function getPerformances() {
  try {
    await sql.connect(sqlConfig);
    const result = await sql.query`SELECT * FROM vykon`;
    await sql.close();

    return result.recordset;
  } catch (err) {
    console.error("Error fetching new users:", err);
    throw err;
  }
}

module.exports = { getPerformances };
