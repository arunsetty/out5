const Prod = require('../models/prod');
const Cart = require('../models/cart');


exports.get_prods = (req,res,next) => {
    Prod.get_all().then(products => {
        res.render('prods', {
            pageTitle: 'All Products',
            path: '/prods',
            editing: false,
            data: products
        });
    }).catch(err => console.log(err));
};

exports.post_prods = (req,res,next) => {
    const item_id = req.body.product_id;
    const item = new Cart(item_id);
    item.remove_prod_from_list().then(() => {
        item.add_prod_to_cart().then(() => {
            res.redirect('/cart');
        }).catch(err => console.log(err));
    }).catch(err => res.redirect('/prods'));
};