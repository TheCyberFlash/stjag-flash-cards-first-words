import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CardCollection from "./components/CardCollection";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<CardCollection />} />
      </Routes>
    </Router>
  );
};

export default App;
