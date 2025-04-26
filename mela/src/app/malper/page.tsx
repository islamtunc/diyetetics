// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import BasicExample from './components/mmslide';
import { Alert } from 'react-bootstrap';

function ContainerFluidExample() {
  return (
    <Container fluid>
     
      <Row>
      <Image src="https://rumeysaaltay.com/wp-content/uploads/2019/09/dengeli-beslen-640x427.jpg" alt="..." fluid />
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