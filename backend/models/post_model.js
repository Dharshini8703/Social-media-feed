import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Post = sequelize.define('Post',{
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    post_content:{
        type: DataTypes.TEXT,
        allowNull: true,
    },
    image:{
        type:DataTypes.STRING,
        allowNull: true,
    },
    likes_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    comment_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
},{
    sequelize,
    modelName: 'Post',
    timestamps: true,
});

// amenities.hasMany(Property, {foreignKey: 'property_amenities', as: 'property'});
// Property.belongsTo(amenities, {foreignKey: 'property_amenities', as: 'amenities'});

export {Post}