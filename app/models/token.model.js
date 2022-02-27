const mongoose = require("mongoose");

const Token = mongoose.model(
  "Token",
  new mongoose.Schema({
    jwt: String,
    userId : String
  })
);

module.exports = Token;
