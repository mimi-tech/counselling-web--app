require('dotenv').config();
const express = require ("express");
const bodyParser = require("body-parser");
const routes = require('./routes');



const app = express();
app.set('view engine','ejs');
app.set('views',(__dirname, 'views'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use('/', routes);


app.listen(3000, function(){
  console.log("server running at port 3000");
});
