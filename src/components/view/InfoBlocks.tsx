// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Row, Col } from 'react-bootstrap';

interface IInfoBlocks{
  icon:any;
  heading:string;
  text:any;
  syntax:string;
  component:any;
}

const InfoBlocks = (props:IInfoBlocks) => {
  const {
    icon,
    heading,
    text,
    syntax,
    component,
  } = props;
  return (
    <Row className="info-block ">
      <Col lg={6} className="info-block-col-min-height">
        <h2 className="h1">
          {icon}
          {' '}
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
      <Col lg={6} className="component-showcase info-block-col-min-height">
        {component}
      </Col>
    </Row>
  );
};

export default InfoBlocks;
