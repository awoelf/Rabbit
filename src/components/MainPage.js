import { useState } from 'react';
import { Image, Row, Col, Container } from 'react-bootstrap';

function MainPage() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <Row>
        <Col sm={6}>
          <script src='https://fast.wistia.com/embed/medias/rtmnhzrf58.jsonp' async></script>
          <script src='https://fast.wistia.com/assets/external/E-v1.js' async></script>
          <div className='wistia_responsive_padding'>
            <div
              className='wistia_responsive_wrapper'
            >
              <div
                className='wistia_embed wistia_async_rtmnhzrf58 videoFoam=true'
              >
                <div
                  className='wistia_swatch'
                  style={showVideo ? { opacity: 1 } : {opacity: 0}}
                >
                  <img
                    src='https://fast.wistia.com/embed/medias/rtmnhzrf58/swatch'
                    alt='Video demonstrating the features of Rabbit, a messaging app.'
                    className='wistia-video'
                    aria-hidden='true'
                    onLoad={() => setShowVideo(true)}
                  />
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <Container className='rounded headerBox'>
            <Row>
              <h1 className='display-2'>Rabbit</h1>
              <Image
                src='https://raw.githubusercontent.com/awoelf/Rabbit/main/assets/rabbit-mascot.svg'
                className='mascot'
              />
            </Row>

            <p className='fs-4'>
              A mobile app that lets you chat with other users and catch up on news and weather
            </p>
          </Container>
        </Col>
      </Row>
    </>
  );
}

export default MainPage;
