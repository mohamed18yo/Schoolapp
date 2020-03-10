'use strict';
module.exports = (sequelize, DataTypes) => {
  const teacher = sequelize.define('teacher', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    DateOfBirth: DataTypes.DATE,
    mobile: DataTypes.INTEGER
  }, {});
  teacher.associate = function(models) {
    // associations can be defined here
  };
  return teacher;
};