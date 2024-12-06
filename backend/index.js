import express from "express";
import mongoose from "mongoose";
import booksRoute from './routes/bookRoutes.js';
import cors from 'cors';

const port = process.env.PORT || 5000;
const url = process.env.MONGODB_URI;

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Customs Origins
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// )

app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send('Welcome To MERN Tutorial');
});

app.use('/books', booksRoute);

mongoose.connect(url)
    .then(() => {
        console.log('App connected to database');
        app.listen(port, () => {
            console.log(`App is listening to port: ${port}`);
        });
    })
    .catch((error) => {
        console.log(error);
    })