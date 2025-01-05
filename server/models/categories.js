const { DataTypes } = require('sequelize');
const sequelize = require('../Database/db');

const Category = sequelize.define('Category', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	introduction: {
		type: DataTypes.STRING(1000),
		allowNull: false,
	},
	photo: {
		type: DataTypes.STRING,
		allowNull: true,
	},
});

module.exports = Category;
