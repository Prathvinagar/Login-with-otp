

import { Country, State } from "country-state-city";
import React from "react";
import Dropdown from "react-dropdown";
import "./signup.css";

const allCountry = Country.getAllCountries();

const CountryAndStateComponent = ({ countryCode = "IN" }) => {
  const [state,setState]=React.useState([])




  const handleCountry = (e) => {
    const countrydata = e.target.value;
  };


  const get=(e)=>{
    console.log(e);
  }

  return (
    <>
     
      <label className="countrytext">Country:</label>
      <select
        name="Contries"
        className="countryselect"
        onChange={(e) => handleCountry(e)}
      >
        <option >Select-Countries</option>
      
        {allCountry.map((items) => (
          <option onClick={(e)=>get(e)}>{items.name}</option>
        ))}
      </select>
    </>
  );
};

export default CountryAndStateComponent;
