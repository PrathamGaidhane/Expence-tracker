import express from "express";
import cors from 'cors'
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())


//connect to mongoDB
const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URL)

    if(conn){
        console.log(`MONGODB connect Succesfully 📦`)
    }
};
connectDB();

app.get('/',(req,res) => {
    res.json({
        message : `Welcome to Express Tracker API`
    })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})