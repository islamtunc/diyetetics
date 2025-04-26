// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
"use client";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import BasicExample from './components/mmslide';
import { Alert, Card } from 'react-bootstrap';
import mm from "../../../public/rjd.jpg";
function ContainerFluidExample() {
  return (
    <Container fluid>
     <br/>
      <Row>
      <Col>   <Card style={{ width: '25rem' }}>
            <Card.Body>
              <Card.Title>Özgeçmiş</Card.Title>
              <Card.Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam rerum laborum deserunt eveniet rem, doloribus tempore, molestias dolorum numquam voluptate magni commodi ab. Ad porro, culpa repellat voluptas repudiandae quos?
           
              </Card.Text>
            </Card.Body>
          </Card></Col>
        <Col>      <Image src={mm.src}     style={{
      border: "5px solid white", // Beyaz çerçeve
      borderRadius: "10px", // Köşeleri yuvarlatmak için
    }} alt="ROJDA MUSA" fluid />
        </Col>
        <Col>
        <Card style={{ width: '25rem' }}>
            <Card.Body>
              <Card.Title>Başka ...</Card.Title>
              <Card.Text>

<p>              Merhaba Ben diyetisyen rojda Musa sitemizin amacı sizlere güvenilir bilgi ve hizmet vermektir sağlıklı kilo alma,kilo verme ve birçok hastalık konusunda beslenme danışmanlığı hizmeti verme ve sağlıklı beslenmeyi bir yaşam tarzı haline getirmektir.           
</p>
             <br></br> <p>Sitemizde alternatif tarifler,beslenme programları ve diyet seçenekleri detaylı bir şekilde size sunulacaktır sizlere en uygun diyet programını oluşturmak için lütfen iletişim seçeneklerinden bizimle iletişime geçiniz</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>   
  <br/>

  
      <Row>

        <Col><BasicExample nav="Beslenmeye Dair" nivis="açıklama buraya gelecek"cih="/malper/mmavahi" wene="https://rumeysaaltay.com/wp-content/uploads/2019/09/dengeli-beslen-640x427.jpg"/> </Col>

        <Col><BasicExample nav="Blog Yazıları" nivis="açıklama buraya gelecek" cih="/malper/mmkargeh" wene="https://rumeysaaltay.com/wp-content/uploads/2019/09/dengeli-beslen-640x427.jpg"/> </Col>

        <Col><BasicExample nav="Programlarımız" nivis="açıklama buraya gelecek" cih="/malper/mmhewcedari" wene="https://rumeysaaltay.com/wp-content/uploads/2019/09/dengeli-beslen-640x427.jpg"/> </Col>

      </Row>
      <br/>
      <Row>
      <Col><BasicExample nav="Yararlı Kaynaklar" nivis="açıklama buraya gelecek" cih="/malper/mmkedkar" wene="https://rumeysaaltay.com/wp-content/uploads/2019/09/dengeli-beslen-640x427.jpg"/> </Col>
  
      <Col><BasicExample nav="Galeri" nivis="açıklama buraya gelecek" cih="/malper/mmkinc" wene="https://rumeysaaltay.com/wp-content/uploads/2019/09/dengeli-beslen-640x427.jpg"/> </Col>

      <Col><BasicExample nav="Hakkımda" nivis="açıklama buraya gelecek" cih="/malper/mmwesayit" wene="https://rumeysaaltay.com/wp-content/uploads/2019/09/dengeli-beslen-640x427.jpg"/> </Col>

      </Row>

    </Container>
  );
}

export default ContainerFluidExample;