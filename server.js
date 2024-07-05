//server setup using express

import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT = 3000;

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    console.log('Working..');
    res.send('Hello, world!');
});

app.listen(PORT, () => {
    console.log(`Server is working on ${PORT}`);
});