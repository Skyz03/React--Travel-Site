import React from "react";
import map from "../map.png";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={props.item.imageUrl} alt="country-scene" />
      </div>

      <div className="card__content">
        {/* Location section start  */}
        <div className="card__location">
          <span>
            <img src={map} alt="map-icon" />
          </span>
          <span className="card__country">{props.item.location} </span>
          <a className="card__link" href="google.com">
            View on Google Maps
          </a>
        </div>
        {/* Location section end */}

        <h1 className="card__title">{props.item.title}</h1>
        <p className="card__date">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="card__des">{props.item.description}</p>
      </div>
    </div>
  );
};

export default Card;
