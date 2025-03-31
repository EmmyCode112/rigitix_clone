import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignUp from "./auth/signup/SignUp";
import Signin from "./auth/signin/Signin";
import LandingPage from "./pages/unauthenticated/LandingPage";
import UserDashboard from "./pages/UserDashboard";
import Dashboard from "./components/UserDashboard/Dashboard";
import UserTicketsEmpty from "./components/UserDashboard/UserTicketsEmpty";
import UserTickets from "./components/UserDashboard/UserTickets";
import OrganizerDashboard from "./components/OrganizerDashboard/Dashboard";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";

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

        {/* Default Route */}
        <Route path="/" element={<LandingPage />} />
        <Route path="dashboard" element={<UserDashboard />}>
          <Route path="" element={<Dashboard />} />
          <Route path="ticket-empty" element={<UserTicketsEmpty />} />
          <Route path="my-tickets" element={<UserTickets />} />
        </Route>
        <Route path="organizer-dashboard" element={<UserDashboard />}>
          <Route path="" element={<OrganizerDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
