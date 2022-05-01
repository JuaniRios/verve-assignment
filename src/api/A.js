const express = require('express');
const { areAnagrams } = require('../functions/areAnagrams');

const router = express.Router();

router.post('/',
  (req, res) => {
    // get 2 strings from body
    const { str1, str2 } = req.body;

    // check that they don't contain any spaces (i.e. are just one word)
    if (/\s/.test(str1) || /\s/.test(str2)) {
      res.statusMessage = 'only one word per string permitted';
      res.status(400).end();
      return;
    }

    let outcome;
    try {
      outcome = areAnagrams(str1, str2);
      res.json({ outcome });
    } catch (e) {
      res.statusMessage = 'words can only contain english alphabet characters';
      res.status(400).end();
    }
  });

module.exports = router;
