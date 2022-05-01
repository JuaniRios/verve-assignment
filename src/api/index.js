const express = require('express');
const A = require('./A');
const B = require('./B');
const C = require('./C');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Welcome!'
  });
});

router.use('/A', A);
router.use('/B', B);
router.use('/C', C);
module.exports = router;
