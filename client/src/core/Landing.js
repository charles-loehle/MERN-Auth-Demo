import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Landing.css';

const Landing = () => {
  return (
    // <div className="Landing">
    //   <h1>Landing.js</h1>
    // </div>
    <div className="Landing">
      <Container>
        <Row>
          <Col>
            <h1>Landing.js</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae cumque laudantium ducimus dicta mollitia consequatur
              maiores expedita sed, quis fugit, distinctio officiis eaque
              assumenda. Minima consequuntur beatae quos expedita optio!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;
