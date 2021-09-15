'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    url: DataTypes.STRING,
    title: DataTypes.STRING
  }, {});
  Song.associate = function(models) {
		Song.belongsTo(models.User, { foreignKey: 'userId' });
		Song.belongsTo(models.Album, { foreignKey: 'albumId' });
		Song.hasMany(models.Comment, {
			foreignKey: 'songId',
			onDelete: 'cascade',
			hooks: true,
		});
  };
  return Song;
};