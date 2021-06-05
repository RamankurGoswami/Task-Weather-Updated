import { useState } from 'react';
import './App.css';
import icon from './task2 icon.svg';
import Weather from "./components/Weather"
import axios from "axios"
import { useDispatch } from "react-redux"
import { weatherDataReducer } from './reducers/reducer'

var city;

function App() {

  const dispatch = useDispatch()

  const [select, setselected] = useState(false);

  const addlocation = () => { 

    city = prompt("Enter your location")

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=25ccd394222be860c116a9453630048b&units=metric`

    axios.get(url)
      .then((res) => {
        console.log(res);
        dispatch(weatherDataReducer(res.data));
      })
      
    setselected(true);
  }

  return (
    <div className="App">
        <img src={icon} className="back-icon" alt="icon" style={{ top: "5vh", left: "3vw" }} />
        <img src={icon} className="back-icon" alt="icon" style={{ bottom: "5vh", right: "3vw" }} />
    <div className="Buttonindex" >
      <button className="button" value={select} onClick={addlocation}>
        Add city
      </button>
    </div>
      {select && <Weather />}

    </div>
  );
}

export default App;
