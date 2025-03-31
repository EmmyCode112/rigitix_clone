import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { icons } from "@/assets/asset";
import Button from "@/components/buttons/Button";

const Onboarding = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState("");
  const [error, setError] = useState("");

  const handleSelect = (type) => {
    setSelectedType(type);
    setError(""); // Clear error when user makes a selection
  };

  const handleContinue = async () => {
    if (!selectedType) {
      setError("Please select a user type.");
      return;
    }

    const userDetails = {
      userType: selectedType,
      dob: "1990-01-01", // Replace with actual values
      email: "user@example.com",
      gender: "Male",
      name: "John Doe",
      password: "Password@123",
      password_confirmation: "Password@123",
      phone: "+1234567890",
    };

    Cookies.set("userDetails", JSON.stringify(userDetails));

    try {
      const response = await axios.post(
        "https://test2.coderigi.online/api/auth/complete-signup",
        userDetails
      );
      console.log("API Response:", response);
      navigate(`/setup/${selectedType}`);
    } catch (err) {
      console.error("Error:", err.response ? err.response.data : err.message);
      setError("Failed to save user type. Please try again.");
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

            {error && <p className="text-red-500 text-sm">{error}</p>}

            {["Attendee", "Organizer", "Vendor"].map((option) => (
              <div
                key={option}
                className={`border flex justify-between items-center w-[404px] p-4 rounded-[18px] cursor-pointer ${
                  selectedType === option
                    ? "border-[#F87B07]"
                    : "border-[#D0D5DD]"
                }`}
                onClick={() => handleSelect(option)}
              >
                <div className="flex items-center gap-4">
                  <img src={icons.FeaturedIcon} alt={option} />
                  <p>{option}</p>
                </div>
                {selectedType === option && (
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
              disabled={!selectedType}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
