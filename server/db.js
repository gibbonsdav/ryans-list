const mysql = require("mysql")

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "david",
  password: "P3HF-?tmV,",
  database: "ryans.list"
})

module.exports = pool
