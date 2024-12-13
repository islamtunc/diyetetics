

"use client"

import Mwene from '@/components/wene';
import React from 'react';
import {Row,Col, Container}from 'react-bootstrap'
const Page: React.FC = () => {
  return (
    <Container>
      <Row>



      <Col>



<Mwene nav={'EMLAK'} wene={"https://www.aladaginsaatkibris.com/tema/genel/uploads/haberler/emlak-nedir-aladag-insaat.jpg"} mmcih='/pages/mmavahi'/>

<Mwene nav={'Arabalar'} wene={"https://www.aladaginsaatkibris.com/tema/genel/uploads/haberler/emlak-nedir-aladag-insaat.jpg"} mmcih='pages/mmwesayit'/>

</Col>
        <Col>
        
        
        
        <Mwene nav={'İnşaaT iŞ İlanları'} wene={"https://www.aladaginsaatkibris.com/tema/genel/uploads/haberler/emlak-nedir-aladag-insaat.jpg"} mmcih='pages/mmkedkar'/>

        <Mwene nav={'EMLAK'} wene={"https://www.aladaginsaatkibris.com/tema/genel/uploads/haberler/emlak-nedir-aladag-insaat.jpg"} mmcih='pages/mmkinc'/>

        </Col>
      </Row>
      <Row>

      <Col>



<Mwene nav={'EMLAK'} wene={"https://www.aladaginsaatkibris.com/tema/genel/uploads/haberler/emlak-nedir-aladag-insaat.jpg"} mmcih='pages/mmkinc' />


<Mwene nav={'EMLAK'} wene={"https://www.aladaginsaatkibris.com/tema/genel/uploads/haberler/emlak-nedir-aladag-insaat.jpg"} mmcih='pages/mmhuner'/>

</Col>


</Row>
    </Container>
  );
};

export default Page;

