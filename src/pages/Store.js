import { Row, Col } from 'react-bootstrap';
import { products } from '../productsStore';

function Store() {
  return (
    <>
      <h1>Welcome to the store!</h1>
      {/* xs - show only 1 column */}
      {/* md - show only 3 column */}
      <Row xs={1} md={3} className="g-4">
        {products.map((p, index) => (
          <Col align="center" key={index}>
            {p.title}
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Store;
