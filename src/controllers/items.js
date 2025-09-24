import express from 'express';
import { getBooks } from '/tradingsystem-backend/src/repository/bookRepository.js';
import multer from 'multer';
import { uploadImage } from '../services/logics.js';

export const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get('/yes4trade/getbooks', async (req, res) => {
    const data = await getBooks();
    const books  = data.rows;
    console.log(books);
    return res.status(200).json(books);
});


