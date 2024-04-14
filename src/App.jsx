import React, { useEffect, useState } from "react";
import Searchbar from "./Components/Searchbar";
import CardContainer from "./Components/CardContainer";
import axios from "axios";

const App = () => {
  const [city, setCity] = useState("");

  const [data, setData] = useState([]);
  // console.log(city)
  // console.log(data)

  let fetchData = async (city) => {
    let { data } = await axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric" +
          "&appid=9fc8b61fa73489053ec9964ac957b30c"
      )
      .catch((error) => {
        alert("Invalid city name");
      });
    setData(data);
  };
  // console.log(data)

  // fetchData();
  // useEffect(()=>{
  //   fetchData();
  // },[])
  return (
    <section className="container">
      <div className="heading">
        <h1>Weather App Built With React Js</h1>
      </div>
      <Searchbar props={{ city, setCity, data, setData, fetchData }} />
      <CardContainer data={data} />
    </section>
  );
};

export default App;
