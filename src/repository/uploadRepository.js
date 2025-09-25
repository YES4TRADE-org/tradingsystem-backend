import { pool } from '../database/database.js';

export async function postProductTrade(title, requirements, url, methods, student_id, program, type) {
    return await pool.query(
       `INSERT INTO trading_products (title, requirements, url, methods, student_id, program, type) 
        VALUES ($1, $2, $3, CAST($4 AS INT), $5::int, CAST($6 AS INT), CAST($7 AS INT))`,
        [title, requirements, url, methods, student_id, program, type] 
    );
}

export async function postProductSell(title, url, price, methods, student_id, program, type) {
    return await pool.query(
       `INSERT INTO trading_products (title, url, price, methods, student_id, program, type) 
        VALUES ($1, $2, $3, CAST($4 AS INT), $5::int, CAST($6 AS INT), CAST($7 AS INT))`,
        [title, url, price, methods, student_id, program, type] 
    );
}
