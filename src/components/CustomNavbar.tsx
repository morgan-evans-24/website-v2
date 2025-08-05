import { Container, Nav, Navbar } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLocation } from "react-router";
import "../css/CustomNavbar.css";

function CustomNavbar() {
  return (
    <Navbar
      sticky="top"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container
        fluid
        className="d-flex mx-3 justify-content-between align-items-center"
      >
        <Navbar.Brand className="m-0" href="/">
          Morgan Evans
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="" id="basic-navbar-nav">
          <hr className="d-lg-none w-100 my-2 border-top border-secondary" />
          {Tabs()}
          <hr className="d-lg-none w-100 my-2 border-top border-secondary" />
          {Socials()}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function Tabs() {
  const location = useLocation();
  return (
    <Nav
      className="flex-column flex-lg-row gap-3 mx-lg-auto align-items-start"
      variant="underline"
      defaultActiveKey={location.pathname}
    >
      <Nav.Link href="/" className="w-auto px-2">
        Home
      </Nav.Link>
      <Nav.Link href="/projects" className="w-auto px-2">
        My Projects
      </Nav.Link>
      <Nav.Link href="/aboutme" className="w-auto px-2">
        About Me
      </Nav.Link>
    </Nav>
  );
}

function Socials() {
  return (
    <Nav className="flex-row gap-3" variant="underline">
      <Nav.Link href="https://github.com/morgan-evans-24">
        <FaGithub size={24} />
      </Nav.Link>
      <Nav.Link href="https://www.linkedin.com/in/morgan-evans-236460290/">
        <FaLinkedin size={24} />
      </Nav.Link>
    </Nav>
  );
}

export default CustomNavbar;
