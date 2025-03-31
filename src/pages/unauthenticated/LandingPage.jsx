import React from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import Header from "@/components/landingPage/Header";

import Footer from "@/components/landingPage/Footer";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      Home
      <Link to="dashboard">Link to user dashboard</Link>
    </div>
  );
};

export default LandingPage;
