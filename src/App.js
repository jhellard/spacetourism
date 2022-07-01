import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Data from "./data.json";
import "./SCSS/styles.scss";

// Pages
import Landing from "./pages/Landing/Landing";
import Destinations from "./pages/Destinations/Destinations";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";

const App = () => {
  const [isHambugerOpen, setIsHambugerOpen] = useState(false);
  const Links = Data.links;

  const handleHambuger = () => {
    document.querySelector(".main__nav").classList.toggle("toggle");

    setIsHambugerOpen(!isHambugerOpen);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Landing Links={Links} handleHambuger={handleHambuger} />}
      />
      <Route
        path="/destinations"
        element={
          <Destinations
            Data={Data}
            Links={Links}
            handleHambuger={handleHambuger}
          />
        }
      />
      <Route
        path="/crew"
        element={
          <Crew Data={Data} Links={Links} handleHambuger={handleHambuger} />
        }
      />
      <Route
        path="/technology"
        element={
          <Technology
            Data={Data}
            Links={Links}
            handleHambuger={handleHambuger}
          />
        }
      />
    </Routes>
  );
};

export default App;
