// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
import React from "react";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react"; // Sosyal medya ikonları için lucide-react kullanımı

const Footer = () => (
  <footer style={{ background: "#343a40", color: "white", padding: "20px 0" }}>
    <div className="container text-center text-md-left">
      <div className="row">
        {/* Sol Bölüm */}
        <div className="col-md-4 mt-md-0 mt-3">
          <h5 className="text-uppercase font-weight-bold">Hakkımızda</h5>
          <p>
            Diyetetics, sağlıklı yaşam ve beslenme konusunda size rehberlik eder.
            Daha fazla bilgi için bizimle iletişime geçin.
          </p>
        </div>

        {/* Orta Bölüm */}
        <div className="col-md-4 mb-md-0 mb-3">
          <h5 className="text-uppercase font-weight-bold">İletişim</h5>
          <ul className="list-unstyled">
            <li>Telefon: +90 555 555 5555</li>
            <li>Email: info@diyetetics.com</li>
            <li>Adres: İstanbul, Türkiye</li>
          </ul>
        </div>

        {/* Sağ Bölüm */}
        <div className="col-md-4 mb-md-0 mb-3 text-center">
          <h5 className="text-uppercase font-weight-bold">Bizi Takip Edin</h5>
          <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
              <Facebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
              <Twitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
              <Instagram size={24} />
            </a>
            <a href="mailto:info@diyetetics.com" style={{ color: "white" }}>
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Alt Bölüm */}
    <div className="text-center py-3" style={{ borderTop: "1px solid #495057", marginTop: "20px" }}>
      © {new Date().getFullYear()} Diyetetics. Tüm hakları saklıdır.
    </div>
  </footer>
);

export default Footer;