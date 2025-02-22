import express from 'express'
import { addFollow, getFollowers, getFollowing, removeFollow } from '../controller/follow_controller';

const FollowRouter = express.Router();

FollowRouter.post('/add-follow', isAuthenicated, addFollow);

FollowRouter.delete('/remove_follow', isAuthenicated, removeFollow);

FollowRouter.get('/getFollowers', isAuthenicated, getFollowers);

FollowRouter.get('/getFollowing', isAuthenicated, getFollowing);

export default FollowRouter;