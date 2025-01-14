const express = require('express');
const router = express.Router();
const { handleURLShortening} = require('../controllers/url');

router.post('/', handleURLShortening);

module.exports = router;