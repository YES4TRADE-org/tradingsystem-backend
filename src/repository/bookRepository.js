import { pool } from '/tradingsystem-backend/src/database/database.js';

export const getBooks = async () => {
    return await pool.query(
        `SELECT * FROM trading_books`
    );
};