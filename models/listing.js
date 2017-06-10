module.exports = function(sequelize, DataTypes) {
  var Listing = sequelize.define("Listing", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      len: [1]
      }
    },
    preferred_genre: {
      type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1]
      }
    },
    available: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    offer: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  return Listing;
};
