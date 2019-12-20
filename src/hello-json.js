const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    hoge: "hello!"
  });
});

app.listen(8080);
