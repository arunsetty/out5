const path = require('path');
const express = require('express');

const prodsCon = require('../controllers/prods');

const router = express.Router();

router.get('/',prodsCon.get_prods);
router.post('/',prodsCon.post_prods);

module.exports = router;
