import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/shared/logo.svg";
import Hambuger from "../../assets/shared/icon-hamburger.svg";
import CloseHambuger from "../../assets/shared/icon-close.svg";

import Data from "../../data.json";

const Header = () => {
  const [isHambugerOpen, setIsHambugerOpen] = useState(false);
  const Links = Data.links;

  const handleHambuger = () => {
    document.querySelector(".header__nav").classList.toggle("toggle");

    setIsHambugerOpen(!isHambugerOpen);
  };
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <img src={Logo} alt="Space Logo" className="header__logo" />
      </Link>
      <img
        src={Hambuger}
        alt="Hamburger Menu"
        className="header__hamburger"
        onClick={() => handleHambuger()}
      />
      <nav className="header__nav">
        <img
          src={CloseHambuger}
          alt="Close Hamburger Menu"
          className="header__close"
          onClick={() => handleHambuger()}
        />
        {Links.map((link, index) => (
          <Link
            key={index}
            to={link.url}
            className="header__route"
            onClick={() => {
              handleHambuger();
            }}
          >
            <span className="header__nav__selection">
              <span className="header__nav__selection__number">
                {link.number}
              </span>
              <span className="header__nav__selection__title">{link.name}</span>
            </span>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
