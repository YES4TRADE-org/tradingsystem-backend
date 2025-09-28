import express from 'express';
import { checkIfSlsu, checkStudentId, hashPass } from '../utils/help.js';
import { checkEmailAvail } from '../services/logics.js';
import { addAccount } from '../repository/userRepository.js';

const signupRouter = express.Router();

signupRouter.post('/yes4trade/auth/signup', async (req, res) => {
    const { email, studentId, firstname, lastname, password, program} = req.body;

    if(checkIfSlsu(email) && checkStudentId(studentId).boolean){
        if(checkEmailAvail){
            const hashPassword = await hashPass(password);
            const data = await addAccount(studentId, firstname, lastname, checkStudentId(studentId).grade,
                program, email, hashPassword);
            if(data.rowCount === 1){
                return res.status(200).json({message: 'You have sign up successfully!'});
            }
        }   
        return res.status(409).json({ message: 'You already have an account!'});
    } 

});

export default signupRouter;