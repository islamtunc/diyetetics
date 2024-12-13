



import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface MweneProps {
  mmcih: string | undefined;
  wene: string | undefined;
  nav: string;
}

function Mwene(props: MweneProps) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.wene} />
    <a href={props.mmcih}> <Card.Title>{props.nav}</Card.Title> </a>  
    </Card>
  );
}

export default Mwene;

