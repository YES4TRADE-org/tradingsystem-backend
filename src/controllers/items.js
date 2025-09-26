import express from 'express';
import { getAllPost } from '/tradingsystem-backend/src/repository/itemsRepository.js';
import multer from 'multer';
import { authenticated } from '../middlewares/authentication.js';

export const itemsRouter = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

itemsRouter .get('/yes4trade/getbooks', authenticated, async (req, res) => {
    const data = await getAllPost();
    const books  = data.rows;
    console.log(books);
    return res.status(200).json(books);
});


