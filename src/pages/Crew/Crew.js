import React, { useState } from "react";
import styled from "styled-components";

import Doug from "../../assets/crew/image-douglas-hurley.webp";
import Mark from "../../assets/crew/image-mark-shuttleworth.webp";
import Victor from "../../assets/crew/image-victor-glover.webp";
import Anousheh from "../../assets/crew/image-anousheh-ansari.webp";

const CrewList = [Doug, Mark, Victor, Anousheh];

const CrewImage = styled.img`
  content: url(${(props) => props.image});
  height: 222px;
`;

const Crew = ({ Data, handleBackground, BGCrew }) => {
  const [currentCrewImage, setCurrentCrewImage] = useState(Doug);
  const [currentCrew, setCurrentCrew] = useState(Data.crew[0]);
  console.log(Data.crew[0]);
  const Crew = Data.crew;

  const getCorrectCrew = (crew, index) => {
    setCurrentCrew(crew);
    setCurrentCrewImage(CrewList[index]);
  };

  return (
    <div className="crew__content">
      <div className="crew__pick">
        <span>02</span>
        <h5>MEET YOUR CREW</h5>
      </div>
      <div className="crew__image">
        <CrewImage image={currentCrewImage} />
      </div>
      <span className="crew__line"></span>
      <div className="crew__list">
        {Crew.map((member, index) => {
          if (currentCrew === Crew[index]) {
            return (
              <div
                key={index}
                onClick={() => getCorrectCrew(member, index)}
                className="crew__list__member crew__list__member__active"
              ></div>
            );
          } else {
            return (
              <div
                key={index}
                onClick={() => getCorrectCrew(member, index)}
                className="crew__list__member"
              ></div>
            );
          }
        })}
      </div>
      <section className="crew__selected">
        <h5 className="crew__selected__role">
          {currentCrew.role.toUpperCase()}
        </h5>
        <h3 className="crew__selected__name">
          {currentCrew.name.toUpperCase()}
        </h3>
        <p className="crew__selected__bio">{currentCrew.bio}</p>
        <button onClick={() => handleBackground(BGCrew)}>DEBUG</button>
      </section>
    </div>
  );
};

export default Crew;
