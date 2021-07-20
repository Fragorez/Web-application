import React, { useContext, useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Dropdown, Form } from "react-bootstrap";
import { createEmployee } from "../../http/employeeAPI";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import { fetchPositions } from "../../http/positionsAPI";

const CreateEmployee = observer(({ show, onHide }) => {
  const { exact_position } = useContext(Context);
  const [first_name, setFirstName] = useState("");
  const [second_name, setSecondName] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [birthday, setBirthday] = useState("");
  const [work_address, setWorkAddress] = useState("");
  const [positionId, setPositionId] = useState(0);

  useEffect(() => {
    fetchPositions().then((data) => exact_position.setPositions(data.rows));
  }, [exact_position]);

  const addEmployee = () => {
    createEmployee({
      first_name: first_name,
      second_name: second_name,
      patronymic: patronymic,
      birthday: birthday,
      work_address: work_address,
      positionId: positionId,
    }).then((data) => {
      setFirstName("");
      setSecondName("");
      setPatronymic("");
      setBirthday("");
      setWorkAddress("");
      setPositionId("");

      onHide();
    });
  };
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить сотрудника
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder={"Имя"}
            className={"mt-3 p-2"}
          />
          <Form.Control
            value={second_name}
            onChange={(e) => setSecondName(e.target.value)}
            placeholder={"Фамилия"}
            className={"mt-3 p-2"}
          />
          <Form.Control
            value={patronymic}
            onChange={(e) => setPatronymic(e.target.value)}
            placeholder={"Отчество"}
            className={"mt-3 p-2"}
          />
          <Form.Control
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            placeholder={"Дата рождения"}
            className={"mt-3 p-2"}
          />
          <Form.Control
            value={work_address}
            onChange={(e) => setWorkAddress(e.target.value)}
            placeholder={"Адрес работы"}
            className={"mt-3 p-2"}
          />
          <Dropdown>
            <Dropdown.Toggle className="mt-4 mb-2">
              {exact_position.selectedPosition.name || "Выберите должность"}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {exact_position.getPositions.map((ex_position) => (
                <Dropdown.Item
                  onClick={() => {
                    exact_position.setSelectedPosition(ex_position);
                    setPositionId(exact_position.selectedPosition.id);
                  }}
                  key={ex_position.id}
                >
                  {ex_position.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} variant={"outline-danger"}>
          Закрыть
        </Button>
        <Button onClick={addEmployee} variant={"outline-success"}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateEmployee;
