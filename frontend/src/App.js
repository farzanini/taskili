import { useEffect, useState } from "react";
import { Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./main";
import Login from "./Pages/Login/login";
import Signup from "./Pages/Signup/signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
