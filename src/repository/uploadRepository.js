import { pool } from '../database/database.js';

export async function uploadImage(title, requirements, methods , url) {
    return await pool.query(
       'INSERT INTO trading_books (title, requirements, methods, url) VALUES ($1, $2, $3, $4)',
        [title, requirements, methods, url] 
    );
}