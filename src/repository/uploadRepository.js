import { pool } from '../database/database.js';

export async function postProduct(title, requirements, url, price, methods, student_id, program, type) {
    return await pool.query(
       `INSERT INTO trading_products (title, requirements, url, price, methods, student_id, program, type) 
        VALUES ($1, $2, $3, $4)`,
        [title, requirements, url, price, methods, student_id, program, type] 
    );
}