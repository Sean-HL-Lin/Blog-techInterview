const express = require('express');
const router  = express.Router();
module.exports = () => {


  router.get('/posts/new', (req, res) => {
    res.render('posts_new')
  })

  router.post('/posts/submit', (req, res) => {
    
  })

  router.get('/posts', (req, res) => {
    res.send('displaying blogs')
    // res.render('posts_new')
  })



  return router;
};
