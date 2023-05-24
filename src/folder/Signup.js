import React from "react";
import { useState } from "react";
import "./signup.css";
import countrydata from "../folder/Countrydata.json";

const Signup = () => {
  const [countryid, setCountryid] = useState();
  const [state, setState] = useState([]);
  const [stateid, setStateid] = useState();

  const handleCountry = (e) => {
    const getcountryId = e.target.value;
    

    const getstatedata = countrydata.find(
      (country) => country.country_id === getcountryId
    );

    setState(getstatedata);
  };
  return (
    <div className="maindiv">
      <div className="formdiv">
        <h1>Form</h1>
        <div className="containerdiv">
          <div className="firstdiv">
            <label className="firtstext">Firstname:</label>
            <input></input>
            <label className="lasttext">lasttname:</label>
            <input></input>
          </div>

          <div className="secdiv">
            <label className="mailtext">Email:</label>
            <input></input>
            <label className="mobtext">Mobile.no:</label>
            <input></input>
          </div>

          <div className="thirddiv">
            <label className="countrytext">Country:</label>
            <select
              name="Contries"
              className="countryselect"
              onChange={(e) => handleCountry(e)}
            >
              <option>Select-Countries</option>
              {countrydata.map((getcountry, index) => {
                return (
                  <option value={getcountry.country_id} key={index}>
                    {" "}
                    {getcountry.country_name}{" "}
                  </option>
                );
              })}
            </select>


            <label className="stattext">State:</label>
            <select
              name="states"
              className="countryselect"
              
            >
              <option>Select-States</option>
              {
              state.map((getstate, index) => {
                console.log("kkk", getstate)
                return (
                  <option value={getstate.state_id} key={index}>

                    {getstate.state_name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="fourthdiv">
            <label className="citytext">City:</label>
            <input></input>
            <label className="pintext">Pincode:</label>
            <input></input>
          </div>
        </div>
        <button className="otp-btn">Generate-Otp</button>
      </div>
    </div>
  );
};

export default Signup;
