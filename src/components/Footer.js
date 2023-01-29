import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col className="text-center text-sm-end">
            <p>I hope you enjoyed your stay. Thanks for visiting and I wish you the best. Please stay in touch.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}