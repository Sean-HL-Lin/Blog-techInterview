module.exports = () => {
  let postsAction = {
    create: function(req, res) {
      res.render('posts_new')
    }

  };

  return postsAction;
};