const express = require("express");

const app = express(); // this is a function no class instatiation


app.get((req, res, next) => {});

app.listen(5000, () => {
  console.log("server is listening at port 5000");
});
