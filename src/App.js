import React from "react";
import "./App.scss";

import { Route, Routes } from "react-router";

import Navigation from "./routes/Navigation/navigation.route.jsx";
import Profile from "./routes/Profile/profile.route";
import Skills from "./routes/Skills/skills.route";
import AllProjects from "./components/AllProjects/AllProjects.component";
import Contact from "./routes/Contact/contact.route";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Profile />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/skills/projects" element={<AllProjects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
