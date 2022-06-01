const formatEvents = require( './Google_APIs/Events_n_Places' );


const Band = require('../models/bandModel')

 const getBands= async (req, res) => {
    try {

        res.json(await Band.find({}));
    } catch (error) {
      //send error
        res.status(400).json(error);
        console.log(error)
    }
};


 const createBands= async (req, res) => {
  try {
    const calendarID = req.body.calendarID
    const myEvents = await formatEvents(calendarID)
    myEvents.forEach(event => req.body.events.push(event))
    console.log(req.body)
    res.json(await Band.create(req.body))

  } catch (error) {
    //send error
      res.status(400).json(error);
      console.log(error)

  }
};

 const deleteBands=async (req, res) => {
  try {
    res.json(await Band.findOneAndRemove({ _id: req.params.id }));
  } catch (error) {
    res.status(400).json(error);
    console.log(error)
  }

};


 const updateBands= async(req, res) => {
 
     try {
       res.json(await  Band.findOneAndUpdate({ _id: req.params.id }, req.body))
     } catch (error) {
      res.status(400).json(error);
      console.log(error)
     }
};


module.exports={getBands,createBands,deleteBands,updateBands};