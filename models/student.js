'use strict';
module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define('student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    DateOfBirth: DataTypes.DATE,
    mobile: DataTypes.INTEGER
  }, {});
  student.associate = function(models) {
    // associations can be defined here
  };
  return student;
};