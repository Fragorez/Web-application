const ApiError = require("../error/ApiError");
const { Employees } = require("../models/models");

class EmployeesController {
  async create(req, res) {
    const {
      first_name,
      second_name,
      patronymic,
      birthday,
      work_address,
      positionId,
    } = req.body;
    const employee = await Employees.create({
      first_name,
      second_name,
      patronymic,
      birthday,
      work_address,
      positionId,
    });
    return res.json(employee);
  }
  async getAll(req, res) {
    const employees = await Employees.findAll();
    return res.json(employees);
  }
}

module.exports = new EmployeesController();
