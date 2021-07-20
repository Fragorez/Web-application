import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UserStore from "./store/UserStore";
import ServiceStore from "./store/ServiceStore";
import EmployeeStore from "./store/EmployeeStore";
import ScheduleStore from "./store/ScheduleStore";
import PositionStore from "./store/PositionStore";
import ClientStore from "./store/clientsStore";

export const Context = createContext(null);
ReactDOM.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      service: new ServiceStore(),
      employee: new EmployeeStore(),
      schedule: new ScheduleStore(),
      exact_position: new PositionStore(),
      exact_client: new ClientStore(),
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
