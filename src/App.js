import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import Apod from "./Apod";




const reqUrl = "https://api.nasa.gov/planetary/apod?api_key=Fy6kL28hUht9wSjpxezdpjrPdBJoGp0CfHKxPKai"

const urls=["&date=2022-12-03", "&date=2022-12-02","&date=2022-11-26"]

const reqUrl_dun="https://api.nasa.gov/planetary/apod?api_key=Fy6kL28hUht9wSjpxezdpjrPdBJoGp0CfHKxPKai&date=2022-12-02"


const reqUrl_gecen="https://api.nasa.gov/planetary/apod?api_key=Fy6kL28hUht9wSjpxezdpjrPdBJoGp0CfHKxPKai&date=2022-11-26"



function App() {
  const [day, setDay] = useState(1);
  const [apod, setApod] = useState(null);

useEffect(() => {
  axios.get(reqUrl+urls[day-1])
    .then(res => {
      setApod(res.data)
    });
}, [day])
  
  console.log('apod biligisi:', apod);


  return (
    <div className="App">

      <div className="content">
        <h1>Photo of the day-NASA</h1>
        <div className="buttons">
          <button onClick={() => setDay(1)} className={day === 1 ? 'selected' : ''}>Bugün</button>
          <button onClick={() => setDay(2)} className={day === 2 ? 'selected' : ''}>Dün</button>
          <button onClick={() => setDay(3)} className={day === 3 ? 'selected' : ''}>Geçen Hafta</button>
        </div>
       

        {apod === null
          ? <div>Apod  yükleniyor</div>
          : (
            <Apod dopa={apod}/>
          )  
        }
      </div>
      </div>
  );
}

export default App;
