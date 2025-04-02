import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [MyDashboard, setMyDashboard] = useState("");

  // Load user data from cookies on app start
  useEffect(() => {
    const storedUser = Cookies.get("userData");
    const storeDashboardRoute = Cookies.get("userType");

    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
    if (storeDashboardRoute) {
      setMyDashboard(storeDashboardRoute);
    }
  }, []);

  // Function to update user state after login
  const login = (user) => {
    const userType = user.userType; // Extract userType from user data

    Cookies.set("userData", JSON.stringify(user));
    Cookies.set("userType", userType);

    setUserData(user);
    setMyDashboard(userType); // Update state
  };

  // Function to log out
  const logout = () => {
    Cookies.remove("userData");
    Cookies.remove("authToken");
    Cookies.remove("userType");
    setUserData(null);
    setMyDashboard(""); // Reset userType state
  };

  return (
    <AuthContext.Provider
      value={{ userData, login, logout, MyDashboard, setMyDashboard }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
