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
          <Card.Title>Çocuklarda ve Ergenlerde Beslenme</Card.Title>

          <Row className="g-4">
            {/* Sol Kolon */}
            <Col xs={12} md={6}>
              <Card style={{ textAlign: "center", height: "100%" }}>
                <Card.Body>
                  <Card.Title>Sağlıklı Beslenmenin Önemi</Card.Title>
                  <Card.Text>
                    <br />
                    Çocukluk ve ergenlik dönemleri, büyüme ve gelişmenin en hızlı
                    olduğu dönemlerdir. Bu süreçte sağlıklı beslenme, fiziksel
                    büyüme, zihinsel gelişim ve bağışıklık sistemi için kritik
                    bir rol oynar.
                    <br />
                    <br />
                    <strong>1. Dengeli Beslenme</strong>
                    <br />
                    Çocukların ve ergenlerin günlük diyetlerinde karbonhidrat,
                    protein, yağ, vitamin ve minerallerin dengeli bir şekilde
                    bulunması gerekir. Özellikle kalsiyum ve D vitamini, kemik
                    gelişimi için önemlidir.
                    <br />
                    <br />
                    <strong>2. Fast Food ve Şeker Tüketimi</strong>
                    <br />
                    Fast food ve şekerli yiyeceklerin aşırı tüketimi, obezite ve
                    diğer sağlık sorunlarına yol açabilir. Bu nedenle, bu tür
                    yiyeceklerin tüketimi sınırlandırılmalıdır.
                    <br />
                    <br />
                    <strong>3. Su Tüketimi</strong>
                    <br />
                    Çocuklar ve ergenler, yeterli miktarda su tüketmelidir.
                    Su, vücudun düzgün çalışması ve toksinlerin atılması için
                    gereklidir.
                    <br />
                    <br />
                    <strong>Sonuç</strong>
                    <br />
                    Sağlıklı beslenme alışkanlıkları, çocukların ve ergenlerin
                    hem fiziksel hem de zihinsel gelişimlerini destekler. Bu
                    alışkanlıklar, yaşam boyu sürecek sağlıklı bir yaşam tarzının
                    temelini oluşturur.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Sağ Kolon */}
            <Col xs={12} md={6}>
              <Image
                src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNoaWxkcmVufGVufDB8fHx8MTY4MzY5NzYxNQ&ixlib=rb-1.2.1&q=80&w=1080"
                style={{
                  border: "5px solid white", // Beyaz çerçeve
                  borderRadius: "10px",
                  width: "100%", // Mobil uyumlu genişlik
                  height: "auto", // Oranlı yükseklik
                }}
                alt="Çocuklarda ve Ergenlerde Beslenme"
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