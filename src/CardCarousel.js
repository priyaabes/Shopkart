import React from "react";

const CardCarousel = ({ props }) => {
  return (
    <div className="product_card">
      <div style={{ height: 250 }}>
        <img src={props.image} style={{ width: 125, height: 125 }} />
        <h2 style={{ fontSize: "1rem", fontWeight: "bold" }}>{props.title}</h2>
      </div>
      <p>{props.description}</p>
      <p style={{ fontWeight: "bold" }}>${props.price}</p>
    </div>
  );
};

export default CardCarousel;
