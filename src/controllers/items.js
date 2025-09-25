import express from 'express';
import { getAllPost } from '/tradingsystem-backend/src/repository/itemsRepository.js';
import multer from 'multer';

export const itemsRouter = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

itemsRouter .get('/yes4trade/getbooks', async (req, res) => {
    const data = await getAllPost();
    const books  = data.rows;
    console.log(books);
    return res.status(200).json(books);
});


