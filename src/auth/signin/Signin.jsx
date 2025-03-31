import React from "react";
import { icons } from "@/assets/asset";
import Button from "@/components/buttons/Button";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  return (
    <div className="p-5 flex h-screen overflow-hidden items-center">
      <div className="bg-black px-[60px] pt-[38px] pb-[79px] flex flex-col gap-[79px] rounded-[30px] h-full basis-[45%]">
        <img src={icons.rigitix} className="w-[105px]" />

        <div className="flex flex-col gap-[71px]">
          <h2 className="text-[37px] font-semibold tracking-[-2px] text-white max-w-[75%]">
            rig<span className="text-[#F87B07]">ti</span>
            <span className="text-[#F87B07]">X</span>: Where Events Go
            Next-Level with Blockchain Magic
          </h2>
          <p className="text-[#F0E6E6] font-normal text-[16px]">
            Rigitix revolutionizes events with blockchain-powered ticketing,
            management, and engagement—ensuring security, transparency, and a
            seamless experience. The future of events is here
          </p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-10 lg:basis-[55%] lg:px-[133px] overflow-y-scroll h-full hideScrollBar">
        <p
          className="text-[#EB5017] font-bold cursor-pointer"
          onClick={() => navigate("/sign-up")}
        >
          Sign up
        </p>
        <div className="flex flex-col gap-y-2 text-center">
          <h2 className="text-[32px] text-[#1B1818] font-bold">
            Welcome back!
          </h2>
          <p className="text-[14px] text-[#645D5D] font-normal">
            Sign in to access your account and manage your events seamlessly
          </p>

          <div className="flex flex-col gap-10 mt-9">
            <label className="flex flex-col gap-4">
              <p className="text-[#101928] text-[14px] font-medium text-left">
                Email Address
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="text-[#101928] text-[14px] font-medium border border-[#D0D5DD] rounded-[12px] p-4 placeholder:text-[#BEBEBE] placeholder:text-[12px] outline-[#F87B07]"
              />
            </label>

            <label className="flex flex-col gap-4">
              <p className="text-[#101928] text-[14px] font-medium text-left">
                Password
              </p>
              <input
                type="password"
                className="text-[#101928] text-[14px] font-medium border border-[#D0D5DD] rounded-[12px] p-4 placeholder:text-[#BEBEBE] placeholder:text-[12px] outline-[#F87B07]"
              />
            </label>

            <Button
              label="Sign in"
              className="w-full bg-[#F87B07] text-white py-4 px-6 rounded-[12px]"
            />
          </div>
          <div className="flex justify-between mt-2">
            <div>
              <input type="checkbox" id="remember" />
              <label
                htmlFor="remember"
                className="cursor-pointer text-[14px] text-[#645D5D] font-semibold ml-1"
              >
                Remember me
              </label>
            </div>
            <p
              className="cursor-pointer text-[14px] text-[#645D5D] font-semibold"
              onClick={() => navigate("/forgotten-password")}
            >
              Forgot Password?
            </p>
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

export default Signin;
