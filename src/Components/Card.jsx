import React from "react";
import "./Card.css";

const Card = ({title,image, vote_average}) => {
  const cutTitle = title.slice(0, 10) + "...";
  const rating = Math.round(vote_average * 10)/10;
    
  return (
    <div>
      <div class="card">
        <div class="rating">{rating}</div>
        <img src={image}alt="Card Image" />
        <div class="title">{cutTitle}</div>
      </div>
    </div>
  );
};
export default Card;