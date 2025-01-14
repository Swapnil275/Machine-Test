const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "veerdb",
});

app.get("/", (req, res) => {
  return res.json("backend");
});




app.listen(8081, () => {
  console.log("listening");
});
