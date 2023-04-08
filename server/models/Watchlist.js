import mongoose from 'mongoose';
const { Schema } = mongoose;

const WatchlistSchema=new mongoose.Schema({
title:{
    type:String,
    required: true,
},
lengthSeconds:{
    type:Number,
},
channel:{
    type:String,
    required: true,
},
}, { timestamps: true })

export default mongoose.model("Watchlist",WatchlistSchema);
