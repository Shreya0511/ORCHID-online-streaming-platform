import Video from '../models/Video.js';

export const createVideos=async (req,res,next)=>{
    const newVideo=new Video(req.body)
    try{
    const savedVideo=await newVideo.save();
      res.status(200).json(savedVideo)
    }catch(err){
      // res.status(500).json(err)
      next(err)
    }
}

export const getVideo=async (req,res,next)=>{
    const getVideo=await Video.findById(req.params.id)
    try{
      res.status(200).json(getVideo)
    }catch(err){
        res.status(500).json(err)
        next(err)
    }
}
export const getVideos=async (req,res,next)=>{
  try {
    const video = await Video.find()
    res.status(200).json(video);
  } catch (err) {
    next(err);
  }
}