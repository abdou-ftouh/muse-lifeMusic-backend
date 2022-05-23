const express = require('express');

const router = express.Router();
const Band = require('../models/bandModel')


router.get("/band", async (req, res) => {
    try {
      // get all people
        res.json(await Band.find({}));
    } catch (error) {
      //send error
        res.status(400).json(error);
    }
});


module.exports = router;