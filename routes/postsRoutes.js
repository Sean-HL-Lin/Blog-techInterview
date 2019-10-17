const express = require('express');
const router  = express.Router();
const data = require('../models/mockData')()
module.exports = () => {


  router.get('/posts/new', (req, res) => {
    res.render('posts_new')
  })

  router.post('/posts/submit', (req, res) => {
    let newPost = req.body
    console.log(newPost)
  })

  router.get('/posts', (req, res) => {
    res.render('posts_index',data)
  })



  return router;
};
