import "./App.css";
import React, { useState, useEffect } from "react";
import LoginForm from "./Component/LoginForm";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateUser from "./Component/CreateUser";
import Try from "./Component/Try";
import ForgotPassword from "./Component/ForgotPassword";
import { useGlobalContext } from "./Component/Contex";
import Home from "./Component/Home";

function App() {
  const [logIn, setLogIn] = useState(false);

  if (!logIn) {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<LoginForm setLogIn={setLogIn} />} />
            <Route path="create-user" element={<CreateUser />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Routes>
          <Try />
        </Router>
      </>
    );
  }
  return (
    <>
      <Home />
    </>
  );
}

export default App;
