import { makeAutoObservable } from "mobx";

export default class ServiceStore {
  constructor() {
    this._services = [];
    this._selectedService = {};
    makeAutoObservable(this);
  }

  setServices(service) {
    this._services = service;
  }

  setSelectedService(service) {
    this._selectedService = service;
  }

  get getServices() {
    return this._services;
  }

  get selectedService() {
    return this._selectedService;
  }
}
