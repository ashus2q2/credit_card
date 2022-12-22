require("dotenv").config();
const mysql = require("mysql2");

const pool = mysql.createPool({
  // port: process.env.PORT,
  // host: process.env.DB_HOST,
  // user: process.env.DB_USER,
  // password: process.env.DB_PASSWORD,
  // database: process.env.MYSQL_DATABASE,
  // connectionLimit: 10

  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
}); 


let sql = " SELECT * FROM credit_card_query";

pool.execute(sql, function(err, result){
  if(err) throw err;

  console.log(result);
})

module.exports = pool.promise();
