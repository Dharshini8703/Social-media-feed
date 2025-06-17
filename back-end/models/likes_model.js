import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Likes = sequelize.define('Likes',{
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
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},{
    sequelize,
    modelName: 'Likes',
    timestamps: true,
});


export {Likes}