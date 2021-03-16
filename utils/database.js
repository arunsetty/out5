const { Pool } = require('pg');

const pool = new Pool({
    user: 'vitty',     //your postgres username
    host: 'localhost', 
    database: 'outlab5', //your local database 
    password: 'vitty', //your postgres user password
    port: 5432, //your postgres running port
});

pool.connect();


module.exports = pool;