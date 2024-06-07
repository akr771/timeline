const Post= require('../models/blog');

const moment = require('moment');  

exports.home = (req, res) => {
    Post.find().sort({ createdAt: -1 }).then((posts) => {
        const formattedPosts = posts.map(post => ({
            ...post.toObject(),
            createdAt: moment(post.createdAt).format('DD MMMM YYYY'),
            updatedAt: moment(post.updatedAt).format('DD MMMM YYYY')
        }));
        res.render("home", { posts: formattedPosts });
    })
    .catch((err) => {
        console.log(err);
    });
};



  exports.submit= (req, res) => {
        const title = req.body.title;
        const content = req.body.content;
      
        if (title.length > 25 || content.length > 25) {
          return res.send('Title and content must be at least 25 characters long.');
        }
      
        const newPost = new Post({
          title: title,
          content: content
        });
      
        newPost.save()
          .then(() => {
            res.redirect('/');
          })
          .catch(err => {
            res.status(500).send(err);
          });
        }
     
