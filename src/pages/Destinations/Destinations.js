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
  width: 170px;
  height: 170px;
`;

const Destinations = ({ Data, Links, handleHamburger }) => {
  const [currentPlanetImage, setCurrentPlanetImage] = useState(Moon);
  const [currentPlanet, setCurrentPlanet] = useState(Data.destinations[0]);
  const Planets = Data.destinations;

  const getCorrectPlanet = (planet, index) => {
    setCurrentPlanet(planet);
    setCurrentPlanetImage(PlanetsList[index]);
  };

  return (
    <div className="destinations">
      <Header Links={Links} handleHambuger={handleHamburger} />
      <div className="destinations__pick">
        <span>01</span>
        <h5>PICK YOUR DESTINATION</h5>
      </div>
      <div className="destinations__image">
        <PlanetImage image={currentPlanetImage} />
      </div>
      <div className="destinations__list">
        {Planets.map((planet, index) => {
          if (currentPlanet === planet) {
            return (
              <div
                key={index}
                onClick={() => getCorrectPlanet(planet, index)}
                className="destinations__list__planet"
              >
                <h5 className="destinations__list__name destinations__list__name__active">
                  {planet.name.toUpperCase()}
                </h5>
              </div>
            );
          } else {
            return (
              <div
                key={index}
                onClick={() => getCorrectPlanet(planet, index)}
                className="destinations__list__planet"
              >
                <h5 className="destinations__list__name">
                  {planet.name.toUpperCase()}
                </h5>
              </div>
            );
          }
        })}
      </div>
      <section className="destinations__selected">
        <h5 className="destinations__selected__name">
          {currentPlanet.name.toUpperCase()}
        </h5>
        <p className="destinations__selected__description">
          {currentPlanet.description}
        </p>
      </section>
      <span className="destinations__selected__line"></span>
      <div className="destinations__selected__info">
        <div>
          <h5 className="destinations__selected__info__distance">
            AVG. DISTANCE
          </h5>
          <p className="destinations__selected__info__value">
            {currentPlanet.distance.toUpperCase()}
          </p>
        </div>
        <div>
          <h5 className="destinations__selected__info__est">
            EST. TRAVEL TIME
          </h5>
          <p className="destinations__selected__info__time">
            {currentPlanet.travel.toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
