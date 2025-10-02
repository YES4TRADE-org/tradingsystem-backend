import jwt from "jsonwebtoken";
import { checkPassword } from "../services/logics.js";

export const createToken = (student_id) => {
    const payLoad = {studentId: student_id};
    const token = jwt.sign(payLoad, `${process.env.SECRET_KEY}`, {expiresIn: '1h'});
    return token;
}

export const getUsername = (token) => {
    return jwt.verify(token, `${process.env.SECRET_KEY}`, (err, decode) => {
        if(err){
            throw new Error('Error invalid token!')
        }
        return decode.username;
    })
}

export const authenticated = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    const token = bearerHeader && bearerHeader.split(' ')[1];

    if(!token) res.status(401).json({message: 'You must have a token!'});

    jwt.verify(token, `${process.env.SECRET_KEY}`, (err, decode) => {
        if(err) return res.status(401).json({message: 'Error the token must be expired!'});
        req.user = decode;
        next();
    });
}

export const registration = async (req, res, next) => {
    const { username, password} = req.body;

    const check = username.split('@')[1];

    if(check !== 'slsu.edu.ph'){
        return res.status(401).json({ message: 'Invalid email, must be an SLSU email!' });
    } 

    const checkPasswords = await checkPassword(username, password);

    if(!checkPasswords){
        return res.status(401).json({ message: 'Invalid account!' });
    }

    console.log('hello this is debugging');
    next();
}
