// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain

"use client";
import React, { useState } from "react";
import { Card, Row, Col, Form, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function page() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = parseFloat(height) / 100; // Boyu metreye çevir
      const bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
      setBmi(parseFloat(bmiValue.toFixed(2))); // BMI değerini 2 ondalık basamağa yuvarla
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px", // Mobil cihazlarda kenar boşluğu
      }}
    >
      <Card
        style={{
          opacity: 0.9,
          color: "black",
          textAlign: "center",
          maxWidth: "1200px", // İçeriği sınırlamak için
          width: "100%", // Mobil uyumlu genişlik
        }}
      >
        <Card.Body>
          <Card.Title>Diyetisyenler için Hesap Makinesi</Card.Title>

          <Row className="g-4">
            {/* Sol Kolon */}
            <Col xs={12} md={6}>
              <Card style={{ textAlign: "center", height: "100%" }}>
                <Card.Body>
                  <Card.Title>Beden Kitle İndeksi (BMI) Hesaplama</Card.Title>
                  <Card.Text>
                    <Form>
                      <Form.Group className="mb-3" controlId="formWeight">
                        <Form.Label>Kilonuz (kg)</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Kilonuzu giriniz"
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formHeight">
                        <Form.Label>Boyunuz (cm)</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Boyunuzu giriniz"
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                        />
                      </Form.Group>

                      <Button variant="primary" onClick={calculateBMI}>
                        Hesapla
                      </Button>
                    </Form>
                    <br />
                    {bmi && (
                      <div>
                        <strong>BMI Değeriniz:</strong> {bmi}
                        <br />
                        {bmi < 18.5
                          ? "Zayıf"
                          : bmi < 24.9
                          ? "Normal"
                          : bmi < 29.9
                          ? "Fazla Kilolu"
                          : "Obez"}
                      </div>
                    )}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Sağ Kolon */}
            <Col xs={12} md={6}>
              <Image
                src="https://i.pinimg.com/736x/e0/47/87/e04787721202bab7775024e57bdcfec7.jpg"
                style={{
                  border: "5px solid white", // Beyaz çerçeve
                  borderRadius: "10px",
                  width: "100%", // Mobil uyumlu genişlik
                  height: "auto", // Oranlı yükseklik
                }}
                alt="Hesap Makinesi"
                fluid
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default page;