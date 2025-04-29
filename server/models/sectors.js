const { DataTypes } = require('sequelize');
const sequelize = require('../Database/db');
const Category = require('./categories');

 const Sector = sequelize.define('Sector', 
{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true,
    },
    name:{
        type:DataTypes.STRING(255),
        allowNull:false,

    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},{
    timestamps:false
})

Sector.belongsTo(Category,{
    foreignKey:'category_id',
    onDelete:'cascade'
})
Category.hasMany(Sector, {
    foreignKey: 'category_id', // Matches the `category_id` field in the Sector model
    as: 'sectors', // Alias for accessing related sectors
});

module.exports = Sector