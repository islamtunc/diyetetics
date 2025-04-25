// Bismillahirrahmanirrahim

"use client"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Mmmnavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/malper">DİYETİSYEN ROJDA MUSA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/malper">Anasayfa</Nav.Link>
            <Nav.Link href="/malper/mmavahi">Beslenme Programlarım</Nav.Link>

            <Nav.Link href="/malper/mmkargeh">Blog Yazıları</Nav.Link>

            <Nav.Link href="/malper/mmhewcedari">Programlar</Nav.Link>

            <Nav.Link href="/malper/mmwesayit">Hakkımızda </Nav.Link>

<Nav.Link href="/malper/mmkedkar">Yararlı Kaynaklar</Nav.Link>

<Nav.Link href="/malper/mmkinc">Galeri</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mmmnavbar;