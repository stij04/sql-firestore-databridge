const sql = require("mssql");
const sqlConfig = require("../config/sqlConfig");

async function getLevels() {
  try {
    await sql.connect(sqlConfig);
    const result = await sql.query`SELECT * FROM uroven`;
    await sql.close();

    return result.recordset;
  } catch (err) {
    console.error("Error fetching levels:", err);
    throw err;
  }
}

module.exports = { getLevels };
