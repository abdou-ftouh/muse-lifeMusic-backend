const mongoose = require('mongoose');

const MONGODB_URL = 
process.env.NODE_ENV === 'production'
? process.env.DB_URL
: "mongodb+srv://test:test@cluster0.o9dmx.mongodb.net/musicProject?retryWrites=true&w=majority";


mongoose.connect(MONGODB_URL);
// Connection Events
mongoose.connection
  .on("open", () => console.log("Your are connected to mongoose"))
  .on("close", () => console.log("Your are disconnected from mongoose"))
  .on("error", (error) => console.log(error));

  module.exports = mongoose;
