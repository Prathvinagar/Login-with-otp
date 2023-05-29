import React, { useEffect } from "react";
import { useState } from "react";
import "./signup.css";
import countrydata from "../folder/Countrydata.json";
import Countrycode from "../folder/Countrycode.json";
import { useNavigate } from "react-router-dom";
import { Password } from "@mui/icons-material";
import PhoneInput from "react-phone-number-input";

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
  const [states, setStates] = useState([]);
  const [stateid, setStateid] = useState();
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  const regex =
    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;

  const emailregex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleFirst = (e) => {
    const fname = e.target.value;

    if (fname.length <= 3) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    setFirstName(fname);
  };

  const handleLast = (e) => {
    const lname = e.target.value;

    if (lname.length <= 3) {
      setLError(true);
    } else {
      setLError(false);
    }
    setLastName(lname);
  };

  const handleEmail = (e) => {
    const mail = e.target.value;

    if (!mail.match(emailregex)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    setEmail(mail);
  };
  const handleMobile = (e) => {
    const mobileno = e.target.value;

    if (mobileno.length != 10) {
      setMobileError(true);
    } else {
      setMobileError(false);
    }
    setMobile(mobileno);
  };
  const handleCountrycode = (e) => {};
  const handlePincode = (e) => {
    const Pinno = e.target.value;

    if (Pinno.length > 6) {
      setPinError(true);
    } else {
      setPinError(false);
    }
    setPincode(Pinno);
  };

  const handleCountry = (e) => {
    const getcountryId = e.target.value;

    const getstatedata = countrydata.find(
      (country) => country.country_id === getcountryId
    );

    setStates(getstatedata.states);
  };
  const handlePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
    if (password.match(regex)) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fname = e.target[0].value;

    if (fname.length <= 3) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    const lname = e.target[1].value;

    if (lname.length <= 3) {
      setLError(true);
    } else {
      setLError(false);
    }
    setLastName(lname);

    const mail = e.target[2].value;

    if (!mail.match(emailregex)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    const mobileno = e.target[3].value;

    if (mobileno.length != 10) {
      setMobileError(true);
    } else {
      setMobileError(false);
    }

    const Pinno = e.target[4].value;

    if (Pinno.length > 6 || Pinno == "") {
      setPinError(true);
    } else {
      setPinError(false);
    }

    const password = e.target[5].value;

    if (!password.match(regex)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    if (
      firstname === "" ||
      lastname === "" ||
      mobile === "" ||
      pincode === "" ||
      email === "" ||
      states === "" ||
      countryid === "" ||
      password === ""
    ) {
      alert("Please Filled All Input filed");
      navigate("/signup");
    } else {
      let oneTimePass = Math.floor(100000 + Math.random() * 1000);

      localStorage.setItem("data", oneTimePass);
      console.log("otp", oneTimePass);
      alert("Form is Sumbit");
      navigate("/otpscreen");
    }
  };

  return (
    <div className="maindiv">
      <div className="formdiv">
        <h1>Form</h1>

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
                  />
                </div>
                {nameError ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: "12px",
                      paddingLeft: "10px",
                    }}
                  >
                    Name length must be greater then 2 characters
                  </span>
                ) : (
                  " "
                )}
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
                  />
                </div>
                {lError ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: "12px",
                      paddingLeft: "50px",
                    }}
                  >
                    Name length must be greater then 2 characters
                  </span>
                ) : (
                  " "
                )}
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
                  />
                </div>
                {emailError ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: "12px",
                      paddingLeft: "44px",
                    }}
                  >
                    Invalid-Email
                  </span>
                ) : (
                  " "
                )}
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
                  ></input>
                </div>

                {mobileError ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: "12px",
                      paddingLeft: "50px",
                    }}
                  >
                    Invalid Mob-no
                  </span>
                ) : (
                  " "
                )}
              </div>
            </div>
            <br />
            <br />

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
                      {getcountry.country_name}
                    </option>
                  );
                })}
              </select>

              <label className="stattext">State:</label>
              <select name="states" className="statesselect">
                <option>Select-States</option>
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
                  <label className="citytext">Password:</label>
                  <input
                    placeholder="Password"
                    type="text"
                    id="pass"
                    value={password}
                    onChange={handlePassword}
                  />
                </div>
                {passwordError ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: "12px",
                      paddingLeft: "15px",
                    }}
                  >
                    Please input correct password
                  </span>
                ) : (
                  ""
                )}
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
                  <label className="pintext">Pincode:</label>
                  <input
                    placeholder="Pin-Code"
                    type="text"
                    id="Pin"
                    value={pincode}
                    onChange={handlePincode}
                  />
                </div>

                {pinError ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: "12px",
                      paddingLeft: "60px",
                    }}
                  >
                    Invalid Pincode maximum Number is 6
                  </span>
                ) : (
                  " "
                )}
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
