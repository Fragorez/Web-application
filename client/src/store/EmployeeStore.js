import { makeAutoObservable } from "mobx";

export default class EmployeeStore {
  constructor() {
    this._employees = [];
    this._selectedEmployee = {};
    makeAutoObservable(this);
  }

  setEmployees(employees) {
    this._employees = employees;
  }

  setSelectedEmployee(employee) {
    this._selectedEmployee = employee;
  }

  get getEmployees() {
    return this._employees;
  }

  get selectedEmployee() {
    return this._selectedEmployee;
  }
}
