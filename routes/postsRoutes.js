const express = require('express');
const router  = express.Router();
const data = require('../models/mockData')()
const postsAction = require('../controllers/postsAction')()

module.exports = () => {

  router.get('/posts/new', (req, res) => {
    postsAction.create(req,res)
    // res.render('posts_new')
  })

  router.post('/posts/submit', (req, res) => {
    let newPost = req.body
    // console.log(newPost)
    data.push(newPost)
  })

  router.get('/posts', (req, res) => {
    postsAction.get(req, res, data)
  })



  return router;
};
