import { Col, Row } from "react-bootstrap";

const MyFooter = () => {
  return (
    <div className="bg-dark text-light fixed-bottom">
      <Row>
        <Col className="text-center">Il meteo che fa per te</Col>
      </Row>
      <Row>
        <Col className="text-center">created by:Antonio Cancemi</Col>
      </Row>
    </div>
  );
};
export default MyFooter;
