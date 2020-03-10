'use strict';
module.exports = (sequelize, DataTypes) => {
  const course = sequelize.define('course', {
    name: DataTypes.STRING,
    subTitle: DataTypes.STRING,
    price: DataTypes.DATE,
    description: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  course.associate = function(models) {
    // associations can be defined here
  };
  return course;
};