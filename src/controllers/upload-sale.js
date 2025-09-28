import express from 'express';
import multer from 'multer';
import cloudinary from '../utils/cloudinary.js';  
import { postProductSell } from '../repository/uploadRepository.js';
import { createPostProduct } from '../services/logics.js';
import { authenticated } from '../middlewares/authentication.js';

export const uploadSellRouter = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

uploadSellRouter.post('/yes4trade/upload-sell',authenticated, upload.single('image'), async (req, res) => {
    const { title, methods, email, studentId, program, type, price} = req.body;

    if(!req.file){
        return res.status(404).json({ message: 'Req file is undefined or empty'});
    }

    const {method_id, program_id, type_id} = await createPostProduct(methods, program, type);

    try {
       const stream = cloudinary.uploader.upload_stream({ folder: 'yes4trade' }, 
       async (error, result) => {
           if (error) {
               console.error('Error uploading to Cloudinary:', error);
               return res.status(500).json({ error: 'Failed to upload image' });
           }
           await postProductSell(title, result.secure_url, price, method_id, studentId, program_id, type_id);
           return res.status(200).json({ message: 'Image uploaded successfully', url: result.secure_url });
       });

    stream.end(req.file.buffer);

    } catch (error) {
        console.error('Error cannot upload file', error);
        return res.status(500).json({ error: 'Failed to upload image' });
    }   
});

export default uploadSellRouter;