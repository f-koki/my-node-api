const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    hoge: "hello!"
  });
});

app.get("/api", (req, res) => {
  res.json({
    api: "api"
  });
});

app.listen(8080);
