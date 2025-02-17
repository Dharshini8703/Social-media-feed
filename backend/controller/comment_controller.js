import { Comment } from "../models/comments_model.js";
import { Post } from "../models/post_model.js";

const addComment = async (req, res) => {
    try {
        const { post_id, comment_content } = req.body;
        const comment = await Comment.create({
            user_id: req.user.id,
            post_id,
            comment_content,
        });
        if(!comment) {
            return res.status(400).json({status: false, message: 'Your Comment is not Posted'});
        }
        const post = await Post.findOne({where: {id: post_id}}); 
        if(!post) {
            return res.status(400).json({status: false, message: 'Post is not found'});
        }
        post.comment_count += 1;
        await post.save();
        return res.status(200).json({status: true, message: 'Comment added Successfully', data: comment});
    } catch(error) {
        console.error(error);
        return res.status(500).json({status: false, message: 'Internal Server Error', error});
    }
}

const getAllComment = async (req, res) => {
    try {
        const comment = await Comment.findAll();
        if(!comment) {
            return res.status(400).json({status: false, message: 'Comment is not found'});
        }
        return res.status(200).json({status: true, message: 'Comment fetched Successfully', data: comment});
    } catch(error) {
        console.error(error);
        return res.status(500).json({status: false, message: 'Internal Server Error', error});
    }
}

const getCommentByPostId = async (req,res) =>{
    try{
        const {id} = req.query;
        const comment = await Comment.findOne({where: {post_id: id}});
        if(!comment) {
            return res.status(400).json({status: false, message: 'Comment not found'});
        }
        return res.status(200).json({status: true, message: 'Comment Fetched Successfully', data: comment});
    } catch(error) {
        console.error(error);
        return res.status(500).json({status: false, message: 'Internal Server Error', error});
    }
}

const deleteComment = async (req, res) => {
    try{
        const {id, post_id} = req.query;
        const comment = await Comment.destroy({where: {id: id}});
        if(!comment) {
            return res.status(400).json({status: false, message: 'Comment not found'});
        }
        const post = await Post.findOne({where: {id: post_id}}); 
        if(!post) {
            return res.status(400).json({status: false, message: 'Post is not found'});
        }
        post.comment_count -= 1;
        await post.save();
        return res.status(200).json({status: true, message: 'Your Comment is deleted Successfully'});
    } catch(error) {
        console.error(error);
        return res.status(500).json({status: false, message: 'Internal Server Erorr', error});
    }
}

const filterComment = async (req, res) => {
    try {
        const { comments } = req.query;    
        let orderClause = [];
        if (comments) {
            orderClause = [['createdAt', 'DESC']]; 
        }
        const comment = await Comment.findAll({ order: orderClause });
        return res.status(200).json({ status: true, message: 'Post is filtered Successfully', data: comment });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: false, message: 'Internal Server Error', error });
    }
};

export {
    addComment,
    getAllComment,
    getCommentByPostId,
    deleteComment,
    filterComment
}