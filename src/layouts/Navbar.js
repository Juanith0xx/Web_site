import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet , Link } from "react-router-dom"


const NavBarExample = () => {
    return (
    <>  
    <Navbar className="navbg" variant="dark" expand="lg">
      <Container className="container">
        <Navbar.Brand as={Link} to="/">Logo de empresa</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="link">
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet></Outlet>
    
    </>
  );
};

export default NavBarExample