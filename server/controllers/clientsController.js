const ApiError = require("../error/ApiError");
const { Clients } = require("../models/models");

class ClientsController {
  async create(req, res) {
    const { fio, phone, email } = req.body;
    const client = await Clients.create({
      fio,
      phone,
      email,
    });
    return res.json(client);
  }
  async getAll(req, res) {
    const clients = await Clients.findAll();
    return res.json(clients);
  }
}

module.exports = new ClientsController();
