
const {User,validate} = require('../models/userModel')
const bcrypt= require('bcrypt');





const createUser= async (req, res) => {
    try {
      const {error} = validate(req.body);
      if(error)
        return res.status(400).send({message:error.details[0].message});
        
      const user= await User.findOne({email:req.body.email});
      if(user)
        return res.status(409).send({message:"You given an email already excite!!"})
    const salt= await bcrypt.genSalt(Number(process.env.SALT)); //The Salt Package Manager, or SPM, enables Salt formulas to be packaged to simplify distribution to Salt masters. 
    const hashPassword= await bcrypt.hash(req.body.password,salt);
    await new User({...req.body,password:hashPassword}).save();
    res.status(201).send({message:"User Created successfully"})
    } catch (error) {
      //send error
        res.status(500).send({message:"Server Error"})
    }
};


module.exports = {createUser};



