// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain

"use client";
import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function page() {
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
          <Card.Title>Hastalıklar ve Beslenme</Card.Title>

          <Row className="g-4">
            {/* Sol Kolon */}
            <Col xs={12} md={6}>
              <Card style={{ textAlign: "center", height: "100%" }}>
                <Card.Body>
                  <Card.Title>Hastalıklar ve Beslenmenin Önemi</Card.Title>
                  <Card.Text>
                    <br />
                    Beslenme, birçok hastalığın önlenmesi ve tedavisinde kritik
                    bir rol oynar. Doğru beslenme alışkanlıkları, bağışıklık
                    sistemini güçlendirir, kronik hastalıkların riskini azaltır
                    ve genel sağlığı destekler.
                    <br />
                    <br />
                    <strong>1. Diyabet ve Beslenme</strong>
                    <br />
                    Diyabet hastaları için düşük glisemik indeksli gıdalar
                    tercih edilmelidir. Kan şekeri seviyesini dengelemek için
                    düzenli öğünler ve dengeli karbonhidrat alımı önemlidir.
                    <br />
                    <br />
                    <strong>2. Kalp Hastalıkları ve Beslenme</strong>
                    <br />
                    Kalp sağlığını korumak için doymuş yağlardan kaçınılmalı,
                    omega-3 yağ asitleri, tam tahıllar ve sebzeler tüketilmelidir.
                    <br />
                    <br />
                    <strong>3. Obezite ve Beslenme</strong>
                    <br />
                    Obezite ile mücadelede düşük kalorili, yüksek besin
                    değerine sahip gıdalar tercih edilmelidir. Fiziksel aktivite
                    ile desteklenen bir diyet programı uygulanmalıdır.
                    <br />
                    <br />
                    <strong>Sonuç</strong>
                    <br />
                    Beslenme, hastalıkların önlenmesi ve tedavisinde temel bir
                    unsurdur. Her bireyin sağlık durumuna uygun bir beslenme
                    planı oluşturulmalıdır.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Sağ Kolon */}
            <Col xs={12} md={6}>
              <Image
                src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGhlYWx0aHklMjBmb29kfGVufDB8fHx8MTY4MzY5NzYxNQ&ixlib=rb-1.2.1&q=80&w=1080"
                style={{
                  border: "5px solid white", // Beyaz çerçeve
                  borderRadius: "10px",
                  width: "100%", // Mobil uyumlu genişlik
                  height: "auto", // Oranlı yükseklik
                }}
                alt="Hastalıklar ve Beslenme"
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