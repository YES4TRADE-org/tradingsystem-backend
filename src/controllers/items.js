import express from 'express';
import { getBooks } from '/tradingsystem-backend/src/repository/bookRepository.js';
import cloudinary from '../utils/cloudinary.js';

export const router = express.Router();

router.get('/yes4trade/getbooks', async (req, res) => {
    const data = await getBooks();
    const books  = data.rows.map(book => {
        return {
            ...book,
            image: book.image? book.image.toString('base64') : null
        };
    });
    console.log(books);
    return res.status(200).json(books);
});

