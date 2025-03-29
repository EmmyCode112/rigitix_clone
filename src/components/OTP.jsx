import React, { useState, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/buttons/Button";
import { icons } from "@/assets/asset";
import Onboarding from "./Modals/Onboarding";

// Create Context for storing email
const EmailContext = createContext();

export const EmailProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  return (
    <EmailContext.Provider value={{ email, setEmail }}>
      {children}
    </EmailContext.Provider>
  );
};

export const useEmail = () => useContext(EmailContext);

const OTP = () => {
  const navigate = useNavigate();
  const { email } = useEmail();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(300); // 5-minute countdown
  const [onboard, setOnboard] = useState(false);
  const handleChange = (index, value) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const handleResend = () => {
    setTimer(300);
  };

  const handleSubmit = () => {
    if (otp.join("")) {
      setOnboard(true);
    }
  };

  return (
    <div className="p-5 flex h-screen overflow-hidden items-center">
      <div className="bg-black px-[60px] pt-[38px] pb-[79px] flex flex-col justify-between gap-[79px] rounded-[30px] h-full basis-[45%]">
        <img src={icons.rigitix} className="w-[105px]" alt="logo" />

        <div className="flex flex-col gap-[71px] justify-between h-full w-full">
          <h2 className="text-[37px] font-semibold tracking-[-2px] text-white max-w-[75%]">
            rig<span className="text-[#F87B07]">ti</span>
            <span className="text-[#F87B07]">X</span>: Where Events Go
            Next-Level with Blockchain Magic
          </h2>
          <p className="text-[#F0E6E6] font-normal text-[16px]">
            Rigitix revolutionizes events with blockchain-powered ticketing,
            management, and engagement—ensuring security, transparency, and a
            seamless experience. The future of events is here.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 lg:basis-[55%] lg:px-[133px]">
        <h2 className="text-2xl font-bold">OTP Verification</h2>
        <p>We've sent a verification link to {email}</p>
        <div className="flex gap-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-12 h-12 text-center border rounded outline-[#F87B07]"
            />
          ))}
        </div>
        <Button
          label="Continue"
          onClick={handleSubmit}
          className="bg-[#F87B07] text-white py-[10px] px-6 rounded w-full"
        />
        <div className="flex justify-between w-full ">
          <p className="text-[#645D5D] text-[14px] font-semibold">
            Didn't receive the OTP?{" "}
            <span
              className="text-[#F87B07] cursor-pointer"
              onClick={handleResend}
            >
              Resend
            </span>
          </p>
          <p className="text-gray-500">
            {Math.floor(timer / 60)}:{("0" + (timer % 60)).slice(-2)}
          </p>
        </div>
      </div>

      {onboard && <Onboarding />}
    </div>
  );
};

export default OTP;
