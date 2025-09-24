import express from 'express';
import multer from 'multer';
import { uploadImage } from '../repository/uploadRepository.js';

export const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/yes4trade/upload', upload.single('image'), async (req, res) => {
    const { title, requirements, methods, email, studentId, program, type, price } = req.body;

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
});