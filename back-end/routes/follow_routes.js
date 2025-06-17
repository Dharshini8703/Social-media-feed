import express from 'express'
import { addFollow, getFollowers, getFollowing, removeFollow } from '../controller/follow_controller.js';
import { isAuthenticated } from '../middleware/auth.js';

const FollowRouter = express.Router();

FollowRouter.post('/add-follow', isAuthenticated, addFollow);

FollowRouter.delete('/remove_follow', isAuthenticated, removeFollow);

FollowRouter.get('/getFollowers', isAuthenticated, getFollowers);

FollowRouter.get('/getFollowing', isAuthenticated, getFollowing);

export default FollowRouter;