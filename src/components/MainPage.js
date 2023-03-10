import { Image, Row, Col, Container } from 'react-bootstrap';

function MainPage() {
  return (
    <>
      <Row>
        <Col sm={6}>
          <h1>Video here</h1>
        </Col>
        <Col md={6}>
          <Container className='rounded headerBox'>
            <Row>
              <h1 className='display-2'>Rabbit</h1>
              <Image src='https://raw.githubusercontent.com/awoelf/Rabbit/main/assets/rabbit-mascot.svg' className='mascot'/>
            </Row>
            
            <p className='fs-4'>A mobile app that lets you chat with other users and catch up on news and weather</p>
          </Container>
        </Col>
      </Row>
    </>
  );
}

export default MainPage;
