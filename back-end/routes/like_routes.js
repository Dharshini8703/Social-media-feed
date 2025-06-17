import express from 'express';
import { addLike, getAllLikes, getLikeByPost, removeLike } from '../controller/likes_controller.js';
import { isAuthenticated } from '../middleware/auth.js';

const LikeRouter = express.Router();

LikeRouter.post('/add-like', isAuthenticated, addLike);

LikeRouter.get('/get-all-like', isAuthenticated, getAllLikes);

LikeRouter.get('/get-like-by-post', isAuthenticated, getLikeByPost);

LikeRouter.delete('/remove-like', isAuthenticated, removeLike);

export default LikeRouter;