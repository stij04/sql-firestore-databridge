const sql = require("mssql");
const sqlConfig = require("../config/sqlConfig");
const { getExistingUsers } = require("../firestore/getExistingUsers");

async function getNewUsers() {
  const existingUsers = await getExistingUsers();
  const existingUserIds = existingUsers.map((user) => user.UziId);

  try {
    await sql.connect(sqlConfig);
    const result =
      await sql.query`SELECT * FROM uzivatel WHERE UziID NOT IN (${existingUserIds})`;
    await sql.close();

    return result.recordset;
  } catch (err) {
    console.error("Error fetching new users:", err);
    throw err;
  }
}

module.exports = { getNewUsers };
