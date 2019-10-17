const express = require("express");
const app = express();
const PORT = 8080;
const bodyParser = require("body-parser");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));



const homeRoutes = require("./routes/homeRoutes")
const postsRoutes = require('./routes/postsRoutes')
app.use(homeRoutes())
app.use(postsRoutes())

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}!`);
});
