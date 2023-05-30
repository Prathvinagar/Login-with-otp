import { Country, State, City } from "country-state-city";
import React from "react";
import Dropdown from "react-dropdown";
import PhoneInput from "react-phone-number-input";
import "./signup.css";


const allCountry = Country.getAllCountries();

const countryCodes = require("country-codes-list");
console.log(allCountry);



console.log("ddd", countryCodes);
const CountryAndStateComponent = ({ countryCode = "IN" }) => {
  const [state, setState] = React.useState([]);
  const [value, setValue] = React.useState();

  const handleCountry = (e) => {
    const countrydata = e.target.value;
  };

  const get = (e) => {
    console.log(e);
  };

  return (
    <>
      <label className="countrytext">Country:</label>
      <select
        name="Contries"
        className="countryselect"
        onChange={(e) => handleCountry(e)}
      >
        <option>Select-Countries</option>

        {allCountry.map((items) => (
          <option onClick={(e) => get(e)}>{items.name}</option>
        ))}
      </select>

      <PhoneInput
        international
        countryCallingCodeEditable={false}
        defaultCountry="RU"
        value={value}
        onChange={setValue}
      />
    </>
  );
};

export default CountryAndStateComponent;
