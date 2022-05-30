require("dotenv").config();

// import express
const express = require("express");
const app = express();
const cors=require('cors')

const { PORT = 4000, MONGODB_URL } = process.env;

const bandRoute= require('./routes/bandRoute')
const userRoute= require('./routes/userRoute')
const authControler= require('./controlers/authControler')


app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended: true}))



app.use('/users',userRoute)
app.use('/bands',bandRoute)
app.use('/auth',authControler)


console.log('helo')



// LISTENER
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));