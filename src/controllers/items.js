import express from 'express';
import { getBooks } from '/tradingsystem-backend/src/repository/bookRepository.js';

export const router = express.Router();

router.get('/yes4trade/getbooks', async (req, res) => {
    const data = await getBooks();
    const books  = data.rows;
    console.log(books);
    return res.status(200).json({ books });
});

