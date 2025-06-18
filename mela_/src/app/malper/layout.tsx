// Bismillahirrahmanirahim 
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
"use client";
import { Alert, Row, Col } from "react-bootstrap";
import Mmmnavbar from "./components/mmnav";

import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/mmbingeh";
import { Phone, MessageCircle } from "lucide-react"; // Telefon ve WhatsApp ikonları için lucide-react kullanımı

import Mmmpage from "./mmxwarin/page";
import ContactForm from "./components/mmfrm";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Mmmnavbar />
      {children}

      <br />

       <Mmmpage />
      <br />
      <Row>





        

        <Col style={{ margin: "0 auto", maxWidth: "600px" }}>
          <ContactForm />
        </Col>
      </Row>
       
      <Row>
        <Col>
          <Alert
            variant="info"
            style={{
              backgroundColor: "#17a2b8",
              color: "white",
              fontSize: "0.9rem", // Daha küçük yazı boyutu
              padding: "10px", // Daha az iç boşluk
            }}
          >
            Sağlıklı Beslenme
          </Alert>
        </Col>
        <Col>
          <Alert
            variant="warning"
            style={{
              backgroundColor: "#ffc107",
              color: "black",
              fontSize: "0.9rem",
              padding: "10px",
            }}
          >
            Spor
          </Alert>
        </Col>
        <Col>
          <Alert
            variant="success"
            style={{
              backgroundColor: "#28a745",
              color: "white",
              fontSize: "0.9rem",
              padding: "10px",
            }}
          >
            Beslenme ve Diyetetik
          </Alert>
        </Col>
        <Col>
          <Alert
            variant="danger"
            style={{
              backgroundColor: "#dc3545",
              color: "white",
              fontSize: "0.9rem",
              padding: "10px",
            }}
          >
            Kilo Verme
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col>
          <Alert
            variant="primary"
            style={{
              backgroundColor: "#007bff",
              color: "white",
              fontSize: "0.9rem",
              padding: "10px",
            }}
          >
            Sporcu Beslenmesi
          </Alert>
        </Col>
        <Col>
          <Alert
            variant="secondary"
            style={{
              backgroundColor: "#6c757d",
              color: "white",
              fontSize: "0.9rem",
              padding: "10px",
            }}
          >
            Çocuk ve Ergen Beslenmesi
          </Alert>
        </Col>
        <Col>
          <Alert
            variant="dark"
            style={{
              backgroundColor: "#343a40",
              color: "white",
              fontSize: "0.9rem",
              padding: "10px",
            }}
          >
            Gebelikte Beslenme
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col>
          <Alert
            variant="light"
            style={{
              backgroundColor: "#f8f9fa",
              color: "black",
              fontSize: "0.9rem",
              padding: "10px",
            }}
          >
            Beden Kitle İndeksi
          </Alert>
        </Col>
        <Col>
          <Alert
            variant="dark"
            style={{
              backgroundColor: "#343a40",
              color: "white",
              fontSize: "0.9rem",
              padding: "10px",
            }}
          >
            Besin Değerleri
          </Alert>
        </Col>
      </Row>
     
      <Footer />
      {/* Sabit Telefon İkonu */}
      <div
        style={{
          position: "fixed",
          bottom: "20px", // Sayfanın altından 20px yukarıda
          left: "20px", // Sayfanın solundan 20px içeride
          backgroundColor: "blue", // Telefon ikonu için arka plan
          color: "white",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          zIndex: 1000, // Üstte görünmesi için
        }}
        onClick={() => window.location.href = "tel:+905439161344"} // Telefon numarası
      >
        <Phone size={24} color="white" />
      </div>

      {/* Sabit WhatsApp İkonu */}
      <div
        style={{
          position: "fixed",
          bottom: "20px", // Sayfanın altından 20px yukarıda
          right: "20px", // Sayfanın sağından 20px içeride
          backgroundColor: "#25d366", // WhatsApp yeşili
          color: "white",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          zIndex: 1000, // Üstte görünmesi için
        }}
        onClick={() => window.open("https://wa.me/905439161344", "_blank")} // WhatsApp numarası
      >
        <MessageCircle size={24} color="white" />
      </div>
     
    </div>
  );
}    