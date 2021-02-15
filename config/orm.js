const connection = require("connection.js");

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
  
};
