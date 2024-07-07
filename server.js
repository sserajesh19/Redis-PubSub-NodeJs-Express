//server setup using express

import express from 'express';
import dotenv from 'dotenv';

import publishMessage from "./Redis/Publish.js";
import subscribeChannel from "./Redis/Subscribe.js";
 

dotenv.config();

const CHANNEL = process.env.REDIS_CHANNEL;

const PORT = 3000;

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    console.log('Working..');
    res.send('Hello, world!');
});


app.post('/redis/publish',(req, res) => {
    try{
        

        let data = req.body.data;
    
        const { name, age } = data || {}; // Provide a default empty object to avoid destructuring undefined
        if (name && age) {
            const readyData = `Name: ${name}, Age: ${age}`;

            publishMessage( CHANNEL, readyData );

            res.send(readyData);
        } else {
            res.status(400).send('Invalid data received');
        }
    }
    catch(e){
        console.log('Error:',e);
       // throw e;
    }
});

///subscribe Channel
subscribeChannel(CHANNEL);

app.listen(PORT, () => {
    console.log(`Server is working on ${PORT}`);
});