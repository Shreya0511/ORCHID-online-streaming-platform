import mongoose from 'mongoose';
const { Schema } = mongoose;

const GroupSchema=new mongoose.Schema({
    name:{
        type:String,
        required: true,
        unique:true
    },
    type:{
        type:String,
        required:true
    },
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      }],
    desc:{
        type:String,
    },
},{timestamps:true})

export default mongoose.model("Groups",GroupSchema);