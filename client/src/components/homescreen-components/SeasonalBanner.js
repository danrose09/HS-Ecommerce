import React from "react";

const SeasonalBanner = () => {
  return (
    <div className="season">
      <div className="season__header--container">
        <h1 className="season__header">Winter is Coming</h1>
      </div>

      {/* <button className="season__button">Shop Winter</button> */}
      {/* <div className="season__button--container">
      </div> */}
      <img
        src="/images/winter.jpg"
        className="season__image"
        alt="Seasonal promotion"
      ></img>
    </div>
  );
};

export default SeasonalBanner;
