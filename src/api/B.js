const express = require('express');
const { hasAnagram } = require('../functions/hasAnagram');

const router = express.Router();

router.post('/',
  (req, res) => {
    // get 2 strings from body
    const { str1, str2 } = req.body;

    // check that they str1 doesn't contain any spaces (i.e. is just one word)
    if (/\s/.test(str1)) {
      res.statusMessage = 'only one word on str1 permitted';
      res.status(400).end();
      return;
    }

    let outcome;
    try {
      outcome = hasAnagram(str1, str2);
      res.json({ outcome });
    } catch (e) {
      res.statusMessage = 'words can only contain english alphabet characters';
      res.status(400).end();
    }
  });

module.exports = router;
