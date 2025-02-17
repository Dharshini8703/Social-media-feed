import { generateAccessToken } from "../middleware/auth.js";
import { User } from "../models/user_model.js";
import bcrypt from 'bcryptjs'

const userRegister = async (req, res) => {
    try{
        const { user_name, password, bio } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt)
        const user = await User.create({
            user_name,
            password: hashPassword,
            bio,
        });
        if(!user) {
            return res.status(400).json({status: false, message: 'Registeration is not Successfull'});
        }
        return res.status(200).json({status: true, message: 'Your Registeration is Successfully Completed', data: user});
    } catch(error) {
        console.error(error);
        return res.status(500).json({status: false, message: 'Internal Server Error', error});
    }
}

const userLogin = async (req, res) => {
    try{
        const { user_name, password } = req.body;
        const user = await User.findOne({where: {user_name: user_name}});
        if(!user) {
            return res.status(400).json({status: false, message: 'User not found'});
        }
        if(!await bcrypt.compare(password, user.password)) {
            return res.status(400).json({status: false, message: 'Password mismatch'});
        }
        const accessToken = generateAccessToken(user.id, user.user_name);
        return res.status(200).json({status: true, message: 'Logged in successfully', data: {user, accessToken}});
    } catch(error) {
        console.error(error);
        return res.status(500).json({status: false, message: 'Internal Server Error', error});
    }
}

const updateBio = async (req, res) => {
    try {
        const {id} = req.query;
        const {bio} = req.body;
        const user = await User.findOne({where: {id: id}});
        if(!user) {
            return res.status(400).json({status: false, message: 'User not found'});
        }
        user.bio = bio;
        await user.save();
        return res.status(200).json({status: true, message: 'Bio Updated Successfully'});
    } catch(error) {
        console.error(error);
        return res.status(500).json({status: false, message: 'Internal Server Error', error});
    }
}

export {
    userRegister,
    userLogin,
    updateBio
}