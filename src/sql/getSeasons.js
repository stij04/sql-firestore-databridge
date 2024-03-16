const sql = require("mssql");
const sqlConfig = require("../config/sqlConfig");

async function getSeasons() {
  try {
    await sql.connect(sqlConfig);
    const result = await sql.query`SELECT * FROM sezona`;
    await sql.close();

    return result.recordset;
  } catch (err) {
    console.error("Error fetching seasons:", err);
    throw err;
  }
}

module.exports = { getSeasons };
