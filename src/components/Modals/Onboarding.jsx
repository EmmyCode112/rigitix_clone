import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { icons } from "@/assets/asset";
import Button from "@/components/buttons/Button";

const Onboarding = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState("");

  const handleSelect = (selectedType) => {
    setSelectedType(selectedType);
  };

  const handleContinue = () => {
    if (selectedType) {
      navigate(`/setup/${selectedType.toLowerCase()}`);
    }
  };

  return (
    <div className="fixed bg-white w-full h-screen">
      <div className="w-full h-full items-center justify-center flex">
        <div className="border border-[#00000040] p-12 rounded-[16px] h-[450px] w-[500px]">
          <div className="flex flex-col gap-4 w-full">
            <p className="text-black text-[14px] font-normal">
              How would you like to start?
            </p>

            {["Attendee", "Organizers", "Vendors"].map((option) => (
              <div
                key={option}
                className={`border flex justify-between items-center w-[404px] p-4 rounded-[18px] cursor-pointer ${
                  selectedType === option.toLowerCase()
                    ? "border-[#F87B07]"
                    : "border-[#D0D5DD]"
                }`}
                onClick={() => handleSelect(option.toLowerCase())}
              >
                <div className="flex items-center gap-4">
                  <img src={icons.FeaturedIcon} alt={option} />
                  <p>{option}</p>
                </div>
                {selectedType === option.toLowerCase() && (
                  <div>
                    <img src={icons.Checkbox} alt="active" />
                  </div>
                )}
              </div>
            ))}

            {/* Continue Button */}
            <Button
              label="Continue"
              className="w-full bg-[#F87B07] text-white py-4 px-6 rounded-[12px] mt-4"
              onClick={handleContinue}
              disabled={!selectedType} // Disable button if no selection
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
