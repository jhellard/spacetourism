import React, { useState } from "react";
import styled from "styled-components";

import Header from "../../components/Header/Header";

import Launch from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import SpacePort from "../../assets/technology/image-spaceport-landscape.jpg";
import Capsule from "../../assets/technology/image-space-capsule-landscape.jpg";

const TechList = [Launch, SpacePort, Capsule];

const TechImage = styled.img`
  content: url(${(props) => props.image});
  width: 100%;
  margin-bottom: 1rem;
`;

const Technology = ({ Data }) => {
  const [currentTechImage, setCurrentTechImage] = useState(Launch);
  const [currentTech, setCurrentTech] = useState(Data.technology[0]);
  const Tech = Data.technology;

  const getCorrectTech = (tech, index) => {
    setCurrentTech(tech);
    setCurrentTechImage(TechList[index]);
  };

  return (
    <div className="tech container">
      <Header />
      <div className="tech__pick">
        <span>03</span>
        <h5>SPACE LAUNCH 101</h5>
      </div>
      <TechImage image={currentTechImage} />
      <div className="tech__list flex">
        {Tech.map((tech, index) =>
          currentTech === tech ? (
            <span
              key={index}
              onClick={() => getCorrectTech(tech, index)}
              className="tech__list__member tech__list__member__active"
            >
              {index + 1}
            </span>
          ) : (
            <span
              key={index}
              onClick={() => getCorrectTech(tech, index)}
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
