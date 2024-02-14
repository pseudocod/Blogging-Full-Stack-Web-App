import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const login = async (inputs) => {
    const res = await axios.post(
      "http://localhost:8800/api/auth/login",
      inputs,
      { withCredentials: true }
    );
    setCurrentUser(res.data);
  };

  const logout = async () => {
    try {
      const response = await fetch("http://localhost:8800/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        setCurrentUser(null);
        console.log("Logout successful");
      } else {
        // Handle errors
        console.error("Logout failed");
      }
    } catch (error) {
      // Handle error (e.g., log it or show a notification)
      console.error("Logout failed:", error);
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
