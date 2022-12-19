import { Navbar, Button, Modal } from 'react-bootstrap';
import { useState } from 'react';

function Nav() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Ecommerce</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
        <Button onClick={handleShow}>Cart 0 Items</Button>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <h1>Lorem ipsum dolor sit amet.</h1>
      </Modal>
    </>
  );
}

export default Nav;
