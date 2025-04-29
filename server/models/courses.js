const { DataTypes } = require('sequelize');
const sequelize = require('../Database/db'); // Make sure to import your Sequelize instance

const Course = sequelize.define('Course', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  introduction: {
    type: DataTypes.STRING(300),
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER,
    validate: {
      min: 0,  // Ensures duration >= 0
    },
  },
  price: {
    type: DataTypes.INTEGER,
    defaultValue: 999,
    allowNull: false,
  },
  sector_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  delivery_method: {
    type: DataTypes.STRING(255),
  },
  overview: {
    type: DataTypes.STRING(5000),
    allowNull: false,
  },
  objective: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  why_attend: {
    type: DataTypes.STRING(2000),
  },
  prequisites: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  certification: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  agenda: {
    type: DataTypes.TEXT,
  },
},{
    timestamps:false
});

// Define the relationship to the sectors table
Course.belongsTo(require('./sectors'), {
  foreignKey: 'sector_id',
  onDelete: 'CASCADE',
});

module.exports = Course;
