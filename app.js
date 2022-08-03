const express = require("express");

const app = express(); // this is a function no class instatiation

// start middleware 
app.get('/',(req, res, go) => {
  console.log("in the middleware 1");
  go(); // this allows the request to continue to next middleware
});


// second middleware
app.use((req, res, come) => {
  console.log("in the middleware 2");
  come();
})

app.use((req,res) => {
  console.log("request has reached to third middleware.")
  // and it expires here
})

// and so on middleware

app.listen(5000);

