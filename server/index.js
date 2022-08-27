const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: process.env.MYSQLPASSWORD,
  database: "hs_ecommerce",
});

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/", (req, res) => {
  const sqlInsert =
    "INSERT INTO users (name, email, username, password) VALUES ('Daniel', '12345@gmail.com', 'danrose', '12345')";
  db.query(sqlInsert, (err, result) => {
    if (err) {
      throw new Error();
    }
    res.send("hello daniel");
  });
});

app.listen(5000, () => {
  console.log("Server is running on 5000!");
});
