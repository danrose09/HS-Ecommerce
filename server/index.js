const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const dotenv = require("dotenv");
const userRouter = require("./routes/userRoutes");

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
  res.send("hello");
});

app.use("/api/users", userRouter);

app.listen(5000, () => {
  console.log("Server is running on 5000!");
});
