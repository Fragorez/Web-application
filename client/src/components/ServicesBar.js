import { observer } from "mobx-react-lite";
import React from "react";
import { fetchServices } from "../http/servicesAPI";
import { createClient, fetchClients } from "../http/clientsAPI";
import { createRecord } from "../http/recordsAPI";

import {
  Card,
  Container,
  Accordion,
  ListGroup,
  Form,
  Row,
  Button,
} from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { Context } from "../index";
import { fetchEmployees } from "../http/employeeAPI";

const ServicesBar = observer(() => {
  const { service } = useContext(Context);
  const { employee } = useContext(Context);
  const { schedule } = useContext(Context);
  const { exact_client } = useContext(Context);
  const [fio, setFio] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [date, setDate] = useState("");
  const [clientId, setClientId] = useState(0);
  const [employeeId, setEmployeeId] = useState(0);
  const [serviceId, setServiceId] = useState(0);
  var id;
  useEffect(() => {
    fetchServices().then((data) => service.setServices(data.rows));
    fetchEmployees().then((data) => employee.setEmployees(data));
    fetchClients().then((data) => exact_client.setClients(data));
  }, []);
  const addClient = () => {
    createClient({
      fio: fio,
      phone: phone,
      email: email,
    }).then((data) => {
      setFio("");
      setPhone("");
      setEmail("");
      id = data.id;
      console.log(id);
    });
  };
  const addRecord = () => {
    console.log("check");

    createRecord({
      date: date,
      comment: comment,
      clientId: id,
      employeeId: employeeId,
      serviceId: serviceId,
    }).then((data) => {
      setDate("");
      setComment("");
      setClientId("");
      setEmployeeId("");
      setServiceId("");
    });
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 1200 }} className="p-5">
        <h2 className="m-auto">Запись на услугу</h2>
        <Accordion className="mt-5">
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="0"
              style={{ cursor: "pointer" }}
            >
              Выберите услугу
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0" style={{ cursor: "pointer" }}>
              <Card.Body>
                <ListGroup>
                  {service.getServices.map((item) => (
                    <ListGroup.Item
                      style={{ cursor: "pointer" }}
                      active={item.id === service.selectedService.id}
                      onClick={() => {
                        service.setSelectedService(item);
                        setServiceId(item.id);
                      }}
                      key={item.id}
                    >
                      {item.name} {item.price} руб. Займет времени (в часах) -{" "}
                      {item.takes_time}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="1"
              style={{ cursor: "pointer" }}
            >
              Выберите мастера
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1" style={{ cursor: "pointer" }}>
              <Card.Body>
                <ListGroup>
                  {employee.getEmployees.map((item) => {
                    if (
                      service.selectedService.positionId === item.positionId
                    ) {
                      return (
                        <ListGroup.Item
                          style={{ cursor: "pointer" }}
                          active={item.id === employee.selectedEmployee.id}
                          onClick={() => {
                            employee.setSelectedEmployee(item);
                            setEmployeeId(item.id);
                          }}
                          key={item.id}
                        >
                          {item.first_name} {item.second_name}
                        </ListGroup.Item>
                      );
                    } else {
                    }
                  })}
                </ListGroup>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="2"
              style={{ cursor: "pointer" }}
            >
              Выберите время
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2" style={{ cursor: "pointer" }}>
              <Card.Body>
                <ListGroup>
                  {schedule.getSchedules.map((item) => {
                    if (employee.selectedEmployee.id === item.employeeId) {
                      return (
                        <ListGroup.Item
                          style={{ cursor: "pointer" }}
                          active={item.id === schedule.selectedSchedule.id}
                          onClick={() => schedule.setSelectedSchedule(item)}
                          key={item.id}
                        >
                          {item.weekday} в {item.start_time}
                        </ListGroup.Item>
                      );
                    } else {
                    }
                  })}
                </ListGroup>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="3"
              style={{ cursor: "pointer" }}
            >
              Укажите свои контактные данные
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3" style={{ cursor: "pointer" }}>
              <Card.Body>
                <Form className="d-flex flex-column">
                  <Form.Control
                    value={fio}
                    onChange={(e) => setFio(e.target.value)}
                    className="mt-3"
                    placeholder="Ф.И.О. (обязательно)"
                  />
                  <Form.Control
                    className="mt-3"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Введите ваш e-mail"
                  />
                  <Form.Control
                    className="mt-3"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7-***-***-**-** (обязательно)"
                  />
                  <Form.Control
                    as="textarea"
                    className="mt-3"
                    value={comment}
                    onChange={(e) => setComment(e.target.comment)}
                    placeholder="При желании можете оставить комментарий"
                    style={{ height: "100px" }}
                  />

                  <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                    <Button
                      onClick={() => {
                        addClient();
                        addRecord();
                      }}
                      variant={"outline-success"}
                    >
                      Записаться
                    </Button>
                  </Row>
                </Form>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Card>
    </Container>
  );
});

export default ServicesBar;
