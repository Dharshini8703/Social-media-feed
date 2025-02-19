import { Comment } from "../models/comments_model.js";
import { Post } from "../models/post_model.js";
import { User } from "../models/user_model.js";

const addPost = async (req, res) => {
    try {
        const { post_content, image } = req.body;
        console.log("req-----", req.user)
        const post = await Post.create({
            user_id: req.user.id,
            post_content,
            image
        });
        if(!post) {
            return res.status(400).json({status: false, message: 'Your Post is not Posted'});
        }
        return res.status(200).json({status: true, message: 'Post added Successfully', data: post});
    } catch(error) {
        console.error(error);
        return res.status(500).json({status: false, message: 'Internal Server Error', error});
    }
}

const getAllPost = async (req, res) => {
    try {
        const post = await Post.findAll({include: [{model: User, as: 'user'}]});
        
        const allPost = post.map(post => {
            const postJson = post.toJSON();
            postJson['user_id'] = post.user; 
            delete postJson.user;
            return postJson;
        });
        if(!post) {
            return res.status(400).json({status: false, message: 'Post is not found'});
        }
        return res.status(200).json({status: true, message: 'Post fetched Successfully', data: allPost});
    } catch(error) {
        console.error(error);
        return res.status(500).json({status: false, message: 'Internal Server Error', error});
    }
}

const getPostById = async (req,res) =>{
    try{
        const {id} = req.query;
        const post = await Post.findOne({where: {id: id}});
        if(!post) {
            return res.status(400).json({status: false, message: 'Post not found'});
        }
        return res.status(200).json({status: true, message: 'Post Fetched Successfully', data: post});
    } catch(error) {
        console.error(error);
        return res.status(500).json({status: false, message: 'Internal Server Error', error});
    }
}

const updatePost = async (req,res) => {
    try{
        const {id} = req.query;
        const {post_content, image, like} = req.body;
        const post = await Post.findOne({where: {id: id}});
        if(!post) {
            return res.status(400).json({status: false, message: 'Post not found'});
        }
        const update = await post.update({
            post_content,
            image,
        });
        if(like === true) {
            post.likes_count = post.likes_count + 1;
            await post.save();
        } else {
            post.likes_count = post.likes_count - 1;
            await post.save();
        }
        if(!update) {
            return res.status(400).json({status: false, message: 'Post update is failed'});
        }
        return res.status(200).json({status: true, message: 'your Post is Updated Successfully', data: update});
    } catch(error) {
        console.error(error);
        return res.status(500).json({status: false, message: 'Internal Server Error', error});
    }
}

const deletePost = async (req, res) => {
    try{
        const {id} = req.query;
        const post = await Post.destroy({where: {id: id}});
        if(!post) {
            return res.status(400).json({status: false, message: 'Post not found'});
        }
        if(post.comment_count > 0) {
            const comment = await Comment.destroy({where: {post_id: id}});
            if(!comment) {
                return res.status(400).json({status: false, message: 'Comment not found'});
            }
        }
        return res.status(200).json({status: true, message: 'Your Post is deleted Successfully'});
    } catch(error) {
        console.error(error);
        return res.status(500).json({status: false, message: 'Internal Server Erorr', error});
    }
}

const filterPost = async (req, res) => {
    try {
        const { more_likes, less_likes, more_comments, less_comments, only_images, only_content } = req.query;
                
        const whereConditions = {};
        if (more_likes) {
            whereConditions.likes_count = { [Op.gt]: more_likes };
        }
        if (less_likes) {
            whereConditions.likes_count = { [Op.lt]: less_likes };
        }
        if (more_comments) {
            whereConditions.comment_count = { [Op.gt]: more_comments };
        }
        if (less_comments) {
            whereConditions.comment_count = { [Op.lt]: less_comments };
        }
        if (only_images === 'true') {
            whereConditions.image_url = { [Op.ne]: null }; 
            whereConditions.post_content = { [Op.is]: null }; 
        }
        if (only_content === 'true') {
            whereConditions.image_url = { [Op.is]: null }; 
            whereConditions.post_content = { [Op.ne]: null }; 
        }
        
        const posts = await Post.findAll({ where: whereConditions });
        return res.status(200).json({ status: true, message: 'Post is filtered Successfully', data: posts });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: false, message: 'Internal Server Error', error });
    }
};

const searchPost = async (req, res) => {
    try {
        const { search } = req.query;
        const post = await Post.findAll({
            where: { 
              [Op.or]: [
                { post_content : {[Op.like] : `%${search}%`}},
                { user_id: {[Op.like] : `%${search}%`}},
              ]
            },
            include: [
              { model: User, as: 'user', attributes: { exclude: ['password']}},
            ]
        });
        if(!post) {
            return res.status(400).json({status: false, message: 'Post not found'});
        }
        return res.status(200).json({status: true, message: 'Search Post fetched Successfully', data: post});
    } catch(error) {
        console.error(error);
        return res.status(500).json({status: false, message: 'Internal Server Error', error});
    }
}

export {
    addPost,
    getAllPost,
    getPostById,
    updatePost,
    deletePost,
    filterPost,
    searchPost
}