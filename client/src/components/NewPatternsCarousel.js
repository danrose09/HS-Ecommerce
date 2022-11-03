import React from "react";
import carouselItems from "../data/carouselItems";

const NewPatternsCarousel = () => {
  const allCarouselItems = carouselItems.map((item, index) => {
    return (
      <div className="new-patterns__carousel--item">
        <button className="new-patterns__carousel--item--button">Shop</button>

        <img
          src={item.image}
          className="new-patterns__carousel--item--image"
          alt="Item"
          key={index}
        ></img>
        <h4 className="new-patterns__carousel--item--title">{item.name}</h4>
        <p className="new-patterns__carousel--item--description">
          {item.description}
        </p>
        <p className="new-patterns__carousel--item--price">{item.price}</p>
      </div>
    );
  });

  return (
    <div className="new-patterns">
      <h3 className="section-heading">New Patterns</h3>
      <div className="new-patterns__carousel">{allCarouselItems}</div>
    </div>
  );
};

export default NewPatternsCarousel;
