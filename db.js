const pg = require("pg");


const pool = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "digimenu",
  password: "9609013928",
  port: 5432, // default port for PostgreSQL
});


module.exports=pool;