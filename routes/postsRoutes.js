const express = require('express');
const router  = express.Router();
const postsAction = require('../controllers/postsAction')()

module.exports = () => {

  router.get('/posts/new', (req, res) => {
    postsAction.new(req,res)
    // res.render('posts_new')
  })

  router.post('/posts/submit', (req, res) => {
    postsAction.create(req,res)
  })

  router.get('/posts', (req, res) => {
    postsAction.get(req, res)
  })



  return router;
};
