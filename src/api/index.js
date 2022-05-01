const express = require('express');
const A = require('./A');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Welcome!'
  });
});

router.use('/A', A);

module.exports = router;
