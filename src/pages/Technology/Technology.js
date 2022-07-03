import React, { useState } from "react";
import useCurrentWidth from "../../components/Hooks/getWidth";

import Header from "../../components/Header/Header";

const Technology = ({ Data }) => {
  const [currentTech, setCurrentTech] = useState(Data.technology[0]);
  const Tech = Data.technology;

  return (
    <div className="tech container">
      <Header />
      <div className="tech__pick">
        <span>03</span>
        <h5>SPACE LAUNCH 101</h5>
      </div>
      <img
        className="tech__image"
        src={
          useCurrentWidth() < 1200
            ? currentTech.images.landscape
            : currentTech.images.portrait
        }
        alt="Technology Portrayed"
      />
      <div className="tech__list flex">
        {Tech.map((tech, index) =>
          currentTech === tech ? (
            <span
              key={index}
              onClick={() => setCurrentTech(tech)}
              className="tech__list__member tech__list__member__active"
            >
              {index + 1}
            </span>
          ) : (
            <span
              key={index}
              onClick={() => setCurrentTech(tech)}
              className="tech__list__member"
            >
              {index + 1}
            </span>
          )
        )}
      </div>
      <h5 className="tech__term">THE TERMINOLOGY...</h5>
      <h3 className="tech__name">{currentTech.name.toUpperCase()}</h3>
      <p className="tech__description">{currentTech.description}</p>
    </div>
  );
};

export default Technology;
