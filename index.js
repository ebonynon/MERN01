// // app.js

// const express = require('express');
// const connectDB = require('./config/db');
// const userRouter = require('./routes/user'); //auth
// var cors = require('cors');

// // routes
// const books = require('./routes/api/books');

// const app = express();

// app.use(express.json()) //xx
// app.use(userRouter); //auth

// // Connect Database
// connectDB();

// // cors
// app.use(cors({ origin: true, credentials: true }));

// // Init Middleware
// app.use(express.json({ extended: false }));

// app.get('/', (req, res) => res.send('Hello world!'));

// // use Routes
// app.use('/api/books', books);

// const port = process.env.PORT || 8082;

// app.listen(port, () => console.log(`Server running on port ${port}`));

const express = require('express')
const port = process.env.PORT || 8082
const userRouter = require('./routes/user')
//require('./config/db.js.old')
const connectDB = require('./config/db.js.old');

const app = express()
connectDB();

app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})