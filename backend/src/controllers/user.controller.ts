import type { Request, Response } from "express";
import { User } from "../db/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config.js";




export const userSignUp = async(req : Request , res : Response) =>{
  try {
    const { email, password } = req.body

    // if user already exist 
    const isUserExist = await User.findOne({email})

    if(isUserExist)
    {
      return res.status(400).json({
        msg : "User already exist in our database"
      })
    }

    const hashedPassword = await bcrypt.hash(password, 5);

    const user = await User.create({
      email : email ,
      password : hashedPassword
    })

    const token  = jwt.sign({userId : user._id}, JWT_SECRET);

    res.cookie("token", token);

    res.json({
      msg : "Sign Up successfull",
      token : token
    })
    
  } catch(err)
  {
    res.status(500).json({
      msg : "server issue : unable to create a user"
    })
  }
}
