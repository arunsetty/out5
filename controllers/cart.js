const Cart = require('../models/cart');
const Orders = require('../models/orders');

exports.get_cart = (req,res,next) => {
    Cart.get_all().then(products => {
        Cart.get_my_cred().then(my_credits => {
            res.render('cart', {
                pageTitle: 'Cart',
                path: '/cart',
                editing: false,
                data: products,
                credits: my_credits
            });
        }).catch(err => console.log(err));
    }).catch(err => console.log(err));
};

exports.buy_cart = (req,res,next) => {
    const item = new Orders(1);
    item.min_cred_req().then(my_credits => {
        item.new_cred(my_credits.rows[0].req_cred).then(() => {
            item.add_prod_to_order().then(() => {
                item.rem_prod_from_cart().then(() => {
                    res.redirect('/orders')
                }).catch(err => console.log(err));
            }).catch(err => console.log(err));
        }).catch(err => res.redirect('/cart'));
    }).catch(err => console.log(err));
};