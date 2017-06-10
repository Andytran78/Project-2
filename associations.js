module.exports = function(db) {
  db.Listing.belongsTo(db.User, { foreignKey: { allowNull: false } });
  db.User.hasMany(db.Listing, { onDelete: "cascade" });
};