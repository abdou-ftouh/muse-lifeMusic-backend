require("dotenv").config();

// import express
const express = require("express");
const app = express();
const cors=require('cors')

const { PORT = 4000, MONGODB_URL } = process.env;

const bandControler= require('./controlers/bandControler')
const authControler= require('./controlers/authControler')
const userControler= require('./controlers/userControler')

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended: true}))


app.use('/api/auth',authControler)
app.use('/api/users',userControler)
app.use('/bands',bandControler)






// LISTENER
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));