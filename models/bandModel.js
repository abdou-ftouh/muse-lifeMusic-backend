const mongoose=require('../db/connection');

const bandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    members:[
        {
            memberName: {
                type: String
            },
            roles:[{
                type:String
            }],
            images:[String]

    } ],
    events:[
        {
            startTime:{
                type:Date
            },
            endTime:{
                type:Date
            },
            location:{
                name: String,
                address: String,
                lat: Number,
                lng: Number
               
            }

        }
    ],
    mediaLinks:{
        facebook:String,
        instagram:String,
        spotify:String,
        tiktok:String,
        required:false
    },
    calendarType:{
      type:String,
      required:true  
    },
    calendarID:{
        type:String,
        unique:true,
        // required:true  
      },
      images:[
          {
              type:String
          }
      ],
    genres: [{
        type:String
    }],
    biography: {
        type: String,
        

    }
  
},
{timestamps:true}
);
const Band = mongoose.model('band',bandSchema);

module.exports=Band;