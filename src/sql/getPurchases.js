const sql = require("mssql");
const sqlConfig = require("../config/sqlConfig");

async function getPurchases() {
  try {
    await sql.connect(sqlConfig);
    const result = await sql.query`SELECT * FROM nakup`;
    await sql.close();

    return result.recordset;
  } catch (err) {
    console.error("Error fetching purchases:", err);
    throw err;
  }
}

module.exports = { getPurchases };
