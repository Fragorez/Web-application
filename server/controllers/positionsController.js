const { Positions } = require("../models/models");
const ApiError = require("../error/ApiError");
class positionsController {
  async create(req, res) {
    const { name } = req.body;
    const position = await Positions.create({
      name,
    });
    return res.json(position);
  }

  async getAll(req, res) {
    const positions = await Positions.findAndCountAll();
    return res.json(positions);
  }
}

module.exports = new positionsController();
