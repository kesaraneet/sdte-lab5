const express = require("express");
const app = express();

app.get("/student_id", (req, res) => {
  res.send("61070018");
});

module.exports = app;
