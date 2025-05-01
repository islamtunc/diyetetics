// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
"use client"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(props:any) {
  return (
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={props.wene} />
      <Card.Body>
        <Card.Title>{props.nav}</Card.Title>
        <Card.Text>
        
        {props.nivis}
        </Card.Text>
        <Button  style={{
    background: "#0f2027", // Koyu mavi ton
    color: "#ffffff"}} href={props.cih} variant="primary">Daha fazla</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;