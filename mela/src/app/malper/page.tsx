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
        <Col>      <Image src={mm.src} alt="..." fluid />
        </Col>
        <Col>
        <Card style={{ width: '25rem' }}>
            <Card.Body>
              <Card.Title>Başka ...</Card.Title>
              <Card.Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam rerum laborum deserunt eveniet rem, doloribus tempore, molestias dolorum numquam voluptate magni commodi ab. Ad porro, culpa repellat voluptas repudiandae quos?
           
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