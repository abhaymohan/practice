const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop");

const app = express(); // this is a function no class instatiation


app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);



app.listen(5000, () => {
  console.log("server is listening to port 5000.");
});
