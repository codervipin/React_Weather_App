import React from 'react'
import w1 from "../assets/sunny.webp"
import w2 from "../assets/cloudy.jpg"
import w3 from "../assets/foggy.jpg"
import w4 from "../assets/rainy.png"
import w5 from "../assets/na.jpeg"
import w6 from "../assets/haze.png"

const Card = ({data}) => {
  let images ={
    "Clouds" : w2,
    "rain" : w4,
    "foggy" : w3,
    "sunny" : w1,
    "Haze" : w6,
    "na": w5
  }
  // console.log(data)
  let {name,main, sys, weather, wind } = data;
  // console.log(weather[0].main)
  let val =weather? weather[0]?.main :"na";
  // console.log(val)
  
  return (
    <div className='card'>
        <h1>{name ? name : "City Name"}</h1> <span>{sys? sys.country : "Country"}</span>
        <p>Humidity : {main ? main?.humidity : "Unavaialable"}</p>
        <img src={images[val]} />
        <h4>{main ? main?.feels_like : 0} deg C</h4>
        <span>Min Temp : {main ? main?.temp_min : 0}</span><span>Max Temp : {main ? main?.temp_max : 0}</span>
        <p>wind speed : {wind ? wind?.speed : 0} km/h</p>

    </div>
  )
}

export default Card