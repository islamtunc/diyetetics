// Bismillahirahmanirahim

"use client"

import Nav from 'react-bootstrap/Nav';

function TabsExample() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">İlanlar</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Kategoride ara</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link >
          Yeni ilan ver
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default TabsExample;