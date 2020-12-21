import React, { useState } from "react";
import Search from "./SearchCity";
import {CircularProgress} from '@material-ui/core';
import Weather from "./Weather";
import Routes from './routes';
import Header from './materialUI/header';

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const search = (city) => {
    setLoading(true);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=59adec9699e1ba73be16f8ec1c0047e1`
    ).then((res) => res.json()).then((data) => {
        if (data.cod === 200) {
          setWeatherData(data);
          setLoading(false);
          setError("");
        } 
        else {
          setLoading(false);
          setError(data.message);
        }
      }).catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  };

  const errorMessage = (
    <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
      <p style={{color: "red", fontStyle:'italic'}}>{error}</p>
    </div>
  );

  return (
    <div>
      <Header />
      <Search onSearch={search} />
      {loading ?<div style={{textAlign:'center', marginTop:100}}><CircularProgress/></div>: error? errorMessage: (
        Object.keys(weatherData).length > 0 && (
          <Weather data={weatherData}/>)
      )}
      <Routes/>
    </div>

  );
}
