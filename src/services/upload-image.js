import pool from '../database/db.js';

export async function uploadImage(title, requirements, methods , url) {
    return await pool.query(
       'INSERT INTO books (title, requirements, methods, url) VALUES ($1, $2, $3, $4)',
        [book.title, book.requirements, book.methods, book.url] 
    );
}