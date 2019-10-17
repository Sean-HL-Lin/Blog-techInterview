const data = require('../models/mockData')()

module.exports = () => {
  let postsAction = {

    new: function(req, res) {
      res.render('posts_new')
    },

    get: function(req, res) {
      res.render('posts_index',data)
    },

    create: function(req, res) {       
      let newPost = req.body
      data.push(newPost)
      res.redirect('/posts')
    }

  };



  return postsAction;
};