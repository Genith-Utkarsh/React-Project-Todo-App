import mongoose, {Schema, Document} from "mongoose";

export interface IUser extends Document {
  email : String
  password : String
  createdAt : Date
  updatedAt : Date
}

const userSchema = new Schema<IUser>(
  {
    email : {
      type : String,
      lowercase : true,
      unique : [true, "Email alreadt in use"],
      required : [true, "email is required to create the user"],
      trim : true
    },
    password : {
      type : String,
      required : true
    }
  },
  {
    timestamps : true
  }
)


export const User = mongoose.model<IUser>("User", userSchema)
