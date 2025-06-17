import express from 'express';
import { updateBio, userById, userLogin, userRegister } from '../controller/user_controller.js';
import { isAuthenticated } from '../middleware/auth.js';

const UserRouter = express.Router();

UserRouter.post('/register-user', userRegister);

UserRouter.post('/login-user', userLogin);

UserRouter.get('/get-user-by-id', isAuthenticated, userById);

UserRouter.put('/update-bio', isAuthenticated, updateBio);

export default UserRouter;