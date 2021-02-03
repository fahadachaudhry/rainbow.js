interface IGenerateRainbowProps {
  totalColors?: number;
  boxHeight?: string;
  boxWidth?: string;
  containerHeight?: string;
  containerWidth?: string;
} 

const GenerateRainbow = (props:IGenerateRainbowProps) => {
  const {totalColors, 
    boxHeight, 
    boxWidth,
    containerHeight,
    containerWidth  ,
  } = props;

  const colors = [];
  for (let i = 0; i < totalColors; i+=1) {
    const color = "hsl(" + (360 * i / totalColors) + ",100%,50%)";
    colors.push(color);
  }

  const styles = {
    height: boxHeight,
    width: boxWidth
  }

  return (
    <div style={{width: containerWidth, height: containerHeight}}>
      <div className="rainbow-container">
      {
        colors.map((item) => (
          <span style={{ ...styles, backgroundColor: `${item}`}} />
          ))
        }
        </div>
    </div>
  );

}

GenerateRainbow.defaultProps = {
  totalColors: 7,
  boxHeight: '10px',
  boxWidth: '10%',
  containerHeight: "100%",
  containerWidth: "100%",  
}

export default GenerateRainbow;