const mongoose=require('../db/connection');

const eventSchema = new mongoose.Schema({
    name: String,
    description: String,
    date: Date,
    imageUrl: String,
    address:{
        street:String,
        city:String,
        state:String,
        zip:Number
    }
  },
    {timestamps:true}
  )

  const Event = mongoose.model('event', eventSchema)


module.exports = Event