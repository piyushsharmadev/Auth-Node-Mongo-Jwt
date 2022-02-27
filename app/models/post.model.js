const mongoose = require("mongoose");

const Post = mongoose.model(
  "Post",
  new mongoose.Schema({
    title: String,
    body: String,
    author: String,
    datetime: { type : Date, default: Date.now },
    userId: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    
  })
);

module.exports = Post;
