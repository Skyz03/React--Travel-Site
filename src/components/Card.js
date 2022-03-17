import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={props.item.imageUrl} alt="" />
      </div>

      <div className="card__content">
        <div className="card__location">
          {/* img icon for location goes here  */}
          <span>{props.item.location} </span>
          <a>View on Google Maps</a>
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
