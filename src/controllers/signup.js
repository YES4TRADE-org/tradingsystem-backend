import express from 'express';
import { checkIfSlsu, checkStudentId, hashPass } from '../utils/help.js';
import { checkEmailAvail } from '../services/logics.js';
import { addAccount } from '../repository/userRepository.js';

const signupRouter = express.Router();

signupRouter.post('/yes4trade/auth/signup', async (req, res) => {
    console.log(req.body);
    const { username, studentId, firstname, lastname, password, program} = req.body;

    const check = await checkEmailAvail(username);

    if(checkIfSlsu(username) && checkStudentId(studentId).boolean){
        if(check){
            const hashPassword = await hashPass(password);
            const data = await addAccount(checkStudentId(studentId).id, firstname, lastname, checkStudentId(studentId).grade,
                program, username, hashPassword);
            if(data.rowCount === 1){
                return res.status(200).json({message: 'You have sign up successfully!'});
            }
        }   
    } 
    return res.status(409).json({ message: 'You already have an account or invalid student id!'});
});

export default signupRouter;