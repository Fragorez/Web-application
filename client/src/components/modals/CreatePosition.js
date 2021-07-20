import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import { createPosition } from "../../http/positionsAPI";
import { observer } from "mobx-react-lite";

const CreatePosition = observer(({ show, onHide }) => {
  const [name, setName] = useState("");
  const addPosition = () => {
    createPosition({
      name: name,
    }).then((data) => {
      setName("");
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
          Добавить должность
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={"Название должности"}
            className={"mt-3 p-2"}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} variant={"outline-danger"}>
          Закрыть
        </Button>
        <Button onClick={addPosition} variant={"outline-success"}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreatePosition;
