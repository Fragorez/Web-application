import { makeAutoObservable } from "mobx";

export default class ClientStore {
  constructor() {
    this._clients = [];
    this._selectedClient = {};
    makeAutoObservable(this);
  }

  setClients(client) {
    this._clients = client;
  }

  setSelectedClient(client) {
    this._selectedClient = client;
  }

  get getClients() {
    return this._clients;
  }

  get selectedClient() {
    return this._selectedClient;
  }
}
