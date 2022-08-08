import { makeAutoObservable } from "mobx";

class State {
  role = "user";
  constructor() {
    makeAutoObservable(this);
  }
  setRole(newRole) {
    this.role = newRole;
  }
}

export default new State();
