import React, { useEffect } from "react";
import "./App.scss";

import { Route, Routes, useNavigate } from "react-router";

import Navigation from "./routes/Navigation/navigation.route.jsx";
import Profile from "./routes/Profile/profile.route";
import Skills from "./routes/Skills/skills.route";
import AllProjects from "./components/AllProjects/AllProjects.component";
import Contact from "./routes/Contact/contact.route";
import { useSelector } from "react-redux";

function App() {
const currentTab = useSelector(state => state.currentTab.value)

  const navigate = useNavigate()
  useEffect(() => {
    navigate(`/${currentTab}`)
  }, [])
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Profile />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
