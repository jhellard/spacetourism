import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/shared/logo.svg";
import CloseHambuger from "../../assets/shared/icon-close.svg";

import Data from "../../data.json";

const Header = () => {
  const [isHambugerOpen, setIsHambugerOpen] = useState(false);
  const Links = Data.links;

  const handleHambuger = () => {
    document.querySelector(".nav").classList.toggle("toggle");

    setIsHambugerOpen(!isHambugerOpen);
  };
  return (
    <header className="header flex align-center">
      <img src={Logo} alt="Space Logo" className="header__logo" />
      <button className="header__menu" onClick={() => handleHambuger()} />
      <span className="nav__line" />
      <nav className="nav flex-c">
        <img
          src={CloseHambuger}
          alt="Close Hamburger Menu"
          className="nav__close"
          onClick={() => handleHambuger()}
        />

        <ul className="nav__list">
          {Links.map((link, index) => (
            <Link
              key={index}
              to={link.url}
              onClick={() => {
                handleHambuger();
              }}
            >
              <li className="nav__title">
                <span className="nav__number">{link.number}</span>
                {link.name}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
