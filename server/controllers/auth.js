import User from '../models/User.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createError } from "../utils/error.js";
// import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();

export const Register=async (req,res,next)=>{
  try{
    var salt = bcrypt.genSaltSync(10);
   var hash = bcrypt.hashSync(req.body.password, salt);

   const newUser=new User({
    // username:req.body.username,
    // email:req.body.email,
    ...req.body,
    password:hash,
   })
   
   await newUser.save()
   res.status(200).send('user has been created!')
  }catch(err){
   next(err)
  }
}
export const Login=async (req,res,next)=>{
 try{
   const user= await User.findOne({username:req.body.username})
   if(!user) return next(createError(404, "User not found!"));//optional

   const isPasswordCorrect= await bcrypt.compare(
    req.body.password,
    user.password
    );

   if(!isPasswordCorrect) 
     return next(createError(400, "Wrong password or username!"));
   const token=jwt.sign(
    {id:user._id, isAdmin:user.isAdmin},
    process.env.JWT
    );
//    res.status(200).send("user succesfully logged in!")
   const {password,isAdmin,...otherDetails}=user._doc;
   res.cookie("access_token",token,{ httpOnly:true}).status(200).json({...otherDetails})
 }catch(err){
    // res.status(500).send("connection mein error")
    next(err);
 }
}