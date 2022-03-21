import React from "react";
import "./SearchBar.css";
import lupa from "../../assets/magnifying-glass.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import preferences from "../../assets/equalizer.png";

export default function SearchBar({ setSearchTerm }) {
  const OnButtonClick = (text) => {
    setSearchTerm(text);
  };
  return (
    <Container fluid className=" search">
      <Row className="rsb">
        <Col className="sb" xs={1}>
          <img className="lupa" src={lupa} alt="lupa" />
        </Col>
        <Col className="sb" xs={10}>
          <input
            className="search-input"
            type="text"
            placeholder="Buscar remitente en la correspondencia"
            onChange={(event) => {
              OnButtonClick(event.target.value);
            }}
          />
        </Col>
        <Col className="sb" xs={1}>
          <img className="preferences" src={preferences} alt="preferences" />
        </Col>
      </Row>
    </Container>
  );
}
