import express from 'express';
import { getBooks } from '/tradingsystem-backend/src/repository/bookRepository.js';
import cloudinary from '../utils/cloudinary.js';
import multer from 'multer';
import { uploadImage } from '../services/upload-image.js';

export const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get('/yes4trade/getbooks', async (req, res) => {
    const data = await getBooks();
    const books  = data.rows;
    console.log(books);
    return res.status(200).json(books);
});

router.post('/yes4trade/upload', upload.single('image'), async (req, res) => {
    const { title, requirements, methods } = req.body;
    try {
       const file = await cloudinary.cloudinary.uploader.upload_stream({ folder: 'yes4trade' }, 
       (error, result) => {
           if (error) {
               console.error('Error uploading to Cloudinary:', error);
               return res.status(500).json({ error: 'Failed to upload image' });
           }
           uploadImage(title, requirements, methods, result.secure_url);
            return res.status(200).json({ message: 'Image uploaded successfully', url: result.secure_url });
       });
    } catch (error) {
        console.error('Error cannot upload file', error);
        return res.status(500).json({ error: 'Failed to upload image' });
    }   
})
