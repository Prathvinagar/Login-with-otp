import { Country, State, City } from "country-state-city";
import React, { useState } from "react";

import "./signup.css";

const CountryAndStateComponent = () => {
  let countryIsoCode = "";
  const allCountry = Country.getAllCountries();
  const [countryCode, setCountryCode] = useState("");

  const [states, setStates] = React.useState([]);
  const [cities, setCities] = React.useState([]);

  const handleCountry = (e) => {
    countryIsoCode = e.target.value;
    setCountryCode(countryIsoCode);
    const countryStates = State.getStatesOfCountry(countryIsoCode);
    console.log("EEEE", countryStates);
    setStates(countryStates);

    console.log("jj", countryStates);
  };

  const handleState = (e) => {
    const stateIsoCode = e.target.value;
    console.log("DDDd", stateIsoCode, "ggg", countryIsoCode);

    const stateCities = City.getCitiesOfState(countryCode, stateIsoCode);
    console.log("KKK", stateCities);
    setCities(stateCities);
    console.log("GGGG", stateCities);
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

        {allCountry.map((country) => (
          <option key={country.isoCode} value={country.isoCode}>
            {country.name}
          </option>
        ))}
      </select>

      <select
        name="state"
        className="Stateselect"
        onChange={(e) => handleState(e)}
      >
        <option>Select-State</option>

        {states.map((state) => (
          <option key={state.isoCode} value={state.isoCode}>
            {state.name}
          </option>
        ))}
      </select>

      <select name="city" className="Cityselect">
        <option>Select-City</option>

        {cities.map((city) => (
          <option key={city.name} value={city.isoCode}>
            {city.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default CountryAndStateComponent;
