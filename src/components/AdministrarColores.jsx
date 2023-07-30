import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


const AdministrarColores = () => {
  return (
    <section className="admColores colorSection">
      <Card border="info" style={{ width: "95%" }}>
        <Card.Header className='d-flex justify-content-center'>Paleta de Colores</Card.Header>
        <Card.Body className='d-flex flex-column align-items-center'>
            
            <section>
                <div className="colorSquare"></div>
                
            </section>
            <Button variant="primary">Guardar</Button>{' '}
          {/* <Card.Title>Info Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
        </Card.Body>
      </Card>
    </section>
  );
};

export default AdministrarColores;
