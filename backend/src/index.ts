import express from "express"
import dotenv  from "dotenv"
import mongoose from "mongoose"
import { MONGO_URL } from "./config.js"
dotenv.config()

const app = express()






async function startServer()
{
  try {
    await mongoose.connect(process.env.MONGO_URL || MONGO_URL)
    console.log("connected to db.")

    app.listen(3000, () => {
      console.log("This app is listening on port 3000")
    })
  } catch(err)
  {
    console.log("Error connecting to db.")
  }
}
startServer()
