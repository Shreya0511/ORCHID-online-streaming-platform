import Groups from '../models/Group.js';

export const createGroup=async (req,res,next)=>{
    const newGroup=new Groups(req.body)
    try{
    const savedGroup=await newGroup.save();
      res.status(200).json(savedGroup)
    }catch(err){
      // res.status(500).json(err)
      next(err)
    }
}
export const updateGroup=async (req,res,next)=>{
    try{
        const updatedGroup=await Groups.findByIdAndUpdate(
          req.params.id,
          {$set:req.body},
          {new:true}
        )
        res.status(200).json(updatedGroup)
       }catch(err){
        next(err)
        // res.status(500).json(err)
       }
}
export const deleteGroup=async (req,res,next)=>{
    // const deleteHotel=
    try{
        await Groups.findByIdAndDelete(req.params.id);
      res.status(200).json("Group has been deleted");
    }catch(err){
        // res.status(500).json(err)
        next(err)
    }
}
export const getGroup=async (req,res,next)=>{
    const getGroup=await Groups.findById(req.params.id)
    try{
      res.status(200).json(getGroup)
    }catch(err){
        res.status(500).json(err)
        next(err)
    }
}
export const getAllGroups=async (req,res,next)=>{
    const AllGroups=await Groups.find()
    try{
     res.status(200).json(AllGroups)
    }catch(err){
        res.status(500).json(err)
        next(err)
    }
//     const { min, max, ...others } = req.query;
//   try {
//     const Groups = await Groups.find({
//       ...others,
//       cheapestPrice: { $gt: min | 1, $lt: max || 999 },
//     }).limit(4);
//     res.status(200).json(hotels);
//   } catch (err) {
//     next(err);
//   }
}