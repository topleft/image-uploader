const express = require('express');
const router = express.Router();
const image = require('../helpers/image');
const knex = require('../../db/connection');

router.post('/process', image.process);

module.exports = router;
