import React, { useState } from "react";

import Header from "../../components/Header/Header";

import Doug from "../../assets/crew/image-douglas-hurley.webp";
import Mark from "../../assets/crew/image-mark-shuttleworth.webp";
import Victor from "../../assets/crew/image-victor-glover.webp";
import Anousheh from "../../assets/crew/image-anousheh-ansari.webp";

const CrewList = [Doug, Mark, Victor, Anousheh];

const Crew = ({ Data }) => {
  const [currentCrewImage, setCurrentCrewImage] = useState(Doug);
  const [currentCrew, setCurrentCrew] = useState(Data.crew[0]);
  const Crew = Data.crew;

  const getCorrectCrew = (crew, index) => {
    setCurrentCrew(crew);
    setCurrentCrewImage(CrewList[index]);
  };

  return (
    <div className="crew container">
      <Header />
      <div className="crew__pick">
        <span>02</span>
        <h5>MEET YOUR CREW</h5>
      </div>
      <img
        className="crew__image"
        src={currentCrewImage}
        alt="Crew Member"
      />
      <span className="crew__line"></span>
      <div className="crew__list">
        {Crew.map((member, index) =>
          currentCrew === member ? (
            <span
              key={index}
              onClick={() => getCorrectCrew(member, index)}
              className="crew__list__member crew__list__member__active"
            />
          ) : (
            <span
              key={index}
              onClick={() => getCorrectCrew(member, index)}
              className="crew__list__member"
            />
          )
        )}
      </div>
      <h5 className="crew__role">{currentCrew.role.toUpperCase()}</h5>
      <h3 className="crew__name">{currentCrew.name.toUpperCase()}</h3>
      <p className="crew__bio">{currentCrew.bio}</p>
    </div>
  );
};

export default Crew;
