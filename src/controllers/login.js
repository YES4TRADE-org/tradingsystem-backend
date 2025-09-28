import express from "express";
import { authenticated } from "../middlewares/authentication.js";

const loginRouter = express.Router();

loginRouter.post('/yes4trade/auth/login', authenticated, (req, res) => {
    const { username, password } = req.body;
    
});

export default loginRouter;