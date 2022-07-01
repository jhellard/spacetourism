import React from "react";
import { Routes, Route } from "react-router-dom";

import Data from "./data.json";
import "./SCSS/styles.scss";

// Pages
import Landing from "./pages/Landing/Landing";
import Destinations from "./pages/Destinations/Destinations";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/destinations" element={<Destinations Data={Data} />} />
      <Route path="/crew" element={<Crew Data={Data} />} />
      <Route path="/technology" element={<Technology Data={Data} />} />
    </Routes>
  );
};

export default App;
