import React from "react";
import {
  Day,
  Inject,
  Month,
  ScheduleComponent,
  Week,
} from "@syncfusion/ej2-react-schedule";
const Records = () => {
  return (
    <ScheduleComponent>
      <Inject services={[Day, Week, Month]} />
    </ScheduleComponent>
  );
};

export default Records;
