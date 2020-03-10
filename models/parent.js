'use strict';
module.exports = (sequelize, DataTypes) => {
  const parent = sequelize.define('parent', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    DateOfBirth: DataTypes.DATE,
    mobile: DataTypes.INTEGER
  }, {});
  parent.associate = function(models) {
    // associations can be defined here
  };
  return parent;
};