import React from "react";
import map from "../map.png";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={props.item.imageUrl} alt="country-scene" />
      </div>

      <div className="card__content">
        <div className="card__location">
          <span>
            <img src={map} alt="map-icon" />
          </span>
          <span className="card__country">{props.item.location} </span>
          <a className="card__link" href="google.com">
            View on Google Maps
          </a>
        </div>

        <h1>{props.item.title}</h1>
        <p>
          {props.item.startDate} - {props.item.endDate}
        </p>

        <p>{props.item.description}</p>
      </div>
    </div>
  );
};

export default Card;
