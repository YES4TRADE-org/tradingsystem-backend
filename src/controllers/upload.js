import express from 'express';
import multer from 'multer';
import { postProduct } from '../repository/uploadRepository.js';
import { createPostProduct } from '../services/logics.js';

export const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/yes4trade/upload-trade', upload.single('image'), async (req, res) => {
    const { title, requirements, methods, email, studentId, program, type } = req.body;

    const {method_id, program_id, type_id} = createPostProduct(methods, program, type);

    try {
       const file = await cloudinary.cloudinary.uploader.upload_stream({ folder: 'yes4trade' }, 
       (error, result) => {
           if (error) {
               console.error('Error uploading to Cloudinary:', error);
               return res.status(500).json({ error: 'Failed to upload image' });
           }
           postProduct(title, requirements, result.secure_url, method_id, studentId, program_id, type_id);
           return res.status(200).json({ message: 'Image uploaded successfully', url: result.secure_url });
       });
    } catch (error) {
        console.error('Error cannot upload file', error);
        return res.status(500).json({ error: 'Failed to upload image' });
    }   
});