module.exports = () => {
  let home = {
    get: function(req, res) {
      res.render("Home")
    }

  };

  return home;
};