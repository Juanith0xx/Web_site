import { Card, Row, Col } from 'react-bootstrap';

function Products() {
  return (
    <div>
      <h1>Nuestros Productos</h1>
      
      <Row>
        {/* Primer producto */}
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/600x400" alt="Producto 3" />
            <Card.Body>
              <Card.Title>Primer Producto</Card.Title>
              <Card.Text>Descripción del producto.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Tercer producto */}
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/600x400" alt="Producto 3" />
            <Card.Body>
              <Card.Title>Segundo Producto</Card.Title>
              <Card.Text>Descripción del  producto.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Tercer producto */}
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/600x400" alt="Producto 3" />
            <Card.Body>
              <Card.Title>Tercer Producto</Card.Title>
              <Card.Text>Descripción del  producto.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Tercer producto */}
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/600x400" alt="Producto 3" />
            <Card.Body>
              <Card.Title>Cuarto Producto</Card.Title>
              <Card.Text>Descripción del producto.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Tercer producto */}
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/600x400" alt="Producto 3" />
            <Card.Body>
              <Card.Title>Quinto Producto</Card.Title>
              <Card.Text>Descripción del producto.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Tercer producto */}
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/600x400" alt="Producto 3" />
            <Card.Body>
              <Card.Title>Sexto Producto</Card.Title>
              <Card.Text>Descripción del producto.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Tercer producto */}
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/600x400" alt="Producto 3" />
            <Card.Body>
              <Card.Title>Septimo Producto</Card.Title>
              <Card.Text>Descripción del producto.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Tercer producto */}
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/600x400" alt="Producto 3" />
            <Card.Body>
              <Card.Title>Octavo Producto</Card.Title>
              <Card.Text>Descripción del producto.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Products;
