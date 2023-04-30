import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
      <Nav className='ms-auto'>
      <Navbar.Brand as={Link} to="/"> University Health Network</Navbar.Brand>
      </Nav>
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Database Psets</Nav.Link>
            <Nav.Link as={Link} to="/api-psets">API Psets</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;