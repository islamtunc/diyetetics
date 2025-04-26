// Bismillahirahmanirahim 
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
"use client";
import { Alert, Row ,Col} from "react-bootstrap";
import Mmmnavbar from "./components/mmnav";

import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./components/mmbingeh";
import { Phone, MessageCircle } from "lucide-react"; // Telefon ve WhatsApp ikonları için lucide-react kullanımı

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Mmmnavbar />
      {children}
      <br/> 
      <Row>
        <Col><Alert variant="primary">Sağlıklı Beslenme</Alert></Col>
        <Col><Alert variant="secondary">Spor</Alert></Col>
        <Col><Alert variant="success">Beslenme ve Diyetetik</Alert></Col>
   
        <Col><Alert variant="success">Kilo Verme</Alert></Col>

     </Row>   
      <Row>
      <Col><Alert variant="primary">.....</Alert></Col>
        <Col><Alert variant="secondary">Mela Malperi</Alert></Col>
        <Col><Alert variant="success">Mela Malperi</Alert></Col>
    
    </Row>

    <Row>
      <Col><Alert variant="primary">.....</Alert></Col>
        <Col><Alert variant="secondary">Mela Malperi</Alert></Col>
    
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
        onClick={() => window.location.href = "tel:+905549765692"} // Telefon numarası
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
        onClick={() => window.open("https://wa.me/905549765692", "_blank")} // WhatsApp numarası
      >
        <MessageCircle size={24} color="white" />
      </div>
    </div>
  );
}