import React, { useState } from "react";
import styled from "styled-components";

import Header from "../../components/Header/Header";

import Moon from "../../assets/destination/image-moon.webp";
import Mars from "../../assets/destination/image-mars.webp";
import Europa from "../../assets/destination/image-europa.webp";
import Titan from "../../assets/destination/image-titan.webp";

const PlanetsList = [Moon, Mars, Europa, Titan];

const PlanetImage = styled.img`
  content: url(${(props) => props.image});
  max-height: 170px;
`;

const Destinations = ({ Data }) => {
  const [currentPlanetImage, setCurrentPlanetImage] = useState(Moon);
  const [currentPlanet, setCurrentPlanet] = useState(Data.destinations[0]);
  const Planets = Data.destinations;

  const getCorrectPlanet = (planet, index) => {
    setCurrentPlanet(planet);
    setCurrentPlanetImage(PlanetsList[index]);
  };

  return (
    <div className="destinations container">
      <Header />
      <div className="destinations__pick">
        <span>01</span>
        <h5>PICK YOUR DESTINATION</h5>
      </div>
      <PlanetImage image={currentPlanetImage} />
      <div className="destinations__list">
        {Planets.map((planet, index) =>
          currentPlanet === planet ? (
            <h5
              key={index}
              onClick={() => getCorrectPlanet(planet, index)}
              className="destinations__list__planet destinations__list__planet__active"
            >
              {planet.name.toUpperCase()}
            </h5>
          ) : (
            <h5
              key={index}
              onClick={() => getCorrectPlanet(planet, index)}
              className="destinations__list__planet"
            >
              {planet.name.toUpperCase()}
            </h5>
          )
        )}
      </div>
      <h5 className="destinations__name">{currentPlanet.name.toUpperCase()}</h5>
      <p className="destinations__description">{currentPlanet.description}</p>
      <span className="destinations__line"></span>
      <section className="destinations__info">
        <h5 className="destinations__info__distance">AVG. DISTANCE</h5>
        <p className="destinations__info__value">
          {currentPlanet.distance.toUpperCase()}
        </p>
        <h5 className="destinations__info__est">EST. TRAVEL TIME</h5>
        <p className="destinations__info__time">
          {currentPlanet.travel.toUpperCase()}
        </p>
      </section>
    </div>
  );
};

export default Destinations;
