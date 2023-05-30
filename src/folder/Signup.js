import React, { useEffect } from "react";
import { useState } from "react";
import "./signup.css";
import countrydata from "../folder/Countrydata.json";
import Countrycode from "../folder/Countrycode.json";
import { useNavigate } from "react-router-dom";
import { Password } from "@mui/icons-material";
import PhoneInput from "react-phone-number-input";
import { Country, State, city } from "country-state-city";

const Signup = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [lError, setLError] = useState(false);
  const [mobile, setMobile] = useState("");
  const [mobileError, setMobileError] = useState(false);
  const [pincode, setPincode] = useState("");
  const [pinError, setPinError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [countryid, setCountryid] = useState();
  const [city, setCity] = useState();
  const [states, setStates] = useState([]);
  const [stateid, setStateid] = useState();
  const [otp, setOtp] = useState("");
  const [emptyerror, setEmptyerror] = useState(false);

  const navigate = useNavigate();

  const regex =
    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;

  const emailregex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleFirst = (e) => {
    const fname = e.target.value;

    if (!fname) {
      setNameError("Please Enter Firstname");
    } else if (fname.length <= 3) {
      setNameError("Name length must be greater then 2 characters");
    } else {
      setNameError("");
    }
    setFirstName(fname);
  };

  const handleLast = (e) => {
    const lname = e.target.value;
    if (!lname) {
      setLError("Please Enter lastname");
    } else if (lname.length <= 3) {
      setLError("Name length must be greater then 2 characters");
    } else {
      setLError(false);
    }
    setLastName(lname);
  };

  const handleEmail = (e) => {
    const mail = e.target.value;
    if (!mail) {
      setEmailError("please Enter Email");
    } else if (!mail.match(emailregex)) {
      setEmailError("Invalid Email");
    } else {
      setEmailError("");
    }
    setEmail(mail);
  };
  const handleMobile = (e) => {
    const mobileno = e.target.value;

    if (mobileno === "") {
      setMobileError("Please Enter Mobile.no");
    } else if (mobileno.length !== 10 && mobileno.length > 1) {
      setMobileError("Mob no is less than 10 number");
    } else {
      setMobileError(false);
    }
    setMobile(mobileno);
  };
  const handleCountrycode = (e) => {};

  const handleCountry = (e) => {
    const getcountryId = e.target.value;

    const getstatedata = countrydata.find(
      (country) => country.country_id === getcountryId
    );

    setStates(getstatedata.states);
  };
  const handlePassword = (e) => {
    const password = e.target.value;

    if (password === "") {
      setPasswordError("Please Enter Password");
    } else if (!password.match(regex)) {
      setPasswordError("Password Contain 1 Capital-letter,symbol & Number");
    } else {
      setPasswordError(false);
    }
    setPassword(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fname = e.target[0].value;
    if (!fname) {
      setNameError("Please Enter Firstname");
    } else if (fname.length <= 3) {
      setNameError("Name is too sort");
    } else {
      setNameError("");
    }

    const lname = e.target[1].value;
    if (!lname) {
      setLError("Please Enter lastname");
    } else if (lname.length <= 3) {
      setLError(true);
    } else {
      setLError(false);
    }
    setLastName(lname);

    const mail = e.target[2].value;
    if (!mail) {
      setEmailError("Please Enter Email");
    } else if (!mail.match(emailregex)) {
      setEmailError("Invalid Email");
    } else {
      setEmailError(false);
    }

    const mobileno = e.target[3].value;

    if (!mobile) {
      setMobileError("Please Enter Mobile.no");
    } else if (mobileno.length !== 10 && mobileno.length > 1) {
      setMobileError("Mob no is less than 10 number");
    } else {
      setMobileError(false);
    }

    const password = e.target[8].value;
    if (!password) {
      console.log("password", password);
      setPasswordError("Please Enter Password");
    } else if (!password.match(regex)) {
      setPasswordError("Password Contain 1 Capital-letter,symbol & Number");
    } else {
      setPasswordError(false);
    }

    if (
      firstname === "" ||
      lastname === "" ||
      mobile === "" ||
      email === "" ||
      states === "" ||
      countryid === "" ||
      password === ""
    ) {
      navigate("/signup");
    } else {
      let oneTimePass = Math.floor(100000 + Math.random() * 1000);

      localStorage.setItem("data", oneTimePass);
      console.log("otp", oneTimePass);
      alert("Form is Sumbit");
      navigate("/otpscreen");
    }
  };

  const handleCity = (e) => {};

  return (
    <div className="maindiv">
      <div className="formdiv">
        <h1 className="headingsignup">Signup-Form</h1>

        <div className="containerdiv">
          <form onSubmit={handleSubmit}>
            <div className="firstdiv">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <label className="firtstext">Firstname:</label>
                  <input
                    placeholder="Firstname"
                    type="text"
                    id="firstName"
                    value={firstname}
                    onChange={handleFirst}
                    className="inputfield"
                  />
                </div>

                <span
                  style={{
                    color: "red",
                    fontSize: "12px",
                    paddingLeft: "87px",
                  }}
                >
                  {nameError}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <label className="lasttext">lasttname:</label>
                  <input
                    placeholder="Lastname"
                    type="text"
                    id="LastName"
                    value={lastname}
                    onChange={handleLast}
                    className="inputfield"
                  />
                </div>

                <span
                  style={{
                    color: "red",
                    fontSize: "12px",
                    paddingLeft: "127px",
                  }}
                >
                  {lError}
                </span>
              </div>
            </div>
            <br />
            <br />

            <div className="secdiv">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <label className="mailtext">Email:</label>
                  <input
                    placeholder="Email"
                    type="text"
                    id="email"
                    value={email}
                    onChange={handleEmail}
                    className="inputfield"
                  />
                </div>

                <span
                  style={{
                    color: "red",
                    fontSize: "12px",
                    paddingLeft: "87px",
                  }}
                >
                  {emailError}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <label className="mobtext">Mobile.no:</label>
                  <select
                    name="Countrycode"
                    className="countrycode"
                    onChange={(e) => handleCountrycode(e)}
                  >
                    <option>code</option>

                    {Countrycode.map((getcode, index) => {
                      return (
                        <option value={getcode.id} key={index}>
                          {getcode.code}
                        </option>
                      );
                    })}
                  </select>
                  <input
                    placeholder="Mobile-No"
                    type="text"
                    id="Mobno"
                    value={mobile}
                    onChange={handleMobile}
                    className="inputfieldmob"
                  ></input>
                </div>

                <span
                  style={{
                    color: "red",
                    fontSize: "12px",
                    paddingLeft: "127px",
                  }}
                >
                  {mobileError}
                </span>
              </div>
            </div>
            <br />
            <br />

            <div className="thirddiv">
              <label className="countrytext">Country:</label>
              <select
                name="Contries"
                onChange={(e) => handleCountry(e)}
                className="inputfieldcountry"
              >
                <option>Select-Countries</option>
                {countrydata.map((getcountry, index) => {
                  return (
                    <option value={getcountry.country_id} key={index}>
                      {getcountry.country_name}
                    </option>
                  );
                })}
              </select>

              <label className="stattext">State:</label>
              <select name="states" className="inputfieldstates">
                <option style={{ backgroundColor: "black" }}>
                  Select-States
                </option>
                {states.map((getstate, index) => {
                  return (
                    <option value={getstate.state_id} key={index}>
                      {getstate.state_name}
                    </option>
                  );
                })}
              </select>
            </div>
            <br />
            <br />

            <div className="fourthdiv">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <label className="citytext">city:</label>
                  <select
                    placeholder="City"
                    type="text"
                    value={city}
                    onChange={handleCity}
                    className="inputfieldcity"
                  />
                  <option></option>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <label className="passtext">Password:</label>
                  <input
                    placeholder="Password"
                    type="password"
                    id="pass"
                    value={password}
                    onChange={handlePassword}
                    className="inputfield"
                  />
                </div>

                <span
                  style={{
                    color: "red",
                    fontSize: "12px",
                    paddingLeft: "123px",
                  }}
                >
                  {passwordError}
                </span>
              </div>
            </div>
            <button className="otp-btn">Generate-Otp</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
