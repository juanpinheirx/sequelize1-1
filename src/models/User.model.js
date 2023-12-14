module.exports = (sequelize, DataTypes) => {
  const Names = sequelize.define(
    'Names',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      tableName: 'names',
      underscored: true,
    }
  );

  Names.associate = (models) => {
    Names.hasOne(models.Address, {
      foreignKey: 'owner',
      as: 'names',
    });

    return Names;
  };
};