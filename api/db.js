import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "",
  user: "",
  password: "",
  database: "",
});
