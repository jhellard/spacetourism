import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

import Data from "./data.json";
import "./SCSS/styles.scss";

import Logo from "./assets/shared/logo.svg";
import Hambuger from "./assets/shared/icon-hamburger.svg";

// Pages
import Landing from "./pages/Landing/Landing";
import Destinations from "./pages/Destinations/Destinations";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";

import BGMobile from "./assets/home/background-home-mobile.jpg";
import BGDestination from "./assets/destination/background-destination-mobile.jpg";
import BGCrew from "./assets/crew/background-crew-mobile.jpg";
import BGTech from "./assets/technology/background-technology-mobile.jpg";

const Main = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: url(${(props) => props.bg}) no-repeat center center fixed;
  background-size: cover;
`;

const App = () => {
  const [background, setBackground] = useState(BGMobile);

  const handleBackground = (bg) => {
    setBackground(bg);
  };

  return (
    <div className="container-centered-x">
      <Main className="main" bg={background}>
        <header className="main__header">
          <Link to="/" className="main__link">
            <img
              src={Logo}
              alt="Space Logo"
              className="main__logo"
              onClick={() => handleBackground(BGMobile)}
            />
          </Link>
          <img
            src={Hambuger}
            alt="Hamburger Menu"
            className="main__hamburger"
          />
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <Landing
                handleBackground={handleBackground}
                BGDestination={BGDestination}
              />
            }
          />
          <Route path="/destinations" element={<Destinations Data={Data} />} />
          <Route
            path="/crew"
            element={
              <Crew
                Data={Data}
                handleBackground={handleBackground}
                BGCrew={BGCrew}
              />
            }
          />
          <Route
            path="/technology"
            element={
              <Technology
                Data={Data}
                handleBackground={handleBackground}
                BGTech={BGTech}
              />
            }
          />
        </Routes>
      </Main>
    </div>
  );
};

export default App;
