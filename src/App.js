import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

import Data from "./data.json";
import "./SCSS/styles.scss";

import Logo from "./assets/shared/logo.svg";
import Hambuger from "./assets/shared/icon-hamburger.svg";

import Landing from "./pages/Landing/Landing";
import Destinations from "./pages/Destinations/Destinations";

import BGMobile from "./assets/home/background-home-mobile.jpg";
import BGDestination from "./assets/destination/background-destination-mobile.jpg";

const Main = styled.div`
  display: flex;
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
        </Routes>
      </Main>
    </div>
  );
};

export default App;
