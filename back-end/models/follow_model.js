import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Follow = sequelize.define('Follow',{
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
    follow_user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},{
    sequelize,
    modelName: 'Follow',
    timestamps: true,
});


export {Follow}