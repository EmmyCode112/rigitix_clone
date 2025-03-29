import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignUp from "./auth/signup/SignUp";
import Signin from "./auth/signin/Signin";
import LandingPage from "./pages/unauthenticated/LandingPage";
import OTP from "@/components/OTP";
import ForgottenPassword from "./auth/PasswordReset/ForgottenPassword";
import UserDashboard from "./pages/UserDashboard";
import Dashboard from "./components/UserDashboard/Dashboard";
import VendorSetup from "@/components/setup/VendorSetup";
import AttendeeSetup from "@/components/setup/AttendeeSetup";
import OrganizerSetup from "@/components/setup/OrganizerSetup";
// import Cookies from "js-cookie";
// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { loginSuccess } from "./redux/slice/authSlice";

const App = () => {
  // const dispatch = useDispatch();

  // Load authentication state on mount
  // useEffect(() => {
  //   const token = Cookies.get("authToken");
  //   const userData = Cookies.get("userData");

  //   if (token && userData) {
  //     dispatch(loginSuccess(JSON.parse(userData))); // Restore authentication state
  //   }
  // }, [dispatch]);

  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <Routes>
        {/* Unauthenticated Routes */}
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/forgotten-password" element={<ForgottenPassword />} />
        {/* Different setup pages */}
        <Route path="/setup/vendors" element={<VendorSetup />} />
        <Route path="/setup/attendee" element={<AttendeeSetup />} />
        <Route path="/setup/organizers" element={<OrganizerSetup />} />
        {/* Default Route */}
        <Route path="/" element={<LandingPage />} />
        <Route path="dashboard" element={<UserDashboard />}>
          <Route path="" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
