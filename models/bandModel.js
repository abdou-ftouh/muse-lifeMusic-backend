const mongoose=require('../db/connection');

const bandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    genres: [{
        type: String
    }],
    members: [{
        type: String
    }],
    albums: [{
        type: String
    }],
    likes: {
        type: Number,
        default: 0,

    },
    description: {
        type: String
    }
},
{timestamps:true}
);
const Band = mongoose.model('band',bandSchema);

module.exports=Band;