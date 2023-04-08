import User from '../models/User.js';
import Groups from "../models/Group.js";

export const AddUsersToGroup=async (req,res,next)=>{
    const userId=req.params.userId;
    try{
        const getUser=await User.findById(userId)
    // const savedFriend=await newFriend.save();
      try{
        await Groups.findByIdAndUpdate(userId,{$push:{user:getUser.username}}) //push is pushing elements in the array
        //findByIdAndUpdate is the function of mongoose
      }catch(err){
       res.status(401).json(err)
      }
      res.status(200).json(getUser)

    }catch(err){
      res.status(500).json(err)
      next(err)
    }
}

// export const deleteRoom=async (req,res,next)=>{
//     const hotelId=req.params.hotelId
//     try{
//         await Room.findByIdAndDelete(req.params.id);
//         try{
//         await Hotels.findByIdAndDelete(hotelId,{
//             $pull:{rooms:req.params.id}
//         })
//         }catch(err){

//         }
//       res.status(200).json("Room has been deleted");
//     }catch(err){
//         res.status(500).json(err)
//     }
// }
export const getUser=async (req,res,next)=>{

    try{
     const getUser=await User.findById(req.params.id)
      res.status(200).json(getUser)
    }catch(err){
        res.status(500).json(err)
    }
}
(END)