// Bismillahirrahmanirrahim

"use client"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Mmmnavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/malper">DİYETİSYEN ROJDA MUSA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/malper">Anasayfa</Nav.Link>
            <Nav.Link href="/malper/mmavahi">Sporcu Beslenmesi</Nav.Link>

            <Nav.Link href="/malper/mmkargeh">Hastalıklar ve Beslenme</Nav.Link>

            <Nav.Link href="/malper/mmhewcedari">Çocuk ve Ergenlerde Beslenme</Nav.Link>

            <Nav.Link href="/malper/mmwesayit">Diyet Çeşitleri </Nav.Link>

<Nav.Link href="/malper/mmkedkar">Sağlıklı Tarifler</Nav.Link>

<Nav.Link href="/malper/mmkinc">Psikoloji ve Beslenme</Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mmmnavbar;