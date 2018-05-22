const express = require("express");
const app = express();
const cors = require("cors");
const errorHandler = require("./handlers/error");
const PORT = 8081;

app.use(cors());

app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, function() {
  console.log(`Server is starting on port ${PORT}`);
});