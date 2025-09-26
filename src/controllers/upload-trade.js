import express from 'express';
import multer from 'multer';
import cloudinary from '../utils/cloudinary.js';  
import { postProductTrade } from '../repository/uploadRepository.js';
import { createPostProduct } from '../services/logics.js';

export const uploadTradeRouter = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

uploadTradeRouter.post('/yes4trade/upload-trade', upload.single('image'), async (req, res) => {
    const { image, title, methods, email, studentId, program, type, requirement} = req.body;

    if(!req.file){
        return res.status(404).json({ message: 'Error req file is undefined or empty'});
    }

    const {method_id, program_id, type_id} = await createPostProduct(methods, program, type);

    try {
       const stream = cloudinary.uploader.upload_stream({ folder: 'yes4trade' }, 
       async (error, result) => {
           if (error) {
               console.error('Error uploading to Cloudinary:', error);
               return res.status(500).json({ error: 'Failed to upload image' });
           }
           await postProductTrade(title, requirement, result.secure_url, method_id, studentId, program_id, type_id);
           return res.status(200).json({ message: 'Image uploaded successfully', url: result.secure_url });
       });
    
    stream.end(req.file.buffer);

    } catch (error) {
        console.error('Error cannot upload file', error);
        return res.status(500).json({ error: 'Failed to upload image' });
    }   
});