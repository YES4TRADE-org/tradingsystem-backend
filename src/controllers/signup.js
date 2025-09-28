import express from 'express';
import { checkIfSlsu, checkStudentId } from '../utils/help.js';
import { checkEmailAvail } from '../services/logics.js';


const signupRouter = express.Router();

signupRouter.post('/yes4trade/auth/signup', (req, res) => {
    const { email, studentId, firstname, lastname, password, program} = req.body;

    if(checkIfSlsu(email) && checkStudentId(studentId).boolean){
        if(checkEmailAvail){
            
        }   
        return res.status(409).json({ message: 'You already have an account!'});
    } 

});

export default signupRouter;