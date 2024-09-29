require('dotenv').config()

module.exports = {
  production: false,
  mongoURI:
    process.env.MONGODB_URI,
  PORT: process.env.PORT,
};
