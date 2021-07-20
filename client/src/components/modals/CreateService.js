import React, { useState, useContext, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Dropdown, Form } from "react-bootstrap";
import { createService } from "../../http/servicesAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { fetchPositions } from "../../http/positionsAPI";

const CreateService = observer(({ show, onHide }) => {
  const { exact_position } = useContext(Context);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [takes_time, setTakes_time] = useState("");
  const [positionId, setPositionId] = useState(0);

  useEffect(() => {
    fetchPositions().then((data) => exact_position.setPositions(data.rows));
  }, [exact_position]);

  const addService = () => {
    createService({
      name: name,
      price: price,
      takes_time: takes_time,
      positionId: positionId,
    }).then((data) => {
      setName("");
      setPrice("");
      setTakes_time("");
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
          Добавить услугу
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder={"Название услуги"}
            className={"mt-3 p-2"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Control
            placeholder={"Цена"}
            className={"mt-3 p-2"}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <Form.Control
            placeholder={"Затрачиваемое время"}
            className={"mt-3 p-2"}
            value={takes_time}
            onChange={(e) => setTakes_time(e.target.value)}
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
        <Button onClick={addService} variant={"outline-success"}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateService;
