import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './App.scss';
import GenerateRainbow from './GenerateRainbow';

/// ///////////////////////////////////////////////

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
    <div className="info-block">
    <div className="flex-50">
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
    </div>
    <div className="flex-50">
    {component}
    </div>
  </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
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
    <div className="info-container">
      <InfoBlocks
        heading="Basic Syntax"
        text="This is how you do it!"
        syntax={`
      <GenerateRainbow
        totalColors={20}
      />        
        `}
        component={      <GenerateRainbow
          totalColors={20}
          />}
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
        component={      
        <GenerateRainbow
          totalColors={20}
          boxHeight="50px"
          boxWidth="20px"
          />}
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
        component={      
        <GenerateRainbow
          totalColors={7}
          boxHeight="50px"
          boxWidth="20px"
          containerHeight="100px"
          containerWidth="100px"
          />
        }
      />
      <p className="coming-soon">Updates coming soon!</p>
    </div>
    <GenerateRainbow
      totalColors={20}
    />      
  </React.StrictMode>,
  document.getElementById('root'),
);

/// ///////////////////////////////////////////////
