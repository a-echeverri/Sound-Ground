'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users"
      },
    },
    songId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Songs"
      },
    },
    body: DataTypes.TEXT
  }, {});
  Comment.associate = function(models) {
		Comment.belongsTo(models.Song, { foreignKey: 'songId' });
		Comment.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Comment;
};