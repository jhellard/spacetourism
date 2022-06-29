import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

import Data from "./data.json";
import "./SCSS/styles.scss";

import Logo from "./assets/shared/logo.svg";
import Hambuger from "./assets/shared/icon-hamburger.svg";
import CloseHambuger from "./assets/shared/icon-close.svg";

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
  overflow: hidden;
`;

const App = () => {
  const [background, setBackground] = useState(BGMobile);
  const [isHambugerOpen, setIsHambugerOpen] = useState(false);

  const handleBackground = (bg) => {
    setBackground(bg);
  };

  const handleHambuger = () => {
    document.querySelector(".main__nav").classList.toggle("toggle");

    setIsHambugerOpen(!isHambugerOpen);
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
            onClick={() => handleHambuger()}
          />
        </header>
        <nav className="main__nav">
          <img
            src={CloseHambuger}
            alt="Close Hamburger Menu"
            className="main__close"
            onClick={() => handleHambuger()}
          />
          <Link
            to="/"
            className="main__route"
            onClick={() => {
              handleHambuger();
              handleBackground(BGMobile);
            }}
          >
            <span className="main__nav__selection">
              <span className="main__nav__selection__number">00</span>
              <span className="main__nav__selection__title">HOME</span>
            </span>
          </Link>
          <Link
            to="/destinations"
            className="main__route"
            onClick={() => {
              handleHambuger();
              handleBackground(BGDestination);
            }}
          >
            <span className="main__nav__selection">
              <span className="main__nav__selection__number">01</span>
              <span className="main__nav__selection__title">DESTINATION</span>
            </span>
          </Link>
          <Link
            to="/crew"
            className="main__route"
            onClick={() => {
              handleHambuger();
              handleBackground(BGCrew);
            }}
          >
            <span className="main__nav__selection">
              <span className="main__nav__selection__number">02</span>
              <span className="main__nav__selection__title">CREW</span>
            </span>
          </Link>
          <Link
            to="/technology"
            className="main__route"
            onClick={() => {
              handleHambuger();
              handleBackground(BGTech);
            }}
          >
            <span className="main__nav__selection">
              <span className="main__nav__selection__number">03</span>
              <span className="main__nav__selection__title">TECHNOLOGY</span>
            </span>
          </Link>
        </nav>
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
          <Route path="/crew" element={<Crew Data={Data} />} />
          <Route path="/technology" element={<Technology Data={Data} />} />
        </Routes>
      </Main>
    </div>
  );
};

export default App;
