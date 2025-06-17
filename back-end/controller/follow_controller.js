import { Follow } from "../models/follow_model.js";

const addFollow = async(req, res) => {
    try {
        const {user_id} = req.query;
        const user = await Follow.create({
            user_id,
            follow_id: req.user.id
        });
        if(!user) {
            return res.status(400).json({status: false, message: 'There is Problem is follow'});
        }
        return res.status(200).json({status: true, message: 'Your Follow is Successfull', data: user});
    } catch(error) {
        console.error(error);
        return res.status(500).json({status: false, message: 'Internal Server Error', error});
    }
}

const removeFollow = async(req, res) => {
    try {
        const {user_id} = req.query;
        const user = await Follow.destroy({where: {user_id:user_id, follow_id: req.user.id}});
        if(!user) {
            return res.status(400).json({status: false, message: 'No User found'});
        }
        return res.status(200).json({status: true, message: 'Unfollowed Successfull'});
    } catch(error) {
        console.error(error);
        return res.status(500).json({status: false, message: 'Internal Server Error', error});
    }
}

const getFollowers = async (req, res) => {
    try {
        const followers = await Follow.findAll({where: {user_id: req.user.id}});
        if(!followers) {
            return res.status(400).json({status: false, message: 'No followers found'});
        }
        return res.status(200).json({status: true, message: 'Details fetched successfully', data: followers});
    } catch(error) {
        console.error(error);
        return res.status(500).json({status: false, message: 'Internal Server Error', error});
    }
}

const getFollowing = async (req, res) => {
    try {
        const following = await Follow.findAll({where: { follow_id: req.user.id }});
        if(!following) {
            return res.status(400).json({status: false, message: 'No Following found'});
        }
        return res.status(200).json({status: true, message: 'Details fetched Successfully', data: following});
    } catch(error) {
        console.error(error);
        return res.status(500).json({status: false, message: 'Internal Server Error', error});
    }
}

export {
    addFollow,
    removeFollow,
    getFollowers,
    getFollowing
}