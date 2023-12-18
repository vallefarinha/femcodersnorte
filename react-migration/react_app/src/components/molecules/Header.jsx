import ButtonNav from "../atoms/ButtonNav";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <Navbar expand="md" className="navbar bg-body-tertiary">
      <Navbar.Brand href="#home">
        <img
          src="../src/assets/logo/logo.svg"
          width="150"
          height="100"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="nav-menu">
        <Nav className="ml-auto">
          <Nav.Link href="#home">DESCRIPTION</Nav.Link>
          <Nav.Link href="#link">FEATURES</Nav.Link>
          <Nav.Link href="#link">SCREENS</Nav.Link>
          <Nav.Link>
            <NavDropdown title="EXTRA" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">EXTRA</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
          </Nav.Link>
          <Nav.Link>
            <a href="https://factoriaf5.org/">
              <ButtonNav type="button" className="rounded-pill btn-download fw-bold">
                DOWNLOAD
              </ButtonNav>
            </a>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
