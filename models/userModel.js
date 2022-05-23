const mongoose=require('../db/connection');

const userShema= new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    
}
)
const User = mongoose.model('user',userShema);

module.exports=User;