import "./App.css";
import React from "react";
import LoginForm from "./Component/LoginForm";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateUser from "./Component/CreateUser";
import Try from "./Component/Try";
import ForgotPassword from "./Component/ForgotPassword";
import Home from "./Component/Home";
import CreateBlog from "./Component/CreateBlog";
import Profile from "./Component/Profile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create-user" element={<CreateUser />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="home" element={<Home />} />
          <Route path="create-blog" element={<CreateBlog />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
        <Try />
      </Router>
    </>
  );
}

export default App;
