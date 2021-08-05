import './App.css';
import {useState} from "react";

const App = () => {
  const [color, setColor] = useState({
    "red": 0,
    "green": 0,
    "blue": 0
  });

  const {red, green, blue} = color;

  const updateColor = ({target}) => {
    const {value, name} = target;
    setColor((prev) => ({...prev, [name]: color[name] + parseInt(value)}));
    console.log(color);
  }

  return (
    <div className="container">
      <div 
        className="color-box"
        style={{background: `RGB(${red},${green},${blue})`}}
      >   
      </div>
      <div>
        <Buttons 
          name="red"
          handleClick={updateColor}
          >
        </Buttons>
        <Buttons 
          name="green"
          handleClick={updateColor}
          >
        </Buttons>
        <Buttons 
          name="blue"
          handleClick={updateColor}
          >
        </Buttons>
      </div>
    </div>
  )
}

const Buttons = ({name, handleClick}) => {
  return (
    <div>
      <button 
        name={name} 
        onClick={handleClick}
        value="-5"
        >{"<"}</button>
      {name}
      <button 
        name={name} 
        onClick={handleClick}
        value="5"
        >{">"}</button>
    </div>
  )
}

export default App;