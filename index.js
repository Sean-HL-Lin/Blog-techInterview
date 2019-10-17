const express = require("express");
const app = express();
const PORT = 8080;
const bodyParser = require("body-parser");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));



const Home = require("./routes/Home")
app.use(Home())


app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}!`);
});
