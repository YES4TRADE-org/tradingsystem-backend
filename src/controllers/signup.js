import express from 'express';
import { checkIfSlsu } from '../utils/help';
import { checkEmailAvail } from '../services/logics';


const signupRouter = express.Router();

signupRouter.post('/yes4trade/auth/signup', (req, res) => {
    const { email, studentId, firstname, lastname, password, program} = req.body;

    if(checkIfSlsu(email)){
        if(checkEmailAvail){
            
        }   
        return res.status(409).json({ message: 'You already have an account!'});
    } 

});

export default signupRouter;