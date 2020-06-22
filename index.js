// index.js

const express = require('express');
const connectDB = require('./config/db.js');
var cors = require('cors');

// routes
const userRouter = require('./routes/user'); //auth
const books = require('./routes/api/books');

const app = express();

app.use(express.json()) //xx
app.use(userRouter); //auth

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/books', books);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));

