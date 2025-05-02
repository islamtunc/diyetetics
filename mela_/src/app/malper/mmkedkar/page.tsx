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
          <Card.Title>Sağlıklı Tarifler</Card.Title>

          <Row className="g-4">
            {/* Sol Kolon */}
            <Col xs={12} md={6}>
              <Card style={{ textAlign: "center", height: "100%" }}>
                <Card.Body>
                  <Card.Title>Sağlıklı ve Lezzetli Tarifler</Card.Title>
                  <Card.Text>
                    <br />
                    Sağlıklı tarifler, hem lezzetli hem de besleyici yemekler
                    hazırlamanıza olanak tanır. İşte sağlıklı bir yaşam tarzını
                    destekleyen bazı tarif önerileri:
                    <br />
                    <br />
                    <strong>1. Avokadolu Tam Tahıllı Tost</strong>
                    <br />
                    Tam tahıllı ekmek üzerine ezilmiş avokado, limon suyu ve
                    biraz tuz ekleyerek hızlı ve sağlıklı bir kahvaltı
                    hazırlayabilirsiniz.
                    <br />
                    <br />
                    <strong>2. Izgara Sebzeler</strong>
                    <br />
                    Kabak, patlıcan, biber ve mantar gibi sebzeleri zeytinyağı
                    ve baharatlarla marine edip ızgarada pişirin. Hem hafif hem
                    de lezzetli bir öğün elde edebilirsiniz.
                    <br />
                    <br />
                    <strong>3. Yoğurtlu Meyve Kasesi</strong>
                    <br />
                    Yoğurt, taze meyveler ve biraz granola ile sağlıklı bir
                    tatlı veya atıştırmalık hazırlayabilirsiniz.
                    <br />
                    <br />
                    <strong>Sonuç</strong>
                    <br />
                    Sağlıklı tarifler, hem bedeninizi hem de ruhunuzu
                    besleyebilir. Doğru malzemelerle hazırlanan yemekler, hem
                    lezzetli hem de besleyici olabilir.
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
                alt="Sağlıklı Tarifler"
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