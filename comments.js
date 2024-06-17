// Create web server
const express = require("express");
const app = express();
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Create a route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Create a route with parameters
app.get("/comments", (req, res) => {
  res.send("Comments page");
});

// Create a route with parameters
app.get("/comments/:id", (req, res) => {
  console.log(req.params.id);
  res.send("Comments page with id");
});