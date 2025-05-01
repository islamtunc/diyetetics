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
     <br/>  <br/>
      <Row>
      <Col>   <Card style={{ width: '25rem', height: '32rem',opacity: 0.7,textAlign: 'center'}}>
            <Card.Body>
              <Card.Title>Hoşgeldiniz</Card.Title>
              <Card.Text> <br></br>
              Sitemize hoşgeldiniz<br></br> doğru bilinen yanlışlardan kafanız mı karıştı?<br></br><br></br> kilo vermekte zorlanıyor musunuz?<br></br> Hastalığınız için nasıl beslenmeniz gerektiğini mi merak ediyorsunuz? <br></br><br></br>Sağlıklı bir yaşam mı sürmek istiyorsunuz?<br></br> O halde doğru adrestesiniz.
              <br></br> En güncel ve en güvenilir bilgilerle sağlık dolu bir yaşam için sitemizi takip edin.           
              </Card.Text>
            </Card.Body>
          </Card></Col>
        <Col>      <Image src={mm.src}     style={{
      border: "5px solid white", // Beyaz çerçeve
      borderRadius: "10px",  width: '25rem', 
    }} alt="ROJDA MUSA" fluid />
        </Col>
        
        
        
        
    
        <Col>
        <Card style={{ width: '25rem', height: '32rem',opacity: 0.7, color  : 'black',textAlign: 'center'}}>   
            <Card.Body>
              <Card.Title>Merhaba</Card.Title>
              <Card.Text>

<p>               Ben diyetisyen rojda Musa sitemizin amacı sizlere güvenilir bilgi ve hizmet vermektir sağlıklı kilo alma,kilo verme ve birçok hastalık konusunda beslenme danışmanlığı hizmeti verme ve sağlıklı beslenmeyi bir yaşam tarzı haline getirmektir.           
</p>
             <br></br> <p>Sitemizde alternatif tarifler,beslenme programları ve diyet seçenekleri detaylı bir şekilde size sunulacaktır sizlere en uygun diyet programını oluşturmak için lütfen iletişim seçeneklerinden bizimle iletişime geçiniz</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>   
  

  
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