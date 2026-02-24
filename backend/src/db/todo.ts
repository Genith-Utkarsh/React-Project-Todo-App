import mongoose, {Schema, Document} from "mongoose";

export interface ITodo extends Document {
  title : string
  description : string,
  isCompleted : boolean,
  userId : mongoose.Schema.Types.ObjectId,
  createdAt : Date,
  updatedAt : Date
}

const todoSchema = new Schema<ITodo>(
  {
    title : {
      type : String,
      required : true,
      trim : true
    },
    description : {
      type : String,
      trim : true
    },
    isCompleted : {
      type : Boolean,
      default : false
    },
    userId : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "User",
      required : true
    }
  }, 
  {
    timestamps : true
  }
)


export const Todo = mongoose.model<ITodo>("Todo", todoSchema)
