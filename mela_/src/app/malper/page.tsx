// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
"use client";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Card } from "react-bootstrap";

function ContainerFluidExample() {
  return (
    <Container fluid>
      <br />
      <br />
      <Row>
        <Col>
          <Card
            style={{
              width: "25rem",
              height: "32rem",
              opacity: 0.7,
              textAlign: "center",
            }}
          >
            <Card.Body>
              <Card.Title>Hoşgeldiniz</Card.Title>
              <Card.Text>
                <br />
                Sitemize hoşgeldiniz
                <br />
                doğru bilinen yanlışlardan kafanız mı karıştı?
                <br />
                <br />
                kilo vermekte zorlanıyor musunuz?
                <br />
                Hastalığınız için nasıl beslenmeniz gerektiğini mi merak
                ediyorsunuz?
                <br />
                <br />
                Sağlıklı bir yaşam mı sürmek istiyorsunuz?
                <br />
                O halde doğru adrestesiniz.
                <br />
                En güncel ve en güvenilir bilgilerle sağlık dolu bir yaşam için
                sitemizi takip edin.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Image
            src="/rjd.jpg" // public klasöründen erişim
            style={{
              border: "5px solid white",
              borderRadius: "10px",
              width: "25rem",
            }}
            alt="ROJDA MUSA"
            fluid
          />
        </Col>
        <Col>
          <Card
            style={{
              width: "25rem",
              height: "32rem",
              opacity: 0.7,
              color: "black",
              textAlign: "center",
            }}
          >
            <Card.Body>
              <Card.Title>Merhaba</Card.Title>
              <Card.Text>
                <p>
                  Ben diyetisyen Rojda Musa. Sitemizin amacı sizlere güvenilir
                  bilgi ve hizmet vermektir. Sağlıklı kilo alma, kilo verme ve
                  birçok hastalık konusunda beslenme danışmanlığı hizmeti verme
                  ve sağlıklı beslenmeyi bir yaşam tarzı haline getirmektir.
                </p>
                <br />
                <p>
                  Sitemizde alternatif tarifler, beslenme programları ve diyet
                  seçenekleri detaylı bir şekilde size sunulacaktır. Sizlere en
                  uygun diyet programını oluşturmak için lütfen iletişim
                  seçeneklerinden bizimle iletişime geçiniz.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerFluidExample;