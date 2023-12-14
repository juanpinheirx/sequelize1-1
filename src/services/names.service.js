const { Names, Address } = require('../models');

const getAll = async () => {
  const names = await Names.findAll({
    include: {
      model: Address, as: 'addresses',
    }
  });
  return names;
}

module.exports = {
  getAll,
}