const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

// Create a new Sequelize model for Categories
class Category extends Model {}

Category.init(
  {
    // Define fields/columns on model
    // An `id` is automatically created by Sequelize, though best practice would be to define the primary key ourselves
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
