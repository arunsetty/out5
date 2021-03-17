
const pool= require('../utils/database');
module.exports = class Cart{

    constructor(item_id){
        this.item_id = item_id;
    }

    remove_prod_from_list(){
        return pool.query('UPDATE products SET quantity = quantity-1 where id = $1;', [this.item_id]);
    }

    add_prod_to_cart(){
        return pool.query('INSERT INTO cart(user_id, item_id, quantity) VALUES ($1, $2, $3);', [1, this.item_id, 1]);
    }

    final_prod_cart(){
        return pool.query('UPDATE cart SET quantity = quantity+1 where cart.item_id = $1;', [this.item_id]);
    }

    static get_all(){
        return pool.query('SELECT title, image, price, cart.quantity as quantity FROM cart,products where cart.item_id = products.id;');
    }

    static get_my_cred(){
        return pool.query('SELECT credit FROM users where user_id = 1;');
    }

};