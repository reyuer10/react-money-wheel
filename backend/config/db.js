const mysql = require("mysql2");

const connection = mysql.createPool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE,
  host: process.env.HOST,
  connectionLimit: 100,
  enableKeepAlive: true,
  keepAliveInitialDelay: 3 * 1000,
  maxIdle: 0,
  queueLimit: 0,
});

connection.connect((err, data) => {
  if (err) {
    console.log("Can't connect to the database.");
    return;
  }

  return console.log("connected to the database.");
});

module.exports = connection;
