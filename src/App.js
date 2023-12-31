import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth";
import { GraphProvider } from "./contexts/graph";
import Navbar from "./features/navigation/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/SignUp";
import Impressum from "./pages/Impressum/Impressum";
import Privacy from "./pages/Privacy/Privacy";
import CommunitySignup from "./pages/CommunitySignup/CommunitySignup";
import ConfirmEmail from "./pages/ConfirmEmail/ConfirmEmail";
import Dashboard from "./pages/Dashboard/Dashboard";
import { ThemeProvider } from "@emotion/react";
import { appTheme } from "./themes/theme";

const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <AuthProvider>
        <GraphProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/join-community" element={<CommunitySignup />} />
              <Route
                path="confirm-email/:userType"
                element={<ConfirmEmail />}
              />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Router>
        </GraphProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
