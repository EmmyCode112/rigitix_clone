import React from "react";
import { Link, useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      Home
      <p onClick={() => navigate("/sign-up")}>link to sign up</p>
      <p onClick={() => navigate("/sign-in")}>link to sign in</p>
      <Link to="dashboard">Link to user dashboard</Link>
    </div>
  );
};

export default LandingPage;
