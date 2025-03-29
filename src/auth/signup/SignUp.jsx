import React, { useState } from "react";
import { icons } from "@/assets/asset";
import Button from "@/components/buttons/Button";
import { useNavigate } from "react-router-dom";
import OTP from "@/components/OTP";
import { useEmail } from "@/components/OTP";
const SignUp = () => {
  const navigate = useNavigate();

  const { email, setEmail } = useEmail();
  const [error, setError] = useState("");
  const [openOtp, setOpenOtp] = useState(false);

  const validateEmail = (email) => {
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailReg.test(email);
  };

  const handleContinue = () => {
    if (!email) {
      setError("Email required");
    } else if (!validateEmail(email)) {
      setError("Invalid email format");
    } else {
      setError("");
      navigate("/otp");
    }
  };

  return (
    <div className="p-5 flex h-screen overflow-hidden items-center">
      <div className="bg-black px-[60px] pt-[38px] pb-[79px] flex flex-col gap-[79px] rounded-[30px] h-full basis-[45%]">
        <img src={icons.rigitix} className="w-[105px]" alt="logo" />

        <div className="flex flex-col gap-[71px]">
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

      <div className="flex flex-col items-end gap-10 lg:basis-[55%] lg:px-[133px]">
        <p
          className="text-[#EB5017] font-bold cursor-pointer"
          onClick={() => navigate("/sign-in")}
        >
          Sign In
        </p>
        <div className="flex flex-col gap-y-2 text-center">
          <h2 className="text-[32px] text-[#1B1818] font-bold">Get Started!</h2>
          <p className="text-[14px] text-[#645D5D] font-normal">
            Next-level event management with secure, blockchain-powered
            ticketing.
          </p>

          <div className="flex flex-col gap-10 mt-9">
            <label className="flex flex-col gap-4">
              <p className="text-[#101928] text-[14px] font-medium text-left">
                Email Address
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-[#101928] text-[14px] font-medium border border-[#D0D5DD] rounded-[12px] p-4 placeholder:text-[#BEBEBE] placeholder:text-[12px] outline-[#F87B07]"
              />
              {error && (
                <p className="text-red-500 text-left text-[12px] transition-all duration-1000">
                  {error}
                </p>
              )}
            </label>

            <Button
              label="Continue"
              className="w-full bg-[#F87B07] text-white py-4 px-6 rounded-[12px]"
              onClick={handleContinue}
            />
          </div>
          <div className="flex items-center mt-7 mb-6 gap-1">
            <div className="border border-[#F0F2F5] w-full h-[1px]"></div>
            <p className="text-[#101928] text-[14px] font-normal">Or</p>
            <div className="border border-[#F0F2F5] w-full h-[1px]"></div>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <Button
              icon={icons.google_logo}
              label="Google"
              className="text-[#344054] text-[16px] font-semibold rounded-[18px] border border-[#333333] gap-[10px] p-4 flex gap-3 items-center w-full justify-center"
            />
            <Button
              icon={icons.fb_logo}
              label="Facebook"
              className="text-[#344054] text-[16px] font-semibold rounded-[18px] border border-[#333333] gap-[10px] p-4 flex gap-3 items-center w-full justify-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
