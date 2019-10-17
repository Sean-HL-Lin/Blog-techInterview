const express = require('express');
const router  = express.Router();
module.exports = () => {


  router.get('/posts/new', (req, res) => {
    res.send('hello from post')
    // res.render('posts_new')
  })

  router.post('/posts/submit', (req, res) => {
    
  })

  return router;
};
