import React, { useState } from "react";
import StepOne from "./vendor/StepOne";
import StepTwo from "./vendor/StepTwo";
import StepThree from "./vendor/StepThree";
import { icons } from "@/assets/asset";
import { useNavigate } from "react-router-dom";

const VendorSetup = () => {
  const [step, setStep] = useState(1);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const navigate = useNavigate();

  const handleNext = () => {
    if (step === 3) {
      navigate("/vendor/dashboard"); // Redirect to Attendee Dashboard
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  const [business, setBusiness] = useState("");

  return (
    <div className="w-full mx-auto flex flex-col items-center h-full min-h-screen justify-center overflow-y-scroll hideScrollBar">
      <div className="flex flex-col items-start">
        <div className="mt-[100px] mb-[19px] flex justify-start">
          <button
            onClick={handleBack}
            disabled={step === 1}
            className="mb-4 flex gap-2 items-center cursor-pointer px-4 py-2  rounded-[8px]"
          >
            <img src={icons.arrow_left} />
            <span className="font-medium text-[16px] text-[#F87B07]">Back</span>
          </button>
        </div>
        <div
          className={`"border-[#00000040] border rounded-[16px] p-12  mt-[64px]" w-[500px]`}
        >
          {step === 1 && (
            <StepOne
              handleNext={() => {
                if (business) setStep(step + 1); // Save business name and go to Step 2
              }}
              business={business}
              setBusiness={setBusiness}
            />
          )}
          {step === 2 && <StepTwo handleNext={handleNext} />}
          {step === 3 && <StepThree handleNext={handleNext} />}
        </div>
      </div>
    </div>
  );
};

export default VendorSetup;
