const { Services } = require("../models/models");
const ApiError = require("../error/ApiError");
class servicesController {
  async create(req, res) {
    const { name, price, takes_time, positionId } = req.body;
    const service = await Services.create({
      name,
      price,
      takes_time,
      positionId,
    });
    return res.json(service);
  }

  async getAll(req, res) {
    const services = await Services.findAndCountAll();
    return res.json(services);
  }
}

module.exports = new servicesController();
