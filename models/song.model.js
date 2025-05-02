module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define("song", {
    song_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: false
    },
    album: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cover_url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Song;
};
