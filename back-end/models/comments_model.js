import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Comment = sequelize.define('Comment',{
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
    comment_content:{
        type: DataTypes.TEXT,
        allowNull: true,
    },
},{
    sequelize,
    modelName: 'Comment',
    timestamps: true,
});

// amenities.hasMany(Property, {foreignKey: 'property_amenities', as: 'property'});
// Property.belongsTo(amenities, {foreignKey: 'property_amenities', as: 'amenities'});

export {Comment}