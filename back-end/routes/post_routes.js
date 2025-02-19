import express from 'express'
import { addPost, deletePost, filterPost, getAllPost, getPostById, searchPost, updatePost } from '../controller/post_controller.js';
import { isAuthenticated } from '../middleware/auth.js';

const PostRouter = express.Router();

PostRouter.post('/add-post', isAuthenticated, addPost);

PostRouter.get('/get-all-post', isAuthenticated, getAllPost);

PostRouter.get('/get-post-by-id', isAuthenticated, getPostById);

PostRouter.put('/update-post', isAuthenticated, updatePost);

PostRouter.delete('/delete-post', isAuthenticated, deletePost);

PostRouter.get('/filter-post', isAuthenticated, filterPost);

PostRouter.get('/search-post', isAuthenticated, searchPost);

export default PostRouter;