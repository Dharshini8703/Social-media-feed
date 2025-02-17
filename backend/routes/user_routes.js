import express from 'express';
import { updateBio, userLogin, userRegister } from '../controller/user_controller.js';
import { isAuthenticated } from '../middleware/auth.js';

const UserRouter = express.Router();

UserRouter.post('/register-user', userRegister);

UserRouter.get('/login-user', userLogin);

UserRouter.put('/update-bio', isAuthenticated, updateBio);

export default UserRouter;