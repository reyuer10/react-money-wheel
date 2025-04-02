const db = require("./db");

const databaseQuery = (sql, params) => {
  return new Promise((resolve, reject) => {
    db.query(sql, params, (err, data) => {
      if (err) {
        return reject(err);
      }

      return resolve(data);
    });
  });
};

module.exports = databaseQuery;
