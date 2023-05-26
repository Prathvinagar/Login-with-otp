import React, { useEffect } from "react";
import OtpInput from "react-otp-input";
import "./otp.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import OtpTimer from "otp-timer";

const Otp = () => {
  const navigate = useNavigate();

  const data = localStorage.getItem("data");
  console.log("GGG", data);
  const [otp, setOtp] = useState("");

  const verifyOtp = () => {
    const flage = otp == data;
    if (flage) {
      navigate("/home");
    }
  };

  const timer = () => {
    setTimeout(() => {
      localStorage.clear("data");
      console.log("data", data);
    }, 30000);
  };

  useEffect(() => {
    timer();
  }, []);

  const resendOtp = () => {

  };

  return (
    <>
      <div className="mainotpdiv">
        <div className="Otpdiv">
          <h1>Otp Screen</h1>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            // renderSeparator={<span>--</span>}
            renderInput={(props) => <input {...props} className={"otpinput"} />}
          />
             <OtpTimer
        // minutes={3}
        seconds={30}
        text="Time:"
        // ButtonText="Resend"
        //  resend={submit}
      />

          <div className="otpbtn">
            <button onClick={verifyOtp}>Submit</button>
            <button onClick={resendOtp}>Resend-Otp</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
