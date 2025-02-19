import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import { Post } from './post_model.js';

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bio: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: true,
});

User.hasMany(Post, {foreignKey: 'user_id', as: 'post'});
Post.belongsTo(User, {foreignKey: 'user_id', as: 'user'});

export {User}