const express = require('express');

const router = express.Router();
const Event = require('../models/eventModel')


router.get("/event", async (req, res) => {
    try {
      // get all people
        res.json(await Event.find({}));
    } catch (error) {
      //send error
        res.status(400).json(error);
    }
});


module.exports = router;