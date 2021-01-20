// Set up MySQL connection.


var mysql = require("mysql2");

if (process.env.JAWSDB_URL) {
  connection = "mysql://s9pkanuohl9onjo8:xotr8gd7gm6nish3@j21q532mu148i8ms.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ks2wepxti56zt15i"
} else {

  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Maryland123!",
    database: "burger_db"
  });
}

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
