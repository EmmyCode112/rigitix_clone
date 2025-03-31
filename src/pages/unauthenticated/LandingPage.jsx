import React from "react";
import { Link, useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      Home
      <p onClick={() => navigate("/sign-up")}>link to sign up</p>
      <p onClick={() => navigate("/sign-in")}>link to sign in</p>
      <p>
        <Link to="dashboard">Link to user dashboard</Link>
      </p>
      <p>
        <Link to="dashboard/ticket-empty">Empty tickets</Link>
      </p>
      <p>
        <Link to="dashboard/my-tickets">My tickets</Link>
      </p>
      <p>
        <Link to="organizer-dashboard">Organizer Dashboard</Link>
      </p>
    </div>
  );
};

export default LandingPage;
