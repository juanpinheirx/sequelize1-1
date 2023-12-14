const { namesService } = require('../services');

const getAll = async (_req, res) => {
  try {
    const names = await namesService.getAll();
    return res.status(200).json(names);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Houve um erro' })
  }
}

module.exports = {
  getAll,
}