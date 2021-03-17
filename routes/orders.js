const path = require('path');
const express = require('express');

const ordersCon = require('../controllers/orders');

const router = express.Router();

router.get('/',ordersCon.get_orders);

module.exports = router;
