const ApiError = require("../error/ApiError");
const { Records } = require("../models/models");
class recordsController {
  async create(req, res) {
    const { date, comment, clientId, employeeId, serviceId } = req.body;
    const record = await Records.create({
      date,
      comment,
      clientId,
      employeeId,
      serviceId,
    });
    return res.json(record);
  }

  async getAll(req, res) {
    const records = await Records.findAndCountAll();
    return res.json(records);
  }
}
module.exports = new recordsController();
