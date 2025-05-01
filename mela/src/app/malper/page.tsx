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



import mm3 from '../../../public/hsbs.jpg';
import mm1 from "../../../public/dy.jpg";
import mm5 from '../../../public/psbs.jpg';
import mm7 from '../../../public/spbs.jpg';
import mm9 from '../../../public/ce.jpg';
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

        <Col><BasicExample nav="Hastalıklar ve Beslenme" nivis="Her hastalığın kendine özel beslenmesi bulunmaktadır ve sahip olunan hastalığa göre özel diyet içerikleri uygulanmalıdır. Hastalıklar ve Beslenme için detaylı bilgilere yazılarımızdan ulaşabilirsiniz."cih="/malper/mmavahi" wene={mm3}/> </Col>

        <Col><BasicExample nav="Psikoloji ve Beslenme" nivis=" zaman zaman duygu durumlarımız değişiklik gösterebilmektedir ve bu durumda beslenme alışkanlıklarımızda değişebilmekte ve sağlıksız bir beslenme çeşidine yönelmekteyiz bu duurmlarla nasıl başa çıkmalıyız detaylara yazılarımızdan ulasabilrsiniz" cih="/malper/mmkargeh" wene={mm5} /> </Col>

        <Col><BasicExample nav="Diyet Çeşitleri" nivis="Belirli hastalık ve beslenme tarzlarında yapılan diyet farklılık gösterebilmektedir bazen yağdan bazen karbonhidrattan ya da proteinden zengin beslenmeler öne çıkabilmektedir hangi hastalık durumunda hangi diyet çeşidini tercih etmeliyiz sorusu için detaylı bilgilere diyet çeşitleri yazılarımızdan ulaşabilirsiniz." cih="/malper/mmhewcedari" wene={mm1}/> </Col>

      </Row>
      <br/>
      <Row>
      <Col><BasicExample nav="Sporcu Beslenmesi" nivis="Spor ve Beslenme birbirinden ayrılmaz bir ikilidir ve her spor çeşidinde beslenme farklılık gösterebilmektedir. Detaylı bilgilere  spor ve beslenme yazılarımızdan ulaşabilirsiniz" cih="/malper/mmkedkar" wene={mm7}/> </Col>
  
      <Col><BasicExample nav="Çocuk ve Ergen" nivis="Her yaş kategorisi farklı bir beslenme programı içermektedir belirli yaşlarda alınan vitamin ve mineraller önem göstermektedir çocuk ve ergenlerde beslenmede detaylı bilgilere yazılarımızdan ulaşabilirsiniz." cih="/malper/mmkinc" wene={mm9}/> </Col>

      <Col><BasicExample nav="Sağlıklı Tarifler" nivis="yaptığımız öğün sayısı ve aldığımız kalori kadar yediğimiz öğünlerin besin içerikleri de önemlidir en sağlıklı beslenme tariflerine yazılarımızdan ulaşabilirsiniz." cih="/malper/mmwesayit" wene="https://rumeysaaltay.com/wp-content/uploads/2019/09/dengeli-beslen-640x427.jpg"/> </Col>

      </Row>


    </Container>
  );
}

export default ContainerFluidExample;