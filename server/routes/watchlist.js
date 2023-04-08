import express from 'express';
import { addToLikedVideos } from '../controllers/watchlist.js';
import { removeFromLikedVideos } from '../controllers/watchlist.js';
import { getLikedVideos } from '../controllers/watchlist.js';
const router=express.Router();

//CREATE
router.post("/addToLikedVideos",addToLikedVideos)

//DELETE
router.delete("/removeFromLikedVideos",removeFromLikedVideos);

//GETALL
router.get("/getLikedVideos",getLikedVideos)


export default router;