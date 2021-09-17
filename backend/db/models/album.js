'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users'
      },
    },
    title: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  });
  Album.associate = function(models) {
		Album.belongsTo(models.User, { foreignKey: 'userId' });
		Album.hasMany(models.Song, { foreignKey: 'albumId' });
  };
  return Album;
};