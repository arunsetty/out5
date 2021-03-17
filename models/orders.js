
const pool= require('../utils/database');
module.exports = class Orders{

    constructor(item_id){
        this.item_id = item_id;
    }

    min_cred_req(){
        return pool.query('SELECT sum(cart.quantity*price) as req_cred FROM cart, products where cart.item_id = products.id;');
    }

    new_cred(req_cred){
        return pool.query('UPDATE users SET credit = credit-$1 where user_id = 1;', [req_cred]);
    }

    add_prod_to_order(){
        return pool.query(`INSERT INTO orders(user_id, item_id, quantity) SELECT * FROM cart on conflict (user_id, item_id) do UPDATE SET quantity = orders.quantity + excluded.quantity;`);
    }

    rem_prod_from_cart(){
        return pool.query('DELETE from cart;');
    }

    static get_all_orders(){
        return pool.query('SELECT title, image, price, orders.quantity from orders, products where orders.item_id = products.id;');
    }

};