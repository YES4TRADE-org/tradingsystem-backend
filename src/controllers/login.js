import express from "express";
import { registartion } from "../middlewares/authentication.js";

const loginRouter = express.Router();

loginRouter.post('/yes4trade/auth/login',registartion ,(req, res) => {
    const { username, password } = req.body;
});

export default loginRouter;