import React from "react";
import "./MailItem.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import eye from "../../assets/eye.png";

export default function MailItem({ author, subject, content, area, status }) {
  return (
    <Container fluid className="item">
      <Row>
        <Col>
          <p className="author">{author}</p>
        </Col>
        <Col>
          <p className="status text-end">{area}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="subject">{subject}</p>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <p className="contentM">{content}</p>
        </Col>
        <Col xs={2}>
          {status ? <img className="imgStatus" src={eye} alt="view" /> : null}
        </Col>
      </Row>
    </Container>
  );
}
