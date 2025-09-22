import { pool } from '/tradingsystem-backend/src/database/database.js';

export async function getBooks() {
    return await pool.query(
        `SELECT * FROM trading_books`
    );
};