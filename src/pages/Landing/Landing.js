import React from "react";

import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing__content">
      <h5>SO, YOU WANT TO TRAVEL TO</h5>
      <h1>SPACE</h1>
      <p>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
      <Link to="/destinations">
        <button className="landing__button">
          <span>EXPLORE</span>
        </button>
      </Link>
    </div>
  );
};

export default Landing;
