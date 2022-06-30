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

const Main = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-size: cover;
`;

const App = () => {
  const [isHambugerOpen, setIsHambugerOpen] = useState(false);

  const handleHambuger = () => {
    document.querySelector(".main__nav").classList.toggle("toggle");

    setIsHambugerOpen(!isHambugerOpen);
  };

  return (
    <div className="container-centered-x">
      <Main className="main">
        <header className="main__header">
          <Link to="/" className="main__link">
            <img src={Logo} alt="Space Logo" className="main__logo" />
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
            }}
          >
            <span className="main__nav__selection">
              <span className="main__nav__selection__number">03</span>
              <span className="main__nav__selection__title">TECHNOLOGY</span>
            </span>
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/destinations" element={<Destinations Data={Data} />} />
          <Route path="/crew" element={<Crew Data={Data} />} />
          <Route path="/technology" element={<Technology Data={Data} />} />
        </Routes>
      </Main>
    </div>
  );
};

export default App;
