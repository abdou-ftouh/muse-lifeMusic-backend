require("dotenv").config();

const { PORT = 4000, MONGODB_URL } = process.env;
// import express
const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.send("Welcome to our server");
});

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));