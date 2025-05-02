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
          <Card.Title>Diyet Çeşitleri</Card.Title>

          <Row className="g-4">
            {/* Sol Kolon */}
            <Col xs={12} md={6}>
              <Card style={{ textAlign: "center", height: "100%" }}>
                <Card.Body>
                  <Card.Title>Popüler Diyet Türleri</Card.Title>
                  <Card.Text>
                    <br />
                    Diyet çeşitleri, bireylerin sağlık hedeflerine, yaşam
                    tarzlarına ve beslenme ihtiyaçlarına göre farklılık
                    göstermektedir. İşte en popüler diyet türlerinden bazıları:
                    <br />
                    <br />
                    <strong>1. Ketojenik Diyet</strong>
                    <br />
                    Düşük karbonhidrat, yüksek yağ içeriği ile vücudu ketozise
                    sokarak yağ yakımını hızlandırmayı hedefler.
                    <br />
                    <br />
                    <strong>2. Akdeniz Diyeti</strong>
                    <br />
                    Zeytinyağı, sebze, meyve, tam tahıllar ve balık ağırlıklı
                    beslenme ile kalp sağlığını destekler.
                    <br />
                    <br />
                    <strong>3. Aralıklı Oruç</strong>
                    <br />
                    Belirli saatlerde yemek yeme ve diğer saatlerde oruç
                    tutmayı içerir. Metabolizmayı hızlandırabilir.
                    <br />
                    <br />
                    <strong>4. Vejetaryen ve Vegan Diyet</strong>
                    <br />
                    Hayvansal ürünlerin kısmen veya tamamen çıkarıldığı
                    beslenme türleridir. Çevresel ve etik nedenlerle tercih
                    edilir.
                    <br />
                    <br />
                    <strong>Sonuç</strong>
                    <br />
                    Diyet seçimi, bireyin sağlık durumu, yaşam tarzı ve
                    hedeflerine göre yapılmalıdır. Her diyet türü, doğru
                    uygulandığında sağlıklı bir yaşam tarzını destekleyebilir.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Sağ Kolon */}
            <Col xs={12} md={6}>
              <Image
                src="https://iasbh.tmgrup.com.tr/a9e335/0/0/0/0/0/0?u=https://isbh.tmgrup.com.tr/sb/album/2021/12/11/tum-beslenmeniz-degisiyor-iste-saat-1600dan-sonra-asla-tuketmemeniz-gereken-o-besin-1639200626070.jpg&mw=752&mh=700"
                style={{
                  border: "5px solid white", // Beyaz çerçeve
                  borderRadius: "10px",
                  width: "100%", // Mobil uyumlu genişlik
                  height: "auto", // Oranlı yükseklik
                }}
                alt="Diyet Çeşitleri"
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