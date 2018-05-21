const express = require('express');
const router = express.Router();

router.get('/health', (req, res, next) => {
  res.status(200).end();
});

module.exports = router;
