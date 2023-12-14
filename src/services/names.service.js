const { Names, Address } = require('../models');

const getAll = async () => {
  const names = await Names.findAll({
    include: [
      { Address },
    ]
  });
  return names;
}

module.exports = {
  getAll,
}