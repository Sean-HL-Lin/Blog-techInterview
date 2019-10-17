const express = require('express');
const router  = express.Router();
const homeAction = require("../controllers/homeAction")()

module.exports = () => {

  router.get("/", (req, res) => {
    homeAction.get(req, res)
    // res.render("Home")
  })

  return router;
};
