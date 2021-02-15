const connection = require("connection.js");

const orm = {
  selectAll(cb) {
    const query = "SELECT * FROM burgers;";
    connection.query(query, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
  
};
