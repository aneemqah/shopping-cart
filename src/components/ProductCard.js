import { Card } from 'react-bootstrap';

function ProductCard(props) {
  const product = props.product;
  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>£{product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
