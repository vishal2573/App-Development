import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import Signup from "./SignupPage";

function RouteApp() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Signup />} />
      </Routes>
    </Router>
  );
}

const rootElement = document.getElementById("root");
createRoot(rootElement).render(<RouteApp />);