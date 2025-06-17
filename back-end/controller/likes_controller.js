import { Likes } from "../models/likes_model.js";
import { Post } from "../models/post_model.js";

const addLike = async (req, res) => {
    try {
        const {post_id} = req.query;
        const likes = await Likes.create({
            user_id: req.user.id,
            post_id
        });
        if(!likes) {
            return res.status(400).json({status: false, message: 'Your Like is not given to the post'});
        }
        const post = await Post.findOne({where: { id: post_id }});
        if(!post) {
            return res.status(400).json({status: false, message: 'Post not found'});
        }
        post.likes_count = post.likes_count + 1;
        await post.save();
        return res.status(200).json({status: true, message: 'Like is given to the post successfully', data: {likes, post}});
    } catch(error) {
        console.error(error);
        return res.status(500).json({status: false, message: 'Internal Server Error', error});
    }
}

const getAllLikes = async (req, res) =>{
    try {
        const {post_id} = req.query;
        const allLikes = await Likes.findAll({ where: { post_id }});
        if(!allLikes) {
            return res.status(400).json({staus: false, message: 'No likes found for this post'});
        }
        const count = allLikes.length;
        return res.status(200).json({status: true, message: 'Post liked fetched Successfully', data: {...allLikes.toJson(), count: count}});
    } catch(error) {
        console.error(error);
        return res.status(500).json({status: false, message: 'Internal Server Error', error});
    }
}

const getLikeByPost = async (req, res) => {
    try {
        const {post_id} = req.query;
        const likedPost = await Likes.findAll({ where: { post_id, user_id: req.user.id }});
        if(!likedPost) {
            return res.staus(400).json({status: false, message: 'Post is not liked by you'});
        }
        return res.status(200).json({status: true, message: 'Likes details fetched Successfully', data: likedPost});
    } catch(error) {
        console.error(error);
        return res.status(500).json({status: false, message: 'Internal Server Error', error});
    }
}

const removeLike = async (req,res) => {
    try {
        const {id} = req.query;
        const removeLike = await Likes.destroy({ where: { id: id }});
        if(!removeLike) {
            return res.status(400).json({status: false, message: 'Like is not Removed. Please try again after few minutes'});
        }
        return res.status(200).json({status: true, message: 'Your Like is removed Successfully'});
    } catch(error) {
        console.error(error);
        return res.status(500).json({status: false, message: 'Internal Server Error', error});
    }
}

export {
    addLike,
    getAllLikes,
    getLikeByPost,
    removeLike
}