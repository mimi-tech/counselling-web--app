require('dotenv').config();
const express = require ("express");
const http = require("http");
const bodyParser = require("body-parser");
var cors = require('cors')
const routes = require('./routes');

const app = express();
const server = http.createServer(app);
app.use(cors());

app.set('view engine','ejs');
app.set('views',(__dirname, './views'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("./public"));
app.use('/', routes);


const PORT = process.env.PORT || 3002;
server.listen(PORT, function(){
  console.log("server running at port 3001");
});

module.exports = app;