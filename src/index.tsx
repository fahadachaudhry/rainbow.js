// eslint-disable-next-line no-use-before-define
import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-bootstrap';

import './styles/App.scss';
import GenerateRainbow from './GenerateRainbow';
import InfoBlocks from './components/view/InfoBlocks';

/// ///////////////////////////////////////////////

ReactDOM.render(
  <React.StrictMode>
    <Container fluid className="p-0 overflow-hidden">
      <Row>
        <Col>
          <GenerateRainbow
            totalColors={20}
          />
          <div className="header">
            <h1 className="heading">RainbowJS</h1>
            <p className="tagline">A dead-simple rainbox generator made with React</p>
          </div>
          <GenerateRainbow
            totalColors={20}
          />
        </Col>
      </Row>
    </Container>
    <Container className="info-container">
      <InfoBlocks
        heading="Basic Syntax"
        text="This is how you do it!"
        syntax={`
      <GenerateRainbow
        totalColors={20}
      />        
        `}
        component={(
          <GenerateRainbow
            totalColors={20}
          />
        )}
      />
      <InfoBlocks
        heading="Customize"
        text="Try providing heights and widths of the colored blocks. Can be either percent (%) or Pixels (px)"
        syntax={`
      <GenerateRainbow
        totalColors={20}
        boxHeight="50px"
        boxWidth="20px"
      />      
        `}
        component={(
          <GenerateRainbow
            totalColors={20}
            boxHeight="50px"
            boxWidth="20px"
          />
        )}
      />
      <InfoBlocks
        heading="Customize Container"
        text="Size of the container can also be customized. Can be either percent (%) or Pixels (px)"
        syntax={`
      <GenerateRainbow
        totalColors={7}
        boxHeight="50px"
        boxWidth="20px"
        containerHeight="100px"
        containerWidth="100px"
      />    
        `}
        component={(
          <GenerateRainbow
            totalColors={7}
            boxHeight="50px"
            boxWidth="20px"
            // containerHeight="100px"
            // containerWidth="100px"
          />
        )}
      />
      <Row>
        <Col>
          <p className="coming-soon">Updates coming soon!</p>
        </Col>
      </Row>
    </Container>
    <GenerateRainbow
      totalColors={20}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);

/// ///////////////////////////////////////////////
