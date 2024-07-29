
const express = require('express');
const router = express.Router();
const mockBibleChapter = require('./mock.js');

router.get('/', async (_req, res) => {

  res.render('index');
});

router.get('/mistries', (_req, res) => {

  res.render('mistries');
});

router.get('/contact', (_req, res) => {

  res.render('contact');
});

router.get('/bible-page/:book/:chapter', async(req, res) => {
  
  const { book, chapter } = req.params;
  const apiUrl = `https://bible-api.com/${book}${chapter}`;

  try {
    console.log("checking Mock ", mockBibleChapter)
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.render('bible-page', { bibleData: data });
  } catch (error) {
    res.render('bible-page', { bibleData: mockBibleChapter });
  }
});


router.get('/random-verse', async (_req, res) => {
  try {
      const response = await fetch('https://bible-api.com/?random=verse');
      const data = await response.json();
      res.json(data);
  } catch (error) {
      console.error('Error fetching Bible verse:', error);
      res.status(500).json({ error: 'Failed to fetch Bible verse' });
  }
});



module.exports = router;
