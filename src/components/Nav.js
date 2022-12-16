import { Navbar, Button } from 'react-bootstrap';

function Nav() {
  return (
    <Navbar expand="sm">
      <Navbar.Brand href="/">Ecommerce</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
      <Button>Cart 0 Items</Button>
    </Navbar>
  );
}

export default Nav;
