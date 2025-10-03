import { pool } from '../database/database.js';

export async function postProductTrade(title, requirements, url, methods, student_id, program, type, email) {
    return await pool.query(
       `INSERT INTO trading_products (title, requirements, url, methods, student_id, program, type, email) 
        VALUES ($1, $2, $3, $4::int, $5, $6::int, $7::int, $8)`,
        [title, requirements, url, methods, student_id, program, type, email] 
    );
}

export async function postProductSell(title, url, price, methods, student_id, program, type) {
    return await pool.query(
       `INSERT INTO trading_products (title, url, price, methods, student_id, program, type, email) 
        VALUES ($1, $2, $3, $4::int, $5, $6::int, $7::int, $8)`,
        [title, url, price, methods, student_id, program, type, email] 
    );
}
