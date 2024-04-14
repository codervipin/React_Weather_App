
import React, { useEffect } from "react";
import CardContainer from "./CardContainer";

const Searchbar = ({ props }) => {
  let { city, setCity, data, setData ,fetchData} = props;

  // console.log(city)
  // console.log(setCity)

  // console.log(data);
  // console.log(setData)
  const handleChange = (e) => {
    e.target.value.trim() === ""? alert("City cannot be empty") :
    setCity(e.target.value);
  };

  // console.log(data);

  let handleClick =()=>{
    fetchData(city);
    setCity("");
  }
  

  return (
    <>
      <div className="search">
        <input type="text" onChange={handleChange} value={city} placeholder="Enter city name" />
        <button onClick={handleClick}>Search</button>
      </div>
      
    </>
  );
};

export default Searchbar;
