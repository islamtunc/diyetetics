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
          <Card.Title>Psikoloji ve Beslenme</Card.Title>

          <Row className="g-4">
            {/* Sol Kolon */}
            <Col xs={12} md={6}>
              <Card style={{ textAlign: "center", height: "100%" }}>
                <Card.Body>
                  <Card.Title>Psikoloji ve Beslenme İlişkisi</Card.Title>
                  <Card.Text>
                    <br />
                    Psikoloji ve beslenme arasındaki ilişki, bireylerin zihinsel
                    ve duygusal durumlarının beslenme alışkanlıkları üzerindeki
                    etkisini anlamak açısından oldukça önemlidir. Araştırmalar,
                    sağlıklı bir diyetin sadece fiziksel sağlığı değil, aynı
                    zamanda zihinsel sağlığı da olumlu yönde etkilediğini
                    göstermektedir.
                    <br />
                    <br />
                    <strong>Beslenmenin Zihinsel Sağlık Üzerindeki Etkisi</strong>
                    <br />
                    Sağlıklı bir diyet, depresyon, anksiyete ve stres gibi
                    zihinsel sağlık sorunlarının önlenmesine yardımcı olabilir.
                    Omega-3 yağ asitleri, B vitaminleri ve magnezyum gibi
                    besinler, beyin fonksiyonlarını destekler ve ruh halini
                    iyileştirir.
                    <br />
                    <br />
                    <strong>Psikolojik Durumun Beslenme Üzerindeki Etkisi</strong>
                    <br />
                    Stres ve duygusal durumlar, bireylerin beslenme
                    alışkanlıklarını etkileyebilir. Örneğin, stres altındaki
                    bireyler genellikle yüksek kalorili ve düşük besin değerine
                    sahip yiyeceklere yönelir. Bu durum, uzun vadede hem fiziksel
                    hem de zihinsel sağlık sorunlarına yol açabilir.
                    <br />
                    <br />
                    <strong>Sonuç</strong>
                    <br />
                    Psikoloji ve beslenme arasındaki ilişki, bireylerin hem
                    zihinsel hem de fiziksel sağlıklarını iyileştirmek için
                    dikkate alınması gereken önemli bir faktördür. Sağlıklı bir
                    diyet ve olumlu bir zihinsel durum, genel yaşam kalitesini
                    artırabilir.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Sağ Kolon */}
            <Col xs={12} md={6}>
              <Image
                src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGhlYWx0aHklMjBmb29kfGVufDB8fHx8MTY4MzY5NzYxNQ&ixlib=rb-1.2.1&q=80&w=1080"
                style={{
                  border: "5px solid white", // Beyaz çerçeve
                  borderRadius: "10px",
                  width: "100%", // Mobil uyumlu genişlik
                  height: "auto", // Oranlı yükseklik
                }}
                alt="Psikoloji ve Beslenme"
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