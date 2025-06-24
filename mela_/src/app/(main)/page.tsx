// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
"use client"
import React from "react";
import { Alert, Container, Row, Col, Card, Button } from "react-bootstrap";

function AdminPage() {
  return (
    <Container fluid style={{ background: "#f8f9fa", minHeight: "100vh", padding: "20px" }}>
      <Row>
        <Col>
          <Alert variant="success" style={{ textAlign: "center", fontSize: "18px" }}>
            Selam Aleykum dear Customer or Developer, Welcome to Admin Panel
          </Alert>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Alert
            style={{
              background: "green",
              color: "white",
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            Sernameye name nameye Allah <br />
            Be namaye nameye kemi wi Wallah
          </Alert>
        </Col>
      </Row>

      <Row>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Sporcu Beslenmesi</Card.Title>
              <Card.Text>Sporcu beslenmesi sayfasını düzenleyin veya görüntüleyin.</Card.Text>
              <Button variant="primary" href="/mmavahi">
                Git
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Psikoloji ve Beslenme Sayfası</Card.Title>
              <Card.Text>Psikoloji beslenmesi sayfasını düzenleyin veya görüntüleyin.</Card.Text>
              <Button variant="primary" href="/mmkinc">
                Git
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Hastalıklar ve Beslenme Sayfası</Card.Title>
              <Card.Text>Beslenme programlarını yönetin.</Card.Text>
              <Button variant="primary" href="/mmkargeh">
                Git
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Diyet Çeşitleri Sayfası</Card.Title>
              <Card.Text>Programlarınızı düzenleyin veya görüntüleyin.</Card.Text>
              <Button variant="primary" href="/mmwesayit">
                Git
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Sğlıklı Tarifler</Card.Title>
              <Card.Text>Blog yazılarınızı yönetin ve düzenleyin.</Card.Text>
              <Button variant="primary" href="/mmkedkar">
                Git
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Site</Card.Title>
              <Card.Text>Siteyi görüntüleyin.</Card.Text>
              <Button variant="primary" href="/malper">
                Git
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminPage;