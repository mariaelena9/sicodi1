import React from "react";
import "./Categories.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function Categories({ setSelectedButton, selectedMode }) {
  let buttons;
  function clickOn(val) {
    setSelectedButton(val);
  }
  if (selectedMode === "Principal" || selectedMode === "Recibidos") {
    buttons = (
      <ButtonGroup
        onClick={(evt) => {
          clickOn(evt.target.value);
        }}
        aria-label="Principal"
      >
        <Button variant="info" value="">
          Todos
        </Button>
        <Button variant="success" value="Importante">
          Importantes
        </Button>
        <Button variant="primary" value="Circular">
          Circulares
        </Button>
        <Button variant="warning" value="Paquetería">
          Paquetería
        </Button>
        <Button variant="danger" value="Oficio">
          Oficios
        </Button>
      </ButtonGroup>
    );
  } else if (selectedMode === "Enviados") {
    buttons = (
      <ButtonGroup
        onClick={(evt) => {
          clickOn(evt.target.value);
        }}
        aria-label="Enviado"
      >
        <Button className="bEnviado" variant="primary" value="">
          Todos
        </Button>
        <Button className="bEnviado" variant="danger" value="En Proceso">
          En Proceso
        </Button>
        <Button className="bEnviado" variant="warning" value="Enviado">
          Enviados
        </Button>
      </ButtonGroup>
    );
  } else {
    clickOn("");
    buttons = null;
  }
  return buttons;
}
