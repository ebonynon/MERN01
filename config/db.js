const mongoose = require('mongoose');
//const config = require('config');
//const db = config.get('mongoURI');
const mURI = process.env.MONGODB_URI;
const dotenv = require('dotenv');

dotenv.config();

const db = mURI;

const connectDB = async () => {
  try {
    await mongoose.connect(
      db,
      { useNewUrlParser: true }
    );

    console.log('MongoDB is Connected...');
    console.log(`MongoDB :: ${mURI}`);

  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
