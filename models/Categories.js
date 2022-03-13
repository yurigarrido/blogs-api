module.exports = (sequelize, DataTypes) => {
  const Categorie = sequelize.define('Categorie', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
  }, {
    timestamps: false,
    tableName: 'Categories',
  });

  // User.associate = (models) => {
  //   User.hasMany(models.Posts,
  //     { foreignKey: 'userId', as: 'posts' });
  // };

  return Categorie;
};