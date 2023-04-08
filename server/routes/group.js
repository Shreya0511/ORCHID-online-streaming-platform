import express from 'express';

import {createGroup, deleteGroup, getAllGroups, getGroup, updateGroup} from '../controllers/groupControllers.js'
// import { verifyAdmin } from '../utils/verifyToken.js';
const router=express.Router();

//CREATE
router.post("/create",createGroup)
//UPDATE
router.put("/update/:id",updateGroup)
//DELETE
router.delete("/delete/:id",deleteGroup)
//GET
// router.get("/countByCity", countByCity);
// router.get("/countByType", countByType);

router.get("/findGroup/:id", getGroup)
// //GETALL

router.get("/findGroup/",getAllGroups)


// router.get("/countByType",countByType)
// router.get("/countByType",getAllHotels)
// router.get("/",(req,res)=>{
//     res.send("hello from hotels end point")
// })

export default router;