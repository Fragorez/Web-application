import React from "react";
import ServicesBar from "../components/ServicesBar";

import { Container } from "react-bootstrap";

const RecordingForm = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <ServicesBar />
    </Container>
  );
};

export default RecordingForm;
