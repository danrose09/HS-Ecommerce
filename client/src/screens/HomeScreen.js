import React from "react";
import SeasonalBanner from "../components/homescreen-components/SeasonalBanner";
import NewPatternsCarousel from "../components/NewPatternsCarousel";

const HomeScreen = () => {
  return (
    <div className="homescreen">
      <SeasonalBanner />
      <NewPatternsCarousel />
    </div>
  );
};

export default HomeScreen;
