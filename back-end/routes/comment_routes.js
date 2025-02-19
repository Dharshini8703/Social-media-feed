import express from 'express'
import { isAuthenticated } from '../middleware/auth.js';
import { addComment, deleteComment, filterComment, getAllComment, getCommentByPostId } from '../controller/comment_controller.js';

const CommentRouter = express.Router();

CommentRouter.post('/add-comment', isAuthenticated, addComment);

CommentRouter.get('/get-all-comment', isAuthenticated, getAllComment);

CommentRouter.get('get-comment-by-post-id', isAuthenticated, getCommentByPostId);

CommentRouter.delete('/delete-comment', isAuthenticated, deleteComment);

CommentRouter.get('/filter-comment', isAuthenticated, filterComment);

export default CommentRouter;