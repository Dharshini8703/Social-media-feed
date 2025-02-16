import express from 'express';
import { userLogin, userRegister } from '../controller/user_controller.js';

const UserRouter = express.Router();

UserRouter.post('/register-user', userRegister);

UserRouter.get('/login-user', userLogin);

export default UserRouter;