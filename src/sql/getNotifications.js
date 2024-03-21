const sql = require("mssql");
const sqlConfig = require("../config/sqlConfig");

async function getNotifications() {
  try {
    await sql.connect(sqlConfig);
    const result = await sql.query`SELECT * FROM notifikace`;
    await sql.close();

    return result.recordset;
  } catch (err) {
    console.error("Error fetching notifications:", err);
    throw err;
  }
}

module.exports = { getNotifications };
