import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

const NvBar = () => {
  const logo = "https://www.docplanner.com/img/logo-default-group-en.svg?v=1";
  const styles = {
    color: "#ababab",
  };

  const dep = [
    " Marketing & PR",
    " Customer Success & sales",
    " ITn Product, Data",
    "Finance & Administration",
    " HR & more",
  ];

  return (
    <header className="sticky">
      {window.addEventListener("scroll", function () {
        let heads = document.querySelector("header");
        heads.classList.toggle("sticky", window.scrollY);
      })}
      <img
        style={{ width: 268, height: 33, cursor: "pointer" }}
        src={logo}
        alt=""
      />

      <div>
        <Navbar expand="lg" className="bg-body-color">
          <Container>
            <Navbar />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link style={styles} href="#home">
                  About us
                </Nav.Link>
                <Nav.Link style={styles}>Career</Nav.Link>
                <NavDropdown title="Departments" id="basic-nav-dropdown">
                  {dep.map((el) => (
                    <NavDropdown.Item style={styles} href="#action/3.1">
                      {el}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
};

export default NvBar;
