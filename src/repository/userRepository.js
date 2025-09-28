import { pool } from '/tradingsystem-backend/src/database/database.js';

export const checkEmail = (email) => {
    return pool.query(
        'SELECT * FROM users WHERE users.email = $1', [ email ]
    );
}