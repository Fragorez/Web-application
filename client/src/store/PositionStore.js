import { makeAutoObservable } from "mobx";

export default class PositionStore {
  constructor() {
    this._allpositions = [];
    this._selectedPosition = {};
    makeAutoObservable(this);
  }

  setPositions(positions) {
    this._allpositions = positions;
  }

  setSelectedPosition(position) {
    this._selectedPosition = position;
  }

  get getPositions() {
    return this._allpositions;
  }

  get selectedPosition() {
    return this._selectedPosition;
  }
}
