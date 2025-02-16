import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const generateAccessToken = (id, user_name) => {
    try {
        return jwt.sign({id, user_name}, process.env.SECRET_KEY, {expiresIn: process.env.EXPIRES_IN})
    } catch(error) {
        console.error(error);
        return res.status(500).json({status: false, message: 'Access Token is not Generated'});
    }
}

export {
    generateAccessToken
}