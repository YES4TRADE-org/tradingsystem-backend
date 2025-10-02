import express from "express";
import { registration } from "../middlewares/authentication.js";

const loginRouter = express.Router();

loginRouter.post('/yes4trade/auth/login',registration ,(req, res) => {
    console.log('debugging');
    return res.status(200).json({ message: 'You have successfully login!'});
});

export default loginRouter;