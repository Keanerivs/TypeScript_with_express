import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { truncate } from 'fs';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 3001;

app.get('/api' , (_req, res) => {
res.status(200).json({message: 'Hello from backend'});
});

app.listen(PORT, () => {
console.log(`Server is running on  port ${PORT}`);
});


