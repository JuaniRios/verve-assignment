const express = require('express');
const { getAllAnagrams } = require('../functions/getAllAnagrams');

const router = express.Router();

router.post('/',
  (req, res) => {
    // get 2 strings from body
    const { str1 } = req.body;

    let outcome;
    try {
      outcome = getAllAnagrams(str1);
      res.json({ outcome });
    } catch (e) {
      res.statusMessage = 'words can only contain english alphabet characters';
      res.status(400).end();
    }
  });

module.exports = router;
