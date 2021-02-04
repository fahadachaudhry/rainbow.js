// eslint-disable-next-line no-use-before-define
import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-bootstrap';

import './styles/App.scss';
import {
  BiCode, BiPaint, BiCrop, BiChevronRight,
} from 'react-icons/bi';

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
            boxHeight="3px"
            boxWidth="100%"
          />
          <div className="header">
            <h1 className="heading">RainbowJS</h1>
            <p className="tagline">A dead-simple rainbow generator made with React</p>
            <div className="d-flex align-items-center justify-content-center">
              <a rel="noreferrer" target="_blank" href="https://github.com/fahadachaudhry">
                <img alt="github-badge" src="https://img.shields.io/badge/Developed%20By-FahadAChaudhry-gray.svg?colorA=14161c&colorB=ff6b81&style=flat" />
              </a>
              &nbsp;
              <a rel="noreferrer" href="https://github.com/fahadachaudhry/rainbow.js/stargazers">
                <img alt="stars" src="https://img.shields.io/github/stars/fahadachaudhry/rainbow.js.svg?colorA=14161c&colorB=ff6b81&style=flat" />
              </a>
              &nbsp;
              <a rel="noreferrer" href="https://github.com/fahadachaudhry?tab=followers">
                <img alt="stars" src="https://img.shields.io/github/followers/fahadachaudhry.svg?colorA=14161c&colorB=ff6b81&style=flat" />
              </a>
            </div>
          </div>
          <GenerateRainbow
            totalColors={20}
            boxHeight="3px"
            boxWidth="100%"
          />
        </Col>
      </Row>
    </Container>
    <Container className="info-container">
      <InfoBlocks
        icon={<BiCode />}
        heading="Basic Syntax"
        text={<p>This is how you do it!</p>}
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
        icon={<BiPaint />}
        heading="Customize"
        text={(
          <p>
            Try providing heights and widths of the colored blocks. Can be either
            {' '}
            <span className="highlight">percent (%)</span>
            {' '}
            or
            {' '}
            <span className="highlight">Pixels (px)</span>
          </p>
        )}
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
        icon={<BiCrop />}
        heading="Customize Container"
        text={(
          <p>
            Size of the container can also be customized. Can be either
            {' '}
            <span className="highlight">percent (%)</span>
            {' '}
            or
            {' '}
            <span className="highlight">Pixels (px)</span>
          </p>
        )}
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
            containerHeight="100px"
            containerWidth="100px"
          />
        )}
      />
      <Row>
        <Col className="section">
          <h2>
            <BiChevronRight />
            Ready to start?
          </h2>
          <p className="coming-soon">
            Find the code on
            {' '}
            <a href="https://github.com/fahadachaudhry/rainbow.js">Github</a>
          </p>
        </Col>
      </Row>
    </Container>
    <GenerateRainbow
      totalColors={20}
      boxHeight="6px"
      boxWidth="100%"
    />
  </React.StrictMode>,
  document.getElementById('root'),
);

/// ///////////////////////////////////////////////
