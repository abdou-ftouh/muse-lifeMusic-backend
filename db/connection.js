const mongoose = require('mongoose');

const MONGODB_URL = 
process.env.NODE_ENV === 'production'
? process.env.DB_URL
: process.env.MONGODB_URL;


mongoose.connect(MONGODB_URL);
// Connection Events
mongoose.connection
  .on("open", () => console.log("Your are connected to mongoose"))
  .on("close", () => console.log("Your are disconnected from mongoose"))
  .on("error", (error) => console.log(error));

  module.exports = mongoose;
