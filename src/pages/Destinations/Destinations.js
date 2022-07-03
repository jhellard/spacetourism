import React, { useState } from "react";

import Header from "../../components/Header/Header";

const Destinations = ({ Data }) => {
  const [currentPlanet, setCurrentPlanet] = useState(Data.destinations[0]);
  const Planets = Data.destinations;

  return (
    <div className="destinations container">
      <Header />
      <div className="destinations__pick">
        <span>01</span>
        <h5>PICK YOUR DESTINATION</h5>
      </div>

      <section className="destinations__content flex-c-a">
        <img
          className="destinations__image"
          src={currentPlanet.images.webp}
          alt="Planet"
        />
        <div className='flex-c-a left'>
          <div className="destinations__list">
            {Planets.map((planet, index) =>
              currentPlanet === planet ? (
                <span
                  key={index}
                  onClick={() => setCurrentPlanet(planet)}
                  className="destinations__list__planet destinations__list__planet__active"
                >
                  {planet.name.toUpperCase()}
                </span>
              ) : (
                <span
                  key={index}
                  onClick={() => setCurrentPlanet(planet)}
                  className="destinations__list__planet"
                >
                  {planet.name.toUpperCase()}
                </span>
              )
            )}
          </div>
          <h5 className="destinations__name">
            {currentPlanet.name.toUpperCase()}
          </h5>
          <p className="destinations__description">
            {currentPlanet.description}
          </p>
          <span className="destinations__line"></span>
          <section className="destinations__info">
            <div>
              <h5 className="destinations__info__distance">AVG. DISTANCE</h5>
              <p className="destinations__info__value">
                {currentPlanet.distance.toUpperCase()}
              </p>
            </div>
            <div>
              <h5 className="destinations__info__est">EST. TRAVEL TIME</h5>
              <p className="destinations__info__time">
                {currentPlanet.travel.toUpperCase()}
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
