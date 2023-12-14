module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    number: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    owner: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
    city: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    timestamps: false,
    tableName: 'addresses',
    underscored: true,
  })

  Address.associate = (models) => {
     Address.belongsTo(models.Names, {
      foreignKey: 'owner', as: 'names'
     })
  }

  return Address;
}