import express from 'express';
import cors from 'cors';

const app = express();
const router = express.Router();

app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.use('/', router);

app.listen(5000, () => {
    console.log('Server listening to port 5000');
});