import React from "react";
import "./App.scss";

import { Route, Routes } from "react-router";

import Navigation from "./routes/Navigation/navigation.route.jsx";
import Profile from "./routes/Profile/profile.route";
import Skills from "./routes/Skills/skills.route";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Profile />} />
          <Route path="/skills" element={<Skills />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
