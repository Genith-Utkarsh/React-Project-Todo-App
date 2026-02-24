// import mongoose from 'mongoose';
// import { Schema, model } from 'mongoose';

// const userSchema = new Schema({
//   username: {
//     type : String,
//     minLength : [3, "username should atleast contains 3 letters "],
//     required : [true , "username is required to create a user"],
//     trim : true,
//     unique : [true, "username already exist"]
//   },
//   email: {
//     type : String,
//     unique : [true , "email already exist"],
//     required : [true, "email is required to create a user"],
//     match : [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
//     lowercase : true
//   },
//   password: {
//     type : String,
//     required : [true, "password is required to create a user"],
//     minLength : [6, "password should atleast contains 3 letters "],
//   },
// });


// // models
// export const UserModel = model('User', userSchema);
