const path = require('path');
const express = require('express');

const cartCon = require('../controllers/cart');

const router = express.Router();

router.get('/',cartCon.get_cart);
router.post('/',cartCon.buy_cart);

module.exports = router;
