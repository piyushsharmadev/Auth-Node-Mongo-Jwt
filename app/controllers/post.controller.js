const db = require("../models");
const User = db.user;
const Post = db.post;


exports.createPost = (req,res) => {

    
    console.log(db,req.body,req.userId);
    var post = new Post({
        title : req.body.title,
        body : req.body.body,
        author : req.body.author,
        userId : req.userId

    })

    post.save((err, post) => {
        if (err) {
          res.status(500).send({ message: err });
          return ;
        }
        console.log("Post Saved");
        res.status(200).send({ post });
        return ;
    })
}

exports.getAllPosts = (req,res) => {

    Post.find({}).populate({ path: 'userId', select: 'email' }).exec((err, posts) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }


        return res.status(200).send({posts})
      })
    }
