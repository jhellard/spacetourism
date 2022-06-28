import React, { useState } from "react";
import styled from "styled-components";

import Launch from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import SpacePort from "../../assets/technology/image-spaceport-landscape.jpg";
import Capsule from "../../assets/technology/image-space-capsule-landscape.jpg";

const TechList = [Launch, SpacePort, Capsule];

const TechImage = styled.img`
  content: url(${(props) => props.image});
  height: 170px;
  margin-bottom: 1rem;
`;

const Technology = ({ Data, handleBackground, BGTech }) => {
  const [currentTechImage, setCurrentTechImage] = useState(Launch);
  const [currentTech, setCurrentTech] = useState(Data.technology[0]);
  const Tech = Data.technology;

  const getCorrectTech = (tech, index) => {
    setCurrentTech(tech);
    setCurrentTechImage(TechList[index]);
  };

  return (
    <div className="tech__content">
      <div className="tech__pick">
        <span>03</span>
        <h5>SPACE LAUNCH 101</h5>
      </div>
      <div className="tech__image">
        <TechImage image={currentTechImage} />
      </div>
      <div className="tech__list">
        {Tech.map((tech, index) => {
          if (currentTech === Tech[index]) {
            return (
              <div
                key={index}
                onClick={() => getCorrectTech(tech, index)}
                className="tech__list__member tech__list__member__active"
              >
                <span>{index + 1}</span>
              </div>
            );
          } else {
            return (
              <div
                key={index}
                onClick={() => getCorrectTech(tech, index)}
                className="tech__list__member"
              >
                <span>{index + 1}</span>
              </div>
            );
          }
        })}
      </div>
      <section className="tech__selected">
        <h5 className="tech__selected__term">THE TERMINOLOGY...</h5>
        <h3 className="tech__selected__name">
          {currentTech.name.toUpperCase()}
        </h3>
        <p className="tech__selected__description">{currentTech.description}</p>
        <button onClick={() => handleBackground(BGTech)}>DEBUG</button>
      </section>
    </div>
  );
};

export default Technology;
