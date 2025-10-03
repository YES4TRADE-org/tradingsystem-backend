import express from "express";
import { registration } from "../middlewares/authentication.js";
import { generateToken } from "../services/logics.js";

const loginRouter = express.Router();

loginRouter.post('/yes4trade/auth/login',registration , async (req, res) => {
    const { username } = req.body;
    const token = await generateToken(username);
    return res.status(200).json({ token: token });
});

export default loginRouter;