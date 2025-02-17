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

const isAuthenticated = async (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) {
      if (req.file) {
        deleteImage(req.file.path); 
      }
      return res.status(401).json({ 
        status: false,
        message: "Access denied, no token has provided"
      });
    }
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      console.log("decoded---", decoded);
      req.user = decoded;
      next();
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: false, 
        message: "JsonWebTokenError",
        error: error.message
      });
    }
  }

export {
    generateAccessToken,
    isAuthenticated
}