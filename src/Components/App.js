import './App.css';
import {useState} from "react";

const App = () => {
  const [color, setColor] = useState({
    "red": 0,
    "green": 0,
    "blue": 0,
    "opacity": 100
  });

  const {red, green, blue, opacity} = color;

  const updateColor = ({target}) => {
    const {value, name} = target;
    setColor((prev) => ({...prev, [name]: parseInt(value)}));
  }

  const hexValue = "#" + red.toString(16).padStart(2, "0") + green.toString(16).padStart(2, "0") + blue.toString(16).padStart(2, "0") + Math.round(opacity * 2.55).toString(16).padStart(2, "0");

  return (
    <div className="container">
      <div 
        className="color-box"
        style={{background: `RGBA(${red},${green},${blue},${opacity/100})`}}
      >   
      </div>
      <div>
        <Slider 
          name="red"
          min="0"
          max="255"
          defaultValue="0"
          handleChange={updateColor}
          color={color}
          >
        </Slider>
        <Slider 
          name="green"
          min="0"
          max="255"
          defaultValue="0"
          handleChange={updateColor}
          color={color}
          >
        </Slider>
        <Slider 
          name="blue"
          min="0"
          max="255"
          defaultValue="0"
          handleChange={updateColor}
          color={color}
          >
        </Slider>
        <Slider 
          name="opacity"
          min="0"
          max="100"
          defaultValue="100"
          handleChange={updateColor}
          color={color}
          >
        </Slider>
        <div>
          <p>RGBA({red}, {green}, {blue}, {(opacity/100).toFixed(1)})</p>
          <p>{hexValue}</p>
        </div>
      </div>
    </div>
  )
}

// const Buttons = ({name, handleClick}) => {
//   return (
//     <div>
//       <button 
//         name={name} 
//         onClick={handleClick}
//         value="-5"
//         >{"<"}</button>
//       {name}
//       <button 
//         name={name} 
//         onClick={handleClick}
//         value="5"
//         >{">"}</button>
//     </div>
//   )
// }

const Slider = ({name, handleChange, color, min, max, defaultValue}) => {
  return (
    <div>
      <span>{name}</span>
      <input 
        name={name}
        type="range" 
        min={min} 
        max={max}
        onChange={handleChange}
        defaultValue={defaultValue}
      ></input>
      <input
        type="number"
        name={name}
        onChange={handleChange}
        value={color[name]}
      ></input>
      {name === "opacity" && <span>%</span>}
    </div>
  )
}

export default App;