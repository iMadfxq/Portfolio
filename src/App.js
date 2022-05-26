import React from "react";
import "./App.scss";

import { Route, Routes } from "react-router";

import Navigation from "./routes/Navigation/navigation.jsx";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Navigation />} />
    </Routes>
    </>
  );
}

export default App;
