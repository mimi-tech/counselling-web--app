require('dotenv').config();
const express = require ("express");
const bodyParser = require("body-parser");
var cors = require('cors')
const routes = require('./routes');

const app = express();
app.use(cors());

app.set('view engine','ejs');
app.set('views',(__dirname, './views'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("./public"));
app.use('/', routes);


const PORT = process.env.PORT || 3002;
app.listen(PORT, function(){
  console.log("server running at port 8001");
});

