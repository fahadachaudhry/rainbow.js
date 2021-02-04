// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Row, Col } from 'react-bootstrap';

interface IInfoBlocks{
  heading:string;
  text:string;
  syntax:string;
  component:any;
}

const InfoBlocks = (props:IInfoBlocks) => {
  const {
    heading,
    text,
    syntax,
    component,
  } = props;
  return (
    <Row className="info-block">
      <Col lg={6}>
        <h2 className="h1">
          {heading}
        </h2>
        <p>
          {text}
        </p>
        <pre>
          <code className="language-js">
            {syntax}
          </code>
        </pre>
      </Col>
      <Col lg={6}>
        {component}
      </Col>
    </Row>
  );
};

export default InfoBlocks;
