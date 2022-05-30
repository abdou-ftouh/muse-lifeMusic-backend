require("dotenv").config();
const express = require('express');

const router = express.Router();
const {User} = require('../models/userModel');
const Joi=require('joi');
const bcrypt= require('bcrypt');
const jwt = require('jsonwebtoken')


router.get('/',authenticateToken,async(req,res)=>{
    console.log('myemail is '+req.myUser.email)
    res.json(await User.findOne({email:req.myUser.email}));
})

router.post("/", async (req, res) => {
     try {
            const {error}= validate(req.body);
            if(error)
            return res.status(400).send({message:error.details[0].message});
            const user= await User.findOne({email:req.body.email});
        if(!user)
        return res.status(401).send({message: "invalid password or email"})

        const validPassword= await bcrypt.compare(
            req.body.password, user.password
        );
        if(!validPassword)
            return res.status(401).send({message:"invalid password or email"})
            // const token =user.generateAuthToken();
            const email= req.body.email
            const myUser={email:email}
          const accessToken=jwt.sign(myUser, process.env.ACCESS_TOKEN_SECRET)
        //   res.json({accessToken:accessToken})
            res.status(200).send({data:accessToken,message:"Logged successfully"})
        
     } catch (error) {
        res.status(500).send({message:"Server Error"})
     }
});

function authenticateToken(req,res,next){
    const authHeader = req.headers['authorization']
    const token=authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, myUser)=>{
        if(err) return res.sendStatus(403)

        req.myUser = myUser
        console.log(req.myUser)
        next()
    })

}

const validate=(data)=>{
    const schema= Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Password")

    });
    return schema.validate(data);
}


module.exports = router;
