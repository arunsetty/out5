
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const adminRo = require('./routes/admin');
const pool =  require('./utils/database');
const prodsRo = require('./routes/prods');
const cartRo = require('./routes/cart');
const ordersRo = require('./routes/orders');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended:true}));
app.use(express.static(path.join(__dirname,'public')));


app.use('/admin',adminRo);
app.use('/prods',prodsRo);
app.use('/cart',cartRo);
app.use('/orders',ordersRo);


app.listen(3000);