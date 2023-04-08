import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    wacthlist:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Watchlist",
    }],

    likedVideos: Array,
})

export default mongoose.model("User",UserSchema);