require("dotenv").config({ path: "../.env" });
const process = require("process");

const sqlConfig = {
  user: process.env.DATABASE_USER,
  password: process.env.USER_PASSWORD,
  database: process.env.DATABASE_NAME,
  server: process.env.SQL_SERVER,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

module.exports = sqlConfig;
