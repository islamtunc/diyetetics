// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain

"use client"
import React from 'react'
import { Card, Row,Col } from 'react-bootstrap'

import Image from 'react-bootstrap/Image'
function page() {
  return (
    <div style={{ backgroundColor: '#f8f9fa', display: 'flex', justifyContent: 'center', alignItems: 'center',}}>

       <Card style={{ opacity: 0.7, color  : 'black',textAlign: 'center'}}>   
                  <Card.Body>
                    <Card.Title>Sporcu Beslenmesi</Card.Title>



      <Row>
      <Col>   <Card style={{ textAlign: 'center'}}>
            <Card.Body>
              <Card.Title>     Sporcularda beslenmenin önemi</Card.Title>
              <Card.Text> <br></br>
         
Sporcularda beslenme, performansın artırılması, toparlanma sürecinin hızlandırılması ve genel sağlığın korunması açısından kritik bir rol oynamaktadır.  Son dönem araştırmalar, beslenmenin sadece enerji alımı değil, aynı zamanda antrenman adaptasyonu, bağışıklık sistemi desteği ve zihinsel dayanıklılık üzerinde de etkili olduğunu göstermektedir. 

Makro ve Mikro Besinlerin Önemi

Sporcuların enerji ve protein ihtiyaçları, sedanter bireylere göre daha fazladır.  Bu nedenle karbonhidrat, protein ve yağ gibi makro besin ögelerinin dengeli alımı önemlidir.  Ayrıca, vitamin ve mineral gibi mikro besin ögeleri de performans ve toparlanma süreçlerinde kritik rol oynar.  Özellikle uzun süreli antrenmanlarda karbonhidrat tüketimi, kasların enerji ihtiyacını karşılamak için gereklidir.  

Beslenme Bilgisi ve Eğitim

Sporcuların beslenme alışkanlıkları, sahip oldukları beslenme bilgisiyle doğrudan ilişkilidir.  Yapılan bir çalışmada, genç yüzücüler arasında beslenme bilgisi düzeyi ile sağlıklı beslenme alışkanlıkları arasında pozitif bir ilişki bulunmuştur.   Bu durum, sporculara yönelik beslenme eğitimlerinin önemini ortaya koymaktadır. 

Vejetaryen ve Vegan Sporcular

Vejetaryen ve vegan beslenen sporcuların, hayvansal kaynaklı besinlerde bulunan bazı temel besin ögelerini yeterli miktarda alabilmeleri için beslenme planlarını dikkatli bir şekilde düzenlemeleri gerekmektedir.  Bu besin ögeleri arasında B12 vitamini, demir ve omega-3 yağ asitleri yer almaktadır.  

Sürdürülebilirlik ve Beslenme

Sporcu beslenmesinde sürdürülebilirlik de giderek önem kazanmaktadır.  Bitkisel kaynaklı besinlerin tercih edilmesi, hem çevresel etkilerin azaltılmasına katkı sağlar hem de sağlık açısından faydalar sunar.  

Sonuç

Sporcularda beslenme, sadece fiziksel performansı değil, aynı zamanda genel sağlığı, zihinsel dayanıklılığı ve uzun vadeli başarıyı etkileyen temel bir faktördür.  Bu nedenle, sporcuların bireysel ihtiyaçlarına uygun, dengeli ve bilinçli bir beslenme planı oluşturulması büyük önem taşımaktadır.
            </Card.Text>
            </Card.Body>
          </Card></Col>
        <Col>      <Image src="https://iasbh.tmgrup.com.tr/a9e335/0/0/0/0/0/0?u=https://isbh.tmgrup.com.tr/sb/album/2021/12/11/tum-beslenmeniz-degisiyor-iste-saat-1600dan-sonra-asla-tuketmemeniz-gereken-o-besin-1639200626070.jpg&mw=752&mh=700"     style={{
      border: "5px solid white", // Beyaz çerçeve
      borderRadius: "10px", 
    }} alt="ROJDA MUSA" fluid />
        </Col>
        
        
        
        
    
        </Row>  
    
                  </Card.Body>
                </Card>
    </div>
  )
}

export default page