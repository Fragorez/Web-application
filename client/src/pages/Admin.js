import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import CreateEmployee from "../components/modals/CreateEmployee";
import CreateService from "../components/modals/CreateService";
import CreatePosition from "../components/modals/CreatePosition";

const Admin = () => {
  const [employeeVisible, setEmployeeVisible] = useState(false);
  const [serviceVisible, setServiceVisible] = useState(false);
  const [positionVisible, setPositionVisible] = useState(false);

  return (
    <Container className="d-flex flex-column">
      <Button
        variant={"outline-dark"}
        className="mt-4 p-2"
        onClick={() => setPositionVisible(true)}
      >
        Добавить должность
      </Button>
      <Button
        variant={"outline-dark"}
        className="mt-4 p-2"
        onClick={() => setEmployeeVisible(true)}
      >
        Добавить сотрудника
      </Button>
      <Button
        variant={"outline-dark"}
        className="mt-4 p-2"
        onClick={() => setServiceVisible(true)}
      >
        Добавить услугу
      </Button>
      <CreatePosition
        show={positionVisible}
        onHide={() => setPositionVisible(false)}
      />
      <CreateEmployee
        show={employeeVisible}
        onHide={() => setEmployeeVisible(false)}
      />
      <CreateService
        show={serviceVisible}
        onHide={() => setServiceVisible(false)}
      />
    </Container>
  );
};

export default Admin;
