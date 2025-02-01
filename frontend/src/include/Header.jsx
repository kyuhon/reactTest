import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Link1</Nav.Link>
            <Nav.Link href="#link">Link2</Nav.Link>
            <Nav.Link href="#link">Link3</Nav.Link>
            <Nav.Link href="#link">Link4</Nav.Link>
            <Nav.Link href="#link">Link5</Nav.Link>
            <NavDropdown title="설문" id="basic-nav-dropdown">
              <NavDropdown.Item href="/survey/view">설문조사</NavDropdown.Item>
              <NavDropdown.Item href="/survey/summary">
                설문통계
              </NavDropdown.Item>
              <NavDropdown.Item href="/survey/reserve">
                메뉴예약
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/memo">한줄메모장</NavDropdown.Item>
              <NavDropdown.Item href="/guestbook">방명록</NavDropdown.Item>
              <NavDropdown.Item href="/product/list">상품관리</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
