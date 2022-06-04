const mongoose=require('../db/connection');

class FormattedDate {
    constructor(x) {
        this.date = new Date(x)
    }
    
    // ------- AM --------
    // ------- MINUTE --------
    get minutes() {
        let minutes = this.date.getMinutes();
        if (minutes < 10 ) {
            return `0${minutes}`
        } else return minutes
    }
    // ------- HOUR --------
    get hour () {
        let holder = this.date.getHours()
        let hour;
        if (holder > 12) hour = holder - 12
        holder > 12 ? hour = holder -12 : hour = holder
        return hour
    }
    // ------- DAY --------
    get day() {
        let day = this.date.getDay();
        switch (day) {
            case 0:
                return 'Sun'
            case 1:
                return 'Mon'
            case 2:
                return 'Tues'
            case 3:
                return 'Wed'
            case 4:
                return 'Thurs'
            case 5:
                return 'Fri'
            case 6:
                return 'Sat'     
            default:
                return 'this month'
        }
    }
    // ------- MONTH --------
    get month() {
        let month = this.date.getMonth();
        switch (month) {
            case 1:
                return 'Jan'
            case 2:
                return 'Feb'
            case 3:
                return 'March'
            case 4:
                return 'April'
            case 5:
                return 'May'
            case 6:
                return 'Jun'
            case 7:
                return 'Jul'
            case 8:
                return 'Aug'
            case 9:
                return 'Sept'
            case 10:
                return 'Oct'
            case 11:
                return 'Nov'
            case 12:
                return 'Dec'
        
            default:
        }
    }
    // ------- YEAR --------
    get year() {
        return this.date.getFullYear();
    }
    // ------- Methods --------
}

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
                type: Date
            },
            endTime:{
                type: Date
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
        facebook: String,
        instagram: String,
        spotify: String,
        tiktok: String,
        twitter: String,
        required:false
    },
    calendarType:{
      type:String,
      required:true  
    },
    calendarID:{
        type:String,
        // unique:true,
        required:true  
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
    },
    likes: {
        type: Number,
        default: 0,
    }
  
},
{timestamps:true}
);
const Band = mongoose.model('band',bandSchema);

module.exports=Band;