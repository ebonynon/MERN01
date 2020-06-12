// app.js

import express from 'express';
import connectDB from './config/db';
//var cors = require('cors');

// routes
import books from './routes/api/books';

const app = express();

// Connect Database
//connectDB(); xx

// cors
//app.use(cors({ origin: true, credentials: true }));

// Init Middleware
//app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
//app.use('/api/books', books);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
