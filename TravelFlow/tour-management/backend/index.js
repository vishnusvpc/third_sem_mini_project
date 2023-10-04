import express from "express"
import dotenv from "dotenv"
import mongoose, { connect } from "mongoose"
import cors from "cors"
import cookieParser from "cookie-parser"
import tourRoute from './routes/tours.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 8000

// Database connection goes here.....

mongoose.set('strictQuery', false);
const connection = async()=>
{
    try 
    {
        await mongoose.connect(process.env.MONGO_URI, 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })    

        console.log("Connected to the database successfully......")
    } 
    catch (error) 
    {
        console.log("Connection failed!!!!!!")
    }
}


app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use('/tours', tourRoute)

app.listen(port, ()=>{
    connection();
    console.log("Listening on port", port);
})