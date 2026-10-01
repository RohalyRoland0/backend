const express = require("express")
const app = express();

app.get("/asd", (req, res) => {
    res.send("asd");
  });
  
  app.listen(3000, () => {
    console.log("fut");
  });