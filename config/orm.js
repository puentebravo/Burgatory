const connection = require("./connection.js");

const orm = {
  selectAll(cb) {
    const query = "SELECT * FROM burgers;";
    connection.query(query, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
  insertOne(forminput, cb) {
    const query = "INSERT INTO burgers (burgerName) VALUES (?);";
    connection.query(query, [forminput], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
  updateOne(dataId, dataState, cb) {
    const query = "UPDATE burgers SET devoured = ? WHERE id = ?";
    connection.query(query, [dataState, dataId], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
  deleteOne(dataId, cb) {
    const query = "DELETE FROM burgers WHERE id = ?";
    connection.query(query, [dataId], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
};


module.exports = orm