var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "ubuntu",
  password: "testing1",
  database: "rmp"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT ITEM,PRICE FROM prices1", function (err, result, fields) {
    if (err) throw err;
    console.log(result[20]['PRICE']);
  });
});