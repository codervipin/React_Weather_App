import React from "react";
import Card from "./Card";

const CardContainer = ({ data }) => {
  // console.log(data)
  // let { main, sys, weather, wind ,name} = data;
  // console.log(name)
  // console.log(main?.temp, main?.feels_like, main?.temp_min, main?.temp_max);
  // console.log(sys?.country, sys?.sunrise, sys?.sunset);
  // console.log(weather[0]?.main);
  // console.log(wind?.speed, wind?.deg);
  // console.log(data)
  return (
    <div className="cardsContainer">
      {data && <Card data={data}/>}
    </div>
  );
};

export default CardContainer;
