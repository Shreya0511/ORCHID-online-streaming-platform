import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoute from './routes/auth.js'
// import usersRoute from './routes/user.js'
import groupsRoute from './routes/group.js'
import watchlistRoute from './routes/watchlist.js'
const app=express();

dotenv.config();
app.use(cors())

const connection=async()=>{
    try{
      await mongoose.connect(process.env.MONGO)
      console.log("connected to MONGODB")
    }catch(err){
      //  throw err;
      console.log("can't able to connect to MONGODB")
    }
}

mongoose.connection.on("disconnected",()=>{
  console.log("Disconnected to MONGODB")
})

//middlewares of all routes
app.use(cookieParser())

app.use(express.json())

app.use("/api/auth", authRoute);
// app.use("/api/users", usersRoute);
app.use("/api/groups", groupsRoute);
// app.use("/api/hotels/count", hotelsRoute);
app.use("/api/watchlist", watchlistRoute);


app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });

const PORT=8000;
app.listen(PORT,()=>{
    connection()
    console.log(`PORT ${PORT} is connected to backend`)
})