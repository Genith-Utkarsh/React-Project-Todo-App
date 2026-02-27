import type { Request, Response } from 'express';
import { User } from '../db/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config.js';

export const userSignUp = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if(!email || !password) {
      return res.status(400).json({
        msg : "Email and password required"
      })
    }
    // if user already exist
    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      return res.status(400).json({
        msg: 'User already exist in our database',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email: email,
      password: hashedPassword,
    });

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {expiresIn : "1d"});

    res.cookie('token', token, {httpOnly : true});

    res.status(200).json({
      msg: 'Sign Up successfull',
      token: token,
    });
  } catch (err) {
    res.status(500).json({
      msg: 'server issue : unable to create a user',
    });
  }
};

export const userSignIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if(!email || !password) {
      return res.status(400).json({
        msg : "Email and password is required."
      })
    }

    const isUserExist = await User.findOne({email});

    if(!isUserExist)
    {
      return res.status(400).json({
        msg : "User doesnot exist in db , please sign up first"
      })
    }

    const comparePass = await bcrypt.compare(password, isUserExist.password as string)

    if(!comparePass)
    {
      return res.status(400).json({
        msg : "Invalid credentials"
      })
    }


    const token  = jwt.sign({userId : isUserExist._id}, JWT_SECRET, {expiresIn : "1d"} )

    res.cookie("token", token, {httpOnly : true})

    res.status(200).json({
      msg : "Signin Successful.",
      token : token
    })

    
  } catch (err) {
    console.log("signin error :" + err)
    res.status(500).json({
      msg: 'Server issue : Unable to sign in',
    });
  }
};
