import express from 'express';
import { getBooks } from '/tradingsystem-backend/src/repository/bookRepository.js';
import multer from 'multer';

export const itemsRouter = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

itemsRouter .get('/yes4trade/getbooks', async (req, res) => {
    const data = await getBooks();
    const books  = data.rows;
    console.log(books);
    return res.status(200).json(books);
});


