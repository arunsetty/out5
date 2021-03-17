const Orders = require('../models/orders');


exports.get_orders = (req,res,next) => {
    Orders.get_all_orders().then(products => {
        res.render('orders', {
            pageTitle: 'Orders',
            path: '/orders',
            editing: false,
            data: products
            });
    }).catch(err => console.log(err));
};

