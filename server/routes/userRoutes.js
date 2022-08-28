const express = require("express");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const mysql = require("mysql2");

dotenv.config();

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: process.env.MYSQLPASSWORD,
  database: "hs_ecommerce",
});

const userRouter = express.Router();

//////////////////////////////////////////////////////
//Post    signin
//Public
userRouter.post("/signin", (req, res) => {});

//////////////////////////////////////////////////////
//Post     signup
//Public
userRouter.post("/signup", (req, res) => {
  const { name, username, email, password } = req.body;
  const encryptedPassword = bcrypt.hashSync(password, 10);
  const sqlInsert = `INSERT INTO users (name, email, username, password) VALUES ("${name}", "${email}", "${username}", "${encryptedPassword}")`;
  db.query(sqlInsert, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send("Account successfully created!");
  });
});

module.exports = userRouter;
