const express = require('express');

const router = express.Router();
const Band = require('../models/bandModel')


router.get("/", async (req, res) => {
    try {
      
        res.json(await Band.find({}));
    } catch (error) {
      //send error
        res.status(400).json(error);
        console.log(error)
    }
});
router.post("/", async (req, res) => {
  try {
   
    res.json(await Band.create(req.body));
  } catch (error) {
    //send error
      res.status(400).json(error);
      console.log(error)

  }
});

router.delete('/:id', async (req, res) => {
  try {
    res.json(await Band.findOneAndRemove({ _id: req.params.id }));
  } catch (error) {
    res.status(400).json(error);
    console.log(error)
  }

})
router.patch("/:id", async(req, res) => {
 
     try {
       res.json(await  Band.findOneAndUpdate({ _id: req.params.id }, req.body))
     } catch (error) {
      res.status(400).json(error);
      console.log(error)
     }
});


module.exports = router;