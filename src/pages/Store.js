import { Row, Col } from 'react-bootstrap';

function Store() {
  return (
    <>
      <h1>Welcome to the store!</h1>
      {/* xs - show only 1 column */}
      {/* md - show only 3 column */}
      <Row xs={1} md={3} className="g-4">
        <Col align="center">
          <h1>Product</h1>
        </Col>
        <Col align="center">
          <h1>Product</h1>
        </Col>
        <Col align="center">
          <h1>Product</h1>
        </Col>
      </Row>
    </>
  );
}

export default Store;
