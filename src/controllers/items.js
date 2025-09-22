import express from 'express';
import bookRepo from '/tradingsystem-backend/src/repository/bookRepository.js';

export const router = express.Router();

router.get('/yes4trade/getbooks', (req, res) => {
    const books = bookRepo.getBooks ? bookRepo.getBooks : [];
    console.log(books);
    return res.status(200).json({ books });
});

