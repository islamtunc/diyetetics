// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
"use client";
import React from "react";
import { Card, Row, Col, Alert } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import ForYouFeed from "./ForYouFeed";

function page() {
  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        width: "100vw",
        maxWidth: "100vw",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 0,
        margin: 0,
      }}
    >
      <div className="container-fluid px-2 px-md-4 py-4" style={{maxWidth: '1200px', width: '100%'}}>
        <h1 className="text-center mb-4" style={{fontSize: '2rem', fontWeight: 600}}>Sporcu Beslenmesi</h1>
        <div className="row g-4 align-items-stretch">
          {/* Sol Kolon */}
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <div className="h-100 p-4 bg-white rounded-3 shadow-sm d-flex flex-column justify-content-center">
              <h2 className="mb-3" style={{fontSize: '1.2rem', fontWeight: 500}}>Sporcularda beslenmenin önemi</h2>
              <p style={{fontSize: '1rem', marginBottom: 0}}>
                Sporcularda beslenme, performansın artırılması, toparlanma sürecinin hızlandırılması ve genel sağlığın korunması açısından kritik bir rol oynamaktadır. Son dönem araştırmalar, beslenmenin sadece enerji alımı değil, aynı zamanda antrenman adaptasyonu, bağışıklık sistemi desteği ve zihinsel dayanıklılık üzerinde de etkili olduğunu göstermektedir.
                <br /><br />
                <strong>Makro ve Mikro Besinlerin Önemi</strong>
                <br />
                Sporcuların enerji ve protein ihtiyaçları, sedanter bireylere göre daha fazladır. Bu nedenle karbonhidrat, protein ve yağ gibi makro besin ögelerinin dengeli alımı önemlidir. Ayrıca, vitamin ve mineral gibi mikro besin ögeleri de performans ve toparlanma süreçlerinde kritik rol oynar.
                <br /><br />
                <strong>Sonuç</strong>
                <br />
                Sporcularda beslenme, sadece fiziksel performansı değil, aynı zamanda genel sağlığı, zihinsel dayanıklılığı ve uzun vadeli başarıyı etkileyen temel bir faktördür.
              </p>
            </div>
          </div>
          {/* Sağ Kolon */}
          <div className="col-12 col-md-6 d-flex align-items-center">
            <img
              src="https://iasbh.tmgrup.com.tr/a9e335/0/0/0/0/0/0?u=https://isbh.tmgrup.com.tr/sb/album/2021/12/11/tum-beslenmeniz-degisiyor-iste-saat-1600dan-sonra-asla-tuketmemeniz-gereken-o-besin-1639200626070.jpg&mw=752&mh=700"
              alt="ROJDA MUSA"
              className="img-fluid rounded-3 shadow-sm w-100"
              style={{border: '5px solid white', maxHeight: '420px', objectFit: 'cover'}}
            />
          </div>
        </div>
      </div>
      {/* Alert ve ForYouFeed Alt Kısma Taşındı */}
    </div>
  );
}

export default page;