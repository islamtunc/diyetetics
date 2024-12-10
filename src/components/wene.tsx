



import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface MweneProps {
  wene: string | undefined;
  nav: string;
}

function Mwene(props: MweneProps) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.wene} />
    <a href='/pages/avahi'> <Card.Title>{props.nav}</Card.Title> </a>  
    </Card>
  );
}

export default Mwene;

