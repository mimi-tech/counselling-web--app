
const express = require('express');
const router = express.Router();

const socketio = require ("socket.io");


router.get('/', (req, res) => {

  res.render('index');
});

router.get('/mistries', (req, res) => {

  res.render('mistries');
});

router.get('/contact', (req, res) => {

  res.render('contact');
});





module.exports = router;
