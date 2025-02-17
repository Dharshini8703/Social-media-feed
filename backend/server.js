import bodyParser from 'body-parser'
import express from 'express'
import UserRouter from './routes/user_routes.js';
import PostRouter from './routes/post_routes.js';
import CommentRouter from './routes/comment_routes.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/api/users', UserRouter);
app.use('/api/post', PostRouter);
app.use('/api/comment', CommentRouter);

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})