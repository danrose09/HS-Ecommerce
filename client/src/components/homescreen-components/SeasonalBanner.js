import React from "react";

const SeasonalBanner = () => {
  return (
    <div className="season">
      <img
        src="/images/winter.jpg"
        className="season__image"
        alt="Seasonal promotion"
      ></img>

      <h1 className="season__header">Winter is Coming</h1>

      <button className="season__button">Shop Winter</button>
    </div>
  );
};

export default SeasonalBanner;
