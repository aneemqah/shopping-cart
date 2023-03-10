import { Row, Col } from 'react-bootstrap';
import { products } from '../productsStore';
import ProductCard from '../components/ProductCard';

function Store() {
  return (
    <>
      <h1 align="center" className="p-3">
        Welcome to the store!
      </h1>
      {/* xs - show only 1 column */}
      {/* md - show only 3 column */}
      <Row xs={1} md={3} className="g-4">
        {products.map((product, index) => (
          <Col align="center" key={index}>
            {/* {p.title} */}
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Store;
