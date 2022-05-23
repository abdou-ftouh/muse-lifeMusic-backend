require("dotenv").config();

// import express
const express = require("express");
const app = express();

const { PORT = 4000, MONGODB_URL } = process.env;
const eventControler= require('./controlers/eventControler')
const bandControler= require('./controlers/bandControler')

app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.use(eventControler)
app.use(bandControler)




// LISTENER
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));