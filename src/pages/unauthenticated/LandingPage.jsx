import React from "react";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      Home
      <p onClick={() => navigate("/sign-up")}>link to sign up</p>
      <p onClick={() => navigate("/sign-in")}>link to sign in</p>
    </div>
  );
};

export default LandingPage;
