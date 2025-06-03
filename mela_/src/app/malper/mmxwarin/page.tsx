// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
"use client";
import React, { useState } from "react";
import { Card, Row, Col, Form, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function Mmmpage() {
  const [weight, setWeight] = useState<string>(""); // Kullanıcının kilosu
  const [height, setHeight] = useState<string>(""); // Kullanıcının boyu
  const [bmi, setBmi] = useState<number | null>(null); // Hesaplanan BMI değeri
  const [category, setCategory] = useState<string>(""); // BMI kategorisi
  const [recommendation, setRecommendation] = useState<string>(""); // Öneriler

  const calculateBMI = () => {
    if (weight && height) {
      const weightValue = parseFloat(weight);
      const heightValue = parseFloat(height) / 100; // Boyu metreye çevir
      const bmiValue = weightValue / (heightValue * heightValue); // BMI formülü
      const roundedBmi = parseFloat(bmiValue.toFixed(2)); // BMI değerini 2 ondalık basamağa yuvarla
      setBmi(roundedBmi);

      // BMI kategorisi ve öneriler
      if (roundedBmi < 18.5) {
        setCategory("Zayıf");
        setRecommendation(
          "Kilonuz düşük. Daha dengeli ve kalorisi yüksek besinler tüketerek kilo almayı hedefleyebilirsiniz."
        );
      } else if (roundedBmi >= 18.5 && roundedBmi <= 24.9) {
        setCategory("Normal");
        setRecommendation(
          "Kilonuz ideal. Sağlıklı beslenmeye ve düzenli egzersize devam edin."
        );
      } else if (roundedBmi >= 25 && roundedBmi <= 29.9) {
        setCategory("Fazla Kilolu");
        setRecommendation(
          "Kilonuz fazla. Dengeli bir diyet ve düzenli egzersizle kilo vermeyi hedefleyebilirsiniz."
        );
      } else {
        setCategory("Obez");
        setRecommendation(
          "Kilonuz obezite sınırında. Bir diyetisyenle görüşerek sağlıklı bir kilo verme planı oluşturabilirsiniz."
        );
      }
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
          <Card.Title>Hesap Makinesi</Card.Title>

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
                        <strong>Kategori:</strong> {category}
                        <br />
                        <strong>Öneri:</strong> {recommendation}
                      </div>
                    )}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Sağ Kolon */}
            <Col xs={12} md={6}>
              <Image



src="https://st4.depositphotos.com/18753310/30840/v/950/depositphotos_308402596-stock-illustration-bmi-body-mass-index-vector.jpg"
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

export default Mmmpage;